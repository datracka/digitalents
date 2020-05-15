/** @jsx jsx */
import { useState } from 'react';
import { useDatepicker, START_DATE } from '@datepicker-react/hooks';
import { jsx } from '@emotion/core';
import Font from 'ui/Font';

import Month from './Month';
import NavButton from './NavButton';
import DatepickerContext from './datepickerContext';

// useless function
const useJobsQuery = () => {};

export default () => {
  const [state, setState] = useState({
    startDate: null,
    endDate: null,
    focusedInput: START_DATE,
  });
  const { query, setQuery } = useJobsQuery();
  function handleDateChange(data) {
    const { startDate, endDate } = data;
    setQuery({
      ...query,
      startDate: startDate && startDate.toLocaleString(),
      endDate: endDate && endDate.toLocaleString(),
    });
    if (!data.focusedInput) {
      setState({ ...data, focusedInput: START_DATE });
    } else {
      setState(data);
    }
  }

  const { startDate, endDate } = state;
  const {
    firstDayOfWeek,
    activeMonths,
    isDateSelected,
    isDateHovered,
    isFirstOrLastSelectedDate,
    isDateBlocked,
    isDateFocused,
    focusedDate,
    onDateHover,
    onDateSelect,
    onDateFocus,
    goToPreviousMonths,
    goToNextMonths,
  } = useDatepicker({
    startDate,
    endDate,
    focusedInput: state.focusedInput,
    onDatesChange: handleDateChange,
  });
  return (
    <DatepickerContext.Provider
      value={{
        focusedDate,
        isDateFocused,
        isDateSelected,
        isDateHovered,
        isDateBlocked,
        isFirstOrLastSelectedDate,
        onDateSelect,
        onDateFocus,
        onDateHover,
      }}
    >
      <Font>
        <div>
          <strong>From: </strong>
          {startDate && startDate.toLocaleString()}
        </div>
        <div>
          <strong>To: </strong>
          {endDate && endDate.toLocaleString()}
        </div>

        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            margin: '32px 0 0',
            gridTemplateColumns: `repeat(${activeMonths.length}, 300px)`,
            gridGap: '0 64px',
          }}
        >
          <Month
            key={`${activeMonths[0].year}-${activeMonths[0].month}`}
            year={activeMonths[0].year}
            month={activeMonths[0].month}
            firstDayOfWeek={firstDayOfWeek}
          />

          <NavButton onClick={goToPreviousMonths}>Previous</NavButton>
          <NavButton onClick={goToNextMonths}>Next</NavButton>
        </div>
      </Font>
    </DatepickerContext.Provider>
  );
};
