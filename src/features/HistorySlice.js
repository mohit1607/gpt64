import { createSlice } from "@reduxjs/toolkit";

export const historySlice = createSlice({
    name: 'historyFeature',
    initialState: {
        historyArr: [],
        currChat: []
    },
    reducers: {
        setHistory: (state, action) => {
            // const text = action.payload.chatFeed[0]
            let newObj = {
                data: action.payload.chatFeed,
                name: action.payload.text + " " + Math.floor(10 + Math.random() * (1000 - 10)),
            }
            state.historyArr = [...state.historyArr, newObj]
            console.log(state.historyArr)
        },
        clearHistory: (state) => {
            state.historyArr = []
            console.log('History cleared.')
        },
        setCurrentChat: (state, action) => {
            state.historyArr.forEach(element => {
                if (element.name === action.payload.name) {
                    state.currChat = element.data
                }
            })
            console.log(state.historyArr)
        },
        addNewChat: (state, action) => {
            // and set it to current.
            state.historyArr = [...state.historyArr, {
                name: action.payload.name,
                data: action.payload.data
            }]
            console.log('new chat created')
        }
    }
})


export const { setHistory, clearHistory, setCurrentChat, addNewChat } = historySlice.actions
export default historySlice.reducer



// I have no Idea about  What is redux Thunk