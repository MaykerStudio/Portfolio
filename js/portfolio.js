(function () {
  'use strict';

  // #region YouTube helper
  function getYoutubeThumbnail(src, quality = 'maxres') {
    const match = src.match(
      /(?:embed\/|watch\?v=|youtu\.be\/)([^?&/]+)/i
    );

    if (!match) return '';

    const videoId = match[1];
    const base = `https://i.ytimg.com/vi/${videoId}`;

    const thumbnails = {
      maxres: `${base}/maxresdefault.jpg`,
      sd: `${base}/sddefault.jpg`,
      hq: `${base}/hqdefault.jpg`
    };

    return thumbnails[quality] || thumbnails.hq;
  }
  // #endregion

  // #region Project Card Rendering
  function renderProjectCards() {
    const grid = document.getElementById('projects-grid');

    if (!grid || !window.PROJECTS) return;

    grid.innerHTML = window.PROJECTS
      .map(p => {
        const carouselImages = p.media
          .map(m => {
            if (!m.type || m.type === 'image') return m.src;
            if (m.type === 'youtube') {
              return m.thumb || getYoutubeThumbnail(m.src, 'hq');
            }
            return null;
          })
          .filter(Boolean);

        const firstBg = carouselImages[0] || '';

        return `
<div class="project-card reveal" data-project-id="${p.id}">
  <div class="project-media" data-project-preview data-carousel-images='${JSON.stringify(carouselImages)}' style="background-image: url('${firstBg}'); background-size: cover; background-position: center; background-repeat: no-repeat;">
  </div>
  <div class="project-content">
    <div class="project-tag">${p.category}</div>
    <h3>${p.title}</h3>
    <p>${p.description}</p>
    <div class="tech-stack">
      ${p.stack.map(t => `<div class="tech-pill">${t}</div>`).join('')}
    </div>
    <button class="btn-view-project">View Details →</button>
  </div>
</div>`;
      })
      .join('');

    grid.querySelectorAll('.project-media').forEach(media => {
      const img = new Image();
      img.onload = () => { };
      img.onerror = () => {
        const current = media.style.backgroundImage;
        media.style.backgroundImage = current.replace('maxresdefault', 'hqdefault');
      };
      const bg = media.style.backgroundImage
        .replace(/url\(["']?/, '')
        .replace(/["']?\)/, '');
      img.src = bg;
    });

    grid.querySelectorAll('.reveal').forEach(el => {
      gsap.set(el, { opacity: 0, y: 40 });
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%'
        }
      });
    });

    grid.querySelectorAll('[data-project-id]').forEach(card => {
      card.addEventListener('click', () => {
        const project = window.PROJECTS.find(p => p.id === card.dataset.projectId);
        if (project && modalInstance) {
          modalInstance.open(project);
        }
      });
    });
  }

  let previewIntervals = [];

  function InitializeProjectPreviewCarousel() {

    stopAllPreviewCarousels();

    const previews =
      document.querySelectorAll(
        '[data-project-preview]'
      );

    previews.forEach(preview => {

      const images =
        JSON.parse(
          preview.dataset.carouselImages
        );

      if (
        !images ||
        images.length <= 1
      )
        return;

      let current = 0;

      const update = () => {

        preview.style.backgroundImage =
          `url('${images[current]}')`;

        preview.style.backgroundSize =
          'cover';

        preview.style.backgroundPosition =
          'center';

        preview.style.backgroundRepeat =
          'no-repeat';

      };

      update();

      const interval =
        setInterval(() => {

          current =
            (current + 1)
            % images.length;

          update();

        }, 2000);

      previewIntervals.push(
        interval
      );

    });

  }

  function stopAllPreviewCarousels() {

    previewIntervals.forEach(
      clearInterval
    );

    previewIntervals = [];

  }

  function startAllPreviewCarousels() {

    InitializeProjectPreviewCarousel();

  }
  // #endregion

  // #region Skills Rendering
  function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;

    const keys = Object.keys(SKILLS);

    const tabsHTML = `
      <div class="skills-tabs">
        ${keys.map((k, i) => `
          <button class="skill-tab${i === 0 ? ' is-active' : ''}" data-tab="${k}">
            ${SKILLS[k].label}
          </button>
        `).join('')}
      </div>
    `;

    const panelsHTML = keys.map((k, i) => `
      <div class="skills-panel${i === 0 ? ' is-active' : ''}" data-panel="${k}">
        ${SKILLS[k].items.map(item => `
          <div class="skill-item">
            <div class="skill-item-name">${item.name}</div>
            <div class="skill-item-desc">${item.desc}</div>
          </div>
        `).join('')}
      </div>
    `).join('');

    container.innerHTML = tabsHTML + panelsHTML;

    container.querySelectorAll('.skill-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const key = tab.dataset.tab;

        container.querySelectorAll('.skill-tab').forEach(t => t.classList.remove('is-active'));
        container.querySelectorAll('.skills-panel').forEach(p => p.classList.remove('is-active'));

        tab.classList.add('is-active');
        const panel = container.querySelector(`[data-panel="${key}"]`);
        if (!panel) return;

        panel.classList.add('is-active');

        gsap.from(panel.querySelectorAll('.skill-item'), {
          opacity: 0,
          y: 14,
          duration: 0.38,
          stagger: 0.055,
          ease: 'power2.out'
        });
      });
    });
  }
  // #endregion

  // #region Project Modal (no autoplay)
  class ProjectModal {
    constructor() {
      this._carouselIndex = 0;
      this._mediaCount = 0;
      this._build();
      this._bindKeyboard();
    }

    _build() {
      this.overlay = document.createElement('div');
      this.overlay.className = 'modal-overlay';
      this.overlay.setAttribute('aria-hidden', 'true');

      this.overlay.innerHTML = `
        <div class="modal-container" role="dialog" aria-modal="true">
          <div class="modal-layout">
            <div class="modal-media">
              <div class="carousel">
                <div class="carousel-track-wrapper">
                  <div class="carousel-track"></div>
                </div>
                <div class="carousel-footer">
                  <button class="carousel-btn js-prev" aria-label="Previous slide">&#8592;</button>
                  <div class="carousel-indicators"></div>
                  <button class="carousel-btn js-next" aria-label="Next slide">&#8594;</button>
                </div>
              </div>
            </div>
            <div class="modal-content">
              <div class="modal-header">
                <div>
                  <div class="modal-tag"></div>
                  <h2 class="modal-title"></h2>
                  <p class="modal-subtitle"></p>
                </div>
                <button class="modal-close js-close" aria-label="Close">&#10005;</button>
              </div>
              <p class="modal-desc"></p>
              <div class="modal-role"></div>
              <div>
                <div class="modal-section-label">Tech Stack</div>
                <div class="modal-stack"></div>
              </div>
              <div>
                <div class="modal-section-label">Technical Highlights</div>
                <div class="modal-highlights"></div>
              </div>
              <div class="modal-cs-grid">
                <div class="modal-cs-item challenge">
                  <div class="modal-cs-label">&#9889; Challenge</div>
                  <p class="modal-cs-text js-challenge"></p>
                </div>
                <div class="modal-cs-item solution">
                  <div class="modal-cs-label">&#10003; Solution</div>
                  <p class="modal-cs-text js-solution"></p>
                </div>
              </div>
              <div class="modal-links"></div>
            </div>
          </div>
        </div>
      `;

      document.body.appendChild(this.overlay);

      this._container = this.overlay.querySelector('.modal-container');
      this._track = this.overlay.querySelector('.carousel-track');
      this._indicators = this.overlay.querySelector('.carousel-indicators');

      this.overlay.querySelector('.js-prev').addEventListener('click', () => this._go(-1));
      this.overlay.querySelector('.js-next').addEventListener('click', () => this._go(1));
      this.overlay.querySelector('.js-close').addEventListener('click', () => this.close());
      this.overlay.addEventListener('click', e => { if (e.target === this.overlay) this.close(); });
    }

    _bindKeyboard() {
      document.addEventListener('keydown', e => {
        if (!this.overlay.classList.contains('is-open')) return;
        if (e.key === 'Escape') this.close();
        if (e.key === 'ArrowLeft') this._go(-1);
        if (e.key === 'ArrowRight') this._go(1);
      });
    }

    open(project) {
      // Stop background carousels on project cards
      stopAllPreviewCarousels();

      this._carouselIndex = 0;
      this._populate(project);
      this.overlay.setAttribute('aria-hidden', 'false');
      this.overlay.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      this.overlay.querySelector('.modal-content').scrollTop = 0;
    }

    close() {
      this.overlay.classList.remove('is-open');
      this.overlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';

      // Re-apply background styles and resume carousels
      startAllPreviewCarousels();
    }

    _populate(p) {
      this.overlay.querySelector('.modal-tag').textContent = p.category || '';
      this.overlay.querySelector('.modal-title').textContent = p.title || '';
      this.overlay.querySelector('.modal-subtitle').textContent = p.subtitle || '';
      this.overlay.querySelector('.modal-desc').textContent = p.description || '';
      this.overlay.querySelector('.modal-role').textContent = p.role || '';
      this.overlay.querySelector('.js-challenge').textContent = p.challenge || '';
      this.overlay.querySelector('.js-solution').textContent = p.solution || '';

      this.overlay.querySelector('.modal-stack').innerHTML =
        (p.stack || []).map(t => `<div class="tech-pill">${t}</div>`).join('');

      this.overlay.querySelector('.modal-highlights').innerHTML =
        (p.highlights || []).map(h => `<div class="modal-highlight-item">${h}</div>`).join('');

      const links = p.links || {};
      this.overlay.querySelector('.modal-links').innerHTML =
        Object.entries(links)
          .filter(([, v]) => v)
          .map(([k, v]) => {
            const label = k.charAt(0).toUpperCase() + k.slice(1);
            const isPrimary = k === 'demo' ? ' is-primary' : '';
            return `<a href="${v}" class="modal-link-btn${isPrimary}" target="_blank" rel="noopener noreferrer">${label}</a>`;
          }).join('');

      this._buildCarousel(p.media || []);
    }

    _buildCarousel(media) {
      this._mediaCount = media.length;
      this._youtubeLoaded = new Array(media.length).fill(false);

      this._track.innerHTML = media.map((m, i) => {
        if (m.type === 'video') {
          return `<div class="carousel-item"><video src="${m.src}" autoplay muted loop playsinline style="width:100%; height:100%; object-fit: cover;"></video></div>`;
        }
        if (m.type === 'youtube') {
          return `<div class="carousel-item youtube-placeholder" data-youtube-src="${m.src}" data-index="${i}"></div>`;
        }
        return `<div class="carousel-item"><img src="${m.src}" alt="${m.alt || ''}" loading="lazy" style="width:100%; height:100%; object-fit: cover;"></div>`;
      }).join('');

      this._indicators.innerHTML = media.map((_, i) => `
        <button class="carousel-dot${i === 0 ? ' is-active' : ''}" data-index="${i}" aria-label="Go to slide ${i + 1}"></button>
      `).join('');

      this._indicators.querySelectorAll('.carousel-dot').forEach(dot => {
        dot.addEventListener('click', () => this._set(parseInt(dot.dataset.index, 10)));
      });

      this._carouselIndex = 0;
      this._render();
      this._loadYoutubeSlide(0);
    }

    _render() {
      this._track.style.transform = `translateX(-${this._carouselIndex * 100}%)`;
      this._indicators.querySelectorAll('.carousel-dot').forEach((dot, i) => {
        dot.classList.toggle('is-active', i === this._carouselIndex);
      });
      this._loadYoutubeSlide(this._carouselIndex);
    }

    _loadYoutubeSlide(index) {
      if (this._youtubeLoaded[index]) return;
      const placeholder = this._track.querySelector(`.youtube-placeholder[data-index="${index}"]`);
      if (!placeholder) return;

      const src = placeholder.dataset.youtubeSrc;
      const iframe = document.createElement('iframe');
      iframe.src = src;
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
      iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('title', 'YouTube video player');
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.border = 'none';

      placeholder.innerHTML = '';
      placeholder.appendChild(iframe);
      placeholder.classList.remove('youtube-placeholder');
      this._youtubeLoaded[index] = true;
    }

    _go(dir) {
      if (this._mediaCount < 2) return;
      this._carouselIndex = (this._carouselIndex + dir + this._mediaCount) % this._mediaCount;
      this._render();
    }

    _set(index) {
      this._carouselIndex = index;
      this._render();
    }
  }
  // #endregion

  // #region Init
  let modalInstance;

  function init() {
    renderProjectCards();
    InitializeProjectPreviewCarousel();
    renderSkills();
    modalInstance = new ProjectModal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  // #endregion
})();