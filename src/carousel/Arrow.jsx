export const Arrow = ({ right = false }) => {
  return (
    <svg
      transform={right ? "scale(-1)" : ""}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 99 174">
      <path
        fill="#fff"
        d="M111.817 31.395a8.527 8.527 0 000-12.063l-.002-.002a8.53 8.53 0 00-12.063 0L31.146 87.935a17.062 17.062 0 000 24.13l68.606 68.605a8.53 8.53 0 0012.063 0l.002-.002a8.53 8.53 0 000-12.063l-56.54-56.54c-6.663-6.663-6.663-17.467 0-24.13l56.54-56.54z"
        transform="translate(-50.616 -13.298) translate(31.535)"></path>
    </svg>
  );
};
