import React, { useEffect, useRef, useState } from 'react'
import Sidebar from './Sidebar'
import ChatComp from './ChatComp'
import { useDispatch, useSelector } from 'react-redux'
import '../App.css'
import { setHistory, addNewChat } from '../features/HistorySlice'

const urlObj = {
    'json base64': 'https://laymansolution.com//tools/json-to-base64.html',
    'jpeg base64': 'https://laymansolution.com//tools/jpeg-to-base64.html',
    'text base64': 'https://laymansolution.com//tools/text-to-base64.html',
    'gif base64': 'https://laymansolution.com//tools/gif-to-base64.html',
    'mp3 base64': 'https://laymansolution.com//tools/mp3-to-base64.html',
    'png base64': 'https://laymansolution.com//tools/png-to-base64.html',
    'base64 json': 'https://laymansolution.com//tools/base64-to-json.html',
    'base64 png': 'https://laymansolution.com//tools/base64-to-png.html',
    'base64 jpeg': 'https://laymansolution.com//tools/base64-to-jpeg.html',
    'base64 gif': 'https://laymansolution.com//tools/base64-to-gif.html',
    'base64 mp3': 'https://laymansolution.com//tools/base64-to-mp3.html',
    'base64 text': 'https://laymansolution.com//tools/base64-to-text.html'
}

const HomePage = () => {

    const [chatFeed, setChatFeed] = useState([]) // for answer 
    const [input, setInput] = useState('')

    // dispatching functions to global state
    const dispatch = useDispatch()
    const currChat = useSelector(state => state.history.currChat)

    const generateResponse = () => {
        let parsedCommand = input.toLowerCase().split(' ')
        if (!parsedCommand.includes('base64')) {
            setChatFeed([...chatFeed, {
                owner: 'user',
                text: input
            },
            {
                owner: 'machine',
                text: 'This command is not legit.'
            }])
            setInput('')
            return
        }
        // else it will contain base64 
        let instruction = {
            owner: 'machine',
            text: 'This command is not legit.'
        }
        if (parsedCommand.includes('json')) {
            if (parsedCommand.indexOf('json') > parsedCommand.indexOf('base64')) {
                instruction.text = urlObj['base64 json']
            } else {
                instruction.text = urlObj['json base64']
            }
            // setIframe(instruction.text)
        }
        else if (parsedCommand.includes('text')) {
            if (parsedCommand.indexOf('text') > parsedCommand.indexOf('base64')) {
                instruction.text = urlObj['base64 text']
            } else {
                instruction.text = urlObj['text base64']
            }
            // setIframe(instruction.text)
        }
        else if (parsedCommand.includes('png')) {
            if (parsedCommand.indexOf('png') > parsedCommand.indexOf('base64')) {
                instruction.text = urlObj['base64 png']
            } else {
                instruction.text = urlObj['png base64']
            }
            // setIframe(instruction.text)
        }
        else if (parsedCommand.includes('gif')) {
            if (parsedCommand.indexOf('gif') > parsedCommand.indexOf('base64')) {
                instruction.text = urlObj['base64 gif']
            } else {
                instruction.text = urlObj['gif base64']
            }
            // setIframe(instruction.text)
        }
        else if (parsedCommand.includes('mp3')) {
            if (parsedCommand.indexOf('mp3') > parsedCommand.indexOf('base64')) {
                instruction.text = urlObj['base64 mp3']
            } else {
                instruction.text = urlObj['mp3 base64']
            }
            // setIframe(instruction.text)
        }
        else if (parsedCommand.includes('jpeg')) {
            if (parsedCommand.indexOf('jpeg') > parsedCommand.indexOf('base64')) {
                instruction.text = urlObj['base64 jpeg']
            } else {
                instruction.text = urlObj['jpeg base64']
            }
            // setIframe(instruction.text)
            setInput('')
        }

        setChatFeed([...chatFeed, {
            owner: 'user',
            text: input
        }, instruction])
        // adding a new chat
        dispatch(addNewChat({
            name: input,
            data: chatFeed
        }))
        setInput('')
    }

    useEffect(() => {
        console.log(chatFeed)
        scrollRef.current.scroll({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
    }, [chatFeed])

    useEffect(() => {
        console.log(currChat)
        setChatFeed(currChat)
    },[currChat])


    const scrollRef = useRef()

    return (
        <div className='flex h-[100vh] w-[100%]'>
            <Sidebar></Sidebar>
            <main className='bg-[#343541] w-full relative'>
                <div className='absolute overflow-auto h-[100%] w-full' ref={scrollRef}>
                    {
                        chatFeed.map((curr, index) => {
                            return (
                                <ChatComp key={index + curr.text.length}
                                    text={curr.text}
                                    isAnswer={curr.owner === 'machine'}
                                />
                            )
                        })
                    }
                </div>
                <div className='h-[22vh] w-full flex absolute left-0 bottom-0 justify-center items-center transparentGradient'>
                    <div className='p-1 w-[70%] bg-[#40414F] rounded-md flex justify-between shadow-sm'>
                        <input
                            type="text"
                            className='focus:outline-none p-2 w-[90%] bg-transparent caret-white text-white'
                            placeholder='Send a message...'
                            value={input}
                            onChange={(e) => {
                                e.preventDefault()
                                setInput(e.target.value)
                            }}
                            onKeyUp={(e) => {
                                e.preventDefault()
                                if (e.key === 'Enter') {
                                    generateResponse()
                                }
                            }}
                        />
                        <button onClick={() => {
                            generateResponse()
                        }} className='p-2 text-white'>send</button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default HomePage