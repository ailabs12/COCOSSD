var cv = require('opencv4nodejs');
var path = require('path');
var fs = require('fs');
const ssdcocoModelPath = './'

const prototxt = path.resolve(ssdcocoModelPath, 'deploy.prototxt');
const modelFile = path.resolve(ssdcocoModelPath, 'VGG_coco_SSD_300x300_iter_400000.caffemodel');

if (!fs.existsSync(prototxt) || !fs.existsSync(modelFile)) {
  console.log('exiting: could not find ssdcoco model');
  console.log('download the model from: https://drive.google.com/file/d/0BzKzrI_SkD1_dUY1Ml9GRTFpUWc/view');
  return;
}

// инициализировать ssdcoco модель из prototxt и modelFile
const net = cv.readNetFromCaffe(prototxt, modelFile);

exports.net = net;
