import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
 
const Paywall = ({ closeModal }) => {
  return (
    <div className="modal-interior">
      <h2>Whoops!</h2>
      <p>This feature is only available in Caesarnote Premium&trade;. Please enter your email to receive an invitation to upgrade to Premium.</p>

      <form onSubmit={closeModal}>
        <label>
          Email
            <br />
          <input className="form-input"
            type="text"
            placeholder="Email"
          />
        </label>

        <div className="submittal-container">
          <span className="cancel-btn" onClick={closeModal}>Cancel</span>
          <button className="continue-btn" type="submit">Continue</button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(
  null,
  mapDispatchToProps
)(Paywall);