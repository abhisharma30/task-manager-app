import "../styles/Filter.css";

const Filter = ({ setFilter }) => {
  return (
    <div className="filter-buttons">
      <button className="btn btn-primary" onClick={() => setFilter("all")}>
        All
      </button>
      <button
        className="btn btn-success"
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => setFilter("incomplete")}
      >
        Incomplete
      </button>
    </div>
  );
};

export default Filter;
