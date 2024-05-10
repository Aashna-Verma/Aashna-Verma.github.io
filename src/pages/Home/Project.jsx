import "./Project.scss";
import arrow from "../../assets/arrow.svg";

export default function Project({ img, title, tags, links, tools }) {
	return (
		<div className="project project-popup">
			<div className="project-glass">
				<img className="project-image" src={img} alt="project" />
			</div>
			<div className="project-info">
				<div className="project-title">{title}</div>
				<div>
					{links
						? links.map(([tag, link], index) => (
								<button
									key={index}
									className="project-tag arrow"
									onClick={() => window.open(link, "_blank")}
								>
									<span>{tag}</span>
									<img src={arrow} alt="arrow" />
								</button>
						  ))
						: null}

					{tags
						? tags.map((tag, index) => (
								<div key={index} className="project-tag roundHex">
									<span>{tag}</span>
								</div>
						  ))
						: null}
				</div>
				<div className="project-skills">
					{tools
						? tools.map((item, index) => {
								return (
									<a
										key={index}
										data-tooltip-id="ash-tooltip"
										data-tooltip-content={item.tooltip}
										data-tooltip-place="bottom"
										href={item.href}
										target="_blank"
									>
										<i className={item.icon} />
									</a>
								);
						  })
						: null}
				</div>
			</div>
		</div>
	);
}
