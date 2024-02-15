import ThemeModeButton from "../atom/themeModeButton";
import NavbarMenu from "../molecule/navbarMenu";
interface props {
    toggleSwitch: Function;
}

export default function Header({ toggleSwitch }: props) {
    return (
        <main className="sticky top-0 z-20 w-screen flex items-center justify-between primaryBG primaryText ">
            <ThemeModeButton toggleSwitch={toggleSwitch} />
            <NavbarMenu />
        </main>
    );
}
