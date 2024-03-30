const resource = 'mobilise-ai-studio';
const azureModelDesc = 'mobilise-gpt-4';
const apiKey = 'c49ef4a543544b71b0df4ec7771fd8f2'
const ChatGptUrl = `https://${resource}.openai.azure.com/openai/deployments/${azureModelDesc}/chat/completions?api-version=2023-07-01-preview`;

const getRspFromChatGpt = async (messageText) => {

    const message = messageText;

    try {
      const response = await fetch(ChatGptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': apiKey
        },
        body: JSON.stringify({
          messages: [
            { role: 'user', content: `${message}` },
          ],
          model: 'text-gpt-4.0',
          temperature: 0.7,
          frequency_penalty: 0,
          presence_penalty: 0,
          top_p: 0.95,
          stop: null,
          max_tokens: 800,
        }),
      });

      const data = await response.json();
      // setResponse(data.choices[0]?.message?.content || '');
      console.log("response");
      console.log(data);
      // debugger;
      let resp = '';
      if(data.error){
        const code = data.error.code;
        resp = data.error.message;
      }else{
        resp = data.choices[0].message.content
      }
    //   setQueryData((queryData) => [...queryData, { id: queryData.length + 1, query: '', res: resp  }]);
    //   console.log("response");
    return resp;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
};
export { getRspFromChatGpt };