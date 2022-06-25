import { Stack } from '@mui/material';
import Tile from './Tile';
import { getColumnName, getRowName } from './utils';

const getColor = (column: number, row: number) =>
	(column + row) % 2 === 0 ? 'black' : 'white';

const Board = () => (
	<Stack direction="row">
		{[...Array(8).keys()].map((column) => (
			<Stack direction="column-reverse" key={column}>
				{[...Array(8).keys()].map((row) => (
					<Tile
						key={row}
						color={getColor(column, row)}
					>{`${getColumnName(column)} ${getRowName(row)}`}</Tile>
				))}
			</Stack>
		))}
	</Stack>
);

export default Board;
