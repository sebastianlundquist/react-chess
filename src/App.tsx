import Box from '@mui/material/Box';
import './App.css';
import Board from './Board/Board';

const App = () => (
	<div className="App">
		<Box
			alignItems="center"
			display="flex"
			justifyContent="center"
			minHeight="100vh"
		>
			<Board />
		</Box>
	</div>
);

export default App;
