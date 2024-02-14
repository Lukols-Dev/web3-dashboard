import { BringToFront } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-center justify-center">
        <BringToFront className="w-6 h-6" />
      </div>
    </Link>
  );
};

export default Logo;
