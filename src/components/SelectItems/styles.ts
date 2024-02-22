import { colors, font } from 'common/styles';
import styled from 'dynamic-styled-components';
import { Button, Dropdown } from 'primitives';

export const Container = styled.div``;

export const ItemSelect = styled(Dropdown.Item)`
  padding-left: 1.6rem;
  cursor: pointer;
`;

export const Label = styled.p`
  font-size: ${font.sizes.small};
  color: ${colors.neutral.gray4};
  height: 1.6rem;
`;

export const Value = styled.p`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: ${font.sizes.large};
  color: ${colors.neutral.gray5};
`;

export const Placeholder = styled.p`
  font-size: ${font.sizes.large};
  color: ${colors.neutral.gray3};
`;

export const FieldSelect = styled(Dropdown.Field)``;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ButtonSelectItems = styled(Button).attrs({
  buttonTheme: 'fifth',
})`
  width: 7.4rem;
  height: 2.4rem;
  background-color: ${colors.neutral.gray2};
  color: ${colors.neutral.gray5};
  margin-left: auto;
`;
