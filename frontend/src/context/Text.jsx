import { getText } from "./Agenthub";
import React, { useState, useEffect } from "react";

const MyComponent = ({ data: { question } }) => {
  //   console.log(question);
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const returnVal = await getText(question).toString();
    setData(returnVal);
    setIsLoading(false);
  };

  fetchData();

  return <p>{isLoading ? "loading" : data}</p>;
};

export default MyComponent;
