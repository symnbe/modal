'use strict';
{
  
  const open =document.getElementById('open');
  const close =document.getElementById('close');
  const modal =document.getElementById('modal');
  const mask =document.getElementById('mask');
  
  
  open.addEvdntlistener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.remove('hidden');
  });
  
}