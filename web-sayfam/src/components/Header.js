import React from "react";
import { useData } from "../contexts/DataContext";

export default function Header() {
  const { postData } = useData();

  const { name } = postData;
  return (
    <div className="header">
      <h3 className="text-[#CBF281] text-[2rem] mt-8 ">{name}</h3>
    </div>
  );
}
