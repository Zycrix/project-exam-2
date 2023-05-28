import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * A component used as a workaround to scroll to top when navigating between pages
 * @returns Returns the scroll to top component
 */

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default App;
