import About from "@/app/components/organism/about/about";
import Profile from "@/app/components/organism/profile/profile";
import Loader from "./components/atom/loader/loader";

export default function Home() {

  return (
    <main className="w-screen primaryBG primaryText pb-4 minHeight">
      <Profile />
      <About />
    </main>
  );
}
