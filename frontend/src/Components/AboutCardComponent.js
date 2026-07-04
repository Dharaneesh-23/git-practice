import React from 'react'
import { Image } from 'react-bootstrap'

export const AboutCardComponent = ({image,title}) => {
    return (
        <div className='card-hover display-center m-2 p-0' style={{width:"13vw",height:"13vw",minWidth:"150px",minHeight:"150px",backgroundColor:"#c3c3c3",transition:"0.3s ease-in-out",borderRadius:"0px"}}>
            <Image src={image} alt='face image' style={{width:"5vw",height:"5vw",minWidth:"90px",minHeight:"90px"}}/>
            <p className='h6 mt-3' style={{fontSize:"clamp(0.5rem,4vw,1rem)"}}>{title}</p> 
        </div> 
    )
}

export const AboutTestimonial = ({profileImg,starCount,review,userName}) => {
    return(
        <div className='testimonial-card mt-5'> 
            <div className='testimonial-header-card'>
              <img
              src={profileImg}
              alt="Profile Icon"
              className="testimonial-profile-icon p-1"
            />
              <span style={{fontSize:'13px'}}>{"⭐".repeat(starCount)}</span>
            </div>
            <div className='p-0 m-0'>
                <h2>
                    {starCount === 5 ? "Top notch": starCount === 4 ? "Great quality": starCount === 3 ? "Met expectations" : starCount === 2 ? "Below Expectaions" : "Poor experience"}
                </h2>
                <p>{review}</p>
                <h6>-{userName}</h6>
            </div>   
        </div>
    )
}

// export default AboutCardComponent
