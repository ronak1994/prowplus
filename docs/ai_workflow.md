# AI-Optimized Development Workflow for ProwPlus CRM

This document outlines the development workflow designed to maximize effectiveness when working with Cursor AI for the ProwPlus CRM project.

## Sequential Development Approach

The ProwPlus CRM will be developed following this distinct sequence:

1. **Frontend Development** - Template customization and UI component development with mock data
2. **MongoDB Schema Design** - Database modeling and schema optimization
3. **Backend API Development** - Using node-express-boilerplate for API endpoints
4. **Integration** - Connecting frontend and backend components

This sequential approach allows us to optimize AI assistance at each stage and minimize context-switching.

## Development Principles

1. **Module-First Approach**: Develop one complete module at a time within each phase
2. **Context-Rich Development**: Provide AI with sufficient context for each task
3. **Pattern Consistency**: Establish and follow consistent patterns for similar features
4. **Incremental Development**: Build and test features in small, logical increments
5. **Documentation-Driven**: Keep documentation updated to help AI understand the codebase

## AI-Optimized Workflow for Each Phase

### Phase 1: Frontend Development

When developing the frontend with AI assistance:

1. **Template Customization**:
   ```
   Optimize the Ynex template by:
   1. Removing unused components: [list components]
   2. Customizing the branding: update colors, typography, logos
   3. Simplifying the directory structure for our needs
   ```

2. **Component Development**:
   ```
   Create a [Component Name] for the [Module] that:
   - Uses these template elements: [list elements]
   - Shows these data points: [list data]
   - Follows this existing pattern: [reference component]
   - Uses this mock data: [provide sample]
   ```

3. **Module Assembly**:
   ```
   Assemble the [Module Name] page by combining:
   - These layout components: [list components]
   - These data display components: [list components]
   - These interaction patterns: [describe patterns]
   ```

### Phase 2: MongoDB Schema Design

When designing the database schema:

1. **Collection Definition**:
   ```
   Design the [Collection Name] MongoDB schema with:
   - These required fields: [list fields]
   - These relationships: [describe relations]
   - These indexes for optimization: [list indexes]
   - Validation rules for: [list rules]
   ```

2. **Schema Optimization**:
   ```
   Optimize the [Collection Name] schema for:
   - Query performance on these operations: [list operations]
   - Data integrity with these constraints: [list constraints]
   - Scaling considerations: [describe considerations]
   ```

### Phase 3: Backend API Development

When implementing the backend with node-express-boilerplate:

1. **Model Implementation**:
   ```
   Create the Mongoose model for [Collection] using:
   - The schema design from Phase 2
   - These validation methods: [list methods]
   - These instance methods: [list methods]
   - These static methods: [list methods]
   ```

2. **Controller Implementation**:
   ```
   Implement the controller for [Resource] that:
   - Handles these endpoints: [list endpoints]
   - Includes proper error handling
   - Follows the service pattern from the boilerplate
   - Implements these validations: [list validations]
   ```

3. **Route Definition**:
   ```
   Define routes for [Resource] that:
   - Map to these controllers: [list controllers]
   - Require these permissions: [list permissions]
   - Use these validation schemas: [list schemas]
   ```

### Phase 4: Integration

When integrating frontend and backend:

1. **API Service Creation**:
   ```
   Create an API service for [Resource] that:
   - Handles these endpoints: [list endpoints]
   - Manages authentication tokens
   - Implements proper error handling
   - Includes loading state management
   ```

2. **Component Integration**:
   ```
   Update the [Component] to connect to the API by:
   - Replacing mock data with API calls
   - Adding loading states
   - Implementing error handling
   - Managing data synchronization
   ```

## Effective AI Prompting for Each Phase

### Frontend Phase Prompts

```
Customize the Ynex template for the Projects module by:
1. Creating a project list component that shows cards in a responsive grid
2. Including project title, status, team members, and dates
3. Adding filtering and sorting options
4. Following the template's card component design pattern
```

### MongoDB Schema Phase Prompts

```
Design the MongoDB schema for the Projects collection:
1. Include fields for title, description, dates, status, team members
2. Create indexes for common queries (by status, by team member, by date)
3. Define relationships with Users and Tasks collections
4. Add validation for required fields and data types
```

### Backend API Phase Prompts

```
Implement the API endpoints for Projects using node-express-boilerplate:
1. Create the mongoose model based on our schema design
2. Implement CRUD controllers with proper validation
3. Define routes with authentication and permissions
4. Add filtering, pagination, and sorting options
```

### Integration Phase Prompts

```
Integrate the Projects frontend with the API:
1. Create an API service layer for project endpoints
2. Update the ProjectList component to fetch real data
3. Implement loading and error states
4. Add authentication token handling
```

## Module Development Sequence Within Each Phase

For each phase, follow this module development sequence:

1. Dashboard Module
2. Projects Module
3. Teams Module
4. Tasks Module
5. Communication Module
6. Payments Module

## Documentation Update Process

To keep AI context current:

1. Update documentation after completing each phase
2. Document component patterns and decisions
3. Maintain a list of known issues and planned improvements
4. Document API changes and endpoints as they're implemented

## Performance Considerations for Each Phase

### Frontend Performance
- Implement code-splitting for larger modules
- Optimize component rendering with memoization
- Use image optimization techniques
- Implement virtualization for long lists

### MongoDB Performance
- Design proper indexes for common queries
- Structure data to minimize document size
- Plan for sharding and scaling
- Optimize for read vs. write operations

### Backend Performance
- Implement caching strategies
- Optimize database queries
- Use pagination for large datasets
- Implement rate limiting for API endpoints

---

By following this AI-optimized workflow across all development phases, we can maximize productivity and maintain code quality throughout the development of ProwPlus CRM. 