import { Children } from "react";

interface Props {
  children: React.ReactNode;
}

export default function CardDefault({ children }: Props) {
  return (
    <div className="px-4 py-4 rounded-xl overflow-hidden bg-[#FFD7C4] border-2">
      {children}
    </div>
  );
}
