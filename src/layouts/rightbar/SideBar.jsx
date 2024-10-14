import Premium from "./premium";
import Search from "./search";
import Topic from "./topics";

export default function RightBar() {
	return (
		<aside className="w-[350px] mr-2.5">
			<Search />
			<Premium />
			<Topic />
		</aside>
	)
}