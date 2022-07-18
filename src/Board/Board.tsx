import { Stack } from '@mui/material';
import { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Column from './Column';

const columnIds = [...Array(8).keys()].map((index) => `column-${index}`);

const initialState: Array<Array<string | undefined>> = [
	[
		'white-rook-0',
		'white-pawn-0',
		undefined,
		undefined,
		undefined,
		undefined,
		'black-pawn-7',
		'black-rook-1',
	],
	[
		'white-knight-0',
		'white-pawn-1',
		undefined,
		undefined,
		undefined,
		undefined,
		'black-pawn-6',
		'black-knight-1',
	],
	[
		'white-bishop-0',
		'white-pawn-2',
		undefined,
		undefined,
		undefined,
		undefined,
		'black-pawn-5',
		'black-bishop-1',
	],
	[
		'white-queen-0',
		'white-pawn-3',
		undefined,
		undefined,
		undefined,
		undefined,
		'black-pawn-4',
		'black-queen-0',
	],
	[
		'white-king-0',
		'white-pawn-4',
		undefined,
		undefined,
		undefined,
		undefined,
		'black-pawn-3',
		'black-king-0',
	],
	[
		'white-bishop-1',
		'white-pawn-5',
		undefined,
		undefined,
		undefined,
		undefined,
		'black-pawn-2',
		'black-bishop-0',
	],
	[
		'white-knight-1',
		'white-pawn-6',
		undefined,
		undefined,
		undefined,
		undefined,
		'black-pawn-1',
		'black-knight-0',
	],
	[
		'white-rook-1',
		'white-pawn-7',
		undefined,
		undefined,
		undefined,
		undefined,
		'black-pawn-0',
		'black-rook-0',
	],
];

const Board = () => {
	const [boardState] = useState(initialState);
	return (
		<DragDropContext onDragEnd={() => console.log('Hej')}>
			<Droppable droppableId="board">
				{(provided, snapshot) => (
					<Stack
						ref={provided.innerRef}
						{...provided.droppableProps}
						direction="row"
					>
						{boardState.map((column, columnIndex) => (
							<Column
								column={column}
								columnIndex={columnIndex}
								key={columnIds[columnIndex]}
							/>
						))}
					</Stack>
				)}
			</Droppable>
		</DragDropContext>
	);
};

export default Board;
