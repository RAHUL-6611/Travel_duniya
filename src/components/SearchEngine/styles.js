import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formControl: {
     minWidth: 160, marginBottom: '30px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    padding: '0px 25px',
  },
  marginBottom: {
    marginBottom: '30px',
  },
  list: {
    display: 'flex', flexDirection:'column',
    height: '45vh', overflowY: 'auto',
  },
  box:{
    display: 'flex',
    flexDirection: 'row',
    width:"100%"
  },
  typo:{
    marginBottom: '30px',
  },
  forms: {
    display: 'flex',
    flexDirection: 'column',
    marginRight:'40px'
  }
}));
