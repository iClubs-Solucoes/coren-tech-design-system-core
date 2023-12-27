import { Meta, StoryFn } from '@storybook/react';

import {
  Pagination,
  Search,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderRow,
  TableRow,
} from './components';
import { Table } from './Table';

export default {
  title: 'Containers/Table',
  component: Table,
} as Meta<typeof Table>;

const Template: StoryFn<typeof Table> = function Template(args) {
  return (
    <>
      <div style={{ display: 'flex', gap: '1.6rem', marginBottom: '0.8rem' }}>
        <Search placeholder="Pesquise aqui" />
        <Pagination max={60} byPage={8} />
      </div>
      <Table {...args}>
        <TableHeader>
          <TableHeaderRow>
            <TableCell>Header</TableCell>
            <TableCell>Header</TableCell>
            <TableCell>Header</TableCell>
            <TableCell>Header</TableCell>
          </TableHeaderRow>
        </TableHeader>
        <TableBody>
          <TableRow index={0}>
            <TableCell>Coluna</TableCell>
            <TableCell>Coluna</TableCell>
            <TableCell>Coluna</TableCell>
            <TableCell>Coluna</TableCell>
          </TableRow>
          <TableRow index={1}>
            <TableCell>Coluna</TableCell>
            <TableCell>Coluna</TableCell>
            <TableCell>Coluna</TableCell>
            <TableCell>Coluna</TableCell>
          </TableRow>
          <TableRow index={2}>
            <TableCell>Coluna</TableCell>
            <TableCell>Coluna</TableCell>
            <TableCell>Coluna</TableCell>
            <TableCell>Coluna</TableCell>
          </TableRow>
          <TableRow index={3}>
            <TableCell>Coluna</TableCell>
            <TableCell>Coluna</TableCell>
            <TableCell>Coluna</TableCell>
            <TableCell>Coluna</TableCell>
          </TableRow>
          <TableRow index={4}>
            <TableCell>Coluna</TableCell>
            <TableCell>Coluna</TableCell>
            <TableCell>Coluna</TableCell>
            <TableCell>Coluna</TableCell>
          </TableRow>
          <TableRow index={5}>
            <TableCell>Coluna</TableCell>
            <TableCell>Coluna</TableCell>
            <TableCell>Coluna</TableCell>
            <TableCell>Coluna</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  scroll: false,
};
