import Image from "next/image";
import { Bell, Calendar, CheckCircle, Clock, Package, ChevronRight } from "lucide-react";

const user = {
  name: "Neo",
  avatar: "N",
};

const notifications = [
  {
    id: 1,
    type: "booking",
    icon: Calendar,
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-400/10",
    title: "Nieuwe boeking bevestigd",
    description: "Je onboardingsessie is bevestigd voor 18 jun om 14:00.",
    time: "2 uur geleden",
    unread: true,
  },
  {
    id: 2,
    type: "meeting",
    icon: Clock,
    iconColor: "text-violet-400",
    iconBg: "bg-violet-400/10",
    title: "Aankomende vergadering",
    description: "Maandelijks strategiegesprek met je Systificial-team — morgen om 10:00.",
    time: "5 uur geleden",
    unread: true,
  },
  {
    id: 3,
    type: "delivery",
    icon: Package,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-400/10",
    title: "Systeemupdate afgeleverd",
    description: "Je CRM-automatiseringsmodule is geïmplementeerd en live.",
    time: "Gisteren",
    unread: false,
  },
  {
    id: 4,
    type: "complete",
    icon: CheckCircle,
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-400/10",
    title: "Taak voltooid",
    description: "E-mailworkflow-integratie is getest en goedgekeurd.",
    time: "2 dagen geleden",
    unread: false,
  },
];

export default function DashboardPage() {
  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.11 0.025 220)" }}>
      {/* Top nav */}
      <header
        className="border-b px-6 py-4 flex items-center justify-between"
        style={{
          background: "oklch(0.13 0.025 220)",
          borderColor: "oklch(0.24 0.025 220)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Image
            src="/logo.png"
            alt="Systificial logo"
            width={28}
            height={28}
            priority
            style={{ objectFit: "contain" }}
          />
          <span style={{ fontSize: "16px", fontWeight: 600, letterSpacing: "-0.3px" }}>
            <span style={{ color: "oklch(0.95 0.01 220)" }}>Systi</span>
            <span style={{ color: "oklch(0.78 0.14 185)" }}>ficial</span>
          </span>
        </div>

        <div className="flex items-center gap-4">
          {/* Bell */}
          <button className="relative p-2 rounded-full transition-colors hover:bg-white/5">
            <Bell size={18} style={{ color: "oklch(0.60 0.015 220)" }} />
            {unreadCount > 0 && (
              <span
                className="absolute top-1 right-1 w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center"
                style={{
                  background: "oklch(0.60 0.14 195)",
                  color: "oklch(0.12 0.02 220)",
                }}
              >
                {unreadCount}
              </span>
            )}
          </button>

          {/* Avatar */}
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
            style={{
              background: "oklch(0.60 0.14 195)",
              color: "oklch(0.12 0.02 220)",
            }}
          >
            {user.avatar}
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* Greeting */}
        <div className="mb-10">
          <p className="text-sm mb-1" style={{ color: "oklch(0.60 0.015 220)" }}>
            Welkom terug
          </p>
          <h1 className="text-4xl font-bold tracking-tight" style={{ color: "oklch(0.95 0.01 220)" }}>
            Hello, {user.name} 👋
          </h1>
        </div>

        {/* Notifications header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold" style={{ color: "oklch(0.90 0.01 220)" }}>
            Meldingen
            {unreadCount > 0 && (
              <span
                className="ml-2 px-2 py-0.5 rounded-full text-xs font-bold"
                style={{
                  background: "oklch(0.60 0.14 195 / 0.15)",
                  color: "oklch(0.78 0.14 185)",
                }}
              >
                {unreadCount} nieuw
              </span>
            )}
          </h2>
          <button
            className="text-xs flex items-center gap-1 transition-opacity hover:opacity-70"
            style={{ color: "oklch(0.60 0.14 195)" }}
          >
            Alles als gelezen markeren <ChevronRight size={12} />
          </button>
        </div>

        {/* Notification cards */}
        <div className="flex flex-col gap-3">
          {notifications.map((n) => {
            const Icon = n.icon;
            return (
              <div
                key={n.id}
                className="flex items-start gap-4 p-4 rounded-2xl border transition-colors hover:border-cyan-400/20 cursor-pointer"
                style={{
                  background: n.unread
                    ? "oklch(0.15 0.025 220 / 0.9)"
                    : "oklch(0.13 0.025 220)",
                  borderColor: n.unread
                    ? "oklch(0.40 0.06 185 / 0.35)"
                    : "oklch(0.24 0.025 220)",
                }}
              >
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${n.iconBg}`}
                >
                  <Icon size={18} className={n.iconColor} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "oklch(0.95 0.01 220)" }}
                    >
                      {n.title}
                    </p>
                    {n.unread && (
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "oklch(0.60 0.14 195)" }}
                      />
                    )}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "oklch(0.60 0.015 220)" }}>
                    {n.description}
                  </p>
                </div>

                {/* Time */}
                <span className="text-xs shrink-0 mt-0.5" style={{ color: "oklch(0.50 0.015 220)" }}>
                  {n.time}
                </span>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
