const follow = "follow";
const unfollow = "unfollow";
const SET_USERS = "SET_USERS";

const initialState = {
    users: [
        {
            id: 1,
            avatar: "https://cdn.shopify.com/s/files/1/0971/5004/products/FW19_F19S078PL_DIMICH_WINE_0053_1200x1766_a9d1e22a-8cd2-4e40-9a9a-5ed4f6b8e725_800x_crop_top.jpg?v=1576565834",
            followed: true,
            fullName: "Dimich",
            location: {cityName: "Minsk", country: "Belarus"},
            status: "I am boss"
        },
        {
            id: 2,
            avatar: "https://mexedi.me/uploads/Vahe_VAVAN_Vahe_Soghomonyan_-_Popurri_1.png",
            followed: false,
            fullName: "Vahe",
            location: {cityName: "Yerevan", country: "Armenia"},
            status: "I am boss"
        },
        {
            id: 3,
            avatar: "https://www.milbank.com/images/content/1/1/v3/112156/Goldfinch-John-LND-web.jpg",
            followed: true,
            fullName: "Jhon",
            location: {cityName: "London", country: "United Kingdom"},
            status: "I am boss"
        }
    ]
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
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}