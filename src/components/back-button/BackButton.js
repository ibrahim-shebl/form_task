import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BackButton = ({ previousRoute = "/" }) => {
   return (
      <div className="flex">
         <Link to={previousRoute} className="bg-sky-800 text-white px-4 py-1 rounded-lg w-fit">
            <BsArrowLeft className="text-3xl" />
         </Link>
      </div>
   );
};

export default BackButton;
