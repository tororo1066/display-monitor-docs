import {Category} from "@site/src/components/DataListFeatures/DataList";
import React, {PropsWithChildren, useEffect} from "react";
import {Octokit} from "octokit";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {Buffer} from 'buffer';

export class Cache {
    private categories: Category[] = []

    get Categories(): Category[] {
        return this.categories;
    }

    set Categories(categories: Category[]) {
        this.categories = categories;
    }
}

export const CacheContext = React.createContext<
    [Cache, React.Dispatch<React.SetStateAction<Cache>>]
>([new Cache(), () => {}])

export const CacheContextProvider: React.FC<PropsWithChildren> = (props) => {
    const [cache, setCache] = React.useState<Cache>(new Cache());

    useEffect(() => {
        fetchStatCaches().then()
    }, [])

    return (
        <CacheContext.Provider value={[cache, setCache]}>
            {props.children}
        </CacheContext.Provider>
    );

    async function fetchStatCaches() {

        const octokit = new Octokit();

        const response: any = await octokit.rest.repos.getContent({
            owner: 'tororo1066',
            repo: 'DisplayMonitor',
            path: 'docs-data.json'
        })

        const data = JSON.parse(Buffer.from(response.data.content, 'base64').toString()) as Category[]

        if (data) {
            const newCache = new Cache()
            newCache.Categories = data
            setCache(newCache)
        }
    }
}