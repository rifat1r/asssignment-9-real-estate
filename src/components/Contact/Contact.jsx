import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div className="space-y-5 mb-6">
      <Helmet>
        <title>LivLux | Contact</title>
      </Helmet>
      <input
        type="text"
        placeholder="Your name"
        className="input input-bordered input-primary w-40 max-w-xs"
      />
      <br />
      <input
        type="email"
        placeholder="Your Email"
        className="input input-bordered input-primary w-40 max-w-xs"
      />
      <br />
      <textarea
        placeholder="Type Your Messsage Here"
        className="textarea textarea-bordered textarea-lg w-full max-w-xs"
      ></textarea>
      <br />
      <input className="btn" type="submit" value="Sbmit" />
    </div>
  );
};

export default Contact;
