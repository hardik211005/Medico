import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import MoveUpOnRender from "../components/MoveUpOnRender";

const Doctors = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);
  return (
    <div>
      <p className="text-gray-600 font-semibold">Browse through the doctors specialist.</p>
      <div className="flex">
        <div className="flex items-start gap-5 mt-5">
          <button
            className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${
              showFilter ? " bg-green-900 text-white " : ""
            }`}
            onClick={() => setShowFilter((prev) => !prev)}
          >
            Filter
          </button>
          <div
            className={`flex-col gap-4 text-sm text-gray-600  ${
              showFilter ? "flex" : "hidden sm:flex"
            }`}
          >
            <p
              onClick={() =>
                speciality === "General physician"
                  ? navigate(`/doctors`)
                  : navigate("/doctors/General physician")
              }
              className={`w-[91vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer bg-green-200 text-black ${
                speciality === "General physician"
                  ? "bg-green-900 hover:text-white"
                  : ""
              }`}
            >
              General physician
            </p>
            <p
              onClick={() =>
                speciality === "Gynecologist"
                  ? navigate(`/doctors`)
                  : navigate("/doctors/Gynecologist")
              }
              className={`w-[91vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer bg-green-200 text-black ${
                speciality === "Gynecologist" ? "bg-green-900 hover:text-white" : ""
              }`}
            >
              Gynecologist
            </p>
            <p
              onClick={() =>
                speciality === "Dermatologist"
                  ? navigate(`/doctors`)
                  : navigate("/doctors/Dermatologist")
              }
              className={`w-[91vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer bg-green-200 text-black ${
                speciality === "Dermatologist" ? "bg-green-900 hover:text-white" : ""
              }`}
            >
              Dermatologist
            </p>
            <p
              onClick={() =>
                speciality === "Pediatricians"
                  ? navigate(`/doctors`)
                  : navigate("/doctors/Pediatricians")
              }
              className={`w-[91vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer bg-green-200 text-black 
              ${
                speciality === "Pediatricians" ? "bg-green-900 hover:text-white" : ""
              }`}
            >
              Pediatricians
            </p>
            <p
              onClick={() =>
                speciality === "Neurologist"
                  ? navigate(`/doctors`)
                  : navigate("/doctors/Neurologist")
              }
              className={`w-[91vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer bg-green-200 text-black ${
                speciality === "Neurologist" ? "bg-green-900 hover:text-white" : ""
              }`}
            >
              Neurologist
            </p>
            <p
              onClick={() =>
                speciality === "Gastroenterologist"
                  ? navigate(`/doctors`)
                  : navigate("/doctors/Gastroenterologist")
              }
              className={`w-[91vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer bg-green-200 text-black ${
                speciality === "Gastroenterologist"
                  ? "bg-green-900 hover:text-white"
                  : ""
              }`}
            >
              Gastroenterologist
            </p>
          </div>
        </div>

        <div className="w-full m-4">
          <MoveUpOnRender>
            <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
              {filterDoc.map((item, index) => (
                <div
                  onClick={() => navigate(`/appointment/${item._id}`)}
                  className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:scale-110 transition-all duration-500"
                  key={index}
                >
                  <img className="bg-blue-50" src={item.image} alt="" />
                  <div className="p-4">
                    <div
                      className={`flex items-center gap-2 text-sm text-center ${
                        item.available ? " text-green-500" : "text-gray-500"
                      } `}
                    >
                      <p
                        className={`w-2 h-2 ${
                          item?.available ? " bg-green-500" : "bg-gray-500"
                        }  rounded-full`}
                      ></p>{" "}
                      <p>{item.available ? "Available" : "Not Available"}</p>
                    </div>
                    <p className="text-gray-900 text-lg font-medium ">
                      {item.name}
                    </p>
                    <p className="text-gray-600 text-sm">{item.speciality}</p>
                  </div>
                </div>
              ))}
            </div>
          </MoveUpOnRender>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
