import { makeStyles, withTheme } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 6,
    
    // backgroundColor: theme.palette.background.default,
    padding: theme.spacing(),
  },
  paper: {
    boxShadow: "2px 2px 8px #706464",
  },
  root: {
    flexGrow: 2,
    boxShadow: "2px 2px 8px #706464",
  },
}));