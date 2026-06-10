(function () {
  const roles = window.RoleConfig;
  const data = window.MockData;

  const state = {
    roleKey: "academicStaff",
    pageKey: "dashboard",
    timetableStatus: data.timetable.status,
    selectedCell: data.timetable.selectedCell,
    hardConflictCount: data.metrics.hardConflicts,
    warnings: data.metrics.warnings,
    qualityScore: data.metrics.qualityScore,
    reviewSaved: false,
    lastMessage: ""
  };

  const pageTitles = {
    dashboard: "Dashboard",
    departmentDashboard: "Dashboard กลุ่มสาระ",
    executiveDashboard: "Executive Dashboard",
    users: "User & Role",
    masterData: "Master Data",
    assignments: "Teaching Assignment",
    departmentWorkload: "Teacher Workload",
    timetable: "Timetable Editor",
    quality: "Conflict & Quality",
    recommendations: "Recommendation",
    review: "Department Review",
    approval: "Approval Queue",
    reports: "Reports",
    audit: "Audit Log",
    myTimetable: "My Timetable",
    myWorkload: "My Workload",
    homeroomTimetable: "Class Timetable",
    classTeachers: "Subject Teachers"
  };

  const pageRenderers = {
    dashboard: renderDashboard,
    departmentDashboard: renderDepartmentDashboard,
    executiveDashboard: renderExecutiveDashboard,
    users: renderUsers,
    masterData: renderMasterData,
    assignments: renderAssignments,
    departmentWorkload: renderDepartmentWorkload,
    timetable: renderTimetable,
    quality: renderQuality,
    recommendations: renderRecommendations,
    review: renderReview,
    approval: renderApproval,
    reports: renderReports,
    audit: renderAudit,
    myTimetable: renderTeacherTimetable,
    myWorkload: renderMyWorkload,
    homeroomTimetable: renderHomeroomTimetable,
    classTeachers: renderClassTeachers
  };

  const workspace = document.getElementById("workspace");
  const contextPanel = document.getElementById("contextPanel");
  const sideNav = document.getElementById("sideNav");
  const roleSelect = document.getElementById("roleSelect");
  const roleNote = document.getElementById("roleNote");
  const pageTitle = document.getElementById("pageTitle");
  const statusPill = document.getElementById("statusPill");

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    roleSelect.innerHTML = Object.entries(roles)
      .map(([key, role]) => `<option value="${key}">${role.thaiLabel}</option>`)
      .join("");
    roleSelect.value = state.roleKey;
    roleSelect.addEventListener("change", () => {
      state.roleKey = roleSelect.value;
      state.pageKey = roles[state.roleKey].defaultPage;
      showToast(`เปลี่ยนบทบาทเป็น ${roles[state.roleKey].thaiLabel}`);
      render();
    });
    render();
  }

  function render() {
    const role = roles[state.roleKey];
    const pageExists = role.menus.some(([key]) => key === state.pageKey);
    if (!pageExists) state.pageKey = role.defaultPage;

    pageTitle.textContent = pageTitles[state.pageKey] || "Mock-up";
    statusPill.textContent = state.timetableStatus;
    statusPill.className = `status-pill ${statusClass(state.timetableStatus)}`;

    renderRoleNote(role);
    renderNav(role);
    renderContext(role);

    const renderer = pageRenderers[state.pageKey] || renderDashboard;
    workspace.innerHTML = renderer(role);
    wirePageActions();
    refreshIcons();
  }

  function renderRoleNote(role) {
    roleNote.innerHTML = `
      <strong>${role.thaiLabel}</strong>
      <p>${role.badge}: ${role.description}</p>
    `;
  }

  function renderNav(role) {
    sideNav.innerHTML = role.menus
      .map(([key, label, icon]) => {
        const active = key === state.pageKey ? "active" : "";
        return `
          <button class="nav-button ${active}" data-page="${key}" type="button">
            <i data-lucide="${icon}"></i>
            <span>${label}</span>
          </button>
        `;
      })
      .join("");

    sideNav.querySelectorAll(".nav-button").forEach((button) => {
      button.addEventListener("click", () => {
        state.pageKey = button.dataset.page;
        render();
      });
    });
  }

  function renderContext(role) {
    const permissions = role.permissions
      .map((permission) => {
        return `<li><span>${permission}</span><span class="badge badge-success">on</span></li>`;
      })
      .join("");

    contextPanel.innerHTML = `
      <section class="section">
        <div class="section-header">
          <div>
            <h2>${role.thaiLabel}</h2>
            <p>${role.description}</p>
          </div>
          <span class="badge badge-info">${role.badge}</span>
        </div>
        <div class="section-body">
          <ul class="permission-list">${permissions}</ul>
        </div>
      </section>
      <section class="section" style="margin-top: 14px;">
        <div class="section-header">
          <div>
            <h2>สถานะตาราง</h2>
            <p>${data.timetable.name}</p>
          </div>
        </div>
        <div class="section-body panel-list">
          <div class="panel-item">
            <strong>Status</strong>
            <p><span class="status-pill ${statusClass(state.timetableStatus)}">${state.timetableStatus}</span></p>
          </div>
          <div class="panel-item">
            <strong>Publish gate</strong>
            <p>${state.hardConflictCount === 0 ? "ผ่าน ไม่มี hard conflict" : "ยัง publish ไม่ได้ มี hard conflict"}</p>
          </div>
          <div class="panel-item">
            <strong>Quality Score</strong>
            <p>${state.qualityScore}/100, warning ${state.warnings} รายการ</p>
          </div>
        </div>
      </section>
    `;
  }

  function renderDashboard(role) {
    return `
      <div class="stack">
        ${renderMetricSection("ภาพรวมงานจัดตาราง", [
          ["ครู", data.metrics.teachers, "ข้อมูล active"],
          ["ห้องเรียน", data.metrics.classSections, "ม.1 ถึง ม.6"],
          ["Conflict", state.hardConflictCount, "hard conflict"],
          ["Quality", `${state.qualityScore}/100`, "พร้อมส่งตรวจ"]
        ])}
        <section class="section">
          <div class="section-header">
            <div>
              <h2>งานที่ต้องดำเนินการ</h2>
              <p>มุมมองสำหรับ ${role.thaiLabel}</p>
            </div>
            <div class="actions">
              <button class="button primary" data-go="timetable"><i data-lucide="calendar-days"></i> เปิดตาราง</button>
              <button class="button" data-go="quality"><i data-lucide="activity"></i> วิเคราะห์</button>
            </div>
          </div>
          <div class="section-body split">
            ${renderPanelList([
              ["Review pending", "หัวหน้ากลุ่มสาระคณิตศาสตร์ยังไม่ได้บันทึก review", "warning"],
              ["Ready to submit", "ตาราง ม.ต้น ไม่มี hard conflict", "passed"],
              ["Calendar warning", "มีรายการทับกิจกรรมวันภาษาไทย 1 รายการ", "warning"]
            ])}
            ${renderStatusTimeline()}
          </div>
        </section>
      </div>
    `;
  }

  function renderDepartmentDashboard() {
    return `
      <div class="stack">
        ${renderMetricSection("ภาพรวมกลุ่มสาระคณิตศาสตร์", [
          ["ครูในกลุ่ม", 6, "active"],
          ["ภาระสอน", "84", "คาบ/สัปดาห์"],
          ["Warning", 2, "เฉพาะกลุ่มสาระ"],
          ["Reviewed", state.reviewSaved ? "yes" : "no", "สถานะ review"]
        ])}
        <section class="section">
          <div class="section-header">
            <div>
              <h2>รายการที่ควรตรวจ</h2>
              <p>ขอบเขตข้อมูลจำกัดเฉพาะกลุ่มสาระที่รับผิดชอบ</p>
            </div>
            <button class="button primary" data-go="review"><i data-lucide="message-square-text"></i> Review ตาราง</button>
          </div>
          <div class="section-body">
            ${renderReviewTable()}
          </div>
        </section>
      </div>
    `;
  }

  function renderExecutiveDashboard() {
    return `
      <div class="stack">
        ${renderMetricSection("ภาพรวมผู้บริหาร", [
          ["Published", state.timetableStatus === "published" ? "yes" : "no", "สถานะเผยแพร่"],
          ["Quality", `${state.qualityScore}/100`, "ภาพรวม"],
          ["Hard conflict", state.hardConflictCount, "ต้องเป็น 0"],
          ["Warnings", state.warnings, "ติดตาม"]
        ])}
        <section class="section">
          <div class="section-header">
            <div>
              <h2>Read-only summary</h2>
              <p>มุมมองรายงานภาพรวมและสถานะตารางล่าสุด</p>
            </div>
            <span class="badge badge-muted">view-only</span>
          </div>
          <div class="section-body">
            ${renderQualityBreakdown()}
          </div>
        </section>
      </div>
    `;
  }

  function renderUsers() {
    return `
      <section class="section">
        <div class="section-header">
          <div>
            <h2>User & Role</h2>
            <p>กำหนดบทบาท สิทธิ์ และขอบเขตการเข้าถึง</p>
          </div>
          <button class="button primary"><i data-lucide="user-plus"></i> เพิ่มผู้ใช้</button>
        </div>
        <div class="section-body">
          ${renderSimpleTable(["Role", "หน้าที่", "Permission หลัก"], Object.values(roles).map((role) => [
            role.thaiLabel,
            role.description,
            role.permissions.slice(0, 3).join(", ")
          ]))}
        </div>
      </section>
    `;
  }

  function renderMasterData() {
    return `
      <section class="section">
        <div class="section-header">
          <div>
            <h2>Master Data</h2>
            <p>ข้อมูลกลางสำหรับ timetable workflow</p>
          </div>
          <button class="button primary"><i data-lucide="plus"></i> เพิ่มข้อมูล</button>
        </div>
        <div class="section-body">
          ${renderSimpleTable(["ประเภท", "จำนวน", "สถานะ", "หมายเหตุ"], data.masterRows)}
        </div>
      </section>
    `;
  }

  function renderAssignments() {
    return `
      <section class="section">
        <div class="section-header">
          <div>
            <h2>Teaching Assignment</h2>
            <p>กำหนดครู วิชา ห้องเรียน จำนวนคาบ และประเภทห้อง</p>
          </div>
          <button class="button primary"><i data-lucide="plus"></i> เพิ่มภาระสอน</button>
        </div>
        <div class="section-body">
          ${renderSimpleTable(["ครู", "วิชา", "ห้อง", "คาบ", "ห้องที่ต้องใช้", "กลุ่มสาระ"], data.assignments)}
        </div>
      </section>
    `;
  }

  function renderDepartmentWorkload() {
    return `
      <section class="section">
        <div class="section-header">
          <div>
            <h2>Teacher Workload</h2>
            <p>มุมมองหัวหน้ากลุ่มสาระ ใช้ตรวจภาระครูก่อน review</p>
          </div>
        </div>
        <div class="section-body">
          ${renderReviewTable()}
        </div>
      </section>
    `;
  }

  function renderTimetable() {
    return `
      <div class="stack">
        <section class="section">
          <div class="section-header">
            <div>
              <h2>จัดตาราง Draft: ${data.timetable.classSection}</h2>
              <p>เลือก cell เพื่อดูรายละเอียด ระบบแสดง hard block และ warning จาก calendar</p>
            </div>
            <div class="actions">
              <button class="button" data-action="run-conflict"><i data-lucide="search-check"></i> ตรวจ Conflict</button>
              <button class="button primary" data-action="analyze"><i data-lucide="activity"></i> วิเคราะห์</button>
              <button class="button success" data-action="submit" ${canSubmit() ? "" : "disabled"}><i data-lucide="send"></i> Submit</button>
            </div>
          </div>
          <div class="section-body">
            ${renderTimetableGrid()}
          </div>
        </section>
        <section class="section">
          <div class="section-header">
            <div>
              <h2>รายละเอียดคาบ</h2>
              <p>${state.selectedCell.day} คาบ ${state.selectedCell.period}</p>
            </div>
            <span class="badge ${badgeClass(state.selectedCell.state)}">${state.selectedCell.state}</span>
          </div>
          <div class="section-body split">
            <div class="panel-list">
              <div class="panel-item">
                <strong>${state.selectedCell.subject || "ยังไม่มีรายการ"}</strong>
                <p>${state.selectedCell.teacher || "เลือก teaching assignment"} | ห้อง ${state.selectedCell.room || "-"}</p>
              </div>
              <div class="panel-item">
                <strong>Conflict result</strong>
                <p>${state.selectedCell.state === "blocked" ? "คาบนี้ถูก block ไม่ควรจัดวิชาปกติ" : "ไม่พบ hard conflict ในรายการนี้"}</p>
              </div>
            </div>
            <div class="inline-help">
              ข้อเสนอการปรับตารางรอการพิจารณาจากฝ่ายวิชาการ
            </div>
          </div>
        </section>
      </div>
    `;
  }

  function renderQuality() {
    return `
      <section class="section">
        <div class="section-header">
          <div>
            <h2>Conflict & Quality</h2>
            <p>Hard conflict เป็น publish gate ส่วน warning ใช้หักคะแนน</p>
          </div>
          <button class="button primary" data-go="recommendations"><i data-lucide="lightbulb"></i> ดู Recommendation</button>
        </div>
        <div class="section-body split">
          ${renderQualityBreakdown()}
          ${renderPanelList(data.conflicts.map((item) => [item.title, item.detail, item.type]))}
        </div>
      </section>
    `;
  }

  function renderRecommendations() {
    return `
      <section class="section">
        <div class="section-header">
          <div>
            <h2>Recommendation</h2>
            <p>ข้อเสนอพร้อมคะแนนก่อนและหลังที่คาดการณ์</p>
          </div>
          <span class="badge badge-info">82 -> 87</span>
        </div>
        <div class="section-body">
          <div class="metrics-grid" style="margin-bottom: 14px;">
            <div class="metric"><span class="metric-label">Before score</span><span class="metric-value">82</span><p class="metric-sub">คะแนนปัจจุบัน</p></div>
            <div class="metric"><span class="metric-label">Predicted after</span><span class="metric-value">87</span><p class="metric-sub">หลังทำตามข้อเสนอ</p></div>
            <div class="metric"><span class="metric-label">Warning reduction</span><span class="metric-value">2</span><p class="metric-sub">รายการที่ลดลง</p></div>
            <div class="metric"><span class="metric-label">Auto edit</span><span class="metric-value">No</span><p class="metric-sub">ผู้ใช้เป็นคนตัดสินใจ</p></div>
          </div>
          ${renderSimpleTable(["ข้อเสนอ", "เหตุผล", "ผลที่คาดหวัง", "ประเภท"], data.recommendations.map((r) => [r.title, r.reason, r.impact, r.action]))}
        </div>
      </section>
    `;
  }

  function renderReview() {
    return `
      <section class="section">
        <div class="section-header">
          <div>
            <h2>Department Review</h2>
            <p>หัวหน้ากลุ่มสาระตรวจเฉพาะส่วนของตนเอง ไม่ใช่ approver หลัก</p>
          </div>
          <span class="badge ${state.reviewSaved ? "badge-success" : "badge-warning"}">${state.reviewSaved ? "reviewed" : "pending"}</span>
        </div>
        <div class="section-body stack">
          ${renderReviewTable()}
          <div>
            <label class="select-label" for="reviewComment">
              <span>ความคิดเห็นสำหรับฝ่ายวิชาการ</span>
              <textarea id="reviewComment">ภาระครูในกลุ่มสาระเหมาะสม มี warning ห้อง Lab ที่ควรตรวจอีกครั้ง</textarea>
            </label>
          </div>
          <div class="actions">
            <button class="button primary" data-action="save-review"><i data-lucide="save"></i> บันทึก Review</button>
          </div>
        </div>
      </section>
    `;
  }

  function renderApproval() {
    const canApprove = hasPermission("approve_timetable") && state.timetableStatus === "submitted";
    const canReturn = hasPermission("return_timetable") && state.timetableStatus === "submitted";
    const canPublish = hasPermission("publish_timetable") && state.timetableStatus === "approved" && state.hardConflictCount === 0;
    const canSubmitStatus = hasPermission("submit_timetable") && ["draft", "returned"].includes(state.timetableStatus);
    return `
      <div class="stack">
        <section class="section">
          <div class="section-header">
            <div>
              <h2>Approval Queue</h2>
              <p>approved ยังไม่เท่ากับ published และ hard conflict ทำให้ publish ไม่ได้</p>
            </div>
            <span class="status-pill ${statusClass(state.timetableStatus)}">${state.timetableStatus}</span>
          </div>
          <div class="section-body">
            ${renderSimpleTable(["ตาราง", "สถานะ", "Hard Conflict", "Score", "ผู้รับผิดชอบ"], [[data.timetable.name, state.timetableStatus, state.hardConflictCount, `${state.qualityScore}/100`, "ฝ่ายวิชาการ"]])}
          </div>
        </section>
        <section class="section">
          <div class="section-header">
            <div>
              <h2>Actions</h2>
              <p>การดำเนินการตามสิทธิ์และสถานะตาราง</p>
            </div>
          </div>
          <div class="section-body stack">
            <div class="actions">
              <button class="button primary" data-action="submit" ${canSubmitStatus ? "" : "disabled"}><i data-lucide="send"></i> Submit</button>
              <button class="button success" data-action="approve" ${canApprove ? "" : "disabled"}><i data-lucide="check"></i> Approve</button>
              <button class="button danger" data-action="return" ${canReturn ? "" : "disabled"}><i data-lucide="undo-2"></i> Return</button>
              <button class="button success" data-action="publish" ${canPublish ? "" : "disabled"}><i data-lucide="megaphone"></i> Publish</button>
            </div>
            <label class="select-label" for="returnReason">
              <span>Return reason</span>
              <textarea id="returnReason">กรุณาแก้ไข warning ห้อง Lab และตรวจวันกิจกรรมโรงเรียนก่อนส่งใหม่</textarea>
            </label>
          </div>
        </section>
      </div>
    `;
  }

  function renderReports() {
    return `
      <section class="section">
        <div class="section-header">
          <div>
            <h2>Reports / Print PDF</h2>
            <p>รายงานตามสิทธิ์ของบทบาทปัจจุบัน</p>
          </div>
          <div class="actions">
            <button class="button"><i data-lucide="printer"></i> Print</button>
            <button class="button primary"><i data-lucide="file-down"></i> Export PDF</button>
          </div>
        </div>
        <div class="section-body">
          <div class="inline-help" style="margin-bottom: 14px;">
            ${reportScopeText()}
          </div>
          ${renderSmallTimetable()}
        </div>
      </section>
    `;
  }

  function renderAudit() {
    return `
      <section class="section">
        <div class="section-header">
          <div>
            <h2>Audit Log</h2>
            <p>ติดตาม action สำคัญของตาราง</p>
          </div>
        </div>
        <div class="section-body">
          ${renderSimpleTable(["เวลา", "ผู้ใช้", "Action", "รายการ"], data.audit)}
        </div>
      </section>
    `;
  }

  function renderTeacherTimetable() {
    return renderPersonalSchedule("ตารางสอนครูสมชาย", "เห็นเฉพาะตารางของครูผู้สอนหลัง publish");
  }

  function renderHomeroomTimetable() {
    return renderPersonalSchedule("ตารางเรียน ม.2/1", "ครูประจำชั้นดูและ print/PDF ตารางห้องที่รับผิดชอบ");
  }

  function renderMyWorkload() {
    return `
      <section class="section">
        <div class="section-header">
          <div>
            <h2>My Workload</h2>
            <p>สรุปภาระสอนของครูผู้สอน</p>
          </div>
          <span class="badge badge-info">18/22 คาบ</span>
        </div>
        <div class="section-body">
          ${renderSimpleTable(["วิชา", "ห้อง", "คาบ/สัปดาห์", "หมายเหตุ"], [
            ["คณิตศาสตร์", "ม.2/1", "4", "มี 2 คาบติดกัน"],
            ["คณิตศาสตร์", "ม.2/3", "4", "ผ่าน"],
            ["คณิตเพิ่มเติม", "ม.4/1", "3", "วิชาหนักช่วงเช้า"]
          ])}
        </div>
      </section>
    `;
  }

  function renderClassTeachers() {
    return `
      <section class="section">
        <div class="section-header">
          <div>
            <h2>Subject Teachers</h2>
            <p>รายชื่อครูประจำวิชาของห้อง ม.2/1</p>
          </div>
        </div>
        <div class="section-body">
          ${renderSimpleTable(["วิชา", "ครู", "กลุ่มสาระ", "คาบ/สัปดาห์"], data.assignments.map((row) => [row[1], row[0], row[5], row[3]]))}
        </div>
      </section>
    `;
  }

  function renderPersonalSchedule(title, subtitle) {
    return `
      <section class="section">
        <div class="section-header">
          <div>
            <h2>${title}</h2>
            <p>${subtitle}</p>
          </div>
          <button class="button primary"><i data-lucide="printer"></i> Print/PDF</button>
        </div>
        <div class="section-body">
          ${renderSmallTimetable()}
        </div>
      </section>
    `;
  }

  function renderMetricSection(title, metrics) {
    const cards = metrics
      .map(([label, value, sub]) => `
        <div class="metric">
          <span class="metric-label">${label}</span>
          <span class="metric-value">${value}</span>
          <p class="metric-sub">${sub}</p>
        </div>
      `)
      .join("");
    return `
      <section class="section">
        <div class="section-header">
          <div>
            <h2>${title}</h2>
            <p>${data.timetable.name}</p>
          </div>
        </div>
        <div class="section-body">
          <div class="metrics-grid">${cards}</div>
        </div>
      </section>
    `;
  }

  function renderTimetableGrid() {
    const header = data.timetable.days.map((day) => `<th>${day}</th>`).join("");
    const rows = data.timetable.periods
      .map((period) => {
        const cells = data.timetable.days
          .map((day) => {
            const key = `${period}-${day}`;
            const entry = data.timetable.entries[key];
            return `<td>${renderSlot(period, day, entry)}</td>`;
          })
          .join("");
        return `<tr><th>${period}</th>${cells}</tr>`;
      })
      .join("");
    return `
      <div class="table-wrap">
        <table class="timetable">
          <thead><tr><th>คาบ</th>${header}</tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    `;
  }

  function renderSlot(period, day, entry) {
    if (!entry) {
      return `
        <div class="slot-cell empty-slot">
          <button type="button" data-cell-day="${day}" data-cell-period="${period}" data-cell-state="empty">
            <span class="slot-subject">+</span>
            <span class="slot-meta">ว่าง</span>
          </button>
        </div>
      `;
    }

    const stateClass = `cell-${entry.state || "passed"}`;
    const label = entry.label || entry.subject;
    const meta = entry.label ? entry.state : `${entry.teacher} | ${entry.room}`;
    const note = entry.note ? `<span class="slot-meta">${entry.note}</span>` : "";
    return `
      <div class="slot-cell ${stateClass}">
        <button type="button"
          data-cell-day="${day}"
          data-cell-period="${period}"
          data-cell-subject="${label}"
          data-cell-teacher="${entry.teacher || ""}"
          data-cell-room="${entry.room || ""}"
          data-cell-state="${entry.state || "passed"}">
          <span class="slot-subject">${label}</span>
          <span class="slot-meta">${meta}</span>
          ${note}
        </button>
      </div>
    `;
  }

  function renderQualityBreakdown() {
    const rows = data.quality
      .map(([label, score, total, note]) => {
        const width = Math.round((score / total) * 100);
        return `
          <div class="score-row">
            <div>
              <strong>${label}</strong>
              <div class="bar-track"><div class="bar-fill" style="width:${width}%"></div></div>
              <p class="metric-sub">${note}</p>
            </div>
            <span class="badge ${score === total ? "badge-success" : "badge-warning"}">${score}/${total}</span>
          </div>
        `;
      })
      .join("");
    return `<div>${rows}</div>`;
  }

  function renderReviewTable() {
    return renderSimpleTable(["กลุ่มสาระ", "ครู", "ภาระสอน", "สถานะ", "หมายเหตุ"], data.reviewRows);
  }

  function renderStatusTimeline() {
    const steps = ["draft", "submitted", "returned", "approved", "published", "archived"];
    const currentIndex = steps.indexOf(state.timetableStatus);
    return `
      <div class="panel-list">
        ${steps
          .map((step, index) => {
            const stateClass = index <= currentIndex && currentIndex >= 0 ? "badge-success" : "badge-muted";
            return `
              <div class="panel-item">
                <strong>${step}</strong>
                <p><span class="badge ${stateClass}">${index <= currentIndex && currentIndex >= 0 ? "done/current" : "pending"}</span></p>
              </div>
            `;
          })
          .join("")}
      </div>
    `;
  }

  function renderPanelList(items) {
    return `
      <div class="panel-list">
        ${items
          .map(([title, detail, type]) => `
            <div class="panel-item">
              <span class="badge ${badgeClass(type)}">${type}</span>
              <h3 style="margin-top: 8px;">${title}</h3>
              <p>${detail}</p>
            </div>
          `)
          .join("")}
      </div>
    `;
  }

  function renderSimpleTable(headers, rows) {
    return `
      <div class="table-wrap">
        <table>
          <thead><tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr></thead>
          <tbody>
            ${rows
              .map((row) => `<tr>${row.map((cell) => `<td>${formatCell(cell)}</td>`).join("")}</tr>`)
              .join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  function renderSmallTimetable() {
    return `
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>คาบ</th><th>จันทร์</th><th>อังคาร</th><th>พุธ</th><th>พฤหัสฯ</th><th>ศุกร์</th></tr>
          </thead>
          <tbody>
            <tr><th>1</th><td>คณิต ม.2/1</td><td>-</td><td>วิทย์ ม.2/1</td><td>-</td><td>ไทย ม.2/1</td></tr>
            <tr><th>2</th><td>คณิต ม.2/1</td><td>อังกฤษ</td><td>-</td><td>คอม</td><td>-</td></tr>
            <tr><th>3</th><td>-</td><td>พละ</td><td>กิจกรรม</td><td>-</td><td>สังคม</td></tr>
          </tbody>
        </table>
      </div>
    `;
  }

  function formatCell(cell) {
    if (cell === "active" || cell === "ผ่าน" || cell === "passed") return `<span class="badge badge-success">${cell}</span>`;
    if (cell === "warning") return `<span class="badge badge-warning">${cell}</span>`;
    if (cell === "draft" || cell === "submitted" || cell === "approved") return `<span class="badge badge-info">${cell}</span>`;
    return cell;
  }

  function wirePageActions() {
    workspace.querySelectorAll("[data-go]").forEach((button) => {
      button.addEventListener("click", () => {
        state.pageKey = button.dataset.go;
        render();
      });
    });

    workspace.querySelectorAll("[data-cell-day]").forEach((button) => {
      button.addEventListener("click", () => {
        state.selectedCell = {
          day: button.dataset.cellDay,
          period: button.dataset.cellPeriod,
          subject: button.dataset.cellSubject || "ยังไม่มีรายการ",
          teacher: button.dataset.cellTeacher || "",
          room: button.dataset.cellRoom || "",
          state: button.dataset.cellState || "empty"
        };
        showToast(`เลือก ${state.selectedCell.day} คาบ ${state.selectedCell.period}`);
        render();
      });
    });

    workspace.querySelectorAll("[data-action]").forEach((button) => {
      button.addEventListener("click", () => handleAction(button.dataset.action));
    });
  }

  function handleAction(action) {
    if (action === "run-conflict") {
      showToast("ตรวจแล้ว: ไม่พบ hard conflict, มี warning 5 รายการ");
      return;
    }
    if (action === "analyze") {
      state.pageKey = "quality";
      showToast("วิเคราะห์ Quality Score แล้ว");
      render();
      return;
    }
    if (action === "submit") {
      if (!hasPermission("submit_timetable")) {
        showToast("บทบาทนี้ไม่มีสิทธิ์ submit");
        return;
      }
      if (!canSubmit()) {
        showToast("ยัง submit ไม่ได้ เพราะมี hard conflict หรือสถานะไม่ถูกต้อง");
        return;
      }
      state.timetableStatus = "submitted";
      state.pageKey = "approval";
      showToast("ส่งตารางเพื่ออนุมัติแล้ว");
      render();
      return;
    }
    if (action === "save-review") {
      state.reviewSaved = true;
      showToast("บันทึก review ของกลุ่มสาระแล้ว");
      render();
      return;
    }
    if (action === "approve") {
      if (!hasPermission("approve_timetable") || state.timetableStatus !== "submitted") return;
      state.timetableStatus = "approved";
      showToast("อนุมัติตารางแล้ว ยังไม่ได้ publish");
      render();
      return;
    }
    if (action === "return") {
      if (!hasPermission("return_timetable") || state.timetableStatus !== "submitted") return;
      const reason = document.getElementById("returnReason")?.value.trim();
      if (!reason) {
        showToast("กรุณาระบุเหตุผลก่อน return");
        return;
      }
      state.timetableStatus = "returned";
      showToast("ส่งกลับพร้อมเหตุผลแล้ว");
      render();
      return;
    }
    if (action === "publish") {
      if (!hasPermission("publish_timetable") || state.timetableStatus !== "approved") return;
      if (state.hardConflictCount > 0) {
        showToast("publish ไม่ได้ เพราะยังมี hard conflict");
        return;
      }
      state.timetableStatus = "published";
      showToast("เผยแพร่ตารางแล้ว ครูและผู้เกี่ยวข้องดูได้");
      render();
    }
  }

  function canSubmit() {
    return hasPermission("submit_timetable") && ["draft", "returned"].includes(state.timetableStatus) && state.hardConflictCount === 0;
  }

  function hasPermission(permission) {
    return roles[state.roleKey].permissions.includes(permission);
  }

  function reportScopeText() {
    const key = state.roleKey;
    if (key === "teacher") return "ครูผู้สอนเห็นและ print/PDF เฉพาะตารางของตนเอง";
    if (key === "homeroomTeacher") return "ครูประจำชั้นเห็นและ print/PDF ตารางเรียนของห้องที่รับผิดชอบ";
    if (key === "director") return "ผู้บริหารเห็นรายงานภาพรวมแบบ view-only";
    return "ฝ่ายวิชาการและผู้มีสิทธิ์เห็นรายงานตารางและ quality report ตาม workflow";
  }

  function badgeClass(type) {
    if (type === "error" || type === "blocked" || type === "danger") return "badge-danger";
    if (type === "warning" || type === "pending") return "badge-warning";
    if (type === "passed" || type === "success" || type === "ผ่าน") return "badge-success";
    return "badge-info";
  }

  function statusClass(status) {
    if (status === "published") return "badge-success";
    if (status === "returned") return "badge-danger";
    if (status === "approved" || status === "submitted") return "badge-info";
    if (status === "archived") return "badge-muted";
    return "badge-warning";
  }

  function showToast(message) {
    const existing = document.querySelector(".toast");
    if (existing) existing.remove();
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    document.body.appendChild(toast);
    window.setTimeout(() => toast.remove(), 2600);
  }

  function refreshIcons() {
    if (window.lucide) {
      window.lucide.createIcons({ attrs: { width: 17, height: 17, strokeWidth: 2 } });
    }
  }
})();
