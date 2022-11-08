import {useQuery} from '@tanstack/react-query';
import {getFetcher} from '../../libs/axios';

const useRemoteTopAnime = () => {
  const uri = '/top/anime';

  const {data, ...others} = useQuery(
    ['top-anime'],
    async () => await getFetcher(uri),
  );

  return {data, ...others};
};

export default useRemoteTopAnime;
