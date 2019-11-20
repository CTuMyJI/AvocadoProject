import profileReducer, { addPost, deletePost } from "./profileReducer";

let state = {
    posts: [
        { id: 1, post: 'pepeha', likeCount: 3 },
        { id: 2, post: 'pog', likeCount: 1 },
        { id: 3, post: 'lul', likeCount: 4 },
        { id: 4, post: 'da da ya', likeCount: 5 },
    ]
};

it('length of posts should be incremented', () => {
    // 1.test data
    let action = addPost('avocado');
    // 2.action
    let newState = profileReducer(state, action);

    // 3.expectation
    expect(newState.posts.length).toBe(5);
});

it('message of new post should be correct', () => {
    // 1.test data
    let action = addPost('avocado');
    // 2.action
    let newState = profileReducer(state, action);

    // 3.expectation
    expect(newState.posts[4].post).toBe('avocado');
});

it('after deleting length of posts shuld be decrement', () => {
    // 1.test data
    let action = deletePost(1);
    // 2.action
    let newState = profileReducer(state, action);

    // 3.expectation
    expect(newState.posts.length).toBe(3);
});

it('after deleting length of posts shuldnt be decrement if id is incorrect', () => {
    // 1.test data
    let action = deletePost(1000);
    // 2.action
    let newState = profileReducer(state, action);

    // 3.expectation
    expect(newState.posts.length).toBe(4);
});