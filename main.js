// 导航栏菜单切换功能
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    // 添加过渡效果
    if (navLinks.style.maxHeight) {
        navLinks.style.maxHeight = null;
    } else {
        navLinks.style.maxHeight = navLinks.scrollHeight + "px";
    }
});
// 模拟滚动加载数据
const teaCards = document.querySelector('.tea-cards');
let page = 1;
const limit = 3;

window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 200) {
        // 模拟加载新数据
        page++;
        loadMoreTeaCards(page, limit);
    }
});

function loadMoreTeaCards(page, limit) {
    // 这里可以通过 AJAX 请求获取新的茶叶卡片数据
    // 为了简单，这里模拟添加新的卡片
    for (let i = 0; i < limit; i++) {
        const newCard = document.createElement('div');
        newCard.classList.add('tea-card');
        newCard.innerHTML = `
            <img src="../assets/images/green-tea.jpg" alt="绿茶">
            <h3>绿茶</h3>
            <p>清新爽口，富含多种营养成分</p>
            <a href="green-tea.html" class="btn">查看详情</a>
        `;
        teaCards.appendChild(newCard);
    }
}
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const teaCards = document.querySelectorAll('.tea-card');

searchButton.addEventListener('click', () => {
    const keyword = searchInput.value.toLowerCase();
    teaCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(keyword)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});