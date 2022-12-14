import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#192428">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - present"
          iconStyle={{ background: '#d8ab4e', color: '#192428' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Graduate/Junior Software Engineer - ExpressVPN
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Singapore, SG</h4>
          <p>
            Helped the team launch 2 major features by working both in the front end and back end.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2022"
          iconStyle={{ background: '#192428', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Singapore Management University - School of Computing and Information System
          </h3>
          <p>Bachelors of science</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
