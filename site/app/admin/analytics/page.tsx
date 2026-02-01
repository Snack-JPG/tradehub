import { redirect } from 'next/navigation';
import { getAllSitesWithMetrics, getSiteInfo } from '@/lib/analytics';

interface PageProps {
  searchParams: Promise<{ password?: string; period?: string }>;
}

const ADMIN_PASSWORD = 'tradehub2026'; // Simple password for MVP

export default async function AdminAnalyticsPage({ searchParams }: PageProps) {
  const { password, period = 'this-month' } = await searchParams;

  // Simple password check
  if (password !== ADMIN_PASSWORD) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-800">
          <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
            Admin Analytics
          </h1>
          <form method="get" className="space-y-4">
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full rounded border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full rounded bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600"
            >
              Access Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Calculate date range based on period
  const now = new Date();
  let startDate: Date;
  let endDate: Date = now;
  let periodLabel: string;

  switch (period) {
    case 'last-month':
      startDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
      endDate = new Date(now.getFullYear(), now.getMonth(), 0);
      periodLabel = startDate.toLocaleDateString('en-GB', {
        month: 'long',
        year: 'numeric',
      });
      break;
    case 'last-90-days':
      startDate = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
      periodLabel = 'Last 90 days';
      break;
    case 'this-month':
    default:
      startDate = new Date(now.getFullYear(), now.getMonth(), 1);
      periodLabel = now.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
  }

  // Get all sites with metrics
  const sitesWithMetrics = await getAllSitesWithMetrics(startDate, endDate);

  // Enrich with site info and sort by total leads
  const enrichedSites = await Promise.all(
    sitesWithMetrics.map(async ({ siteId, metrics }) => {
      const siteInfo = await getSiteInfo(siteId);
      return {
        siteId,
        name: siteInfo?.name || siteId,
        metrics,
      };
    })
  );

  const sortedSites = enrichedSites.sort(
    (a, b) => b.metrics.total_leads - a.metrics.total_leads
  );

  // Calculate totals
  const totals = sortedSites.reduce(
    (acc, site) => ({
      phone_taps: acc.phone_taps + site.metrics.phone_taps,
      whatsapp_taps: acc.whatsapp_taps + site.metrics.whatsapp_taps,
      form_submits: acc.form_submits + site.metrics.form_submits,
      email_taps: acc.email_taps + site.metrics.email_taps,
      page_views: acc.page_views + site.metrics.page_views,
      total_leads: acc.total_leads + site.metrics.total_leads,
    }),
    {
      phone_taps: 0,
      whatsapp_taps: 0,
      form_submits: 0,
      email_taps: 0,
      page_views: 0,
      total_leads: 0,
    }
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
        <div className="container mx-auto max-w-7xl px-4 py-6">
          <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            TradeHub Analytics — Admin Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            All client analytics for {periodLabel}
          </p>

          {/* Period selector */}
          <div className="mt-4 flex gap-2">
            <a
              href={`/admin/analytics?password=${password}&period=this-month`}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                period === 'this-month'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              This Month
            </a>
            <a
              href={`/admin/analytics?password=${password}&period=last-month`}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                period === 'last-month'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Last Month
            </a>
            <a
              href={`/admin/analytics?password=${password}&period=last-90-days`}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                period === 'last-90-days'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Last 90 Days
            </a>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto max-w-7xl px-4 py-8">
        {/* Summary stats */}
        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <p className="text-sm text-gray-600 dark:text-gray-400">Total Leads</p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {totals.total_leads}
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <p className="text-sm text-gray-600 dark:text-gray-400">Phone Taps</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {totals.phone_taps}
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <p className="text-sm text-gray-600 dark:text-gray-400">WhatsApp</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {totals.whatsapp_taps}
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <p className="text-sm text-gray-600 dark:text-gray-400">Forms</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {totals.form_submits}
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <p className="text-sm text-gray-600 dark:text-gray-400">Emails</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {totals.email_taps}
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <p className="text-sm text-gray-600 dark:text-gray-400">Page Views</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {totals.page_views}
            </p>
          </div>
        </div>

        {/* Client table */}
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    Client
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white">
                    Total Leads
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white">
                    📞 Phone
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white">
                    💬 WhatsApp
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white">
                    📧 Forms
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white">
                    👀 Views
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {sortedSites.length === 0 ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-4 py-8 text-center text-sm text-gray-500"
                    >
                      No analytics data yet
                    </td>
                  </tr>
                ) : (
                  sortedSites.map((site) => (
                    <tr
                      key={site.siteId}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <td className="px-4 py-3">
                        <a
                          href={`/dashboard/${site.siteId}`}
                          className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
                        >
                          {site.name}
                        </a>
                      </td>
                      <td className="px-4 py-3 text-right text-sm font-bold text-gray-900 dark:text-white">
                        {site.metrics.total_leads}
                      </td>
                      <td className="px-4 py-3 text-right text-sm text-gray-700 dark:text-gray-300">
                        {site.metrics.phone_taps}
                      </td>
                      <td className="px-4 py-3 text-right text-sm text-gray-700 dark:text-gray-300">
                        {site.metrics.whatsapp_taps}
                      </td>
                      <td className="px-4 py-3 text-right text-sm text-gray-700 dark:text-gray-300">
                        {site.metrics.form_submits}
                      </td>
                      <td className="px-4 py-3 text-right text-sm text-gray-700 dark:text-gray-300">
                        {site.metrics.page_views}
                      </td>
                      <td className="px-4 py-3 text-right text-sm">
                        {site.metrics.total_leads === 0 ? (
                          <span className="rounded bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                            Low Activity
                          </span>
                        ) : site.metrics.total_leads >= 20 ? (
                          <span className="rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                            High Activity
                          </span>
                        ) : (
                          <span className="rounded bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                            Active
                          </span>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
