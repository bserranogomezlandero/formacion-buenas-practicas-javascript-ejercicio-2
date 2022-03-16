// En este ejercicio hay que conseguir que la página funcione como se espera. La idea es que el botón del cuadro de diálogo cambie de color cuando se haga click sobre él pero que NO se cierre el dialogo. Tampoco se espera que se cierre el diálogo cuando se haga click sobre el elemento con id "dialogWrapper". 
// Solo debe cerrarse cuando se haga click en el elemento con id "dialogBackgrop". Se puede resolver con "stopPropagation" o usando "target" y "currentTarget". Si acabáis la primera pronto intentadlo con la segunda.

const btnOpenDialog = document.getElementById('OpenDialogBtn');
const btnChangeColor = document.getElementById('changeColorBtn');
const dialogBackdrop = document.getElementById('dialogBackdrop');
const dialog = document.getElementById('dialog');

btnOpenDialog.addEventListener('click', function () {
  dialog.classList.toggle('dialog--open');
});
dialogBackdrop.addEventListener('click', function () {
  dialog.classList.toggle('dialog--open');
});
btnChangeColor.addEventListener('click', function () {
  btnChangeColor.classList.toggle('btn--special');
});
