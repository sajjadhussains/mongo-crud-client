import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUsers = useLoaderData();
    // const [users,setUsers]=useState(loadedUsers);
    // console.log(loadedUsers)
    const handleUpdate=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const updatedUser={name,email};
        fetch(`http://localhost:5000/users/${loadedUsers._id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(updatedUser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.matchedCount>0){
                alert('Updated Data Successfully');
                form.reset();
            }
        })
    }
    return (
        <div>
            <h1>Update Information of {loadedUsers.name}</h1>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" id="name" />
                <br />
                <input type="email" name="email" id="email" />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;