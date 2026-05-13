import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Card from '../components/Card';
import SectionHeader from '../components/SectionHeader';
import styles from './index.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Suraj Srivastav</h1>
        <p className={styles.heroSubtitle}>
          Staff Software Engineer | Distributed Systems | Technical Leadership
        </p>
        <p className={styles.heroDescription}>
          15+ years building and modernizing large-scale distributed systems at Ford.
          Technical authority on cloud-native platforms (AWS, GCP) processing 2M+ monthly transactions.
          Focused on distributed systems, platform engineering, SRE practices, and AI-augmented developer productivity.
        </p>
        <div className={styles.heroCTA}>
          <Link to="/blog" className={`${styles.button} ${styles.buttonPrimary}`}>
            Read Writing
          </Link>
          <a href="#projects" className={`${styles.button} ${styles.buttonSecondary}`}>
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}

function FocusAreas() {
  const areas = [
    {
      icon: '🏗️',
      title: 'Distributed Systems',
      description:
        'Large-scale cloud-native platforms (AWS, GCP), microservices, event-driven architecture, and systems handling millions of transactions.',
    },
    {
      icon: '🛠️',
      title: 'Platform Engineering',
      description:
        'Building golden paths, standardized CI/CD pipelines, developer productivity, and infrastructure that scales to 190+ teams.',
    },
    {
      icon: '🚀',
      title: 'SRE & Observability',
      description:
        'DORA metrics, trunk-based development, distributed tracing, and designing for 2-hour MTTR at scale.',
    },
    {
      icon: '🤖',
      title: 'AI-Augmented Engineering',
      description:
        'Spec-Driven Development, GitHub Copilot integration, Model Context Protocol, and LLM-based developer workflows.',
    },
  ];

  return (
    <section className={styles.section}>
      <SectionHeader
        title="Focus Areas"
        description="What I think about and write about"
      />
      <div className={styles.grid}>
        {areas.map((area, idx) => (
          <Card
            key={idx}
            icon={area.icon}
            title={area.title}
            description={area.description}
          />
        ))}
      </div>
    </section>
  );
}

function WritingPreview() {
  const recentPosts = [
    {
      title: 'Designing Scalable Backend Systems',
      date: 'May 1, 2026',
      excerpt:
        'A deep dive into the patterns and principles for building backend systems that scale.',
      href: '/blog/designing-scalable-backend-systems',
      tags: ['Systems', 'Architecture'],
    },
    {
      title: 'AI Agents in Production Workflows',
      date: 'April 28, 2026',
      excerpt:
        'How to architect and deploy AI agents for real production use cases.',
      href: '/blog/ai-agents-production-workflows',
      tags: ['AI', 'Systems'],
    },
    {
      title: 'Engineering Leadership at Scale',
      date: 'April 25, 2026',
      excerpt:
        'Lessons learned scaling engineering teams and maintaining velocity.',
      href: '/blog/engineering-leadership-at-scale',
      tags: ['Leadership'],
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.writingHeader}>
        <SectionHeader title="Latest Writing" />
        <Link to="/blog" className={styles.viewAll}>
          View all articles →
        </Link>
      </div>
      <div className={styles.postsGrid}>
        {recentPosts.map((post, idx) => (
          <article key={idx} className={styles.postCard}>
            <Link to={post.href} style={{ textDecoration: 'none' }}>
              <h3 className={styles.postTitle}>{post.title}</h3>
            </Link>
            <p className={styles.postDate}>{post.date}</p>
            <p className={styles.postExcerpt}>{post.excerpt}</p>
            <div className={styles.postTags}>
              {post.tags.map((tag, tagIdx) => (
                <span key={tagIdx} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: 'Ford Experience Platform',
      description:
        'GCP-native platform serving 2M+ monthly transactions. Architected cloud-native migration from legacy COTS to microservices and event-driven architecture. Increased customer retention to 36% (100%+ above industry benchmarks).',
      tech: ['GCP', 'Microservices', 'Event-Driven'],
    },
    {
      title: 'Ford Pro Gateway',
      description:
        'Micro-frontend platform enabling 190+ product teams with unified design system and consistent experiences. Simplified authentication across B2C, B2B, and internal systems.',
      tech: ['React', 'Micro-Frontends', 'Architecture'],
    },
    {
      title: 'Order-to-Delivery Transformation',
      description:
        'Reduced order-to-delivery cycle time by 76% (60 to 14 days). Re-architected monolithic systems into Java/Spring Boot microservices. Launched 5 vehicle lines.',
      tech: ['Java/Spring', 'Microservices', 'Kafka'],
    },
  ];

  return (
    <section className={styles.section} id="projects">
      <SectionHeader
        title="Projects & Explorations"
        description="Things I'm building and experimenting with"
      />
      <div className={styles.projectsGrid}>
        {projects.map((project, idx) => (
          <div key={idx} className={styles.projectCard}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.techStack}>
              {project.tech.map((tech, techIdx) => (
                <span key={techIdx} className={styles.techBadge}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Now() {
  return (
    <section className={styles.section}>
      <SectionHeader title="Now" description="What I'm focused on right now" />
      <div className={styles.nowContent}>
        <ul className={styles.nowList}>
          <li>Technical authority on GCP-native platforms and cloud architecture</li>
          <li>Spec-Driven Development and GitHub Copilot integration at scale</li>
          <li>Building golden paths and standardized CI/CD pipelines for 190+ teams</li>
          <li>SRE practices: trunk-based development, DORA metrics, distributed tracing</li>
          <li>AI-augmented developer productivity with Model Context Protocol</li>
          <li>Published thought leadership on distributed systems and engineering practices</li>
        </ul>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContent}>
        <h2>Get in touch</h2>
        <p>
          Interested in discussing distributed systems, platform engineering,
          or technical strategy? Let's connect.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="mailto:suraj.ssrivastav@gmail.com" className={`${styles.button} ${styles.buttonPrimary}`}>
            Email
          </a>
          <a href="https://linkedin.com/in/surajsrivastav" className={`${styles.button} ${styles.buttonSecondary}`}>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout title="Suraj Srivastav — Engineering Leader" description="Systems, AI, and leadership">
      <main className={styles.main}>
        <Hero />
        <FocusAreas />
        <WritingPreview />
        <Projects />
        <Now />
        <CTA />
      </main>
    </Layout>
  );
}
