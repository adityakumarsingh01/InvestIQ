interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        bg-card
        rounded-2xl
        border
        border-border
        shadow-xl
        p-6
        transition-all
        duration-300
        hover:border-blue-500
        ${className}
      `}
    >
      {children}
    </div>
  );
}