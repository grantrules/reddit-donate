const giveGold = [...document.querySelectorAll('.report-button + .give-gold-button')];

const li = document.createElement('li');
const a = document.createElement('a');
a.textContent = 'Donate!';
li.appendChild(a);

const insertDonateBefore = (element) => {
    const newLi = li.cloneNode(true);
    newLi.addEventListener('click', (ele) => {
        console.log('donate clicked');
    
        let author = null;
        let parent = ele.target;
        while (parent) {
            if (parent.dataset.author) {
                console.log(parent.dataset);
                author = parent.dataset.author;
                break;
            }
            parent = parent.parentNode;
        }
        console.log(author);
    
    })
    element.parentNode.insertBefore(newLi, element);
}

giveGold.map(element => {
    insertDonateBefore(element);
})

const comments = document.querySelector('.commentarea');

if (comments) {
    const config = { childList: true, subtree: true };
    const mo = new MutationObserver((mList, observer)=> {

        // find elements
        const newComments = document.querySelectorAll('.report-button + .give-gold-button');
        [...newComments].map(element=> insertDonateBefore(element));
        console.log('comments mutated');
    })

    mo.observe(comments, config);
}