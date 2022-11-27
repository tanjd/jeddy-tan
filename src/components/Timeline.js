import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function Timeline() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#192428">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jul 2022 - present"
          iconStyle={{ background: '#d8ab4e', color: '#192428' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Graduate/Junior Software Engineer - ExpressVPN
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Singapore, SG</h4>
          <p>
            <b>Web Applications Platform (WAP):</b>
            <li>
              Designed and built the CICD pipeline for a monorepo using github actions and NX tool.
              The monorepo&apos;s CICD pipeline is able to continuously integrate, deploy and
              deliver different types of applications (e.g, react and fastapi) that are affected by
              code change concurrently.
            </li>
          </p>
          <p>
            <b>Internal Apps & Automation (IAA):</b>
            <li>
              Build tools to automate processes and workflows for various teams.{' '}
              <i>
                E.g., Automating the employee offloading process that helps remove offloading
                employee&apos;s access to various applications
              </i>
            </li>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2021 - Aug 2021"
          iconStyle={{ background: '#192428', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Summer Intern - Cybersecurity Agency Of Singapore (CSA)
          </h3>
          <p>
            <b>Engineering Center:</b>
            <li>
              Worked on a prototype that performs automated malware analysis & testing on android
              applications
            </li>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2020 - Aug 2020"
          iconStyle={{ background: '#192428', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Summer Intern - Government Technology Agency (Govtech)
          </h3>
          <p>
            <b>Secure Software Development & Audit:</b>
            <li>
              Performed static code analysis on open-source libraries used in sensitive projects to
              identify potential vulnerabilities
            </li>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Aug 2018 - May 2022"
          iconStyle={{ background: '#192428', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Singapore Management University</h3>
          <p>
            <b>Bachelors of science (Information Systems & Management)</b> - Major in Software
            Development & Cybersecurity
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
