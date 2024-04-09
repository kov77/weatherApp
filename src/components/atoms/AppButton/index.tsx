import { Button as MuiButton, ButtonProps, styled } from '@mui/material';

const StyledButton = styled(MuiButton)(() => ({
  textTransform: 'none',
  whiteSpace: 'nowrap',
  backgroundColor: '#29d790',
  fontSize: '1.5rem',
  lineHeight: '0.5rem',
  padding: '1rem',
  minWidth: '1rem',
  color: '#000',
  '&:hover': {
    backgroundColor: '#3cb972',
  },
  textAlign: 'center',
  zIndex: 2
}));

const AppButton: React.FC<ButtonProps> = ({
  children,
  ...rest
}) => {
  return <StyledButton {...rest}>{children}</StyledButton>
};

export default AppButton;
