# TRƯỜNG YÊN FOOD OS — Object Model

## 1. Nguyên lý

> Everything users work with is an Object.

TRƯỜNG YÊN FOOD OS không quản lý người dùng thông qua cấu trúc file.

Hệ thống quản lý các đối tượng nghiệp vụ và tri thức.

---

# 2. Object Categories

Các nhóm Object cấp cao:

1. Company
2. Brand
3. Product
4. Packaging
5. Process
6. Knowledge
7. Document
8. QA Review
9. Supplier
10. Output

---

# 3. Company Object

Đại diện cho doanh nghiệp.

Ví dụ:

TRƯỜNG YÊN FOOD

Thông tin:

- Company Profile
- Enterprise Constitution
- Legal
- Governance
- Organization
- Addresses
- Representatives

---

# 4. Brand Object

Đại diện cho một thương hiệu.

Ví dụ:

TRƯỜNG YÊN FOOD

Thông tin:

- Brand DNA
- Brand Identity
- Logo
- Seal
- Typography
- Colors
- Brand Guidelines
- Brand Assets

---

# 5. Product Object

Đại diện cho một sản phẩm.

Ví dụ:

Cá rô Tổng Trường

Thông tin:

- Product Master
- Product Story
- Ingredients
- Specifications
- Pricing
- Packaging
- Production
- Supply Chain
- QA
- Brand Assets

---

# 6. Packaging Object

Đại diện cho một cấu hình bao bì.

Thông tin:

- Packaging Specification
- Material
- Dimensions
- Printing
- Label
- Traceability
- Packaging QA
- Packaging Output

---

# 7. Process Object

Đại diện cho một quy trình vận hành.

Ví dụ:

- Production Process
- QA Process
- Packaging Process
- Supply Chain Process
- Approval Process

---

# 8. Knowledge Object

Đại diện cho một đơn vị tri thức chính thức.

Ví dụ:

- Brand Knowledge
- Product Knowledge
- Historical Knowledge
- Food Knowledge
- Business Knowledge
- AI Knowledge

Knowledge Object là nguồn tri thức chính thức.

---

# 9. Document Object

Đại diện cho một tài liệu.

Ví dụ:

- Company Profile
- Brand Book
- Product Specification
- SOP
- QA Report
- Legal Document

Document có thể được tạo từ Knowledge và Template.

---

# 10. QA Review Object

Đại diện cho một lần kiểm tra chất lượng.

Thông tin:

- Object được kiểm tra
- QA Type
- Version
- Reviewer
- Status
- Findings
- Approval
- Timestamp

Trạng thái:

- Draft
- In Review
- Approved
- Rejected
- Archived

---

# 11. Supplier Object

Đại diện cho một nhà cung cấp hoặc đối tác cung ứng.

Thông tin:

- Supplier Profile
- Qualification
- Materials
- Products
- Capacity
- Quality
- Contracts
- Performance

---

# 12. Output Object

Đại diện cho một đầu ra được tạo từ hệ thống.

Ví dụ:

- PDF
- Brand Book
- Product Sheet
- SOP
- Packaging Specification
- Company Profile
- QA Report
- Website Content

---

# 13. Object Relationships

Các Object có quan hệ với nhau.

Ví dụ:

```text
COMPANY
   │
   ├── BRAND
   │
   ├── PRODUCT
   │      │
   │      ├── PACKAGING
   │      ├── PRODUCTION
   │      ├── SUPPLY CHAIN
   │      └── QA REVIEW
   │
   ├── SUPPLIER
   │
   └── DOCUMENTS