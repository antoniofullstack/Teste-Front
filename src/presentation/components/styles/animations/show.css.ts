import { keyframes } from '@vanilla-extract/css';

export const showAnimation = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translate(-50%, -48%) scale(0.96)',
  },
  '100%': {
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1)',
  },
});
