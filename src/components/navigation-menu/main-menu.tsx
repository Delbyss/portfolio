/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MHmzPUcZGEX
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from 'next/link';
export default function MainMenu() {
  return (
    <nav className="bg-slate-200 bg-opacity-70 backdrop-filter backdrop-blur-lg p-4 text-center sticky top-0 z-40">
      <ul className="flex justify-center space-x-10">
        <li className="group">
          <Link
            href="/"
            className="text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-200"
          >
            Accueil
          </Link>
        </li>
        <li className="group relative">
          <Link
            href="/experience"
            className="text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-200"
          >
            Expérience
          </Link>
        </li>
        <li className="group">
          <Link
            href="/veille"
            className="text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-200"
          >
            Veille
          </Link>
        </li>
        <li className="group">
          <Link
            href="/documents"
            className="text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-200"
          >
            Document
          </Link>
        </li>
      </ul>
    </nav>
  )
}