
interface SkillTagProps {
  skill: string;
  selected?: boolean;
  onClick?: () => void;
  variant?: 'default' | 'primary' | 'secondary';
}

export function SkillTag({ skill, selected = false, onClick, variant = 'default' }: SkillTagProps) {
  const baseClasses = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-all duration-200';
  
  const variants = {
    default: selected
      ? 'bg-blue-100 text-blue-800 border-2 border-blue-300 dark:bg-blue-900 dark:text-blue-200 dark:border-blue-600'
      : 'bg-gray-100 text-gray-700 border-2 border-transparent hover:border-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:border-gray-600',
    primary: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    secondary: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
  };

  return (
    <span
      className={`${baseClasses} ${variants[variant]} ${onClick ? 'cursor-pointer hover:shadow-md' : ''}`}
      onClick={onClick}
    >
      {skill}
    </span>
  );
}