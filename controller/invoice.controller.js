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
    const data = {};
    if (result) {
        const invoice = result.fields;
        data.vendor_name = invoice.VendorName?.content;
        data.customer_name = invoice.CustomerName?.content;
        data.inv_date = invoice.InvoiceDate?.content;
        data.due_date = invoice.DueDate?.content;
       

        const items = [];
        for (const {
                properties: item
            } of invoice.Items?.values ?? []) {

                items.push({
                    product_code:item.ProductCode?.content ?? "<no product code>",
                    desc: item.Description?.content,
                    qty: item.Quantity?.content,
                    date: item.Date?.content,
                    unit: item.Unit?.content,
                    unit_price: item.UnitPrice?.content,
                    tax: item.Tax?.content,
                    amount: item.Amount?.content
                })
            
        }
        data.items = items;
        const totals = {};
        totals.subtotal = invoice.SubTotal?.content;
        totals.prev_unpaid_bal = invoice.PreviousUnpaidBalance?.content;
        totals.tax = invoice.TotalTax?.content;
        totals.amount_due = invoice.AmountDue?.content

        data.totals = totals;
        
    } else {
        data.error = "Expected at least one receipt in the result.";
    }


    res.send({msg:'data found','data': data});
}