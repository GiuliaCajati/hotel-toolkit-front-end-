import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function TeamMemberHomePage() {
    const events = useSelector(state => state.events)


    return(
        <div className="Home">
            Home
        </div>
    )

}
export default TeamMemberHomePage;