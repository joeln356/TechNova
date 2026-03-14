// Animação Para O Botão do Menu (Mobile)

const menu_btn = document.getElementById('menu-btn')

menu_btn.addEventListener('click', ()=>{

    menu_btn.classList.toggle('btn-animation')
    menu_btn.classList.toggle('Show')
})