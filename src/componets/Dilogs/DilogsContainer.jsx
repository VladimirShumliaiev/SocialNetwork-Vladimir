import React from "react";
import Dilogs from "./Dailog Components/Dailogs/Dilogs";
import {addSmsDilogsActionCreator, oneChangeMessageActionCreator} from "../../Redux/Reducers/dilogsReducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        arrDilogs: state.arrDilogs
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addSms: () => {
            dispatch(addSmsDilogsActionCreator());
        },

        newOnChange: (smsDilogs) => {
            dispatch(oneChangeMessageActionCreator(smsDilogs));

        }
    }
}

const DilogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dilogs);

export default DilogsContainer;