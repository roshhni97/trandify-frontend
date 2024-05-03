import useSWR from 'swr';
import API_CONSTANTS from '@/utils/apiConstants';
import { genericAPIFetcher } from '@/utils/helpers/swr.helper';
import { IWatcher } from '@/interfaces/IWatcher';

export function useWatcher() {
    const { data, error, isLoading } = useSWR(
        [API_CONSTANTS.USER, 'get'],
        genericAPIFetcher
    );

    return {
        watchersData: data?.data as IWatcher[],
        isWatchersDataLoading: isLoading as boolean,
        errorFetchingWatchersData: error,
    };
}
