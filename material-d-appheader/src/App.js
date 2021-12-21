import { Container, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import { Route, Routes, useLocation } from 'react-router-dom';
import AppHeader from './Components/AppHeader';
import projectRoutes from './projectRoutes';

function App() {
	const location = useLocation();
	return (
		<Container disableGutters>
			<Box>
				{location.pathname !== '/login' ? (
					<Toolbar>
						<AppHeader />
					</Toolbar>
				) : null}
				<Routes>
					{projectRoutes.map((item, index) => (
						<Route key={index} path={item.path} element={item.element} />
					))}
				</Routes>
			</Box>
		</Container>
	);
}

export default App;
