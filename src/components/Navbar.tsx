
import Link from 'next/link';

export default function Navbar({ projectName, pages, togglePosition = 'right', theme }: { projectName: string, pages: any[], togglePosition?: 'left' | 'right', theme?: any }) {
  const isDark = theme?.darkMode;
  
  return (
    <nav className={"flex items-center justify-between p-6 bg-white dark:bg-gray-800 border-b dark:border-gray-700 transition-colors " + (togglePosition === 'left' ? 'flex-row-reverse' : 'flex-row')}>
      <div className="flex items-center gap-6">
        <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">{projectName}</Link>
        <div className="hidden md:flex space-x-4">
          {pages.map((page: any, i: number) => (
            <Link key={i} href={page.route} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              {page.title}
            </Link>
          ))}
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-yellow-400">
          {isDark ? '🌙' : '☀️'}
        </div>
      </div>
    </nav>
  );
}
      