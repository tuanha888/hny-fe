import { createSlice } from "@reduxjs/toolkit"
import { getComments } from "../actions/comment-actions"


interface Comment {
    imageId: string,
    id: string,
    content: string
}

const initValues : {
    comments: Comment[]
} = {
    comments: []
}

const commentSlice = createSlice({
    name: "comment",
    initialState: initValues,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(getComments.fulfilled, (state, action)=> {
            state.comments = [...state.comments, ...action.payload]
        })
    },
})

export const {} = commentSlice.actions
export default commentSlice.reducer