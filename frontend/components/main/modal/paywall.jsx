import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';

class Paywall extends React.Component {
  render() {
    return (
    <div className="create-notebook-modal">
      <h2>Whoops!</h2>
        <p>This feature is only available in Caesarnote Premium&trade;. Please enter your email to receive an invitation to upgrade to Premium.</p>

      <form className="create-notebook-form" onSubmit={this.props.closeModal}>
        <label>
          Email
            <br />
          <input className="form-input"
            type="text"
            placeholder="Email"
          />
        </label>

        <div className="submittal-container">
          <span className="cancel-btn" onClick={this.props.closeModal}>Cancel</span>
          <button className="continue-btn" type="submit">Continue</button>
        </div>
      </form>
    </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(
  null,
  mapDispatchToProps
)(Paywall);