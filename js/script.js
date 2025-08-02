const tabPanel = document.querySelector('tab-panel');
const tabElements = tabPanel.querySelectorAll('div');
const h1 = document.querySelector('h1');

//accessing the data-tabname in html
tabElements.forEach((element) => {
    const tabName = element.dataset.tabname;

    asTabs(element, tabName);
});

function asTabs(node, strName){
    const button = document.createElement('button');
    
    button.classList.add('button-one');
    button.textContent = "Click me";
    button.style.padding = "5px 10px"
    button.style.margin = "10px 20px"
    button.style.backgroundColor = "blue";
    button.style.color = "white";
    node.appendChild(button);

    button.addEventListener('click', () => {
        h1.textContent = strName;
    });
}