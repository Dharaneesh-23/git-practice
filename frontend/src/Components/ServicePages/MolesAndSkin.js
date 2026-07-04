import { faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import image from '../assets/images/MolesAndSkin.jpg'

function MolesAndSkin(){
  return (
    <div className='container-fluid p-0' >
      <section className="service-section1 display-center" style={{flexDirection:'column'}}>
        <h2>Overview</h2>
        <p>
        <strong>Moles</strong> are common skin growths that usually appear as small, dark brown spots and are caused by clusters of pigmented cells. They can be flat or raised and vary in color from pink to dark brown or black. Moles can develop anywhere on the skin and often appear during childhood and adolescence.
        </p>
        <p>
        <strong>Skin</strong> conditions encompass a wide range of issues, including acne, eczema, psoriasis, skin tags, warts, and more. Proper skin care and treatment are essential for maintaining healthy skin and addressing specific concerns.
        </p>
      </section>
        <div className='display-center mt-3'>
            <img src={image} alt='Cosmetic Treatment image' className='service-section-image'/>
        </div>
      
      <section className="service-section2 display-center" style={{flexDirection:'column'}}>
        <h2>Procedures for Moles and Skin Treatment</h2>
        <h3>Moles</h3>
        <ul style={{listStyleType:'none'}}>
          <li><FontAwesomeIcon icon={faAngleDoubleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Examination and Diagnosis:</strong> A dermatologist examines the mole and may use a dermatoscope for a closer look. A biopsy may be performed if there's suspicion of cancer.</li>
          <li><FontAwesomeIcon icon={faAngleDoubleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Removal Methods:</strong> Excision (Surgical Removal), Shave Excision, Laser Removal, Cryotherapy</li>
          <li><FontAwesomeIcon icon={faAngleDoubleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Surgery:</strong> ncludes keeping the area clean, applying antibiotic ointment, and following specific instructions to promote healing and minimize scarring.</li>
        </ul>
        <h3>Skin Conditions</h3>
        <ul style={{listStyleType:'none'}}>
          <li><FontAwesomeIcon icon={faAngleDoubleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Diagnosis:</strong> Dermatologists diagnose skin conditions through physical examination, medical history, and sometimes biopsy or lab tests.</li>
          <li><FontAwesomeIcon icon={faAngleDoubleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Treatment Options:</strong> , Oral Medications, Light Therapy (Phototherapy), Cryotherapy, Laser Therapy, Lifestyle and Home Remedies, Surgical Removal</li>
          <li><FontAwesomeIcon icon={faAngleDoubleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Aftercare and Monitoring:</strong> Follow-up appointments to monitor progress, manage side effects, and adjust treatments as necessary.</li>
        </ul>
      </section>
      <section className="service-section1 display-center" style={{flexDirection:'column'}}>
        <h2>When to Care About Moles and Skin Treatment?</h2>
        <ul style={{listStyleType:'none'}}>
          <li><FontAwesomeIcon icon={faAngleDoubleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Changes in Moles:</strong> If a mole changes in size, shape, color, or texture, or if it starts bleeding or itching, it should be evaluated by a dermatologist. These changes could indicate skin cancer, such as melanoma.</li>
          <li><FontAwesomeIcon icon={faAngleDoubleRight} className='pe-3' style={{color:'#d6f'}}/><strong>New Moles:</strong> The appearance of new moles in adulthood should be monitored and possibly evaluated by a professional.</li>
          <li><FontAwesomeIcon icon={faAngleDoubleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Cosmetic Concerns:</strong> When moles or skin conditions affect self-esteem or confidence, treatment may be desired.</li>
          <li><FontAwesomeIcon icon={faAngleDoubleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Irritation or Discomfort:</strong> If a mole or skin condition causes physical discomfort or irritation, treatment may be necessary.</li>
          <li><FontAwesomeIcon icon={faAngleDoubleRight} className='pe-3' style={{color:'#d6f'}}/><strong>Diagnosis of Skin Conditions:</strong> Persistent skin conditions like acne, eczema, or psoriasis should be treated to prevent complications and improve quality of life.</li>
        </ul>
      </section>
      
    </div>
  );
};

export default MolesAndSkin;