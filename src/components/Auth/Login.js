import React, { useState } from 'react';
import useFormValidation from './useFormValidation';

const INITIAL_STATE = {
	name: '',
	email: '',
	password: '',
};
function Login(props) {
  const { handleSubmit, handleChange, values } = useFormValidation(INITIAL_STATE);
	const [login, setLogin] = useState(true);

	return (
		<div>
			<h2 className="mv3">{login ? 'Login' : 'Create Account'}</h2>
			<form className="flex flex-column" onSubmit={handleSubmit}>
				{!login && (
					<input
            type="text"
            value ={values.name}
						onChange={handleChange}
						name="name"
						placeholder="Your name"
						autoComplete="off"
					/>
				)}
				<input
          type="email"
          value ={values.email}
					onChange={handleChange}
					name="email"
					placeholder="Your email"
					autoComplete="off"
				/>
				<input
          type="password"
          value ={values.password}
					onChange={handleChange}
					name="password"
					placeholder="Choose a secure password"
				/>
				<div className="flex mt3">
					<button type="submit" className="button pointer mr2">
						Submit
					</button>
					<button
						type="button"
						className="pointer button"
						onClick={() => setLogin((prevLogin) => !prevLogin)}
					>
						{login
							? 'need to create an account..?'
							: 'already have an account..?'}
					</button>
				</div>
			</form>
		</div>
	);
}

export default Login;
