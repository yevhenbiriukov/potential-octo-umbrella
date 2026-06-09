// Attendre que la page soit prête
$(document).ready(function() {

  // Ouvrir la popin (2 boutons déclenchent la même popin)
  $('#btn-reservation, #btn-reservation-2').on('click', function() {
    $('#modal-overlay').addClass('ouvert');
    $('body').css('overflow', 'hidden'); // bloque le scroll
  });

  // Fermer la popin
  function fermerModal() {
    $('#modal-overlay').removeClass('ouvert');
    $('body').css('overflow', ''); // rétablit le scroll
  }

  $('#btn-fermer').on('click', fermerModal);

  $('#modal-overlay').on('click', function(e) {
    if (e.target === this) fermerModal();
  });

  $(document).on('keydown', function(e) {
    if (e.key === 'Escape') fermerModal();
  });

  // Soumission du formulaire
  $('#form-reservation').on('submit', function(e) {
    e.preventDefault(); // empêche le rechargement de page
    var nom = $('#input-nom').val();
    alert('✅ Réservation confirmée pour ' + nom + ' !');
    fermerModal();
  });

});
