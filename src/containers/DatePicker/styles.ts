import 'react-datepicker/dist/react-datepicker.css';

import { colors, disappearanceCSS } from 'common/styles';
import { openAboveOrBelow } from 'common/utils';
import styled, { css } from 'dynamic-styled-components';

import { DatePickerContainerProps } from './types';

const modifier = {
  day: {
    common: css`
      width: 3.2rem;
      border-radius: 0.4rem;
      margin: 0;
    `,
    keyboardSelected: css`
      outline: none;

      > button {
        color: ${colors.neutral.gray4};
        background-color: ${colors.neutral.gray1};
      }
    `,
  },
  datePickerStyleFromInput: (inputElement: HTMLInputElement) => {
    const { openCSSObject, refElementRect: input } = openAboveOrBelow({
      referenceElement: inputElement,
      gap: 8,
    });

    const width = `${input.width}px`;

    const { top, bottom, left } = openCSSObject;

    const importantString = '!important;';

    const importantTop = `${top} ${importantString}`;
    const importantLeft = `${left} ${importantString}`;

    return css`
      width: ${width};

      top: ${importantTop};
      bottom: ${bottom};
      left: ${importantLeft};
    `;
  },
};

const globalConfigs = css`
  .react-datepicker-wrapper {
    ${disappearanceCSS}
  }

  .react-datepicker__triangle {
    ${disappearanceCSS}
  }
`;

const dayStylings = css`
  .react-datepicker__day {
    ${modifier.day.common}
  }

  .react-datepicker__day--keyboard-selected {
    ${modifier.day.keyboardSelected}
  }

  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
  }

  .react-datepicker__day-name {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.2rem;
    height: 3.2rem;
    font: 600 1.6rem Inter;
    text-align: center;
    color: ${colors.neutral.gray4};
    margin: 0;
  }
`;

const monthStylings = css`
  .react-datepicker__month-container {
    width: 100%;
    padding: 1.6rem;
  }

  .react-datepicker__month {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin: 0.4rem 0 0 0;
  }
`;

export const DatePickerContainer = styled.div<DatePickerContainerProps>`
  ${({ inputElement }) => css`
    width: 28rem;

    ${globalConfigs}

    ${dayStylings}

  ${monthStylings}

  .react-datepicker__input-container > input {
      ${disappearanceCSS}
    }

    .react-datepicker {
      width: 100%;
      border: none;
      border-radius: 0.8rem;
      background-color: ${colors.normal.white};
    }

    .react-datepicker__header {
      border-radius: 0.8rem 0.8rem 0 0;
      background-color: ${colors.normal.white};
      border-bottom: 0.1rem solid ${colors.neutral.gray1};
    }

    .react-datepicker__week {
      display: flex;
      justify-content: space-between;
    }

    .react-datepicker-time__caption {
      font: 600 1.6rem Inter;
      color: ${colors.neutral.gray5};
    }

    .react-datepicker-time__input-container .react-datepicker-time__input {
      margin-left: 0.8rem;
    }

    .react-datepicker__input-time-container
      .react-datepicker-time__input-container
      .react-datepicker-time__input
      input {
      width: 7.7rem;
    }

    .react-datepicker__input-time-container {
      margin: 0 1.6rem 1.6rem 1.6rem;
    }

    .react-datepicker__aria-live {
      display: none;
    }

    .react-datepicker-popper {
      transform: none !important;

      ${inputElement && modifier.datePickerStyleFromInput(inputElement)}
    }
  `}
`;

export const InputContainer = styled.div`
  margin-bottom: 0.8rem;
`;
