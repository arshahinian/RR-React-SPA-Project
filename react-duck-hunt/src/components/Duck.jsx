import {useEffect} from 'react';

function Duck(props) {
    useEffect(() =>
    {
        let seconds = Math.ceil(Math.random() * 3000)
        let timer = setTimeout(() => {
            props.setIsVisible(!props.isVisible)
        },seconds)
        return () => clearTimeout(timer)
    })
    
    return(
        <span>
            {props.isVisible ? <img className="duck-image" src="./duck_up.jpg" onClick={props.shootDuck}/> : <img className="duck-image" src="./duck_down.jpg" />}           
        </span>
    )
}

export default Duck;