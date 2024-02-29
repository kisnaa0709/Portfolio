import ThemeModeButton from "@/app/components/atom/themeMode/themeModeButton";
import NavbarMenu from "@/app/components/molecule/navbar/navbarMenu";
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
