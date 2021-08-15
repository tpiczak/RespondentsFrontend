
import axios from 'axios';
import React, { useState } from 'react';

export default function AddRespondent () {

    const [respondent, setNewRespondent] = useState(
        {
            gender: 'Male',
            age: '18',
            income: '0',
            kids: '0',
            ownHome: 'ownNo',
            subscribe: 'subNo',
            segment: 'Suburb mix',
        }
    );

    function submitHandler(e) {
        e.preventDefault()
        axios
            .post("http://localhost:8080/respondents/add", respondent) 
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
    }
    function changeHandler(e) {
        setNewRespondent({...respondent, [e.target.id]: e.target.value})
    }

    // Proponuje wyciagnac kod axios do osobnego komponentu - mieszanie kodu HTML i kodu dostepu do ackend w jednym pliku nie jest zalecane
    return (
        <div className="mainBody"> 
            <form onSubmit={(e) => submitHandler(e)}>
                Gender: <input onChange={(e) => changeHandler(e)} id="gender" value={respondent.gender} placeholder="gender" type="text"></input><br/>
                Age: <input onChange={(e) => changeHandler(e)} id="age" value={respondent.age} placeholder="age" type="number"></input><br/>
                Income: <input onChange={(e) => changeHandler(e)} id="income" value={respondent.income} placeholder="income" type="number"></input><br/>
                Kids: <input onChange={(e) => changeHandler(e)} id="kids" value={respondent.kids} placeholder="kids" type="number"></input><br/>
                ownHome: <input onChange={(e) => changeHandler(e)} id="ownHome" value={respondent.ownHome} placeholder="ownHome" type="text"></input><br/>
                Subscribe: <input onChange={(e) => changeHandler(e)} id="subscribe" value={respondent.subscribe} placeholder="subscribe" type="text"></input><br/>
                Segment: <input onChange={(e) => changeHandler(e)} id="segment" value={respondent.segment} placeholder="segment" type="text"></input><br/>
                <button onClick={(e)=> changeHandler(e)}>Submit</button>
            </form>
        </div>
    );
}
