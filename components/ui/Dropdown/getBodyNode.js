export default () => {
  try {
    return window.document.body;
  } catch (error) {
    return null;
  }
};
