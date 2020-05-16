export const addPost = () => {
    return {type: "addPost"}
};
export const addText = (text) => {
    return {
        type: "addPostText",
        addedText: text
    }
};

const dispatchPost = (action, state)=>{
    if (action.type === "addPostText") {
        state.newText = action.addedText;
    } else if (action.type === "addPost") {
        let newPost = {
            id: `${state.posts.length + 1}`,
            message: state.newText,
            likeCounter: 0
        }
        state.posts.push(newPost)
        state.newText = "";
    }
}
export default dispatchPost;