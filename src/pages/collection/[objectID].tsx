import { PageLayout } from "@/components/layouts/PageLayout";
import CollectionObjectPage from "@/components/CollectionObjectPage";
import { FetchedFallbackData } from "@/api/fetchFallbackData";
import { GetLayout } from "@/types/Page";

type PageProps = {
  fallback?: FetchedFallbackData<'objects'>;
};

function Page() {
  return <PageLayout><CollectionObjectPage /></PageLayout>;
}


export default Page;

