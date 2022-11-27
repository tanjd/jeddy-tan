import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import Experiences from '../data.json';

function Timeline() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#192428">
        {Experiences.experiences.map((item, id) => (
          <VerticalTimelineElement
            key={id}
            className={
              item.type == 'work'
                ? 'vertical-timeline-element--work'
                : 'vertical-timeline-element--education'
            }
            date={item.date}
            iconStyle={{
              background: item.isActive ? '#d8ab4e' : '#192428',
              color: item.isActive ? '#192428' : '#fff',
            }}
            icon={item.type == 'work' ? <WorkIcon /> : <SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            {item.subtitle && (
              <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
            )}
            {item.descriptions.map(desc => (
              <p key={desc}>
                <div dangerouslySetInnerHTML={{ __html: desc }} />
              </p>
            ))}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
