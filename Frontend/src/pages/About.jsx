import { assets } from "../assets/assets";
import MoveUpOnRender from "../components/MoveUpOnRender";

const About = () => {
  return (
    <MoveUpOnRender id="about">
      <div>
        <div className="text-center text-3xl pt-10 text-green-900 font-bold">
          <p>
            About <span className="text-black font-bold ">US</span>
          </p>
        </div>

        {/*  ---------top section---------*/}
        <div className="my-10 flex flex-col md:flex-row gap-12">
          <img
            className="w-full md:max-w-[360px] rounded-lg shadow-lg"
            src={assets.about_image}
            alt=""
          />
          <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600 font-medium">
            <p>
              Welcome to Medico, your trusted partner in managing your
              healthcare needs conveniently and efficiently. At Medico, we
              understand the challenges individuals face when it comes to
              scheduling doctor appointments and managing their health records.
            </p>
            <p>
              Medico is committed to excellence in healthcare technology. We
              continuously strive to enhance our platform, integrating the
              latest advancements to improve user experience and deliver
              superior service. Whether you're booking your first appointment or
              managing ongoing care, Medico is here to support you every
              step of the way.
            </p>
            <b className="text-gray-800">Our Vision</b>
            <p>
              Our vision at Medico is to create a seamless healthcare
              experience for every user. We aim to bridge the gap between
              patients and healthcare providers, making it easier for you to
              access the care you need, when you need it.
            </p>
          </div>
        </div>

        <div className="text-xl my-4 ">
          <p>
            Why <span className="text-gray-700 font-semibold">Choose Us ?</span>
          </p>

          <div className="flex flex-col md:flex-row mb-20 mt-4">
            <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-green-900 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
              <b className="font-semibold">Efficiency:</b>
              <p>
                Streamlined appointment scheduling that fits into your busy
                lifestyle.
              </p>
            </div>
            <div className="border px-10 md:px-15 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-green-900 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
              <b className="font-semibold">Convenience:</b>
              <p>
                Access to a network of trusted healthcare professionals in your
                area.
              </p>
            </div>
            <div className="border px-10 md:px-15 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-green-900 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
              <b className="font-semibold">Personalization:</b>
              <p>
                Tailored recommendations and reminders to help you stay on top
                of your health.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MoveUpOnRender>
  );
};

export default About;
