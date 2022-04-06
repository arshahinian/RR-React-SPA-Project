import React,{useState} from 'react';
import Duck from './Duck';

function DuckContainer(props) {
    let [isVisible,setIsVisible] = useState(false);
    let shootDuck = () => {
        props.setScore(props.score + 1);                   
    }
   
    return(        
        <div>                      
            <Duck setIsVisible={setIsVisible} shootDuck={shootDuck} isVisible={isVisible}/>
        </div>
    )
}

export default DuckContainer;