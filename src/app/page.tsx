import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Ek Onkar symbol */}
      <div className="text-center text-8xl pb-10 text-slate-900 dark:text-slate-100">
        ੴ
      </div>

      {/* Links to 5 Banis */}
      <div className="grid grid-cols-1 gap-3 text-center">
        <Link
          href="/japji-sahib"
          className="text-xl text-blue-600 dark:text-blue-400 underline"
        >
          Japji Sahib
        </Link>
        <Link href="#" className="text-xl">
          Jaap Sahib (Coming Soon)
        </Link>
        <Link href="#" className="text-xl">
          Tav-Prasad Savaiye (Coming Soon)
        </Link>
        <Link href="#" className="text-xl">
          Chaupai Sahib (Coming Soon)
        </Link>
        <Link href="#" className="text-xl">
          Anand Sahib (Coming Soon)
        </Link>
      </div>
    </div>
  );
}
