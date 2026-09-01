import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

import Home from "@/pages/Home";
import Spaces from "@/pages/Spaces";
import Pricing from "@/pages/Pricing";
import NightShift from "@/pages/NightShift";
import HotDesk from "@/pages/HotDesk";
import DedicatedDesk from "@/pages/DedicatedDesk";
import PrivateOffice from "@/pages/PrivateOffice";
import MeetingRooms from "@/pages/MeetingRooms";
import WapdaTown from "@/pages/WapdaTown";
import Pcsir from "@/pages/Pcsir";
import Amenities from "@/pages/Amenities";
import Community from "@/pages/Community";
import About from "@/pages/About";
import Faq from "@/pages/Faq";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function ScrollToTop() {
  const [pathname] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/** Route table. Every indexable path here must also appear in src/data/routes.ts. */
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/spaces" component={Spaces} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/night-shift-coworking-lahore" component={NightShift} />
      <Route path="/hot-desk-lahore" component={HotDesk} />
      <Route path="/dedicated-desk-lahore" component={DedicatedDesk} />
      <Route path="/private-office-lahore" component={PrivateOffice} />
      <Route path="/meeting-rooms-lahore" component={MeetingRooms} />
      <Route path="/coworking-space-wapda-town" component={WapdaTown} />
      <Route path="/coworking-space-pcsir" component={Pcsir} />
      <Route path="/amenities" component={Amenities} />
      <Route path="/community" component={Community} />
      <Route path="/about" component={About} />
      <Route path="/faq" component={Faq} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-[#050505] selection:bg-primary/30">
          <Navigation />
          <main>
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
