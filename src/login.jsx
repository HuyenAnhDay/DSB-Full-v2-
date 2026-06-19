import { useState } from 'react';

const COMPASSES = [
  { id: "ilead",    label: "iLead",    question: "Học gì để giỏi hơn?",       icon: "school",         color: "#8B2E8F" },
  { id: "dwork",    label: "dWork",    question: "Hôm nay làm gì với KH nào?", icon: "rocket_launch",  color: "#0077ED" },
  { id: "dlink",    label: "dLink",    question: "Cần ai để làm tốt hơn?",     icon: "hub",            color: "#00C97D" },
  { id: "daccount", label: "dAccount", question: "Đang ở đâu, tạo ra gì?",     icon: "trending_up",    color: "#FF8C33" }
];

function Icon({ name, size = 20, filled = false, className = "" }) {
  const fvs = `'FILL' ${filled ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' 24`;
  return (
    <span className={`material-symbols-outlined select-none ${className}`}
      style={{ fontVariationSettings: fvs, fontSize: size, lineHeight: 1 }}>
      {name}
    </span>
  );
}

export function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState("hoanganh@vndirect.com.vn");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [remember, setRemember] = useState(true);
  const [busy, setBusy] = useState(false);
  const [busyLabel, setBusyLabel] = useState("");
  const [success, setSuccess] = useState(false);

  const signIn = (label = "Đăng nhập") => {
    setBusy(true);
    setBusyLabel(label);
    setTimeout(() => {
      setBusy(false);
      setSuccess(true);
      setTimeout(() => { onLogin(); }, 700);
    }, 750);
  };

  const onSubmit = (e) => { e.preventDefault(); signIn("Đăng nhập"); };

  return (
    <div className="min-h-screen w-full flex bg-vnd-primary-950 text-white overflow-hidden">

      {/* LEFT — brand panel */}
      <aside className="hidden lg:flex relative flex-col justify-between w-[58%] xl:w-[60%] p-12 xl:p-16 bg-mesh-dark overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-vnd-primary-500/30 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -right-32 w-[520px] h-[520px] rounded-full bg-vnd-accent-green/20 blur-[140px]" />
        <div className="pointer-events-none absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-pti-primary/25 blur-[100px]" />

        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M48 0L0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        <div className="relative z-10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-white text-vnd-primary-900 flex items-center justify-center font-display font-bold text-[26px] leading-none shadow-brand">D</div>
          <div>
            <p className="font-display font-bold text-[22px] leading-none">DSB</p>
            <p className="text-[12px] text-white/60 mt-1.5">Dynamic Service Blueprint · VNDIRECT</p>
          </div>
        </div>

        <div className="relative z-10 max-w-xl">
          <p className="text-vnd-accent-green text-[12px] font-mono tracking-[0.3em] uppercase mb-4">
            ▸ Financial Advisor OS
          </p>
          <h1 className="font-display font-bold text-[44px] xl:text-[52px] leading-[1.05] tracking-tight mb-6">
            4 La Bàn cho<br />
            <span className="bg-gradient-to-r from-vnd-primary-200 via-white to-vnd-accent-green bg-clip-text text-transparent">
              Financial Advisor
            </span>
          </h1>
          <p className="text-white/70 text-[16px] leading-relaxed max-w-md">
            Học gì · Làm gì · Cần ai · Đang ở đâu. Mọi thứ một Financial Advisor cần,
            ở một nơi — tích hợp BMI, ICM, NAC và mạng lưới đối tác trên DSB.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-2 gap-3 max-w-xl">
          {COMPASSES.map((c, i) => (
            <div key={c.id}
              style={{ animationDelay: `${i * 80}ms` }}
              className="group rounded-xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm px-4 py-3.5 hover:bg-white/10 hover:ring-white/20 transition-all animate-fade-in">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: c.color + "33", color: c.color }}>
                  <Icon name={c.icon} size={18} filled />
                </div>
                <div className="min-w-0">
                  <p className="font-display font-semibold text-[14px] leading-none">{c.label}</p>
                  <p className="text-[11px] text-white/55 mt-1 truncate">{c.question}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-10 flex items-center gap-8 text-[12px] text-white/55">
          <div>
            <span className="font-mono text-white text-[18px] font-semibold">3,240+</span>
            <span className="block">Advisors hoạt động</span>
          </div>
          <div className="w-px h-8 bg-white/15" />
          <div>
            <span className="font-mono text-white text-[18px] font-semibold">98.4%</span>
            <span className="block">Uptime tháng này</span>
          </div>
          <div className="w-px h-8 bg-white/15" />
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-vnd-accent-green animate-pulse-soft" />
            <span>Hệ thống ổn định</span>
          </div>
        </div>
      </aside>

      {/* RIGHT — form */}
      <main className="flex-1 flex items-center justify-center bg-surface px-6 py-10 text-on-surface relative">
        <div className="lg:hidden absolute top-6 left-6 right-6 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-vnd-primary-900 text-white font-display font-bold text-[18px] flex items-center justify-center">D</div>
            <p className="font-display font-bold text-[16px] text-vnd-primary-900">DSB</p>
          </div>
          <p className="text-[11px] text-on-surface-variant">VNDIRECT</p>
        </div>

        <div className="w-full max-w-[420px] animate-fade-in">
          <div className="mb-8">
            <p className="text-vnd-primary-500 text-[12px] font-mono tracking-[0.2em] uppercase mb-2">
              Đăng nhập
            </p>
            <h2 className="font-display font-bold text-[32px] leading-tight tracking-tight text-vnd-primary-900">
              Chào mừng quay lại
            </h2>
            <p className="text-on-surface-variant text-[14px] mt-2">
              Tiếp tục hành trình tư vấn cùng DSB.
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            <label className="block">
              <span className="block text-[12px] font-semibold text-on-surface-variant mb-1.5">
                Email công ty
              </span>
              <div className="relative">
                <Icon name="mail" size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 pl-11 pr-4 rounded-xl bg-white border border-outline-variant focus:border-vnd-primary-500 focus:ring-2 focus:ring-vnd-primary-500/20 outline-none text-[14px] transition-all"
                  placeholder="ban@vndirect.com.vn"
                />
              </div>
            </label>

            <label className="block">
              <div className="flex items-center justify-between mb-1.5">
                <span className="block text-[12px] font-semibold text-on-surface-variant">Mật khẩu</span>
                <button type="button" className="text-[12px] text-vnd-primary-700 hover:underline font-medium">
                  Quên mật khẩu?
                </button>
              </div>
              <div className="relative">
                <Icon name="lock" size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" />
                <input
                  type={showPwd ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-12 pl-11 pr-12 rounded-xl bg-white border border-outline-variant focus:border-vnd-primary-500 focus:ring-2 focus:ring-vnd-primary-500/20 outline-none text-[14px] tracking-widest transition-all"
                  placeholder="••••••••"
                />
                <button type="button" onClick={() => setShowPwd(s => !s)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-vnd-primary-500 transition-colors">
                  <Icon name={showPwd ? "visibility_off" : "visibility"} size={18} />
                </button>
              </div>
            </label>

            <label className="flex items-center gap-2.5 select-none cursor-pointer">
              <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)}
                className="w-4 h-4 rounded text-vnd-primary-500 focus:ring-vnd-primary-500 border-outline-variant" />
              <span className="text-[13px] text-on-surface-variant">
                Ghi nhớ đăng nhập trên máy này
              </span>
            </label>

            <button type="submit" disabled={busy || success}
              className="w-full h-12 rounded-xl bg-vnd-primary-500 hover:bg-vnd-primary-700 active:bg-vnd-primary-900 text-white font-display font-semibold text-[15px] shadow-brand transition-all flex items-center justify-center gap-2 disabled:cursor-wait">
              {success ? (
                <>
                  <Icon name="check_circle" size={18} filled />
                  <span>Đã đăng nhập</span>
                </>
              ) : busy && busyLabel === "Đăng nhập" ? (
                <>
                  <Icon name="progress_activity" size={18} className="animate-spin" />
                  <span>Đang đăng nhập…</span>
                </>
              ) : (
                <>
                  <span>Đăng nhập</span>
                  <Icon name="arrow_forward" size={18} />
                </>
              )}
            </button>

            <div className="flex items-center gap-3 py-2">
              <div className="flex-1 h-px bg-outline-variant/50" />
              <span className="text-[11px] text-on-surface-variant uppercase tracking-wider font-semibold">hoặc</span>
              <div className="flex-1 h-px bg-outline-variant/50" />
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "vnd",    label: "VND SSO",   color: "text-vnd-primary-700", icon: "domain" },
                { id: "ms",     label: "Microsoft", color: "text-[#0078D4]",       icon: "window" },
                { id: "google", label: "Google",    color: "text-[#EA4335]",       icon: "g_translate" }
              ].map(p => (
                <button key={p.id} type="button" onClick={() => signIn(p.label)} disabled={busy || success}
                  className="h-11 rounded-xl bg-white border border-outline-variant hover:border-vnd-primary-500 hover:bg-vnd-primary-50 transition-all flex items-center justify-center gap-1.5 text-[12.5px] font-semibold text-on-surface disabled:opacity-60 disabled:cursor-wait">
                  {busy && busyLabel === p.label ? (
                    <Icon name="progress_activity" size={16} className="animate-spin text-on-surface-variant" />
                  ) : (
                    <Icon name={p.icon} size={16} className={p.color} filled />
                  )}
                  <span className="hidden sm:inline">{p.label}</span>
                </button>
              ))}
            </div>

            <div className="mt-4 p-3.5 rounded-xl bg-vnd-primary-50/60 border border-vnd-primary-100 flex items-start gap-2.5">
              <Icon name="info" size={16} className="text-vnd-primary-700 mt-0.5 flex-shrink-0" filled />
              <p className="text-[12px] text-vnd-primary-900/80 leading-snug">
                <span className="font-semibold">Bản demo:</span> bạn không cần nhập thông tin —
                bấm <em>Đăng nhập</em> hoặc nút SSO bất kỳ để vào hệ thống.
              </p>
            </div>
          </form>

          <div className="mt-10 flex items-center justify-between text-[11.5px] text-on-surface-variant">
            <p>© 2025 VNDIRECT · DSB Platform</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-vnd-primary-500">Bảo mật</a>
              <a href="#" className="hover:text-vnd-primary-500">Hỗ trợ</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
