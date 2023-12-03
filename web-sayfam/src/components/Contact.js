import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const { postData } = useContext(DataContext);
  const { contact } = postData;
  return (
    <div>
      <h3>{contact.title}</h3>
      <p>{contact.text}</p>
      <p> {contact.email}</p>
      <div className="socials">
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faCodepen} />
        <FontAwesomeIcon icon={faAt} />
        <FontAwesomeIcon icon={faInstagram} />
    </div>
  );
};

export default Contact;
