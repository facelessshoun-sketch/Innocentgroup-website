const menuBtn=document.querySelector(".menu-btn"),nav=document.querySelector("#navMenu");
menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.querySelector("#year").textContent=new Date().getFullYear();

document.querySelector("#quoteForm").addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.querySelector("#name").value.trim();
  const phone=document.querySelector("#phone").value.trim();
  const email=document.querySelector("#email").value.trim();
  const service=document.querySelector("#service").value || "General enquiry";
  const message=document.querySelector("#message").value.trim();
  const text=`Hello Innocent Group (PTY) LTD,%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AEmail: ${encodeURIComponent(email)}%0AService: ${encodeURIComponent(service)}%0AEnquiry: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/27763635425?text=${text}`,"_blank");
});
