import { configureStore } from '@reduxjs/toolkit'
import historyReducer from '../features/HistorySlice'

export default configureStore({
    reducer: {
        history: historyReducer,
    }
})

// I am not perfectly good with the redux-toolkit but can understand code and write basic functions
// advanced features I still need to learn.