import { useState } from 'react'

const Register = ({ onRouteChange }) => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleRegister = (event) => {
		event.preventDefault()

		fetch('http://localhost:5000/register', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name, email, password }),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data) {
					onRouteChange('home', data)
				}
			})
	}
	return (
		<article className='br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5  center'>
			<main className='pa4 black-80'>
				<form onSubmit={handleRegister} className='measure'>
					<fieldset
						id='sign_up'
						className='ba b--transparent ph0 mh0'
					>
						<legend className='f1 fw6 ph0 mh0'>Register</legend>
						<div className='mt3'>
							<label className='db fw6 lh-copy f6' htmlFor='name'>
								Name
							</label>
							<input
								className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
								type='text'
								name='name'
								id='name'
								onChange={(event) =>
									setName(event.target.value)
								}
								value={name}
							/>
						</div>
						<div className='mt3'>
							<label
								className='db fw6 lh-copy f6'
								htmlFor='email-address'
							>
								Email
							</label>
							<input
								className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
								type='email'
								name='email-address'
								id='email-address'
								onChange={(event) =>
									setEmail(event.target.value)
								}
								value={email}
							/>
						</div>
						<div className='mv3'>
							<label
								className='db fw6 lh-copy f6'
								htmlFor='password'
							>
								Password
							</label>
							<input
								className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
								type='password'
								name='password'
								id='password'
								onChange={(event) =>
									setPassword(event.target.value)
								}
							/>
						</div>
					</fieldset>
					<div className=''>
						<input
							// onClick={() => onRouteChange('home')}
							className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
							type='submit'
							value='Register'
						/>
					</div>
				</form>
			</main>
		</article>
	)
}

export default Register
