import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOverview, clearError, clearState } from 'actions/overview';
import { Loader, NoData, ErrorMessage } from 'components/common';
import {
  getName,
  getIsLoading,
  getError
} from 'selectors/overview';
import { isNotEmpty } from 'utils/common';
import './styles.scss';

export default function Overview() {
  const dispatch = useDispatch();
  
  const name = useSelector(getName);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchOverview());
    return () => dispatch(clearState());
  }, [dispatch]);

  const renderNameSection = () => (
    <section className="nameSection">
      {name}
    </section>
  );

  const renderContent = () => isNotEmpty(name)
    ? renderNameSection()
    : <NoData />;

  return (
    <main className="overview">
      {isLoading
        ? <Loader />
        : renderContent()
      }
      {error !== null && (
        <ErrorMessage
          error={error}
          onClose={clearError}
        />
      )}
    </main>
  );
}
