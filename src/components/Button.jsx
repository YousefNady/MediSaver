export default function Button({ children, variant = 'primary', href, className = '', ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 text-sm'
  const variants = {
    primary: 'bg-brand-gradient text-white shadow-brand hover:shadow-lg hover:scale-[1.02] px-6 py-3',
    secondary: 'bg-white dark:bg-gray-900 text-brand-700 dark:text-brand-400 border border-brand-200 dark:border-brand-500/30 hover:border-brand-400 dark:hover:border-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 px-6 py-3',
    outline: 'border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 px-6 py-3',
    ghost: 'text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 hover:bg-brand-50 dark:hover:bg-brand-500/10 px-4 py-2',
  }
  const cls = `${base} ${variants[variant]} ${className}`

  if (href) {
    return <a href={href} className={cls} {...props}>{children}</a>
  }
  return <button className={cls} {...props}>{children}</button>
}