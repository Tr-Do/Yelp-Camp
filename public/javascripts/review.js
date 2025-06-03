const { connect } = require("mongoose");

function editReview(rev) {
    const doc = document.getElementById('editt');
    doc.classList.add('d-none');
    const content = document.createElement('textarea');
    content.value = rev;
    const doc2 = document.getElementById('savee');
    doc2.classList.remove('d-none');
    doc.parentNode.insertBefore(content, doc.nextSibling);
}

function savee(rev) {
    document.getElementById('editt').classList.remove('d-none');
    document.getElementById('savee').classList.add('d-none');
}