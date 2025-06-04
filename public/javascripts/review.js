function editReview(rev) {
    document.getElementById('savee').classList.remove('d-none');
    document.getElementById('editedReview').classList.remove('d-none');
    document.getElementById('editt').classList.add('d-none');
}

function savee(rev) {
    document.getElementById('editt').classList.remove('d-none');
    document.getElementById('savee').classList.add('d-none');
    document.getElementById('editedReview').classList.add('d-none');
}