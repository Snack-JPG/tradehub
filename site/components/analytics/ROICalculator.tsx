'use client';

import { useState } from 'react';

interface ROICalculatorProps {
  totalLeads: number;
}

export default function ROICalculator({ totalLeads }: ROICalculatorProps) {
  const [avgJobValue, setAvgJobValue] = useState<number>(150);
  const [closeRate, setCloseRate] = useState<number>(40);

  const subscriptionCost = 30;
  const estimatedRevenue = Math.round((totalLeads * (closeRate / 100) * avgJobValue));
  const roi = subscriptionCost > 0 ? Math.round(estimatedRevenue / subscriptionCost) : 0;

  return (
    <div className="rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950">
      <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
        💰 Lead Value Calculator
      </h3>

      <div className="mb-4 space-y-4">
        <div>
          <label
            htmlFor="avgJobValue"
            className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Average job worth (£)
          </label>
          <input
            type="number"
            id="avgJobValue"
            value={avgJobValue}
            onChange={(e) => setAvgJobValue(Number(e.target.value))}
            className="w-full rounded border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            min="0"
            step="10"
          />
        </div>

        <div>
          <label
            htmlFor="closeRate"
            className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Close rate (%)
          </label>
          <input
            type="number"
            id="closeRate"
            value={closeRate}
            onChange={(e) => setCloseRate(Number(e.target.value))}
            className="w-full rounded border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            min="0"
            max="100"
            step="5"
          />
        </div>
      </div>

      <div className="rounded-lg bg-white p-4 dark:bg-gray-800">
        <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
          Estimated revenue generated:
        </p>
        <p className="mb-1 text-sm text-gray-700 dark:text-gray-300">
          {totalLeads} leads × {closeRate}% close rate × £{avgJobValue} avg =
        </p>
        <p className="mb-4 text-3xl font-bold text-green-600 dark:text-green-400">
          £{estimatedRevenue.toLocaleString()}
        </p>

        <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
          <p className="mb-1 text-sm text-gray-600 dark:text-gray-400">
            Your TradeHub subscription costs <strong>£{subscriptionCost}/month</strong>.
          </p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            That's a <span className="text-blue-600 dark:text-blue-400">{roi}x return</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
