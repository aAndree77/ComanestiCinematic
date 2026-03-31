import Navbar from "../components/NavBar";
import VipContent from "../components/VipContent";

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar/>
      <VipContent />
    </main>
  );
}