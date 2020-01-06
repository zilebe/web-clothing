import React from "react";
import { Route } from "react-router-dom";
import Contact from "../../components/contact/contact";

const ContactPage = ({ match }) => (
	<div className="contact-page">
		<Route exact path={`${match.path}`} component={Contact} />
		{console.log(match.path)}
	</div>
);

export default ContactPage;
