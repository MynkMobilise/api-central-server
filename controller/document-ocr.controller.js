import {AzureKeyCredential, DocumentAnalysisClient} from "@azure/ai-form-recognizer";
const key = "5f3ac733e5a14ae5b3cc3f086f2707c9";
const endpoint = "https://ashish-personal-openai-document-intelligence-services.cognitiveservices.azure.com";
import path from 'path';
import * as fs from "fs";
import { fileURLToPath } from 'url';

export const documentOcr = async (req, res) => {
    async  function analyzeDocuments(documents,docType) {   
        console.log('Multiple Document');
        const results = [];
        for (const document of documents) {
            const client = new DocumentAnalysisClient(endpoint, new AzureKeyCredential(key));
            const poller = await client.beginAnalyzeDocument(docType, document.data);
            
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

    async function analyzeDocument(document,docType) {
        console.log('Single Document');
	console.log(docType);
        const results = [];
        const client = new DocumentAnalysisClient(endpoint, new AzureKeyCredential(key));
        const poller = await client.beginAnalyzeDocument(docType, document.data);
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
        console.log(req);
        const documents = req.files.document;
        console.log(documents);
	var docType = req.body.doctype;
console.log(docType);
	switch (docType) {
  		case 'Aadhar':
		case 'DL':
		case 'PP':
		case 'ID proof':
    		docType = 'prebuilt-idDocument';
   		break;
  case 'invoice':
    docType = 'prebuilt-invoice';
    break;
  case 'Med_Cert':
  case 'Med Cert':
    docType = 'prebuilt-healthInsuranceCard.us';
    break;
  case 'layout':
    docType = 'prebuilt-layout';
    break;
  case 'BirthCert':
    docType = 'prebuilt-document';
    break;
  case 'businessCard':
    docType = 'prebuilt-businessCard';
    break;
  case 'read':
    docType = 'prebuilt-read';
    break;
  case 'receipt':
    docType = 'prebuilt-receipt';
    break;
  case 'tax':
    docType = 'prebuilt-tax.us.w2';
    break;
  default:
    docType = 'prebuilt-read';
    console.log('Unknown document type');
    break;
}	
        if(req.body.count > 0 )
        {
           var results = await analyzeDocuments(documents , docType);
        }
        else if(req.body.count == 0)
        {
            var results = await analyzeDocument(documents , docType);
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
