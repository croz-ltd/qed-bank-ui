import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

export default theme => ({
  root: {
    marginTop: 64,
  },
  card: {
    maxWidth: 345,
    margin: "0 auto",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
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
  }
});
