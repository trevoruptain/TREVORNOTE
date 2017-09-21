import { connect } from 'react-redux';

import { loginDummy } from '../../actions/session_actions';
import SessionButton from './session_button';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  loginDummy: () => dispatch(loginDummy())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionButton);
