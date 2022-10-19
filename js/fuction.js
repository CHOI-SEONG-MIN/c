document.addEventListener('DOMContentLoaded', function(){
    const $btn = document.querySelector('header>.btn');
    const $nav = document.querySelector('header>nav');

    window.addEventListener('resize', function(){
        if (this.innerWidth > 640) {
            $nav.style.display = 'block';
        } else {
            $nav.style.display = 'none';
        }
    });
    
    
    //모바일에서 햄버거메뉴 처리
    $btn.addEventListener('click', function () {
        if($nav.style.display==='none'){
            $nav.style.display = 'block';
        }else{
            $nav.style.display = 'none';
        }
        
    });
                
    //브라우저 크기가 640px 보다 커지면 메뉴가 보이게 설정
    $nav.addEventListener('mouseleave', function () {
        if (window.innerWidth <= 640) {
            this.style.display = 'none';
        }
    });
});