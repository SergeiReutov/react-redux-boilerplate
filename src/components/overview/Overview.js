import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOverview, clearError, clearState } from 'actions/overview';
import { Loader, NoData, ErrorMessage } from 'components/common';
import {
  getName,
  getIsLoading,
  getError
} from 'selectors/overview';
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

  const handleErrorClear = () => dispatch(clearError());

  const renderNameSection = () => (
    <section className="nameSection">
      {name}
    </section>
  );

  const renderContent = () => name.length
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
          onClose={handleErrorClear}
        />
      )}
    </main>
  );
}
