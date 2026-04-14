import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const BUYAPP_URL = "https://buyapp.ai"
const GOOGLE_FORM_URL = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || ""

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

      <main className="max-w-2xl mx-auto px-6 py-16 space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">応募する</h2>
          <p className="text-gray-600">
            2つの方法でAIビルダーとして参加できます。
          </p>
        </div>

        <Card>
          <CardContent className="pt-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">1</div>
              <h3 className="text-lg font-bold">アプリを売る</h3>
            </div>
            <p className="text-gray-600 text-sm">
              AIで作ったアプリをBuyApp.aiで査定。品質に応じて5万〜50万円以上で買い取り。
              査定無料、最短7日。
            </p>
            <a
              href={BUYAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center text-lg py-4 rounded-md bg-black text-white font-medium hover:bg-gray-800 transition-colors"
            >
              BuyApp.ai で無料査定する
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">2</div>
              <h3 className="text-lg font-bold">事業課題マッチング</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Team Energyグループ32社のリアルな事業課題に挑戦。
              キャナルAIがPMとして伴走し、資本とユーザーがつきます。
              買い取り実績のあるビルダー優先。
            </p>
            {GOOGLE_FORM_URL ? (
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center text-lg py-4 rounded-md border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                事業課題マッチングに応募する
              </a>
            ) : (
              <a
                href="mailto:integral0519@gmail.com?subject=bakusoku 事業課題マッチング応募"
                className="block w-full text-center text-lg py-4 rounded-md border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                メールで応募する
              </a>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
