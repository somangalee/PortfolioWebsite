// About me section
import Lanyard from "../components/Lanyard/Lanyard";

import front from "../assets/my-front.jpeg";
import back from "../assets/my-back.jpeg";

function About() {
  return (
    <section id="about-me" className="about-me">
        
            <div className="about-lanyard">
                <Lanyard
                position={[0, 0, 24]}
                gravity={[0, -40, 0]}
                frontImage={front}
                backImage={back}
                imageFit="cover"
                lanyardWidth={1.5}
                />
            </div>
      
      <div className = "about-text">
        <h1 className="about-header">About Me</h1>

        <hr className = "about-line"/>

        <p>
          Hi, I'm Somang Lee! I create unique functional user-centered digital
          experiences. I am a senior Computer Science student at Arizona State
          University. Through my code, I bring thoughtful ideas to life. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad architecto nemo quos quidem officiis adipisci tempore tenetur doloribus 
          harum ipsam porro quas sit, quis ut delectus vel at quaerat a.
        </p>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, soluta unde eaque assumenda dolore suscipit totam laboriosam pariatur voluptatum nam distinctio at ratione et! Atque esse debitis officiis quo sapiente.</p>
      
        <p>Check out my blog!</p>

        <br/>
        
        {/* Achievement boxes */}
        <div className = "achievement-grid">
          {/* Achievement Item */}
          <div className = "achievement-card">
            <p className = "achievement-num"> 3+</p>
            <p className="achievement-description">Years of Experience</p>
          </div>

          {/* Achievement Item */}
            <div className = "achievement-card">
              <p className = "achievement-num"> 20+</p>
              <p className="achievement-description">Projects done</p>
            </div>
        </div>


      </div>


      {/* Side Info 
      <div className = "side-info">
        <p> Name: <br/>
            Somang Lee</p>
        <p> Email: <br/>
            salee25@asu.edu </p>
      </div>
      */}

    </section>
  );
}

export default About;