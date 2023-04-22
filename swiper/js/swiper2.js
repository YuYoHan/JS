new Swiper(".swiper-container", {
    // direction: horizontal,
    // 동적 로딩 설정
    lazy: {
        // 이전, 다음 이미지는 미리 로딩
        loadPrevNext: true,
    },

    // 페이징 설정
    pagination: {
        el: ".swiper-pagination",
        // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
        clickable: true,
    },

    // 네비게이션 설정
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2000,
    },
});
