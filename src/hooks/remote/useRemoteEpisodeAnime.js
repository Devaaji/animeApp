import {useQuery} from '@tanstack/react-query';
import {getFetcher} from '../../libs/axios';

const useRemoteEpisodeAnime = ({id}) => {
  const uri = `/anime/${id}/episodes`;

  const {data, ...others} = useQuery(['eps-anime', id], () => getFetcher(uri));

  return {data, ...others};
};

export default useRemoteEpisodeAnime;
