import React from 'react'
import axios from 'axios'

export default function RespondentSingle (props) {
    function deleteHandler(e) {
        e.preventDefault()
        axios
            .delete("http://localhost:8080/respondents/delete/"+props.respondent.id)
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="respondent"> 
            Id: {props.respondent.id} <button className="btn_delete" onClick={(e) => deleteHandler(e)}></button><br/>
            Gender: {props.respondent.gender} <br />
            Age: {props.respondent.age} <br/>
            Income: {props.respondent.income} <br/> 
            Kids: {props.respondent.kids} <br/>
            ownHome: {props.respondent.ownHome} <br/>
            subscribe: {props.respondent.subscribe} <br/> 
            segment: {props.respondent.segment} <br/>
        </div>
    );
}