import { faAngleDoubleRight, faAngleRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import image from '../assets/images/ChildrenDermatology.jpeg'

function ChildrenDematology(){
  return (
    <div className='container-fluid p-0' >
      <section className="service-section1 display-center" style={{flexDirection:'column'}}>
        <h2>Overview</h2>
        <p>
            Children's dermatology is a branch of dermatology that focuses on diagnosing and treating skin, hair, and nail conditions in infants, children, and adolescents. Pediatric dermatologists are specialized in understanding the unique challenges and treatments suitable for young patients.
        </p>
      </section>
        <div className='display-center my-3'>
            <img src={image} alt='Cosmetic Treatment image' className='service-section-image'/>
        </div>
      
      <section className="service-section2 display-center" style={{flexDirection:'column'}}>
        <h2>Common Pediatric Skin Conditions</h2>
        <ol>
            <li className='py-3' style={{fontSize:'20px'}}><strong>Atopic Dermatitis (Eczema)</strong></li>
            <ul style={{listStyleType:'none'}}>
              <li><FontAwesomeIcon icon={faAngleDoubleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Symptoms:</strong> Red, itchy, and inflamed skin, often on the face, elbows, and knees.</li>
              <li><FontAwesomeIcon icon={faAngleDoubleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Treatment:</strong> Moisturizers, topical corticosteroids, and avoiding triggers.</li>
            </ul>
            <li className='py-3' style={{fontSize:'20px'}}><strong>Diaper Dermatitis (Diaper Rash)</strong></li>
            <ul style={{listStyleType:'none'}}>
              <li><FontAwesomeIcon icon={faAngleDoubleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Symptoms:</strong> Red, inflamed skin in the diaper area.</li>
              <li><FontAwesomeIcon icon={faAngleDoubleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Treatment:</strong> Frequent diaper changes, barrier creams, and keeping the area dry.</li>
            </ul>
            <li className='py-3' style={{fontSize:'20px'}}><strong>Infantile Hemangiomas</strong></li>
            <ul style={{listStyleType:'none'}}>
              <li><FontAwesomeIcon icon={faAngleDoubleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Symptoms:</strong> Benign vascular tumors that appear as red or purple growths.</li>
              <li><FontAwesomeIcon icon={faAngleDoubleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Treatment:</strong> Often observed, but in some cases, beta-blockers or laser therapy may be used.</li>
            </ul>
            <li className='py-3' style={{fontSize:'20px'}}><strong>Impetigo</strong></li>
            <ul style={{listStyleType:'none'}}>
              <li><FontAwesomeIcon icon={faAngleDoubleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Symptoms:</strong> Contagious bacterial infection causing red sores that burst and develop honey-colored crusts.</li>
              <li><FontAwesomeIcon icon={faAngleDoubleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Treatment:</strong> Antibiotic ointments or oral antibiotics.</li>
            </ul>
            <li className='py-3' style={{fontSize:'20px'}}><strong>Molluscum Contagiosum</strong></li>
            <ul style={{listStyleType:'none'}}>
              <li><FontAwesomeIcon icon={faAngleDoubleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Symptoms:</strong> Viral infection causing small, flesh-colored bumps.</li>
              <li><FontAwesomeIcon icon={faAngleDoubleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Treatment:</strong> Often resolves on its own, but cryotherapy or topical treatments can be used.</li>
            </ul>
          </ol>
      </section>
      
      <section className="service-section1 display-center" style={{flexDirection:'column'}}>
        <h2>When to See a Pediatric Dermatologist</h2>
        <ul style={{listStyleType:'none'}}>
          <li><FontAwesomeIcon icon={faAngleDoubleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Persistent or Severe Skin Conditions:</strong> If a skin condition does not improve with over-the-counter treatments or home care.</li>
          <li><FontAwesomeIcon icon={faAngleDoubleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Unusual Skin Growths:</strong> Any new or changing moles, lumps, or birthmarks.</li>
          <li><FontAwesomeIcon icon={faAngleDoubleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Symptoms of Infection:</strong> Signs of skin infection, such as increased redness, swelling, pus, or fever.</li>
          <li><FontAwesomeIcon icon={faAngleDoubleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Discomfort or Pain:</strong> Conditions causing significant discomfort, pain, or itching.</li>
          <li><FontAwesomeIcon icon={faAngleDoubleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Chronic Conditions:</strong> Managing ongoing conditions like eczema, psoriasis, or acne that require long-term care.</li>
        </ul>
        
      </section>
      <section className="service-section2 display-center" style={{flexDirection:'column'}}>
        <h2>Tips for Parents</h2>
        <ul style={{listStyleType:'none'}}>
          <li><FontAwesomeIcon icon={faStar} className='pe-3' style={{color:'#d6f'}}/><strong>Follow Medical Advice:</strong> Adhere to the treatment plan and follow-up appointments recommended by the dermatologist.</li>
          <li><FontAwesomeIcon icon={faStar} className='pe-3' style={{color:'#d6f'}}/><strong>Home Care:</strong> Implement recommended skincare routines, such as regular moisturizing and avoiding known triggers.</li>
          <li><FontAwesomeIcon icon={faStar} className='pe-3' style={{color:'#d6f'}}/><strong>Education and Support:</strong> Educate children about their skin condition and involve them in their care to promote good habits.</li>
          <li><FontAwesomeIcon icon={faStar} className='pe-3' style={{color:'#d6f'}}/><strong>Monitor Changes:</strong> Keep an eye on any changes in your child's skin condition and report concerns to the dermatologist promptly.</li>
        </ul>
      </section>
      <section className="service-section1 display-center" style={{flexDirection:'column'}}>
        <h2>Considerations and Risks</h2>
        <ul style={{listStyleType:'none'}}>
          <li><FontAwesomeIcon icon={faAngleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Qualified Specialist:</strong> Ensure the pediatric dermatologist is board-certified and experienced in treating children.</li>
          <li><FontAwesomeIcon icon={faAngleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Child-Friendly Approach:</strong> Procedures and treatments should be child-friendly and minimize discomfort.</li>
          <li><FontAwesomeIcon icon={faAngleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Side Effects and Complications:</strong>  Be aware of potential allergies or sensitivities to medications or treatments.</li>
          <li><FontAwesomeIcon icon={faAngleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Emotional Support:</strong> Address the emotional and psychological impact of skin conditions on children.</li>
        </ul>
      </section>
    </div>
  );
};

export default ChildrenDematology;