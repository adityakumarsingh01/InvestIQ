interface Props {
  profile: any;
}

export default function CompanyProfileCard({
  profile,
}: Props) {

  if (!profile) return null;

  return (

<div className="bg-slate-900 rounded-2xl border border-border p-6 mt-6">

<h2 className="text-3xl font-bold mb-4">

🏢 About Company

</h2>

<p className="text-foreground leading-7">

{profile.description}

</p>

<div className="border-t border-border my-6"/>

<h3 className="text-xl font-semibold mb-4">

Company Information

</h3>

<div className="grid md:grid-cols-2 gap-5">

<div className="bg-card-hover rounded-xl p-4">

<p className="text-muted text-sm">

👨‍💼 CEO

</p>

<h4 className="font-bold mt-2">

{profile.ceo}

</h4>

</div>

<div className="bg-card-hover rounded-xl p-4">

<p className="text-muted text-sm">

🏛️ Founded

</p>

<h4 className="font-bold mt-2">

{profile.founded}

</h4>

</div>

<div className="bg-card-hover rounded-xl p-4">

<p className="text-muted text-sm">

🌍 Headquarters

</p>

<h4 className="font-bold mt-2">

{profile.headquarters}

</h4>

</div>

<div className="bg-card-hover rounded-xl p-4">

<p className="text-muted text-sm">

📈 Exchange

</p>

<h4 className="font-bold mt-2">

{profile.exchange}

</h4>

</div>

</div>

</div>

);

}