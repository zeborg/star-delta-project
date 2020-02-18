$(document).ready(function() {
  $('#conv').on('click', function(e){
    var a = parseFloat($('#1').val());
    var b = parseFloat($('#2').val());
    var c = parseFloat($('#3').val());
    // console.log(a + b + c);
    var x = (b*c)/(a+b+c);
    var y = (a*c)/(a+b+c);
    var z = (a*b)/(a+b+c);
    $('#4').val(x);
    $('#5').val(y);
    $('#6').val(z);
  });

  $('#conv_rev').on('click', function(e){
    var x = parseFloat($('#4').val());
    var y = parseFloat($('#5').val());
    var z = parseFloat($('#6').val());

    a = (x*y + y*z + z*x)/z;
    b = (x*y + y*z + z*x)/x;
    c = (x*y + y*z + z*x)/y;
    $('#1').val(a);
    $('#2').val(b);
    $('#3').val(c);

  })
});
