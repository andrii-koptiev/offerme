'use client';

import { FC } from 'react';

type Props = {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: FC<Props> = ({ text, onClick }) => {
  return (
    <button
      className=" mr-2 rounded-lg bg-red px-4 py-2 text-sm font-medium text-grey hover:opacity-80 focus:outline-none focus:ring-4 focus:ring-brown lg:px-5 lg:py-2.5"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
