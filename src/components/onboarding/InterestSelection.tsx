import { SkillTag } from '../SkillTag';

interface InterestSelectionProps {
  selectedInterests: string[];
  onInterestToggle: (interest: string) => void;
}

export function InterestSelection({ selectedInterests, onInterestToggle }: InterestSelectionProps) {
  const categories = {
    'Development Areas': ['Web Development', 'Mobile Development', 'Game Development', 'DevOps'],
    'Technologies': ['AI/ML', 'Data Science', 'Blockchain', 'IoT', 'Cybersecurity'],
    'Project Types': ['Open Source', 'Social Impact', 'EdTech', 'FinTech', 'HealthTech'],
    'Learning Focus': ['System Design', 'Competitive Programming', 'UI/UX Design']
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          What interests you?
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Help us find projects that align with your passions
        </p>
      </div>

      <div className="space-y-6">
        {Object.entries(categories).map(([category, categoryInterests]) => (
          <div key={category}>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {categoryInterests.map((interest) => (
                <SkillTag
                  key={interest}
                  skill={interest}
                  selected={selectedInterests.includes(interest)}
                  onClick={() => onInterestToggle(interest)}
                  variant="secondary"
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <p className="text-sm text-purple-800 dark:text-purple-200">
          🎯 <strong>Tip:</strong> Select areas you're passionate about to get better project matches.
        </p>
      </div>
    </div>
  );
}