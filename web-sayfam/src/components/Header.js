import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

export default function Header() {
  const { postData } = useContext(DataContext);

  const { name } = postData;
  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
}
