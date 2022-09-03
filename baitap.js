/*
TÌM NGÀY TRƯỚC ĐÓ VÀ NGÀY MAI
Input:
Cho nhập ngày tháng năm a,b,c
Process:
Khi tính ngày mai thì lưu ý trường hợp qua cuối năm và cuối tháng
Khi tính ngày trước thì lưu ý trường hợp năm mới và tháng mới
Output:
ngày mai và ngày trước
*/
function Tomorrow() {
    var a = document.getElementById('day').value * 1;
    var b = document.getElementById('month').value * 1;
    var c = document.getElementById('year').value * 1;
    if (a == 31 && b == 12) {
        a = 1;
        b = 1;
        c += 1;
    }
    else if (a == 31 && b < 12) {
        a = 1;
        b += 1;
    }
    else if (a < 31) {
        a += 1;
    }
    else {
        alert("Xin nhập lại dữ liệu")
        return
    }
    var ngay = "Ngày mai là ngày " + a + " / " + b + " / " + c;
    document.getElementById('date').innerHTML = ngay;
}
function Yesterday() {
    var a = document.getElementById('day').value * 1;
    var b = document.getElementById('month').value * 1;
    var c = document.getElementById('year').value * 1;
    if (a == 1 && b == 1) {
        a = 31;
        b = 12;
        c -= 1;
    }
    else if (a == 1 && b <= 12) {
        a = 31;
        b -= 1;
    }
    else if (a <= 31) {
        a -= 1;
    }
    else {
        alert("Xin nhập lại dữ liệu")
        return
    }
    var ngay = "Ngày trước là ngày " + a + " / " + b + " / " + c;
    document.getElementById('date').innerHTML = ngay;
}

/*
BAO NHIÊU NGÀY TRONG THÁNG
Input:
Cho nhập tháng và năm
Process:
Các tháng lẻ trước tháng 8 là có 31 ngày, tháng chẵn là 30 ngày
Các tháng lẻ sau tháng 8 có 30 ngày, tháng chẵn có 31 ngày
Tháng 2 là tháng đặc biệt nên xét riêng và kèm điều kiện năm có chia hết cho 4 không để xác định năm nhuận thì có 29 ngày, không phải năm nhuận thì có 28 ngày
Output:
Tháng đó có bao nhiêu ngày
*/
function soNgay1(a){
    var songay="";
    if (a<8){
        if (a%2!=0){
            songay=" có 31 ngày"
        }
        else{
            songay=" có 30 ngày"
        }
    }
    else if (a<=12){
        if (a%2!=0){
            songay=" có 30 ngày"
        }
        else{
            songay=" có 31 ngày"
        }
    }
    return songay;
}
function soNgay() {
    var a = document.getElementById('Thang').value * 1;
    var b = document.getElementById('Nam').value * 1;
    var songay = "";
    if (a <= 12 && b % 4 == 0) {
        if (a == 2) {
            songay = " có 29 ngày"
        }
        else{
            var songay=soNgay1(a)
        }
    }
    else if (a <= 12 && b % 4 != 0) {
        if (a == 2) {
            songay = " có 28 ngày"
        }
        else{
            var songay=soNgay1(a)
        }
    }
    else{
        alert('Nhập lại dữ liệu')
        return;
    }
    var ketQua="Tháng "+a+songay;
    document.getElementById('ngay').innerHTML = ketQua;
}

/*
CÁCH ĐỌC SỐ CÓ 3 CHỮ SỐ
Input:
Cho nhập số có 3 chữ số
Process:
xét hàm có thể đọc số
giới hạn số nhập >99 và <1000
tìm số hàng trăm, hàng chục và hàng đơn vị
xét một số trường hợp đặc biệt khi hàng chục, hàng đơn vị là có giá trị 0 hoặc */
function cachDocso(a){
    var docSo=""
    switch(a){
        case a=1:
            docSo="một "
        break;
        case a=2:
            docSo="hai "
        break;
        case a=3:
            docSo="ba "
        break;
        case a=4:
            docSo="bốn "
        break;
        case a=5:
            docSo="năm "
        break;
        case a=6:
            docSo="sáu "
        break;
        case a=7:
            docSo="bảy "
        break;
        case a=8:
            docSo="tám "
        break;
        case a=9:
            docSo="chín "
        break;
    }
    return docSo;
}
function cachDoc(){
    var num=document.getElementById('numN').value*1;
    if (num>99 && num<1000){
        a=Math.floor(num/100);
        b=Math.floor((num-a*100)/10);
        c=num%10;
        var docSo1=cachDocso(a)
        var docSo2=cachDocso(b)
        var docSo3=cachDocso(c)
        var docSo=""
        if (b==0 && c>0 ){
            docSo=docSo1+"trăm lẻ "+docSo3;
        }
        else if (b==0 && c==0){
            docSo=docSo1+"trăm "
        }
        else if (b==1 && c>=0){
            docSo=docSo1+"trăm mười "+docSo3
        }
        else if (b>1 && c==0){
            docSo=docSo1+"trăm "+docSo2+"mươi "
        }
        else if (b>1 && c==1){
            docSo=docSo1+"trăm "+docSo2+"mươi mốt"
        }
        else if (b>1 && c>1){
            docSo=docSo1+"trăm "+docSo2+"mươi "+docSo3
        }
    }
    else{
        alert('Nhập lại dữ liệu')
    }
    document.getElementById('soDoc').innerHTML = docSo;
}

/*
TÌM SINH VIÊN XA TRƯỜNG NHẤT
Input:
Nhập tên 3 sinh viên và tọa độ x, y của 3 sinh viên và ngôi trường
Process
Xét hàm tính đường thẳng theo tọa độ
Xét hàm tìm số lớn nhất
Tính đoạn đường của sinh viên 1 , 2 và 3
Sử dụng hàm max để tìm đoạn đường xa nhất
So sánh đường xa nhất trùng với đoạn đường nào của 3 sinh viên
Output:
Sinh viên xa nhất là
*/
function tinhDoanduong(x1,y1,x2,y2){
    var doanDuong=Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2))
    return doanDuong;
}
function Max(a,b,c){
    var max=a;
    if(b>max){
        max=b;
    }
    if (c>max){
        max=c;
    }
    return max
}
function khoangCach(){
    var SV1=document.getElementById('SV1').value;
    var SV2=document.getElementById('SV2').value;
    var SV3=document.getElementById('SV3').value;
    var x1=document.getElementById('x1').value*1;
    var x2=document.getElementById('x2').value*1;
    var x3=document.getElementById('x3').value*1;
    var x4=document.getElementById('x4').value*1;
    var y1=document.getElementById('y1').value*1;
    var y2=document.getElementById('y2').value*1;
    var y3=document.getElementById('y3').value*1;
    var y4=document.getElementById('y4').value*1;
    var doanDuong1=tinhDoanduong(x1,y1,x4,y4);
    var doanDuong2=tinhDoanduong(x2,y2,x4,y4);
    var doanDuong3=tinhDoanduong(x3,y3,x4,y4);
    var duongXanhat=Max(doanDuong1,doanDuong2,doanDuong3);
    var ketQua=""
    if(duongXanhat==doanDuong1){
            ketQua="Sinh viên xa nhất là "+SV1;
    }
    if(duongXanhat==doanDuong2){
            ketQua="Sinh viên xa nhất là "+SV2;
    }
    if(duongXanhat==doanDuong3){
            ketQua="Sinh viên xa nhất là "+SV3;
    }
    document.getElementById('xaNhat').innerHTML=ketQua;
}