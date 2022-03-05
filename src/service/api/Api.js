import axios from "axios";
import React from "react";

const Api = axios.create({
  baseURL: "https://dev-ecd-api-v1.herokuapp.com/api/v1",
});

export default Api;
