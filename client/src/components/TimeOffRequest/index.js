import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import TimeOffCard from "../../components/TimeOffCard";
import { PromiseProvider } from "mongoose";

export default function TimeOffRequest() {
    const [request, setRequests] = useState({
        requests: []
    })

    useEffect(() => {
        API.getTimeOff()
            .then(result => {
                setRequests({ requests: result.data })
            })
            .catch(err => console.log(err))
    }, [])

    // if(!request.requests) {
    //     return null
    // }
    return(
        <div>
            {request.requests.map(request => (
                <TimeOffCard 
                    name={request.name}
                    shift={request.shift}
                    day={request.day}
                    type={request.type}
                />
            ))}
        </div>
    )
} 