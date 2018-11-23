var cv = require('opencv4nodejs');
var path = require('path');
var fs = require('fs');
const ssdcocoModelPath = __dirname

const prototxt = path.resolve(ssdcocoModelPath, 'deploy.prototxt');
const modelFile = path.resolve(ssdcocoModelPath, 'VGG_coco_SSD_300x300_iter_400000.caffemodel');
const prototxtFaces = path.resolve(ssdcocoModelPath, 'deploy_Faces.prototxt');
const modelFileFaces = path.resolve(ssdcocoModelPath, 'res10_300x300_ssd_iter_140000_fp16_Faces.caffemodel');

if (!fs.existsSync(prototxt) || !fs.existsSync(modelFile) || !fs.existsSync(prototxtFaces) || !fs.existsSync(modelFileFaces)) {
  console.error('exiting: could not find ssdcoco models');
  console.error('download the model from: https://drive.google.com/file/d/0BzKzrI_SkD1_dUY1Ml9GRTFpUWc/view');
  console.error('download the model from(for Faces): https://github.com/opencv/opencv_3rdparty/raw/19512576c112aa2c7b6328cb0e8d589a4a90a26d/res10_300x300_ssd_iter_140000_fp16.caffemodel');
  return;
}

// инициализировать ssdcoco модель из prototxt и modelFile для распознавания объектов по классам
const net = cv.readNetFromCaffe(prototxt, modelFile);

// инициализировать ssdcoco модель из prototxtFaces и modelFileFaces для распознавания лиц
const netFaces = cv.readNetFromCaffe(prototxtFaces, modelFileFaces);

exports.net = net;

exports.netFaces = netFaces;
