var editBtn = document.getElementById("editBtn");

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
