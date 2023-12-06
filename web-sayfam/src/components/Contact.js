import React from "react";
import { useData } from "../contexts/DataContext";
import { useTheme } from "../contexts/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const { postData } = useData();
  const { contact } = postData;
  const { theme } = useTheme();
  if (!postData || !postData.contact) {
    return <div>Loading...</div>;
  }
  return (
    <div
      className={`flex justify-center py-20 ${
        theme === "dark"
          ? "bg-[#252128] text-[#8F88FF]"
          : "bg-[#F9F9F9] text-[#4731D3]"
      }`}
    >
      <div className="sm:w-1/3">
        <h3 className="text-[48px] font-bold">{contact.title}</h3>
        <p
          className={`text-[30px] px-12 leading-10 pt-5 ${
            theme === "dark" ? " text-[#FFFFFF]" : "text-[#120B39]"
          }`}
        >
          {contact.text}
        </p>
        <p className="pt-10 text-xl underline">{contact.email}</p>
        <div className="px-5 justify-center space-x-4 mt-4 ">
          <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
          <FontAwesomeIcon icon={faCodepen} className="text-2xl" />
          <FontAwesomeIcon icon={faAt} className="text-2xl" />
          <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
