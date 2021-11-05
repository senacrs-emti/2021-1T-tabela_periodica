
$(document).ready(function(){

  $('a').click(function(){
    var nome = $(this).attr('data-name');
    var atomico = $(this).attr('data-atomic');
    var simbolo = $(this).attr('data-simbol');
    var massa = $(this).attr('data-massa');
    var eletronica = $(this).attr('data-eletronica');
    var elemento = nome+" ("+ simbolo+") ";
    $( "#mostra-elemento" ).html(elemento);
    $("#massa").html(massa);
    $("#eletronica").html(eletronica);
    $("#atomico").html(atomico);

  }); 

});
