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
    <div>
      <div>
        <h3>Basic Information</h3>
        {basicInformation && (
          <div>
            {informationTitles.map(({ key, title }) => (
              <div key={key}>
                <strong>{title}</strong>: <p>{basicInformation[key]}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        <img src={imageURL} />
      </div>
      <div>
        <h3>About Me</h3>
        {aboutMe &&
          aboutMe.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      </div>
    </div>
  );
};
export default Profile;
