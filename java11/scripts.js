var paragraphs = $('p');
$("span:odd").css('color', 'red');

paragraphs.each(function(index, element) {
  var button = '<button class="btn" data-tmp="' + index + '">Click me</button>';

  $(element).append(button);
});

$("button").click(function(){
  alert($(this).attr("data-tmp"));
});



