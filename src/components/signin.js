import NTask from "../ntask.js";
import Template from "../templates/signin.js";

class Signin extends NTask {

	constructor(body) {
		super();
		this.body = body;
	}

	render() {
		this.body.innerHTML = Template.render();
		this.body.querySelector("[data-email]").focus();
		this.addEventListener();
	}

	addEventListener() {
		this.formSubmit();
		this.signupClick();
	}

	formSubmit() {
		const form = this.body.querySelector("form");

		form.addEventListener("submit", (e) => {

			console.log(form);
			e.preventDefault();

			const email = e.target.querySelector("[data-email]");
			const password = e.target.querySelector("[data-password]");
			const opts = {
				method: "POST",
				url: `${this.URL}/token`,
				json: true,
				body: {
					email: email.value,
					password: password.value
				}
			};
		});
	}

	signupClick() {
		const signup = this.body.querySelector("[data-signup]");

		signup.addEventListener("click", (e) => {
			e.preventDefault();
			this.emit("signup");
		});
	}
}

module.exports = Signin;