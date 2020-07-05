const confirmTabClosing = () => {
  return "You Are going to leave this page, Are you sure?";
};
window.onbeforeunload = confirmTabClosing;

export default {
  confirmTabClosing
};
export { confirmTabClosing };
