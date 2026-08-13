# TRƯỜNG YÊN FOOD OS — UX Architecture

## Design Principle

> Ít chạm — đa trải nghiệm.

Mọi thông tin và chức năng quan trọng phải có khả năng tiếp cận trong tối đa 3 click từ điểm xuất phát hợp lý.

---

## UX Principles

### 1. Three-Click Principle

Người dùng phải có khả năng đến đích trong tối đa 3 click.

### 2. One Source — Many Experiences

Một nguồn tri thức có thể tạo ra nhiều trải nghiệm và nhiều đầu ra.

### 3. Context First

Người dùng luôn được giữ trong đúng ngữ cảnh hiện tại.

### 4. Complexity Behind the System

Hệ thống xử lý sự phức tạp phía sau; người dùng chỉ nhìn thấy trải nghiệm đơn giản.

### 5. Quick Access

Các tác vụ và tài nguyên thường xuyên sử dụng phải có thể truy cập trực tiếp từ Dashboard.

### 6. Search as a Shortcut

Search phải cho phép người dùng đi thẳng tới đối tượng hoặc workspace cần tìm.

---

## Primary Navigation

- Dashboard
- Knowledge
- Company
- Brand
- Products
- Operations
- Business
- Governance

---

## Dashboard Architecture

Dashboard gồm:

1. Hero / System Overview
2. Quick Access
3. Knowledge Modules
4. System Health
5. Recent Activity
6. Pending QA
7. Recent Outputs

---

## Three-Click Model

### Example — Brand Book

Dashboard
→ Brand Book

### Example — Product

Dashboard
→ Products
→ Product

### Example — Product QA

Dashboard
→ Products
→ Product
→ QA

### Example — Search

Search
→ Object
→ Workspace

---

## Core Experience

DATA
↓
KNOWLEDGE MODULE
↓
WORKSPACE
↓
TEMPLATE
↓
OUTPUT

---

## UX QA Gate

Một màn hình chỉ đạt PASS khi:

- Đích quan trọng ≤ 3 click.
- Navigation dễ hiểu.
- Không yêu cầu người dùng hiểu cấu trúc nội bộ.
- Search có thể rút ngắn hành trình.
- Quick Access được sử dụng cho tác vụ thường xuyên.
- Một đối tượng có thể mở nhiều trải nghiệm liên quan.