import 'react-datepicker/dist/react-datepicker.css';

import { colors, disappearanceCSS } from 'common/styles';
import styled, { css } from 'dynamic-styled-components';

const modifier = {
  day: {
    common: css`
      width: 3.2rem;
      height: 3.2rem;
      font: 400 1.4rem Inter;
      border-radius: 0.4rem;
      margin: 0;
    `,
    default: css`
      background-color: ${colors.normal.white};

      > p {
        color: ${colors.neutral.gray4};
      }
    `,
    hover: css`
      background-color: ${colors.neutral.gray1};

      > p {
        color: ${colors.neutral.gray4};
      }
    `,
    selected: css`
      background-color: ${colors.neutral.gray2};
      outline: none;

      > p {
        color: ${colors.neutral.gray5};
      }
    `,
    disabled: css`
      background-color: ${colors.normal.white} !important;
      cursor: not-allowed;

      > p {
        color: ${colors.neutral.gray2} !important;
      }
    `,
  },
};

const globalConfigs = css`
  .react-datepicker-popper {
    position: static !important;
    transform: none !important;
  }

  .react-datepicker-wrapper {
    ${disappearanceCSS}
  }

  .react-datepicker__triangle {
    ${disappearanceCSS}
  }

  .react-datepicker__tab-loop * {
    color: ${colors.neutral.gray4};
  }
`;

const dayStylings = css`
  .react-datepicker__day {
    ${modifier.day.common}
    ${modifier.day.default}
  }

  .react-datepicker__day + .react-datepicker__day {
    margin-left: 0.4rem;
  }

  .react-datepicker__day--disabled {
    ${modifier.day.disabled}
  }

  .react-datepicker__day--selected {
    ${modifier.day.selected}
  }

  .react-datepicker__day:hover {
    ${modifier.day.hover}
  }

  .react-datepicker__day-name {
    width: 3.2rem;
    height: 3.2rem;
    font: 600 1.6rem Inter;
    text-align: center;
    vertical-align: middle;
    color: ${colors.neutral.gray4};
  }
`;

const monthStylings = css`
  .react-datepicker__month-container {
    padding: 1.6rem;
  }

  .react-datepicker__month {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin: 0.4rem 0 0 0;
  }
`;

export const DatePickerContainer = styled.div`
  ${globalConfigs}

  ${dayStylings}

  ${monthStylings}

  .react-datepicker__input-container > input {
    ${disappearanceCSS}
  }

  .react-datepicker {
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
    gap: 0.4rem;
  }
`;
