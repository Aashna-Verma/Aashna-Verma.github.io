import { useEffect } from "react";

export default function Portfolio() {
	useEffect(() => {
		window.open(
			"https://aashna-verma.notion.site/Aashna-s-Portfolio-19aefb6404cc809fbd0bdc524e4bdfad",
			"_blank"
		);
		window.location.href = "/";
	});

	return <div className="Portfolio"></div>;
}
