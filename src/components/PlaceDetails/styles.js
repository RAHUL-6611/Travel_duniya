import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  chip: {
    margin: '0px 5px 5px 0',
  },
  subtitle: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px',
  },
  spacing: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
  card:{
    width: '100%',
    Height: '90vh',
  }
  ,
  cardMedia:{
    display: 'flex',
    flexDirection: 'row',

  }
}));
