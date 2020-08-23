function component() {
    const element = document.createElement('div');

    element.innerHTML = 'Hello!';
    const a = "" as any;
    return element;
}

document.body.appendChild(component());