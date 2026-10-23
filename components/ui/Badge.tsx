// text-[#ffffff] (not text-white) so the blue badge label stays white in light theme too.
const tones = {
  blue: "bg-blue-600 text-[#ffffff]",
  amber: "border border-amber-500/40 bg-amber-500/10 text-amber-300",
  gray: "border border-white/15 bg-white/5 text-gray-300",
  green: "border border-green-500/40 bg-green-500/10 text-green-300",
};

export default function Badge({
  children,
  tone = "gray",
  className = "",
}: {
  children: React.ReactNode;
  tone?: keyof typeof tones;
  className?: string;
}) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}