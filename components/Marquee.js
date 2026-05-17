export default function Marquee() {
  const items = [
    'React', 'Next.js', 'Java', 'Firebase', 'TypeScript', 'Android',
    'Node.js', 'MySQL', 'MongoDB', 'Docker', 'PHP', 'Python',
    'React Native', 'Figma', 'UI / UX', 'Full Stack',
    'React', 'Next.js', 'Java', 'Firebase', 'TypeScript', 'Android',
    'Node.js', 'MySQL', 'MongoDB', 'Docker', 'PHP', 'Python',
    'React Native', 'Figma', 'UI / UX', 'Full Stack',
  ];

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {items.map((item, i) => (
          <div className="marquee-item" key={i}>
            <span className="dot" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
