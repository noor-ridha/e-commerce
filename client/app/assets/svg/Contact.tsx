import { FunctionComponent } from 'react';

interface ContactProps {
  readonly active: boolean;
}

const Contact: FunctionComponent<ContactProps> = ({ active }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={active ? '40' : '25'}
      height={active ? '40' : '25'}
      viewBox="0 0 24 24"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-251 -207)">
          <g transform="translate(251 207)">
            <path
              fill="#FFF"
              fillOpacity="0.01"
              fillRule="nonzero"
              d="M0 0H24V24H0z"
            ></path>
            <path d="M18 16a4 4 0 100-8"></path>
            <path
              stroke="#212121"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M18 16h0a4 4 0 100-8"
            ></path>
            <path d="M6 8a4 4 0 100 8"></path>
            <path
              stroke="#212121"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M6 8a4 4 0 100 8h0"
            ></path>
            <path
              stroke="#212121"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M6 16V8a6 6 0 0112 0v8a6 6 0 01-6 6"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Contact;
