import React, { createContext, useState, useEffect, useContext } from "react";
import api from "../services/api";
import { engData } from "../data";
import { toast } from "react-toastify";

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
        toast.success("Veriler başarıyla yüklendi", {
          position: "bottom-right",
          autoClose: 2000,
        });
      })
      .catch((err) => {
        setError(err);
        toast.error("Veriler yüklenirken bir hata oluştu", {
          position: "bottom-right",
          autoClose: 2000,
        });
      });
  }, []);

  return (
    <DataContext.Provider value={{ postData, setPostData, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
