export default function Header() {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Nikhitha_Resume.pdf";
    link.click();
  };

  return (
    <div className="header">
      <h1>Nikhitha Chavvakula</h1>
      <p>AI & ML Student | React Developer</p>

      <p>
        📞 +91-7893882860 | ✉️ nikhithachavvakula14@gmail.com
      </p>

      <div className="links">
        <button onClick={() => window.open("https://www.linkedin.com/in/nikhitha-chavvakula-954826344/", "_blank")}>
          LinkedIn
        </button>

        <button onClick={() => window.open("https://github.com/nikithachavvakula", "_blank")}>
          GitHub
        </button>

       
      </div>

      <button onClick={handleDownload} className="resume-btn">
        📄 Download Resume
      </button>
    </div>
  );
}