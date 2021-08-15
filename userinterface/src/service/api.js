import axios from "axios";

const URL = "http://localhost:5000";

export const createPost = async(post) => {
    try {
        return await axios.post(`${URL}/create`, post)
    } catch (e) {
        console.log("Error in create post Api", e)
    };
};

export const getAllposts = async(params) => {
    try {

        let response = await axios.get(`${URL}/posts${params}`)
        return response;

    } catch (error) {
        console.log(error);

    };
};

export const getPost = async(id) => {
    // console.log(id);
    try {
        let response = await axios.get(`${URL}/post/${id}`);
        // console.log(id);
        // console.log(response);

        return response;

    } catch (error) {
        console.error(error.response.data); // NOTE - use "error.response.data` (not "error")
    }
}

export const updatePost = async(id, post) => {
    try {
        await axios.post(`${URL}/update/${id}`, post);
        // console.log(post)

    } catch (e) {
        console.log('error in updating Blog from api', e);

    }

}

export const deletePost = async(id) => {
    try {
        return await axios.delete(`${URL}/delete/${id}`);
    } catch (e) {
        console.log('error in deleting Blog from api', e);

    };
};
export const uploadFile = async(post) => {
    console.log(post);
    try {
        return await axios.post(`${URL}/file/upload`, post);
    } catch (e) {
        console.log('Error while calling uploadFile API ', e);
    };
};

export const newComment = async(data) => {
    try {
        return await axios.post(`${URL}/comment/new`, data);
    } catch (e) {
        console.log("error while commmenting", e);
    };
};


export const getComments = async(id) => {

    try {

        const response = await axios.get(`${URL}/comments/${id}`)
        return response.data;

    } catch (e) {
        console.log("error while geting commment", e);
    }
};




export const deleteComment = async(id) => {
    try {
        return await axios.delete(`${URL}/comment/delete/${id}`);
    } catch (error) {
        console.log('Error while calling deleteComments API ', error)
    }
};