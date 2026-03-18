export default function SectionTitle({ eyebrow, title, align = "center" }) {
  return (
    <div className={`mb-10 ${align === "center" ? "text-center" : "text-left"}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
          {eyebrow}
        </p>
      ) : null}

      <h2
        className={`font-anton uppercase text-white leading-[0.95] tracking-[0px]
        text-[42px] md:text-[56px] lg:text-[64px]
        ${align === "center" ? "text-center" : "text-left"}
        lg:whitespace-nowrap`}
      >
        {title}
      </h2>
    </div>
  );
}