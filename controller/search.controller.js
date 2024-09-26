import { SearchClient , SearchIndexClient , SearchIndexerClient , AzureKeyCredential } from "@azure/search-documents";

  const endpoint = 'https://ai-mobilise-search.search.windows.net';
  const indexName = 'hotels-sample-index';
  const apiKey = 'cRhg11J6HjB1GQ3hdyXQ88qM5Ypo7ihLGOhgzrV5EoAzSeBLl147';

// To query and manipulate documents
const searchClient = new SearchClient(
    endpoint,indexName,
    new AzureKeyCredential(apiKey)
  );
  
  // To manage indexes and synonymmaps
  const indexClient = new SearchIndexClient(endpoint, new AzureKeyCredential(apiKey));
  
  // To manage indexers, datasources and skillsets
  const indexerClient = new SearchIndexerClient(endpoint, new AzureKeyCredential(apiKey));

    //Ai Search Functions Starts With Here

    export const getAllIndexs = async (req, res) => {
        // Function to list all indexes
        async function listIndexes() {
            try {
            const iterator = indexClient.listIndexes();
            const indexes = [];
        
            for await (const index of iterator) {
                indexes.push(index);
            }

            return indexes;
        
            console.log('Indexes:', indexes);
            } catch (error) {
            console.error('Error fetching indexes:', error);
            }
        }

        async function main() {
            var results = await listIndexes();    
            res.send({msg:'data found','data': results});
        }
    
        main().catch((err) => {
            console.error("The sample encountered an error:", err);
        });
    }

    export const searchQueries = async (req, res) => {
        // Function to list all data of queries
        async function searchQuery() {
            try {
            const results = await searchClient.search('HotelName : Historic Lion Resort', {
            queryType: "full",
            searchMode: "all",
        });
            const indexes = [];

            for await (const result of results.results) {
                indexes.push(result);
              }

            return indexes;
        
            console.log('Indexes:', indexes);
            } catch (error) {
            console.error('Error fetching indexes:', error);
            }
        }

        async function main() {
            var results = await searchQuery();    
            res.send({msg:'data found','data': results});
        }
    
        main().catch((err) => {
            console.error("The sample encountered an error:", err);
        });
    }