document.getElementById('RSVPform').addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche le formulaire de se soumettre de manière traditionnelle

  var formData = new FormData(event.target);
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://script.google.com/macros/s/AKfycbyrINamC4hO-cG3FLl9LiVLKEaFzM2kUaibbzGej1WM4KSiijUDhudtkk91ZxwZJPJi/exec'); // Remplacez par l'URL de votre web app
  xhr.onload = function() {
      var responseData = JSON.parse(xhr.responseText);
      
      var confirmationMessage = document.getElementById("confirmationMessage");
      
      if (responseData.result === "success") {
          confirmationMessage.style.display = "block";
          confirmationMessage.textContent = "Réponse envoyée !";
          confirmationMessage.style.color = "green";
      } else {
          confirmationMessage.style.display = "block";
          confirmationMessage.textContent = "Erreur lors de l'envoi de la réponse.";
          confirmationMessage.style.color = "red";
      }
  };
  xhr.send(formData);
});
