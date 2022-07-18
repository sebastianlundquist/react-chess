/* eslint-disable no-plusplus */
import Stack from '@mui/material/Stack';
import { Draggable } from 'react-beautiful-dnd';
import Piece, { ColorType, PieceType } from '../Pieces/Piece';
import { getPieceColor, getPieceType } from '../Pieces/utils';
import Tile from './Tile';
import { getColumnName, getRowName } from './utils';

const tileIds = [...Array(64).keys()].map((index) => `tile-${index}`);
const indices = [...Array(32).keys()];

const getColor = (column: number, row: number) =>
	(column + row) % 2 === 0 ? 'black' : 'white';

type Props = {
	column: (string | undefined)[];
	columnIndex: number;
};

const Column = ({ column, columnIndex }: Props) => {
	const hej = 1;
	return (
		<Stack direction="column-reverse">
			{column.map((row, rowIndex) => (
				<Tile
					color={getColor(columnIndex, rowIndex)}
					key={tileIds[columnIndex + rowIndex]}
				>
					{row && (
						<Piece
							id={row}
							index={indices.pop() || 1}
							type={getPieceType(row) as PieceType}
							color={getPieceColor(row) as ColorType}
						/>
					)}
				</Tile>
			))}
		</Stack>
	);
};

export default Column;
