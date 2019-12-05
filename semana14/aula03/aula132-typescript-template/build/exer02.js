"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const comand = process.argv[4];
const id1 = process.argv[5];
const id2 = process.argv[6];
const id3 = process.argv[7];
const getPostComment = () => {
    const post1 = axios_1.default.get(`https://jsonplaceholder.typicode.com/comments?postId=${id1}`);
    Promise.all([post1]).then((values) => {
        values.forEach(data => console.log(data.data));
    });
};
const getPost = () => {
    const post1 = axios_1.default.get(`https://jsonplaceholder.typicode.com/posts/${id1}`);
    Promise.all([post1]).then((values) => {
        values.forEach(data => console.log(data.data));
    });
};
const getPosts = () => {
    const post1 = axios_1.default.get(`https://jsonplaceholder.typicode.com/posts/${id1}`);
    const post2 = axios_1.default.get(`https://jsonplaceholder.typicode.com/posts/${id2}`);
    const post3 = axios_1.default.get(`https://jsonplaceholder.typicode.com/posts/${id3}`);
    Promise.all([post1, post2, post3]).then((values) => {
        values.forEach(data => console.log(data.data));
    });
};
switch (comand) {
    case "getPost":
        getPost();
        break;
    case "getPosts":
        getPosts();
        break;
    case "getPostComments":
        getPostComment();
        break;
    default:
        break;
}
//# sourceMappingURL=exer02.js.map