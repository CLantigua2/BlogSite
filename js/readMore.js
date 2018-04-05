function contentView(element) {
    // get the parent node of the button
    let parent = element.parentNode;
    // after going up the Node tree to the parent,
    // use .querySelector to find the first instance of the 
    // element with the class 'content' so that we can target
    // it.
    let content = parent.querySelector('.content');
    // the state of the button so we can track changes
    // by the element instead of keeping track in JS
    let state = element.getAttribute('data-state');
    if (state.toLowerCase() === 'closed') {
        element.setAttribute('data-state', 'open');
        element.innerHTML = 'Show Less';
        content.classList.add('open');
    } else {
        element.setAttribute('data-state', 'closed');
        element.innerHTML = 'Show More';
        content.classList.remove('open');
    }
}