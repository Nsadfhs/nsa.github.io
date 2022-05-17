"use strict";
const $default = document.querySelector("#app_default")
const template =`
    <header id="header" class="header-wrap">
        <a href="" class="header-logo-wrap">
            <img src="" class="header-logo" alt="">
        </a>
        <nav class="header-nav">
            <ul class="header-nav-list">
                <li class="header-nav-item"></li>
            </ul>
        </nav>
    </header>
    <aside class="aside-wrap">
        <nav class="aside-nav">
            <ul class="aside-nav-list">
                <li class="aside-nav-item">
                    
                </li>
            </ul>
        </nav>
    </aside>
    <main class="main-wrap">
        <aside class="main-aside"></aside>
        <section class="main-contents-wrap">
            <article class="">
                <h1 class="main-contents-title"></h1>
                <article clas="">
                    <h2 class="main-contents-title__sub"></h2>
                </article>
            </article>
            <article class="">
                <h1 class="main-contents-title"></h1>
            </article>
        </section>
    </main>
    <aside class="ad-wrap">
        <figure class="ad-img-container">
            <img src="" class="ad-img" alt="">
        </figure>
    </aside>
    <footer class="footer-wrap">
        <nav class="footer-nav">
            <ul class="footer-nav-list">
                <li class="footer-nav-item"></li>
            </ul>
        </nav>
        <address class="footer-info-wrap">
            <ul class="footer-info-list">
                <li class="footer-info-item"></li>
            </ul>
        </address>
    </footer>
`;

$default.innerHTML = template;
