function component() {
    const element = document.createElement('div');

    element.innerHTML = 'Hola!';
    const a = "" as any;
    return element;
}

document.body.appendChild(component());