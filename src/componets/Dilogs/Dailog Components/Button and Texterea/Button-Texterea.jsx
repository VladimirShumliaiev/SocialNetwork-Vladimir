import React from "react";

const ButtonTexterea = (props) => {
    let newAddSms = React.createRef();

    let addSms = () => {
        let text = newAddSms.current.value;
        props.addSmsDilogs(text);
        props.onChengeMessanges('');
    }
    let newOnChange = () => {
        let text = newAddSms.current.value;
        props.onChengeMessanges(text);

    }

    return (
        <div>
            <textarea ref={newAddSms} onChange={newOnChange} value={props.state.dilogsPostSms}/>
            <button onClick={addSms}>add sms</button>
        </div>
    )
}

export default ButtonTexterea;