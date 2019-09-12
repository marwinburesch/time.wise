import React from "react";

export default function NewItem(props) {
  const [activity, setActivity] = React.useState("");
  const [hours, setHours] = React.useState("");

  const isValid = !!(activity && hours);

  function handleSubmit() {
    props.onAdd({
      activity: activity,
      hours: hours
    });
  }

  return (
    <div>
      <input
        className="activity"
        type="text"
        placeholder="activity"
        value={activity}
        onChange={event => setActivity(event.target.value)}
      />
      <input
        className="hours"
        type="number"
        placeholder="hours"
        value={hours}
        onChange={event => setHours(parseInt(event.target.value))}
      />
      <button
        className="submitButton"
        onClick={handleSubmit}
        disabled={!isValid}
      >
        +
      </button>
    </div>
  );
}
