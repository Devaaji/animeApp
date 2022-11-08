import {useQuery} from '@tanstack/react-query';
import {getFetcher} from '../../libs/axios';

const useRemoteSelectedGenreAnime = ({genres}) => {
  const uri = `anime?genres=${genres}&page=2`;

  const {data, ...others} = useQuery(
    ['genre-anime', genres],
    async () => await getFetcher(uri),
  );

  return {data, ...others};
};

export default useRemoteSelectedGenreAnime;
