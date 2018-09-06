    function changeIconPicture(htmlID, firstIcon, secondIcon){
        
        //Change icon picture
        /*
        For select parametr "divElemnt" and "toggle" use css selector anotation for instant for ID chose (#)
        
        htmlID  - html element to which the class is linked
        firstIcon - the first icon whitch we neade to change on the click on the html element
        secondIcon - the second icon which we want to replace the first icon
        */
        var htmlID1 = document.querySelector(htmlID);


        htmlID1.addEventListener("click", function(){
        if (htmlID1.className == secondIcon){
            htmlID1.className = firstIcon;
        } 
        else if (htmlID1.className == firstIcon){
            htmlID1.className = secondIcon;
  
        } 
        })
    }
