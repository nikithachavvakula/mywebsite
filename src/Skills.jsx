export default function Skills() {
  const skills = [
    "React.js", "JavaScript",
    "HTML", "CSS", "Responsive Design",
    "Git", "GitHub", "VS Code",
    "Google Colab", "Jupyter Notebook"
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