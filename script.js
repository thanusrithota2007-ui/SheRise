function go(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  var page = document.getElementById(id);
  var nav  = document.getElementById('n-' + id);
  if (page) page.classList.add('active');
  if (nav)  nav.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById('navLinks').classList.remove('open');
}

function showTab(id, el) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  var panel = document.getElementById(id);
  if (panel) panel.classList.add('active');
  if (el) el.classList.add('active');
}

function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

window.addEventListener('scroll', function () {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 20);
});

function submitForm() {
  var name  = document.getElementById('fname').value.trim();
  var email = document.getElementById('femail').value.trim();
  var msg   = document.getElementById('fmsg').value.trim();
  var re    = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  var fgName  = document.getElementById('fg-name');
  var fgEmail = document.getElementById('fg-email');
  var fgMsg   = document.getElementById('fg-msg');

  fgName.classList.toggle('err', !name);
  fgEmail.classList.toggle('err', !email || !re.test(email));
  fgMsg.classList.toggle('err', !msg);

  if (!name || !re.test(email) || !msg) return;

  document.getElementById('formBody').style.display = 'none';
  document.getElementById('formOk').classList.add('show');
}