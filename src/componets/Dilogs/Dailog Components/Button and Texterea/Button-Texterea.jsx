import React from "react";

const ButtonTexterea = (props) => {
    let newAddSms = React.createRef();

    let addSms = () => {
        let text = newAddSms.current.value;
        props.dispatch({type: 'ADD-SMS-DILOGS',text});

    }
    let newOnChange = () => {
        let smsDilogs = newAddSms.current.value;
        props.dispatch({type: 'ONE-CHENGE-MESSAGE',sms: smsDilogs});

    }

    return (
        <div>
            <textarea ref={newAddSms} onChange={newOnChange} value={props.state.dilogsPostSms}/>
            <button onClick={addSms}>add sms</button>
        </div>
    )
}

export default ButtonTexterea;