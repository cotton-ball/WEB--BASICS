// 햄버거 바 아이콘 선택자
const menuOpenEl = document.getElementById('btn--open')
// 닫는 아이콘 선택자
const menuCloseEl = document.getElementById('btn--close')
// 사이드 네비게이션 선택자
const sideMenuEl = document.getElementById('side_menu')

var navOpen = false;

// 햄버거 바 아이콘에 클릭 이벤트가 발생하면,
menuOpenEl.addEventListener("click", function() {
    navOpen = true;
    headerEl.style.height = '52px'
    logoEl.style.height = '30px'
    logoEl.style.width = '125px'



    // 햄버거 바 아이콘을 보이지 않게 처리하고,
    menuOpenEl.style.display = 'none'
    // 닫는 아이콘은 보이게 처리합니다
    menuCloseEl.style.display = 'block'
    // 사이드 메뉴를 보이게 합니다 
    logoEl.style.height = '32.5px'
    logoEl.style.width = '135px'
    
    sideMenuEl.style.height = '100%'
        
})

// 닫는 아이콘에 클릭 이벤트가 발생하면,
menuCloseEl.addEventListener("click", function() {
    navOpen = false;
    // 햄버거 바 아이콘을 보이게 처리하고,
    menuOpenEl.style.display = 'block'
    // 닫는 아이콘은 보이지 않게 처리합니다
    menuCloseEl.style.display = 'none'
    sideMenuEl.style.height = '0'

    headerEl.style.height = '157px'
            // 로고 요소의 높이 및 너비를 원래대로 300px로 돌립니다
    logoEl.style.height = '130px'
    logoEl.style.width = '540px'
    

    if(window.scrollY >= 200) {
        headerEl.style.height = '52px'
        logoEl.style.height = '30px'
        logoEl.style.width = '125px'
    }
   
   
    

})

/* 스크롤 이벤트*/

// 헤더 선택자
const headerEl = document.getElementById('header--main')
// 로고 선택자
const logoEl = document.getElementById('logo')

// 윈도우에서 스크롤 이벤트가 발생하면 익명의 함수 동작
window.addEventListener("scroll", function() {
    // y축으로 스크롤 위치가 200px을 넘어가면
    if(window.scrollY >= 200) {
        headerEl.style.height = '52px'
        logoEl.style.height = '30px'
        logoEl.style.width = '125px'
    } else {
        if(!navOpen){ //네비가 열리지않은 상태일때만
            // 스크롤 위치가 157px 미만이면,
            // 헤더 요소의 높이를 원래대로  돌립니다
            headerEl.style.height = '157px'
            // 로고 요소의 높이 및 너비를 원래대로 300px로 돌립니다
            logoEl.style.height = '130px'
            logoEl.style.width = '540px'
        }
    }
})