import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchUser } from '../feature/user/userSlice'

const User = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUser())
    }, [])

    return (
        <div>
            <h1>User</h1>
        </div>
    )
}

export default User
