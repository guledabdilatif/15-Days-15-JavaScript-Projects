const TabBodyImg = document.querySelectorAll('.tab-body-img');
const TabNav = document.querySelectorAll('.tab-nav');

TabNav.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        removeActive();
        removeActiveTab();
        TabBodyImg[index].classList.add('active');
        tab.classList.add('activeTab')
    })
})

function removeActive() {
    TabBodyImg.forEach((tabBody) => {
        tabBody.classList.remove('active')
    })
}

function removeActiveTab() {
    TabNav.forEach((tab) => {
        tab.classList.remove('activeTab')
    })
}

