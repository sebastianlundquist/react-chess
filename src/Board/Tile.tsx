import { Box } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
	color: 'black' | 'white';
	children: ReactNode;
};

const Tile = ({ color, children }: Props) => (
	<Box
		alignItems="center"
		bgcolor={color === 'black' ? '#613710' : '#f5d19a'}
		color={color === 'black' ? 'white' : 'black'}
		display="flex"
		height={96}
		justifyContent="center"
		width={96}
	>
		{children}
	</Box>
);

export default Tile;
