var giatien = new Array('18.490.000đ', '9.000.000đ', '8.000.000đ', '7.000.000đ', '6.000.000đ', '7.500.000đ', '11.000.000đ', '12.000.000đ', '13.000.000đ', '15.000.000đ');
var images1 = new Array('img/sp1.png', 'img/sp2.png', 'img/sp3.png', 'img/sp4.png', 'img/sp5.png', 'img/sp6.png', 'img/sp7.png', 'img/sp8.png', 'img/sp9.png', 'img/sp10.png');

function test(a) {
    if (typeof (Storage) != 'undefined') {
        localStorage.setItem('sp1', giatien[a]);
        localStorage.setItem('img1', images1[a]);
        current = a;
    }
}

function getPrice() {
    document.getElementById('priceip').innerHTML = localStorage.getItem('sp1');
    document.getElementById('imgchange').src = localStorage.getItem('img1');
}
