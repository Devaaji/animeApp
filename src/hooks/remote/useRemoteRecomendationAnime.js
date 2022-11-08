import {useQuery} from '@tanstack/react-query';
import {getFetcher} from '../../libs/axios';

const useRemoteRecomendationAnime = () => {
  const uri = '/seasons/now';

  const {data, ...others} = useQuery(['recomended-anime'], () =>
    getFetcher(uri),
  );

  return {data, ...others};
};

export default useRemoteRecomendationAnime;
