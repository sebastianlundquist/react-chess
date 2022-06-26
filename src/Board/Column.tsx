import Stack from '@mui/material/Stack';
import { v4 as uuidv4 } from 'uuid';
import Piece, { ColorType, PieceType } from '../Pieces/Piece';
import { getPieceColor, getPieceType } from '../Pieces/utils';
import Tile from './Tile';

const tileIds = Array(64).map(() => uuidv4());

const getColor = (column: number, row: number) =>
	(column + row) % 2 === 0 ? 'black' : 'white';

type Props = {
	column: (string | undefined)[];
	columnIndex: number;
};

const Column = ({ column, columnIndex }: Props) => (
	<Stack direction="column-reverse">
		{column.map((row, rowIndex) => (
			<Tile
				key={tileIds[columnIndex + rowIndex]}
				color={getColor(columnIndex, rowIndex)}
			>
				{row && (
					<Piece
						type={getPieceType(row) as PieceType}
						color={getPieceColor(row) as ColorType}
					/>
				)}
			</Tile>
		))}
	</Stack>
);

export default Column;
