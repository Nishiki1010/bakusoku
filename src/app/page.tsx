import Link from "next/link"

const BUYAPP_URL = "https://buyapp.ai"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#e2e8f0]">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold tracking-tight font-[family-name:var(--font-montserrat)]">bakusoku</h1>
            <span className="text-[10px] text-[#5a6478] border border-[#e2e8f0] rounded px-1.5 py-0.5 hidden sm:inline">by Canal AI</span>
          </div>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center rounded-none bg-[#0369a1] px-5 py-2 text-sm font-medium text-white hover:bg-[#0284c7] transition-all"
          >
            チャレンジする
          </Link>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#f0f9ff] to-white">
          <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 20% 50%, #e0f2fe 0%, transparent 50%), radial-gradient(circle at 80% 20%, #ede9fe 0%, transparent 40%)" }} />
          <div className="max-w-5xl mx-auto px-6 py-28 sm:py-36 text-center relative">
            <div className="inline-flex items-center gap-2 rounded-none border border-[#0ea5e9]/30 bg-white px-4 py-1.5 text-xs font-medium text-[#0369a1] mb-8 shadow-sm">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0ea5e9] animate-pulse" />
              Builder Challenge 受付中
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-[1.1] text-[#1a1a2e]">
              <span className="block">「作って終わり」を、</span>
              <span className="block">終わりにする。</span>
            </h2>
            <p className="text-xl sm:text-2xl text-[#5a6478] mb-3 max-w-2xl mx-auto font-medium">
              腕試し、歓迎。
            </p>
            <p className="text-lg text-[#94a3b8] mb-12 max-w-xl mx-auto leading-relaxed">
              AIで作ったアプリを見せてください。
              <br className="hidden sm:block" />
              フィードバックします。買い取ります。仕事も渡します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center rounded-none bg-[#0369a1] px-10 py-4 text-lg font-semibold text-white hover:bg-[#0284c7] transition-all shadow-lg shadow-[#0369a1]/20"
              >
                フィードバックをもらう
              </Link>
              <a
                href={BUYAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-none border-2 border-[#e2e8f0] bg-white px-10 py-4 text-lg font-semibold text-[#1a1a2e] hover:border-[#0ea5e9] transition-all"
              >
                アプリを査定する
              </a>
            </div>
          </div>
        </section>

        {/* 数字バー */}
        <section className="border-y border-[#e2e8f0] bg-white">
          <div className="max-w-5xl mx-auto px-6 py-12">
            <div className="grid grid-cols-3 divide-x divide-[#e2e8f0]">
              {[
                { number: "5万〜50万円+", label: "アプリ買い取り額" },
                { number: "32社", label: "グループ企業の課題" },
                { number: "最短7日", label: "買い取りまで" },
              ].map((item) => (
                <div key={item.label} className="text-center px-4">
                  <div className="text-2xl sm:text-3xl font-black tracking-tight text-[#0369a1] font-[family-name:var(--font-montserrat)]">{item.number}</div>
                  <div className="text-xs sm:text-sm text-[#94a3b8] mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3ステップ */}
        <section className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#0ea5e9] tracking-widest uppercase mb-3 font-[family-name:var(--font-montserrat)]">How it works</p>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1a1a2e]">仕組みはシンプル</h3>
            <p className="text-[#94a3b8] mt-4">何度でも提出OK。不合格はありません。</p>
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
              <div key={item.step} className="bg-[#f0f9ff] rounded-none p-8 border border-[#e0f2fe] hover:border-[#0ea5e9]/40 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-[#0369a1] text-white rounded-none flex items-center justify-center text-lg">
                    {item.icon}
                  </div>
                  <span className="text-sm font-[family-name:var(--font-montserrat)] text-[#94a3b8]">{item.step}</span>
                </div>
                <h4 className="text-lg font-bold mb-3 text-[#1a1a2e]">{item.title}</h4>
                <p className="text-[#5a6478] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 2つの価値 */}
        <section className="bg-gradient-to-b from-[#0a1628] to-[#0f1d32] text-white">
          <div className="max-w-5xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-[#0ea5e9] tracking-widest uppercase mb-3 font-[family-name:var(--font-montserrat)]">What you get</p>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">認定ビルダーが得られるもの</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-none bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
                <div className="inline-flex items-center rounded-none bg-[#0ea5e9]/20 px-3 py-1 text-xs font-medium text-[#0ea5e9] mb-6">
                  報酬
                </div>
                <h4 className="text-2xl font-bold mb-4">アプリ買い取り</h4>
                <p className="text-[#94a3b8] mb-6 leading-relaxed">
                  提出したアプリの品質に応じて、5万〜50万円以上で買い取ります。
                  BuyApp.ai提携。査定無料、最短7日。
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <div>
                    <div className="text-2xl font-black font-[family-name:var(--font-montserrat)]">5万〜50万円<span className="text-base font-normal text-[#94a3b8]">以上</span></div>
                    <div className="text-xs text-[#5a6478] mt-1">品質に応じた買い取り額</div>
                  </div>
                </div>
                <a
                  href={BUYAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium mt-6 text-[#0ea5e9] hover:text-[#38bdf8] transition-colors"
                >
                  BuyApp.ai について <span aria-hidden="true">→</span>
                </a>
              </div>
              <div className="rounded-none bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
                <div className="inline-flex items-center rounded-none bg-[#7c3aed]/20 px-3 py-1 text-xs font-medium text-[#a78bfa] mb-6">
                  仕事
                </div>
                <h4 className="text-2xl font-bold mb-4">事業課題マッチング</h4>
                <p className="text-[#94a3b8] mb-6 leading-relaxed">
                  Team Energyグループ32社のリアルな事業課題をご紹介。
                  固定報酬 + 成果連動ボーナス。キャナルAIがPMとして伴走します。
                </p>
                <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                  <div>
                    <div className="text-lg font-bold">固定報酬</div>
                    <div className="text-xs text-[#5a6478]">+ 成果連動ボーナス</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold font-[family-name:var(--font-montserrat)]">32社</div>
                    <div className="text-xs text-[#5a6478]">グループ企業</div>
                  </div>
                </div>
                <Link href="/apply" className="inline-flex items-center gap-1 text-sm font-medium mt-6 text-[#a78bfa] hover:text-[#c4b5fd] transition-colors">
                  募集中の課題を見る <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 事業課題チラ見せ */}
        <section className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#0ea5e9] tracking-widest uppercase mb-3 font-[family-name:var(--font-montserrat)]">Open Challenges</p>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1a1a2e]">募集中の課題</h3>
            <p className="text-[#94a3b8] mt-4">認定ビルダーのみ詳細を閲覧できます</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { industry: "飲食", title: "予約管理アプリ", skills: ["Next.js", "LINE API"], emoji: "🍽" },
              { industry: "不動産", title: "顧客管理CRM", skills: ["React", "Supabase"], emoji: "🏠" },
              { industry: "エネルギー", title: "データ集計ダッシュボード", skills: ["Python", "Next.js"], emoji: "⚡" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-none border border-[#e2e8f0] p-6 hover:border-[#0ea5e9]/40 hover:shadow-md transition-all">
                <div className="text-3xl mb-4">{item.emoji}</div>
                <div className="text-xs font-semibold text-[#0ea5e9] uppercase tracking-wider mb-2 font-[family-name:var(--font-montserrat)]">{item.industry}</div>
                <h4 className="text-lg font-bold mb-4 text-[#1a1a2e]">{item.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span key={skill} className="inline-flex rounded-none bg-[#f0f9ff] border border-[#e0f2fe] px-3 py-1 text-xs font-medium text-[#0369a1]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* レベルシステム */}
        <section className="bg-[#f7f9fc] border-y border-[#e2e8f0]">
          <div className="max-w-5xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-[#0ea5e9] tracking-widest uppercase mb-3 font-[family-name:var(--font-montserrat)]">Level System</p>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1a1a2e]">レベルシステム</h3>
              <p className="text-[#94a3b8] mt-4">提出するたびにレベルアップ。焦らず、自分のペースで。</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { level: "Lv.1", name: "チャレンジャー", desc: "アプリを提出した", bg: "bg-white border-[#e2e8f0]", text: "text-[#1a1a2e]", accent: "text-[#94a3b8]", levelColor: "text-[#94a3b8]" },
                { level: "Lv.2", name: "ビルダー", desc: "デプロイ済み・基本動作OK", bg: "bg-[#f0f9ff] border-[#e0f2fe]", text: "text-[#1a1a2e]", accent: "text-[#5a6478]", levelColor: "text-[#0ea5e9]" },
                { level: "Lv.3", name: "認定ビルダー", desc: "品質基準クリア", bg: "bg-[#0369a1] border-[#0369a1]", text: "text-white", accent: "text-white/60", levelColor: "text-[#0ea5e9]" },
                { level: "Lv.4", name: "シニアビルダー", desc: "案件を完遂", bg: "bg-[#0a1628] border-[#0a1628]", text: "text-white", accent: "text-white/50", levelColor: "text-[#0ea5e9]" },
              ].map((item, i) => (
                <div key={item.level} className={`rounded-none border p-6 ${item.bg} relative overflow-hidden`}>
                  <div className={`absolute top-3 right-3 text-4xl font-black opacity-5 ${item.text} font-[family-name:var(--font-montserrat)]`}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className={`text-xs font-[family-name:var(--font-montserrat)] font-semibold mb-2 ${item.levelColor}`}>{item.level}</div>
                  <div className={`text-lg font-bold mb-1 ${item.text}`}>{item.name}</div>
                  <div className={`text-xs ${item.accent}`}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-[#f0f9ff]" />
          <div className="max-w-5xl mx-auto px-6 py-28 text-center relative">
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-[#1a1a2e]">
              まずは、見せてください。
            </h3>
            <p className="text-lg text-[#94a3b8] mb-10 max-w-md mx-auto">
              どんなレベルでもOK。フィードバックから始まります。
            </p>
            <Link
              href="/apply"
              className="inline-flex items-center justify-center rounded-none bg-[#0369a1] px-10 py-4 text-lg font-semibold text-white hover:bg-[#0284c7] transition-all shadow-lg shadow-[#0369a1]/20"
            >
              フィードバックをもらう
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#e2e8f0] bg-white py-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold font-[family-name:var(--font-montserrat)] text-[#1a1a2e]">bakusoku</span>
              <span className="text-xs text-[#94a3b8]">by キャナルAI — Team Energy Group</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-[#94a3b8]">
              <a href={BUYAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#0369a1] transition-colors">
                BuyApp.ai
              </a>
              <a href="https://canal-ai.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0369a1] transition-colors">
                Canal AI
              </a>
              <a href="https://teamenergy.co.jp" target="_blank" rel="noopener noreferrer" className="hover:text-[#1F594A] transition-colors">
                Team Energy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
