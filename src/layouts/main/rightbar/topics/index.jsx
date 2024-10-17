import { topics } from "../../../../utils/menuconst";
import Topic from "./topic";
import SidebarSection from "../../../../Components/sidebar-section/index";

export default function Topics() {
	return (
		<SidebarSection
			title="İlgini çekebilecek gündemler"
			more="/trends"
		>
			{topics.map((topic, index) => <Topic item={topic} key={index}/>)}
		</SidebarSection>
	)
}