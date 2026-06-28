import { formatMarketCap, marketCapINR } from "@/utils/format";

interface Props {
  profile: any;
}

export default function CompanyCard({ profile }: Props) {

  if (!profile) return null;

  return (

    <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">

      <div className="flex items-center gap-6">

        <img
          src={profile.logo}
          alt={profile.name}
          className="w-20 h-20 rounded-full bg-white p-2"
        />

        <div>

          <h2 className="text-4xl font-bold">

            {profile.name}

          </h2>

          <p className="text-gray-400">

            {profile.ticker}

          </p>

        </div>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">

        <div>

          <p className="text-gray-400">

            Industry

          </p>

          <p>{profile.finnhubIndustry}</p>

        </div>

        <div>

          <p className="text-gray-400">

            Country

          </p>

          <p>{profile.country}</p>

        </div>

        <div>

          <p className="text-gray-400">

            Exchange

          </p>

          <p>{profile.exchange}</p>

        </div>

        <div>

          <p className="text-gray-400">

            IPO

          </p>

          <p>{profile.ipo}</p>

        </div>

        <div>

          <p className="text-gray-400">

            Website

          </p>

          <a
            href={profile.weburl}
            target="_blank"
            className="text-blue-400 hover:underline"
          >

            Visit →

          </a>

        </div>

        <div>

          <p className="text-gray-400">

            Market Cap

          </p>

          <p>

            {formatMarketCap(profile.marketCapitalization)}

          </p>

          <p className="text-sm text-gray-400">

            {marketCapINR(profile.marketCapitalization)}

          </p>

        </div>

      </div>

    </div>

  );

}