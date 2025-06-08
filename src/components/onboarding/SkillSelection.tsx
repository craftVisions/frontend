import { SkillTag } from '../SkillTag';

interface SkillSelectionProps {
  selectedSkills: string[];
  onSkillToggle: (skill: string) => void;
}

export function SkillSelection({ selectedSkills, onSkillToggle }: SkillSelectionProps) {
  const categories = {
    Frontend: ['React', 'Vue', 'Angular', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Sass'],
    Backend: ['Node.js', 'Express', 'Python', 'Django', 'FastAPI', 'REST APIs', 'GraphQL'],
    Database: ['PostgreSQL', 'MongoDB', 'Redis'],
    DevOps: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP'],
    Tools: ['Git', 'Webpack', 'Vite', 'Jest'],
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Select your skills</h2>
        <p className="text-gray-600 dark:text-gray-400">Choose technologies you're comfortable with or want to learn</p>
      </div>

      <div className="space-y-6">
        {Object.entries(categories).map(([category, categorySkills]) => (
          <div key={category}>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {categorySkills.map((skill) => (
                <SkillTag
                  key={skill}
                  skill={skill}
                  selected={selectedSkills.includes(skill)}
                  onClick={() => onSkillToggle(skill)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          💡 <strong>Tip:</strong> Select 5-10 skills that best represent your expertise or learning goals.
        </p>
      </div>
    </div>
  );
}
