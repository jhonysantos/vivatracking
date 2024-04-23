import React from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import logo from '../resources/images/logo.png';

const useStyles = makeStyles(() => ({
  image: {
    alignSelf: 'center',
    maxWidth: '240px',
    maxHeight: '120px',
    width: 'auto',
    height: 'auto',
  },
}));

const LogoImage = ({ color }) => {
  const theme = useTheme();
  const classes = useStyles();

  const expanded = !useMediaQuery(theme.breakpoints.down('lg'));

  const logoUrl = useSelector((state) => state.session.server.attributes?.logo);
  const logoInvertedUrl = useSelector((state) => state.session.server.attributes?.logoInverted);

  if (logoUrl) {
    if (expanded && logoInvertedUrl) {
      return <img className={classes.image} src={logoInvertedUrl} alt="" />;
    }
    return <img className={classes.image} src={logoUrl} alt="" />;
  }
  return <img className={classes.image} src={logo} alt="" style={{ color }} />;
};

export default LogoImage;
