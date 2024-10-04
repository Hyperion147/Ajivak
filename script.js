
function showDetails(id) {
    const details = document.querySelectorAll('.details');
    details.forEach(detail => {
        if (detail.id === id) {
            detail.style.display = detail.style.display === 'block' ? 'none' : 'block';
        } else {
            detail.style.display = 'none';
        }
    });
}


let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})
prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})