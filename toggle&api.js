const toogleBtn = document.querySelector(".navBar_toogleBtn");
const menu = document.querySelector(".navBar_menu");
const icon = document.querySelector(".navBar_icon");

toogleBtn.addEventListener("click", () => {
    /*  toggle()이란?
        on/off switch 개념으로 스위치를 켰다, 껐다 하는 기능을 가지고 있다.
        add()와 remove() 메서드를 한번에 쓸 수 있는 합쳐진 개념이다.
        보통 click 이벤트에 classList를 이용하여 toggle로 
        css로 style을 준 클래스명을 on/off로 처리합니다.
    */
    menu.classList.toggle("active");
    icon.classList.toggle("active");
});

let container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
let options = {
    //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
    level: 3, //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
