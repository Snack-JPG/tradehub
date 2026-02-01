interface MetricCardProps {
  icon: string;
  label: string;
  value: number;
  highlight?: boolean;
}

export default function MetricCard({ icon, label, value, highlight }: MetricCardProps) {
  return (
    <div
      className={`rounded-lg border p-6 transition-all ${
        highlight
          ? 'border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-blue-950'
          : 'border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800'
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="text-3xl">{icon}</span>
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
          <p
            className={`text-3xl font-bold ${
              highlight
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-gray-900 dark:text-white'
            }`}
          >
            {value.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
