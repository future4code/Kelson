import {Post} from "./post";
import {JSONFileManager} from "./JSONFileManager";

interface PostReader {
    readPosts(): Post[]
}

export class PostReaderImp implements PostReader{
    constructor(private json: JSONFileManager) {
    }
    readPosts(): Post[]{
        return this.json.getContent()
    }
}