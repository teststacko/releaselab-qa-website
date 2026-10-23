export default function CodeBlock({
  code,
  label,
}: {
  code: string;
  label?: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
      {label && (
        <div className="border-b border-white/10 px-4 py-2 font-mono text-xs text-gray-400">
          {label}
        </div>
      )}
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-6 text-gray-200">
        <code>{code}</code>
      </pre>
    </div>
  );
}
