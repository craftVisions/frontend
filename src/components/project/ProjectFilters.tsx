import { Filter, X } from 'lucide-react';
import { SkillTag } from '../SkillTag';
import { Button } from '../ui/Button';

interface ProjectFiltersProps {
  selectedTechStack: string[];
  selectedSkillLevel?: string;
  selectedRole?: string;
  onTechStackFilter: (tech: string) => void;
  onSkillLevelFilter: (level: string | undefined) => void;
  onRoleFilter: (role: string | undefined) => void;
  onClearFilters: () => void;
}

export function ProjectFilters({
  selectedTechStack,
  selectedSkillLevel,
  selectedRole,
  onTechStackFilter,
  onSkillLevelFilter,
  onRoleFilter,
  onClearFilters
}: ProjectFiltersProps) {
  const popularTech = ['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS'];
  const skillLevels = ['beginner', 'intermediate', 'advanced'];
  const roles = ['frontend', 'backend', 'fullstack', 'devops'];

  const hasActiveFilters = selectedTechStack.length > 0 || selectedSkillLevel || selectedRole;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-gray-500" />
          <h3 className="font-semibold text-gray-900 dark:text-white">Filters</h3>
        </div>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={onClearFilters}>
            <X className="w-4 h-4 mr-1" />
            Clear all
          </Button>
        )}
      </div>

      <div className="space-y-4">
        {/* Tech Stack Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Technology Stack
          </label>
          <div className="flex flex-wrap gap-2">
            {popularTech.map((tech) => (
              <SkillTag
                key={tech}
                skill={tech}
                selected={selectedTechStack.includes(tech)}
                onClick={() => onTechStackFilter(tech)}
              />
            ))}
          </div>
        </div>

        {/* Skill Level Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Skill Level
          </label>
          <div className="flex flex-wrap gap-2">
            {skillLevels.map((level) => (
              <button
                key={level}
                onClick={() => onSkillLevelFilter(selectedSkillLevel === level ? undefined : level)}
                className={`px-3 py-1 rounded-full text-sm font-medium border-2 transition-all duration-200 ${
                  selectedSkillLevel === level
                    ? 'bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-900 dark:text-blue-200 dark:border-blue-600'
                    : 'bg-gray-100 text-gray-700 border-transparent hover:border-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:border-gray-600'
                }`}
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Role Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Looking for Role
          </label>
          <div className="flex flex-wrap gap-2">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => onRoleFilter(selectedRole === role ? undefined : role)}
                className={`px-3 py-1 rounded-full text-sm font-medium border-2 transition-all duration-200 ${
                  selectedRole === role 
                    ? 'bg-purple-100 text-purple-800 border-purple-300 dark:bg-purple-900 dark:text-purple-200 dark:border-purple-600'
                    : 'bg-gray-100 text-gray-700 border-transparent hover:border-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:border-gray-600'
                }`}
              >
                {role.charAt(0).toUpperCase() + role.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}