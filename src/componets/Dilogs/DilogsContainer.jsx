import React from "react";
import Dilogs from "./Dailog Components/Dailogs/Dilogs";
import {addSmsDilogsActionCreator, oneChangeMessageActionCreator} from "../../Redux/Reducers/dilogsReducer";

const DilogsContainer = (props) => {

    let addSms = () => {
        props.dispatch(addSmsDilogsActionCreator());

    }
    let newOnChange = (smsDilogs) => {
        props.dispatch(oneChangeMessageActionCreator(smsDilogs));

    }

    return (
  <Dilogs arrDilogsSms={props.state.arrDilogsSms} addSms={addSms} newOnChange={newOnChange} arrDilogsUsers={props.state.arrDilogsUsers} dilogsPostSms={props.state.dilogsPostSms}/>
    )

}

export default DilogsContainer;