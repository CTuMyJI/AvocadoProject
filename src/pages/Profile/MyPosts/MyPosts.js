import React from 'react';
import Post from '../Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators"
import {Textarea} from "../../../components/common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const ProfileForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder='Введіть ваше повідомлення'
                    className="form-control mr-sm-2"
                    component={Textarea}
                    name={"newPostText"}
                    validate={[required, maxLength10]}
                ></Field>
            </div>
            <div>
                <button className="btn btn-success btn-lg">
                    Додати пост
                </button>
            </div>
        </form>
    )
}

const ProfileReduxForm = reduxForm({ form: 'ProfileAddNewPostForm' })(ProfileForm)

const MyPosts = React.memo(props => {
    let postsElements =
        [...props.posts]
            .reverse()
            .map(p => <Post key={p.id} post={p.post} likeCount={p.likeCount} />);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }
console.log("kek")
    return (
        <div>
            <h3>My posts</h3>
            <ProfileReduxForm onSubmit={onAddPost}/>
            <div>
                {postsElements}
            </div>
        </div>
    )
});

export default MyPosts;