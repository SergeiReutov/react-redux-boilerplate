import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

import { CashType } from 'types/withdrawal';

export default function Withdrawal(props) {
  const { cash, onWithdraw } = props;

  const handleWithdrawCash = () => onWithdraw(10);

  return (
    <div className="withdrawal-component">
      Cash: {cash}
      <Button onClick={handleWithdrawCash}>
        Push me
      </Button>
    </div>
  );
}

Withdrawal.propTypes = {
  cash: CashType,
  onWithdraw: PropTypes.func.isRequired,
};

Withdrawal.defaultProps = {
  cash: [],
};
