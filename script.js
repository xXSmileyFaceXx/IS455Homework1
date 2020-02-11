var images = [
    'imgs/kitty_bed.jpg',
    'imgs/kitty_basket.jpg',
    'imgs/kitty_laptop.jpg',
    'imgs/kitty_door.jpg',
    'imgs/kitty_sink.jpg',
    'imgs/kitty_wall.jpg',
]

var button = document.querySelector('button');
var img = document.querySelector('img');

var i = 0;
button.addEventListener('click', function () {
    if (i === 6) {
        i = 0;
    }
    img.src = images[i];
    i = i + 1;
});
