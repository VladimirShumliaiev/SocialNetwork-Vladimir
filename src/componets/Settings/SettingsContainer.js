import {connect} from "react-redux";
import Settings from "./Settings";
import {addSettingsCreator, oneSettingsSmsChangeCreator} from "../../Redux/Reducers/settingsReaducer";



const mapStateToProps = (state) => {
    return {
        settingsPage: state.settingsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onButtonClick: () => {
            dispatch(addSettingsCreator())
        },
        oneChangeSettings: (sms) => {
            dispatch(oneSettingsSmsChangeCreator(sms))
        }
    }
}

const SettingsContainer = connect(mapStateToProps,mapDispatchToProps)(Settings);

export default SettingsContainer;
