import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

const Contact = () => {
  const { postData } = useContext(DataContext);
  const { contact } = postData;
  return (
    <div>
      <h3>{contact.title}</h3>
      <p>{contact.text}</p>
      <p> {contact.email}</p>
    </div>
  );
};

export default Contact;
