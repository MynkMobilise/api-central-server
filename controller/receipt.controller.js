import {AzureKeyCredential, DocumentAnalysisClient} from "@azure/ai-form-recognizer";
const key = "5f3ac733e5a14ae5b3cc3f086f2707c9";
const endpoint = "https://ashish-personal-openai-document-intelligence-services.cognitiveservices.azure.com";
import path from 'path';
import { fileURLToPath } from 'url';


export const receiptCheck = async (req, res) => {

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
    const poller = await client.beginAnalyzeDocument("prebuilt-receipt", sampleFile);
    
    const {
        documents: [result]
    } = await poller.pollUntilDone();
    let data = {};
    if (result) {
           data = result;
    }

    res.send({msg:'data found','data': data});
}