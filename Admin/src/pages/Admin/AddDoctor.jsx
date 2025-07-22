import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";
import MoveUpOnRender from "../../components/MoveUpOnRender";

const initialValues = {
  name: "",
  email: "",
  password: "",
  experience: "1 Year",
  fees: "",
  about: "",
  speciality: "General physician",
  degree: "",
  address1: "",
  address2: "",
};
const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false);
  const [doctorData, setDoctorData] = useState(initialValues);

  const handleInputChange = (e) => {
    //const name = e.target.name
    //const value = e.target.value
    const { name, value } = e.target;

    setDoctorData({
      ...doctorData,
      [name]: value,
    });
  };

  const { backendUrl, aToken } = useContext(AdminContext);

  const handleOnSubmit = async (event) => {
    event.preventDefault(); // not reload funtion

    try {
      if (!docImg) {
        return toast.error("Image not selected");
      }
      const formData = new FormData();

      if (!docImg) {
        return toast.error("Image not selected");
      }
      formData.append("image", docImg);
      formData.append("name", doctorData.name);
      formData.append("email", doctorData.email);
      formData.append("password", doctorData.password);
      formData.append("experience", doctorData.experience);
      formData.append("fees", Number(doctorData.fees));
      formData.append("about", doctorData.about);
      formData.append("speciality", doctorData.speciality);
      formData.append("degree", doctorData.degree);
      formData.append(
        "address",
        JSON.stringify({
          line1: doctorData.address1,
          line2: doctorData.address2,
        })
      );

      const { data } = await axios.post(
        backendUrl + "/api/admin/add-doctor",
        formData,
        {
          headers: { aToken },
        }
      );

      if (data.success) {
        toast.success(data.message);
        setDocImg(null);
        setDoctorData(initialValues);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("error:", error);
      toast.error(error);
    }
  };
  return (
    <MoveUpOnRender id="admin-adddoctor">
      <form onSubmit={handleOnSubmit} className="m-5 w-full">
        <p className="mb-3 text-lg font-medium">Add Doctor</p>

        <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll ">
          <div className="flex items-center gap-4 mb-8 text-gray-500">
            <label htmlFor="doc-img">
              <img
                className="w-16 bg-gray-100 rounded-full cursor-pointer "
                src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
                alt=""
              />
            </label>
            <input
              onChange={(e) => setDocImg(e.target.files[0])}
              type="file"
              id="doc-img"
              hidden
            />
            <p>
              Upload Doctor <br /> picture
            </p>
          </div>

          <div className=" flex flex-col lg:flex-row items-start gap-10 text-gray-600">
            <div className="w-full lg:flex-1 flex flex-col gap-4">
              <div className="flex-1 flex flex-col gap-1">
                <p>Doctor name</p>
                <input
                  className="border rounded px-3 py-2"
                  type="text"
                  onChange={handleInputChange}
                  value={doctorData.name}
                  name="name"
                  label="name"
                  placeholder="Name"
                  required
                />
              </div>

              <div className="flex-1 flex flex-col gap-1">
                <p>Doctor Email</p>
                <input
                  className="border rounded px-3 py-2"
                  type="email"
                  value={doctorData.email}
                  onChange={handleInputChange}
                  name="email"
                  label="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <p>Doctor Password</p>
                <input
                  className="border rounded px-3 py-2"
                  type="password"
                  placeholder="Password"
                  value={doctorData.password}
                  onChange={handleInputChange}
                  name="password"
                  label="password"
                  required
                />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <p>Experience</p>
                <select
                  value={doctorData.experience}
                  onChange={handleInputChange}
                  name="experience"
                  label="experience"
                  className="border rounded px-3 py-2"
                >
                  <option value="1 Year">1 Year</option>
                  <option value="2 Year">2 Year</option>
                  <option value="3 Year">3 Year</option>
                  <option value="4 Year">4 Year</option>
                  <option value="5 Year">5 Year</option>
                  <option value="6 Year">6 Year</option>
                  <option value="7 Year">7 Year</option>
                  <option value="8 Year">8 Year</option>
                  <option value="9 Year">9 Year</option>
                  <option value="10 Year">10 Year</option>
                </select>
              </div>

              <div className="flex-1 flex flex-col gap-1">
                <p>Fees</p>
                <input
                  className="border rounded px-3 py-2"
                  type="number"
                  placeholder="Fees"
                  value={doctorData.fees}
                  onChange={handleInputChange}
                  name="fees"
                  label="fees"
                  required
                />
              </div>
            </div>

            <div className="w-full lg:flex-1 flex flex-col gap-4">
              <div className="flex-1 flex flex-col gap-1">
                <p>Speciality</p>
                <select
                  value={doctorData.speciality}
                  onChange={handleInputChange}
                  name="speciality"
                  label="speciality"
                  className="border rounded px-3 py-2"
                  id=""
                >
                  <option value="General physician">General physician</option>
                  <option value="Gynecologist">Gynecologist</option>
                  <option value="Dermatologist">Dermatologist</option>
                  <option value="Pediatricians">Pediatricians</option>
                  <option value="Neurologist">Neurologist</option>
                  <option value="Gastroenterologist">Gastroenterologist</option>
                </select>
              </div>

              <div className="flex-1 flex flex-col gap-1">
                <p>Education</p>
                <input
                  className="border rounded px-3 py-2"
                  type="text"
                  value={doctorData.degree}
                  onChange={handleInputChange}
                  name="degree"
                  label="degree"
                  placeholder="Education"
                  required
                />
              </div>

              <div className="flex-1 flex flex-col gap-1">
                <p>Address</p>
                <input
                  className="border rounded px-3 py-2"
                  type="text"
                  value={doctorData.address1}
                  onChange={handleInputChange}
                  name="address1"
                  label="address1"
                  placeholder="Address 1"
                  required
                />
                <input
                  className="border rounded px-3 py-2"
                  type="text"
                  value={doctorData.address2}
                  onChange={handleInputChange}
                  name="address2"
                  label="address2"
                  placeholder="Address 2"
                  required
                />
              </div>
            </div>
          </div>

          <div className="">
            <p className="mt-4 mb-2">About Doctor</p>
            <textarea
              className="w-full px-4 pt-2 border rounded"
              placeholder="Write about doctor"
              value={doctorData.about}
              onChange={handleInputChange}
              name="about"
              label="about"
              rows={5}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-300 font-semibold px-10 py-3 mt-4 text-white rounded-full"
          >
            Add Doctor
          </button>
        </div>
      </form>
    </MoveUpOnRender>
  );
};

export default AddDoctor;
