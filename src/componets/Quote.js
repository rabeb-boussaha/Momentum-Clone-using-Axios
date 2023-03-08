import axios from "axios";
import React, { useEffect, useState } from "react";
import { QuoteContainer, Text } from "./QuoteStyles";

const url = "https://goquotes-api.herokuapp.com/api/v1/random?count=1";

const Quote = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //console.log(data)

  if (!data) return null;

  return (
    <QuoteContainer>
      <Text>{data.quotes[0].text}</Text>
      <Text>{data.quotes[0].auther}</Text>
    </QuoteContainer>
  );
};

export default Quote;
