let follow_button = document.querySelector(".btn");
let check = 0;

follow_button.addEventListener("click",function(){
    if (check == 0){
        follow_button.style.backgroundColor ="#e1e1e1";
        follow_button.style.color ="#000";
        follow_button.innerHTML = "Following"
        check = 1;
    }
    else{
        follow_button.style.backgroundColor ="#0F9BF7";
        follow_button.style.color ="#fff";
        follow_button.innerHTML = "Follow"
        check = 0;
    }

})