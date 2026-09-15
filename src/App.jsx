import FloatingHearts from "./components/FloatingHearts";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import LoveLetter from "./components/LoveLetter";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background effects - fixed để không tạo scroll */}
      <FloatingHearts />

      {/* Main content */}
      <main className="relative z-10 w-full">
        <Hero />
        <Countdown />
        <LoveLetter />
        <Timeline />
        <Footer />
      </main>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pink-50/50 to-transparent pointer-events-none z-0" />
    </div>
  );
}

export default App;