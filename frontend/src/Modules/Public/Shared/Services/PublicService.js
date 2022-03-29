
import axios from "axios";
import { AUTH_TOKEN, BASE_URL_SERVER } from "../../../../Configs/server";

const API_ENDPOINT = {
    GET_POST_LIST: '/api/posts/public',
    GET_CATEGORIES_LIST : '/api/post-categories/public',
    GET_POST_BY_SLUG: '/api/posts/'
}

const configs = {
    headers: { Authorization: `Bearer ${AUTH_TOKEN}` }
}

class PublicService {

    getPostList = async () => {
        return await axios.get(BASE_URL_SERVER + API_ENDPOINT.GET_POST_LIST);
    }

    getCategoriesList = async () =>{
        return await axios.get(BASE_URL_SERVER + API_ENDPOINT.GET_CATEGORIES_LIST)
    }

    getPostBySlug = async (slug) => {
        return await axios.get(BASE_URL_SERVER + API_ENDPOINT.GET_POST_BY_SLUG + slug, configs);
    }
}

const publicService = new PublicService();
export default publicService;