import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import kizerllc from "../assets/companies/kizer.png";
import subaru from "../assets/companies/subaru.png";
import dojo from "../assets/companies/dojo.png";
import toyota from "../assets/companies/toyota.png";

const experiences = [
	{
		title: "Software Developer",
		company_name: "Kizer",
		icon: kizerllc,
		iconBg: "#000000",
		date: "October 2023 - Present",
        points: [
            "Developing web applications using React.js, Node.js, and Postgres.",
            "Pioneering a mobile app by leveraging React Native to simultaneously target multiple platforms.",
            "Planning out data models to ensure seamless design and maintainability.",
        ],
	},
	{
		title: "Student - Web Developer",
		company_name: "Coding Dojo",
		icon: dojo,
		iconBg: "#000000",
		date: "February 2023 - October 2023",
		points: [
			"Developing web applications using React.js, Python, and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "F&I Manager",
		company_name: "Fletcher Subaru",
		icon: subaru,
		iconBg: "#000000",
		date: "June 2017 - Present",
		points: [
			"Oversee and maintain large financial transactions.",
			"Protect the company's assets through diligent inspection of transaction records.",
			"Ensure continued client retention through transparency and continued support.",
			"Ensure that every transaction is handled in a legally binding manner.",
		],
	},
	{
		title: "Sales Consultant",
		company_name: "Fletcher Toyota",
		icon: toyota,
		iconBg: "#FFFFFF",
		date: "September 2014 - June 2017",
		points: [
			"Developing and maintaining client relationships.",
			"Critical thinking and attention to details.",
			"Ensuring legality of transactions.",
			"Daily continued education to keep up with the latest industry trends.",
		],
	},
];


const ExperienceCard = ({ experience }) => (
	<VerticalTimelineElement
		className="vertical-timeline-element"
		contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
		contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
		date={experience.date}
		iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
		icon={experience.icon}
        animate={true}
	>
		<h3 className="vertical-timeline-element-title">
			{experience.company_name}
		</h3>
		<h4 className="vertical-timeline-element-subtitle">
			{experience.title}
		</h4>
		<ul>
			{experience.points.map((point, index) => (
				<li
					key={`experience-point-${index}`}
					className="text-white-100 text-[14px] pl-1 tracking-wider"
				>
					{point}
				</li>
			))}
		</ul>
	</VerticalTimelineElement>
);

const Experience = () => {
    return (
        <div>
            <VerticalTimeline
            className="vertical-timeline vertical-timeline--animate vertical-timeline--two-columns"
            >
                {experiences.map((experience, index) => (
                    <ExperienceCard key={index} experience={experience} />
                ))}
            </VerticalTimeline>
        </div>
    );
};

export default Experience;
