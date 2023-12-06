import React from "react";
import { useData } from "../contexts/DataContext";
import { useTheme } from "../contexts/ThemeContext";

const Profile = () => {
  const { postData } = useData();

  const { basicInformation, informationTitles, profileImg, aboutMe } = postData;
  const { theme } = useTheme();

  return (
    <div
      className={`flex flex-col flex-wrap sm:no-wrap sm:pl-[15%] sm:pr-[10%] sm:py-[5%] sm:pb-20 justify-evenly ${
        theme === "dark"
          ? "bg-[#171043] text-[#FFFFFF]"
          : "bg-[#4731D3] text-[#FFFFFF]"
      }`}
    >
      <div className="flex sm:flex-start justify-center sm:justify-start mt-12 sm:mt-0">
        <h2
          className={`font-bold text-[3rem] ${
            theme === "dark" ? "text-[#CBF281]" : "text-[#CBF281]"
          }`}
        >
          Profile
        </h2>
      </div>
      <div className="flex justify-center items-center sm:items-start flex-col sm:flex-row text-left flex-wrap sm:no-wrap mt-5">
        <div className="sm:w-1/3 sm:text-2xl">
          <h3 className="sm:text-4xl mt-12">Basic Information</h3>
          {basicInformation &&
            informationTitles &&
            informationTitles.map(({ key, title }) => (
              <div className="flex" key={key}>
                <p className="font-inter font-semibold text-xl leading-6  text-[#CBF281] mt-8 w-36">
                  {title}
                </p>
                <p className="font-inter font-normal text-base leading-6 text-[#FFFFFF] mt-8 w-36">
                  {basicInformation[key]}
                </p>
              </div>
            ))}
        </div>
        <div className="sm:w-1/3 mt-[50px] ">
          <img className="sm:w-[350px]" src={profileImg} alt="Profile" />
        </div>
        <div className="sm:w-1/3">
          <h3 className="sm:text-3xl px-2 sm:text-left sm:text-4xl mt-12 sm:mb-12 mb-5 sm:pl-10 text-center ">
            About Me
          </h3>
          {aboutMe &&
            aboutMe.map((paragraph, index) => (
              <p
                className="mb-12 px-5 sm:pl-10  sm:text-start sm:text-2xl sm:px-2 text-center"
                key={index}
              >
                {paragraph}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Profile;
