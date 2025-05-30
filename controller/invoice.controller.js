import {AzureKeyCredential, DocumentAnalysisClient} from "@azure/ai-form-recognizer";
const key = "5f3ac733e5a14ae5b3cc3f086f2707c9";
const endpoint = "https://ashish-personal-openai-document-intelligence-services.cognitiveservices.azure.com";
import path from 'path';
import * as fs from "fs";
import { fileURLToPath } from 'url';


// export const invoiceCheck = async (req, res) => {

//     let sampleFile;
//     let uploadPath;
//     if (!req.files || Object.keys(req.files).length === 0) {
//         return res.status(400).send('No files were uploaded.');
//       }
//       const __filename = fileURLToPath(import.meta.url);
//       const __dirname = path.dirname(__filename);
//       // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
//     sampleFile = req.files.document.data;
//     uploadPath = __dirname + '/files/' + sampleFile.name;
//     const client = new DocumentAnalysisClient(endpoint, new AzureKeyCredential(key));
//     const poller = await client.beginAnalyzeDocument("prebuilt-invoice", sampleFile);
    
//     const {
//         documents: [result]
//     } = await poller.pollUntilDone();
//     let data = {};
//     if (result) {
//            data = result;
//     }

//     res.send({msg:'data found','data': data});
// }

export const invoiceCheck = async (req, res) => {
    async  function analyzeDocuments(documents) {   
        console.log('Multiple Document');
        const results = [];
        for (const document of documents) {
            const client = new DocumentAnalysisClient(endpoint, new AzureKeyCredential(key));
            const poller = await client.beginAnalyzeDocument("prebuilt-invoice", document.data);
            
            const {
                documents: [result]
            } = await poller.pollUntilDone();
            let data = {};
            if (result) {
                   data = result;
            }
            results.push(data);
            console.log(data);   
            console.log('+++++++++++++++++++'); 
    
        }
    
        return results;
    }

    async function analyzeDocument(document) {
        console.log('Single Document');
        const results = [];
        const client = new DocumentAnalysisClient(endpoint, new AzureKeyCredential(key));
        const poller = await client.beginAnalyzeDocument("prebuilt-invoice", document.data);
        const {
            documents: [result]
        } = await poller.pollUntilDone();
        let data = {};
        if (result) {
               data = result;
        }
        results.push(data);
    
        return results;
    }
    
    async function main() {
	//if(count == 'hello')
	//{res.send({msg : 'Hello')}
        console.log(req.files.document);
        const documents = req.files.document;
        console.log(req.body.count )
        // console.log(documents);
        if(req.body.count > 0 )
        {
           var results = await analyzeDocuments(documents);
        }
        else if(req.body.count == 0)
        {
            var results = await analyzeDocument(documents);
        }
	else
	{
		return res.status(400).send('No files were uploaded.');
	}
        // console.log(results);
	res.send({msg:'data found','data': results});

        //res.send({msg:'data found'});
    }
    
    main().catch((err) => {
        console.error("The sample encountered an error:", err);
    });
    
}
