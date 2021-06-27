import React from "react";
import {addSmsDilogsActionCreator, oneChangeMesageActionCreator} from "../../../../Redux/state";

const ButtonTexterea = (props) => {
    let newAddSms = React.createRef();

    let addSms = () => {
        // let text = newAddSms.current.value;
        props.dispatch(addSmsDilogsActionCreator());

    }
    let newOnChange = () => {
        let smsDilogs = newAddSms.current.value;
        props.dispatch(oneChangeMesageActionCreator(smsDilogs));

    }

    return (
        <div>
            <textarea ref={newAddSms} onChange={newOnChange} value={props.state.dilogsPostSms}/>
            <button onClick={addSms}>add sms</button>
        </div>
    )
}

export default ButtonTexterea;