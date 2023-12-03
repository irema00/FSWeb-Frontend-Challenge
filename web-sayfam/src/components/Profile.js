import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

const Profile = () => {
  const { postData, loading, error } = useContext(DataContext);
  const { basicInformation, informationTitles, profileImg, aboutMe } = postData;

  const informationTitles = [
    { key: "birthDate", title: "Doğum Tarihi" },
    { key: "city", title: "İkamet Şehri" },
    { key: "education", title: "Eğitim Durumu" },
    { key: "preferredRole", title: "Tercih Ettiği Rol" },
  ];
  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-box">
        <h3>Basic Information</h3>
        {basicInformation && informationTitles && (
          <div>
            {informationTitles.map(({ key, title }) => (
              <div key={key}>
                <strong>{title}</strong>: <p>{basicInformation[key]}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="profile-box">
        <img src={profileImg} />
      </div>
      <div className="profile-box">
        <h3>About Me</h3>
        {aboutMe &&
          aboutMe.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      </div>
    </div>
  );
};
export default Profile;
