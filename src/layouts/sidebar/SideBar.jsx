import Account from "./account";
import Logo from "./logo/Logo";
import Menu from "./menu/Menu";

const SideBar = () => {
  return (
    <aside className="w-[275px] max-h-screen min-h-screen px-2 flex flex-col">
			<Logo />
			<Menu />
			<Account />
		</aside>
  );
};

export default SideBar;
