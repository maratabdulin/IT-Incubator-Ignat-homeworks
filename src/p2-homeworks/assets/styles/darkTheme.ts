import colors from './colors';
import {css} from '@emotion/react';

export const dark = css`
  color: ${colors.darkMain};
  text-shadow: 0 0 2px ${colors.darkMain},
  0 0 5px ${colors.darkMain},
  0 0 32px ${colors.darkSecondary},
  0 0 36px ${colors.darkSecondary},
  0 0 40px ${colors.darkSecondary};
  filter: drop-shadow(0 0 10px ${colors.darkSecondary}) contrast(3) brightness(2);
  &:after {
    background-color: ${colors.darkSecondary};
    box-shadow: 0 0 2px ${colors.darkSecondary},
    0 0 5px ${colors.darkSecondary},
    0 0 15px ${colors.darkMain},
    0 0 28px ${colors.darkMain},
    0 0 32px ${colors.darkMain},
    0 0 36px ${colors.darkMain},
    0 0 40px ${colors.darkMain};
    filter: drop-shadow(0 0 5px ${colors.darkMain}) contrast(3) brightness(2);
`
