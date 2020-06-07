const headerContainer = document.querySelector(".js-header");

const unLogged =
    `<header class="headerTemplate">
        <a href="/" class="js-home">
            <h1>💻Day Record</h1>
        </a>
        <a href="/login" class="js-login">
            <img src="../static/images/kakao_login_large_narrow.png">
        </a>
    </header>`;

const loggedIn =
    `<header class="headerTemplate">
        <a href="/" class="js-home">
            <h1>💻Day Record</h1>
        </a>
<!--    TODO: 로그아웃 이미지 -->
    </header>`;


function init() {
    headerContainer.insertAdjacentHTML("afterbegin", unLogged);
}

init();