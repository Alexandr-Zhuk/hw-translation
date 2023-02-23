let transList = {
    angry: ['./images/angry-cat.jpeg', false], 
    sad: ['./images/sad-cat.jpeg', false],
    funny: ['./images/funny-cat.jpeg', false]
};
let secondWindow = document.querySelector('.secondary-windows');
let mainWindow = document.querySelector('.main-window-item');

const renderTransList = () => {
    secondWindow.innerHTML = '';
    for(const property in transList){
        
        let variant = '';
        if(transList[property][1] === false){
            variant = `<img src="${transList[property][0]}" data-pic="${property}" class="img-second-window">`;
        }else{
            variant = 'Трансляция просматривается';
        }
        secondWindow.innerHTML += `<div class="secondary-window-item" data-pic="${property}">${variant}</div>`;
    }
};

renderTransList();

const isActive = (active) => {
    for(let prop in transList){
        transList[prop][1] = false;
        if(prop === active){
            transList[prop][1] = true;
        }
        
    }
}

secondWindow.addEventListener('click', (ev) => {
    if(ev.target.classList.contains('img-second-window')){
        let current = ev.target.dataset.pic;
        isActive(current);
        renderTransList();
        mainWindow.innerHTML = `<img src="${transList[current][0]}">`;
    }
});