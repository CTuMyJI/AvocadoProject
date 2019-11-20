import { usersAPI, profileAPI } from "../../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    profileList: [
        { id: 1, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLOSI1mCpxzU6FVIs0FsQ9Oa0m50HroB7rVJk1FGh8aZYNszY&s', status: 'Доброго дня!' }
    ],
    posts: [
        { id: 1, post: 'pepeha', likeCount: 3 },
        { id: 2, post: 'pog', likeCount: 1 },
        { id: 3, post: 'lul', likeCount: 4 },
        { id: 4, post: 'da da ya', likeCount: 5 },
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                post: action.newPostText,
                likeCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            }
        }
        default:
            return state;
    }
}

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(data => {
        dispatch(setUserProfile(data));
    });
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(data => {
        dispatch(setStatus(data));
    })
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}

export default profileReducer;