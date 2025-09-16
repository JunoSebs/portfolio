import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div style={{ textAlign: 'center' }}>
          <Image src="/juno-profile.jpeg" alt="Profile" width={140} height={140} className={styles.profile} />
          <h1>Juno Mishel Sebastian</h1>
          <p><strong>Java Technical Lead | 12+ Years | Building Scalable, Mission-Critical Systems</strong></p>
          <p className={styles.location}>Toronto, ON • Available across Canada • Permanent Resident</p>
          <p className={styles.summary}>
            I help enterprises design resilient microservices, cloud-native applications, and high-performing platforms—while leading teams to deliver impactful, user-centric solutions.
          </p>
        </div>

        <h2 className={styles.head}>About Me</h2>
        <p className={styles.about}>
          Over the past 12 years, I've worked at the intersection of technology and leadership, helping enterprises modernize legacy systems, embrace cloud-native architecture, and deliver products that scale globally. I'm passionate about mentoring engineers and translating complex challenges into elegant, secure, and scalable solutions.
        </p>

        <h2 className={styles.head}>Technical Expertise</h2>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCategory}>
            <h3>Leadership & Architecture</h3>
            <div className={styles.skills}>
              <span className={styles.skillbadge}>Technical Leadership</span>
              <span className={styles.skillbadge}>Enterprise Architecture</span>
              <span className={styles.skillbadge}>Team Management</span>
              <span className={styles.skillbadge}>Agile/Scrum</span>
            </div>
          </div>
          <div className={styles.skillCategory}>
            <h3>Java & Backend</h3>
            <div className={styles.skills}>
              <span className={styles.skillbadge}>Java 8-21</span>
              <span className={styles.skillbadge}>Spring Boot</span>
              <span className={styles.skillbadge}>Microservices</span>
              <span className={styles.skillbadge}>REST APIs</span>
            </div>
          </div>
          <div className={styles.skillCategory}>
            <h3>Cloud & DevOps</h3>
            <div className={styles.skills}>
              <span className={styles.skillbadge}>AWS</span>
              <span className={styles.skillbadge}>Azure DevOps</span>
              <span className={styles.skillbadge}>CI/CD</span>
              <span className={styles.skillbadge}>Docker</span>
            </div>
          </div>
        </div>

        <h2 className={styles.head}>Key Achievements</h2>
        <div className={styles.achievements}>
          <p>• Led development of 30+ microservices at Accenture, resulting in a 25% improvement in system reliability and a 50% reduction in deployment time.</p>
          <p>• Architected and delivered cloud-native solutions across financial services and retail, serving 2M+ users with 99.9% uptime.</p>
          <p>• Mentored and coached 15+ engineers across distributed teams, driving Agile practices that increased delivery velocity by 40%.</p>
        </div>

        <h2 className={styles.head}>Featured Projects</h2>
        <div className={styles.projects}>
          <div className={styles.project}>
            <h3>Enterprise Microservices Platform</h3>
            <p className={styles.projectRole}>Technical Lead | Accenture</p>
            <p>Led the design and implementation of a cloud-native microservices architecture for a major financial services client, replacing monolithic legacy systems.</p>
            <div className={styles.projectOutcome}>
              <p><strong>Impact:</strong> 50% faster deployments, 25% improved reliability, serving 2M+ daily users</p>
              <p><strong>Tech Stack:</strong> Java, Spring Boot, AWS, Docker, Kubernetes</p>
            </div>
          </div>
          <div className={styles.project}>
            <h3>Data Replication & Processing System</h3>
            <p className={styles.projectRole}>Technical Lead | Accenture</p>
            <p>Architected a high-performance data replication utility for product data processing, streamlining test environments and reducing operational overhead.</p>
            <div className={styles.projectOutcome}>
              <p><strong>Impact:</strong> 50% reduction in test data preparation time, improved CI/CD efficiency</p>
              <p><strong>Tech Stack:</strong> Java, Spring Boot, Azure DevOps, Microservices</p>
            </div>
          </div>
        </div>

        <h2 className={styles.head}>Certifications</h2>
        <div className={styles.certifications}>
          <div className={styles.cert}>AWS Certified Cloud Practitioner (2024)</div>
          <div className={styles.cert}>Google Cloud Digital Leader (2024)</div>
          <div className={styles.cert}>Oracle Certified Professional, Java SE (2012)</div>
        </div>

        <h2 className={styles.head}>Contact</h2>
        <div className={styles.contact}>
          <p><strong>Email:</strong> <a className={styles.link} href="mailto:jmishel08@gmail.com">jmishel08@gmail.com</a></p>
          <p><strong>LinkedIn:</strong> <a className={styles.link} href="https://linkedin.com/in/junomishel" target="_blank">linkedin.com/in/junomishel</a></p>
          <p><strong>Status:</strong> Permanent Resident • Immediate availability</p>
        </div>


      </div>
    </div>
  );
}
