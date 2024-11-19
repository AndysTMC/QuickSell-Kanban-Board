import { useState } from "react";
import { Ordering, Grouping } from "../../utils/structures";
import "./display-settings.css";

const SubSettings = {
	NOT_OPEN: "none",
	ORDERING: "ordering",
	GROUPING: "grouping",
};

export default function DisplaySettings({ ordering, setOrdering, grouping, setGrouping }) {
	const [subSettings, setSubSettings] = useState(SubSettings.NOT_OPEN);

	const handleGroupingClick = () => {
		if (subSettings == SubSettings.GROUPING) setSubSettings(SubSettings.NOT_OPEN);
		else setSubSettings(SubSettings.GROUPING);
	}

	const handleOrderingClick = () => {
		if (subSettings == SubSettings.ORDERING) setSubSettings(SubSettings.NOT_OPEN);
		else setSubSettings(SubSettings.ORDERING);
	}

	return (
		<div className="home-top-bar-display-settings">
			<div className="home-top-bar-display-settings-element">
				<text className="home-top-bar-display-settings-element-text">
					Grouping
				</text>

				<div className="home-top-bar-display-settings-element-select-area">
					<button className="home-top-bar-display-settings-element-button" onClick={handleGroupingClick}>
						<text>{grouping}</text>
						<svg
							width="15"
							height="15"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							opacity={0.5}
						>
							<path
								d="M9.99583 12.75C9.89583 12.75 9.80208 12.7326 9.71458 12.6979C9.62708 12.6632 9.5486 12.6111 9.47916 12.5416L5.52791 8.59038C5.37041 8.43288 5.29513 8.25343 5.30208 8.05204C5.30902 7.85065 5.38888 7.67357 5.54166 7.52079C5.69444 7.36801 5.87152 7.29163 6.07291 7.29163C6.2743 7.29163 6.45138 7.36801 6.60416 7.52079L9.99999 10.9375L13.4167 7.52079C13.5694 7.36801 13.7465 7.2951 13.9479 7.30204C14.1493 7.30899 14.3264 7.38885 14.4792 7.54163C14.6319 7.6944 14.7083 7.87149 14.7083 8.07288C14.7083 8.27426 14.6296 8.45329 14.4721 8.60996L10.5208 12.5416C10.4458 12.6111 10.3646 12.6632 10.2771 12.6979C10.1896 12.7326 10.0958 12.75 9.99583 12.75Z"
								fill="#535961"
							/>
						</svg>
					</button>
					{subSettings == SubSettings.GROUPING ? (
						<div className="home-top-bar-display-settings-element-select-area-options">
							<div
								className={`home-top-bar-display-settings-element-select-area-option ${
									Grouping.STATUS == grouping
										? "home-top-bar-display-settings-element-select-area-option-selected"
										: ""
								}`}
								onClick={() => setGrouping(Grouping.STATUS)}
							>
								<text>Status</text>
							</div>
							<div
								className={`home-top-bar-display-settings-element-select-area-option ${
									Grouping.USER == grouping
										? "home-top-bar-display-settings-element-select-area-option-selected"
										: ""
								}`}
								onClick={() => setGrouping(Grouping.USER)}
							>
								<text>User</text>
							</div>
							<div
								className={`home-top-bar-display-settings-element-select-area-option ${
									Grouping.PRIORITY == grouping
										? "home-top-bar-display-settings-element-select-area-option-selected"
										: ""
								}`}
								onClick={() => setGrouping(Grouping.PRIORITY)}
							>
								<text>Priority</text>
							</div>
						</div>
					) : null}
				</div>
			</div>
			<div className="home-top-bar-display-settings-element">
				<text className="home-top-bar-display-settings-element-text">
					Ordering
				</text>
				<div className="home-top-bar-display-settings-element-select-area">
					<button className="home-top-bar-display-settings-element-button" onClick={handleOrderingClick}>
						<text>{ordering}</text>
						<svg
							width="15"
							height="15"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							opacity={0.5}
							fontSize={20}
						>
							<path
								d="M9.99583 12.75C9.89583 12.75 9.80208 12.7326 9.71458 12.6979C9.62708 12.6632 9.5486 12.6111 9.47916 12.5416L5.52791 8.59038C5.37041 8.43288 5.29513 8.25343 5.30208 8.05204C5.30902 7.85065 5.38888 7.67357 5.54166 7.52079C5.69444 7.36801 5.87152 7.29163 6.07291 7.29163C6.2743 7.29163 6.45138 7.36801 6.60416 7.52079L9.99999 10.9375L13.4167 7.52079C13.5694 7.36801 13.7465 7.2951 13.9479 7.30204C14.1493 7.30899 14.3264 7.38885 14.4792 7.54163C14.6319 7.6944 14.7083 7.87149 14.7083 8.07288C14.7083 8.27426 14.6296 8.45329 14.4721 8.60996L10.5208 12.5416C10.4458 12.6111 10.3646 12.6632 10.2771 12.6979C10.1896 12.7326 10.0958 12.75 9.99583 12.75Z"
								fill="#535961"
							/>
						</svg>
					</button>
					{subSettings == SubSettings.ORDERING ? (
						<div className="home-top-bar-display-settings-element-select-area-options" >
							<text>Priority</text>
							<div
								className={`home-top-bar-display-settings-element-select-area-option ${
									Ordering.P_ASC == ordering
										? "home-top-bar-display-settings-element-select-area-option-selected"
										: ""
								}`}
								onClick={() => setOrdering(Ordering.P_ASC)}
							>
								<text>ASC</text>
							</div>
							<div
								className={`home-top-bar-display-settings-element-select-area-option ${
									Ordering.P_DESC == ordering
										? "home-top-bar-display-settings-element-select-area-option-selected"
										: ""
								}`}
								onClick={() => setOrdering(Ordering.P_DESC)}
							>
								<text>DESC</text>
							</div>
							<text>Title</text>
							<div
								className={`home-top-bar-display-settings-element-select-area-option ${
									Ordering.T_ASC == ordering
										? "home-top-bar-display-settings-element-select-area-option-selected"
										: ""
								}`}
								onClick={() => setOrdering(Ordering.T_ASC)}
							>
								<text>ASC</text>
							</div>
							<div
								className={`home-top-bar-display-settings-element-select-area-option ${
									Ordering.T_DESC == ordering
										? "home-top-bar-display-settings-element-select-area-option-selected"
										: ""
								}`}
								onClick={() => setOrdering(Ordering.T_DESC)}
							>
								<text>DESC</text>
							</div>
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
}
