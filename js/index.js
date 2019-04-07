// Get the modal
var postModal = document.getElementById('create-post-modal');

// Get the button that opens the modal
var createPost = document.getElementById("create-post");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("postModal-close")[0];

// When the user clicks the button, open the modal
createPost.onclick = function() {
    postModal.style.display = "block";

}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    postModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == postModal) {
        postModal.style.display = "block";
    }
	
}