import { styled } from '@mui/material';

const Image = styled('img')(() => ({
  maxWidth: '100%',
  maxHeight: '100%',
}));

interface AppImageProps {
  path: string;
  width: number;
}

const rootUrl = 'https://openweathermap.org/img/wn'

const AppImage: React.FC<AppImageProps> = ({ path, ...rest }) => (
  <Image {...rest} src={`${rootUrl}/${path}.png`} />
);

export default AppImage;
