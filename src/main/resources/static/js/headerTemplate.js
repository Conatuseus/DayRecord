const headerContainer = document.querySelector(".js-header");

const unLogged =
    `<header>
        <a href="/">
            <h1>💻Day Record</h1>
        </a>
        <a href="/login" class="js-login">
            <img src="../static/images/kakao_login_large_narrow.png">
        </a>
    </header>`;

const loggedIn =
    `
    <header>
        <h1>💻Day Record</h1>
        
    </header>
    `;


function init() {
    headerContainer.insertAdjacentHTML("afterbegin", unLogged);
}

init();