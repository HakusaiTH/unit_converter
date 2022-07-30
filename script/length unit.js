let m_input = document.getElementById("m");
let cm_input = document.getElementById("cm");
let km_input = document.getElementById("km");

let btn_reset = document.getElementById("btn_reset");
let btn_com = document.getElementById("btn_com");

function com() {
    m = Number(m_input.value);
    cm = Number(cm_input.value);
    km = Number(km_input.value);

    if (m == false){
        m = cm / 100
        if (cm == false){
            m = km * 1,000
        }
    }

    if (cm == false){
        cm = m * 100
        if (m == false) {
            cm = km * 100,000
        }
    }

    if (km == false) {
        km = m * 0.001
        if(m == false) {
            km = cm * 1 * 10-5
        }
    }   
    
    m_input.value = m.toFixed(2);
    cm_input.value = cm.toFixed(2);
    km_input.value = km.toFixed(2);
}

function reset() {
    document.getElementById("my_form").reset();
}

btn_reset.addEventListener("click",reset)
btn_com.addEventListener("click",com);
