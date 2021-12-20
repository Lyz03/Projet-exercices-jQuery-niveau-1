// part 1
$('#myId').text('Hello World !');

// part 2
$('a').attr("href", "https://github.com/Lyz03/Projet-exercices-jQuery-niveau-1").text('my link');

// part 3
$('#div1').height('100px').width('100px');

// part 4
let divs = $('div div')
divs.eq(1).text('deuxième div');

alert("En JS, les tableaux commence avec l'index " + divs.index())
