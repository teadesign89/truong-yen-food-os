# Knowledge Base

> **Trạng thái:** Bản khung — chờ phê duyệt
>
> **Chủ sở hữu:** Ban lãnh đạo và người quản trị Knowledge Platform

## Vai trò

Knowledge Base là lớp quản trị tri thức dùng chung của TRƯỜNG YÊN FOOD. Hệ thống bảo đảm mỗi thông tin có một nguồn chính thức, có chủ sở hữu, trạng thái phê duyệt và lịch sử phiên bản rõ ràng.

## 1. Nguyên tắc quản trị tri thức

1. Knowledge Platform là nguồn tham chiếu chính thức cho tài liệu đã ban hành.
2. Mỗi tài liệu phải có chủ sở hữu nghiệp vụ và người phê duyệt.
3. Chỉ phiên bản đã được phê duyệt mới được dùng để vận hành hoặc công bố.
4. Thông tin nhạy cảm, pháp lý và chất lượng được phân quyền trước khi truy cập.
5. Tài liệu lỗi thời phải được thay thế hoặc lưu trữ có kiểm soát, không xóa lịch sử tùy tiện.

## 2. Phân loại tài liệu

| Nhóm | Mục đích | Ví dụ |
| --- | --- | --- |
| Hiến pháp & chính sách | Định hướng và nguyên tắc áp dụng toàn doanh nghiệp | Enterprise Constitution, chính sách |
| Hệ thống nghiệp vụ | Chuẩn hóa lĩnh vực vận hành | QA GATE, Product System |
| Quy trình & hướng dẫn | Hướng dẫn công việc có thể thực thi | SOP, work instruction |
| Biểu mẫu & hồ sơ | Ghi nhận việc thực thi | Template, checklist, biên bản |
| Tài sản thương hiệu | Quản lý nội dung và nhận diện | Logo, Brand Book, hình ảnh |

## 3. Chu trình sống của tài liệu

| Trạng thái | Ý nghĩa | Quyền sử dụng |
| --- | --- | --- |
| Bản nháp | Đang biên soạn hoặc rà soát | Nội bộ nhóm phụ trách |
| Chờ phê duyệt | Hoàn tất biên soạn, chưa ban hành | Người phê duyệt |
| Đang hiệu lực | Phiên bản chính thức | Theo phân quyền |
| Thay thế | Được phiên bản mới thay thế | Chỉ tra cứu lịch sử |
| Lưu trữ | Không còn sử dụng thường xuyên | Theo phân quyền |

## 4. Metadata tối thiểu

Mỗi tài liệu chính thức cần có các trường sau:

| Trường | Yêu cầu |
| --- | --- |
| Tên tài liệu | Bắt buộc |
| Mã tài liệu | Chờ quy ước đặt mã |
| Chủ sở hữu | Bắt buộc |
| Người phê duyệt | Bắt buộc trước khi ban hành |
| Phiên bản và ngày hiệu lực | Bắt buộc khi ban hành |
| Trạng thái | Bắt buộc |
| Phân loại truy cập | Bắt buộc khi có thông tin nhạy cảm |

## 5. Cấu trúc lưu trữ

| Vị trí | Mục đích |
| --- | --- |
| `docs/systems/` | Nội dung hệ thống chính thức hiển thị trên Knowledge Platform |
| `docs/templates/` | Các biểu mẫu khung dùng để biên soạn tài liệu |
| `assets/` | Tài sản hình ảnh, logo, kiểu chữ và tài nguyên giao diện |
| `exports/` | Bản xuất dùng cho phát hành hoặc chia sẻ có kiểm soát |
| `scripts/` | Công cụ hỗ trợ vận hành và kiểm tra hệ thống |

## 6. Quy trình tạo và cập nhật

1. Xác định chủ sở hữu, mục đích và phạm vi tài liệu.
2. Biên soạn bằng template phù hợp và đính kèm nguồn tham chiếu cần thiết.
3. Rà soát chuyên môn, chất lượng và pháp lý khi áp dụng.
4. Phê duyệt, gán phiên bản và ngày hiệu lực.
5. Cập nhật Knowledge Platform, thông báo đối tượng liên quan và lưu lịch sử thay đổi.

## 7. Phân quyền và bảo mật

| Mức truy cập | Phạm vi | Người quyết định |
| --- | --- | --- |
| Công khai | Nội dung được phép công bố | Chờ xác lập |
| Nội bộ | Nội dung dùng trong doanh nghiệp | Chờ xác lập |
| Hạn chế | Nội dung nhạy cảm hoặc chuyên môn | Chờ xác lập |
| Mật | Thông tin có rủi ro cao | Chờ xác lập |

## 8. Kiểm soát phiên bản

| Phiên bản | Ngày hiệu lực | Nội dung thay đổi | Người phê duyệt |
| --- | --- | --- | --- |
| 0.1 | Chờ xác lập | Tạo bản khung | Chờ xác lập |

## 9. Nội dung cần xác lập

- Quy ước mã hóa tài liệu và biểu mẫu.
- Danh sách chủ sở hữu theo từng hệ thống.
- Cấp độ phân quyền, thời hạn lưu trữ và quy trình lưu trữ.
- Chu kỳ rà soát tài liệu và người quản trị Knowledge Platform.
