import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { AiOutlinePlus } from 'react-icons/ai'
import { FiMessageSquare } from 'react-icons/fi'
import {useSelector, useDispatch} from 'react-redux'
import {  setHistory, clearHistory, addNewChat, setCurrentChat} from '../features/HistorySlice'

const Sidebar = () => {

  const historyData = useSelector(state => state.history.historyArr)
  const dispatch = useDispatch()

  return (
      <div className='w-[22%] bg-[#202123] p-1'>
          <div className='h-[60%] w-full bg-transparent flex flex-col gap-2 overflow-auto'>
            <button 
            onClick={() => dispatch(addNewChat({
              name: 'New Chat' + Math.floor(10 + Math.random()*1000),
              data: []
            }))}
            className='p-3 flex gap-2 items-center rounded border border-[#4D4D4F] w-full text-start text-white text-sm'>
              <AiOutlinePlus/>
              New chat
              </button>
              {/* all history here */}
             {
              historyData?.map((curr, index) => {
                return (
                  <button className='p-3 flex gap-3 hover:bg-[#353740] items-center rounded w-full text-start text-white text-sm'
                  key={curr.name}
                  onClick = {
                    () => {
                      dispatch(setCurrentChat({
                        name: curr.name
                      }))
                    }
                  }
                   >
                    <FiMessageSquare />
                    {
                      curr.name
                    }
                  </button>
                )
              })
             }
          </div>
      <hr className='border-[#4D4D4F] mb-2' />
      <button className='p-3 rounded hover:bg-[#353740] w-full text-start text-white text-sm flex gap-2 items-center'
      onClick={() => {
        dispatch(clearHistory())
      }}
       > 
      <RiDeleteBin6Line/>
      Clear conversations 
      </button>
    </div>
  )
}

export default Sidebar