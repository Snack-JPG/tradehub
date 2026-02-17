import { notFound } from 'next/navigation';
import {
  getSiteInfo,
  getMetricsSummary,
  getSourceBreakdown,
  getDeviceBreakdown,
  getDailyLeadTrend,
} from '@/lib/analytics';
import MetricCard from '@/components/analytics/MetricCard';
import SourceBreakdown from '@/components/analytics/SourceBreakdown';
import DeviceSplit from '@/components/analytics/DeviceSplit';
import LeadChart from '@/components/analytics/LeadChart';
import ROICalculator from '@/components/analytics/ROICalculator';

interface PageProps {
  params: Promise<{ siteId: string }>;
  searchParams: Promise<{ period?: string }>;
}

export default async function DashboardPage({ params, searchParams }: PageProps) {
  const { siteId } = await params;
  const { period = 'this-month' } = await searchParams;

  // Get site info
  const siteInfo = await getSiteInfo(siteId);
  if (!siteInfo) {
    notFound();
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

  // Fetch analytics data
  const [metrics, sources, devices, dailyTrend] = await Promise.all([
    getMetricsSummary(siteId, startDate, endDate),
    getSourceBreakdown(siteId, startDate, endDate),
    getDeviceBreakdown(siteId, startDate, endDate),
    getDailyLeadTrend(siteId, startDate, endDate),
  ]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
        <div className="container mx-auto max-w-7xl px-4 py-6">
          <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            {siteInfo.name}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Your website analytics for {periodLabel}
          </p>

          {/* Period selector */}
          <div className="mt-4 flex gap-2">
            <a
              href={`/dashboard/${siteId}?period=this-month`}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                period === 'this-month'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              This Month
            </a>
            <a
              href={`/dashboard/${siteId}?period=last-month`}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                period === 'last-month'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Last Month
            </a>
            <a
              href={`/dashboard/${siteId}?period=last-90-days`}
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
        {/* Key metrics */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <MetricCard
            icon="📞"
            label="Phone Taps"
            value={metrics.phone_taps}
          />
          <MetricCard
            icon="💬"
            label="WhatsApp Taps"
            value={metrics.whatsapp_taps}
          />
          <MetricCard
            icon="📧"
            label="Form Submissions"
            value={metrics.form_submits}
          />
          <MetricCard
            icon="✉️"
            label="Email Taps"
            value={metrics.email_taps}
          />
          <MetricCard
            icon="📍"
            label="Direction Clicks"
            value={metrics.directions_taps}
          />
          <MetricCard
            icon="👀"
            label="Page Views"
            value={metrics.page_views}
          />
        </div>

        {/* Total leads highlight */}
        <div className="mb-8">
          <MetricCard
            icon="🎯"
            label="Total Leads"
            value={metrics.total_leads}
            highlight
          />
        </div>

        {/* ROI Calculator */}
        <div className="mb-8">
          <ROICalculator totalLeads={metrics.total_leads} />
        </div>

        {/* Charts grid */}
        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <SourceBreakdown sources={sources} />
          <DeviceSplit devices={devices} />
        </div>

        {/* Daily trend */}
        <div className="mb-8">
          <LeadChart data={dailyTrend} />
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500">
          <p>
            Powered by{' '}
            <a
              href="https://www.tradehub.directory"
              className="text-blue-500 hover:underline"
            >
              TradeHub Analytics
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
