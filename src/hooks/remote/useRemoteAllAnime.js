import {useQuery} from '@tanstack/react-query';
import {getFetcher} from '../../libs/axios';

const useRemoteAllAnime = ({paramsUrl}) => {
  const uri = paramsUrl;

  const {data, ...others} = useQuery(
    ['all-anime', paramsUrl],
    async () => await getFetcher(uri),
  );

  return {data, ...others};
};

export default useRemoteAllAnime;
