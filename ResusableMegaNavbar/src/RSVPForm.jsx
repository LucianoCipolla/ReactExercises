import { useState } from "react";

export function EventRSVPForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attendees, setAttendees] = useState("");
  const [preference, setPreference] = useState("");
  const [hasGuest, setHasGuest] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Form</legend>
          <label>
            {" "}
            Name
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              required
              value={name}
            />{" "}
          </label>
          <br />
          <label>
            {" "}
            Email
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              value={email}
            />{" "}
          </label>
          <br />
          <label>
            {" "}
            Number of Attendees:
            <input
              onChange={(e) => setAttendees(Number(e.target.value))}
              type="number"
              min="1"
              required
              value={attendees}
            />{" "}
          </label>
          <br />
          <label>
            {" "}
            Dietary Preferences:
            <input
              onChange={(e) => setPreference(e.target.value)}
              type="text"
              value={preference}
            />{" "}
          </label>
          <br />
          <label>
            {" "}
            Bringing additional guests?
            <input
              onChange={(e) => setHasGuest(e.target.checked)}
              type="checkbox"
              checked={hasGuest}
            />{" "}
          </label>
        </fieldset>
        <button type="submit">Submit RSVP</button>
      </form>

      {submitted && (
        <div>
          <p>RSVP Submitted!</p>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Number of attendees: {attendees}</p>
          <p>Dietary preferences: {preference ? preference : "None"}</p>
          <p>Bringing additional guests: {hasGuest ? "Yes" : "No"}</p>
        </div>
      )}
    </>
  );
}
