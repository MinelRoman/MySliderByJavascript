let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
next.addEventListener('click', () => {
    let item = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(item[0])

})
prev.addEventListener('click', () => {
    let item = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(item[item.length - 1])

})