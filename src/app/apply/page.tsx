import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

// TODO: Google Formsの公開URLに差し替え
const GOOGLE_FORM_URL =
  process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || ""

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link href="/" className="text-xl font-bold">
            bakusoku
          </Link>
        </div>
      </header>

      <main className="max-w-xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-2">アプリを応募する</h2>
        <p className="text-gray-600 mb-8">
          AIで作ったアプリの情報を教えてください。内容を確認し、3営業日以内にご連絡いたします。
        </p>

        <Card>
          <CardContent className="pt-6 space-y-6">
            <div className="space-y-3">
              <h3 className="font-semibold">応募に必要なもの</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2"><span>1.</span>デプロイ済みのアプリURL</li>
                <li className="flex gap-2"><span>2.</span>GitHubリポジトリ（あれば）</li>
                <li className="flex gap-2"><span>3.</span>使用したAIツール名</li>
                <li className="flex gap-2"><span>4.</span>アプリの説明</li>
                <li className="flex gap-2"><span>5.</span>連絡先メールアドレス</li>
              </ul>
            </div>

            {GOOGLE_FORM_URL ? (
              <>
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center text-lg py-4 rounded-md bg-black text-white font-medium hover:bg-gray-800 transition-colors"
                >
                  応募フォームを開く
                </a>
                <p className="text-xs text-center text-gray-400">
                  Googleフォームが開きます
                </p>
              </>
            ) : (
              <div className="text-center py-4">
                <p className="text-gray-500 mb-2">フォームを準備中です。</p>
                <a
                  href="mailto:integral0519@gmail.com?subject=bakusoku応募"
                  className="text-blue-600 underline text-sm"
                >
                  メールで応募する →
                </a>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
