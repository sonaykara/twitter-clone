import Footer from "./footer";
import Premium from "./premium/index";
import Search from "./search/index";
import Topic from "./topics/index";
import WhoFollow from "./who-fallow";


export default function RightBar() {
	return (
		<aside className="w-[350px] mr-2.5">
			<Search />
			<Premium />
			<Topic />
			<WhoFollow />
			<Footer />
		</aside>
	)
}