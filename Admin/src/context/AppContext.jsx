import { useState, useEffect } from "react";
import { createContext } from "react";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currency = "$";
  const [isLoading, setIsLoading] = useState(false);
  console.log("isLoading:", isLoading);
  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);

    const age = today.getFullYear() - birthDate.getFullYear();
    return age;
  };
  const months = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  useEffect(() => {
    // request intercepter
    axios.interceptors.request.use(
      (config) => {
        setIsLoading(true);
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    //response intercepter
    axios.interceptors.response.use(
      (config) => {
        setIsLoading(false);
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }, []);
  const slotDateFormat = (slotDate) => {
    const dataArray = slotDate.split("_");
    return (
      dataArray[0] + " " + months[Number(dataArray[1])] + " " + dataArray[2]
    );
  };

  const value = {
    calculateAge,
    slotDateFormat,
    currency,
    isLoading,
    setIsLoading,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
