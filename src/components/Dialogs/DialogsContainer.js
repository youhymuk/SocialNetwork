import {connect} from "react-redux";
import {
    addMessage,
    updateNewMessageBody,
} from "../../redux/reducers/dialogReducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
    return {
        messages: state.dialogs.messages
    }
}
const DialogsContainer = connect(mapStateToProps, {addMessage, updateNewMessageBody})(Dialogs)
export default DialogsContainer