let c_input = document.getElementById("c");
let f_input = document.getElementById("f");
let k_input = document.getElementById("k");

let btn_reset = document.getElementById("btn_reset");
let btn_com = document.getElementById("btn_com");

function com() {
    c = Number(c_input.value);
    f = Number(f_input.value);
    k = Number(k_input.value);

    if (c == false){
        c = (f-32)/1.80;
        if (f == false){
            c = k-273.15;
        }
    }

    if (f == false){
        f = (1.80*c) + 32;
        if (c == false) {
            f = (k - 273)*1.8 + 32;
        }
    }

    if (k == false) {
        k = c+273;
        if(c == false) {
            k = (f - 32)*5/9 + 273.15;
        }
    }    

    c_input.value = c.toFixed(2);
    f_input.value = f.toFixed(2);
    k_input.value = k.toFixed(2);
}

function reset() {
    document.getElementById("my_form").reset();
}

btn_reset.addEventListener("click",reset)
btn_com.addEventListener("click",com);
