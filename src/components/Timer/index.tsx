import React, { FC } from 'react';
import { ITimer } from '../../core/types/ITimer';

export const Timer: FC<ITimer> = ({
  status,
  time
}) => (
    <div>
      <p>{time}</p>
      <p>{status}</p>
    </div>
  );
