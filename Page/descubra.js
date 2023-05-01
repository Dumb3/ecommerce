const safe = document.getElementById("safe-icon");
const shield = document.getElementById("shield-icon");
const reem = document.getElementById("reembolso-icon");
const bill = document.getElementById("bill-icon");
const terror = document.getElementById("terror-icon");
const book = document.getElementById("book-icon");
const entrega = document.getElementById("entrega-icon");
const send = document.getElementById("send-icon");
const entrega_span = document.querySelector("#span-entrega"); 
const reembolso_span = document.querySelector("#span-reembolso"); 
const book_span = document.querySelector("#span-book"); 
const safe_span = document.querySelector("#span-safe"); 


safe.onmouseover = function(a){
  a.preventDefault();
  shield.style.color = "#4747e9";
  safe_span.setAttribute("style","display: block");
 
};
safe.onmouseout = function(a){
  shield.style.color = "#888888";
  safe_span.setAttribute("style","display: none");
  
};

reem.onmouseover = function(b){
  b.preventDefault();
  bill.style.color = "#3fb33f";
  reembolso_span.setAttribute("style","display: block");
  
};
reem.onmouseout = function(b){
  bill.style.color = "#888888";
  
  reembolso_span.setAttribute("style","display: none");
  
};

terror.onmouseover = function(c){
  c.preventDefault();
  book.style.color = "#5b2eae";
  book_span.setAttribute("style","display: block");
  
};
terror.onmouseout = function(c){
  book.style.color = "#888888";
  book_span.setAttribute("style","display: none");
  
};

entrega.onmouseover = function(d){
  d.preventDefault();
  send.style.color = "#ffa500";
  entrega_span.setAttribute("style","display: block");
  
};
entrega.onmouseout = function(d){
  send.style.color = "#888888";
  entrega_span.setAttribute("style","display: none");
  
  
};



