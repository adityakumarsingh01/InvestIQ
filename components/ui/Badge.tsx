interface Props {
  text: string;
  color?:
    | "green"
    | "yellow"
    | "red"
    | "blue"
    | "orange";
}

export default function Badge({
  text,
  color = "blue",
}: Props) {

  const colors = {
    green: "bg-green-600",
    yellow: "bg-yellow-500 text-black",
    red: "bg-red-600",
    blue: "bg-blue-600",
    orange: "bg-orange-500",
  };

  return (
    <span
      className={`
        ${colors[color]}
        px-4
        py-2
        rounded-full
        font-semibold
        text-sm
        shadow
      `}
    >
      {text}
    </span>
  );
}