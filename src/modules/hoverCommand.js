const hoverCommand = () => {
    let commandBlock = document.querySelector('.command');
    let imgBack;
    commandBlock.addEventListener('mouseover', (event) => {
        imgBack = event.target.src;
        event.target.src = event.target.dataset.img;
    });
    commandBlock.addEventListener('mouseout', (event) => {
        event.target.src = imgBack;
    });
};

export default hoverCommand;