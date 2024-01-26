import axios from "axios";

const baseUrl = process.env.REACT_APP_BLOGS_URL;

const indexJsonVersion = process.env.REACT_APP_INDEX_JSON_VERSION;
const url = `${baseUrl}/blogs/index.json?v=${indexJsonVersion}`;
axios
    .get(url).then(result => {
    // hydrated cache with blog index to accelerate loading
});