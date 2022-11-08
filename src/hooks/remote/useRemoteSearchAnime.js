import {useQuery} from '@tanstack/react-query';
import {getFetcher} from '../../libs/axios';

const useRemoteSearchAnime = ({search}) => {
  const uri = search !== '' ? `/anime?q=${search}&order_by=title` : null;

  const {data, ...others} = useQuery(['search-anime', search], () =>
    getFetcher(uri),
  );

  return {data, ...others};
};

export default useRemoteSearchAnime;
