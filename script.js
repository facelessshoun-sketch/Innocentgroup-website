const menuBtn=document.querySelector(".menu-btn");
const nav=document.querySelector("#navMenu");
menuBtn.addEventListener("click",()=>{
  const open=nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded",String(open));
});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
  nav.classList.remove("open");
  menuBtn.setAttribute("aria-expanded","false");
}));
document.querySelector("#year").textContent=new Date().getFullYear();

document.querySelector("#quoteForm").addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.querySelector("#name").value.trim();
  const phone=document.querySelector("#phone").value.trim();
  const email=document.querySelector("#email").value.trim();
  const service=document.querySelector("#service").value || "General enquiry";
  const message=document.querySelector("#message").value.trim();
  const body=[
    "Hello Innocent Group (PTY) LTD,","",
    `Name: ${name}`,`Phone: ${phone}`,`Email: ${email}`,
    `Service: ${service}`,`Enquiry: ${message}`
  ].join("\n");
  window.open(`https://wa.me/27763635425?text=${encodeURIComponent(body)}`,"_blank","noopener");
});
