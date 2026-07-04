import React from 'react'
import { useEffect,useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
function TopScrollButton() {
    const [backToTopbtn,setbackToTopbtn] = useState(false);


    useEffect (()=> {
        window.addEventListener('scroll', ()=> {
            if(window.scrollY > 100){
                setbackToTopbtn(true);
            }else{
                setbackToTopbtn(false)
            }
        })
    },[])
    
    const scrollUp = () => {
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }

    return(
        <div>
            {backToTopbtn && (
            <button className='scroll-btn'
                 onClick={scrollUp}>
                     <FontAwesomeIcon icon={faAngleUp}/>
                     </button>)}
        </div>
    )
}

export default TopScrollButton
