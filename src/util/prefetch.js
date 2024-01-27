import axios from "axios";

const baseUrl = process.env.REACT_APP_BLOGS_URL;

const indexJsonVersion = process.env.REACT_APP_INDEX_JSON_VERSION;
const url = `${baseUrl}/blogs/index.json?v=${indexJsonVersion}`;

export const prefetchBlogs = () => {
    axios
        .get(url)
        .then(res => {
            const indexData = res.data;
            indexData.map(fileData => {
                const fileName = fileData.fileName;
                return axios.get(`${baseUrl}/blogs/${fileName}`)
                    .then(response => {
                        //prefetch complete
                    });
            });
        });
}

