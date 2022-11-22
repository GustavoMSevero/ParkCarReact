import React from "react";
import axios from "axios";

const api = axios.create({
    baseURL: 'localhost:3000/api',
    timeout: 4000,
});

export default api;