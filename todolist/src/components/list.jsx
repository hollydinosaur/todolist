const List = ({ toDoList, setToDoList }) => {
	const updateToDoList = (item) => {
		setToDoList((prevToDo) => {
			const copied = [];
			prevToDo.forEach((arrItem) => {
				if (arrItem.task !== item.task) {
					copied.push(arrItem);
				}
			});
			return copied;
		});
	};
	return (
		<section className="list">
			<h2> {toDoList.length === 0 ? "" : `${toDoList[0].day} to do list:`}</h2>
			<ul>
				{toDoList.map((item) => {
					return (
						<div className={"class" + item.task}>
							<li key={"list" + item.task}>
								{item.priority}
								{item.task}
								<button
									key={"button" + item.task}
									onClick={() => {
										updateToDoList(item);
									}}
								>
									✅
								</button>
							</li>
						</div>
					);
				})}
			</ul>
		</section>
	);
};
export default List;
