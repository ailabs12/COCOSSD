# Object detector
## Использование:
const { classifyImg } = require('object_detector_cocossd');

classifyImg(base64 код изображения);

## В файле deploy.prototxt. Определяет минимальный порог вероятности для вывода объекта.
detection_output_param{confidence_threshold: 0.05}
