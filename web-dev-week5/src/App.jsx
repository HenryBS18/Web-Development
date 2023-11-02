import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Form from "./pages/Form";

function App() {
  const [page, setPage] = useState('home');

  const currentPage = () => {
    switch (page) {
      case 'home':
        return <Home />;
      case 'form':
        return <Form setPage={setPage} />;
    }
  }

  return (
    <>
      <Navbar page={page} setPage={setPage} />
      {currentPage()}
    </>
  )
}

export default App;
