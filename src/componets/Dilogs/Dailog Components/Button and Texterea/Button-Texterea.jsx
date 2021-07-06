import React from "react";
import {addSmsDilogsActionCreator, oneChangeMesageActionCreator} from "../../../../Redux/Reducers/dilogsReducer";

const ButtonTexterea = (props) => {
    let newAddSms = props.state.dilogsPostSms;

    let addSms = () => {
        props.dispatch(addSmsDilogsActionCreator());

    }
    let newOnChange = (e) => {
        let smsDilogs = e.target.value;
        props.dispatch(oneChangeMesageActionCreator(smsDilogs));

    }

    return (
        <div>
            <textarea onChange={newOnChange} value={newAddSms} placeholder={'Text...'}/>
            <button onClick={addSms}>add sms</button>
        </div>
    )
}

export default ButtonTexterea;