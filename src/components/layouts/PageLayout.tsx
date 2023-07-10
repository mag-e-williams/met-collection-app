import { SWRConfig } from 'swr';
import { Container } from '@mui/material';
import { FetchedFallbackData } from '@/api/fetchFallbackData';
import { EndpointKey } from '@/api/endpoints';
import Header from '@/components/Header';
import { Meta } from '../utilComponents/Meta';

type PageLayoutProps<Keys extends EndpointKey> = {
  children: React.ReactNode;
  fallback?: FetchedFallbackData<Keys>;
};

export function PageLayout<Key extends EndpointKey>({ children, fallback }: PageLayoutProps<Key>) {
  return (
    <SWRConfig>
      <Meta />
      <Header  />
      <main>{children}</main>
    </SWRConfig>
  );
}
