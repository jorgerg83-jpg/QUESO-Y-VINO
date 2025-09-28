function setLang(lang){
  document.querySelectorAll('[data-lang]').forEach(el=> el.style.display = (el.getAttribute('data-lang')===lang) ? '' : 'none');
  document.querySelectorAll('.lang-btn').forEach(b => { b.classList.toggle('active', b.dataset.lang===lang) });
}
document.addEventListener('DOMContentLoaded', ()=> {
  setLang('es');
  document.querySelectorAll('.lang-btn').forEach(b=> b.addEventListener('click', ()=> setLang(b.dataset.lang)));
});
