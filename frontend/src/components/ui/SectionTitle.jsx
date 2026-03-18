export default function SectionTitle({ eyebrow, title, align = "center" }) {
  return (
    <div className={`mb-10 ${align === "center" ? "text-center" : "text-left"}`}>
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-black uppercase tracking-wide text-white md:text-5xl">
        {title}
      </h2>
    </div>
  );
}