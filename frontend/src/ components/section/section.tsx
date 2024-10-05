import React from "react";

interface SectionProps {
	sectionName: string;
}

const Section: React.FC<SectionProps> = ({ sectionName }) => {
	return <div>{sectionName}</div>;
};

export default Section;
