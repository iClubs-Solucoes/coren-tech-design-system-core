import { Meta, StoryFn } from '@storybook/react';

import { SkeletonLoading } from './SkeletonLoading';

export default {
  title: 'Components/Loadings/SkeletonLoading',
  component: SkeletonLoading,
} as Meta<typeof SkeletonLoading>;

const Template: StoryFn<typeof SkeletonLoading> = function Template(args) {
  return <SkeletonLoading {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  children: <p>Render this</p>,
  loading: true,
  width: '45rem',
  height: '25rem',
};
