let products = [
    { productCode: "PED-001", productName: "Điện Thoại Nova X1",
        brand: "Nova Mobile",
        stockQuantity: 120, warrantyMonth: 12 },
    { productCode: "PED-002", productName: "Máy Tính Bảng Nova Tab",
        brand: "Nova Mobile",
        stockQuantity: 35, warrantyMonth: 24 },
    { productCode: "PED-003", productName: "Tai Nghe Sky Buds",
        brand: "Bluesky Audio",
        stockQuantity: 80, warrantyMonth: 6 }
];

let text = "áhdkahsd sdfsdf"

// kiem tra ma san pham
function validateProductCode(code){
    if(code === null || code === ""){
        prompt("Vui lòng không để trống");
    }

    if(code.length() < 6){
        return "Vui lòng nhập đủ 6 ký tự.";
    }

    if(!code.startsWith("PRD-")){
        return "Mã sản phẩm phải bắt đầu từ 'PRD-'"
    }

    // if(code.(/\s+/)){

    // }

}



// kiem tra ma code co ton tại trong doi tuong
function findProductIndex(code){
    if(code === null || code === ""){
        prompt("Vui lòng không để trống")
    }

    let value = code.trim().toLocaleLowerCase();

}

text.toLocaleLowerCase

// tra ve chuoi da bỏ khoang trang va in hoa chu cai dau
function normalizeText(rawText){
    if(rawText === ""){
        console.log("Vui lòng không để trống");
    }
    rawText
    .trim()
    .toLocaleLowerCase()
    // .(/\s+/)
    .map(word)
}

// tra ve so nguyen trong min, max
function inputIntegerInRange(message, min, max){

}

// in danh sach san pham duoc truyen vao
function displayProduct(list){

}

function displayListProducts(){
    if(products.length() === 0){
        console.log("Danh sach san pham trong");
    }
    console.log(`
=========================
    DANH SACH SAN PHAM
=========================
        `);
    for (i = 0;i < products.length();i++){
        console.log($(i+1) + -products.productCode[i] - );
    }
}

function main() {
    let choice;
    do{
        choice = +prompt(`
===============================================
    HỆ THỐNG QUẢN LÝ SẢN PHẨM CỬA HÀNG TECHZONE
===============================================
1. Hiển thị danh sách sản phẩm
2. Thêm sản phẩm mới
3. Cập nhật thông tin sản phẩm
4. Xóa sản phẩm
5. Tìm kiếm sản phẩm theo hãng sản xuất
0. Thoát chương trình
===============================================
Vui lòng nhập lựa chọn của bạn(0-5):
            `);

    switch(choice){
        case "1":
            break;
        case "2":
            break;
        case "3":
            break;
        case "4":
            break;
        case "5":
            break;
        case "0":
            alert("Thoát chương trình.");
            break;
        default:
            alert("Vui lòng nhập số lớn hơn '0'. ");
            break;
    }

    }while(choice !== 0);
}

main();