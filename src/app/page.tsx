import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">bakusoku</h1>
          <Link href="/apply">
            <Button>応募する</Button>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6">
        <section className="py-20 text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            AIで作ったアプリ、
            <br />
            買い取ります。
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Claude Code、Cursor、Manus...
            AIを使ってアプリを作れるあなたの力を、リアルなビジネス課題に活かしませんか？
          </p>
          <Link href="/apply">
            <Button size="lg" className="text-lg px-8 py-6">
              アプリを応募する
            </Button>
          </Link>
        </section>

        <section className="py-16 border-t">
          <h3 className="text-2xl font-bold text-center mb-12">仕組み</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h4 className="font-bold mb-2">アプリを応募</h4>
              <p className="text-gray-600 text-sm">
                AIで作ったアプリのURL、GitHubリポ、使ったツールを送ってください。
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h4 className="font-bold mb-2">レビュー & 買い取り</h4>
              <p className="text-gray-600 text-sm">
                チームがアプリを評価。品質に応じて1万〜50万円で買い取ります。
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h4 className="font-bold mb-2">事業課題にチャレンジ</h4>
              <p className="text-gray-600 text-sm">
                実力を認めたビルダーには、グループ企業のリアルな事業課題をご紹介。
                資本とユーザーがつきます。
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 border-t">
          <h3 className="text-2xl font-bold text-center mb-8">求めるもの</h3>
          <div className="max-w-xl mx-auto space-y-4">
            {[
              "デプロイされて動作するアプリがある",
              "基本的なエラーハンドリングがある",
              "データが永続化されている（リロードで消えない）",
              "README or 説明があり、何をするアプリか分かる",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="text-green-500 font-bold mt-0.5">✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 text-center border-t">
          <h3 className="text-2xl font-bold mb-4">AIで作れるなら、応募してください。</h3>
          <p className="text-gray-600 mb-8">
            個人の技術力を、事業の力に変える場所。
          </p>
          <Link href="/apply">
            <Button size="lg" className="text-lg px-8 py-6">
              応募する
            </Button>
          </Link>
        </section>
      </main>

      <footer className="border-t py-8 text-center text-sm text-gray-500">
        <p>bakusoku by キャナルAI — Team Energy Group</p>
      </footer>
    </div>
  )
}
