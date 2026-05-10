import { getUserId, getUserID } from '@/app/lib/data';
import React from 'react';

const UserDetails = async ({params}) => {
    const {userId}= await params
    const user= await getUserId(userId)
    return (
        <div>
            <h1>This is from User details:{user.name}</h1>
        </div>
    );
};

export default UserDetails;