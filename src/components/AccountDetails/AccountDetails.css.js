import {makeStyles} from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

const useAccountDetailsStyle = makeStyles(() => ({
  balance: {
    border: 0,
    fontSize: '24px'
  },
  avatarRed: {
    color: '#fff',
    backgroundColor: red[500]
  },
  avatarGreen: {
    color: '#fff',
    backgroundColor: green[500],
  },
  rowActions: {
    display: 'flex',
  },
}));

export default useAccountDetailsStyle;