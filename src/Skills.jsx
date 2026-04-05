export default function Skills() {
  const skills = [
    "Python", "Java", "JavaScript",
    "HTML", "CSS", "Bootstrap",
    "React", "Git", "VS Code"
  ];

  return (
    <div className="card">
      <h2>Skills</h2>
      {skills.map((skill, index) => (
        <span key={index} className="skill-tag">
          {skill}
        </span>
      ))}
    </div>
  );
}