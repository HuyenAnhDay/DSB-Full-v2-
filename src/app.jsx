import { useState, useEffect, useRef, useMemo, useCallback, createContext, useContext, Fragment } from 'react';
import { Icon, Avatar, Badge, PriorityPill, Button, Card, SectionTitle, Tabs, Toggle, Modal, Drawer, TextField, Empty, Sparkline, BarChart, DonutChart, ProgressRing, Stat, ImageSlot, FilterBar, ChipToggle, ToastProvider, useToast, vnd } from './ui.jsx';
import { AppShell, Sidebar, TopBar, SecondaryNav, PageHeader, Page, AIBuddyPopover, mockReply, AI_SUGGESTIONS } from './shell.jsx';
import { ScreenDworkDashboard } from './dwork.jsx';
import { ScreenDworkClients } from './dwork-client.jsx';
import { ScreenDworkOmni } from './dwork-omni.jsx';
import { ScreenDworkProduct, ScreenDworkTools, ScreenDworkHelpdesk, ScreenDworkCompliance } from './dwork-other.jsx';
import { ScreenILead } from './ilead.jsx';
import { ScreenDLink } from './dlink.jsx';
import { ScreenDAccount } from './daccount.jsx';

const DEFAULT_ROUTE = "ilead/job";

function App() {
  const [route, setRoute] = useState(() => {
    const h = window.location.hash.replace(/^#\/?/, "");
    return h || DEFAULT_ROUTE;
  });
  const [compact, setCompact] = useState(false);
  const [tweaksOpen, setTweaksOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);

  // hot-key toggle
  useEffect(() => {
    const onToggle = () => setAiOpen(o => !o);
    document.addEventListener("__ai-buddy-toggle", onToggle);
    return () => document.removeEventListener("__ai-buddy-toggle", onToggle);
  }, []);

  // hash sync
  useEffect(() => {
    const onHash = () => {
      const h = window.location.hash.replace(/^#\/?/, "");
      if (h) setRoute(h);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const navigate = (r) => {
    setRoute(r);
    window.location.hash = "#/" + r;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Tweaks bridge
  useEffect(() => {
    const onMsg = (e) => {
      const t = e.data?.type;
      if (t === "__activate_edit_mode") setTweaksOpen(true);
      else if (t === "__deactivate_edit_mode") setTweaksOpen(false);
    };
    window.addEventListener("message", onMsg);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  // route → screen
  let screen = null;
  const [compass, sub] = route.split("/");
  const screenId = route;
  if (compass === "dashboard") {
    screen = <ScreenHome onNavigate={navigate} />;
  } else if (compass === "dwork") {
    if (sub === "dashboard")  screen = <ScreenDworkDashboard onNavigate={navigate} />;
    else if (sub === "bi")       screen = <ScreenAIBuddy />;
    else if (sub === "clients")  screen = <ScreenDworkClients onNavigate={navigate} />;
    else if (sub === "omni")     screen = <ScreenDworkOmni />;
    else if (sub === "product")  screen = <ScreenDworkProduct />;
    else if (sub === "oc")       screen = <SectionPlaceholder eyebrow="dWork · OC" title="Operations Center" sub="Kênh vận hành & hỗ trợ nghiệp vụ (OC)." icon="support_agent" />;
    else if (sub === "tools")    screen = <ScreenDworkTools />;
    else if (sub === "helpdesk") screen = <ScreenDworkHelpdesk />;
    else screen = <ScreenDworkDashboard onNavigate={navigate} />;
  } else if (compass === "ilead") {
    screen = <ScreenILead screen={screenId} />;
  } else if (compass === "dlink") {
    if (sub === "ipax") screen = <ScreenIpax />;
    else screen = <ScreenDLink screen={screenId} />;
  } else if (compass === "daccount") {
    screen = <ScreenDAccount screen={screenId} />;
  } else if (compass === "toolbox") {
    screen = <ScreenDworkTools />;
  } else if (compass === "library") {
    screen = <ScreenDworkHelpdesk />;
  } else {
    screen = <ScreenDworkDashboard onNavigate={navigate} />;
  }

  return (
    <ToastProvider>
      <AppShell route={route} onNavigate={navigate} compact={compact} setCompact={setCompact}>
        {screen}
      </AppShell>
      {tweaksOpen && <TweaksPanel
        onClose={() => { setTweaksOpen(false); window.parent.postMessage({ type: "__edit_mode_dismissed" }, "*"); }}
        compact={compact} setCompact={setCompact}
        route={route} setRoute={navigate}
      />}
      <AIBuddyPopover open={aiOpen} onClose={() => setAiOpen(false)} />
    </ToastProvider>
  );
}

// =============== HOME · GLOBAL DASHBOARD (cross-compass overview) ===============
function ScreenHome({ onNavigate }) {
  const { COMPASSES, ADVISOR, TASKS, ANNOUNCEMENTS } = window.DSB_DATA;
  const today = TASKS.filter(t => !t.done).slice(0, 4);
  return (
    <>
      <PageHeader
        eyebrow="DSB · Tổng quan"
        title={`Chào ${ADVISOR.shortName}, hôm nay bắt đầu từ đâu?`}
        sub={`${ADVISOR.role} · ${ADVISOR.team} — bức tranh toàn cảnh trên cả 4 La Bàn.`}
        actions={<><Button tone="outline" size="sm" icon="tune">Tùy chỉnh</Button><Button tone="primary" size="sm" icon="add">Tạo nhanh</Button></>}
      />
      <Page>
        {/* Cross-compass KPI row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card><Stat icon="rocket_launch" tone="blue"   label="Pipeline tuần" value="5.19 tỷ" sub="10 cơ hội · 4 close > 50%" trend={8} /></Card>
          <Card><Stat icon="trending_up"   tone="amber"  label="Doanh số YTD" value="18.4 tỷ" sub="#7/84 region South" trend={14} /></Card>
          <Card><Stat icon="school"        tone="purple" label="ICM score"    value={ADVISOR.icmScore} sub={ADVISOR.bmiLevel} trend={3} /></Card>
          <Card><Stat icon="hub"           tone="green"  label="Mạng lưới"   value="30 kết nối" sub="12 strong ties" trend={2} /></Card>
        </div>

        {/* 4 La Bàn entry cards */}
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-display text-title-lg text-vnd-primary-900">4 La Bàn</h2>
          <span className="text-[12px] text-on-surface-variant">Chọn một hướng để đi sâu</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
          {COMPASSES.map(c => (
            <button key={c.id} onClick={() => onNavigate(c.id)}
              className="group text-left bg-white rounded-2xl ring-1 ring-outline-variant/30 p-5 hover:shadow-lift hover:-translate-y-0.5 transition-all">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: c.color + "1A", color: c.color }}>
                <Icon name={c.icon} size={24} weight={500} />
              </div>
              <p className="font-display font-bold text-title-md text-vnd-primary-900">{c.label}</p>
              <p className="text-[13px] text-on-surface-variant mt-1 leading-snug">{c.question}</p>
              <span className="inline-flex items-center gap-1 text-[12.5px] font-semibold mt-4" style={{ color: c.color }}>
                Mở <Icon name="arrow_forward" size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          ))}
        </div>

        {/* Tasks + Announcements */}
        <div className="grid grid-cols-12 gap-5">
          <Card className="col-span-12 lg:col-span-7">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-title-md text-vnd-primary-900">Việc cần làm hôm nay</h3>
              <Button tone="ghost" size="xs" iconRight="arrow_forward" onClick={() => onNavigate("dwork/dashboard")}>dWork Dashboard</Button>
            </div>
            <ul className="space-y-2">
              {today.map(t => (
                <li key={t.id} className="flex items-center gap-3 p-3 rounded-xl hover:bg-surface-container-low transition-colors">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: t.priority === "P1" ? "#EF4444" : "#FFB020" }}></span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[13.5px] font-medium text-on-surface truncate">{t.title}</p>
                    <p className="text-[11.5px] text-on-surface-variant">{t.project}</p>
                  </div>
                  {t.nac && <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-vnd-primary-50 text-vnd-primary-700">NAC</span>}
                  <span className="text-[12px] font-mono text-on-surface-variant">{t.due}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="col-span-12 lg:col-span-5">
            <h3 className="font-display text-title-md text-vnd-primary-900 mb-4">Thông báo</h3>
            <ul className="space-y-3">
              {ANNOUNCEMENTS.map(a => (
                <li key={a.id} className="flex gap-3">
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${a.level === "warn" ? "bg-amber-50 text-amber-700" : "bg-vnd-primary-50 text-vnd-primary-700"}`}>
                    <Icon name={a.level === "warn" ? "warning" : "campaign"} size={16} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[13px] font-semibold text-on-surface">{a.title}</p>
                    <p className="text-[12px] text-on-surface-variant mt-0.5">{a.body}</p>
                    <p className="text-[10.5px] text-on-surface-variant/70 mt-1 font-mono">{a.at}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Page>
    </>
  );
}

// =============== dLink · IPAX — TỰ PHẢN TƯ (self-reflection) ===============
function ScreenIpax() {
  const { ADVISOR } = window.DSB_DATA;
  const MOODS = [
    { id: "confident", label: "Tự tin",   icon: "sentiment_satisfied", color: "#00C97D" },
    { id: "thoughtful", label: "Suy ngẫm", icon: "psychology",          color: "#0077ED" },
    { id: "grateful", label: "Biết ơn",    icon: "favorite",            color: "#8B2E8F" },
    { id: "drained", label: "Cạn năng lượng", icon: "battery_low",      color: "#FF8C33" }
  ];
  const PROMPTS = [
    "Tuần này điều gì khiến bạn tự hào nhất trong công việc?",
    "Bạn đã học được gì từ một thất bại gần đây?",
    "Mối quan hệ nào trong mạng lưới bạn cần vun đắp thêm?",
    "Nếu làm lại buổi tư vấn gần nhất, bạn sẽ thay đổi điều gì?"
  ];
  const DIMS = [
    { l: "Kỷ luật & cam kết",     v: 78, color: "#0077ED", note: "Giữ cadence với KH ổn định" },
    { l: "Tinh thần học hỏi",     v: 85, color: "#8B2E8F", note: "Hoàn tất 3 khoá trong quý" },
    { l: "Quan hệ khách hàng",    v: 72, color: "#00C97D", note: "Cần lắng nghe sâu hơn" },
    { l: "Cân bằng & năng lượng", v: 64, color: "#FF8C33", note: "Áp lực cuối tháng còn cao" }
  ];
  const JOURNAL = [
    { date: "Hôm nay",      mood: "Tự tin",  title: "Buổi tư vấn với anh Việt", body: "Chuẩn bị kỹ và dẫn dắt cuộc trò chuyện tốt. Lần sau nên hỏi sâu hơn về mục tiêu dài hạn của KH trước khi đề xuất sản phẩm." },
    { date: "2 ngày trước", mood: "Suy ngẫm", title: "Mất một lead ở bước đề xuất", body: "Có lẽ mình đẩy sản phẩm hơi nhanh. Bài học: xác nhận nhu cầu (BANT) chắc chắn trước khi chuyển sang giải pháp." },
    { date: "Tuần trước",   mood: "Biết ơn", title: "Mentor session với chị Vân", body: "Nhận được góp ý quý giá về cách xử lý phản đối. Cảm thấy được hỗ trợ và rõ hướng phát triển hơn." }
  ];
  const [mood, setMood] = useState("confident");
  const [promptIdx, setPromptIdx] = useState(0);
  const [text, setText] = useState("");
  return (
    <>
      <PageHeader
        eyebrow="dLink · IPAX"
        title="Tự phản tư"
        sub="Dừng lại, nhìn lại chính mình — thói quen, quan hệ và sự phát triển. Phản tư đều đặn giúp bạn học nhanh hơn từ mỗi tương tác."
        actions={<><Button tone="ghost" size="sm" icon="history">Nhật ký</Button><Button tone="primary" size="sm" icon="add">Phản tư mới</Button></>}
      />
      <Page>
        <div className="grid grid-cols-12 gap-5">
          {/* Reflection composer */}
          <Card className="col-span-12 lg:col-span-7">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-vnd-primary-50 text-vnd-primary-700 flex items-center justify-center"><Icon name="auto_stories" size={16} /></span>
                <h3 className="font-display text-title-md text-vnd-primary-900">Câu hỏi phản tư tuần này</h3>
              </div>
              <button onClick={() => { setPromptIdx(i => (i + 1) % PROMPTS.length); }}
                className="inline-flex items-center gap-1 text-[12px] font-semibold text-vnd-primary-600 hover:text-vnd-primary-700">
                <Icon name="refresh" size={15} /> Đổi câu hỏi
              </button>
            </div>
            <div className="rounded-xl bg-vnd-primary-50/60 ring-1 ring-vnd-primary-100 px-4 py-3 mb-4">
              <p className="font-display text-title-sm text-vnd-primary-900 leading-snug">{PROMPTS[promptIdx]}</p>
            </div>
            <p className="text-[11px] uppercase tracking-wider font-bold text-on-surface-variant mb-2">Hôm nay bạn cảm thấy thế nào?</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {MOODS.map(m => {
                const on = mood === m.id;
                return (
                  <button key={m.id} onClick={() => setMood(m.id)}
                    className={`inline-flex items-center gap-1.5 h-9 px-3 rounded-full text-[12.5px] font-medium transition-all ring-1
                      ${on ? "text-white" : "bg-white text-on-surface-variant ring-outline-variant/40 hover:ring-outline-variant"}`}
                    style={on ? { background: m.color, borderColor: m.color } : undefined}>
                    <Icon name={m.icon} size={15} filled={on} /> {m.label}
                  </button>
                );
              })}
            </div>
            <textarea value={text} onChange={e => setText(e.target.value)} rows="5"
              placeholder="Viết tự do — không ai chấm điểm. Chỉ bạn và những suy nghĩ thật của mình…"
              className="w-full bg-surface-container-low rounded-xl ring-1 ring-outline-variant/30 focus:ring-2 focus:ring-vnd-primary-500 outline-none p-3.5 text-[13.5px] resize-none placeholder:text-on-surface-variant/60" />
            <div className="flex items-center justify-between mt-3">
              <span className="text-[11.5px] text-on-surface-variant flex items-center gap-1"><Icon name="lock" size={13} /> Riêng tư · chỉ mình bạn xem</span>
              <Button tone="primary" size="sm" icon="check">Lưu phản tư</Button>
            </div>
          </Card>

          {/* Self-assessment */}
          <div className="col-span-12 lg:col-span-5 space-y-5">
            <Card>
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-display text-title-md text-vnd-primary-900">Tự đánh giá</h3>
                <span className="text-[11.5px] text-on-surface-variant">Cập nhật {`hằng tuần`}</span>
              </div>
              <p className="text-[12px] text-on-surface-variant mb-4">Bạn đang ở đâu so với phiên bản tốt nhất của chính mình?</p>
              <div className="space-y-4">
                {DIMS.map(d => (
                  <div key={d.l}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[12.5px] font-medium text-on-surface">{d.l}</span>
                      <span className="text-[12px] font-mono font-bold" style={{ color: d.color }}>{d.v}</span>
                    </div>
                    <div className="h-2 rounded-full bg-surface-container-high overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: d.v + "%", background: d.color }}></div>
                    </div>
                    <p className="text-[11px] text-on-surface-variant mt-1">{d.note}</p>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="bg-vnd-primary-900 text-white ring-0">
              <div className="flex items-center gap-3">
                <span className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center"><Icon name="local_fire_department" size={22} className="text-vnd-accent-amber" filled /></span>
                <div>
                  <p className="font-display font-bold text-headline-sm">12 tuần liên tiếp</p>
                  <p className="text-[12px] text-white/70">Chuỗi phản tư của bạn — đừng để gián đoạn nhé.</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Journal history */}
          <Card className="col-span-12">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-title-md text-vnd-primary-900">Nhật ký phản tư gần đây</h3>
              <Button tone="ghost" size="xs" iconRight="arrow_forward">Xem tất cả</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {JOURNAL.map((j, i) => (
                <div key={i} className="rounded-xl ring-1 ring-outline-variant/30 p-4 hover:shadow-soft transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono text-on-surface-variant">{j.date}</span>
                    <span className="text-[10.5px] font-bold px-2 py-0.5 rounded-full bg-vnd-primary-50 text-vnd-primary-700">{j.mood}</span>
                  </div>
                  <p className="font-display font-semibold text-title-sm text-vnd-primary-900 mb-1.5">{j.title}</p>
                  <p className="text-[12.5px] text-on-surface-variant leading-relaxed">{j.body}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Page>
    </>
  );
}

// =============== SECTION PLACEHOLDER (new IA leaves: OC) ===============
function SectionPlaceholder({ eyebrow, title, sub, icon }) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} sub={sub} />
      <Page>
        <div className="bg-white rounded-2xl ring-1 ring-outline-variant/30 p-12 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-2xl bg-vnd-primary-50 text-vnd-primary-500 flex items-center justify-center mb-4">
            <Icon name={icon} size={32} />
          </div>
          <p className="font-display text-title-lg text-vnd-primary-900">{title}</p>
          <p className="text-body-md text-on-surface-variant mt-2 max-w-md">Khu vực này đang được thiết kế. Nội dung sẽ được bổ sung theo sitemap.</p>
          <div className="mt-5 flex gap-2">
            <Button tone="primary" size="sm" icon="add">Thêm nội dung</Button>
            <Button tone="outline" size="sm" icon="description">Xem sitemap</Button>
          </div>
        </div>
      </Page>
    </>
  );
}

// =============== BI AUTOMATION SCREEN (embedded AI Buddy) ===============
function ScreenAIBuddy() {
  return (
    <>
      <PageHeader
        eyebrow="dWork · BI Automation"
        title="AI Buddy"
        sub="Hỏi mọi điều về KH, pipeline, sản phẩm, BMI/ICM, NAC, performance — AI Buddy có ngữ cảnh đầy đủ trên DSB."
        actions={
          <>
            <Button tone="ghost" size="sm" icon="history">Lịch sử hỏi</Button>
            <Button tone="outline" size="sm" icon="dataset">Nguồn dữ liệu</Button>
            <Button tone="primary" size="sm" icon="add">Cuộc trò chuyện mới</Button>
          </>
        }
      />
      <Page wide>
        <div className="grid grid-cols-12 gap-5 h-[calc(100vh-220px)] min-h-[560px]">
          {/* Left rail: history & topics */}
          <aside className="col-span-12 lg:col-span-3 bg-white rounded-2xl ring-1 ring-outline-variant/30 overflow-hidden flex flex-col">
            <div className="px-4 py-3 border-b border-outline-variant/30">
              <TextField icon="search" placeholder="Tìm cuộc hỏi…" />
            </div>
            <div className="flex-1 overflow-y-auto scrollbar-thin">
              <div className="px-4 py-3">
                <p className="text-[10.5px] uppercase tracking-wider font-bold text-on-surface-variant mb-2">Hôm nay</p>
                <ul className="space-y-1">
                  {[
                    "Tóm tắt hiệu suất Q2",
                    "KH P1 cần liên hệ",
                    "Lead close prob > 50%"
                  ].map((t, i) => (
                    <li key={i}>
                      <button className={`w-full text-left text-[12.5px] px-2.5 py-2 rounded-lg flex items-center gap-2 ${i === 0 ? "bg-vnd-primary-50 text-vnd-primary-700 font-semibold" : "hover:bg-surface-container-low text-on-surface-variant"}`}>
                        <Icon name="chat" size={14} /><span className="truncate">{t}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-4 py-3 border-t border-outline-variant/20">
                <p className="text-[10.5px] uppercase tracking-wider font-bold text-on-surface-variant mb-2">Tuần trước</p>
                <ul className="space-y-1">
                  {[
                    "Skill gap để lên BMI-4",
                    "Sản phẩm bond > 9% yield",
                    "AML alert handling"
                  ].map((t, i) => (
                    <li key={i}>
                      <button className="w-full text-left text-[12.5px] px-2.5 py-2 rounded-lg hover:bg-surface-container-low text-on-surface-variant flex items-center gap-2">
                        <Icon name="chat" size={14} /><span className="truncate">{t}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-4 py-4 border-t border-outline-variant/20">
                <p className="text-[10.5px] uppercase tracking-wider font-bold text-on-surface-variant mb-2">Topics gợi ý</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Pipeline", "Performance", "Compliance", "Products", "Network", "Training"].map(t => (
                    <span key={t} className="text-[11px] px-2 py-1 rounded-full bg-surface-container-low text-on-surface-variant ring-1 ring-outline-variant/40">{t}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="px-4 py-3 border-t border-outline-variant/30 bg-surface-container-low/50">
              <div className="flex items-center gap-2 text-[11px] text-on-surface-variant">
                <Icon name="info" size={13} />
                <span>14 cuộc hỏi tuần này · 3.2 phút/cuộc</span>
              </div>
            </div>
          </aside>

          {/* Main chat embedded */}
          <section className="col-span-12 lg:col-span-9 bg-white rounded-2xl ring-1 ring-outline-variant/30 overflow-hidden">
            <AIBuddyPopover open={true} embedded={true} />
          </section>
        </div>
      </Page>
    </>
  );
}

// =============== TWEAKS PANEL ===============
function TweaksPanel({ onClose, compact, setCompact, route, setRoute }) {
  return (
    <div className="fixed bottom-6 right-6 z-[55] w-[300px] bg-white rounded-2xl shadow-lift ring-1 ring-vnd-primary-900/10 overflow-hidden animate-slide-in">
      <div className="bg-vnd-primary-900 text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="palette" size={18} className="text-vnd-accent-green" />
          <p className="font-display font-semibold text-[13px]">Tweaks</p>
        </div>
        <button onClick={onClose} className="text-white/80 hover:text-white"><Icon name="close" size={18} /></button>
      </div>
      <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto scrollbar-thin">
        <div>
          <p className="text-[10.5px] uppercase tracking-wider font-bold text-on-surface-variant mb-2">Sidebar</p>
          <Toggle on={compact} onChange={setCompact} label="Compact (icon only)" hint="Thu gọn sidebar còn icon" />
        </div>
        <div>
          <p className="text-[10.5px] uppercase tracking-wider font-bold text-on-surface-variant mb-2">Đi nhanh đến…</p>
          <div className="space-y-1">
            {[
              { id: "dashboard", l: "Dashboard — Tổng quan" },
              { id: "dwork/dashboard", l: "dWork — FC · Dashboard" },
              { id: "dwork/clients", l: "dWork — FC · Client zone" },
              { id: "dwork/product", l: "dWork — FC · Product zone" },
              { id: "dwork/omni", l: "dWork — FC · Omni channel" },
              { id: "dwork/oc", l: "dWork — OC" },
              { id: "ilead/job",   l: "iLead — Job track" },
              { id: "ilead/depth", l: "iLead — Depth track" },
              { id: "ilead/idp",   l: "iLead — IDP track" },
              { id: "dlink/ipax",  l: "dLink — IPAX" },
              { id: "dlink/ilead", l: "dLink — XLink · iLead network" },
              { id: "dlink/dwork", l: "dLink — XLink · dWork network" },
              { id: "daccount/depth", l: "dAccount — HWG · Depth" },
              { id: "daccount/kpi", l: "dAccount — HWG · KPI Dashboard" },
              { id: "daccount/benchmarks", l: "dAccount — HWG · Benchmarks" },
              { id: "toolbox", l: "Toolbox" },
              { id: "library/kb", l: "Library — KB Note" }
            ].map(r => (
              <button key={r.id} onClick={() => setRoute(r.id)}
                className={`w-full text-left text-[12.5px] px-2.5 py-1.5 rounded-md transition-colors
                  ${route === r.id ? "bg-vnd-primary-50 text-vnd-primary-700 font-semibold" : "hover:bg-surface-container-low text-on-surface-variant"}`}>
                {r.l}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
