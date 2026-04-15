import Link from "next/link"

export default function ThanksPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link href="/" className="text-xl font-bold">
            bakusoku
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="text-5xl mb-6">✓</div>
          <h2 className="text-2xl font-bold mb-4">提出ありがとうございます</h2>
          <p className="text-gray-600 mb-2">
            内容を確認の上、3営業日以内にフィードバックをお送りします。
          </p>
          <p className="text-gray-500 text-sm mb-8">
            BuyApp.aiでアプリを査定して、買い取り価格も確認してみてください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://buyapp.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
            >
              BuyApp.ai でアプリを査定する
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              トップに戻る
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
