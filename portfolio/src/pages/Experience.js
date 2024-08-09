import React from "react";
import "../styles/Experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Projects() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="12/2022-02/2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            FULLSTACK WEBENTWICKLER
          </h3>
          <p>DCI Digital Career Institute GmbH,Berlin</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="09/2013-09/2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Chemie-Studium</h3>
          <p>
            Universität in Damaskus, Syrien Schwerpunkte: Kristall- &
            Photochemie, Physikalische, Organische & Metallorganische Chemie,
            Instrumentelle Analytik
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="2010-2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Chemie-Studium</h3>
          <p>
            Schwerpunkte: Grundlagen (Chemie, Mathematik, Physik)
            Vertiefungsfächer: Analytische, Organische, Anorganische,
            Physikalische Chemie sowie Bio- & Umweltchemie
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">SPRACHEN</h3>
          <p>
            Arabisch:Muttersprache Deutsch:fließend /B2 Englisch: - gute
            Kenntnisse
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="2010-2014"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            My Random High School
          </h3>
          <p>Hight School Dipolem</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Projects;
