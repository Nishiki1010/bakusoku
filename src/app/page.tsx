import Link from "next/link"

const BUYAPP_URL = "https://buyapp.ai"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight">bakusoku</h1>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center rounded-full bg-black px-5 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-all hover:scale-105"
          >
            チャレンジする
          </Link>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-10%,rgba(0,0,0,0.03)_0%,transparent_50%)]" />
          <div className="max-w-5xl mx-auto px-6 py-28 sm:py-36 text-center relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-medium text-gray-600 mb-8 shadow-sm">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Builder Challenge 受付中
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-[1.1]">
              <span className="block">「作って終わり」を、</span>
              <span className="block">終わりにする。</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 mb-3 max-w-2xl mx-auto font-medium">
              腕試し、歓迎。
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-xl mx-auto leading-relaxed">
              AIで作ったアプリを見せてください。
              <br className="hidden sm:block" />
              フィードバックします。買い取ります。仕事も渡します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center rounded-full bg-black px-10 py-4 text-lg font-semibold text-white hover:bg-gray-800 transition-all hover:scale-105 shadow-lg shadow-black/10"
              >
                フィードバックをもらう
              </Link>
              <a
                href={BUYAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border-2 border-gray-200 bg-white px-10 py-4 text-lg font-semibold text-gray-700 hover:border-gray-400 transition-all"
              >
                アプリを査定する
              </a>
            </div>
          </div>
        </section>

        {/* 数字で見せる */}
        <section className="border-y border-gray-200 bg-white">
          <div className="max-w-5xl mx-auto px-6 py-12">
            <div className="grid grid-cols-3 divide-x divide-gray-200">
              {[
                { number: "5万〜50万円+", label: "アプリ買い取り額" },
                { number: "32社", label: "グループ企業の課題" },
                { number: "最短7日", label: "買い取りまで" },
              ].map((item) => (
                <div key={item.label} className="text-center px-4">
                  <div className="text-2xl sm:text-3xl font-black tracking-tight">{item.number}</div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3ステップ */}
        <section className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-3">How it works</p>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">仕組みはシンプル</h3>
            <p className="text-gray-500 mt-4">何度でも提出OK。不合格はありません。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "アプリを提出する",
                desc: "URLを貼るだけ。どんなレベルでもOK。まずは見せてください。",
                icon: "↑",
              },
              {
                step: "02",
                title: "フィードバックをもらう",
                desc: "改善ポイントと次のレベルへのヒントをお伝えします。何度でも再提出できます。",
                icon: "◎",
              },
              {
                step: "03",
                title: "ビルダー認定",
                desc: "認定ビルダーには、アプリ買い取り・事業課題へのアクセス・報酬あり案件をご紹介。",
                icon: "★",
              },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center text-lg">
                    {item.icon}
                  </div>
                  <span className="text-sm font-mono text-gray-400">{item.step}</span>
                </div>
                <h4 className="text-lg font-bold mb-3">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 2つの価値 */}
        <section className="bg-black text-white">
          <div className="max-w-5xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-3">What you get</p>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">認定ビルダーが得られるもの</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
                <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium mb-6">
                  報酬
                </div>
                <h4 className="text-2xl font-bold mb-4">アプリ買い取り</h4>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  提出したアプリの品質に応じて、5万〜50万円以上で買い取ります。
                  BuyApp.ai提携。査定無料、最短7日。
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <div>
                    <div className="text-2xl font-black">5万〜50万円<span className="text-base font-normal text-gray-400">以上</span></div>
                    <div className="text-xs text-gray-500 mt-1">品質に応じた買い取り額</div>
                  </div>
                </div>
                <a
                  href={BUYAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium mt-6 text-white hover:text-gray-300 transition-colors"
                >
                  BuyApp.ai について <span aria-hidden="true">→</span>
                </a>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
                <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium mb-6">
                  仕事
                </div>
                <h4 className="text-2xl font-bold mb-4">事業課題マッチング</h4>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Team Energyグループ32社のリアルな事業課題をご紹介。
                  固定報酬 + 成果連動ボーナス。キャナルAIがPMとして伴走します。
                </p>
                <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                  <div>
                    <div className="text-lg font-bold">固定報酬</div>
                    <div className="text-xs text-gray-500">+ 成果連動ボーナス</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold">32社</div>
                    <div className="text-xs text-gray-500">グループ企業</div>
                  </div>
                </div>
                <Link href="/apply" className="inline-flex items-center gap-1 text-sm font-medium mt-6 text-white hover:text-gray-300 transition-colors">
                  募集中の課題を見る <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 事業課題チラ見せ */}
        <section className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-3">Open Challenges</p>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">募集中の課題</h3>
            <p className="text-gray-500 mt-4">認定ビルダーのみ詳細を閲覧できます</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { industry: "飲食", title: "予約管理アプリ", skills: ["Next.js", "LINE API"], emoji: "🍽" },
              { industry: "不動産", title: "顧客管理CRM", skills: ["React", "Supabase"], emoji: "🏠" },
              { industry: "エネルギー", title: "データ集計ダッシュボード", skills: ["Python", "Next.js"], emoji: "⚡" },
            ].map((item) => (
              <div key={item.title} className="group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-gray-200 transition-all">
                <div className="text-3xl mb-4">{item.emoji}</div>
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{item.industry}</div>
                <h4 className="text-lg font-bold mb-4">{item.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span key={skill} className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* レベルシステム */}
        <section className="bg-white border-y border-gray-100">
          <div className="max-w-5xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-3">Level System</p>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">レベルシステム</h3>
              <p className="text-gray-500 mt-4">提出するたびにレベルアップ。焦らず、自分のペースで。</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { level: "Lv.1", name: "チャレンジャー", desc: "アプリを提出した", bg: "bg-gray-50 border-gray-200", text: "text-gray-900", accent: "text-gray-400" },
                { level: "Lv.2", name: "ビルダー", desc: "デプロイ済み・基本動作OK", bg: "bg-gray-100 border-gray-300", text: "text-gray-900", accent: "text-gray-500" },
                { level: "Lv.3", name: "認定ビルダー", desc: "品質基準クリア", bg: "bg-gray-900 border-gray-700", text: "text-white", accent: "text-gray-400" },
                { level: "Lv.4", name: "シニアビルダー", desc: "案件を完遂", bg: "bg-black border-black", text: "text-white", accent: "text-gray-500" },
              ].map((item, i) => (
                <div key={item.level} className={`rounded-2xl border p-6 ${item.bg} relative overflow-hidden`}>
                  <div className={`absolute top-3 right-3 text-4xl font-black opacity-5 ${item.text}`}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className={`text-xs font-mono mb-2 ${item.accent}`}>{item.level}</div>
                  <div className={`text-lg font-bold mb-1 ${item.text}`}>{item.name}</div>
                  <div className={`text-xs ${item.accent}`}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_110%,rgba(0,0,0,0.04)_0%,transparent_50%)]" />
          <div className="max-w-5xl mx-auto px-6 py-28 text-center relative">
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              まずは、見せてください。
            </h3>
            <p className="text-lg text-gray-500 mb-10 max-w-md mx-auto">
              どんなレベルでもOK。フィードバックから始まります。
            </p>
            <Link
              href="/apply"
              className="inline-flex items-center justify-center rounded-full bg-black px-10 py-4 text-lg font-semibold text-white hover:bg-gray-800 transition-all hover:scale-105 shadow-lg shadow-black/10"
            >
              フィードバックをもらう
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 bg-white py-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-500">
            bakusoku by キャナルAI — Team Energy Group
          </div>
          <div className="text-sm text-gray-400">
            アプリ買い取り査定:
            <a href={BUYAPP_URL} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black ml-1 transition-colors">
              BuyApp.ai
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
