import gpt_icon from '../assets/icons-chatgpt.png';
// import arrow_up from '../assets/arrow_up.png';

export const Query = ({ query }) => {
    return (
        <>
            <div className='client'>
                <div className='client_logo'>
                    <span className='client_name_img'>PA</span>
                    <span className='you'>You</span>
                </div>
                <div className='client_qust'><span>What is Programming</span></div>
            </div>
            <div className='client'>
                <div className='client_logo'>
                    <img className='gpt_name_img' src={gpt_icon} alt="" />
                    <span className='you'>ChatGPT</span>
                </div>
                <div className='client_qust'><span>Programming is essentially the process of creating sets of instructions that a computer can execute to perform specific tasks or solve problems. It involves designing, coding, testing, and maintaining sequences of commands, known as code, that enable computers to perform various functions.</span></div>
            </div>
        </>
    )
}