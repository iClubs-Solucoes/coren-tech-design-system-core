import { Meta, StoryFn } from '@storybook/react';
import { colors } from 'common/styles';
import { Badge, SelectItem, TextField } from 'components';
import styled, { css } from 'styled-components';

import { TreeView } from './TreeView';

export default {
  title: 'Containers/Link Containers/TreeView',
  component: TreeView,
} as Meta<typeof TreeView>;

const FieldsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

const shortLinkCSS = css`
  width: 1.6rem;
  height: 2.8rem;
  margin-top: -2.7rem;
  margin-left: 1.6rem;
`;

const longLinkCSS = css`
  width: 1.6rem;
  height: 4.6rem;
  margin-top: -4.5rem;
  margin-left: 1.6rem;
`;

const CustomTreeView = styled(TreeView).attrs(() => ({
  links: { shortLinkCSS, longLinkCSS },
}))`
  gap: 1.6rem;

  > div {
    gap: 1.6rem;
  }

  *:before {
    border-color: ${colors.neutral.gray2};
  }
`;

const Template: StoryFn<typeof TreeView> = function Template(args) {
  return (
    <TreeView
      parent={<SelectItem label="Campo pai" placeholder="Selecione" />}
      {...args}
    >
      <FieldsContainer>
        <SelectItem label="Campo 1" placeholder="Selecione" />
        <SelectItem label="Campo 2" placeholder="Selecione" />
        <TextField label="Campo 3" placeholder="Digite" />
      </FieldsContainer>

      <FieldsContainer>
        <SelectItem label="Campo 4" placeholder="Selecione" />
        <SelectItem label="Campo 5" placeholder="Selecione" />
        <TextField label="Campo 6" placeholder="Digite" />
      </FieldsContainer>

      <FieldsContainer>
        <SelectItem label="Campo 7" placeholder="Selecione" />
        <SelectItem label="Campo 8" placeholder="Selecione" />
        <TextField label="Campo 9" placeholder="Digite" />
      </FieldsContainer>
    </TreeView>
  );
};

const CustomLinksTemplate: StoryFn<typeof TreeView> = function Template(args) {
  return (
    <CustomTreeView
      parent={<Badge badgeTheme="fourth">Pai</Badge>}
      links={{ shortLinkCSS, longLinkCSS }}
      {...args}
    >
      <FieldsContainer>
        <Badge badgeTheme="fourth">Filho 1</Badge>
        <Badge badgeTheme="fourth">Filho 2</Badge>
        <Badge badgeTheme="fourth">Filho 3</Badge>
      </FieldsContainer>

      <FieldsContainer>
        <Badge badgeTheme="fourth">Filho 4</Badge>
        <Badge badgeTheme="fourth">Filho 5</Badge>
        <Badge badgeTheme="fourth">Filho 6</Badge>
      </FieldsContainer>
    </CustomTreeView>
  );
};

export const Default = Template.bind({});
Default.args = {
  blackLinks: false,
};

export const CustomLinks = CustomLinksTemplate.bind({});
CustomLinks.args = {
  blackLinks: false,
};
