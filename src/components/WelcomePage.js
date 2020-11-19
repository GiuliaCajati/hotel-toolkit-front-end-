import React, { useEffect }  from 'react'
import { useSelector, useDispatch } from 'react-redux'

function WelcomePage() {
    const events = useSelector(state => state.events)
    
    let todaydetails 

    let todaysInfo = () => {
 
        todaydetails = events[0].date_info[0]
      
        return<div>
            <h2>{todaydetails.date}</h2>
            <h5>Arrivals: {todaydetails.arrivals}</h5>
            <h5>Departures: {todaydetails.departures}</h5>
            <h5>Performance: {todaydetails.performance_YTD}</h5>
            <h5>Occupancy: {todaydetails.occupancy}</h5>
            <h5>ADR: {todaydetails.occupancy}</h5>
            </div>

    }


    return(
        <div className="Welcome">
            <ul>{todaysInfo()}</ul>
        </div>
    )

}
export default WelcomePage;


