const lists = document.querySelectorAll('.list');

// add Task
function addTask() {
    // Elements
    const btn = document.querySelector('.add__btn');
    const addBtn = document.querySelector('.add__item-btn');
    const cancelBtn = document.querySelector('.cancel__item-btn');
    const textarea = document.querySelector('.textarea');
    const form = document.querySelector('.form');
    let value;

    //Event listener add card
    btn.addEventListener('click', () => {
        form.style.display = 'block';
        btn.style.display = 'none'
        addBtn.style.display = 'none'

        textarea.addEventListener('input', e => {
              value = e.target.value;
              if (value) addBtn.style.display = 'block'
              else addBtn.style.display = 'none'
        })
    })

    //Event listentr cancel btn
    cancelBtn.addEventListener('click', () => {
        textarea.value = '';
        value = '';
        form.style.display = 'none'
        btn.style.display = 'flex'
    })

    //Event listener add task
    addBtn.addEventListener('click', () => {
        const newItem = document.createElement('div');
        newItem.classList.add('list__item');
        newItem.textContent = value;
        newItem.setAttribute('draggable', 'true')
        lists[0].appendChild(newItem)
        form.style.display = 'none'
        btn.style.display = 'flex'
        textarea.value = '';
        value = '';
    })

}

addTask()
