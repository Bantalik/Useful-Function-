function addRemoveDivElement(divElement, toggle){
    // Hide div element
    /*
    for select parametr "divElemnt" and "toggle" use css selector anotation for instant for ID chose (#)
    divElement = it is html element which we want to hide (string)
    toggle = it is html elemet which we use to toggle
    
    For use this function you must create this CSS rule in you CSS style:
    ___________________________
    .hidenElement{
            visibility: hidden;
        }
    ___________________________
    */
    
    var toggled = document.querySelector(toggle);
    var divElemente = document.querySelector(divElement);
    
    function addRemoveDivElement(divElement){
        divElemente.classList.toggle('hidenElement');
    }

    toggled.addEventListener('click', addRemoveDivElement, false);
    
    }
    
    addRemoveDivElement("#divElement", "#toggle");
