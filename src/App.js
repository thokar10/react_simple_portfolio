import "./app.css";
import "./font.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";

import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCompassDrafting } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <>
      {/* nav-bar */}
      <div className="blue-colour">
        <div className="header">
          <div className="name">
            <p>Sabin Thokar</p>
          </div>
          <div className="link">
            <a className="mylink" href="">
              Contact
            </a>
            <a href="">Media</a>
            <a href="">Projects</a>
            <a href="">Resume</a>
            <a href="">Resources</a>
            <div className="sv-image">
              <FontAwesomeIcon icon={faEnvelope} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
          </div>
        </div>

        {/* body */}
        <div className="bdy">
          <div className="circle-image"></div>
          <div className="information">
            <h3>
              I am full stack developer and i m very passionate about my work.
              With over 10 years of experience in full stack development,i can
              create quality apps and websites for your company.If you want me
              to build a website ,please contact me and we will get in touch
              soon.
            </h3>
          </div>
        </div>

        <div class="center">
          <div class="cdiv"></div>
        </div>

        <div class="center">
          <p class="what">What I DO !</p>
        </div>

        <div className="skills">
          <div className="box">
            <div>
              <FontAwesomeIcon className="icon" icon={faCompassDrafting} />
            </div>
            <h3>Web development</h3>
            <p>
              I can develop responsive websites and deliver you at the quickest
              time. Trust me on that one!
            </p>
          </div>
          <div className="box">
            <div>
              <FontAwesomeIcon className="icon" icon={faPenNib} />
            </div>
            <h3>Web development</h3>
            <p>
              I can develop responsive websites and deliver you at the quickest
              time. Trust me on that one!
            </p>
          </div>
        </div>

        <div className="contact">
          <div className="contact-image"></div>
          <div className="details">
            <h1>Contact me!</h1>
            your name:
            <div className="msg-box"></div>
            mobile number:
            <div className="msg-box"></div>
            message:
            <div className="msg-box1"></div>
          </div>
        </div>

        <div className="footer">
          <div className="location">
            <p>
              Bouddha,Nayabasti, sabin1076@gmail.com &copy; All rights Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
