import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavBar from './nav_bar';
import { openModal } from '../../../actions/modal_actions';
import { selectShortcuts, selectAllNotebooks } from '../../../reducers/selectors';
import { selectNote } from '../../../actions/selection_actions';

const mapStateToProps = (state) => ({
  notebooks: selectAllNotebooks(state.entities),
  shortcuts: selectShortcuts(state.entities)
});

const mapDispatchToProps = (dispatch) => ({
  openPaywall: () => dispatch(openModal('paywall')),
  selectNote: (id) => dispatch(selectNote(id))
});

export default withRouter(connect(
  mapStateToProps, 
  mapDispatchToProps
)(NavBar));