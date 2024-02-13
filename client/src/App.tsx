import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <div className="container mx-auto">
        <h1>serch bar</h1>
      </div>
      <div className="container mx-auto py-10 flex-1">
        <Routes>
          <Route path="/" element={<>home page</>} />
          <Route path="/sign-in" element={<>sign in page</>} />
          <Route path="/search" element={<>search page</>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
