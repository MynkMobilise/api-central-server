import React, { useState } from 'react';
import './Header.css';
// import gpt_icon from '../assets/icons-chatgpt.png';
// import arrow_up from '../assets/arrow_up.png';
// import thumb_up from '../assets/thumb-up.png';
import { getRspFromChatGpt } from './AzrureGptService';
import Loader from '../../../../shared/Loader';


export const Chatgptdesc = () => {
  const [value, setValue] = useState('');
  const [queryData, setQueryData] = useState([]);
  const [isLoader, setLoader] = useState(false);

  const submitGptQuestion = (e) => {
    e.preventDefault();
    setLoader(true);
    const question = value.trim();

    //here we hit the chatgpt api for get the question response
    getQuesResp(question);

    if (question) {
      setQueryData((queryData) => [...queryData, { id: queryData.length + 1, query: question, res:'' }]);
      setValue("");
    }
  };

  const getQuesResp = async (messageText) => {
    const message = messageText;
    const response = await getRspFromChatGpt(message);
    setQueryData((queryData) => [...queryData, { id: queryData.length + 1, query: '', res: response  }]);
    setLoader(false);
  };

  const getTextValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className='main-header'>
      <div className='header' style={{ position: 'relative' }}>
        <img src="https://cdn-icons-png.flaticon.com/512/12222/12222588.png" alt='' style={{width:"3%"}}/>
        <h3>ChatGPT Chat Completion</h3>
      </div>
      <div className='converstaion-box'>
        
      {isLoader ? (
        <Loader />
 
        ) : ('')
      }
        <div className='conversation'>
          {queryData.length > 0 ? 
            queryData.map((item) => (
              <>
              <div className='client' key={item.id}>
              {item.query ? (
                <>
                <div className='client_logo'>
                  <span className='client_name_img'>PA</span>
                  <span className='you'>You</span>
                </div>
                <div className='client_qust'><span>{item.query}</span></div>
                </>
              ):(
                null
              )}
              {item.res ? (
              <>
                <div className='client_logo'>
                    <img className='gpt_name_img' src="https://cdn-icons-png.flaticon.com/512/12222/12222588.png" alt="" style={{width:"5%"}}/>
                    <span className='you'>ChatGPT</span>
                </div>
                <div className='client_qust'><span>{item.res}</span></div>
              </>
              ):(
                null
              )}
              </div>
              </>
            )) : (
              <>
              <div className='text-dark text-center'>We are here to help you , start conversation with AI ...</div>
              {/* <img src={''} alt='' className='thumb_up'/> */}
              </>
            )}
        </div>
      </div>
      <div className='chatbox_text' style={{ position: 'sticky' }}>
        <form onSubmit={submitGptQuestion}>
          <input
            type='text'
            name='name'
            placeholder='Message ChatGPT ...'
            className='chat_textarea'
            value={value}
            onChange={getTextValue}
          />
          <button type="submit" className='gpt_action'>
            <img src="https://media.istockphoto.com/id/1290684294/vector/send-message-icon.jpg?s=612x612&w=0&k=20&c=8vwd4PDMzEELKMUrTQ7LZnpngAN5Bzs55sRJ09sA8FU=" alt='arrow_up' style={{ width: '65px' }} />
          </button>
        </form>
      </div>
    </div>
  );
};