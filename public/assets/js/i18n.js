(function () {
  let currentLang = localStorage.getItem('lang') || 'en';

  function applyLanguage(lang) {
    document.querySelectorAll('[data-en][data-zh]').forEach(el => {
      const text = el.getAttribute('data-' + lang);
      if (text) {
        if (text.includes('<') && text.includes('>')) {
          el.innerHTML = text;
        } else {
          el.textContent = text;
        }
      }
    });
    document.querySelectorAll('[data-i18n-placeholder-en]').forEach(el => {
      const tpl = el.getAttribute('data-i18n-placeholder-' + lang);
      if (tpl) {
        const count = el.getAttribute('data-count') || '';
        el.setAttribute('placeholder', tpl.replace('{n}', count));
      }
    });
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  }

  function updateSwitch() {
    const sw = document.getElementById('langSwitch');
    if (!sw) return;
    sw.setAttribute('data-active', currentLang);
    sw.querySelectorAll('.lang-option').forEach(opt => {
      opt.classList.toggle('active', opt.dataset.lang === currentLang);
    });
  }

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    applyLanguage(lang);
    updateSwitch();
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLang);
    updateSwitch();
    const sw = document.getElementById('langSwitch');
    if (sw) {
      sw.querySelectorAll('.lang-option').forEach(opt => {
        opt.addEventListener('click', () => {
          const lang = opt.dataset.lang;
          if (lang !== currentLang) setLanguage(lang);
        });
      });
    }
  });
})();
