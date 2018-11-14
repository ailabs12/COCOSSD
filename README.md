# Детектор объектов и лиц
## Использование:
const { classifyImg } = require('object_detector_cocossd');

classifyImg(base64 код изображения)[0]; //Объекты
classifyImg(base64 код изображения)[1]; //Лица

## В файлах deploy.prototxt и deploy_Faces.prototxt. Определяет минимальный доверительный порог для вывода объектов и лиц соответственно.
detection_output_param{confidence_threshold: 0.05}
