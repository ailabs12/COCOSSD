var cv = require('opencv4nodejs');
var { classifyImg } = require('./classify_cocossd');
// для замера времени выполнения
//const {performance} = require('perf_hooks');


//------------------------ДЛЯ ПРИМЕРА------------------------------
//переводим картинку в base64

// загрузить картинку из файла
var img = cv.imread('bill.jpg');

// конвертировать Mat в base64, закодированную jpg картинку
const base64data =  cv.imencode('.jpg', img).toString('base64'); // Выполнить base64 кодирование
//-----------------------------------------------------------------


// для замера времени выполнения
//var time = performance.now();

const buffer = Buffer.from(base64data,'base64'); // записываем закодированную картинку в буфер
const image = cv.imdecode(buffer); //Картинка сейчас представлена как Mat

console.log(classifyImg(image));

// для замера времени выполнения
//time = performance.now() - time;
//console.log('Время выполнения = ', time);
