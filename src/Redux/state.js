import {rerender} from "../index";

let state = {
    items: [
        {id: "1", name: "Vahe"},
        {id: "2", name: "Karen"},
        {id: "3", name: "Anahit"},
        {id: "4", name: "Grigor"},
        {id: "5", name: "Hunan"}
    ],
    messages: [
        {id: "1", message: "Hi"},
        {id: "2", message: "Bye"},
        {id: "3", message: "Good"},
        {id: "4", message: "Bad"},
        {id: "5", message: "Go"}
    ],
    posts: [
        {id: "1", message: "How are you", likeCounter: "12"},
        {id: "2", message: "Let's go", likeCounter: "45"},
        {id: "3", message: "Go", likeCounter: "32"},
        {id: "4", message: "First post", likeCounter: "15"}
    ],
    newText: ""
}
window.state = state

export let addText = (addedText) => {
    state.newText = addedText;
    rerender(state);
}

export let addPost = () => {

    let newPost = {
        id: `${state.posts.length + 1}`,
        message: state.newText,
        likeCounter: 0
    }
    state.posts.push(newPost)
    state.newText = ""
    rerender(state);
}
export default state;