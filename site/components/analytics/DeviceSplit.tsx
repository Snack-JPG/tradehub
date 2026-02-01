interface DeviceSplitProps {
  devices: {
    mobile: number;
    desktop: number;
    tablet: number;
  };
}

export default function DeviceSplit({ devices }: DeviceSplitProps) {
  const total = devices.mobile + devices.desktop + devices.tablet;

  if (total === 0) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
          Device Breakdown
        </h3>
        <p className="text-sm text-gray-500">No device data yet</p>
      </div>
    );
  }

  const mobilePercent = ((devices.mobile / total) * 100).toFixed(0);
  const desktopPercent = ((devices.desktop / total) * 100).toFixed(0);
  const tabletPercent = ((devices.tablet / total) * 100).toFixed(0);

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
      <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
        Device Breakdown
      </h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📱</span>
            <span className="text-sm text-gray-700 dark:text-gray-300">Mobile</span>
          </div>
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            {mobilePercent}%
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">💻</span>
            <span className="text-sm text-gray-700 dark:text-gray-300">Desktop</span>
          </div>
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            {desktopPercent}%
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📲</span>
            <span className="text-sm text-gray-700 dark:text-gray-300">Tablet</span>
          </div>
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            {tabletPercent}%
          </span>
        </div>
      </div>
    </div>
  );
}
