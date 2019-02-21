import createMenu from './menu';
var menu = createMenu(['Главная','О нас','Отзывы'], 'menu');
document.body.appendChild(menu);
var script = document.createElement("script");
script.setAttribute('src','http://localhost:35729/livereload.js');
document.body.appendChild(script);