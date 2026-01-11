:root {
  --bg: #f7f4ed;
  --dark: #1e1e1e;
  --accent: #6aa38b;
  --muted: #777;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Inter, sans-serif;
  background: var(--bg);
  color: var(--dark);
}

/* NAV */
.nav {
  display: flex;
  justify-content: space-between;
  padding: 25px 60px;
  align-items: center;
}

.logo {
  font-weight: 700;
  letter-spacing: 2px;
}

.nav ul {
  display: flex;
  gap: 30px;
  list-style: none;
}

.nav a {
  text-decoration: none;
  color: var(--muted);
}

/* HERO */
.hero {
  min-height: 90vh;
  display: flex;
  align-items: center;
}

.hero-inner {
  display: grid;
  grid-template-columns: 60px 1fr;
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
}

.bars span {
  display: block;
  width: 6px;
  height: 80px;
  margin-bottom: 12px;
  background: var(--accent);
}

.hero-content h1 {
  font-family: "Playfair Display", serif;
  font-size: 64px;
  line-height: 1.05;
  margin: 20px 0;
}

.hero-content h1 span {
  color: var(--accent);
}

.hero-desc {
  max-width: 520px;
  color: #555;
  margin: 20px 0 35px;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 12px;
  color: var(--muted);
}

/* BUTTONS */
.hero-actions .btn {
  padding: 14px 26px;
  margin-right: 15px;
  border-radius: 30px;
  text-decoration: none;
  font-size: 14px;
}

.primary {
  background: var(--accent);
  color: white;
}

.outline {
  border: 1px solid var(--dark);
  color: var(--dark);
}

/* SECTIONS */
.section {
  max-width: 1100px;
  margin: auto;
  padding: 100px 20px;
}

.section h2 {
  font-family: "Playfair Display", serif;
  font-size: 42px;
  margin-bottom: 50px;
}

/* TIMELINE */
.timeline-item {
  border-left: 2px solid var(--accent);
  padding-left: 20px;
  margin-bottom: 40px;
}

.timeline-item span {
  color: var(--accent);
  font-size: 14px;
}

/* PROJECTS */
.dark {
  background: #111;
  color: #eee;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
}

.card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.card h3 {
  margin: 15px 0 8px;
}

/* CONTACT */
.contact a {
  color: var(--accent);
  text-decoration: none;
}

/* FOOTER */
footer {
  text-align: center;
  padding: 40px;
  color: #777;
}
