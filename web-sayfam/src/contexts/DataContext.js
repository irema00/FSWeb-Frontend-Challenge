import React, { createContext, useState, useEffect, useContext } from "react";
import api from "../services/api";
import { engData, trData } from "../data";
import { toast } from "react-toastify";
import { useLanguage } from "./LanguageContext";
import LoadingSpinner from "../utils/LoadingSpinner";

export const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const { language } = useLanguage();
  const [postData, setPostData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const dataToSend = language === "en" ? engData : trData;

    api
      .post("/posts", dataToSend)
      .then((res) => {
        console.log(res);
        setPostData(dataToSend);
        setLoading(false);
        toast.success("Veriler başarıyla yüklendi", {
          position: "bottom-right",
          autoClose: 2000,
        });
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        toast.error("Veriler yüklenirken bir hata oluştu", {
          position: "bottom-right",
          autoClose: 2000,
        });
      });
  }, [language]);

  return (
    <DataContext.Provider value={{ postData, setPostData, loading, error }}>
      {loading ? <LoadingSpinner /> : children}
    </DataContext.Provider>
  );
};
