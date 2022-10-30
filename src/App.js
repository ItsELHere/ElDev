import {
  Button,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavLink,
} from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

//  CSS
import "./App.css";
import "./style/header.css";
import "./style/body.css";
import "./style/footer.css";

function App() {
  const [jokes, setJokes] = useState("");

  function generateJokes() {
    axios.get("https://candaan-api.vercel.app/api/text").then((res) => {
      const randomize = Math.floor(Math.random() * 101);
      const jokesData = res.data.data[randomize];
      if (jokesData == null) {
        setJokes("Jokes gaada nih, coba refresh lagi deh");
      } else {
        setJokes(jokesData);
      }
    });
  }

  useEffect(() => {
    generateJokes();
  }, []);

  const generateJokesTrigger = () => {
    generateJokes();
  };

  const email = () => {
    const emailLink = "mailto:reqeye94251@gmail.com";
    return window.location.assign(emailLink);
  };

  const downloadCV = () => {
    const CVLink =
      "https://drive.google.com/file/d/1Kx1gEKBocYg93Kqd71LQE_9IKRLgOQio/view?usp=share_link";
    return window.location.assign(CVLink);
  };

  const linkRefAbout = useRef(null);
  const linkRefSocialMedia = useRef(null);

  const scrollAboutMe = (ref) => {
    window.scrollTo({
      top: ref,
      behavior: "smooth",
    });
  };

  const scrollSocialMedia = (ref) => {
    window.scrollTo({
      top: ref,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <div className="NavBar">
        <Navbar variant="dark">
          <Container>
            <NavbarBrand>
              <h2>ElDev</h2>
            </NavbarBrand>
            <Nav>
              <NavLink
                onClick={() => {
                  scrollSocialMedia(linkRefAbout.current.offsetTop);
                }}
              >
                About Me
              </NavLink>
              <NavLink
                onClick={() => {
                  scrollAboutMe(linkRefSocialMedia.current.offsetTop);
                }}
              >
                Social Media
              </NavLink>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <header>
        <div className="title">
          <h1>
            Hello Everyone 🙋
            <br />
            My Name Is
            <br />
            Imanuel Antonio<span className="blink">_</span>
          </h1>
        </div>
        <div className="photoContainer">
          <img
            src={require("./assets/Foto Lamaran Imanuel Antonio.jpg")}
            className="imanuelPhoto"
            alt=""
          />
        </div>
      </header>
      <div ref={linkRefAbout}></div>
      <div className="body">
        <div className="aboutMe">
          <h1>About Me</h1>
          <p>
            Hello. My name is <b>Imanuel Antonio Putra</b>, you can call me
            "el". i was born in Tangerang on 30 june 2000 and i'm 22 years old.
            Since i was a kid, i'm so interest with technology and i started
            learn how to devolope a website on 2021 untill now.
          </p>
        </div>
        <div className="aboutMe2">
          <h1>From Zero To Hero</h1>
          <p>
            I was started to learn about programming on 2021. i started from C++
            programming language. i was learned about fundamental and object
            oriented programming, and i learned java too, but it just a 1 month.
            and finnally i started to know how about website devolopment from
            javascript. i learn vanilla javascript, javascript ES6, HTML, and
            CSS too. after i learned javascript language, i try using a
            framework NodeJS and few module library like ReactJS,
            ReactBootstrap, and i learned API too. I'm using Express JS and
            MySQL as my database,
          </p>
        </div>
        <div className="explanation">
          <div className="technology">
            <h1>Technology i always use</h1>
            <div className="techContainer">
              <img
                src={require("./assets/technology/HTML.png")}
                className="techPhoto"
                alt=""
              />

              <img
                src={require("./assets/technology/CSS.png")}
                className="techPhoto"
                alt=""
              />
              <img
                src={require("./assets/technology/JS.png")}
                className="techPhoto"
                alt=""
              />
              <img
                src={require("./assets/technology/React.png")}
                className="techPhoto"
                alt=""
              />
              <img
                src={require("./assets/technology/Bootstrap.png")}
                className="techPhoto"
                alt=""
              />
              <img
                src={require("./assets/technology/Express.png")}
                className="techPhoto"
                alt=""
              />
            </div>
          </div>
          <div className="contactMe">
            <div className="email">
              <h1>Want to collab with me?</h1>
              <Button size="lg" variant="warning" onClick={email}>
                Email Me
              </Button>
            </div>
            <div className="cv">
              <h1>You can download my CV</h1>
              <Button size="lg" variant="warning" onClick={downloadCV}>
                Download CV
              </Button>
            </div>
          </div>
        </div>
        <div className="jokesReceh">
          <h1>Jokes Receh Hari Ini</h1>
          <div className="jokesContainer">
            <h3>"{jokes}"</h3>
          </div>
          <Button variant="warning" size="lg" onClick={generateJokesTrigger}>
            Generate Jokes
          </Button>
        </div>
      </div>
      <footer>
        <h1>
          See my <br />
          Social Media
        </h1>
        <div className="socialMedia">
          <a href="https://www.instagram.com/imanuel_ant/">
            <img
              src={require("./assets/socialMedia/Instagram.png")}
              alt=""
              className="socialPhoto"
            />
          </a>
          <a href="https://wa.me/6285156294780">
            <img
              src={require("./assets/socialMedia/WhatsApp.png")}
              alt=""
              className="socialPhoto"
            />
          </a>
          <a href="https://github.com/ItsELHere" ref={linkRefSocialMedia}>
            <img
              src={require("./assets/socialMedia/GitHub.png")}
              alt=""
              className="socialPhoto"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
