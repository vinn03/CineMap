import React, { useState } from "react";
import "./Sidebar.css"; // Optional for custom styles
import Section from "../section/section";
import "./sidebar.css";

const Sidebar: React.FC = () => {
	const [activeSection, setActiveSection] = useState<number | null>(null); // Track the active section (null means sidebar is collapsed)

	const toggleSection = (sectionIndex: number) => {
		if (activeSection === sectionIndex) {
			setActiveSection(null); // Collapse if the same section is clicked
		} else {
			setActiveSection(sectionIndex); // Switch to the new section
		}
	};

	return (
		<>
			{activeSection !== null && (
				<div className="backdrop" onClick={() => setActiveSection(null)} />
			)}{" "}
			{/* Backdrop for when sidebar is open */}
			<div className={"sidebar ${activeSection !== null ? "open" : ""}`}>
				{/* Conditional class for open state */}
				<div className="top-sections">
					<button>
						className={`sidebar-btn ${activeSection === 1 ? "active" : ""}`}
						onClick={() => toggleSection(1)}
					>
						Section 1
					</button>
					<button
						className={`sidebar-btn ${activeSection === 2 ? "active" : ""}`}
						onClick={() => toggleSection(2)}
					>
						Section 2
					</button>
				</div>
				<div className="content-section">
					{activeSection === 1 && <Section sectionName="Section 1 Content" />}
					{activeSection === 2 && <Section sectionName="Section 2 Content" />}
				</div>
				<div className="profile-section">
					<img src="profile.png" alt="Profile" className="profile-icon" />
				</div>
			</div>
		</>
	);
};

export default Sidebar;
