import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Loader, Message } from 'semantic-ui-react';
import Withdrawal from 'components/withdrawal/Withdrawal';
import { getCash, getIsLoading, getError } from 'selectors/withdrawal';
import { withdrawCash } from 'actions/withdrawal';

import { CashType } from 'types/withdrawal';

function WithdrawalView(props) {
  const { cash, isLoading, error } = props;

  const renderLoader = () => (
    <div className="loader">
      <Loader active inline='centered'>Loading...</Loader>
    </div>
  );

  const renderError = () => (
    <div className="error">
      <Message negative>
        <Message.Header>We are currently unable to process your request</Message.Header>
        <p>{error}</p>
      </Message>
    </div>
  );

  const renderContent = () => <Withdrawal cash={cash} onWithdraw={props.withdrawCash} />;

  return (
    <div className="withdrawal-container">
      {isLoading
        ? renderLoader()
        : renderContent()
      }
      {!!error && renderError()}
    </div>
  );
}

WithdrawalView.propTypes = {
  cash: CashType,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  withdrawCash: PropTypes.func.isRequired,
};

WithdrawalView.defaultProps = {
  cash: [],
  error: '',
};

const mapStateToProps = state => ({
  cash: getCash(state),
  isLoading: getIsLoading(state),
  error: getError(state),
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    withdrawCash,
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(WithdrawalView);
