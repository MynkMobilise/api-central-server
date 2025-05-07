import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

export const translate = async (req, res) => {
  async function processTranslating() {

    const key = "76c296d0a1404ecc8ffe49437ad68638";
    const endpoint = "https://api.cognitive.microsofttranslator.com/";

    // location, also known as region.
    // required if you're using a multi-service or regional (not global) resource. It can be found in the Azure portal on the Keys and Endpoint page.
    const location = "northeurope";

    // Access form data or JSON payload from the request body
    const userData = req.body;

    console.log('User data received:', userData);

    axios({
      baseURL: endpoint,
      url: '/translate',
      method: 'post',
      headers: {
          'Ocp-Apim-Subscription-Key': key,
           // location required if you're using a multi-service or regional (not global) resource.
          'Ocp-Apim-Subscription-Region': location,
          'Content-type': 'application/json',
          'X-ClientTraceId': uuidv4().toString()
      },
      params: {
          'api-version': '3.0',
          //'from': 'en',
          'to': 'en,fr,es,pt'
      },
      data: [userData],
      responseType: 'json'
      }).then(function(response){
          console.log(response);
          const results = response.data;
          res.send({msg:'data found','status':true,'data': results});
        });
      }

    processTranslating().catch((err) => {
        console.error("The sample encountered an error:", err);
    });
}
