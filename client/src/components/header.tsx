import { Plane } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./logo";

const Header = () => {
  return (
    <header className="bg-blue-800 py-6">
      <div className="container mx-auto flex justify-between">
        <Logo />
        <span className="flex space-x-2">
          <Link
            to="/sign-in"
            className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100"
          >
            Sign In
          </Link>
        </span>
      </div>
    </header>
  );
};

export default Header;
