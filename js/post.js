
var editBtn = document.getElementById("editBtn");
var likeBtn = document.getElementById("likeBtn");
var commentBtn= document.getElementById("commentBtn");
var likeCount=0;

editBtn.onclick=function(event){
    if(this.value=="edit"){
    document.getElementById("blogBody").contentEditable = "true";
    document.getElementById("blogTitle").contentEditable = "true";
    document.getElementById("blogTitle").style.border =  "solid red";
    document.getElementById("blogBody").focus();
    this.innerHTML="Save";
    this.value="save";
    }
    else{
    document.getElementById("blogBody").contentEditable = "false";
    document.getElementById("blogTitle").contentEditable = "false";
    document.getElementById("blogTitle").style.border =  "none";
    this.innerHTML="Edit";
    this.value="edit";
    }
}

likeBtn.onclick=function(event){
    likeCount++;
    var displayString;
    if(likeCount==1) {
        displayString = "1 person likes this!";
    }
    else{
        displayString = likeCount+" person have liked this!";
    }
    this.innerHTML="Liked";
    document.getElementById("likeBtnText").innerText=displayString;
}

commentBtn.onclick=function(){
    var userComment = document.getElementById("commentBox").value;
    var comment = '<div class="comment">'+ userComment +'</div>';
    var previousComments = document.getElementById("commentContainer").innerHTML;
    document.getElementById("commentContainer").innerHTML=comment+previousComments;
    document.getElementById("commentBox").value="";
}
