function upDate(previewPic) {
    /* 3a & 3b: In ra console để kiểm tra sự kiện và thông tin ảnh */
    console.log("Hover vào ảnh:", previewPic.alt);
    console.log("Đường dẫn ảnh:", previewPic.src);

    /* Lấy thẻ hiển thị ảnh lớn (id="image") */
    var imageDiv = document.getElementById("image");

    /* 3c: Thay đổi văn bản thành mô tả của ảnh */
    imageDiv.innerHTML = previewPic.alt;

    /* 3e: Đổi ảnh nền thành đường dẫn của ảnh đang hover */
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    /* Lấy thẻ hiển thị ảnh lớn */
    var imageDiv = document.getElementById("image");

    /* 4a: Trả ảnh nền về rỗng */
    imageDiv.style.backgroundImage = "url('')";

    /* 4b: Trả chữ về câu mặc định */
    imageDiv.innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}
/* Bước 8 & 9: Hàm tự động chạy khi tải trang để thêm thuộc tính tabindex */
function addTabFocus() {
    // 9a: Thông báo console.log xác nhận hàm đã chạy
    console.log("Sự kiện onload kích hoạt thành công!");

    // 9b: Lấy tất cả ảnh có class là preview (hoặc tất cả thẻ img)
    var images = document.querySelectorAll(".preview");

    // 9b: Dùng vòng lặp for duyệt qua từng hình ảnh
    for (var i = 0; i < images.length; i++) {
        // 9c: Thêm thuộc tính tabindex để có thể điều hướng bằng phím Tab
        images[i].setAttribute("tabindex", "0");
        console.log("Đã thêm tabindex cho ảnh số " + (i + 1));
    }
}