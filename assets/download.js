(function () {
  const URLS = {
    windows: {
      url: 'https://github.com/WaleedNaeem/noorani-browser/releases/download/v1.0.0-alpha/Noorani-Browser-Setup-1.0.0-alpha.exe',
      size: '95 MB',
      label: 'Windows',
      ext: '.exe'
    },
    mac: {
      url: 'https://github.com/WaleedNaeem/noorani-browser/releases/download/v1.0.0-alpha/Noorani-Browser-1.0.0-alpha.dmg',
      size: '108 MB',
      label: 'macOS',
      ext: '.dmg'
    },
    linux: {
      url: 'https://github.com/WaleedNaeem/noorani-browser/releases/download/v1.0.0-alpha/Noorani-Browser-1.0.0-alpha.AppImage',
      size: '114 MB',
      label: 'Linux',
      ext: '.AppImage'
    }
  };

  function detectOS() {
    const ua = navigator.userAgent.toLowerCase();
    const platform = (navigator.platform || '').toLowerCase();
    if (/iphone|ipad|ipod|android/.test(ua)) return 'mobile';
    if (/win/.test(platform) || /windows/.test(ua)) return 'windows';
    if (/mac/.test(platform) || /macintosh/.test(ua)) return 'mac';
    if (/linux/.test(platform) || /linux/.test(ua)) return 'linux';
    return 'unknown';
  }

  function renderSmart(container) {
    const os = detectOS();

    if (os === 'mobile' || os === 'unknown') {
      container.innerHTML = `
        <div class="platform-row">
          ${['windows', 'mac', 'linux'].map(k => `
            <a href="${URLS[k].url}" class="platform-btn" data-platform="${k}" target="_blank" rel="noopener">
              <span class="platform-label">
                <span class="small">DOWNLOAD FOR</span>
                <span class="big">${URLS[k].label}</span>
              </span>
              <span class="platform-size">${URLS[k].size}</span>
            </a>
          `).join('')}
        </div>
        <p class="download-advisory">Unsigned alpha build. Windows: you may see a SmartScreen warning — click "More info" → "Run anyway". macOS: right-click the .dmg and choose Open to bypass Gatekeeper.</p>
        <p class="download-version">Version 1.0.0-alpha · Released April 2026</p>
      `;
      return;
    }

    const primary = URLS[os];
    const others = Object.keys(URLS).filter(k => k !== os);

    container.innerHTML = `
      <a href="${primary.url}" class="download-primary" data-platform="${os}" target="_blank" rel="noopener">
        <span class="download-primary-label">Download for ${primary.label}</span>
        <span class="download-primary-size">${primary.label} · ${primary.size}</span>
      </a>
      <p class="download-others">
        Also available for
        <a href="${URLS[others[0]].url}" data-platform="${others[0]}" target="_blank" rel="noopener">${URLS[others[0]].label}</a>
        ·
        <a href="${URLS[others[1]].url}" data-platform="${others[1]}" target="_blank" rel="noopener">${URLS[others[1]].label}</a>
      </p>
      <p class="download-advisory">Unsigned alpha build. Windows: you may see a SmartScreen warning — click "More info" → "Run anyway". macOS: right-click the .dmg and choose Open to bypass Gatekeeper.</p>
      <p class="download-version">Version 1.0.0-alpha · Released April 2026</p>
    `;
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-download-smart]').forEach(renderSmart);
  });
})();
