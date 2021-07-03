// PHP MAILER APP
import React, { Component } from "react";
import axios from "axios";
export default class Mailer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message sending failed.");
      }
    });
  }

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }
  render() {
    return (
      <section className="w-full flex flex-col items-center py-40 bg-white-lilac text-white-lilac shadow-md text-lg lg:w-1/2 px-5">
        <div className="w-full py-11 px-8 bg-cornflower-blue rounded leading-loose md:w-2/6">
          <h3 className="text-xl md:text-4xl font-semibold  py-5">
            Send me a message
          </h3>
          <form
            className="flex flex-col w-full md:px-5"
            id="contact-form"
            onSubmit={this.handleSubmit.bind(this)}
            method="POST"
          >
            <div className="flex flex-col py-3 leading-relaxed">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="messageInput"
                id="name"
                value={this.state.name}
                onChange={this.onNameChange.bind(this)}
              />
            </div>
            <div className="flex flex-col py-3">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="messageInput"
                id="email"
                aria-describedby="emailHelp"
                value={this.state.email}
                onChange={this.onEmailChange.bind(this)}
              />
            </div>
            <div className="flex flex-col py-3">
              <label htmlFor="message">Message</label>
              <textarea
                className="w-full px-3 py-1 text-gray-600 text-lg leading-loose rounded"
                rows={5}
                id="message"
                value={this.state.message}
                onChange={this.onMessageChange.bind(this)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-picton-blue text-white-lilac py-4 mt-4 rounded text-lg font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
}
