import Navbar from "../components/NavBar";
import FourDXContent from "../components/4DXContent";

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar/>
      <FourDXContent />
    </main>
  );
}