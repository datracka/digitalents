import upperFirst from 'lodash/upperFirst';
import defaultBreakpoints from './breakpoints';

function createMediaQuery(min, max, key) {
  if (min === null && max === null) return null;
  let query = min ? `all and (min-width: ${min}px)` : 'all';
  if (max !== null) query = `${query} and (max-width: ${max}px)`;
  return { [key]: query };
}

export default (breakpoints = defaultBreakpoints) =>
  breakpoints.reduce((acc, breakpoint, index) => {
    const key = Object.keys(breakpoint).shift();
    const nextBreakPoint = breakpoints[index + 1];
    const upperKey = upperFirst(key);
    const min = breakpoint[key];
    const max = nextBreakPoint ? Object.values(nextBreakPoint).shift() - 1 : null;
    return {
      ...acc,
      ...createMediaQuery(min, max, key),
      ...createMediaQuery(null, max, `atLeast${upperKey}`),
      ...createMediaQuery(min, null, `atMost${upperKey}`),
    };
  }, {});
