import React from "react";

export default function SearchDates() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  function formatDate(dateString) {
    const options = { month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <>
      <label htmlFor="" className="text-xs font-semibold flex flex-col">
        Check in
      </label>
      <span>{formatDate(state[0]?.startDate)}</span>
      {selected === "check-in" && (
        <div className="absolute top-28 left-0 shadow-xl">
          <Calender state={state} setState={setState} />
        </div>
      )}
    </>
  );
}
