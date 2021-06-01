import axios from "axios";
const KEY = "AIzaSyB0z7UAHcQgSY6sw8SHBNkpbW5Ei9TMRXI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
