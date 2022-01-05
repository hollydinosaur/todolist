import "./App.css";
import Header from "../../../todolist/todolist/src/components/header";
import { useState } from "react";
import List from "../../../todolist/todolist/src/components/list";
import AddToDo from "../../../todolist/todolist/src/components/addToDo";

function App() {
	const exampleToDo = [
		{ task: "food", priority: `🔴  `, day: "today" },
		{ task: "washing up", priority: `💚  `, day: "today" },
		{ task: "coding", priority: `🔶  `, day: "tomorrow" },
	];
	const [toDoList, setToDoList] = useState(exampleToDo);

	const days = ["today", "tomorrow"];

	return (
		<div className="App">
			<Header />
			<AddToDo toDoList={toDoList} setToDoList={setToDoList} />
			{days.map((dayName) => {
				return (
					<List
						toDoList={toDoList.filter((todo) => todo.day === dayName)}
						setToDoList={setToDoList}
					></List>
				);
			})}
			{/* <List toDoList={todayToDo} setToDoList={setToDoList} />
      <List toDoList={tomorrowToDo} setToDoList={setToDoList} /> */}
		</div>
	);
}

export default App;
