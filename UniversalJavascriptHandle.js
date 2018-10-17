function universalHandler (e){
//    write to console HTML elemnt when you click on it 
    console.log(e.target);
}

document.onclick = universalHandler;
