/*
 * Expected button markup contract (written by later tasks, handled here):
 *
 *   <button class="yt-facade" data-video-id="{ID}" data-title="...">
 *     <img src="https://i.ytimg.com/vi/{ID}/hqdefault.jpg" alt="..." loading="lazy">
 *     <span class="yt-facade-play" aria-hidden="true"></span>
 *   </button>
 *
 * Contract notes:
 * - Only `data-video-id` (YouTube ID) and optional `data-title` are read by this script.
 * - Button children (img thumbnail + play overlay span) are informational only; activation
 *   replaces the whole button with the iframe below, so any inner markup is discarded.
 * - Native <button> keyboard behavior (Enter/Space fires click) is preserved; do not add
 *   extra key handlers or call preventDefault on keys.
 */
(function () {
  'use strict';

  var EMBED_BASE = 'https://www.youtube.com/embed/';
  var EMBED_PARAMS = '?rel=0&modestbranding=1&playsinline=1&autoplay=1';
  var ALLOW = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  var FALLBACK_TITLE = 'YouTube video player';

  function buildSrc(videoId) {
    var src = EMBED_BASE + encodeURIComponent(videoId) + EMBED_PARAMS;
    try {
      if (
        typeof location !== 'undefined' &&
        typeof location.origin === 'string' &&
        location.origin.indexOf('http') === 0
      ) {
        src += '&origin=' + encodeURIComponent(location.origin);
      }
    } catch (err) {
      /* file:// or sandboxed context: omit origin param */
    }
    return src;
  }

  function activate(button) {
    if (!button || button.dataset.activated === 'true') {
      return;
    }
    var videoId = (button.dataset.videoId || '').trim();
    if (!videoId) {
      return;
    }
    button.dataset.activated = 'true';

    var iframe = document.createElement('iframe');
    iframe.src = buildSrc(videoId);
    iframe.setAttribute(
      'allow',
      ALLOW
    );
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
    iframe.setAttribute('title', (button.dataset.title || '').trim() || FALLBACK_TITLE);
    iframe.className = 'video-frame';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.setAttribute('frameborder', '0');

    if (typeof button.replaceWith === 'function') {
      button.replaceWith(iframe);
    } else if (button.parentNode) {
      button.parentNode.replaceChild(iframe, button);
    }
  }

  function bind(scope) {
    var buttons = (scope || document).querySelectorAll('.yt-facade');
    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i].dataset.facadeBound !== 'true') {
        buttons[i].dataset.facadeBound = 'true';
        buttons[i].addEventListener('click', activate.bind(null, buttons[i]));
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      bind(document);
    });
  } else {
    bind(document);
  }
})();
