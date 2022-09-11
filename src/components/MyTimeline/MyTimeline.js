import React from 'react'
import  './MyTimeline.scss' ;
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
function MyTimeline() {
  return (
    <div className='timeline-wrapper'>
      <div className="timeline-container">
        <VerticalTimeline>
          <VerticalTimelineElement
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            // contentStyle={ {borderTop: '5px solid #ccc', boderBottom: '0px'} }
            className="vertical-timeline-element--education"
            date="09/2018 - curent"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Student at the University of Economics and Finance (UEF)
            </h3>
            <p className="vertical-timeline-element-para"> Major: Information Technology <br/> GPA: 3.24</p>

          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="04/2022 - 06/2022"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
             Front End Intern at Pizitech Company Limited
            </h3>
            <p className="vertical-timeline-element-para">Done a few mini project using some technologies: Html, Scss, Javascript and learning ReactJs</p>
          </VerticalTimelineElement>
          {/* <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2018 - 2022"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              University of Economics and Finance (UEF)
            </h3>
            <p className="vertical-timeline-element-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis maximus enim, non malesuada odio. Ut imperdiet mi placerat, rutrum mauris et, consectetur nisl. Vivamus dictum lorem at orci ultrices semper. Curabitur interdum pulvinar maximus. Nulla eleifend augue quis venenatis imperdiet. Cras egestas efficitur eros sit amet porttitor. Quisque feugiat erat sit amet sem pellentesque convallis. Sed non convallis nisi. Praesent sapien velit, maximus posuere placerat sed, tincidunt vel quam. Fusce magna eros, pulvinar at purus ut, dictum accumsan ex. Donec sodales tempus ante. Aliquam tempus mollis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis maximus enim, non malesuada odio. Ut imperdiet mi placerat, rutrum mauris et, consectetur nisl. Vivamus dictum lorem at orci ultrices semper. Curabitur interdum pulvinar maximus. Nulla eleifend augue quis venenatis imperdiet. Cras egestas efficitur eros sit amet porttitor. Quisque feugiat erat sit amet sem pellentesque convallis. Sed non convallis nisi. Praesent sapien velit, maximus posuere placerat sed, tincidunt vel quam. Fusce magna eros, pulvinar at purus ut, dictum accumsan ex. Donec sodales tempus ante. Aliquam tempus mollis </p>

          </VerticalTimelineElement> */}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default MyTimeline
