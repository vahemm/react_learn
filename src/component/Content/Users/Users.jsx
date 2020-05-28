import React from "react";
import s from "./Users.module.css"
import * as axios from "axios";

const Users = (props) => {

    let users = [
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
    ];

    if (props.state.users.length === 0) {

        axios.get('http://localhost:8000/users').then(response=>{


            props.setUsers(response.data)

        })

    }

    return (<div> {
        props.state.users.map(u => <div className={s.user}>

            <span>
                <div> <img className={s.img} src={u.avatar}/> </div>
                <div>{u.followed ?
                    <button onClick={() => {
                        props.unfollow(u.id)
                    }}>Unfollow</button> :
                    <button onClick={() => {
                        props.follow(u.id)
                    }}>Follow</button>}</div>
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