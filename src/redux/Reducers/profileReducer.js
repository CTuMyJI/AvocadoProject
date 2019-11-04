import { usersAPI } from "../../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    profileList: [
        { id: 1, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLOSI1mCpxzU6FVIs0FsQ9Oa0m50HroB7rVJk1FGh8aZYNszY&s', status: 'Доброго дня!' }
    ],
    posts: [
        {id: 1, post: 'pepeha', likeCount: 3},
        {id: 2, post: 'pog', likeCount: 1},
        {id: 3, post: 'lul', likeCount: 4},
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                post: state.newPostText,
                likeCount: 4                
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const addPost = () => ({ type: ADD_POST })
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const getUserProfile = (userId) => (dispatch) => {
        usersAPI.getProfile(userId).then(data => {
                dispatch(setUserProfile(data));
            });
}

export default profileReducer