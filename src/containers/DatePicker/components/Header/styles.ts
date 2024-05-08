import { KeyboardArrowRightIcon } from 'common/assets/icons';
import { colors } from 'common/styles';
import { Select } from 'components';
import styled from 'dynamic-styled-components';
import { Button } from 'primitives';

export const HeaderContainer = styled.div``;

export const SelectYear = styled(Select)`
  margin-bottom: 0.8rem;

  & > div > div > div {
    width: 100%;
    padding: 0.4rem 0.8rem 0.4rem 1.6rem;
  }
`;

export const MonthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.8rem;
`;

const ChangeMonthButton = styled(Button).attrs(() => {
  return {
    buttonTheme: 'sixth',
    onlyIcon: true,
  };
})``;

export const PreviousMonth = styled(ChangeMonthButton)``;

export const NextMonth = styled(ChangeMonthButton)``;

const Arrow = styled(KeyboardArrowRightIcon)``;

export const NextArrow = styled(Arrow)``;

export const PreviousArrow = styled(Arrow)`
  transform: scaleX(-1);
`;

export const Month = styled.p`
  font: 600 1.6rem Inter;
  color: ${colors.neutral.black1};
`;
