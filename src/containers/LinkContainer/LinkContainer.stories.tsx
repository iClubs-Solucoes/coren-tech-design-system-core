import { Meta, StoryFn } from '@storybook/react';
import { Badge } from 'components';

import { LinkContainer } from './LinkContainer';

export default {
  title: 'Containers/Link Containers/LinkContainer',
  component: LinkContainer,
} as Meta<typeof LinkContainer>;

const Template: StoryFn<typeof LinkContainer> = function Template() {
  return (
    <LinkContainer>
      <Badge>Informação 1</Badge>
      <Badge>Informação 2</Badge>
      <Badge>Informação 3</Badge>
    </LinkContainer>
  );
};

export const Default = Template.bind({});
Default.args = {};
