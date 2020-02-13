import { ProfileType, Photostype, PostsType } from './../../types/types';
import { usersAPI, profileAPI } from "../../api/api"
import { stopSubmit } from 'redux-form'

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

type ProfileListType = {
    id: number | null
    avatar: string | null
    status: string | null
}

let initialState = {
    profileList: [
        { id: 1, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLOSI1mCpxzU6FVIs0FsQ9Oa0m50HroB7rVJk1FGh8aZYNszY&s', status: 'Доброго дня!' }
    ] as Array<ProfileListType>,
    posts: [
        { id: 1, post: 'Hello world!', likeCount: 3 },
        { id: 2, post: 'Yo Yo', likeCount: 1 },
        { id: 3, post: 'it-kamasutra!', likeCount: 4 }    
    ] as Array<PostsType>,
    profile: null as ProfileType | null,
    status: ""
};

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
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
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        }
        default:
            return state;
    }
}

type AddPostActionType = {
    type: typeof ADD_POST
    newPostText: string
}
export const addPost = (newPostText: string): AddPostActionType => ({ type: ADD_POST, newPostText })

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile })

type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string): SetStatusActionType => ({ type: SET_STATUS, status })

type DeletePostActionType = {
    type: typeof DELETE_POST
    postId: number
}
export const deletePost = (postId: number): DeletePostActionType => ({ type: DELETE_POST, postId })

type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: Photostype
}
export const savePhotoSuccess = (photos: Photostype): SavePhotoSuccessActionType => ({ type: SAVE_PHOTO_SUCCESS, photos })

export const getUserProfile = (userId: number) => async (dispatch: any) => {
    const data = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(data));
}

export const getStatus = (userId: number) => async (dispatch: any) => {
    const data = await profileAPI.getStatus(userId);
    dispatch(setStatus(data));
}

export const updateStatus = (status: string) => async (dispatch: any) => {
    // try {
    const data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setStatus(status))
    }
    // } catch(error) {
    //    
    // }
}

export const savePhoto = (file: any) => async (dispatch: any) => {
    const data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos))
    }
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
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