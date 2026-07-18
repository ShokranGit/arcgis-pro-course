// Shared behavior for lab widget pages (accordion open/close, access-code gating,
// and hash-based deep-linking). Reused by every lab page via extra_javascript in mkdocs.yml.
function toggleOpen(btn, panelId){
  var panel = document.getElementById(panelId);
  var isOpen = panel.classList.contains('show');
  panel.classList.toggle('show', !isOpen);
  btn.setAttribute('aria-expanded', String(!isOpen));
}
function toggleGated(btn, panelId){
  var panel = document.getElementById(panelId);
  var isOpen = panel.classList.contains('show');
  panel.classList.toggle('show', !isOpen);
  btn.setAttribute('aria-expanded', String(!isOpen));
}
function checkCode(key){
  var input = document.getElementById('gateinput-' + key);
  var error = document.getElementById('gateerror-' + key);
  var val = input.value.trim();
  if(val === (window.ACCESS_CODES || {})[key]){
    var panel = document.getElementById('panel-' + key);
    panel.classList.add('unlocked');
    panel.classList.add('show');
    document.getElementById('gateform-' + key).style.display = 'none';
    document.getElementById('gatecontent-' + key).style.display = 'block';
    var swatch = document.getElementById('swatch-' + key);
    swatch.classList.remove('locked');
    swatch.classList.add('open');
    swatch.innerHTML = '&#10003;';
    var tag = document.getElementById('tag-' + key);
    tag.classList.remove('tag-locked');
    tag.classList.add('tag-open');
    tag.textContent = 'open';
    error.style.display = 'none';
    var btn = document.querySelector('[aria-controls="panel-' + key + '"]');
    if(btn){ btn.setAttribute('aria-expanded', 'true'); }
  } else {
    error.style.display = 'block';
  }
}
function labRevealForHash(){
  if(!location.hash) return;
  var id = decodeURIComponent(location.hash.slice(1));
  var el = document.getElementById(id);
  if(!el || !el.closest) return;
  var panel = el.closest('.panel');
  if(!panel) return;
  var isGated = (panel.id === 'panel-proj' || panel.id === 'panel-result');
  if(!isGated || panel.classList.contains('unlocked')){
    if(!panel.classList.contains('show')){
      panel.classList.add('show');
      var btn = document.querySelector('[aria-controls="' + panel.id + '"]');
      if(btn){ btn.setAttribute('aria-expanded', 'true'); }
    }
    setTimeout(function(){ el.scrollIntoView({block:'start'}); }, 60);
  } else {
    var btn2 = document.querySelector('[aria-controls="' + panel.id + '"]');
    if(btn2){ setTimeout(function(){ btn2.scrollIntoView({block:'start'}); }, 60); }
  }
}
window.addEventListener('hashchange', labRevealForHash);
window.addEventListener('DOMContentLoaded', labRevealForHash);
