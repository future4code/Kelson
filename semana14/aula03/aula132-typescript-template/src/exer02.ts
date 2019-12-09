import axios from "axios"

const comand: string = process.argv[4]
const id1: string = process.argv[5]
const id2: string = process.argv[6]
const id3: string = process.argv[7]


// const post1: Promise<any> = axios.get(`https://jsonplaceholder.typicode.com/posts/${id1}`)

// const post2: Promise<any> = axios.get(`https://jsonplaceholder.typicode.com/posts/${id2}`)

// const post3: Promise<any> = axios.get(`https://jsonplaceholder.typicode.com/posts/${id3}`)

// Promise.all([post1,post2,post3]).then((values)=> {
//     values.forEach(data => console.log(data.data.title))
// })

const getPostComment = ():void => {

    const post1: Promise<any> = axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id1}`)

    Promise.all([post1]).then((values) => {
        values.forEach(data => console.log(data.data))
    })
}

const getPost = ():void =>{
    const post1: Promise<any> = axios.get(`https://jsonplaceholder.typicode.com/posts/${id1}`)


    Promise.all([post1]).then((values) => {
        values.forEach(data => console.log(data.data))
    })
}

const getPosts = ():void =>{
    const post1: Promise<any> = axios.get(`https://jsonplaceholder.typicode.com/posts/${id1}`)

    const post2: Promise<any> = axios.get(`https://jsonplaceholder.typicode.com/posts/${id2}`)

    const post3: Promise<any> = axios.get(`https://jsonplaceholder.typicode.com/posts/${id3}`)

    Promise.all([post1, post2, post3]).then((values) => {
        values.forEach(data => console.log(data.data))
    })
}

switch (comand) {
    case "getPost":
        getPost()
        break;
    case "getPosts":
        getPosts()
        break    
    case "getPostComments":
        getPostComment()
        break
    default:
        break;
}