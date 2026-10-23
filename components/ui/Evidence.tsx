// Shared "tile" building blocks for project pages. Same look as the Healthcare project sections.

export function EvidenceSection({
  id,
  title,
  claim,
  label = "Evidence",
  children,
}: {
  id: string;
  title: string;
  claim: string;
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="wrap mt-14 scroll-mt-28">
      <div className="card p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">{label}</p>
        <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <p className="mt-2 max-w-3xl text-gray-400">{claim}</p>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

export function DataTable({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead className="bg-white/5 text-gray-300">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-4 py-3 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0] + r[1]} className="border-t border-white/10 text-gray-300">
              {r.map((c, i) => (
                <td key={i} className={`px-4 py-3 ${i === 0 ? "font-mono text-blue-300" : ""}`}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}