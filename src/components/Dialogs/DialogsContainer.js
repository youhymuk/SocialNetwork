import {connect} from "react-redux";
import {addMessageAC, updateNewMessageBodyAC} from "../../redux/reducers/dialogReducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
    return {
        messages: state.dialogs.messages
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyAC(body))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer