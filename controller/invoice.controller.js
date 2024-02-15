import {AzureKeyCredential, DocumentAnalysisClient} from "@azure/ai-form-recognizer";
const key = "86d4b34d1d044e3981775ec0a4bac204";
const endpoint = "https://mobilise-document-intelligence.cognitiveservices.azure.com/";
import path from 'path';
import { fileURLToPath } from 'url';


export const invoiceCheck = async (req, res) => {

    let sampleFile;
    let uploadPath;
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
      }
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = path.dirname(__filename);
      // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    sampleFile = req.files.document.data;
    uploadPath = __dirname + '/files/' + sampleFile.name;
    const client = new DocumentAnalysisClient(endpoint, new AzureKeyCredential(key));
    const poller = await client.beginAnalyzeDocument("prebuilt-invoice", sampleFile);
    
    const {
        documents: [result]
    } = await poller.pollUntilDone();
    let data = {};
    if (result) {
           data = result;
    }

    res.send({msg:'data found','data': data});
}