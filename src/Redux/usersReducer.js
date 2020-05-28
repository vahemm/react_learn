const follow = "follow";
const unfollow = "unfollow";
const SET_USERS = "SET_USERS";

const initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case follow :

            return {
                ...state,
                users: state.users.map(u => {
                    if (action.userID === u.id) {
                        return {...u, followed: true}
                    }

                    return u;
                })
            }

        case unfollow:
            return {
                ...state,
                users: state.users.map(u => {
                    if (action.userID === u.id) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state

    }
}

export default usersReducer;

export const followAC = (userID) => {
    return {
        type: follow,
        userID: userID
    }
};
export const unfollowAC = (userID) => {
    return {
        type: unfollow,
        userID: userID
    }
}
export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}