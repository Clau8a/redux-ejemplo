import {
    apiGetPost,
    apiAddPost,
    apiDeletePost,
    apiUpdatePost
} from '../lib/api';

const initialState = {
    posts: []
};

const GET_POSTS = 'GET_POSTS';
const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';
const DELETE_POST = 'DELETE_POST';

//actions
const getPosts = (posts) => ({ type: GET_POSTS, payload: posts });
const addPost = (post) => ({ type: ADD_POST, payload: post });
const updatePost = (post) => ({ type: UPDATE_POST, payload: post });
const deletePost = (id) => ({ type: DELETE_POST, payload: id });


export const fetchGetPost = () => {
    return (dispatch) => {
        apiGetPost()
            .then(res => {
                dispatch(getPosts(res));
            })
            .catch(res => {
                console.log(res);
            })
    }
};

export const fetchAddPost = (post) => {
    return (dispatch) => {
        apiAddPost(post)
            .then(res => {
                dispatch(addPost(res));
            })
            .catch(res => {
                console.log(res)
            })
    }
};

export const fetchUpdatePost = (id, post) => {
    return (dispatch) => {
        apiUpdatePost(id, post)
            .then(res => {
                dispatch(updatePost(res));
            })
            .catch(res => {
                console.log(res);
            })
    }
};

export const fetchDeletePost = (id) => {
    return (dispatch) => {
        apiDeletePost(id)
            .then(res => {
                dispatch(deletePost(id));
            })
            .catch(res => {
                console.log(res);
            })
    }
};


export default (state = initialState, action) => {
    switch (action.type) {
        //en todos los casos regresamos un objeto nuevo en el cual incluimos todos las propiedades del objeto state con ...state
        case GET_POSTS:
            //cambiamos el valor de la propiedad post  
            return { ...state, posts: action.payload };

        case ADD_POST:
            console.log(ADD_POST, action);
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            };
        //concatenamos los posts exitentes con el nuevo post, en este caso se agregan los posts al inicio del arreglo 
        //si quisieramos ponerlo al final lo cambiamos de la siguiente manera 
        //posts: [...state.post.rows, action.payload]

        case UPDATE_POST:
            return {
                ...state,
                posts: [
                    ...state.posts.map(
                        (post) => post.id === action.payload.id ?
                            action.payload
                            : post
                    )
                ]
            }
        //Con el uso de la funcion map regresamos un nuevo arreglo con el cual reemplazamos el post con las propiedades 
        //no actualizadas por el post actualizado

        case DELETE_POST:

            return {
                ...state,
                posts: [...state.posts.filter(post => post.id !== action.payload)]
            }
        //Haciendo uso de la funcion filter, creamos un nuevo arreglo que excluye el post que eliminamos 

        default:
            return { ...state };
    }
}