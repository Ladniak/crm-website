'use client';

import { useRouter } from 'next/navigation';
import Button from '@/app/components/button';

export default function GoCompaniesButton() {
  const router = useRouter();
  return (
    <Button onClick={() => router.push('/companies')}>Go companies page</Button>
  );
}
