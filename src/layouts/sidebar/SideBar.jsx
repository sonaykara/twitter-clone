import Logo from "./logo/Logo";
import Menu from "./menu/Menu";

const SideBar = () => {
  return (
    <aside className="w-[275px] min-h-screen px-2">
      <Logo />
      <Menu />
    </aside>
  );
};

export default SideBar;
