import { makeStyles, useTheme } from '@material-ui/core/styles';

const myTableStyles = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

export default myTableStyles;
