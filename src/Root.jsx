import { useEffect, useState } from "react";
import App from "./App";
import LoadingCircle from "./shared/components/LoadingCircle";

function Root() {

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {

    const startApp = async () => {

      // simulate initialization
      await new Promise(resolve => setTimeout(resolve, 1500));

      setIsReady(true);
    };

    startApp();

  }, []);

  if (!isReady) {
    return <LoadingCircle />;
  }

  return <App />;
}

export default Root;