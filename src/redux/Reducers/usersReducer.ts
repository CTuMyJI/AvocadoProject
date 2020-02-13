import { UserType } from './../../types/types';
import { usersAPI } from "../../api/api";
import { updateObjectInArray } from "../../utils/objectHelpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
const TOGGLE_IS_FOLLOWINGPROGRESS = 'TOGGLE_IS_FOLLOWINGPROGRESS';

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: true,
    followingInProgress: [] as Array<number> //array of users ids
};

type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }
        case TOGGLE_IS_LOADING: {
            return { ...state, isLoading: action.isLoading }
        }
        case TOGGLE_IS_FOLLOWINGPROGRESS: {
            return {
                ...state,
                followingInProgress: action.isLoading
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

type FollowSuccessActionType = {
    type: typeof FOLLOW
    userId: number
}

export const followSuccess = (userId: number): FollowSuccessActionType => ({ type: FOLLOW, userId })

type UnfollowSuccessActionType = {
    type: typeof UNFOLLOW
    userId: number
}

export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => ({ type: UNFOLLOW, userId })

type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
}

export const setUsers = (users: Array<UserType>): SetUsersActionType => ({ type: SET_USERS, users })

type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}

export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({ type: SET_CURRENT_PAGE, currentPage })

type SetUsersTotalCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    count: number
}

export const setUsersTotalCount = (count: number): SetUsersTotalCountActionType => ({ type: SET_TOTAL_USERS_COUNT, count })

type ToggleIsLoadingActionType = {
    type: typeof TOGGLE_IS_LOADING
    isLoading: boolean
}

export const toggleIsLoading = (isLoading: boolean): ToggleIsLoadingActionType => ({ type: TOGGLE_IS_LOADING, isLoading })

type ToggleFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWINGPROGRESS
    isLoading: boolean
    userId: number
}

export const toggleFollowingProgress = (isLoading: boolean, userId: number): ToggleFollowingProgressActionType => ({ 
    type: TOGGLE_IS_FOLLOWINGPROGRESS, isLoading, userId })

export const requestUsers = (page: number, pageSize: number) => {
    return async (dispatch: any) => {
        dispatch(toggleIsLoading(true));
        dispatch(setCurrentPage(page));

        let data = await usersAPI.getUsers(page, pageSize)
        dispatch(toggleIsLoading(false));
        dispatch(setUsers(data.items));
        dispatch(setUsersTotalCount(data.totalCount));
    };
}

const followUnfollowFlow = async (dispatch: any, id: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingProgress(true, id));
    let data = await apiMethod(id)
    
    if (data.resultCode === 0) {
        dispatch(actionCreator(id));
    }
    dispatch(toggleFollowingProgress(false, id));
}

export const follow = (id: number) => {
    return async (dispatch: any) => {
        followUnfollowFlow(dispatch, id, usersAPI.follow.bind(usersAPI), followSuccess);
    };
}

export const unfollow = (id: number) => {
    return async (dispatch: any) => {
        followUnfollowFlow(dispatch, id, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
    };
}

export default usersReducer;