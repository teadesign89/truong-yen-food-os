# TRƯỜNG YÊN FOOD OS — Dashboard Wireframe v1

## 1. Mục tiêu

Dashboard là Control Center của TRƯỜNG YÊN FOOD OS.

Dashboard không chứa toàn bộ nội dung của hệ thống.

Dashboard có nhiệm vụ:

- Định hướng.
- Điều phối.
- Cho phép truy cập nhanh.
- Cho phép tìm kiếm trực tiếp.
- Hiển thị trạng thái hệ thống.
- Hiển thị các công việc cần chú ý.

---

# 2. Core UX

> Ít chạm — đa trải nghiệm.

> Tối đa 3 click để đến đích quan trọng.

Ba đường vào chính:

1. Quick Access
2. Search
3. Modules

---

# 3. Desktop Layout

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│ LOGO │ Dashboard │ Knowledge │ Company │ Brand │ Products │ 🔍 Search │ 👤 │
├───────────────┬─────────────────────────────────────────────┬───────────────┤
│               │                                             │               │
│   SIDEBAR     │              MAIN WORKSPACE                 │ SYSTEM STATUS │
│               │                                             │               │
│ Dashboard     │  SYSTEM OVERVIEW                            │               │
│               │  ┌───────────────────────────────────────┐  │ Knowledge  ✓  │
│ Knowledge     │  │ TRƯỜNG YÊN FOOD OS                    │  │ Brand      ✓  │
│ Company       │  │ Enterprise Knowledge Operating System │  │ Products   ●  │
│ Brand         │  └───────────────────────────────────────┘  │ QA         ●  │
│ Products      │                                             │               │
│ Operations    │  QUICK ACCESS                               │ RECENT        │
│ Business      │  ┌────────┐ ┌────────┐ ┌────────┐          │ ACTIVITY      │
│ Governance    │  │ Brand  │ │Product │ │Company │          │               │
│               │  │ Book   │ │ Master │ │Profile │          │ Brand System  │
│               │  └────────┘ └────────┘ └────────┘          │ Product System │
│               │                                             │ QA Gate       │
│               │  ┌────────┐ ┌────────┐ ┌────────┐          │               │
│               │  │   QA   │ │Knowledge│ │Outputs │          │               │
│               │  │ Review │ │  Base  │ │        │          │               │
│               │  └────────┘ └────────┘ └────────┘          │               │
│               │                                             │               │
│               │  MODULES                                    │               │
│               │                                             │               │
│               │  Knowledge │ Company │ Brand │ Products    │               │
│               │  Operations │ Business │ Governance         │               │
│               │                                             │               │
└───────────────┴─────────────────────────────────────────────┴───────────────┘