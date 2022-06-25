import { Box } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
	color: 'black' | 'white';
	children: ReactNode;
};

const Tile = ({ color, children }: Props) => (
	<Box
		width={64}
		height={64}
		bgcolor={color}
		color={color === 'black' ? 'white' : 'black'}
	>
		{children}
	</Box>
);

export default Tile;
