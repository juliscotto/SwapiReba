import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

interface Props {
  url: string;
  queryKey: string;
}

export default ({url, queryKey}: Props) => {
  return useQuery({
    queryKey: [queryKey],
    queryFn: () =>
      axios
        .get(url)
        .then(res => {
          return res.data;
        })
        .catch(error => {
          throw new Error(error);
        }),
  });
};
