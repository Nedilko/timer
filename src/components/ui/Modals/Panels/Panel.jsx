import PropTypes from "prop-types";

Panel.propTypes = {
  children: PropTypes.array,
};

function Panel({ children }) {
  return (
    <div
      role="panel"
      onClick={(e) => e.stopPropagation()}
      className="bg-gray-300 rounded-xl shadow-xl p-2"
    >
      {children}
    </div>
  );
}

export default Panel;
