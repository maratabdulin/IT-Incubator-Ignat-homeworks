import colors from './colors';
import {css} from '@emotion/react';

export const neon = css`
  color: ${colors.neonSecondary};
  text-shadow: 0 0 2px ${colors.neonSecondary},
  0 0 5px ${colors.neonSecondary},
  0 0 32px ${colors.neonMain},
  0 0 36px ${colors.neonMain},
  0 0 40px ${colors.neonMain};
  filter: drop-shadow(0 0 10px ${colors.neonMain}) contrast(3) brightness(2);
  &:after {
    background-color: ${colors.neonSecondary};
    box-shadow: 0 0 2px ${colors.neonSecondary},
    0 0 5px ${colors.neonSecondary},
    0 0 15px ${colors.neonMain},
    0 0 28px ${colors.neonMain},
    0 0 32px ${colors.neonMain},
    0 0 36px ${colors.neonMain},
    0 0 40px ${colors.neonMain};
    filter: drop-shadow(0 0 5px ${colors.neonMain}) contrast(3) brightness(2);
  }
`
