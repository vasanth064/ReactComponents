import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import skyConnectLightTheme from './Theme';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={skyConnectLightTheme}>
			<Router>
				<App />
			</Router>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
