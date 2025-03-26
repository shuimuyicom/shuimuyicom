import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-bg-50 dark:bg-ink-900 mt-auto border-t border-bg-200 dark:border-ink-700">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="text-center text-sm text-ink-400 dark:text-ink-500">
          © {currentYear} 水木易. 保留所有权利.
        </div>
      </div>
    </footer>
  );
} 