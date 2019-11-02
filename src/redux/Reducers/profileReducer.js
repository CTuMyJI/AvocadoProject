const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    profileList: [
        { id: 1, avatar: 'https://ih0.redbubble.net/image.792313560.3852/mp,840x830,matte,f8f8f8,t-pad,1000x1000,f8f8f8.u2.jpg', status: 'Доброго дня!' }
    ],
    post: [
        {id: 1, post: 'pepeha'},
        {id: 2, post: 'pog'},
        {id: 3, post: 'lul'},
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                post: state.newPostText                
            };
            return {
                ...state,
                profileList: [...state.profileList, newPost],
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

export default profileReducer