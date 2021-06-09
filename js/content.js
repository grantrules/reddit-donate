import * as modal from './modal';

const giveGold = [...document.querySelectorAll(':not(.donate-button) + .give-gold-button')];

const li = document.createElement('li');
const a = document.createElement('a');
li.className = 'donate-button';
a.textContent = 'Donate!';
li.appendChild(a);

const findPostData = (node) => {
  let parent = node;
  while (parent) {
    if (parent.dataset.author) {
      return parent.dataset;
    }
    parent = parent.parentNode;
  }
  return null;
};

const insertDonateBefore = (element) => {
  const newLi = li.cloneNode(true);
  newLi.addEventListener('click', (ele) => {
    console.log('donate clicked');

    const author = findPostData(ele.target)?.author;
    modal.open(`Hi ${author}`);

    console.log(author);
  });
  element.parentNode.insertBefore(newLi, element);
};

giveGold.forEach((element) => {
  insertDonateBefore(element);
});

const comments = document.querySelector('.commentarea');

if (comments) {
  const config = { childList: true, subtree: true };
  const mo = new MutationObserver(() => {
    // find elements
    const newComments = document.querySelectorAll(':not(.donate-button) + .give-gold-button');
    [...newComments].map((element) => insertDonateBefore(element));
    console.log('comments mutated');
  });

  mo.observe(comments, config);
}
