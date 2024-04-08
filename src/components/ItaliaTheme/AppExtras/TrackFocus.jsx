import React, { useEffect, useRef } from 'react';

const DATA_FOCUS_MOUSE = 'data-focus-mouse';
const CLASS_NAME_MOUSE_FOCUS = 'focus--mouse';

const TrackFocus = () => {
  const usingMouse = useRef(false);

  useEffect(() => {
    const handleEvent = (e) => {
      usingMouse.current = e.type === 'mousedown';
    };
    const handleFocusChange = (e) => {
      if (e.target) {
        if (usingMouse.current) {
          e.target.classList.add(CLASS_NAME_MOUSE_FOCUS);
          e.target.setAttribute(DATA_FOCUS_MOUSE, true);
        } else {
          e.target.classList.remove(CLASS_NAME_MOUSE_FOCUS);
          e.target.removeAttribute(DATA_FOCUS_MOUSE);
        }
      }
    };
    const handleFocusOut = (e) => {
      if (e.target) {
        e.target.classList.remove(CLASS_NAME_MOUSE_FOCUS);
        e.target.removeAttribute(DATA_FOCUS_MOUSE);
      }
    };

    document.addEventListener('keydown', handleEvent);
    document.addEventListener('mousedown', handleEvent);
    document.addEventListener('focusin', handleFocusChange);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('keydown', handleEvent);
      document.removeEventListener('mousedown', handleEvent);
      document.removeEventListener('focusin', handleFocusChange);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, []);

  return null;
};

export default TrackFocus;
