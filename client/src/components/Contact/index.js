import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { validateEmail } from "../../utils/helpers";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';

function Contact() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [errorMessage, setErrorMessage] = useState("");
	const { name, email, message } = formState;
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_c0kytx6', 'template_tuk574e', form.current, 'Q6MtIbz_bMsCdyhX1')
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});
	};

	function handleEmail(e) {
		if (e.target.name === "email") {
			const isValid = validateEmail(e.target.value);
			if (!isValid) {
				setErrorMessage("Email is invalid.");
			} else {
				if (!e.target.value.length) {
					setErrorMessage(`${e.target.name} is required.`);
				} else {
					setErrorMessage("");
				}
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	function handleEmpty(e) {
		if (e.target.name === "name" || e.target.name === "message") {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required.`);
			} else {
				setErrorMessage("");
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	return (
		<main style={{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			flexDirection: 'column',
			backgroundColor: '#b48b7d',
			minHeight: '100vh',
			opacity: '75%'
		}}>
			
			<h2 style={{
				fontSize: 40,
				borderBottom: '2px solid #56351e',
			}}>Contact</h2>
			<div>
				<form 
				ref={form} onSubmit={sendEmail}
				className="form" 
				style={{ 
					display: 'flex', 
					justifyContent: 'center',
					flexDirection: 'column' 
					}}>
					<div style={{margin: 20}}>
						<div>
							<label className="contactTitle" style={{color: 'white'}}>Name:</label>
						</div>
						<Input style={{backgroundColor: 'white', padding: 14}} className="userInput" type="text" defaultValue={name} onBlur={handleEmpty} name="name"/>
					</div>
					<div style={{margin: 20}}>
						<div>
							<label className="contactTitle" htmlFor="email" style={{color: 'white'}}>Email address:</label>
						</div>
						<Input style={{backgroundColor: 'white', padding: 14}} className="userInput" type="email" defaultValue={email} name="email" onBlur={handleEmail}/>
					</div>
					<div style={{margin: 20}}>
						<div>
							<label className="contactTitle" htmlFor="Message" style={{color: 'white', maxHeight: 200}}>Message:</label>
						</div>
						<TextField  style={{backgroundColor: 'white', color: 'white', marginBottom: 20}} name="message" className="messageInput" defaultValue={message} onBlur={handleEmpty}/>
					</div>
					{errorMessage && (
						<div style={{display: 'flex', justifyContent: 'center'}}>
							<p style={{ color: '#ba1200'}}>{errorMessage}</p>
						</div>
					)}
				</form>
				<div style={{
							display: 'flex',
							justifyContent: 'center',
							backgroundColor: '#56351e',
                            color: '#b48b7d', 
							borderRadius: '50%',
                            fontSize: 18}}>
					<Button 
                        autoFocus color="inherit" 
                        onClick={sendEmail}
						className="btn btn-secondary"
                        
                            >
                            Send Message
							<p>___</p>
						<SendIcon/>
					</Button>
				</div>
			</div>
		</main>
	);
}

export default Contact;


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// export default function Contact() {
//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', marginTop: '150px'}}>
//       <Box
        
//         component="form"
//         sx={{
//           '& .MuiTextField-root': { m: 1, width: '25ch' },
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <form style={{ display: 'flex', flexDirection: 'column'}}>
//           <TextField
//             id="outlined-textarea"
//             label="First Name"
//             placeholder="First Name"
//             multiline
//           />
//           <TextField
//             id="outlined-textarea"
//             label="Last Name"
//             placeholder="Last Name"
//             multiline
//           />
//           <TextField
//             id="outlined-textarea"
//             label="Email"
//             placeholder="Email"
//             multiline
//           />
//           <TextField
//             id="outlined-multiline-static"
//             label="Message"
//             multiline
//             rows={10}
//           />
//         </form>
//       </Box>
//     </div>
//   );
// }