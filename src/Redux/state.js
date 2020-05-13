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
            ]
        },
        profilePage: {
            posts: [
                {id: "1", message: "How are you", likeCounter: "12"},
                {id: "2", message: "Let's go", likeCounter: "45"},
                {id: "3", message: "Go", likeCounter: "32"},
                {id: "4", message: "First post", likeCounter: "15"}
            ]
        },
        newText: ""
    },
    getState (){
        return this._state
    },
    addText(addedText) {
        this._state.newText = addedText;
        this.callSubscribe(this);
    },
    addPost() {
        let newPost = {
            id: `${this._state.profilePage.posts.length + 1}`,
            message: this._state.newText,
            likeCounter: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.newText = ""
        this.callSubscribe(this);
    },

    observer(rerender) {
        this.callSubscribe = rerender;
    },
    callSubscribe() {
        console.log("Observer run")
    }

}

export default store;