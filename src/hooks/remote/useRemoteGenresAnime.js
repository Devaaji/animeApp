import {useQuery} from '@tanstack/react-query';
import {getFetcher} from '../../libs/axios';

const useRemoteGenresAnime = () => {
  const uri = '/genres/anime';

  const {data, ...others} = useQuery(
    ['genres'],
    async () => await getFetcher(uri),
  );

  return {data, ...others};
};

export default useRemoteGenresAnime;
