let weight,height,goal;
let bmi,level ;

 weight='';
height='';
goal='';
bmi='';
level='';

document.querySelector(".content .input_data .submit_button").addEventListener("click",() => {
    weight=document.querySelector(".content .input_data .weight .input_weight");
    height=document.querySelector(".content .input_data .height .input_height");
    goal=document.querySelector(".content .input_data .goal .input_goal");


    // var sel = document.querySelector(".content .level");
    level = document.querySelector(".content .level").selectedOptions[0].value;

    bmi = weight * 10000 / (height * height);
    bmi = Math.trunc(bmi * 10) / 10;
    localStorage.setItem("bmi", bmi);

    document.querySelector(".content .input_data .weight .input_weight") = ' ';
    document.querySelector(".content .input_data .height .input_height") = '';
    document.querySelector(".content .input_data .goal .input_goal") = '';

    
    window.location.href = "../result_page/index.html";
});



export {weight,height,goal,level};

