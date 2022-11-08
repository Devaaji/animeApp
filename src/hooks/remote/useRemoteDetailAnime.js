import {useQuery} from '@tanstack/react-query';
import {getFetcher} from '../../libs/axios';

const useRemoteDetailAnime = ({id}) => {
  const uri = `/anime/${id}`;

  const {data, ...others} = useQuery(['detail-anime', id], () =>
    getFetcher(uri),
  );

  return {data, ...others};
};

export default useRemoteDetailAnime;
