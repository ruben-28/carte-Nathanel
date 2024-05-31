// Sélection des cases à cocher
var nePourrontAssisterCheckbox = document.getElementById('abs');
var receptionCheckbox = document.getElementById('chkBoxSoiree');
var tephilineCheckbox = document.getElementById('chkBoxTef');
var chabbatCheckbox = document.getElementById('chkBoxChabbat');

nePourrontAssisterCheckbox.addEventListener('change', function() {
    // Si "Ne pourront pas assister" est cochée, décocher les autres cases
    if (nePourrontAssisterCheckbox.checked) {
        receptionCheckbox.checked = false;
        tephilineCheckbox.checked = false;
        chabbatCheckbox.checked = false;
    }
});


// Écouteurs d'événements sur le changement des cases à cocher
receptionCheckbox.addEventListener('change', function() {
    // Si "Assisteront à la réception" est cochée, décocher "Ne pourront pas assister"
    if (receptionCheckbox.checked) {
        nePourrontAssisterCheckbox.checked = false;
    }
});

tephilineCheckbox.addEventListener('change', function() {
    // Si "Assisteront à la mise des téphiline" est cochée, décocher "Ne pourront pas assister"
    if (tephilineCheckbox.checked) {
        nePourrontAssisterCheckbox.checked = false;
    }
});



chabbatCheckbox.addEventListener('change', function() {
    // Si "Assisteront à la réception" est cochée, décocher "Ne pourront pas assister"
    if (chabbatCheckbox.checked) {
        nePourrontAssisterCheckbox.checked = false;
    }
});