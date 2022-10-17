// funcao menuopener que abre o menu e fecha o menu
function menuopener() {
  let menuArea = document.getElementById("menu-area");

  if (menuArea.style.width == "0px") {
    // se o menu estiver fechado
    menuArea.style.width = "250px"; // abre o menu
  } else {
    // se o menu estiver aberto
    menuArea.style.width = "0px"; // fecha o menu
  }
}
