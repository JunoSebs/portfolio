import Header from '../components/Header';
import Section from '../components/Section';
import ExperienceCard from '../components/ExperienceCard';

export default function Home() {
  const experience = [
    {
      title: "Senior Java Backend Engineer",
      company: "Accenture – M&G (CX Portal)",
      date: "Aug 2023 – Present",
      details: [
        "Lead developer for retirement portal using Java Spring Boot, Microservices, Azure DevOps.",
        "Reduced downtime by 25% via microservices.",
        "Mentored junior developers and led Agile ceremonies.",
      ]
    },
    // Add other roles similarly
  ];

  return (
    <main className="max-w-3xl mx-auto px-4 py-6">
      <Header />
      <Section title="Professional Summary">
        <p>Experienced Java Full Stack Developer and Technical Lead with 12+ years of delivering scalable applications...</p>
      </Section>

      <Section title="Technical Skills">
        <p>Java, Spring Boot, React, Angular, Microservices, AWS, Azure, SQL...</p>
      </Section>

      <Section title="Professional Experience">
        {experience.map((exp, idx) => (
          <ExperienceCard key={idx} {...exp} />
        ))}
      </Section>

      <Section title="Certifications">
        <ul className="list-disc list-inside">
          <li>AWS Certified Cloud Practitioner (Jul 2024 – Jul 2027)</li>
          <li>Google Cloud Digital Leader (Sep 2024 – Sep 2027)</li>
        </ul>
      </Section>

      <Section title="Education">
        <p>Bachelor of Science in Computer Science — University of Mumbai, 2011</p>
      </Section>
    </main>
  );
}
