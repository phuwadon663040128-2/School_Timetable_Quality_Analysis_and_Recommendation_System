(function () {
  const state = {
    manualPage: null,
    observerBusy: false
  };

  const contentGrid = document.getElementById("contentGrid") || document.querySelector(".content-grid");
  const workspace = document.getElementById("workspace");
  const pageTitle = document.getElementById("pageTitle");
  const roleSelect = document.getElementById("roleSelect");
  const sideNav = document.getElementById("sideNav");

  const observer = new MutationObserver(() => applyFeedbackLayer());
  document.addEventListener("DOMContentLoaded", () => {
    observer.observe(document.body, { childList: true, subtree: true });
    applyFeedbackLayer();
  });

  function applyFeedbackLayer() {
    if (state.observerBusy) return;
    state.observerBusy = true;
    window.requestAnimationFrame(() => {
      injectSettingsMenu();
      applyLayoutRules();
      replaceDashboardIfNeeded();
      replaceScheduleIfNeeded();
      wireFeedbackActions();
      refreshIcons();
      state.observerBusy = false;
    });
  }

  function activePageKey() {
    return document.querySelector(".nav-button.active")?.dataset.page || state.manualPage || "";
  }

  function applyLayoutRules() {
    const role = roleSelect?.value || "";
    const page = activePageKey();
    const shouldWide = page === "masterData" && ["admin", "academicStaff"].includes(role);
    contentGrid?.classList.toggle("feedback-wide", shouldWide);
  }

  function injectSettingsMenu() {
    if (!sideNav || sideNav.querySelector('[data-feedback-page="settings"]')) return;
    const manualButton = Array.from(sideNav.querySelectorAll(".nav-button")).find((button) => button.textContent.includes("คู่มือ"));
    const button = document.createElement("button");
    button.className = "nav-button";
    button.type = "button";
    button.dataset.feedbackPage = "settings";
    button.innerHTML = '<i data-lucide="settings"></i><span class="nav-label">ตั้งค่า</span>';
    button.addEventListener("click", () => renderSettingsPage());
    if (manualButton) sideNav.insertBefore(button, manualButton);
    else sideNav.appendChild(button);
  }

  function renderSettingsPage() {
    state.manualPage = "settings";
    sideNav.querySelectorAll(".nav-button").forEach((button) => button.classList.remove("active"));
    sideNav.querySelector('[data-feedback-page="settings"]')?.classList.add("active");
    pageTitle.textContent = "ตั้งค่า";
    contentGrid?.classList.remove("feedback-wide");
    workspace.innerHTML = tableSection("ตั้งค่า", "ตั้งค่าปีการศึกษา ภาคเรียน และรอบจัดตาราง", ["หมวด", "ค่า", "สถานะ"], [
      ["ปีการศึกษา", "2569", "ใช้งาน"],
      ["ภาคเรียน", "1/2569", "ใช้งาน"],
      ["ช่วงเปิดจัดตาราง", "ก่อนเปิดเทอม", "ต้องตรวจ"],
      ["รูปแบบคาบ", "8 คาบ + พักกลางวัน", "ใช้งาน"]
    ]);
    refreshIcons();
  }

  function replaceDashboardIfNeeded() {
    const page = activePageKey();
    const role = roleSelect?.value || "";
    if (!workspace || page !== "dashboard" || !["admin", "academicStaff"].includes(role)) {
      if (workspace?.dataset.feedbackView === "dashboard") workspace.dataset.feedbackView = "";
      return;
    }
    if (workspace.dataset.feedbackView === "dashboard") return;
    workspace.dataset.feedbackView = "dashboard";
    workspace.innerHTML = `
      <div class="feedback-dashboard">
        <section class="section">
          <div class="section-header">
            <div>
              <h2>ภาพรวมงานจัดตาราง</h2>
              <p>ลดข้อมูลที่ไม่จำเป็น เหลือเฉพาะสิ่งที่ต้องตัดสินใจหรือกดไปทำต่อ</p>
            </div>
            <div class="actions">
              <button class="button primary" data-feedback-go="timetable"><i data-lucide="calendar-days"></i> เปิดตาราง</button>
              <button class="button" data-feedback-go="masterData"><i data-lucide="database"></i> ข้อมูลกลาง</button>
            </div>
          </div>
          <div class="section-body">
            <div class="metrics-grid">
              ${metric("ครู", "28", "ข้อมูลที่ใช้งาน")}
              ${metric("ห้องเรียน", "18", "ม.1 ถึง ม.6")}
              ${metric("ตารางชน", "0", "ตารางชนรุนแรง")}
              ${metric("คุณภาพ", "82/100", "พร้อมส่งตรวจ")}
            </div>
          </div>
        </section>
        <section class="section">
          <div class="section-header">
            <div>
              <h2>งานที่ต้องดำเนินการ</h2>
              <p>แสดงเฉพาะรายการที่มีผลกับการจัดตารางจริง</p>
            </div>
          </div>
          <div class="section-body feedback-split">
            <div class="calm-list">
              ${calm("success", "ข้อมูลครูพร้อม", "28 คนเปิดใช้งานและมี quota ครบ", "ผ่าน")}
              ${calm("warning", "รายวิชาขาดครูหลัก", "2 รายวิชาต้องระบุครูผู้รับผิดชอบ", "ต้องตรวจ")}
              ${calm("warning", "ปฏิทินกิจกรรม", "ยืนยันวันภาษาไทยและวันสอบก่อนเผยแพร่", "ต้องตรวจ")}
            </div>
            ${statusTimeline()}
          </div>
        </section>
      </div>`;
  }

  function replaceScheduleIfNeeded() {
    const page = activePageKey();
    const schedulePages = ["timetable", "myTimetable", "homeroomTimetable", "reports"];
    if (!workspace || !schedulePages.includes(page)) {
      if (workspace?.dataset.feedbackView?.startsWith("schedule:")) workspace.dataset.feedbackView = "";
      return;
    }
    if (workspace.dataset.feedbackView === `schedule:${page}`) return;
    const titleMap = {
      timetable: "จัดตารางสอน: ม.2/1",
      myTimetable: "ตารางสอนของฉัน",
      homeroomTimetable: "ตารางเรียนของห้อง ม.2/1",
      reports: "รายงานตารางเรียน"
    };
    workspace.dataset.feedbackView = `schedule:${page}`;
    workspace.innerHTML = `
      <section class="section">
        <div class="section-header">
          <div>
            <h2>${titleMap[page]}</h2>
            <p>รูปแบบตารางปรับให้ใกล้ตัวอย่าง: เห็นเวลา คาบ รายวิชา ครู และห้องในช่องเดียว</p>
          </div>
          <div class="actions">
            <button class="button"><i data-lucide="printer"></i> พิมพ์</button>
            <button class="button primary"><i data-lucide="file-down"></i> ส่งออก PDF</button>
          </div>
        </div>
        <div class="section-body">${scheduleGrid()}</div>
      </section>`;
  }

  function wireFeedbackActions() {
    workspace?.querySelectorAll("[data-feedback-go]").forEach((button) => {
      if (button.dataset.wired) return;
      button.dataset.wired = "true";
      button.addEventListener("click", () => {
        document.querySelector(`.nav-button[data-page="${button.dataset.feedbackGo}"]`)?.click();
      });
    });
  }

  function scheduleGrid() {
    const days = ["จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์"];
    const subjects = [
      ["ค21104", "คณิตศาสตร์ 1", "ครูสมชาย", "ห้อง 011"],
      ["อ21102", "ภาษาอังกฤษ 2", "ครูวารี", "ห้อง 011"],
      ["พ21102", "สุขศึกษา 1", "ครูกานต์", "ห้อง 011"],
      ["ส21104", "สังคมศึกษา 1", "ครูวราภรณ์", "ห้อง 011"],
      ["ว21102", "วิทยาศาสตร์ 1", "ครูมาลี", "ห้อง 011"],
      ["ง20221", "วิทยาการคำนวณ", "ครูกิตติ", "ห้อง 011"],
      ["ศ20221", "ดนตรี-นาฏศิลป์", "ครูเพ็ญ", "ห้อง 011"],
      ["PLC", "กิจกรรม PLC", "ครูประจำชั้น", "ห้อง 011"]
    ];
    const morning = ["08.30 - 09.20", "09.20 - 10.10", "10.30 - 11.20", "11.20 - 12.10"];
    const afternoon = ["13.10 - 14.00", "14.00 - 14.50", "14.50 - 15.10", "15.10 - 16.00"];
    const header = `<tr><th class="day-head">เวลา</th>${[1, 2, 3, 4].map((period, index) => `<th class="period-head">${period}<small>${morning[index]}</small></th>`).join("")}<th class="break-head">พัก<small>12.10 - 13.10</small></th>${[5, 6, 7, 8].map((period, index) => `<th class="period-head">${period}<small>${afternoon[index]}</small></th>`).join("")}</tr>`;
    const rows = days.map((day, dayIndex) => {
      const rowSubjects = subjects.slice(dayIndex).concat(subjects).slice(0, 8);
      return `<tr><td class="day-cell">${day}</td>${rowSubjects.slice(0, 4).map(slotCell).join("")}<td class="break-cell"><span class="break-icon"><i data-lucide="utensils"></i></span><strong>พักกลางวัน</strong><br><span class="slot-room">12.10 - 13.10</span></td>${rowSubjects.slice(4, 8).map(slotCell).join("")}</tr>`;
    }).join("");
    return `<div class="schedule-frame"><table class="school-schedule"><thead>${header}</thead><tbody>${rows}</tbody></table></div>`;
  }

  function slotCell([code, title, teacher, room]) {
    return `<td><span class="slot-code">${code}</span><span class="slot-title">${title}</span><span class="slot-teacher">${teacher}</span><span class="slot-room">${room}</span></td>`;
  }

  function metric(label, value, sub) {
    return `<div class="metric"><span class="metric-label">${label}</span><span class="metric-value">${value}</span><p class="metric-sub">${sub}</p></div>`;
  }

  function calm(type, title, detail, status) {
    return `<div class="calm-item"><span class="dot ${type}"></span><span><strong>${title}</strong><p>${detail}</p></span><span class="badge ${type === "warning" ? "badge-warning" : "badge-success"}">${status}</span></div>`;
  }

  function statusTimeline() {
    return `<div class="panel-list"><div class="panel-item"><strong>ฉบับร่าง</strong><p><span class="badge badge-success">ปัจจุบัน</span></p></div><div class="panel-item"><strong>ส่งอนุมัติแล้ว</strong><p><span class="badge badge-muted">รอดำเนินการ</span></p></div><div class="panel-item"><strong>เผยแพร่แล้ว</strong><p><span class="badge badge-muted">รอดำเนินการ</span></p></div></div>`;
  }

  function tableSection(title, subtitle, headers, rows) {
    return `<section class="section"><div class="section-header"><div><h2>${title}</h2><p>${subtitle}</p></div></div><div class="section-body"><div class="table-wrap"><table><thead><tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${formatCell(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div></div></section>`;
  }

  function formatCell(cell) {
    if (["ใช้งาน", "ผ่าน"].includes(cell)) return `<span class="badge badge-success">${cell}</span>`;
    if (["ต้องตรวจ", "warning"].includes(cell)) return `<span class="badge badge-warning">ต้องตรวจ</span>`;
    return cell;
  }

  function refreshIcons() {
    if (window.lucide) window.lucide.createIcons({ attrs: { width: 17, height: 17, strokeWidth: 2 } });
  }
})();
