const div = document.createElement('div');
div.classList.add('donate-modal', 'donate-modal-hidden');

const contentDiv = document.createElement('div');
contentDiv.classList.add('donate-modal-content');

const contentNode = document.querySelector('.donate-modal-content') || div.appendChild(contentDiv);

const modalNode = document.querySelector('.donate-modal') || document.body.appendChild(div);

modalNode.addEventListener('click', () => modalNode.classList.toggle('donate-modal-hidden'));
contentNode.addEventListener('click', (e) => e.stopPropagation());

const isOpen = () => !modalNode.classList.has('donate-modal-hidden');

const open = (content) => {
  contentNode.textContent = content;
  modalNode.classList.toggle('donate-modal-hidden');
};

export { modalNode, isOpen, open };
