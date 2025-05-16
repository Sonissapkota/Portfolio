const Skills = () => {
      const skillsData = [
        {
          category: "Programming Languages",
          skills: [
            { name: "Python", percentage: 85 },
            { name: "JavaScript", percentage: 75 },
            { name: "TypeScript", percentage: 70 },
            { name: "SQL", percentage: 80 },
            { name: "Java", percentage: 60 },
          ],
        },
        {
          category: "Framework & Libraries",
          skills: [
            { name: "Node.js", percentage: 80 },
            { name: "Express", percentage: 85 },
            { name: "Django", percentage: 75 },
            { name: "Flask", percentage: 80 },
            { name: "React", percentage: 65 },
          ],
        },
        {
          category: "DB & Tools",
          skills: [
            { name: "PostgreSQL", percentage: 85 },
            { name: "MongoDB", percentage: 80 },
            { name: "Git", percentage: 75 },
            { name: "Docker", percentage: 70 },
            { name: "Linux", percentage: 70 }
          ],
        },
      ];

      return (
        <section id="skills" className="py-16 md:py-24 bg-white/50 relative">
            <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {skillsData.map((category, index) => (
              <div key={index} className="bg-white p-4 rounded-sm shadow">
                <div className="flex items-center mb-6">
                <h3 className="text-xl font-medium">{category.category}</h3>
              </div>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="mb-2">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm font-medium text-gray-700">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-1.5">
                      <div
                        className="bg-gray-800 h-1.5"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        </section>
    );
};

export default Skills;