

// Open And Close Sidebar
const sidebar = document.getElementById('sidebar'),
    sidebarCloseIcon = document.getElementById('btn_close_sidebar'),
    sidebarOpenIcon = document.getElementById('btn_open_sidebar'),
    overlay = document.getElementById('overlay');

function openSidebar() {
    sidebar.classList.add('absolute','z-50', 'flex' , 'flex-row-reverse')
    sidebar.classList.remove('hidden');

    sidebarCloseIcon.classList.remove('hidden')
    sidebarCloseIcon.classList.add('flex')

    document.body.classList.add('overflow-hidden')

    overlay.classList.remove('hidden')
}

function closeSidebar() {
    sidebar.classList.remove('absolute','z-50' , 'flex' , 'flex-row-reverse')
    sidebar.classList.add('hidden');

    sidebarCloseIcon.classList.add('hidden')
    sidebarCloseIcon.classList.remove('flex')

    document.body.classList.remove('overflow-hidden')

    overlay.classList.add('hidden')
}

sidebarOpenIcon.addEventListener('click' , () => openSidebar() );
sidebarCloseIcon.addEventListener('click' , () => closeSidebar())
overlay.addEventListener('click' , () => closeSidebar())
window.addEventListener('resize' , () => closeSidebar())


// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
    document.documentElement.classList.add('dark')
}else{
    document.documentElement.classList.remove('dark')
}

///click btn dark-theme
const btnDark = document.getElementById('dark-theme')

btnDark.addEventListener("click", () => {
    if(document.documentElement.classList.contains('dark')){
        localStorage.theme = 'light'
        document.documentElement.classList.remove('dark')
    }else{
        localStorage.theme = 'dark'
        document.documentElement.classList.add('dark')
    }
})

// Open Menu Nav
const btnOpenMenuNav = document.getElementById('btn_open_menuNav')
const menuNav = document.getElementById('menuNav')

btnOpenMenuNav.addEventListener("click",(e)=> {
    if(menuNav.classList.contains('hidden')){
        menuNav.classList.remove('hidden')
        menuNav.classList.add('flex')
        e.stopPropagation();
    }else{
        menuNav.classList.remove('flex')
        menuNav.classList.add('hidden')
        e.stopPropagation();
    }
})

//click not target close menuNav
document.addEventListener("click",(e) => {
    if(menuNav.classList.contains('flex')){
        if(e.target !== menuNav){
            menuNav.classList.remove('flex')
            menuNav.classList.add('hidden')
            e.stopPropagation();
        }
    }
})
