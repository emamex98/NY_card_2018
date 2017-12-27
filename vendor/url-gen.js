$('#go').click(function() {

  var varName = $('#name').val();
  var varLang = $('#lang').val();

  $('#url').val("url/" + varLang + ".html?name=" + varName);

});
