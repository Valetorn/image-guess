var init = function () {
    var image = document.getElementsByTagName('img');
    for (var i = 0; i < image.length; i++) {
        image[i].addEventListener('click', showAnswer);
    }
};
var showAnswer = function (evt) {
    var image = evt.target;
    var name =  image.id;
    name = name + '.jpg';
    image.src = 'img/' + name;
};

window.onload = init;