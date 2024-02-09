import { createSlice } from "@reduxjs/toolkit"


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
        
    },
})

export const {} = commentSlice.actions
export default commentSlice.reducer