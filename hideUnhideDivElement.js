function toggleDIVelement(myDIV,button){
//showe and hite DIV element
/*
myDIV - showed and highet DIV element
button - the element on the which we must clicked to execute script
*/
    function myFunction() {
        var myDIVe = document.getElementById(myDIV);
        if (myDIVe.style.display === "none") {
            myDIVe.style.display = "block";
        } else {
            myDIVe.style.display = "none";
        }
    }
    var buttonn = document.getElementById(button);
    buttonn.addEventListener('click', myFunction, false);
}

toggleDIVelement("myDIV","button");
