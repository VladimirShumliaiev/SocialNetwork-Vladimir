import {
    addUserProfileActionCreator,
    profileOnChangeActionCreator,
} from "../../../Redux/Reducers/profileReducer";
import MyPost from "../MyPsot/MyPost";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispachToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addUserProfileActionCreator())
        },
        newProfileOnChange: (smsText) => {
            dispatch(profileOnChangeActionCreator(smsText))
        }

    }
}


const MyPostContainer = connect(mapStateToProps,mapDispachToProps)(MyPost);

export default MyPostContainer;