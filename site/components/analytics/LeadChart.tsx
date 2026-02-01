'use client';

interface LeadChartProps {
  data: Array<{ date: string; count: number }>;
}

export default function LeadChart({ data }: LeadChartProps) {
  if (data.length === 0 || data.every((d) => d.count === 0)) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
          Lead Trend
        </h3>
        <p className="text-sm text-gray-500">No leads data yet</p>
      </div>
    );
  }

  const maxCount = Math.max(...data.map((d) => d.count));
  const minCount = Math.min(...data.filter((d) => d.count > 0).map((d) => d.count));

  // Simple bar chart without external dependencies
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
      <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
        Daily Lead Trend
      </h3>
      <div className="space-y-2">
        {data.map((item, index) => {
          const height = maxCount > 0 ? (item.count / maxCount) * 100 : 0;
          const date = new Date(item.date);
          const formattedDate = date.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
          });

          return (
            <div key={index} className="flex items-center gap-3">
              <span className="w-16 text-xs text-gray-600 dark:text-gray-400">
                {formattedDate}
              </span>
              <div className="relative flex-1">
                <div className="h-8 w-full rounded bg-gray-100 dark:bg-gray-700">
                  {item.count > 0 && (
                    <div
                      className="flex h-full items-center justify-end rounded bg-blue-500 px-2 transition-all"
                      style={{ width: `${Math.max(height, 5)}%` }}
                    >
                      <span className="text-xs font-semibold text-white">
                        {item.count}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
