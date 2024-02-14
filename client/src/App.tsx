import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Register from "./pages/register";
import SignIn from "./pages/sign-in";

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
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/search" element={<>search page</>} />
          <Route path="/register" element={<Register />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
