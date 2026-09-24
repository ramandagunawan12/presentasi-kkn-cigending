const nav=document.getElementById('nav'), menuBtn=document.getElementById('menuBtn');
menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const sections=[...document.querySelectorAll('main section')], links=[...document.querySelectorAll('nav a')], progress=document.getElementById('progress');
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.querySelectorAll('.reveal').forEach(x=>x.classList.add('visible'));
      const id=e.target.id;
      links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+id));
    }
  });
},{threshold:.25});
sections.forEach(s=>observer.observe(s));

window.addEventListener('scroll',()=>{
  const h=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width=(window.scrollY/Math.max(h,1)*100)+'%';
});

document.querySelectorAll('.photo').forEach((p,i)=>{
  p.addEventListener('click',()=>{
    const inner=p.querySelector('.photo-inner');
    if(p.dataset.open){
      p.style.position=''; p.style.zIndex=''; p.style.transform='';
      p.dataset.open='';
    }else{
      p.dataset.open='1'; p.style.position='relative'; p.style.zIndex='20';
      p.style.transform='scale(1.03)';
    }
  });
});
