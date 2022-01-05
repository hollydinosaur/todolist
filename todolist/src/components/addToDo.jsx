import { useState } from "react";

const AddToDo = ({ toDoList, setToDoList }) => {
	const [newToDo, setNewToDo] = useState("");
	const [priority, setPriority] = useState("");
	const [day, setDay] = useState("");
	const [checkedHigh, setCheckedHigh] = useState(false);
	const [checkedMed, setCheckedMed] = useState(false);
	const [checkedLow, setCheckedLow] = useState(false);
	const [today, setToday] = useState("");
	const [tomorrow, setTomorrow] = useState("");

	const clearCheckbox = () => {
		setCheckedHigh(false);
		setCheckedMed(false);
		setCheckedLow(false);
		setToday(false);
		setTomorrow(false);
	};

	const handleDayToday = (e) => {
		setToday(true);
		setTomorrow(false);
		setDay("today");
	};
	const handleDayTomorrow = (e) => {
		setTomorrow(true);
		setToday(false);
		setDay("tomorrow");
	};

	const handleChangeHigh = () => {
		setCheckedLow(false);
		setCheckedMed(false);
		setPriority(`🔴  `);
		return setCheckedHigh(!checkedHigh);
	};
	const handleChangeMed = () => {
		setCheckedHigh(false);
		setCheckedLow(false);
		setPriority(`🔶  `);
		return setCheckedMed(!checkedMed);
	};
	const handleChangeLow = () => {
		setCheckedHigh(false);
		setCheckedMed(false);
		setPriority(`💚  `);
		return setCheckedLow(!checkedLow);
	};

	const addToList = (e) => {
		e.preventDefault();
		setToDoList((toDoList) => {
			const copied = [...toDoList];
			const newTaskObj = { task: newToDo, priority: priority, day: day };
			copied.push(newTaskObj);
			return copied;
		});
		setNewToDo("");
		clearCheckbox();
	};
	return (
		<section className="addToDo">
			<form onSubmit={addToList} required>
				<fieldset>
					<legend>
						Write in an item and select priority level to add to your to do
						list.
					</legend>
					<p>Once completed, click the tick to remove it from your list!</p>
					<label htmlFor="inputItem"></label>
					<input
						type="text"
						name="inputItem"
						id="inputItem"
						value={newToDo}
						onChange={(e) => {
							setNewToDo(e.target.value);
						}}
						required
					></input>
					<section className="priorities" required>
						<label>
							<input
								type="checkbox"
								id="high"
								checked={checkedHigh}
								onChange={handleChangeHigh}
							></input>
							High
						</label>
						<label>
							<input
								type="checkbox"
								id="medium"
								checked={checkedMed}
								onChange={handleChangeMed}
							></input>
							Medium
						</label>
						<label>
							<input
								type="checkbox"
								id="low"
								checked={checkedLow}
								onChange={handleChangeLow}
							></input>
							Low
						</label>
						<section className="priorities" required>
							<div id="date">
								<input
									type="checkbox"
									id="today"
									name="today"
									value="today"
									checked={today}
									onChange={handleDayToday}
								></input>
								<label htmlFor="today">Today</label>
								<input
									type="checkbox"
									id="tomorrow"
									name="tomorrow"
									value="tomorrow"
									checked={tomorrow}
									onChange={handleDayTomorrow}
								></input>
								<label htmlFor="tomorrow">Tomorrow</label>
							</div>
							<button type="submit" key="submitButton" id="submitButton">
								Add to list
							</button>
						</section>
					</section>
				</fieldset>
			</form>
		</section>
	);
};

export default AddToDo;
