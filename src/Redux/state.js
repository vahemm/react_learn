import dispatchPost from "./profileReducer";
import pispatchMessage from "./gialogsReducer";

let store = {
    _state: {
        dialogPage: {
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
            messageText: ""
        },
        profilePage: {
            posts: [
                {id: "1", message: "How are you", likeCounter: "12"},
                {id: "2", message: "Let's go", likeCounter: "45"},
                {id: "3", message: "Go", likeCounter: "32"},
                {id: "4", message: "First post", likeCounter: "15"}
            ],
            newText: "",
        }
    },
    getState() {
        return this._state
    },
    subscribe(rerender) {
        this.callSubscribe = rerender;
    },
    callSubscribe() {
        console.log("Observer run")
    },

    dispatch(action) {
        dispatchPost(action, this.getState().profilePage);
        pispatchMessage(action, this.getState().dialogPage);
        this.callSubscribe(this);
    }
}

export default store;