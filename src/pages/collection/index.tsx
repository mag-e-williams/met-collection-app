import { PageLayout } from "@/components/layouts/PageLayout";
import CollectionPage from "@/components/CollectionPage";
import { FetchedFallbackData } from "@/api/fetchFallbackData";
import { GetLayout } from "@/types/Page";

type PageProps = {
  fallback: FetchedFallbackData<'objects'>;
};

function Page() {
  return <PageLayout><CollectionPage /></PageLayout>;
}


export default Page;