import Navbar from "../components/NavBar";
import OfferList from "../components/OfferList";
import OfferBanner from "../components/OfferBanner";
export default function OfertePage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <div className="py-10">
        <OfferBanner/>
        <OfferList />
      </div>
    </main>
  );
}