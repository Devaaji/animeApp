import {useInfiniteQuery} from '@tanstack/react-query';
import {getFetcher} from '../../libs/axios';

const useRemoteAllAnime = ({paramsUrl}) => {
  const uri = paramsUrl;

  const {data, ...others} = useInfiniteQuery(
    ['all-anime', paramsUrl],
    async ({pageParam = 1}) => await getFetcher(uri + `?page=${pageParam}`),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1;
        if (typeof lastPage !== 'undefined') {
          return lastPage.data?.length !== 0 ? nextPage : undefined;
        }
      },
    },
  );

  return {data, ...others};
};

export default useRemoteAllAnime;
