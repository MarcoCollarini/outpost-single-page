const nav=document.querySelector('.nav'),menu=document.querySelector('.menu');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>30),{passive:true});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
if(!matchMedia('(prefers-reduced-motion: reduce)').matches){addEventListener('scroll',()=>{const city=document.querySelector('.city-bg');if(city){const r=city.parentElement.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)city.style.transform=`scale(1.05) translateY(${r.top*.035}px)`}},{passive:true})}
document.getElementById('year').textContent=new Date().getFullYear();
