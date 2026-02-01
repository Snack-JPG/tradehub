interface SourceBreakdownProps {
  sources: { [key: string]: number };
}

const sourceLabels: { [key: string]: string } = {
  tradehub: 'TradeHub Directory',
  organic: 'Search Engines',
  direct: 'Direct Traffic',
  social: 'Social Media',
  referral: 'Referrals',
  paid: 'Paid Ads',
};

export default function SourceBreakdown({ sources }: SourceBreakdownProps) {
  const total = Object.values(sources).reduce((sum, count) => sum + count, 0);
  const sortedSources = Object.entries(sources).sort((a, b) => b[1] - a[1]);

  if (total === 0) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
          Traffic Sources
        </h3>
        <p className="text-sm text-gray-500">No traffic data yet</p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
      <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
        Traffic Sources
      </h3>
      <div className="space-y-3">
        {sortedSources.map(([source, count]) => {
          const percentage = ((count / total) * 100).toFixed(1);
          return (
            <div key={source}>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className="text-gray-700 dark:text-gray-300">
                  {sourceLabels[source] || source}
                </span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {count} ({percentage}%)
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
                <div
                  className="h-full bg-blue-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
