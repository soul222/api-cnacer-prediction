const tf = require('@tensorflow/tfjs-node');
async function loadModel() {
    return tf.loadGraphModel('https://storage.googleapis.com/cancer-skin-foreact-bucket/submissions-model/model.json');
}
module.exports = loadModel;
