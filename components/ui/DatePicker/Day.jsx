/** @jsx jsx */
import { useRef, useContext } from 'react';
import { useDay } from '@datepicker-react/hooks';
import { jsx } from '@emotion/core';
import Button from 'ui/Button';
import DatepickerContext from './datepickerContext';

const getColor = (isSelected, isSelectedStartOrEnd, isWithinHoverRange, isDisabled) => {
  return ({
    selectedFirstOrLastColor,
    normalColor,
    selectedColor,
    rangeHoverColor,
    disabledColor,
  }) => {
    if (isSelectedStartOrEnd) {
      return selectedFirstOrLastColor;
    }
    if (isSelected) {
      return selectedColor;
    }
    if (isWithinHoverRange) {
      return rangeHoverColor;
    }
    if (isDisabled) {
      return disabledColor;
    }
    return normalColor;
  };
};

export default ({ dayLabel, date }) => {
  const dayRef = useRef(null);
  const {
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateSelect,
    onDateFocus,
    onDateHover,
  } = useContext(DatepickerContext);
  const {
    isSelected,
    isSelectedStartOrEnd,
    isWithinHoverRange,
    disabledDate,
    onClick,
    onKeyDown,
    onMouseEnter,
    tabIndex,
  } = useDay({
    date,
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateFocus,
    onDateSelect,
    onDateHover,
    dayRef,
  });

  if (!dayLabel) {
    return <div />;
  }

  const getColorFn = getColor(isSelected, isSelectedStartOrEnd, isWithinHoverRange, disabledDate);

  return (
    <Button
      onClick={onClick}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      tabIndex={tabIndex}
      type="button"
      ref={dayRef}
      css={{
        padding: '8px',
        border: 0,
        borderRadius: 0,
        color: getColorFn({
          selectedFirstOrLastColor: 'white',
          normalColor: '#001217',
          selectedColor: 'white',
          rangeHoverColor: 'white',
          disabledColor: '#808285',
        }),
        background: getColorFn({
          selectedFirstOrLastColor: '#282359',
          normalColor: 'transparent',
          selectedColor: '#34C8B6',
          rangeHoverColor: '#34C8B6',
          disabledColor: 'transparent',
        }),
      }}
    >
      {dayLabel}
    </Button>
  );
};
