const exit = document.querySelector("#burger-equis");
const icon = document.querySelector("#burger-bar");
const cart = document.querySelector(".cart");
const login = document.querySelector(".login");
const container = document.querySelector("#logo");

icon.onclick = function(a){
  a.preventDefault();
  container.setAttribute("style","height: 120px");
  cart.setAttribute("style","display: flex");
  login.setAttribute("style","display:flex");
  icon.setAttribute("style","display:none");
  exit.setAttribute("style","display:block");
}
exit.onclick = function(b){
  b.preventDefault();
  container.setAttribute("style","height: 60px");
  cart.setAttribute("style","display: none");
  login.setAttribute("style","display:none");
  icon.setAttribute("style","display:block");
  exit.setAttribute("style","display:none");

}


