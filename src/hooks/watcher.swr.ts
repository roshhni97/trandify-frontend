'use client';

import API_CONSTANTS from '@/utils/apiConstants';
import { genericAPIFetcher } from '@/utils/helpers/swr.helper';
import { IWatcher } from '@/interfaces/IWatcher';
import useSWR from 'swr';

export function useWatcher() {
    const { data, error, isLoading } = useSWR(
        [API_CONSTANTS.GET_WATCHERS, 'get'],
        genericAPIFetcher
    );

    return {
        watchersData: data?.data as IWatcher[],
        isWatchersDataLoading: isLoading as boolean,
        errorFetchingWatchersData: error,
    };
}

export function useWatcherById(id: string) {
    const { data, error, isLoading } = useSWR(
        [API_CONSTANTS.GET_WATCHER(id), 'get'],
        genericAPIFetcher
    );

    return {
        watcherData: data?.data as IWatcher | undefined,
        isWatcherDataLoading: isLoading as boolean,
        errorFetchingWatcherData: error,
    };
}
