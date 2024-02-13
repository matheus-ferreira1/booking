import { Link } from "react-router-dom";
import { Plane } from "lucide-react";

const Logo = () => {
  return (
    <span className="text-3xl text-white font-bold tracking-tight">
      <Link to="/" className="flex items-center justify-between gap-2">
        <Plane />
        <span>My Travel</span>
      </Link>
    </span>
  );
};

export default Logo;
