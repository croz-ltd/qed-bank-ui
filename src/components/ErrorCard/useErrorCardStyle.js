import {makeStyles} from '@material-ui/core/styles';

const useErrorCardStyle = makeStyles(() => ({
  card: {
    maxWidth: 345,
    margin: '0 auto',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
}));

export default useErrorCardStyle;
