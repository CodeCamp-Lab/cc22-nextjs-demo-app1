import Link from 'next/link';
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-9xl font-extrabold text-slate-100 absolute -z-10 select-none">
        404
      </h1>
      <div className="space-y-6 relative">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          ไม่พบหน้านี้
        </h2>
        <p className="text-lg text-slate-600 max-w-md mx-auto">
          ขออภัย เราไม่พบหน้าที่คุณกำลังมองหา หน้าไฟล์อาจถูกย้ายหรือลบไปแล้ว
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg shadow-blue-200"
          >
            กลับหน้าหลัก
          </Link>
        </div>
      </div>
    </div>
  );
}
