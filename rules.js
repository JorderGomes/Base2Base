
  $("#number_bin").keyup(function( event ) {
    if( $("#number_bin").val() ){
      $("#number_oct").val('');
      $("#number_dec").val('');
      $("#number_hex").val('');
      enviar( $("#number_bin").val(), null, null, null );
    }else{
      clearNumbers();
    }
  });
  $("#number_oct").keyup(function( event ) {
    if( $("#number_oct").val() ){
      $("#number_bin").val('');
      $("#number_dec").val('');
      $("#number_hex").val('');
      enviar( null, $("#number_oct").val(), null, null );
    }else{
      clearNumbers();
    }
  });
  $("#number_dec").keyup(function( event ) {
    if( $("#number_dec").val() ){
      $("#number_bin").val('');
      $("#number_oct").val('');
      $("#number_hex").val('');
      enviar( null, null, $("#number_dec").val(), null );
    }else{
      clearNumbers();
    }
  });
  $("#number_hex").keyup(function( event ) {
    if( $("#number_hex").val() ){
      $("#number_bin").val('');
      $("#number_oct").val('');
      $("#number_dec").val('');
      enviar( null, null, null, $("#number_hex").val() );
    }else{
      clearNumbers();
    }
  });
  
  function clearNumbers(){
      $("#number_bin").val('');
      $("#number_oct").val('');
      $("#number_dec").val('');
      $("#number_hex").val('');
  }
  
  function enviar(number_bin, number_oct, number_dec, number_hex) {
    $('#resposta').hide();
    $.ajax({
      type: "POST",
      url: "https://clevert.com.br/t/pt-br/base-convert/convert",
      data: {
        number_bin: number_bin,
        number_oct: number_oct,
        number_dec: number_dec,
        number_hex: number_hex
      },
      success: function(result) {
        var obj = jQuery.parseJSON(result);
        if( obj[0] ){
          $('#resposta').html(obj[0]);
          $('#resposta').show();
        }else{
          if( !number_bin ){
            $('#number_bin').val(obj[1]);
          }
          if( !number_oct ){
            $('#number_oct').val(obj[2]);
          }
          if( !number_dec ){
            $('#number_dec').val(obj[3]);
          }
          if( !number_hex ){
            $('#number_hex').val(obj[4]);
          }
        }
      },
      error: function(result) {
        $('#resposta').html(result);
        $('#resposta').show();
      }
    });
  }
 $('#number_dec').keypress(function() { Mascara(this,Integer); }).keydown(function() { Mascara(this,Integer); });
 $('#number_bin').keypress(function() { Mascara(this,Binary); }).keydown(function() { Mascara(this,Binary); });
 $('#number_hex').keypress(function() { Mascara(this,Hexadecimal); }).keydown(function() { Mascara(this,Hexadecimal); });
 $('#number_oct').keypress(function() { Mascara(this,Octal); }).keydown(function() { Mascara(this,Octal); });
  