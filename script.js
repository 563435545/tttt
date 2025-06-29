let isDark = false;

function openApp(app) {
  document.querySelectorAll('.app-window').forEach(el => el.classList.add('hidden'));
  document.getElementById(app + 'App').classList.remove('hidden');
  if (app === 'clock') updateClock();
}

function toggleDarkMode() {
  isDark = !isDark;
  document.body.classList.toggle('dark', isDark);
}

function updateClock() {
  const el = document.getElementById("clockDisplay");
  if (!el) return;
  setInterval(() => {
    const now = new Date();
    el.textContent = now.toLocaleTimeString();
  }, 1000);
}

function appendCalc(val) {
  const input = document.getElementById('calcInput');
  input.value += val;
}

function clearCalc() {
  document.getElementById('calcInput').value = '';
}

function calculate() {
  const input = document.getElementById('calcInput');
  try {
    input.value = eval(input.value);
  } catch (e) {
    input.value = 'Error';
  }
}

function openWallpaperMenu() {
  openApp('wallpaperMenu');
}

function setWallpaper(type) {
  if (type === 'default') {
    document.body.style.backgroundImage = '';
  } else if (type === 'url') {
    const url = prompt("ใส่ URL ของภาพพื้นหลัง:");
    if (url) document.body.style.backgroundImage = `url('${url}')`;
  }
}

function uploadWallpaper(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      document.body.style.backgroundImage = `url('${reader.result}')`;
    };
    reader.readAsDataURL(file);
  }
}

document.getElementById('lockScreen').addEventListener('click', () => {
  document.getElementById('lockScreen').classList.add('hidden');
  document.getElementById('homeScreen').classList.remove('hidden');
});
