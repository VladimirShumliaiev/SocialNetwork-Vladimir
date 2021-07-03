import React from "react";
import {addSmsDilogsActionCreator, oneChangeMesageActionCreator} from "../../../../Redux/Reducers/dilogsReducer";

const ButtonTexterea = (props) => {
    let newAddSms = React.createRef();

    let addSms = () => {
        props.dispatch(addSmsDilogsActionCreator());

    }
    let newOnChange = () => {
        let smsDilogs = newAddSms.current.value;
        props.dispatch(oneChangeMesageActionCreator(smsDilogs));

    }

    return (
        <div>
            <textarea ref={newAddSms} onChange={newOnChange} value={props.state.dilogsPostSms} placeholder={'Text...'}/>
            <button onClick={addSms}>add sms</button>
        </div>
    )
}

export default ButtonTexterea;