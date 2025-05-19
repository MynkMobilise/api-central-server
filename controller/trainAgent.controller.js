// import * as tf from "@tensorflow/tfjs";
// import path from 'path';
// import { fileURLToPath } from 'url';
// import fs from 'fs';

// // Define __dirname manually for ES Modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Define the save path
// const savePath = path.join(__dirname, 'public');

// // Ensure the folder exists
// if (!fs.existsSync(savePath)) {
//     fs.mkdirSync(savePath, { recursive: true });
// }

// async function trainModel() {
//     const { xs, ys } = await prepareData();
//     const model = tf.sequential();

//     model.add(tf.layers.dense({ units: 8, activation: 'relu', inputShape: [xs.shape[1]] }));
//     model.add(tf.layers.dense({ units: 4, activation: 'softmax' }));

//     model.compile({ optimizer: 'adam', loss: 'sparseCategoricalCrossentropy', metrics: ['accuracy'] });

//     console.log('Training model...');
//     await model.fit(xs, ys, { epochs: 100 });

//     // Save the model
//     await model.save(`file://${savePath}`);
//     console.log('Model trained and saved at:', savePath);
// }

// // Sample training data
// const trainingData = [
//     { text: 'I want to apply for leave', category: 'Leave Request' },
//     { text: 'How do I check my payroll?', category: 'Payroll Issue' },
//     { text: 'My salary is incorrect', category: 'Payroll Issue' },
//     { text: 'I want to file a workplace complaint', category: 'Workplace Complaint' },
//     { text: 'Who do I contact for HR queries?', category: 'General Inquiry' }
// ];

// const categories = ['Leave Request', 'Payroll Issue', 'Workplace Complaint', 'General Inquiry'];
// const categoryIndex = categories.reduce((obj, cat, i) => (obj[cat] = i, obj), {});

// // Convert text to tensors
// async function prepareData() {
//     const inputs = trainingData.map(d => d.text.split(' ').map(word => word.charCodeAt(0) / 255));
//     const labels = trainingData.map(d => categoryIndex[d.category]);
//     return {
//         xs: tf.tensor2d(inputs, [inputs.length, inputs[0].length]),
//         ys: tf.tensor1d(labels, 'float32')
//     };
// }

export const agentTrain = async (req, res) => {
//   const { text } = req.body;
//   if (!text) return res.status(400).json({ error: 'Text is required' });

//   const inputTensor = preprocessText(text);
//   const prediction = model.predict(inputTensor);
//   const categoryIndex = prediction.argMax(1).dataSync()[0];
  
//   res.json({ category: categories[categoryIndex] });
// trainModel();

}