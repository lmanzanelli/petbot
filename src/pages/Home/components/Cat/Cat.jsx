import React from 'react';
import Lottie from 'react-lottie';
import './Cat.css';
import animationCat from './cat.json';

const Cat = ({history})=>{
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationCat
    };

    function handleonClick(){
        history.push('/chat');
    }
    return(
        <div onClick={handleonClick} 
            className="cat-container">
            
            <Lottie
                options={defaultOptions}
            />
            <label>Hola Humanos!</label>
        </div>
    ); 
}

export default Cat;