// https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily
const preventDefault = e => {
  e.preventDefault();
};

const disableScrolling = () => {
  window.addEventListener('wheel', preventDefault, { passive: false });
  window.addEventListener('DOMMouseScroll', preventDefault, { passive: false });
};

const enableScrolling = () => {
  window.removeEventListener('wheel', preventDefault, false); // Enable scrolling in Chrome
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
};

export { disableScrolling, enableScrolling };
