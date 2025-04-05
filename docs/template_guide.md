# Ynex Template Guide for ProwPlus CRM

This document provides guidance on how to effectively use the Ynex Next.js template for the development of ProwPlus CRM, optimized for AI-assisted development.

## Template Overview

The Ynex template is a comprehensive Next.js dashboard template with TypeScript and Tailwind CSS, using the App Router architecture. This guide will help developers and AI understand the most important aspects of the template to leverage during development.

## Key Template Features to Leverage

### 1. Layout Components

The template provides several layout components that should be used throughout the application:

- `PageHeader` - For consistent page headers
- `Card` components - For content containers
- `Sidebar` - For navigation
- `Breadcrumbs` - For navigation hierarchy
- Layout wrappers - For maintaining consistent page structure

### 2. Form Components

The template includes form components that should be used in the ProwPlus CRM:

- Input fields with validation
- Select dropdowns
- Date pickers
- File upload components
- Form layouts and sections

### 3. Data Display Components

For displaying data, utilize the template's:

- Tables with sorting and filtering
- Cards and card grids
- List views
- Detailed views
- Charts and graphs
- Stat cards and counters

### 4. Navigation

The template's navigation system includes:

- Main sidebar navigation
- Tabbed interfaces
- Breadcrumb trails
- Action menus
- Mobile-responsive navigation

### 5. Theming and Styling

The template has built-in theming capabilities:

- Light/dark mode
- Custom color schemes
- Responsive design utilities
- Tailwind CSS integration

## Template Structure Best Practices

When working with the template:

1. **Follow the Existing Pattern**: Mirror the existing component structure and naming
2. **Leverage Tailwind Classes**: Use the template's custom Tailwind classes
3. **Use Consistent Imports**: Follow the import patterns established in the template
4. **Maintain Responsiveness**: Use the template's responsive utilities
5. **Reuse Components**: Avoid duplicating functionality that already exists

## Common Template Components Reference

```tsx
// Example of a page layout using template components
import { PageHeader, Card } from '@/components/ui';
import { Breadcrumb } from '@/components/ui/breadcrumb';

export default function ProjectsPage() {
  return (
    <div className="page-wrapper">
      <PageHeader title="Projects" subtitle="Manage your projects">
        <Breadcrumb items={[
          { label: 'Dashboard', link: '/' },
          { label: 'Projects', link: '/projects', active: true }
        ]} />
      </PageHeader>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Card>
          {/* Card content */}
        </Card>
      </div>
    </div>
  );
}
```

## Template Customization Guidelines

When customizing the template:

1. **Theme Customization**: Modify the theme in `tailwind.config.ts` only
2. **Component Extension**: Extend existing components rather than creating new ones
3. **Layout Consistency**: Maintain consistent spacing and layout patterns
4. **Design System**: Follow the template's design system for colors, typography, and spacing

## Template Utilities to Leverage

The template includes several utilities that should be used:

- Data formatting helpers
- Form validation utilities
- Authentication helpers
- API request wrappers
- State management utilities

## Template Pages Structure

Understand the template's page structure:

```
/app
  /dashboard
    /page.tsx        # Main dashboard page
    /layout.tsx      # Dashboard layout
  /auth
    /login
      /page.tsx      # Login page
    /register
      /page.tsx      # Register page
  /[other-sections]
    /page.tsx        # Section pages
    /[id]/page.tsx   # Detail pages
```

## Template API Integration

The template may include API integration patterns:

- API route handlers in `/app/api/` directory
- Frontend API services in dedicated services directory
- Data fetching patterns (SWR or React Query)

## Template Assets and Resources

Utilize the template's existing assets:

- Icons library
- Image placeholders
- SVG illustrations
- Font configuration

By understanding and leveraging these template features, developers can maintain consistency and quickly build features for the ProwPlus CRM using AI assistance. 