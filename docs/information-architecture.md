# TRƯỜNG YÊN FOOD OS — Information Architecture

## 1. Nguyên lý

> Ít chạm — đa trải nghiệm.

Mục tiêu:

> Tối đa 3 click để người dùng đến được đích quan trọng.

Không yêu cầu người dùng hiểu cấu trúc kỹ thuật bên trong hệ thống.

---

## 2. Primary Navigation

- Dashboard
- Knowledge
- Company
- Brand
- Products
- Operations
- Business
- Governance

---

## 3. Navigation Model

### Dashboard

Điểm xuất phát chính của hệ thống.

Dashboard phải cung cấp:

- System Overview
- Quick Access
- Recent Activity
- Pending QA
- Recent Outputs
- Search

---

## 4. Three-Click Map

| Đích | Hành trình | Số click | Trạng thái |
|---|---|---:|---|
| Brand Book | Dashboard → Brand Book | 1 | PASS |
| Company Profile | Dashboard → Company Profile | 1 | PASS |
| Knowledge Base | Dashboard → Knowledge → Knowledge Base | 2 | PASS |
| AI Knowledge | Dashboard → Knowledge → AI Knowledge | 2 | PASS |
| Product Master | Dashboard → Products → Product | 2 | PASS |
| Packaging | Dashboard → Products → Product → Packaging | 3 | PASS |
| Production | Dashboard → Operations → Production | 2 | PASS |
| Supply Chain | Dashboard → Operations → Supply Chain | 2 | PASS |
| Marketing | Dashboard → Business → Marketing | 2 | PASS |
| Finance | Dashboard → Business → Finance | 2 | PASS |
| Legal | Dashboard → Governance → Legal | 2 | PASS |
| QA | Dashboard → Governance → QA GATE | 2 | PASS |
| Product QA | Dashboard → Products → Product → QA | 3 | PASS |

---

## 5. Search Shortcut

Search là đường tắt cấp cao của hệ thống.

Ví dụ:

Search
→ Cá rô Tổng Trường
→ Product Workspace

Mục tiêu:

- Tìm được đối tượng.
- Không cần biết đối tượng nằm trong module nào.
- Không cần đi xuyên qua cấu trúc thư mục.
- Có thể tiếp tục đến các trải nghiệm liên quan.

---

## 6. Object Workspace

Một đối tượng quan trọng phải có một workspace thống nhất.

Ví dụ:

### Cá rô Tổng Trường

Workspace gồm:

- Overview
- Product Master
- Brand
- Packaging
- Production
- Supply Chain
- QA
- Documents
- Outputs

Người dùng không phải quay lại Dashboard giữa các trải nghiệm liên quan.

---

## 7. Context Preservation

Khi người dùng đang ở trong một đối tượng hoặc workspace:

- Giữ nguyên ngữ cảnh.
- Hiển thị các chức năng liên quan.
- Không bắt người dùng quay lại Dashboard để chuyển sang chức năng kế tiếp.

---

## 8. Quick Access

Dashboard phải cung cấp truy cập trực tiếp đến các điểm thường xuyên sử dụng.

Ví dụ:

- Brand Book
- Product Master
- Company Profile
- QA Review
- Knowledge Base
- Recent Outputs

Quick Access được ưu tiên cho các tác vụ có tần suất sử dụng cao.

---

## 9. Complexity Rule

Sự phức tạp của hệ thống phải nằm phía sau giao diện.

Người dùng không cần biết:

DATA
→ KNOWLEDGE MODULE
→ TEMPLATE
→ BUILD
→ OUTPUT

Người dùng chỉ cần thấy:

OBJECT
→ WORKSPACE
→ EXPERIENCE

---

## 10. UX QA Gate

Một luồng được PASS khi:

- Đích quan trọng ≤ 3 click.
- Có thể rút ngắn bằng Quick Access.
- Có thể rút ngắn bằng Search.
- Không yêu cầu người dùng hiểu cấu trúc kỹ thuật.
- Không mất ngữ cảnh khi chuyển giữa các chức năng liên quan.
- Một đối tượng có thể mở nhiều trải nghiệm liên quan.
- Không tạo menu dư thừa.

---

## 11. Core Principle

> Ít chạm — đa trải nghiệm.

### Design Objective

Một thao tác đơn giản phải mở ra một không gian trải nghiệm đủ sâu để người dùng không cần thực hiện thêm các thao tác không cần thiết.
