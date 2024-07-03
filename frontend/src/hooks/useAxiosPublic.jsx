import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://eventssunflower-2.onrender.com",
  // baseURL: "http://localhost:8080",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
