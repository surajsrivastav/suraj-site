import React from 'react';
import Link from '@docusaurus/Link';
import styles from './Card.module.css';

export default function Card({ icon, title, description, href, children }) {
  const CardComponent = href ? Link : 'div';

  return (
    <CardComponent
      to={href}
      className={styles.card}
      style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
    >
      {icon && <div className={styles.icon}>{icon}</div>}
      {title && <h3 className={styles.title}>{title}</h3>}
      {description && <p className={styles.description}>{description}</p>}
      {children}
    </CardComponent>
  );
}
