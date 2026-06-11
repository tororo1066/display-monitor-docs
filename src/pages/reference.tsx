import Layout from "@theme/Layout";
import DataList from "@site/src/components/DataListFeatures/DataList";
import {CacheContextProvider} from "@site/src/components/DataListFeatures/CacheSystem";

export default function DataListPage() {
    return (
        <Layout>
            <CacheContextProvider>
                <DataList />
            </CacheContextProvider>
        </Layout>
    )
}