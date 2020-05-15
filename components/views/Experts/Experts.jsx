import React from 'react';
import { useRouter } from 'next/router';
import Main from 'ui/Main';
import Pagination from 'ui/Pagination';
import { useQuery } from '@apollo/react-hooks';
import FETCH_ALL_PUBLIC_FREELANCERS from 'apollo/query/publicFreelancers.graphql';

import Header from './Header/Header';
import List from './List/List';

export default () => {
  const router = useRouter();
  const page = parseInt(router.query.page, 10) || 1;
  const { data } = useQuery(FETCH_ALL_PUBLIC_FREELANCERS, {
    variables: { page, per: 10 },
  });
  if (!data) return null;
  return (
    <Main>
      <Header />
      <List items={data.publicFreelancers.items} />
      <Pagination {...data.publicFreelancers} base="/experts" />
    </Main>
  );
};
