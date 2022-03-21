import pic from '../pic.JPG';
import '../css/home.css';
import { TiArrowForwardOutline } from 'react-icons/ti';
import { BsLinkedin, BsInstagram } from 'react-icons/bs';


export default function Home() {
  return (
    <main>
      <section>
        <img src={pic} alt="mypic"/>
      </section>
      
      <section>
        <h1>
          I am Mohd Touseef Jamal & I am a Full-Stack Web Developer.
        </h1>

        <h2>Tech stacks I've learnt:</h2>

        <div className='tech-stack'>
          <h3><TiArrowForwardOutline/><span>REACT</span></h3>
          <h3><TiArrowForwardOutline/><span>NODE</span></h3>
          <h3><TiArrowForwardOutline/><span>WORDPRESS</span></h3>
          <h3><TiArrowForwardOutline/><span>PHP</span></h3>
          <h3><TiArrowForwardOutline/><span>AJAX</span></h3>
          <h3><TiArrowForwardOutline/><span>BOOTSTRAP</span></h3>
          <h3><TiArrowForwardOutline/><span>JS</span></h3>
          <h3><TiArrowForwardOutline/><span>DHTML</span></h3>
        </div>
        
        <div className='links'>
          <a href='https://www.instagram.com/tj_webdev' target="_blank" rel='noreferrer'>
            <BsInstagram />
          </a>
          <a href='https://www.linkedin.com/in/mohdtouseefjamal/' target="_blank" rel='noreferrer'>
            <BsLinkedin />
          </a>          
        </div>
      </section>
    </main>
  )
}
