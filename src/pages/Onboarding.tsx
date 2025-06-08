import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import type { OnboardingData } from '../types';
import { RoleSelection } from '../components/onboarding/RoleSelection';
import { SkillSelection } from '../components/onboarding/SkillSelection';
import { InterestSelection } from '../components/onboarding/InterestSelection';


export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(0);
  const [onboardingData, setOnboardingData] = useState<OnboardingData>({
    skills: [],
    interests: []
  });
  const updateProfile = (param: any) => console.log('update profile ');

  const steps = [
    { title: 'Role', component: 'role' },
    { title: 'Skills', component: 'skills' },
    { title: 'Interests', component: 'interests' }
  ];

  const handleRoleSelect = (role: string) => {
    setOnboardingData(prev => ({ ...prev, role }));
  };

  const handleSkillToggle = (skill: string) => {
    setOnboardingData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleInterestToggle = (interest: string) => {
    setOnboardingData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return !!onboardingData.role;
      case 1:
        return onboardingData.skills.length > 0;
      case 2:
        return onboardingData.interests.length > 0;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete onboarding
      updateProfile({
        role: onboardingData.role as any,
        skills: onboardingData.skills,
        interests: onboardingData.interests
      });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <RoleSelection
            selectedRole={onboardingData.role}
            onRoleSelect={handleRoleSelect}
          />
        );
      case 1:
        return (
          <SkillSelection
            selectedSkills={onboardingData.skills}
            onSkillToggle={handleSkillToggle}
          />
        );
      case 2:
        return (
          <InterestSelection
            selectedInterests={onboardingData.interests}
            onInterestToggle={handleInterestToggle}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    index < currentStep
                      ? 'bg-green-500 text-white'
                      : index === currentStep
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400'
                  }`}
                >
                  {index < currentStep ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    index + 1
                  )}
                </div>
                <span
                  className={`ml-2 font-medium ${
                    index <= currentStep
                      ? 'text-gray-900 dark:text-white'
                      : 'text-gray-500 dark:text-gray-400'
                  }`}
                >
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div
                    className={`w-12 h-0.5 mx-4 ${
                      index < currentStep
                        ? 'bg-green-500'
                        : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="mt-4">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Step {currentStep + 1} of {steps.length}
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Step Content */}
        <Card padding="lg" className="mb-8">
          {renderStepContent()}
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          
          <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
            {currentStep === 0 && onboardingData.role && '✓ Role selected'}
            {currentStep === 1 && `${onboardingData.skills.length} skills selected`}
            {currentStep === 2 && `${onboardingData.interests.length} interests selected`}
          </div>

          <Button
            onClick={handleNext}
            disabled={!canProceed()}
          >
            {currentStep === steps.length - 1 ? 'Complete Setup' : 'Next'}
            {currentStep < steps.length - 1 && <ChevronRight className="w-4 h-4 ml-2" />}
          </Button>
        </div>
      </div>
    </div>
  );
}