import React, { useState } from 'react'
import { SearchClient,SearchIndexClient,SearchIndexerClient,AzureKeyCredential } from '@azure/search-documents';
// src/azureSearchClient.js

const endpoint = 'https://ai-mobilise-search.search.windows.net';
const indexName = 'hotels-sample-index';
const apiKey = 'cRhg11J6HjB1GQ3hdyXQ88qM5Ypo7ihLGOhgzrV5EoAzSeBLl147';

const searchClient = new SearchClient(endpoint,indexName, new AzureKeyCredential(apiKey));
const searchIndexClient = new SearchIndexClient(endpoint, new AzureKeyCredential(apiKey));

function AISearch() {

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const result = await searchClient.getDocument("1234");
      return result;
    } catch (error) {
      console.error('Error fetching indexes:', error);
      throw error;
    }
  };
  
  const findAllIndexes = async () => {
    try{
      const iterator = searchIndexClient.listIndexes();
      const indexes = [];
  
      for await (const index of iterator) {
        indexes.push(index);
      }
  
      console.log('Indexes:', indexes);
    }
    catch(error){
      console.error('Error fetching indexes:', error);
      throw error;
    }
  }


  return (
    <>
    <div className='container-fluid'>
      <h1 className='text-dark fw-bold mb-3'>Welcome To The World Of AI Search</h1>
      <button className='btn btn-primary' onClick={findAllIndexes}>findAllIndexes</button>
      <div className='card p-3 rounded-5'>
      <div className='row'>
        <div className='col-6'>
          <div className='card p-3'>
            <h6 className='text-dark mb-3'>Search Anything You Want To</h6>
            <div class="input-group mb-3 border">
              <span class="input-group-text rounded-0 border-0" id="basic-addon1">Search</span>
              <input type="text" class="form-control rounded-0 border-0" placeholder="Username" />
            </div>
          </div>
        </div>
        <div className='col-6'>
          <div className='card p-3'>
            <h6 className='text-dark mb-3'>Import Your Data</h6>
          </div>
        </div>
      </div>
      </div>
      <div>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {results.map((result, index) => (
          <div key={index}>
            <h3>{result.title}</h3>
            <p>{result.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  )
}

export default AISearch