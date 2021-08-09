import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';
export default function UpdateRespondent() {
    const [id, setId] = useState([])
    const [respondent, setRespondent] = useState({
            gender: '1',
            age: '1',
            income: '',
            kids: '',
            ownHome: '',
            subscribe: '',
            segment: '',
    })
    const refRespondent = useRef(0)
    function fetchData() {
        axios
            .get("http://localhost:8080/respondents/findById/" + id)
            .then(res => {
                setRespondent(res.data)
                refRespondent.current(res.data)
                refRespondent.value(res.data)
                console.log(respondent)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleSubmit = e => {
        e.preventDefault()
        fetchData()
    }

    return (
        <div className="mainBody"> 
                Input respondent id you want to update: 
                <form onSubmit={handleSubmit}>
                <input placeholder="Id" type="number" value={id} onChange={(e) => setId(e.target.value)} />
                <button onClick={handleSubmit}></button>
                </form>
                {respondent.age}
                {refRespondent.values}      
                {id}
        </div>
    );
}