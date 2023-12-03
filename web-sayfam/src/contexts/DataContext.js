import React, { createContext, useState, useEffect, useContext } from "react";
import api from "../services/api";
import { engData } from "../data";

export const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [postData, setPostData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .post("/posts", engData)
      .then((res) => {
        console.log(res);
        setPostData(engData);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return (
    <DataContext.Provider value={{ postData, setPostData, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
