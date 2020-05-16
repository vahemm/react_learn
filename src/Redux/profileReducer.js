export const addPost = () => {
    return {type: "addPost"}
};
export const addText = (text) => {
    return {
        type: "addPostText",
        addedText: text
    }
};
let initialState = {
    posts: [
        {id: "1", message: "How are you", likeCounter: "12"},
        {id: "2", message: "Let's go", likeCounter: "45"},
        {id: "3", message: "Go", likeCounter: "32"},
        {id: "4", message: "First post", likeCounter: "15"}
    ],
    newText: "",
}
const dispatchPost = (state = initialState, action) => {
    switch (action.type) {
        case "addPostText":
            state.newText = action.addedText;
            return state;
        case "addPost" :
            let newPost = {
                id: `${state.posts.length + 1}`,
                message: state.newText,
                likeCounter: 0
            }
            state.posts.push(newPost)
            state.newText = "";
            return state;
        default:
            return state
    }
}
export default dispatchPost;