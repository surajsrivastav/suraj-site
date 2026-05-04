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
          Engineering leader building scalable systems and AI platforms
        </p>
        <p className={styles.heroDescription}>
          I focus on distributed systems, backend architecture, applied AI, and
          scaling engineering organizations. Currently exploring AI agent systems
          and platform engineering at scale.
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
      title: 'System Design',
      description:
        'Distributed systems, APIs, scalability patterns, and architecture decisions for high-traffic systems.',
    },
    {
      icon: '🤖',
      title: 'Applied AI',
      description:
        'AI agents, workflow automation, and production AI systems that solve real problems.',
    },
    {
      icon: '🛠️',
      title: 'Platform Engineering',
      description:
        'Developer platforms, internal tools, and infrastructure that enables teams to move faster.',
    },
    {
      icon: '👥',
      title: 'Engineering Leadership',
      description:
        'Scaling teams, architecture decisions at scale, and building strong engineering cultures.',
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
      title: 'AI Audit Logging System',
      description:
        'Comprehensive audit logging for AI systems with structured logging, tracing, and compliance-ready output.',
      tech: ['TypeScript', 'Node.js', 'Logging'],
    },
    {
      title: 'Backend Architecture Templates',
      description:
        'Production-ready backend architecture patterns with Node.js, TypeScript, and Firestore.',
      tech: ['Node.js', 'TypeScript', 'Firestore'],
    },
    {
      title: 'Platform Engineering Experiments',
      description:
        'Exploring developer experience improvements and platform automation patterns.',
      tech: ['Go', 'Kubernetes', 'DevOps'],
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
          <li>Exploring AI agent systems and agentic workflows</li>
          <li>Designing scalable backend architectures</li>
          <li>Writing in public about systems, AI, and leadership</li>
          <li>Building engineering cultures that scale</li>
        </ul>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContent}>
        <h2>Let's work together</h2>
        <p>
          Interested in discussing systems, AI, or engineering challenges? I'd love to connect.
        </p>
        <a href="mailto:suraj.ssrivastav@gmail.com" className={`${styles.button} ${styles.buttonPrimary}`}>
          Get in touch
        </a>
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
