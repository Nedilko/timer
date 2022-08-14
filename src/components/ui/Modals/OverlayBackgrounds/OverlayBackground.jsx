import PropTypes from "prop-types";

OverlayBackground.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

function OverlayBackground({ children, onClick }) {
  return (
    <div
      role="overlay"
      onClick={onClick}
      className="fixed inset-0 backdrop-blur-sm w-full h-full flex items-center justify-center"
    >
      {children}
    </div>
  );
}

export default OverlayBackground;
