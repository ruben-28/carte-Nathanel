var chabbat = document.getElementById("chkBoxChabbat");
var soiree = document.getElementById("chkBoxSoiree");
var c = document.getElementById("presenceChabbat");
var s = document.getElementById("presenceSoiree");

chabbat.addEventListener('change', function(){
    if(chabbat.checked)
    {
        c.classList.remove("hidden");
    }

    if(!chabbat.checked){
        c.classList.add("hidden");
    }
});

soiree.addEventListener('change', function(){
    if(soiree.checked){
        s.classList.remove("hidden");
    }
    if(!soiree.checked){
        s.classList.add("hidden");
    }
});




