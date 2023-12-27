import { Meta, StoryFn } from '@storybook/react';
import { ScrollProvider } from 'hooks';

import { VisualizationDetails } from './VisualizationDetails';

export default {
  title: 'Containers/VisualizationDetails',
  component: VisualizationDetails,
} as Meta<typeof VisualizationDetails>;

const Template: StoryFn<typeof VisualizationDetails> = function Template(args) {
  return (
    <ScrollProvider>
      <VisualizationDetails {...args} />
    </ScrollProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Adicionar produto',
  open: true,
};
