import { usersAPI, profileAPI } from "../../api/api"
import { stopSubmit } from 'redux-form'

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

let initialState = {
    profileList: [
        { id: 1, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLOSI1mCpxzU6FVIs0FsQ9Oa0m50HroB7rVJk1FGh8aZYNszY&s', status: 'Доброго дня!' }
    ],
    posts: [
        { id: 1, post: 'Hello world!', likeCount: 3 },
        { id: 2, post: 'Yo Yo', likeCount: 1 },
        { id: 3, post: 'it-kamasutra!', likeCount: 4 }    ],
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
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        default:
            return state;
    }
}

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })

export const getUserProfile = (userId) => async (dispatch) => {
    const data = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(data));
}

export const getStatus = (userId) => async (dispatch) => {
    const data = await profileAPI.getStatus(userId);
    dispatch(setStatus(data));
}

export const updateStatus = (status) => async (dispatch) => {
    const data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (file) => async (dispatch) => {
    const data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos))
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id;
    const data = await profileAPI.saveProfile(profile)
    if (data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit("edit-profile", { _error: data.messages[0] }));
        return Promise.reject(data.messages[0]);
    }
}

export default profileReducer;