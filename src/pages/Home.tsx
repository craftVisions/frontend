import { Plus, Search } from 'lucide-react';
import { useMemo, useState } from 'react';

import { Navbar } from '../components/Navbar';
import { ProjectCard } from '../components/project/ProjectCard';
import { ProjectFilters } from '../components/project/ProjectFilters';
import { Button } from '../components/ui/Button';
import { mockProjects } from '../data/mockData';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTechStack, setSelectedTechStack] = useState<string[]>([]);
  const [selectedSkillLevel, setSelectedSkillLevel] = useState<string>();
  const [selectedRole, setSelectedRole] = useState<string>();

  const filteredProjects = useMemo(() => {
    return mockProjects.filter((project) => {
      // Search query filter
      if (
        searchQuery &&
        !project.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !project.description.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Tech stack filter
      if (selectedTechStack.length > 0 && !selectedTechStack.some((tech) => project.techStack.includes(tech))) {
        return false;
      }

      // Skill level filter
      if (selectedSkillLevel && project.skillLevel !== selectedSkillLevel) {
        return false;
      }

      // Role filter (this would be based on project requirements in a real app)
      if (selectedRole) {
        // For demo purposes, we'll assume projects are looking for all roles
        return true;
      }

      return true;
    });
  }, [searchQuery, selectedTechStack, selectedSkillLevel, selectedRole]);

  const handleTechStackFilter = (tech: string) => {
    setSelectedTechStack((prev) => (prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]));
  };

  const handleClearFilters = () => {
    setSelectedTechStack([]);
    setSelectedSkillLevel(undefined);
    setSelectedRole(undefined);
    setSearchQuery('');
  };

  const handleJoinProject = (projectId: string) => {
    console.log('Joining project:', projectId);
    // In a real app, this would send a request to join the project
  };

  const handleViewProject = (projectId: string) => {
    console.log('Viewing project:', projectId);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar currentPage="feed" onNavigate={() => console.log('on nv')} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Discover Projects</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Find collaborative projects that match your skills and interests
            </p>
          </div>

          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
            </div>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create Project
            </Button>
          </div>
        </div>

        <div className="lg:flex lg:space-x-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80 mb-8 lg:mb-0">
            <ProjectFilters
              selectedTechStack={selectedTechStack}
              selectedSkillLevel={selectedSkillLevel}
              selectedRole={selectedRole}
              onTechStackFilter={handleTechStackFilter}
              onSkillLevelFilter={setSelectedSkillLevel}
              onRoleFilter={setSelectedRole}
              onClearFilters={handleClearFilters}
            />
          </div>

          {/* Projects Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600 dark:text-gray-400">
                {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
              </p>
              <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white">
                <option>Sort by: Most Recent</option>
                <option>Sort by: Most Contributors</option>
                <option>Sort by: Skill Level</option>
              </select>
            </div>

            {filteredProjects.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No projects found</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Try adjusting your filters or search terms</p>
                <Button variant="outline" onClick={handleClearFilters}>
                  Clear filters
                </Button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onJoinProject={handleJoinProject}
                    onViewProject={handleViewProject}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
