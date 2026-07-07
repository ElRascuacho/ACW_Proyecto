import { useEffect, useMemo, useState } from "react";
import { AppShell } from "./components/AppShell";
import { screens } from "./data/screens";
import { ContactWireframe } from "./pages/ContactWireframe";
import { HomeWireframe } from "./pages/HomeWireframe";
import { QuoteWireframe } from "./pages/QuoteWireframe";
import { SupportWireframe } from "./pages/SupportWireframe";

function getRouteFromHash() {
  const hash = window.location.hash.replace("#", "");
  return hash || "/";
}

export function App() {
  const [route, setRoute] = useState(getRouteFromHash);

  useEffect(() => {
    const onHashChange = () => setRoute(getRouteFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const activeScreen = useMemo(() => screens.find((screen) => screen.route === route) ?? screens[0], [route]);

  const navigate = (nextRoute: string) => {
    window.location.hash = nextRoute;
    setRoute(nextRoute);
  };

  return (
    <AppShell activeRoute={activeScreen.route} onNavigate={navigate}>
      {activeScreen.id === "inicio" && <HomeWireframe screen={activeScreen} onNavigate={navigate} />}
      {activeScreen.id === "cotizador" && <QuoteWireframe screen={activeScreen} />}
      {activeScreen.id === "soporte" && <SupportWireframe screen={activeScreen} />}
      {activeScreen.id === "contacto" && <ContactWireframe screen={activeScreen} />}
    </AppShell>
  );
}
