function addAndRemoveClass(divElement, addClas, removeClas){
    //Add and remove some specific class on html element
    /*
    For select parametr "divElemnt" and "toggle" use css selector anotation for instant for ID chose (#)
    divElement - specific html element where we want to change classes (string)
    addClas - add clases (string)
    removeClas - remove classes (string)
    */
    var divElemente = document.querySelector(divElement);
    
    function addRemove(){
        
        divElemente.classList.add(addClas);
        divElemente.classList.remove(removeClas);
        
    }
    divElemente.addEventListener('click', addRemove, false);
}

addAndRemoveClass("#divElement", "addClas", "removeClas");
