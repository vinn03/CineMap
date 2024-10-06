import React from "react";
import "./sections.css";

const NewFilm: React.FC = () => {
	return (
		<div className="new-film-form">
			<h3>Add New Movie</h3>
			<table>
				<tr>
					<td>Title:</td>
					<td>
						<input type="text" name="title" />
					</td>
				</tr>
				<tr>
					<td>Year:</td>
					<td>
						<input type="text" name="year" />
					</td>
				</tr>
				<tr>
					<td>Genre:</td>
					<td>
						<input type="text" name="genre" />
					</td>
				</tr>
				<tr>
					<td>Director:</td>
					<td>
						<input type="text" name="director" />
					</td>
				</tr>
			</table>
			<button type="submit">Submit</button>
		</div>
	);
};

export default NewFilm;
