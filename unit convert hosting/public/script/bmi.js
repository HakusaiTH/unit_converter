let g_input = document.getElementById("g_");
let h_input = document.getElementById("h_");

let text = document.getElementById("text");
text.style.color = "black";

let btn_reset = document.getElementById("btn_reset");
let btn_com = document.getElementById("btn_com");

function com() {
    g_ = Number(g_input.value);
    h_ = Number(h_input.value);
    if( g_ > 0 && h_ > 0 ) {
        var bmi = g_ / ( ( h_ / 100 ) ** 2 );
    }

    if(bmi < 18.8){
        text.style.color = "#D8F781";
        text.innerHTML = bmi.toFixed(2) + " ตำ่กว่าเกณ";
    }
    else if (bmi >= 18.5 && bmi < 22.90){
        text.style.color = "#ACFA58";
        text.innerHTML = bmi.toFixed(2) + " ปกติ";
    }
    else if (bmi >= 23 && bmi < 24.90){
        text.style.color = "#FFFF00";
        text.innerHTML = bmi.toFixed(2) + " นำ้หนักเกิน";
    }
    else if (bmi >= 25 && bmi < 29.90){
        text.style.color = "#FFBF00";
        text.innerHTML = bmi.toFixed(2) + " อ้วนระดับ 1";
    }
    else if (bmi > 30){
        text.style.color = "#FE2E2E";
        text.innerHTML = bmi.toFixed(2) + " อ้วนระดับ 2";
    }
}

function reset(){
    document.getElementById("my_form").reset();
    text.innerHTML = ""
}

btn_com.addEventListener("click",com);
btn_reset.addEventListener("click",reset);