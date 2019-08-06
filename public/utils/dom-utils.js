export const createNode = element => {
    return document.createElement(element);
};

export const appendNode = (parent, el) => {
    return parent.appendChild(el);
};
