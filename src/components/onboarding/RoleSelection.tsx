import { roles } from '../../data/mockData';
import { Card } from '../ui/Card';

interface RoleSelectionProps {
  selectedRole?: string;
  onRoleSelect: (role: string) => void;
}

export function RoleSelection({ selectedRole, onRoleSelect }: RoleSelectionProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          What's your role?
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          This helps us recommend relevant projects for you
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        {roles.map((role) => (
          <Card
            key={role.id}
            hover
            className={`cursor-pointer transition-all duration-200 ${
              selectedRole === role.id
                ? 'ring-2 ring-blue-500 border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                : 'hover:ring-1 hover:ring-gray-300'
            }`}
            onClick={() => onRoleSelect(role.id)}
          >
            <div className="text-center">
              <div className="text-4xl mb-4">{role.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {role.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {role.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}