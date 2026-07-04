import { faAngleDoubleRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import image from '../assets/images/CosmeticImage.jpg'

function CosmeticTreatment(){
  return (
    <div className='container-fluid p-0' >
      <section className="service-section1 display-center" style={{flexDirection:'column'}}>
        <h2>Overview</h2>
        <p>
          Cosmetic treatment refers to a range of medical and non-medical procedures aimed at enhancing or altering one's appearance. These treatments can be performed on the skin, hair, teeth, and other parts of the body. Cosmetic treatments can include surgical procedures like facelifts, rhinoplasty (nose reshaping), and liposuction, as well as non-surgical treatments such as Botox injections, dermal fillers, laser hair removal, and chemical peels.
        </p>
      </section>
        <div className='display-center mt-3'>
            <img src={image} alt='Cosmetic Treatment image' className='service-section-image'/>
        </div>
      
      <section className="service-section2 display-center" style={{flexDirection:'column'}}>
        <h2>When Should One Care About Cosmetic Treatment?</h2>
        <ul style={{listStyleType:'none'}}>
          <li><FontAwesomeIcon icon={faAngleDoubleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Personal Desire:</strong> When an individual wants to enhance their appearance, boost self-esteem, or address specific aesthetic concerns.</li>
          <li><FontAwesomeIcon icon={faAngleDoubleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Medical Reasons:</strong> To correct physical deformities, scars, or conditions that affect appearance and may impact psychological well-being.</li>
          <li><FontAwesomeIcon icon={faAngleDoubleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Age-Related Changes:</strong> To reduce signs of aging such as wrinkles, sagging skin, or age spots.</li>
          <li><FontAwesomeIcon icon={faAngleDoubleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Event Preparation:</strong> For special occasions like weddings, reunions, or other significant events where one wishes to look their best.</li>
          <li><FontAwesomeIcon icon={faAngleDoubleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Professional Reasons:</strong> Certain professions might place a higher emphasis on appearance, motivating individuals to seek cosmetic enhancements.</li>
        </ul>
      </section>
      
      <section className="service-section1 display-center" style={{flexDirection:'column'}}>
        <h2>Procedures of Cosmetic Treatment</h2>
        
        <h3>Surgical Procedures</h3>
        <ul style={{listStyleType:'none'}}>
          <li><FontAwesomeIcon icon={faAngleDoubleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Consultation:</strong> Discuss goals, expectations, and medical history with a qualified surgeon. A physical examination and photographs may be taken.</li>
          <li><FontAwesomeIcon icon={faAngleDoubleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Planning:</strong> Detailed plan including type of surgery, anesthesia, and expected outcomes.</li>
          <li><FontAwesomeIcon icon={faAngleDoubleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Surgery:</strong> Performed in a clinic or hospital. Involves making incisions, reshaping tissues, and suturing.</li>
          <li><FontAwesomeIcon icon={faAngleDoubleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Recovery:</strong> Post-operative care includes managing pain, swelling, and following specific guidelines for healing.</li>
        </ul>
        <h3>Non-Surgical Procedures</h3>
        <ul style={{listStyleType:'none'}}>
          <li><FontAwesomeIcon icon={faAngleDoubleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Consultation:</strong> Similar to surgical, discussing goals and medical history. A less invasive plan is formulated.</li>
          <li><FontAwesomeIcon icon={faAngleDoubleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Procedure:</strong> Depending on the treatment, it can range from injections (Botox, fillers) to topical applications (chemical peels) or the use of devices (lasers).</li>
          <li><FontAwesomeIcon icon={faAngleDoubleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Recovery:</strong> Generally minimal downtime. Patients might experience redness, swelling, or minor discomfort.</li>
        </ul>
      </section>
      <section className="service-section2 display-center" style={{flexDirection:'column'}}>
        <h2>Considerations and Risks</h2>
        <ul style={{listStyleType:'none'}}>
          <li><FontAwesomeIcon icon={faStar} className='pe-3' style={{color:'#d6f'}}/><strong>Qualification:</strong> Ensure the practitioner is qualified and experienced in the specific treatment.</li>
          <li><FontAwesomeIcon icon={faStar} className='pe-3' style={{color:'#d6f'}}/><strong>Realistic Expectations:</strong> Understand the limitations and potential outcomes of the procedure.</li>
          <li><FontAwesomeIcon icon={faStar} className='pe-3' style={{color:'#d6f'}}/><strong>Side Effects and Complications:</strong> Be aware of possible side effects such as infection, scarring, or adverse reactions.</li>
          <li><FontAwesomeIcon icon={faStar} className='pe-3' style={{color:'#d6f'}}/><strong>Costs:</strong> Consider the financial investment, as many cosmetic treatments are not covered by insurance.</li>
        </ul>
      </section>
    </div>
  );
};

export default CosmeticTreatment;