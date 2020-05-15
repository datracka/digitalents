export default sectionId => () => {
  if (!sectionId) return;
  const node = document.getElementById(sectionId);
  node.scrollIntoView({ behavior: 'smooth' });
};
