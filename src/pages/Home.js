import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My name is Jeddy</h2>
        <div className="prompt">
          <p>Junior Software Engineer @ ExpressVPN</p>
          <GitHubIcon />
          <EmailIcon />
          <LinkedInIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span></span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span></span>
          </li>
          <li className="item">
            <h2>Devops</h2>
            <span></span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
