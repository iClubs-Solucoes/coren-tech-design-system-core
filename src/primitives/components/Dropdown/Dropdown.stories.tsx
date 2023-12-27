import { Meta, StoryFn } from '@storybook/react';
import { SearchIcon } from 'common/assets/icons';
import { ScrollProvider } from 'hooks';

import { Arrow } from './Arrow/Arrow';
import { Dropdown } from './Dropdown';
import { Field } from './Field/Field';
import { Item } from './Item/Item';
import { List } from './List/List';
import { Menu } from './Menu/Menu';
import { Search } from './Search/Search';
import { Trigger } from './Trigger/Trigger';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as Meta<typeof Dropdown>;

const Template: StoryFn<typeof Dropdown> = function Template(args) {
  return (
    <ScrollProvider>
      <>
        <Dropdown {...args}>
          <Trigger onClick={() => {}}>
            <Field fieldTheme="secondary">
              <SearchIcon />
              <p>Texto</p>
              <Arrow />
            </Field>
          </Trigger>

          <Menu>
            <Item hover>Iteawdadwadm</Item>
            <Item hover>Item</Item>
          </Menu>
        </Dropdown>
        <Dropdown {...args}>
          <Trigger onClick={() => {}}>
            <Field fieldTheme="secondary">
              <SearchIcon />
              <p>Texto</p>
              <Arrow />
            </Field>
          </Trigger>

          <Menu>
            <Item hover>Iteawdadwadm</Item>
            <Item hover>
              <Dropdown>
                <Trigger hover onClick={() => {}}>
                  <Field>
                    <p>Abra mais </p>
                    <Arrow direction="right" />
                  </Field>
                </Trigger>

                <Menu direction="right">
                  <Item hover>Iteawdadwadm</Item>
                  <Item hover>Item</Item>
                </Menu>
              </Dropdown>
            </Item>
          </Menu>
        </Dropdown>
      </>
    </ScrollProvider>
  );
};

const TemplateWithSearch: StoryFn<typeof Dropdown> = function Template(args) {
  return (
    <ScrollProvider>
      <>
        <Dropdown {...args}>
          <Trigger onClick={() => {}}>
            <Field fieldTheme="secondary">
              <SearchIcon />
              <p>Search data</p>
              <Arrow />
            </Field>
          </Trigger>

          <Menu
            style={{
              maxHeight: '10rem',
              overflowY: 'auto',
              width: '40rem',
            }}
          >
            <Search noopClose placeholder="Placeholder" />
            <List>
              <Item hover>Iteawdadwadm</Item>
              <Item hover>Item</Item>
              <Item hover>Iteawdadwadm</Item>
              <Item hover>Item</Item>
              <Item hover>Iteawdadwadm</Item>
              <Item hover>Item</Item>
              <Item hover>Iteawdadwadm</Item>
              <Item hover>Item</Item>
              <Item hover>Iteawdadwadm</Item>
              <Item hover>Item</Item>
              <Item hover>Iteawdadwadm</Item>
              <Item hover>Item</Item>
            </List>
          </Menu>
        </Dropdown>
      </>
    </ScrollProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  disabled: false,
};

export const SearchDropdown = TemplateWithSearch.bind({});
