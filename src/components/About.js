import about from '../about.jpg';
import '../css/about.css';

export default function About() {
  return (
    <div id="about">
      <section>
        <img src={about} alt="aboutus"/>
      </section>
      <section>
        <h1>Read My Story </h1>
        <p>          
          <strong>🔻 2022</strong>
          <br/>
          💠 Currently, I am learning MERN Stack and exploring web apps based on blockchain technologies. 
          <br/>
          💠 Learned Node.js and React JS.

          <br/><br/>

          <strong>🔻 2021</strong>
          <br/>
          💠 Started a YouTube channel to teach web development to students.
          <br/>
          💠 Started working as a freelancer and offered web development services to clients.
          <br/>
          💠 Started learning python programming language.

          <br/><br/>

          <strong>🔻 2020</strong>          
          <br/>
          💠 Used YouTube to improve my web development skills.
          <br/>
          💠 Learned Bootstrap, AJAX, and SASS to create complex websites.
          
          <br/><br/>

          <strong>🔻 2019</strong>
          <br/>

          💠 Started exploring web development field and learned HTML, CSS, JavaScript, PHP, etc.
          <br/>
          💠 Made many front-end & back-end projects like marriage hall booking website, food ordering website, e-commerce website, etc.
          <br/><br/>

          <strong>🔻 2017</strong>
          <br/>
          💠 Started my coding journey and learned different programming languages like C, C++ & Java and worked on my coding skills for two years.
        </p>
      </section>
    </div>
  )
}
