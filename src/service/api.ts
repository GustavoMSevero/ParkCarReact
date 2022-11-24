import React from "react";
import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3333/',
    // timeout: 4000,
});

export default api;