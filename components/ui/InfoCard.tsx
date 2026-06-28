interface Props {
  title: string;
  value: string | number;
}

export default function InfoCard({
  title,
  value,
}: Props) {
  return (
    <div className="bg-card border border-border rounded-xl p-4">

      <p className="text-sm text-muted">
        {title}
      </p>

      <h3 className="text-lg font-bold mt-2 text-foreground">
        {value}
      </h3>

    </div>
  );
}