//modal on delete button
var deleteBtn = document.getElementsByClassName('deleteBlog');

var popUpAlter = document.getElementById('modalPopUp');

deleteBtn[0].onclick = function () {
    popUpAlter.style.display = "block";
};

deleteBtn[1].onclick = function () {
    popUpAlter.style.display = "block";
};

deleteBtn[2].onclick = function () {
    popUpAlter.style.display = "block";
};

deleteBtn[3].onclick = function () {
    popUpAlter.style.display = "block";
};

deleteBtn[4].onclick = function () {
    popUpAlter.style.display = "block";
};

//modal on close button
var closeBtn = document.getElementById('modal_cancel');

closeBtn.onclick = function () {
    popUpAlter.style.display = "none";
};