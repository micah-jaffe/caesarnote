import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { openModal } from '../../../actions/modal_actions';
import { selectShortcuts } from '../../../reducers/selectors';
import { selectNote } from '../../../actions/selection_actions';

const mapStateToProps = (state) => ({
  notebooks: Object.values(state.entities.notebooks),
  shortcuts: selectShortcuts(state.entities)
});

const mapDispatchToProps = (dispatch) => ({
  openPaywall: () => dispatch(openModal('paywall')),
  selectNote: (id) => dispatch(selectNote(id))
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(NavBar);