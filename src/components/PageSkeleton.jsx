/**
 * Generic page skeleton shown by <Suspense> while a lazy-loaded route
 * chunk is downloading. Mimics the common "header + grid of cards" shape
 * used across MediSaver's pages so the swap-in feels seamless rather
 * than a blank flash.
 */
export default function PageSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Header block */}
      <div className="bg-gradient-to-br from-brand-50 via-white to-teal-50/30 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center space-y-4">
          <div className="h-5 w-28 bg-gray-200 dark:bg-gray-800 rounded-full mx-auto" />
          <div className="h-9 w-2/3 bg-gray-200 dark:bg-gray-800 rounded-lg mx-auto" />
          <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-800 rounded mx-auto" />
        </div>
      </div>

      {/* Card grid block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-gray-100 dark:bg-gray-900 rounded-2xl h-40" />
          ))}
        </div>
      </div>
    </div>
  )
}
