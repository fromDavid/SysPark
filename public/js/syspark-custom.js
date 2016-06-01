$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
});

$('#lupa').click(function() {
     $('#text').focus();
});