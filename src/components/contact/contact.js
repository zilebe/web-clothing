import React from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import "./contact.scss";

class Contact extends React.Component {
	constructor() {
		super();

		this.state = {
			displayName: "",
			email: "",
			message: ""
		};
	}

	handleSubmit = event => {
		event.preventDefault();

		const { displayName, email, message } = this.state;

		if (displayName === null && email === null && message === null) {
			alert("Fill out the form");
			return;
		}

		this.setState({ displayName: "", email: "", message: "" });
	};

	handleChange = event => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		const { displayName, email, message } = this.state;
		return (
			<div className="contact">
				<h1 className="title">HAVE SOME QUESTIONS?</h1>
				<h2 className="lead">Contact our Support and Sales team</h2>
				<form className="contact-form" onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						name="displayName"
						value={displayName}
						onChange={this.handleChange}
						label="Full Name"
						required
					/>
					<FormInput
						type="email"
						name="email"
						value={email}
						onChange={this.handleChange}
						label="Email"
						required
					/>
					<FormInput
						type="text"
						name="message"
						value={message}
						onChange={this.handleChange}
						label="Message"
						required
					/>
				</form>
				<CustomButton type="submit" value="Submit Form">
					SEND MESSAGE
				</CustomButton>
				<div className="contact-info">
					<h2 className="lead">
						PLEASE FEEL FREE TO CONTACT US 1-929-396-8390
					</h2>
				</div>
			</div>
		);
	}
}

export default Contact;
