import { profile } from '../data/profile'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div>
        <strong>{profile.name}</strong>
        <span>Software Engineer · Full Stack · Cloud & DevOps</span>
      </div>
      <div>
        {profile.social.map((link) => (
          <a key={link.label} href={link.href} target={link.label === 'Email' ? undefined : '_blank'} rel={link.label === 'Email' ? undefined : 'noreferrer'}>
            {link.label}
          </a>
        ))}
      </div>
      <span>Built with React.js · {year}</span>
    </footer>
  )
}