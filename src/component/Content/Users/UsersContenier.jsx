import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, unfollowAC, setUsers} from "../../../Redux/usersReducer";

const mapStateToProps = (state) => {
    return {
        state: state.usersPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            return dispatch(followAC(userID))
        },
        unfollow: (userID)=>{
            return dispatch(unfollowAC(userID))
        },
        setUsers: (users) =>{
            return dispatch(setUsers(users))
        }
    }
}

const UsersContenier = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContenier;