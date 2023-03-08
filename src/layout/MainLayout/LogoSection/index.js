/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase, Typography } from '@mui/material';

// project imports
import config from 'config';
import Logo from 'ui-component/Logo';
import LogoMin from '../../../assets/images/logo.png';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
    <ButtonBase disableRipple component={Link} to={config.defaultPath}>
        {/* <Logo /> */}
        <img src={LogoMin} alt width={40} height={40} />
        <Typography variant="h3" sx={{ ml: 2 }}>
            TDR
        </Typography>
    </ButtonBase>
);

export default LogoSection;
