document.getElementById('gradparent').addEventListener("click",function(event){

    alert('Outer div clicked'+event.eventPhase)
},
false
);

Document.getElementById('parent').addEventListener("click",
     function(){
    alert('middle div clicked'+ event.eventPhase);
    event.stopPropagation();
    },
    false
);