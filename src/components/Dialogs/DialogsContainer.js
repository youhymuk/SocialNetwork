import {connect} from "react-redux";
import {
    addMessage,
    updateNewMessageBody,
} from "../../redux/reducers/dialogReducer";
import Dialogs from "./Dialogs";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
    return {
        messages: state.dialogs.messages
    }
}

export default compose(
  connect(mapStateToProps, {addMessage, updateNewMessageBody}),
  withAuthRedirect
)(Dialogs)