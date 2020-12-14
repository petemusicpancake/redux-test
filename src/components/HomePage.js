import React from 'react'
import { useSelector } from 'react-redux'
import Users from './Users'
import UsersSelected from './UsersSelected'

function HomePage() {
    const users = useSelector((state) => state.usersReducer.users);
    return (
        <div className="app__container">
            <div className="users">
                {users.map((user) => (
                    <Users
                        key={user.id * Math.random()}
                        user={user}
                        username={user.login}
                    />
                ))}
            </div>
            <div className="selected">
                <UsersSelected />
            </div>
        </div>
    )
}

export default HomePage
