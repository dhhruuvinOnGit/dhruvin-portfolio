document.getElementById("year").textContent=new Date().getFullYear();

const observer=new IntersectionObserver((entries)=>entries.forEach(entry=>{
  if(entry.isIntersecting){
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  }
}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const hero=document.getElementById("heroVisual");
hero.addEventListener("mousemove",e=>{
  if(window.innerWidth<900)return;
  const r=hero.getBoundingClientRect();
  const x=(e.clientX-r.left)/r.width-.5;
  const y=(e.clientY-r.top)/r.height-.5;
  document.querySelector(".card-one").style.transform=`translate(${x*10}px,${y*10}px)`;
  document.querySelector(".card-two").style.transform=`translate(${x*-13}px,${y*-13}px)`;
  document.querySelector(".core-orb").style.margin=`${y*8}px 0 0 ${x*8}px`;
});
hero.addEventListener("mouseleave",()=>{
  document.querySelector(".card-one").style.transform="";
  document.querySelector(".card-two").style.transform="";
  document.querySelector(".core-orb").style.margin="";
});
