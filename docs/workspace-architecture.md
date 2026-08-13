# TRƯỜNG YÊN FOOD OS — Workspace Architecture

## 1. Nguyên lý

> Một đối tượng → một Workspace → nhiều trải nghiệm.

Workspace là không gian làm việc trung tâm của một đối tượng.

Người dùng không phải quay lại Dashboard giữa các chức năng có liên quan.

---

## 2. Mục tiêu

Workspace phải:

- Giữ nguyên ngữ cảnh.
- Gom các thông tin liên quan.
- Cho phép chuyển đổi trải nghiệm nhanh.
- Không yêu cầu người dùng hiểu cấu trúc kỹ thuật.
- Giữ hành trình trong tối đa 3 click.

---

# 3. Object Model

Một Object là một thực thể mà người dùng có thể tìm kiếm, mở và làm việc.

Ví dụ:

- Doanh nghiệp
- Thương hiệu
- Sản phẩm
- Bao bì
- Quy trình
- Tài liệu
- QA Review

---

# 4. Workspace Model

Mỗi Object quan trọng có một Workspace.

```text
OBJECT
  ↓
WORKSPACE
  ├── Overview
  ├── Core Information
  ├── Related Experiences
  ├── Documents
  ├── QA
  └── Outputs