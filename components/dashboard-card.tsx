"use client";

// ─── Shared style helpers ───────────────────────────────────────────────────

const displayFont = { fontFamily: "var(--font-display)" } as const;

// ─── Dashboard Mockup ────────────────────────────────────────────────────────

const BRANDS = [
  { name: "Auntie Anne's", rev: "$284K", change: "+9.2%" },
  { name: "Jamba", rev: "$197K", change: "+14.1%" },
  { name: "Cinnabon", rev: "$442K", change: "+6.8%" },
  { name: "Schlotzsky’s Deli", rev: "$361K", change: "+11.3%" },
];

const BAR_HEIGHTS = [38, 55, 42, 68, 51, 80, 63]; // percentages
const DAYS = ["M", "T", "W", "T", "F", "S", "S"];

const TXNS = [
  { brand: "Auntie Anne's", loc: "Downtown", amt: "$182.40", ago: "1m ago" },
  { brand: "Jamba", loc: "Midtown", amt: "$67.20", ago: "3m ago" },
  { brand: "Cinnabon", loc: "Westside", amt: "$234.10", ago: "5m ago" },
  { brand: "Schlotzsky’s Deli", loc: "East Ave", amt: "$91.50", ago: "8m ago" },
];

export default function DashboardCard({ large = false }: { large?: boolean }) {
  return (
    <div
      className="overflow-hidden w-full"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border-light)",
        borderRadius: large ? "16px" : "14px",
        boxShadow:
          "0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03)",
      }}
    >
      {/* Window chrome */}
      <div
        className="flex items-center justify-between px-4 py-3"
        style={{
          borderBottom: "1px solid var(--border)",
          background: "var(--surface-hi)",
        }}
      >
        <div className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-full"
            style={{ background: "#FF5F57" }}
          />
          <span
            className="w-3 h-3 rounded-full"
            style={{ background: "#FEBC2E" }}
          />
          <span
            className="w-3 h-3 rounded-full"
            style={{ background: "#28C840" }}
          />
        </div>
        <span
          className="text-xs tracking-wide"
          style={{ ...displayFont, color: "var(--text-muted)" }}
        >
          My CoreAlign Dashboard
        </span>
        <div className="flex items-center gap-1.5">
          <span
            className="live-dot w-2 h-2 rounded-full"
            style={{ background: "var(--teal)" }}
          />
          <span
            className="text-xs"
            style={{ color: "var(--teal)", ...displayFont }}
          >
            Live
          </span>
        </div>
      </div>

      <div className="flex" style={{ minHeight: large ? "440px" : "320px" }}>
        {/* Sidebar */}
        <div
          className="shrink-0 p-3"
          style={{
            width: large ? "160px" : "120px",
            borderRight: "1px solid var(--border)",
            background: "rgba(0,0,0,0.2)",
          }}
        >
          <p
            className="text-[10px] uppercase tracking-widest mb-3 px-2"
            style={{ color: "var(--text-dim)", ...displayFont }}
          >
            Brands
          </p>
          {BRANDS.map((b, i) => (
            <div
              key={b.name}
              className="flex items-center gap-2 px-2 py-1.5 rounded-md mb-0.5 cursor-pointer"
              style={{
                background: i === 2 ? "rgba(0,200,188,0.08)" : "transparent",
                borderLeft:
                  i === 2 ? "2px solid var(--teal)" : "2px solid transparent",
              }}
            >
              <span
                className="w-5 h-5 rounded shrink-0 flex items-center justify-center text-[9px]"
                style={{
                  background: ["#FF6340", "#8B5CF6", "#00C8BC", "#F59E0B"][i],
                  color: "#fff",
                  ...displayFont,
                }}
              >
                {b.name[0]}
              </span>
              <span
                className="text-[10px] truncate"
                style={{
                  color: i === 2 ? "var(--text)" : "var(--text-muted)",
                  ...displayFont,
                }}
              >
                {b.name.split(" ")[0]}
              </span>
            </div>
          ))}
          <div
            className="flex items-center gap-2 px-2 py-1.5 rounded-md mt-2"
            style={{ color: "var(--text-dim)" }}
          >
            <span className="text-xs">+ Add brand</span>
          </div>
        </div>

        {/* Main panel */}
        <div className="flex-1 p-4 overflow-hidden">
          {/* Stat row */}
          <div className="grid grid-cols-4 gap-2 mb-4">
            {[
              {
                label: "Total Revenue",
                val: "$1.28M",
                delta: "+11.4%",
                up: true,
              },
              {
                label: "Transactions",
                val: "48,291",
                delta: "+8.1%",
                up: true,
              },
              {
                label: "Active Stores",
                val: "23 / 23",
                delta: "●  All online",
                up: true,
              },
              { label: "Avg. Ticket", val: "$26.57", delta: "+2.3%", up: true },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-lg p-2.5"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid var(--border)",
                }}
              >
                <p
                  className="text-[9px] uppercase tracking-wider mb-1"
                  style={{ color: "var(--text-dim)", ...displayFont }}
                >
                  {s.label}
                </p>
                <p
                  className="text-sm leading-none mb-1"
                  style={{ ...displayFont, color: "var(--text)" }}
                >
                  {s.val}
                </p>
                <p
                  className="text-[9px]"
                  style={{ color: "var(--teal)", ...displayFont }}
                >
                  {s.delta}
                </p>
              </div>
            ))}
          </div>

          {/* Bar chart */}
          <div
            className="rounded-lg p-3 mb-3"
            style={{
              background: "rgba(0,0,0,0.2)",
              border: "1px solid var(--border)",
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <p
                className="text-[10px]"
                style={{ ...displayFont, color: "var(--text-muted)" }}
              >
                Weekly Revenue · Corner Store
              </p>
              <p
                className="text-[10px]"
                style={{ color: "var(--teal)", ...displayFont }}
              >
                $442K total
              </p>
            </div>
            <div
              className="flex items-end gap-1.5"
              style={{ height: large ? "64px" : "48px" }}
            >
              {BAR_HEIGHTS.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 flex flex-col items-center gap-1"
                >
                  <div
                    className="w-full rounded-sm"
                    style={{
                      height: `${h}%`,
                      background:
                        i === 5
                          ? "var(--teal)"
                          : `rgba(0,200,188,${0.15 + h / 200})`,
                      transition: "height 0.3s ease",
                    }}
                  />
                  <span
                    className="text-[8px]"
                    style={{ color: "var(--text-dim)", ...displayFont }}
                  >
                    {DAYS[i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent txns */}
          <div>
            <p
              className="text-[10px] uppercase tracking-wider mb-2"
              style={{ color: "var(--text-dim)", ...displayFont }}
            >
              Recent Transactions
            </p>
            {TXNS.slice(0, large ? 4 : 3).map((t) => (
              <div
                key={t.brand + t.loc}
                className="flex items-center justify-between py-1.5"
                style={{ borderBottom: "1px solid rgba(28,43,64,0.6)" }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: "var(--teal)", flexShrink: 0 }}
                  />
                  <span
                    className="text-[10px]"
                    style={{ color: "var(--text-muted)", ...displayFont }}
                  >
                    {t.brand}
                  </span>
                  <span
                    className="text-[9px]"
                    style={{ color: "var(--text-dim)", ...displayFont }}
                  >
                    · {t.loc}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className="text-[10px]"
                    style={{ color: "var(--text)", ...displayFont }}
                  >
                    {t.amt}
                  </span>
                  <span
                    className="text-[9px]"
                    style={{ color: "var(--text-dim)", ...displayFont }}
                  >
                    {t.ago}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
