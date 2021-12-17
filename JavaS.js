function Tastodisabilitato() {
    document.getElementById("subscribe").disabled = true; 
}
function AbilitaTasto() {
    document.getElementById("subscribe").disabled = false;
}
function salva() {
    let mail = document.getElementById("email").value;
    localStorage.setItem('email', mail);
}
function CambiaTasti() {
    document.getElementById("subscribe").style.display = "none";
    document.getElementById("unsubscribe").style.display = "block";

}
function cancella() {
    localStorage.clear();
    document.getElementById("subscribe").style.display = "block";
    document.getElementById("unsubscribe").style.display = "none";

}
function welcome() {

    let mail = localStorage.getItem('email');
    if (mail != null) {
        let sp = mail.split('@');
        let name = sp[0];
        alert("Bevenuto: " + name);
    }
}
function Loggato() {
    let mail = localStorage.getItem('email');
    if (mail != null) {
        document.getElementById("subscribe").style.display = "none";
        document.getElementById("unsubscribe").style.display = "block";
    }
}