import {TextAnalysisClient, AzureKeyCredential} from "@azure/ai-language-text";
const endpoint = "https://mobilise-nlp-processing.cognitiveservices.azure.com/";
const key = "2f0bdcec5d1046f6b2f0d844c0670927";


export const sentimentCheck = async (req, res) => {
    // console.log(req)
    const inputText = req.body?.text;
    const documents = [{
        text: inputText,
        id: "0",
        language: "en"
      }];
    const client = new TextAnalysisClient(endpoint, new AzureKeyCredential(key));
    const results = await client.analyze("SentimentAnalysis", documents,{
        includeOpinionMining: true,
      });

    let data = {};
    if (results) {
           data = results;
    }

    res.send({msg:'data found','data': data});
}