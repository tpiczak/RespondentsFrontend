import React from 'react';
import MainPage from '../pages/MainPage';
import RespondentsPage from '../pages/RespondentsPage';
import AddRespondent from '../pages/AddRespondent';
import UpdateRespondent from '../pages/UpdateRespondent';
const baseURL = "http://localhost:8080/respondents";

// Proponuje uzyc React router (https://reactrouter.com/web/guides/quick-start) do nawigacji w oparciu o URL
function Page(props) {
    if(props.currentPage==='main'){
        return(
            <MainPage />
        );
    }
    if(props.currentPage==='listofrespondents'){
        return(
            <RespondentsPage baseURL={baseURL}/>
        );
    }
    if(props.currentPage==='addrespondent'){
        return(
            <AddRespondent baseURL={baseURL}/>
        );
    }
    if(props.currentPage==='updaterespondent'){
        return (
            <UpdateRespondent baseURL={baseURL} />
        );
    }
}

export default Page;
