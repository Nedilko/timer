import PropTypes from "prop-types";
import { formatNumberTwoDigit } from "../../utils/helperFunctions";

DialItem.propTypes = {
  title: PropTypes.string.isRequired,
  numbers: PropTypes.number.isRequired,
  isLast: PropTypes.bool,
};

function DialItem({ title, numbers, isLast }) {
  return (
    <div
      className={`inline-flex flex-col w-1/4 px-1 ${
        isLast
          ? ""
          : "after:absolute after:text-2xl after:content-[':'] after:absolute after:right-0 after:bottom-0 relative"
      }`}
    >
      <div>{title}</div>
      <div className="text-2xl">{formatNumberTwoDigit(numbers)}</div>
    </div>
  );
}

export default DialItem;
