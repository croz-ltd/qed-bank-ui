import {makeStyles} from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

const useTransactionFormStyle = makeStyles(() => ({
  balance: {
    border: 0,
    fontSize: '24px',
    marginBottom: '24px'
  },
  btnRed: {
    color: '#fff',
    backgroundColor: red[500]
  },
  btnGreen: {
    color: '#fff',
    backgroundColor: green[500],
  },
  notAvailable: {
    backgroundColor: red[500],
    margin: '8px',
    borderRadius: '4px',
    padding: '12px 24px',
    color: 'white'
  }
}));

export default useTransactionFormStyle;
