export default function Section({ title, children }) {
    return (
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-2">{title}</h2>
        <div>{children}</div>
      </section>
    );
  }
  