$('#go').click(function() {

  var varName = $('#name').val();
  var varLang = $('#lang').val();

  $('#url').val("https://emamex98.github.io/NY_card_2018/" + varLang + ".html?name=" + varName);

});
