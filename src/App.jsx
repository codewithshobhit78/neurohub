import { useEffect, useState } from "react";

import Home from "./pages/Home";

import Loader from "./components/Loader";

export default function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 3000);

    return () => clearTimeout(timer);

  }, []);

  return (

    <>

      {loading ? <Loader /> : <Home />}

    </>

  );

}