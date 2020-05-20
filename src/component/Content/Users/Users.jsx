import React from "react";
import s from "./Users.module.css"

const Users = (props) => {


    return (<div> {
        props.state.users.map(u => <div className={s.user}>

            <span>
                <div> <img className={s.img} src={u.avatar}/> </div>
                <div>{u.followed ?
                    <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button> :
                    <button onClick={()=>{props.follow(u.id)}}>Follow</button>}</div>
            </span>
            <span>
                <div>{u.fullName}</div>
                <div> {u.location.cityName}</div>
                <div> {u.location.country}</div>

            </span>


        </div>)
    }
    </div>)
}

export default Users;