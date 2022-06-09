const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
    <img src="weblogo.png" class="brand-logo" alt="">
    <div class="nav-items">
        <div class="search">
            <input type="text" class="search-box" placeholder="search livestocks">
            <button class="search-btn">search</button>
        </div>
        <a href="#"><img src="user.png" alt=""></a>
        <a href="#"><img src="cart.png" alt=""></a>
    </div>
</div>
<ul class="links-container">
    <li class="link-item"><a href="#" class="link">Cow</a></li>
    <li class="link-item"><a href="#" class="link">Swine</a></li>
    <li class="link-item"><a href="#" class="link">Chickens</a></li>
    <li class="link-item"><a href="#" class="link">Rabbits</a></li>
    <li class="link-item"><a href="#" class="link">Goats</a></li>
    <li class="link-item"><a href="#" class="link">Others...</a></li>
</ul>
</nav>
    `;
}

createNav();