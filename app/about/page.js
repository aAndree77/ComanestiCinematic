import Navbar from "../components/NavBar";
import AboutContent from "../components/AboutContent";

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar/>
      <AboutContent/>
    </main>
  );
}