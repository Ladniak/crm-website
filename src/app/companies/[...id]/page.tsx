import Header from '@/app/components/header';
import React from 'react';

export interface PageProps {
  params: { id: string[] };
}

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Companies</Header>
    </>
  );
}
