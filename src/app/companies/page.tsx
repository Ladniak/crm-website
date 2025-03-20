import React from 'react';
import Header from '../components/header';
import Toolbar from '../components/toolbar';
import SearchInput from '../components/search-input';
import AddCompanyButton from '../components/add-company-button';
import CompanyRow from '../components/company-row';
import CompanyTable from '../components/company-table';
import { Status } from '../components/status-label';

export default function Page() {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput></SearchInput>
      </Toolbar>
      <CompanyTable>
        <CompanyRow
          id={1}
          category="Products"
          company={'Costco'}
          status={Status.Pending}
          promotion={true}
          country={'USA'}
          joinedDate={'02.19.2023'}
        />
      </CompanyTable>
    </>
  );
}
