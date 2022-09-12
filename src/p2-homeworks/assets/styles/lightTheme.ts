import colors from './colors';
import {css} from '@emotion/react';

export const light = css`
  color: ${colors.lightMain};
  text-shadow: 0 0 2px ${colors.lightMain},
  0 0 5px ${colors.lightMain},
  0 0 32px ${colors.lightSecondary},
  0 0 36px ${colors.lightSecondary},
  0 0 40px ${colors.lightSecondary};
  filter: drop-shadow(0 0 10px ${colors.lightSecondary}) contrast(3) brightness(2);
  &:after {
    background-color: ${colors.lightMain};
    box-shadow: 0 0 2px ${colors.lightMain},
    0 0 5px ${colors.lightMain},
    0 0 15px ${colors.lightSecondary},
    0 0 28px ${colors.lightSecondary};    
    filter: drop-shadow(0 0 5px ${colors.lightSecondary}) contrast(3) brightness(2);
`
