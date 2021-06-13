import React from "react";

const ButtonTexterea = () => {
    let newAddSms = React.createRef();

    let addSms = () => {
        let text = newAddSms.current.value;
        alert(text);

    }
    return (
        <div>
            <textarea ref={newAddSms}>add sms</textarea>
            <button onClick={addSms}>add sms</button>
        </div>
    )
}

export default ButtonTexterea;