var openModal = document.querySelector('.button-modal');
var modal = document.querySelector('.modal');
var closeModal = document.querySelector('.modal_heading i');
var buttonCloseModal = document.querySelector('.close-button');

function openModal1(e) {
  console.log(e.target);
  modal.classList.toggle('hide')
}

openModal.onclick = function(e) {
  modal.classList.toggle('hide')
}
modal.onclick = function(e) {
  if(e.target == e.currentTarget) {
    modal.classList.toggle('hide')
  }
}
closeModal.onclick = function(e) {
  modal.classList.toggle('hide')
}
buttonCloseModal.onclick = function(e) {
  modal.classList.toggle('hide')
}
