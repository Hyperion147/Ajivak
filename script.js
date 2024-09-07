
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
