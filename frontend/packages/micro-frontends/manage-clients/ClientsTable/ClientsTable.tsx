import React, { FC, ReactNode } from 'react';
import { Table } from 'ui';
import { InsuranceClient } from 'shared-types';
import { ITableHeader } from 'ui/components/Table/Table';
import { EmptyTable } from 'ui';
import { useQuery } from 'react-query';
import instance from 'utils/axios';

const headers: ITableHeader<InsuranceClient>[] = [
  { label: 'Firstname', accessor: 'lastname' },
  { label: 'Lastname', accessor: 'firstname' },
  { label: 'Email', accessor: 'email' },
  { label: 'Gender', accessor: 'gender' },
  { label: 'Birthday', accessor: 'birthday' },
];

interface ClientsTableProps {
  header: ReactNode;
}

export const ClientsTable: FC<ClientsTableProps> = ({ header }) => {
  const { data: res, isLoading } = useQuery('clients', () =>
    instance.get('insurance-clients')
  );
  const data = res?.data as unknown as InsuranceClient[];

  return (
    <div>
      <Table
        data={data}
        isLoading={isLoading}
        headers={headers}
        onRowClick={() => 1}
        emptyTableComponent={<EmptyTable title={'No data'} />}
        tableHeaderComponent={header}
      />
    </div>
  );
};