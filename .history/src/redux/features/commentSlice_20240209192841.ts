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
            if (state.comments.some(comment => comment.imageId === action.payload[0].imageId)) {
                state.comments = state.comments
            } else state.comments = [...state.comments, ...action.payload]
        })
    },
})

export const {} = commentSlice.actions
export default commentSlice.reducer