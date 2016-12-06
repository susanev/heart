function inputFocus(i){
    if(i.value==i.defaultValue){ 
        i.value=""; 
        i.style.color="#545454"; 
        i.style.fontSize="24px";
    }
}

function inputBlur(i){
    if(i.value==""){
        i.value=i.defaultValue; 
        i.style.color="#a8a8a8"; 
        i.style.fontSize="24px";
    }
}

function showMenu() {
    var s = document.getElementById("search");
    var v = document.getElementById("search-box")
    if(s.style.display == "block"){
        s.style.display = "none";
        if(v.value==""){
            v.value=v.defaultValue;
        }
    }
    else {
        s.style.display = "block";
        if(v.value==""){
            v.placeholder=v.defaultValue;
        }
    }
}

$(function() {
  $('.flexslider').flexslider({
    animation: 'slide'
  });
});


