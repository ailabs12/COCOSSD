var cv = require('opencv4nodejs');
var { classifyImg } = require('../object_detector_cocossd');


//------------------------ДЛЯ ПРИМЕРА------------------------------
//переводим картинку в base64

// загрузить картинку из файла
var img = cv.imread('bill.jpg');

// конвертировать Mat в base64, закодированную jpg картинку
const base64data =  cv.imencode('.jpg', img).toString('base64'); // Выполнить base64 кодирование
//-----------------------------------------------------------------


const buffer = Buffer.from(base64data,'base64'); // записываем закодированную картинку в буфер
const image = cv.imdecode(buffer); //Картинка сейчас представлена как Mat

console.log(classifyImg(image));
