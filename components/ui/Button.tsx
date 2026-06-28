interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  disabled,
}: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="
        bg-primary
        hover:bg-primary-hover
        disabled:opacity-50
        rounded-xl
        px-8
        py-4
        font-semibold
        text-white
        transition-all
        duration-300
      "
    >
      {children}
    </button>
  );
}