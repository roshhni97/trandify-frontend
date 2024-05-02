import useSWR from 'swr';
import API_CONSTANTS from '@/utils/apiConstants';
import { genericAPIFetcher } from '@/utils/helpers/swr.helper';
import { IUser } from '@/interfaces/IUser';

export function useUser() {
    const { data, error, isLoading } = useSWR(
        [API_CONSTANTS.USER, 'get'],
        genericAPIFetcher
    );

    return {
        userData: data?.data as IUser,
        isUserDataLoading: isLoading as boolean,
        errorFetchingUserData: error,
    };
}
