import "./app.css";
import "./font.css";
import luffy from "./svg images/1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";

import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCompassDrafting } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

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
            <Link className="a" to={"/"}>
              Contact
            </Link>
            <Link className="a" to={"/"}>
              Project
            </Link>

            <div className="sv-image">
              <FontAwesomeIcon className="top" icon={faEnvelope} />
              <FontAwesomeIcon className="top" icon={faTwitter} />
              <FontAwesomeIcon className="top" icon={faLinkedinIn} />
            </div>
          </div>
        </div>

        {/* body */}
        <div className="bdy">
          <div
            className="circle-image"
            style={{ backgroundImage: `url(${luffy})` }}
          ></div>
          <div className="information">
            <h1>Hello,</h1>
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
            <FontAwesomeIcon className="icon" icon={faCompassDrafting} />
            <h3>Web development</h3>
            <p>
              I can develop responsive websites and deliver you at the quickest
              time. Trust me on that one!
            </p>
          </div>
          <div className="box">
            <FontAwesomeIcon className="icon" icon={faPenNib} />

            <h3>UI / UX</h3>
            <p>
              I can design websites and deliver you at the quickest time. Trust
              me on that one!
            </p>
          </div>
        </div>

        <div className="project">
          <div className="project-idea">
            <h1>Have any project on mind?</h1>
          </div>
        </div>
        <form>
          <div className="contact">
            <div className="contact-image"></div>
            <div className="details">
              <h1>Contact me!</h1>
              your name:
              <input type="text" className="msg-box" />
              mobile number:
              <input type="text" className="msg-box" />
              message:
              <input type="text" className="msg-box1" />
            </div>
          </div>
        </form>
      </div>

      <div class="footer">
        <div class="text">
          <div class="address">
            <div>Bouddha Nayabasti,</div>
            <div>sabin1076@gmail.com.np.&copy; All right reserved.</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
