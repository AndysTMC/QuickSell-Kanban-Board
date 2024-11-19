import { useState, useEffect } from "react";
import "./home.css";
import { Ordering, Grouping } from "../../utils/structures";
import HomeTopBar from "../Home-Top-Bar/HomeTopBar";
import PriorityContent from "../Priority-Content/PriorityContent";
import StatusContent from "../Status-Content/StatusContent";
import UserContent from "../User-Content/UserContent";

export default function App() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [ordering, setOrdering] = useState(Ordering.T_ASC);
	const [grouping, setGrouping] = useState(Grouping.STATUS);

	useEffect(() => {
		if (loading) {
			fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
				.then((response) => response.json())
				.then((fetchedData) => {
					setData(fetchedData);
					setLoading(false);
				})
				.catch((error) => {
					console.error("Error fetching data:", error);
					setLoading(false);
				});
		}
	}, [loading]); // Dependency on `loading`

	return (
		<div className="home">
			<HomeTopBar
				ordering={ordering}
				setOrdering={setOrdering}
				grouping={grouping}
				setGrouping={setGrouping}
			/>
			<div className="home-content">
				{grouping === Grouping.STATUS && <StatusContent data={data} ordering={ordering} grouping={grouping} />}
				{grouping === Grouping.USER && <UserContent data={data} ordering={ordering} grouping={grouping} />}
				{grouping === Grouping.PRIORITY && <PriorityContent data={data} ordering={ordering} grouping={grouping} />}
			</div>
		</div>
	);
}