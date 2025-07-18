import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import { assets } from "../assets/assets_frontend/assets.js";
import RelatedDoctors from "../components/RelatedDoctors";
import axios from "axios";
import { toast } from "react-toastify";

const Appointment = () => {
	const { docId } = useParams();
	const { doctors, currencySymbol, backendUrl, token, getDoctosData } =
		useContext(AppContext);
	const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

	const [docInfo, setDocInfo] = useState(null);
	const [docSlots, setDocSlots] = useState([]);
	const [slotIndex, setSlotIndex] = useState(0);
	const [slotTime, setSlotTime] = useState("");

	const navigate = useNavigate();

	const fetchDocInfo = async () => {
		const docInfo = doctors.find((doc) => doc._id === docId);
		console.log("Found doctor info:", docInfo);
		setDocInfo(docInfo);
	};

	const getAvailableSlots = async () => {
		console.log("Getting available slots for doctor:", docInfo);
		setDocSlots([]);

		// getting current date
		let today = new Date();

		for (let i = 0; i < 7; i++) {
			// getting date with index
			let currentDate = new Date(today);
			currentDate.setDate(today.getDate() + i);

			// setting end time of the date with index
			let endTime = new Date();
			endTime.setDate(today.getDate() + i);
			endTime.setHours(21, 0, 0, 0);

			// setting hours
			if (today.getDate() === currentDate.getDate()) {
				currentDate.setHours(
					currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
				);
				currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
			} else {
				currentDate.setHours(10);
				currentDate.setMinutes(0);
			}

			let timeSlots = [];

			while (currentDate < endTime) {
				let formattedTime = currentDate.toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit",
				});

				let day = currentDate.getDate();
				let month = currentDate.getMonth() + 1;
				let year = currentDate.getFullYear();

				const slotDate = day + "_" + month + "_" + year;
				const slotTime = formattedTime;

				// Simplified availability check - if no slots_booked property exists, all slots are available
				let isSlotAvailable = true;
				if (docInfo?.slots_booked && docInfo.slots_booked[slotDate]) {
					isSlotAvailable = !docInfo.slots_booked[slotDate].includes(slotTime);
				}

				if (isSlotAvailable) {
					// Add slot to array
					timeSlots.push({
						datetime: new Date(currentDate),
						time: formattedTime,
					});
				}

				// Increment current time by 30 minutes
				currentDate.setMinutes(currentDate.getMinutes() + 30);
			}

			setDocSlots((prev) => [...prev, timeSlots]);
		}
	};

	const bookAppointment = async () => {
		if (!token) {
			toast.warning("Login to book appointment");
			return navigate("/login");
		}

		if (!slotTime) {
			toast.warning("Please select a time slot");
			return;
		}

		const date = docSlots[slotIndex][0].datetime;

		let day = date.getDate();
		let month = date.getMonth() + 1;
		let year = date.getFullYear();

		const slotDate = day + "_" + month + "_" + year;

		try {
			const { data } = await axios.post(
				backendUrl + "/api/user/book-appointment",
				{ docId, slotDate, slotTime },
				{ headers: { token } }
			);
			if (data.success) {
				toast.success(data.message);
				getDoctosData();
				navigate("/my-appointments");
			} else {
				toast.error(data.message);
			}
		} catch (error) {
			console.log(error);
			toast.error(error.message);
		}
	};

	useEffect(() => {
		console.log("Doctors array:", doctors);
		console.log("Doctor ID from params:", docId);
		if (doctors.length > 0) {
			fetchDocInfo();
		}
	}, [doctors, docId]);

	useEffect(() => {
		console.log("Doctor info changed:", docInfo);
		if (docInfo) {
			getAvailableSlots();
		}
	}, [docInfo]);

	useEffect(() => {
		console.log("Doc slots updated:", docSlots);
	}, [docSlots]);

	return docInfo ? (
		<div>
			{/* ---------- Doctor Details ----------- */}
			<div className="flex flex-col sm:flex-row gap-4">
				<div>
					<img
						className="bg-green-900 w-full sm:max-w-72 rounded-lg"
						src={docInfo.image}
						alt=""
					/>
				</div>

				<div className="flex-1 border border-[#ADADAD] rounded-lg p-8 py-7 bg-gray-50 mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
					{/* ----- Doc Info : name, degree, experience ----- */}
					<p className="flex items-center gap-2 text-3xl font-medium text-gray-700">
						{docInfo.name}
						<img className="w-5" src={assets.verified_icon} alt="" />
					</p>
					<div className="flex items-center gap-2 mt-1 text-gray-600">
						<p>
							{docInfo.degree} - {docInfo.speciality}
						</p>
						<button className="py-0.5 px-2 border text-xs rounded-full">
							{docInfo.experience}
						</button>
					</div>

					{/* ----- Doc About ----- */}
					<div>
						<p className="flex items-center gap-1 text-sm font-medium text-[#262626] mt-3">
							About <img className="w-3" src={assets.info_icon} alt="" />
						</p>
						<p className="text-sm text-gray-600 max-w-[700px] mt-1">
							{docInfo.about}
						</p>
					</div>

					<p className="text-gray-600 font-medium mt-4">
						Appointment fee:{" "}
						<span className="text-gray-800">
							{currencySymbol}
							{docInfo.fees}
						</span>
					</p>
				</div>
			</div>

			{/* Booking slots */}
			<div className="sm:ml-72 sm:pl-4 mt-8 font-medium text-[#565656]">
				<p>Booking slots</p>
				<div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
					{docSlots.length > 0 &&
						docSlots.map((item, index) => (
							<div
								onClick={() => setSlotIndex(index)}
								key={index}
								className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
									slotIndex === index
										? "bg-green-800 text-white"
										: "border border-[#DDDDDD]"
								}`}
							>
								<p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
								<p>{item[0] && item[0].datetime.getDate()}</p>
							</div>
						))}
				</div>
				<div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
					{docSlots.length > 0 &&
						docSlots[slotIndex] &&
						docSlots[slotIndex].map((item, index) => (
							<p
								onClick={() => setSlotTime(item.time)}
								key={index}
								className={`text-sm border-gray-40 hover:bg-green-800 hover:text-white hover: font-semibold flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
									item.time === slotTime
										? "bg-green-800 text-white border"
										: "text-[#949494] border border-[#B4B4B4]"
								}`}
							>
								{item.time.toLowerCase()}
							</p>
						))}
				</div>

				<button
					onClick={bookAppointment}
					className="bg-green-800 hover:font-bold text-white text-sm font-light px-20 py-3 rounded-full my-6"
				>
					Book an appointment
				</button>
			</div>

			{/* Listing Related Doctors */}
			<RelatedDoctors speciality={docInfo.speciality} docId={docId} />
		</div>
	) : (
		<div className="flex justify-center items-center h-64">
			<p className="text-gray-500">Loading doctor information...</p>
		</div>
	);
};

export default Appointment;
