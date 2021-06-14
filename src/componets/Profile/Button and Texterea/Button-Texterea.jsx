import React from "react";

const ButtonTexterea = (props) => {
    let newAddSms = React.createRef();

    let addSms = () => {
        let text = newAddSms.current.value;
        props.addSmsDilogs(text);
        newAddSms.current.value = '';

    }
    return (
        <div>
            <textarea ref={newAddSms}></textarea>
            <button onClick={addSms}>add sms</button>
        </div>
    )
}

export default ButtonTexterea;