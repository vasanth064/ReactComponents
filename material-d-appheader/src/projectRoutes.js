import { Typography } from '@mui/material';
import { Navigate } from 'react-router-dom';

const projectRoutes = [
	{
		path: '/',
		element: <Typography variant='h1'>Home</Typography>,
	},
	{
		path: '/home',
		element: <Navigate to='/' replace />,
	},
	{
		path: '/login',
		element: <Typography variant='h1'>Login</Typography>,
	},
	{
		path: '/contact',
		element: <Typography variant='h1'>Contact</Typography>,
	},
	{
		path: '*',
		element: <Typography variant='h1'>Not Found</Typography>,
	},
];

export default projectRoutes;
