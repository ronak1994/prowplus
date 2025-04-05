# ProwPlus Component Guide

This document provides guidance on how to use and extend UI components for the ProwPlus CRM project, optimized for AI-assisted development.

## Component Hierarchy

For consistency and AI-friendly development, we'll follow this component hierarchy:

1. **Layout Components** - Page layouts, containers, sections
2. **UI Components** - Buttons, cards, inputs, modals, etc.
3. **Module Components** - Feature-specific components (Projects, Tasks, etc.)
4. **Page Components** - Full pages assembled from other components

## Component Naming Conventions

- Use PascalCase for component names: `ProjectCard`, `TaskList`
- Use camelCase for props and variables
- Suffix container components with "Container": `DashboardContainer`
- Suffix list components with "List": `UserList`
- Suffix item components with "Item": `TaskItem`
- Suffix form components with "Form": `ProjectForm`

## Component Structure

Each component folder should contain:

```
/ComponentName
  - index.ts           # Export the component
  - ComponentName.tsx  # Main component file
  - ComponentName.types.ts  # TypeScript interfaces for the component
```

## Common Component Patterns

### Data Fetching Pattern

```tsx
// Component with data fetching
import { useState, useEffect } from 'react';
import { Task } from '@/types';

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        // Replace with actual API call
        const response = await fetch('/api/tasks');
        const data = await response.json();
        setTasks(data);
        setIsLoading(false);
      } catch (err) {
        setError('Error fetching tasks');
        setIsLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}
```

### Form Component Pattern

```tsx
// Form component pattern
import { useState } from 'react';

interface ProjectFormProps {
  onSubmit: (data: ProjectFormData) => void;
  initialData?: ProjectFormData;
}

export default function ProjectForm({ onSubmit, initialData }: ProjectFormProps) {
  const [formData, setFormData] = useState(initialData || {
    title: '',
    summary: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
    </form>
  );
}
```

## Styling Approach

We'll use a combination of Tailwind CSS classes and the template's styling system:

1. Use Tailwind CSS for most styling needs
2. Use template's component classes for specialized UI elements
3. Create custom CSS modules only when necessary

## Template-Specific Components

The Ynex template provides several pre-built components that we should leverage:

- Cards and panels
- Form inputs and controls
- Buttons and badges
- Tables and data grids
- Charts and visualizations
- Navigation elements

When creating new features, first check if the template has an appropriate component before creating a custom one.

## Responsive Design Guidelines

Follow these responsive breakpoints:

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

Ensure all components are mobile-friendly by default, with responsive adaptations for larger screens.

## Accessibility Guidelines

- Use semantic HTML elements
- Provide alt text for images
- Ensure proper keyboard navigation
- Maintain adequate color contrast
- Use ARIA attributes when necessary

## Component Documentation

When creating new components, include these documentation elements in comments to help AI understand the component:

```tsx
/**
 * ProjectCard - Displays project information in a card format
 * 
 * @component
 * @example
 * ```tsx
 * <ProjectCard 
 *   project={{
 *     id: '1',
 *     title: 'Project Title',
 *     summary: 'Project description',
 *     status: 'active',
 *     startDate: new Date(),
 *     endDate: new Date(),
 *   }}
 *   onEdit={() => {}}
 * />
 * ```
 */
```

This structured approach will help AI more effectively generate and modify components throughout development. 