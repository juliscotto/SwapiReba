import {useInfiniteQuery} from '@tanstack/react-query';
import axios from 'axios';

interface Props {
  queryKey: string;
}

export default ({queryKey}: Props) => {
  return useInfiniteQuery({
    queryKey: [queryKey],
    queryFn: ({pageParam = 1}) =>
      axios
        .get(`https://swapi.info/api/${queryKey}/?page=${pageParam}`)
        .then(res => {
          return res.data;
        })
        .catch(error => {
          throw new Error(error);
        }),
    getNextPageParam: lastPage => {
      if (lastPage.next) {
        const page = lastPage.next.split('?page=')[1];
        return page;
      } else {
        return undefined;
      }
    },
    initialPageParam: 1,
  });
};
