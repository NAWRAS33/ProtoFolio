import React from "react";
import "../styles/Home.css";

import linkedinLogo from "../SocialMedia/icons8-linkedin-48.png";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi,My Name is Nawras</h2>
        <div className="prompt">
          <p> A software developer with a passion for learning and creating</p>

          <img src={linkedinLogo} alt="image" />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Framework</h2>

            <span>ReactJs,AngularJs</span>
            <h2>Front-End</h2>
            <span>
              JavaScript -TypeScript -HTML5 -CSS3
              <br />
              React Hooks: useCallback-useContext-useEffect-useLayoutEffect-
              <br />
              useMemo -useReducer-useRef-useState -Bootstrap/jQuery/Material-UI
            </span>
          </li>

          <li className="item">
            <h2>Back-End</h2>
            <span>
              JavaScript,MongoDB,ExpressJs,NodeJS,MySQL
              <br />
            </span>
            <span>
              API Requests-Schema/Form Validation JWT Authentication.
              <br />
              Authentifizierung im Frontend. Logout-Funktion/Kommentarbereich in
              React. Liking System/Seite nicht gefunden (404). Beitrag
              löschen/Profilseite/Logging Out Passwort aktualisieren. Website
              Deployment.
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript ,Python beginner</span>
          </li>
          <li className="item">
            <h2>Version Control</h2>
            <span>Git</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
