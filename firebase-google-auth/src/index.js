import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GoogleAuthenticationProvider from './GoogleAuthContext';

ReactDOM.render(
	<React.StrictMode>
		<GoogleAuthenticationProvider>
			<App />
		</GoogleAuthenticationProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
