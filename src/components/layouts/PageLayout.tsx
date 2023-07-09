// import type { EndpointKey } from 'api/endpoints';
// import { FetchedFallbackData } from 'api/fetchFallbackData';
// import { Footer } from 'components/nav/Footer';
// import { Header } from 'components/nav/Header';
// import { Meta } from 'components/utilComponents/Meta';
// import { ScrollIndicatorContext } from 'components/nav/ScrollIndicatorContext';
// import { useShowScrollIndicator } from 'hooks/useShowScrollIndicator';
import Header from '../Header';

import { SWRConfig } from 'swr';
import { Container } from '@mui/material';
import { FetchedFallbackData } from '@/api/fetchFallbackData';
import { EndpointKey } from '@/api/endpoints';

type PageLayoutProps<Keys extends EndpointKey> = {
  children: React.ReactNode;
  fallback: FetchedFallbackData<Keys>;
};

export function PageLayout<Key extends EndpointKey>({ children, fallback }: PageLayoutProps<Key>) {
  return (
    <SWRConfig value={{ fallback }}>
      <Header  />
      <Container>
        <main>{children}</main>
      </Container>
    </SWRConfig>
  );
}
