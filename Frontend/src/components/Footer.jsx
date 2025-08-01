import { assets } from "../assets/assets";
const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* --------------left section-------------- */}
        <div>
          <img className="mb-5 w-40" src={assets.logo2} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6 font-semibold">
            Medico: Bridging the gap between doctors and patients with
            seamless appointment management, secure prescriptions, and
            personalized healthcare solutions. Your health, our priority.
          </p>
        </div>

        {/* --------------center section-------------- */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* --------------right section-------------- */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li> Tel: (415) 555‑0132 </li>
            <li>hardikdhameeja2105@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        {/* -----------copy right text--------- */}
        <hr />
        <p className="py-5 text-sm text-center font-semibold">
          Copyright © 2025 - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
