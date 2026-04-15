import Link from "next/link"

const BUYAPP_URL = "https://buyapp.ai"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">bakusoku</h1>
          <a
            href={BUYAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
          >
            アプリを査定する
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6">
        <section className="py-20 text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            AIで作ったアプリ、
            <br />
            買い取ります。
          </h2>
          <p className="text-lg text-gray-600 mb-4 max-w-2xl mx-auto">
            Claude Code、Cursor、Manus...
            AIを使ってアプリを作れるあなたの力を、リアルなビジネス課題に活かしませんか？
          </p>
          <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
            アプリ買い取り査定は
            <a href={BUYAPP_URL} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">BuyApp.ai</a>
            と提携。査定無料、最短7日で買い取り。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BUYAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-black px-8 py-4 text-lg font-medium text-white hover:bg-gray-800 transition-colors"
            >
              無料でアプリを査定する
            </a>
            <Link
              href="/apply"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 px-8 py-4 text-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              事業課題に応募する
            </Link>
          </div>
        </section>

        <section className="py-16 border-t">
          <h3 className="text-2xl font-bold text-center mb-12">2つの入口</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border rounded-lg p-8">
              <div className="text-3xl mb-4">1</div>
              <h4 className="text-xl font-bold mb-3">アプリを売る</h4>
              <p className="text-gray-600 text-sm mb-4">
                AIで作ったアプリを査定。品質に応じて5万〜50万円以上で買い取り。
                AI自動化の仕組みまで評価するから、あなたの技術力が正当に評価されます。
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-6">
                <li>Sランク(85点〜): 50万円〜</li>
                <li>Aランク(70点〜): 15万〜50万円</li>
                <li>Bランク(50点〜): 5万〜15万円</li>
              </ul>
              <a
                href={BUYAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline"
              >
                BuyApp.ai で査定する →
              </a>
            </div>
            <div className="border rounded-lg p-8">
              <div className="text-3xl mb-4">2</div>
              <h4 className="text-xl font-bold mb-3">事業課題を解く</h4>
              <p className="text-gray-600 text-sm mb-4">
                実力を認めたビルダーには、Team Energyグループ32社のリアルな事業課題をご紹介。
                資本、ユーザー、ビジネスノウハウがつきます。
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-6">
                <li>固定報酬 + 成果連動ボーナス</li>
                <li>32社の多様な業種の課題</li>
                <li>キャナルAIがPMとして伴走</li>
              </ul>
              <Link href="/apply" className="text-blue-600 font-medium hover:underline">
                事業課題マッチングに応募する →
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 border-t">
          <h3 className="text-2xl font-bold text-center mb-12">仕組み</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "アプリを査定", desc: "BuyApp.aiでAIアプリを無料査定。技術力とAI活用度を評価。" },
              { step: "2", title: "買い取り", desc: "スコアに応じて5万〜50万円以上で買い取り。最短7日。" },
              { step: "3", title: "ビルダー認定", desc: "買い取り実績のあるビルダーに、事業課題マッチングの権利を付与。" },
              { step: "4", title: "事業課題に挑戦", desc: "Team Energyグループのリアルな課題を解決。報酬 + 事業化支援。" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  {item.step}
                </div>
                <h4 className="font-bold mb-2 text-sm">{item.title}</h4>
                <p className="text-gray-600 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 text-center border-t">
          <h3 className="text-2xl font-bold mb-4">AIで作れるなら、まず査定してみてください。</h3>
          <p className="text-gray-600 mb-8">
            個人の技術力を、事業の力に変える場所。
          </p>
          <a
            href={BUYAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-black px-8 py-4 text-lg font-medium text-white hover:bg-gray-800 transition-colors"
          >
            無料でアプリを査定する
          </a>
        </section>
      </main>

      <footer className="border-t py-8 text-center text-sm text-gray-500">
        <p>bakusoku by キャナルAI — Team Energy Group</p>
        <p className="mt-1">
          アプリ買い取り査定:
          <a href={BUYAPP_URL} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
            BuyApp.ai
          </a>
        </p>
      </footer>
    </div>
  )
}
