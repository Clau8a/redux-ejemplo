const BASEURL = "https://jsonplaceholder.typicode.com";

// el parámetro num indica cuantos post queremos obtener
export const apiGetPost = (num) => {

    const url = BASEURL + "/posts" ;

    return fetch(url)
        .then(response => response.json());
};

export const apiAddPost = (post) => {

    const url = BASEURL + "/posts/";

    const request = {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    };

    return fetch(url, request)
        .then(response => response.json());

};

export const apiUpdatePost = (id, post) => {

    const url = BASEURL + "/posts/" + id;

    const request = {
        method: 'PUT',
        body: JSON.stringify(post),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    };

    return fetch(url, request)
        .then(response => response.json())
};

export const apiDeletePost = (id) => {

    const url = BASEURL + "/posts/" + id;

    const request = { method: 'DELETE' };

    return fetch(url, request)
        .then(response => response.json())
};