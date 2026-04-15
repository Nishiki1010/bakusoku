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
          <p className="text-sm font-medium text-gray-500 tracking-widest uppercase mb-2">
            Builder Challenge
          </p>
          <h2 className="text-2xl font-bold mb-2">アプリを提出する</h2>
          <p className="text-gray-600">
            どんなレベルでもOK。フィードバックから始まります。
          </p>
        </div>

        <Card>
          <CardContent className="pt-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">1</div>
              <h3 className="text-lg font-bold">フィードバックをもらう</h3>
            </div>
            <p className="text-gray-600 text-sm">
              AIで作ったアプリのURLを教えてください。改善ポイントと次のステップをお伝えします。
              何度でも再提出OK。不合格はありません。
            </p>
            {GOOGLE_FORM_URL ? (
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center text-lg py-4 rounded-md bg-black text-white font-medium hover:bg-gray-800 transition-colors"
              >
                アプリを提出する
              </a>
            ) : (
              <a
                href="mailto:integral0519@gmail.com?subject=bakusoku ビルダーチャレンジ提出"
                className="block w-full text-center text-lg py-4 rounded-md bg-black text-white font-medium hover:bg-gray-800 transition-colors"
              >
                メールで提出する
              </a>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">2</div>
              <h3 className="text-lg font-bold">アプリを査定・買い取り</h3>
            </div>
            <p className="text-gray-600 text-sm">
              BuyApp.aiで技術査定。品質に応じて5万〜50万円以上で買い取ります。
              査定無料、最短7日。
            </p>
            <a
              href={BUYAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center text-lg py-4 rounded-md border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              BuyApp.ai で査定する
            </a>
          </CardContent>
        </Card>

        <div className="pt-4 border-t">
          <h3 className="font-bold mb-4">募集中の事業課題</h3>
          <p className="text-sm text-gray-500 mb-4">認定ビルダー（Lv.3以上）のみ詳細を閲覧・応募できます</p>
          <div className="space-y-3">
            {[
              { industry: "飲食", title: "予約管理アプリ", skills: "Next.js / LINE API" },
              { industry: "不動産", title: "顧客管理CRM", skills: "React / Supabase" },
              { industry: "エネルギー", title: "データ集計ダッシュボード", skills: "Python / Next.js" },
            ].map((item) => (
              <div key={item.title} className="border rounded-lg p-4 flex items-center justify-between">
                <div>
                  <div className="text-xs font-medium text-gray-500">{item.industry}</div>
                  <div className="font-bold text-sm">{item.title}</div>
                </div>
                <div className="text-xs text-gray-400">{item.skills}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
