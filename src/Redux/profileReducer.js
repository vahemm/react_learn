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
const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case "addPostText":
            return {
                ...state,
                newText:action.addedText
            }
        case "addPost" :
            return {
                ...state,
                posts:[...state.posts, {id:`${state.posts.length + 1}`, message:state.newText, likeCounter: 0}],
                newText:""
            }

        default:
            return state
    }
}
export default profileReduser;