import React from "react";
import axios from "axios";

const apiCep = axios.create({
    baseURL: 'https://viacep.com.br/ws/',
    // timeout: 4000,
});

export default apiCep;