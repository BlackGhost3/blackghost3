(()=>{
 let h = document.createElement("h1");
 let p = document.createElement("p");
 let bg = "#000000";
 let f = ``;
 h.textContent = "hey there, i'm still building this site";
 document.body.appendChild(h);
 document.body.appendChild(p);
 document.addEventListener("mousemove", e => {
  bg = `#${e.clientX}${e.clientY}`;
  f = `x: ${e.clientX}, y: ${e.clientY}`;
  f += `<br/>background-color: ${bg}`;
  p.textContent = f;
  document.body.style.backgroundColor = bg;
 });
})();
