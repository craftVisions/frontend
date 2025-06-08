import { Code, Users, MessageCircle, ArrowRight, Star, Github, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ThemeToggle } from '../components/ThemeToggle';

const Landing = () => {
  const features = [
    {
      icon: Code,
      title: 'Open-Source Projects',
      description: 'Discover and contribute to exciting projects across different tech stacks and skill levels.',
    },
    {
      icon: Users,
      title: 'Peer Collaboration',
      description: 'Connect with like-minded developers and learn together through hands-on project work.',
    },
    {
      icon: MessageCircle,
      title: 'Real-time Communication',
      description: 'Built-in chat rooms for each project to facilitate seamless team collaboration.',
    },
    {
      icon: Sparkles,
      title: 'Skill-based Learning',
      description: 'Find projects that match your skill level and interests for optimal learning experience.',
    },
  ];

  const stats = [
    { label: 'Active Projects', value: '500+' },
    { label: 'Developers', value: '2,500+' },
    { label: 'Contributions', value: '10,000+' },
    { label: 'Tech Stacks', value: '50+' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Code className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">DevCollab</span>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button variant="ghost" onClick={() => console.log('login')}>
                Log In
              </Button>
              <Button onClick={() => console.log('login')}>Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Join projects.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Learn together.
              </span>{' '}
              Build better.
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Connect with developers worldwide, contribute to open-source projects, and accelerate your learning
              through collaborative coding experiences.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" onClick={() => console.log('login')} className="group">
                Start Contributing
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => console.log('login')}>
                Explore Projects
              </Button>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose DevCollab?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need to grow as a developer through collaborative project work
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} hover className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Collaboration Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of developers who are already building amazing projects together
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              variant="outline"
              onClick={() => console.log('login')}
              className="bg-white text-blue-600 border-white hover:bg-gray-50"
            >
              <Github className="mr-2 w-5 h-5" />
              Sign up with GitHub
            </Button>
            <Button
              size="lg"
              onClick={() => console.log('login')}
              className="bg-purple-700 hover:bg-purple-800 border-purple-700"
            >
              <Star className="mr-2 w-5 h-5" />
              Create Account
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Code className="w-6 h-6 text-blue-400" />
              <span className="text-lg font-semibold text-white">DevCollab</span>
            </div>
            <p className="text-gray-400 text-sm">© 2024 DevCollab. Empowering developers through collaboration.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
