import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 gap-6 text-center">
        <Link
          href="/japji-sahib"
          className="text-2xl font-medium text-slate-700 dark:text-slate-300 hover:underline"
        >
          Japji Sahib
        </Link>
        <Link href="#" className="text-xl text-gray-500">
          Jaap Sahib (Coming Soon)
        </Link>
        <Link href="#" className="text-xl text-gray-500">
          Tav-Prasad Savaiye (Coming Soon)
        </Link>
        <Link href="#" className="text-xl text-gray-500">
          Chaupai Sahib (Coming Soon)
        </Link>
        <Link href="#" className="text-xl text-gray-500">
          Anand Sahib (Coming Soon)
        </Link>
      </div>
    </div>
  );
}
