export default function Panel({
  id,
  label,
  index,
  children,
}: {
  id: string;
  label: string;
  index: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="panel" aria-labelledby={`${id}-label`}>
      <div className="panel__head">
        <span className="panel__label" id={`${id}-label`}>
          {label}
        </span>
        <span className="panel__index">{index} / 05</span>
      </div>
      <div className="panel__seam" aria-hidden="true" />
      <div className="panel__well">{children}</div>
    </section>
  );
}
