import { createSlice } from "@reduxjs/toolkit"


interface Message {
    id: string,
    content: string
}

const initValues : {
    messages: Message[]
} = {
    messages: []
}

const messageSlice = createSlice({
    name: "message",
    initialState: initValues,
    reducers: {

    },
    extraReducers(builder) {
        
    },
})
export const {} = messageSlice.actions
export default messageSlice.reducer