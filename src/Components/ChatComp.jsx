import React from 'react'

const ChatComp = ({ text, image, something = 'something', isAnswer }) => {
    // console.log(text.slice(text.length - 4))
    return (
        <div className={`w-full py-6 px-[12rem] flex gap-6 border-b border-[#2A2B32] ${isAnswer ? 'bg-[#444654]' : ' bg-[#2A2B32]'}`}>
            {
                isAnswer ? <div className='h-8 w-8 bg-green-300 rounded-sm overflow-hidden' src='' alt={something} ></div>
                :
                <div className='h-8 w-8 bg-yellow-300 rounded-sm overflow-hidden' src='' alt={something} ></div>
            }
            {
                (isAnswer && text.slice(text.length-4) === 'html') ?
                <iframe src={text} title={text} className='w-[30rem] h-[30rem]'></iframe>
                :
                <div className='text-white h-auto'>{text}</div>
            }
        </div>
    )
}

export default ChatComp