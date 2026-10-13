import { useState, useRef, useEffect } from 'react';

/**
 * Manage the activation of a semantic-ui Embed video (a fake play button shown
 * over a preview/cover image) and move focus to the real video element (the
 * <iframe> for YouTube/Vimeo/external embeds, or the <video> for internal/mp4
 * sources) as soon as it is rendered.
 *
 * When a cover image is set, the only focusable element is the fake play button;
 * once activated, semantic-ui hides the placeholder and the play icon
 * (display: none), which would otherwise drop focus on the <body>. Screen
 * reader and keyboard users would then lose the context and not realize a video
 * appeared. Controlling the `active` state lets us move focus into the freshly
 * mounted player instead.
 *
 * Usage:
 * const { wrapperRef, active, activate } = useVideoEmbedFocus();
 * <div ref={wrapperRef}>
 *   <Embed active={active} onClick={activate} ... />
 * </div>
 */
export const useVideoEmbedFocus = () => {
  const wrapperRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!active || !wrapperRef.current) {
      return;
    }
    // The activated media can be an <iframe> (YouTube/Vimeo/external embeds)
    // or a <video> (internal/mp4 sources). Focus whichever one appeared so the
    // user is taken into the real player instead of losing focus on the <body>.
    const media = wrapperRef.current.querySelector('iframe, video');
    if (media) {
      media.setAttribute('tabindex', '0');
      media.focus();
    }
  }, [active]);

  useEffect(() => {
    const node = wrapperRef.current;
    if (!node || typeof MutationObserver === 'undefined') {
      return;
    }
    const setPlaceholderAlt = () => {
      node.querySelectorAll('img.placeholder:not([alt])').forEach((img) => {
        img.setAttribute('alt', '');
      });
    };
    setPlaceholderAlt();
    const observer = new MutationObserver(setPlaceholderAlt);
    observer.observe(node, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  const activate = () => setActive(true);

  return { wrapperRef, active, activate };
};
