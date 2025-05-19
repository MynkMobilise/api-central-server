import * as tf from "@tensorflow/tfjs";
import * as use from "@tensorflow-models/universal-sentence-encoder";// Initialize NLP Classifier
let model;
let trainingEmbeddings = [];

// Sample training data
const trainingData = [
  { text: "I need help with my account", category: "account_issue" },
  { text: "How do I reset my password?", category: "password_reset" },
  { text: "I forgot my password", category: "password_reset" },
  { text: "create case", category: "case_create" },
];

// Load the NLP model and preprocess training data
(async () => {
  try {
    model = await use.load();
    console.log("✅ TensorFlow NLP Model Loaded!");

    // Precompute embeddings for training data
    const embeddings = await model.embed(trainingData.map((d) => d.text));
    trainingEmbeddings = embeddings.arraySync();
  } catch (error) {
    console.error("❌ Error loading NLP model:", error);
  }
})();

// Function to classify user input

async function classifyText(input) {
    if (!model) return "error_loading_model";
  const embeddings = await model.embed([input]);
  const inputVector = embeddings.arraySync()[0];

  let bestMatch = { category: "unknown", similarity: -1 };
  
  for (let data of trainingData) {
    const trainingVector = (await model.embed([data.text])).arraySync()[0];
    const similarity = tf.losses.cosineDistance(
      tf.tensor1d(inputVector),
      tf.tensor1d(trainingVector),
      0
    ).dataSync()[0];

    if (similarity < bestMatch.similarity || bestMatch.similarity === -1) {
      bestMatch = { category: data.category, similarity };
    }
  }

  return bestMatch.category;
}
// async function classifyText(input) {
//   if (!model) return "error_loading_model";
  
//   const inputEmbedding = await model.embed([input]);
//   const inputVector = inputEmbedding.arraySync()[0];

//   let bestMatch = { category: "unknown", similarity: -1 };

//   trainingEmbeddings.forEach((trainingVector, index) => {
//     const similarity = tf.metrics.cosineProximity(
//       tf.tensor1d(inputVector),
//       tf.tensor1d(trainingVector)
//     ).dataSync()[0];

//     if (similarity > bestMatch.similarity) {
//       bestMatch = { category: trainingData[index].category, similarity };
//     }
//   });

//   return bestMatch.category;
// }

export const agentChat = async (req, res) => {
  try {
    const userInput = req.body.text;
    if (!userInput) return res.status(400).json({ error: "Missing input text" });

    const category = await classifyText(userInput);
    res.json({ response: `Detected issue: ${category}` });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
}