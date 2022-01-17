import { useGoogleAuth } from './GoogleAuthContext';
import { useState } from 'react';

function App() {
	const { currentUser, googleSignIn, googleSignOut, error, loading } =
		useGoogleAuth();

	return (
		<>
			{error && <p>{error}</p>}
			{currentUser ? (
				<button onClick={googleSignOut}>Sign Out</button>
			) : (
				<button
					onClick={googleSignIn}
					disabled={loading && !currentUser ? true : false}>
					Sign In
				</button>
			)}
			{currentUser ? <p>{JSON.stringify(currentUser)}</p> : null}
		</>
	);
}

export default App;
