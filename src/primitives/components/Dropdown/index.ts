import { Arrow } from './Arrow';
import { Field } from './Field';
import { Item } from './Item';
import { List } from './List';
import { Menu } from './Menu';
import { Root } from './Root';
import { Search } from './Search';
import * as TextComponents from './Texts';
import { Trigger } from './Trigger';

export const Texts = {
  ...TextComponents,
};

export const Dropdown = {
  Root,
  Arrow,
  Trigger,
  Menu,
  List,
  Item,
  Field,
  Search,
  Texts,
};
