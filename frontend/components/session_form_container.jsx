import {connect} from 'react-redux';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, {location}) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === "signup") ? (user) => dispatch(signup(user)) : (user) => dispatch(login(user));

  return{
    formType,
    processForm
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
