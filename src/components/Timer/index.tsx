import React, { FC, useCallback } from 'react';
import SignalCellular0BarIcon from '@material-ui/icons/SignalCellular0Bar';
import SignalCellular2BarIcon from '@material-ui/icons/SignalCellular2Bar';
import SignalCellular4BarIcon from '@material-ui/icons/SignalCellular4Bar';
import { green } from '@material-ui/core/colors';
import { ITimer } from '../../core/types/ITimer';
import { formatDate } from '../../utils';

export const Timer: FC<ITimer> = ({
  status,
  time
}) => {
  const Icon = useCallback(
    () => {
      switch (status) {
        case 0:
          return <SignalCellular4BarIcon style={{ color: green[500] }} />
        case 1:
          return <SignalCellular2BarIcon style={{ color: green[500] }} />
        case 2:
          return <SignalCellular0BarIcon />
      }
    }, [status]
  )

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {time && (
        <p style={{marginRight: '20px'}}>{formatDate(time)}</p>
      )}
      {status && Icon()}
    </div>
  )
};
