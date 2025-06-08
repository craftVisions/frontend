import { Users, Calendar, Star, GitBranch } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Avatar } from '../ui/Avatar';
import type { Project } from '../../types';
import { SkillTag } from '../SkillTag';

interface ProjectCardProps {
  project: Project;
  onJoinProject?: (projectId: string) => void;
  onViewProject?: (projectId: string) => void;
}

export function ProjectCard({ project, onJoinProject, onViewProject }: ProjectCardProps) {
  const skillLevelColors = {
    beginner: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    advanced: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
  };

  const isProjectFull = project.contributors.length >= project.maxContributors;

  return (
    <Card hover className="h-full flex flex-col">
      <div className="flex-1">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
            {project.title}
          </h3>
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${skillLevelColors[project.skillLevel]}`}
          >
            {project.skillLevel}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="space-y-3 mb-4">
          <div className="flex flex-wrap gap-1">
            {project.techStack.slice(0, 4).map((tech) => (
              <SkillTag key={tech} skill={tech} variant="primary" />
            ))}
            {project.techStack.length > 4 && (
              <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
                +{project.techStack.length - 4} more
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-2 text-xs text-gray-500 dark:text-gray-400">
            {project.tags.map((tag) => (
              <span key={tag} className="flex items-center">
                <Star className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span>{project.contributors.length}/{project.maxContributors}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{new Date(project.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2 mb-4">
          <Avatar
            src={project.createdBy.avatar}
            alt={project.createdBy.name}
            size="sm"
            fallback={project.createdBy.name}
          />
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {project.createdBy.name}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Project Lead
            </p>
          </div>
        </div>

        {project.contributors.length > 0 && (
          <div className="mb-4">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Contributors:</p>
            <div className="flex -space-x-2">
              {project.contributors.slice(0, 3).map((contributor) => (
                <Avatar
                  key={contributor.id}
                  src={contributor.avatar}
                  alt={contributor.name}
                  size="sm"
                  fallback={contributor.name}
                />
              ))}
              {project.contributors.length > 3 && (
                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center text-xs font-medium text-gray-600 dark:text-gray-300">
                  +{project.contributors.length - 3}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="flex space-x-2 pt-4 border-t border-gray-200 dark:border-gray-700">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onViewProject?.(project.id)}
          className="flex-1"
        >
          <GitBranch className="w-4 h-4 mr-2" />
          View
        </Button>
        <Button
          size="sm"
          onClick={() => onJoinProject?.(project.id)}
          disabled={isProjectFull || !project.isOpen}
          className="flex-1"
        >
          {isProjectFull ? 'Full' : 'Join Project'}
        </Button>
      </div>
    </Card>
  );
}