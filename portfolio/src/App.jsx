import { profile, skills, projects, socials } from './data'

export default function App() {
  return (
    <>
      <header className="hero">
        <h1>{profile.name}</h1>
        <p>{profile.tagline}</p>
        <a className="button" href={`mailto:${profile.email}`}>
          Contact me
        </a>
      </header>

      <main>
        <section>
          <h2>About</h2>
          <p>{profile.about}</p>
        </section>

        <section>
          <h2>Skills</h2>
          <ul className="chips">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Projects</h2>
          <div className="cards">
            {projects.map((p) => (
              <a key={p.title} className="card" href={p.url} target="_blank" rel="noreferrer">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer>
        {socials.map((s) => (
          <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
            {s.label}
          </a>
        ))}
      </footer>
    </>
  )
}
