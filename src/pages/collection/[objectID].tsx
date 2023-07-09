import { PageLayout } from "@/components/layouts/PageLayout";
import CollectionObjectPage from "@/components/CollectionObjectPage";
import { FetchedFallbackData } from "@/api/fetchFallbackData";
import { GetLayout } from "@/types/Page";

type PageProps = {
  fallback: FetchedFallbackData<'objects'>;
};

function Page() {
  return <CollectionObjectPage />;
}

const getLayout: GetLayout<PageProps> = (page, pageProps) => (
  <PageLayout fallback={pageProps.fallback}>{page}</PageLayout>
);

Page.getLayout = getLayout;

export default Page;

