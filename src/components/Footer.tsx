"use client";

const Footer = () => {
  return (
    <footer className="border-t bg-gray-50 dark:bg-gray-800 py-8 w-full">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6">
            <a href="/disclaimer" className="hover:underline">
              Disclaimer
            </a>
            <a
              href="https://github.com/pragunbhutani/nitnem/issues/new"
              className="hover:underline"
              target="_blank"
            >
              Suggest Improvements
            </a>
          </div>

          <p className="text-2xl">ਸਤਿਨਾਮ ਵਾਹਿਗੁਰੂ</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
