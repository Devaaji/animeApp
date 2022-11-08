import {useQuery} from '@tanstack/react-query';
import {getFetcher} from '../../libs/axios';

const useRemoteMoreAnime = ({urlparams}) => {
  const uri = urlparams ? urlparams : null;

  const {data, ...others} = useQuery(
    ['see-more-anime', uri],
    async () => await getFetcher(uri),
  );

  return {data, ...others};
};

export default useRemoteMoreAnime;
