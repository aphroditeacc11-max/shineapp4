
export default function Hero({ title, subtitle, ctaText, theme }: { title: string, subtitle: string, ctaText?: string, theme?: any }) {
  return (
    <section className="py-24 text-center bg-gray-50 dark:bg-gray-900/50 border-b dark:border-gray-800 transition-colors">
      <h1 className="mb-6 text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
        {title}
      </h1>
      <p className="mb-10 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        {subtitle}
      </p>
      {ctaText && (
        <button style={{ backgroundColor: 'var(--primary-color)' }} className="px-8 py-4 font-bold text-white rounded-xl hover:opacity-90 transition-all shadow-lg">
          {ctaText}
        </button>
      )}
    </section>
  );
}
      