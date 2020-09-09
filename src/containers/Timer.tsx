import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../store/actions/timer';
import * as selectors from '../store/selectors/timer';
import { logout } from '../store/actions/user';
import { Timer } from '../components/Timer';

export const TimerContainer = () => {
  const dispatch = useDispatch();
  const time = useSelector(selectors.time);
  const status = useSelector(selectors.status);
  const handleLogout = useCallback(
    () => dispatch(logout()),
    [dispatch]
  )

  useEffect(() => {
    dispatch(actions.subscribeTimer());

    return () => {
      dispatch(actions.unsubscribeTimer());
    }
  }, [dispatch]);

  return (
    <div>
      <Timer time={time} status={status} />
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
}

