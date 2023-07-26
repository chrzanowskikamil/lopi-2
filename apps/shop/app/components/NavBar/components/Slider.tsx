export default function Slider() {
  return (
    <>
      <div className="flex-row slider">
        <div className="slider-arrows">
          <svg
            width="7"
            height="11"
            viewBox="0 0 7 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.17505 1.38318L2.35838 5.18473L6.17505 8.98629L5.00005 10.1541L4.86654e-05 5.18473L5.00005 0.215382L6.17505 1.38318Z"
              fill="black"
            />
          </svg>
        </div>
        <span className="slider-text">
          Lorem ipsum dolor sit amet consectetur
        </span>
        <div className="slider-arrows">
          <svg
            width="7"
            height="11"
            viewBox="0 0 7 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 8.98628L3.81667 5.18473L0 1.38318L1.175 0.215378L6.175 5.18473L1.175 10.1541L0 8.98628Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
