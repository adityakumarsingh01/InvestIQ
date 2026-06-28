import CompareTable from "./CompareTable";
import CompareRadar from "./CompareRadar";
import AIVerdict from "./AIVerdict";

export default function CompareDashboard({ data }: any) {
  return (
    <div className="space-y-8">

      <CompareTable
        first={data.first}
        second={data.second}
      />

      <CompareRadar
        first={data.first}
        second={data.second}
      />

      <AIVerdict
        first={data.first}
        second={data.second}
      />

    </div>
  );
}