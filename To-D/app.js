const createLi = document.createElement('li');
const ul = document.querySelector('.ul');
const title = document.querySelector('.form__field');

const recycleSound = document.querySelector('.recycle');
const emptyImput = document.querySelector('.empty');
const addSound = document.querySelector('.addSound');

const searchBtn = document.querySelector(".addbtn");




searchBtn.addEventListener('click', (event)=>{

    createLi.innerText = '';
    if(title.value.trim()){
        event.preventDefault();
        
  const createLi = document.createElement('li');
        createLi.classList.add('liclass'); 
        createLi.innerText = title.value;
        ul.appendChild(createLi);
        
                ul.style.backgroundColor = 'rgba(92, 107, 115, 0.1)';
                addSound.play();
  const createSpan = document.createElement('span');
        createSpan.innerText = 'X';
        createLi.appendChild(createSpan);
        createSpan.style.top += 40;
        createSpan.classList.add('remove');

createSpan.addEventListener('click', () => {
            recycleSound.play();
            createLi.remove();
            for(let i=0; i<valueArray.length; i++){
                valueArray.shift();
            }
        });

    } else {
        emptyImput.play();
        ul.appendChild(createLi);
        createLi.style.color = "#C44536";
        createLi.innerText = 'Enter the title...';
    }
    
    title.value = " ";
    title.focus();
    
   
});



