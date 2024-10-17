import SidebarSection from "../../../../Components/sidebar-section/index.jsx";
import {useAccount} from "../../../../store/auth/hooks.js";
import UserCard from "../../../../Components/user-card";
import { whoFollowUsers } from "../../../../mock";

export default function WhoFollow() {
	const account = useAccount()
	return (
		<SidebarSection
			title="Kimi takip etmeli"
			more={`/connect_people?user_id=${account.id}`}
		>
			{whoFollowUsers.map(user => <UserCard user={user} key={user.id} />)}
		</SidebarSection>
	)
}