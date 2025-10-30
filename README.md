# WorldMapNcdc

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.2.

## Project Overview

WorldMapNcdc is an Angular application dedicated to preserving and celebrating cooperative cultural heritage worldwide. The application showcases tangible and intangible cooperative traditions, provides an interactive world map for exploring heritage sites, and serves as a platform for the International Cooperative Alliance (ICA) to document and promote cooperative cultural practices.

## Features

- Interactive world map with heritage site markers
- Comprehensive display of tangible and intangible cooperative heritage
- Information about cooperative cultural criteria and principles
- Responsive design with modern UI components
- Multi-language support structure

## Application Structure

### Routing System

The application uses Angular Router with the following routes:

- `/` - Home page (default route)
- `/about` - About the cooperative cultural heritage initiative
- `/list` - The cooperative cultural heritage list
- `/tangible` - Tangible heritage sites and monuments
- `/intangible` - Intangible heritage traditions and practices
- `/aboutTangiblePage` - Detailed information about tangible heritage
- `/aboutInTangiblePage` - Detailed information about intangible heritage
- `/coomingSoon` - Coming soon page for upcoming features
- `/criteria` - Criteria for identifying cultural heritage
- `/nomination` - Nomination process for heritage sites
- `/member` - Members section

### Components Architecture

#### Main Components

1. **App Component** (`src/app/app.ts`)
   - Root component that provides the application shell
   - Includes header, footer, and router outlet
   - Imports: RouterOutlet, Header, Footer

2. **Home Component** (`src/app/components/home/home.ts`)
   - Landing page with hero section and overview
   - Displays statistics (47 countries, 152 items, 89 practices)
   - Features cards for tangible and intangible heritage
   - Uses WorldMapComponent for interactive map display

3. **World Map Component** (`src/app/components/world-map/world-map.component.ts`)
   - Interactive Leaflet-based world map
   - Displays markers for heritage sites worldwide
   - Includes popup information for each location
   - Features satellite and street map layers
   - Handles navigation to heritage site details

#### Feature Components

4. **About Component** (`src/app/components/about/about.ts`)
   - FAQ section about cooperative cultural heritage
   - Explains the vision, purpose, and ICA involvement
   - Uses Banner component for consistent header styling

5. **The List Component** (`src/app/components/the-list/the-list.ts`)
   - Displays the cooperative cultural heritage list
   - Currently minimal implementation, ready for expansion

6. **Tangible Component** (`src/app/components/tangible/tangible.ts`)
   - Showcases tangible heritage sites (monuments, buildings, etc.)
   - Card-based layout with images and descriptions
   - Links to detailed information pages

7. **Intangible Component** (`src/app/components/intangible/intangible.ts`)
   - Presents intangible heritage (traditions, practices, knowledge)
   - Similar card layout to tangible component
   - Differentiated by badge styling

8. **Criteria Component** (`src/app/components/criteria/criteria.component.ts`)
   - Defines criteria for identifying cooperative cultural heritage
   - Lists 5 key principles: Historical Significance, Cooperative Cultural Value, Educational Role, Sustainability, and Recognition

#### Sub-components

9. **About Tangible Component** (`src/app/components/about-tangible/about-tangible.ts`)
   - Detailed information about tangible heritage
   - Uses Banner component

10. **About In-Tangible Component** (`src/app/components/about-in-tangible/about-in-tangible.component.ts`)
    - Detailed information about intangible heritage
    - Uses Banner component

11. **Coming Soon Component** (`src/app/components/coomingsoon/coomingsoon.component.ts`)
    - Placeholder for upcoming features
    - Uses Banner component

12. **Nomination Component** (`src/app/components/criteria/components/nomination/nomination.component.ts`)
    - Handles nomination process for heritage sites
    - Uses Banner component

13. **Members Component** (`src/app/components/criteria/components/members/members.component.ts`)
    - Members section for the cooperative community
    - Uses Banner component

#### Shared Components

14. **Header Component** (`src/app/shared/header/header.ts`)
    - Navigation header with responsive menu
    - Tracks current route to adjust styling
    - Includes logo and navigation links

15. **Footer Component** (`src/app/shared/footer/footer.ts`)
    - Application footer
    - Basic implementation, ready for content addition

16. **Banner Component** (`src/app/shared/banner/banner.ts`)
    - Reusable banner component with customizable background and text
    - Used across multiple pages for consistent branding
    - Accepts gradient background, center image, and title inputs

### Component Interactions and Data Flow

1. **Navigation Flow**:
   - Header provides global navigation
   - Router outlet in App component renders active route components
   - Components use RouterLink for internal navigation

2. **Data Sharing**:
   - Components are largely independent with local data
   - WorldMapComponent uses Router for programmatic navigation
   - Shared components (Header, Footer, Banner) provide consistent UI

3. **User Interactions**:
   - Home page buttons navigate to different sections
   - World map markers trigger popups with "View Details" buttons
   - Cards in tangible/intangible components link to detail pages

### Component Structure Analysis & Improvements

#### Current Structure Issues

1. **Code Duplication**:
   - Tangible and Intangible components have nearly identical implementations
   - World Map component is used in Home but also exists as standalone route

2. **Inconsistent Organization**:
   - Criteria component has sub-components in `components/` folder, creating deep nesting
   - Some components are minimal/empty while others are feature-complete

3. **Component Responsibility**:
   - Home component includes both layout and world map functionality
   - Shared components could be better utilized across features

#### Recommended Structural Improvements

1. **Eliminate Code Duplication**:
   - Create a shared `HeritageCardComponent` to replace duplicate card logic in Tangible/Intangible
   - Consolidate World Map usage - either embed in Home or make it a proper standalone feature

2. **Improve Folder Organization**:
   - Move criteria sub-components to top-level: `src/app/components/nomination/` and `src/app/components/members/`
   - Group related components: `src/app/components/heritage/` containing tangible, intangible, and shared heritage logic

3. **Component Consolidation**:
   - Merge minimal components (AboutTangible, AboutInTangible) with their parent components or give them distinct purposes
   - TheList component should either be implemented or removed if not needed

4. **Better Separation of Concerns**:
   - Extract data arrays (cards, FAQs, criteria) into separate service files
   - Home component should focus on layout, not contain business logic

5. **Consistent Naming & Structure**:
   - Standardize component file naming (some use `.component.ts`, others don't)
   - Ensure all components follow same import/export patterns

#### Benefits of These Changes

- **Reduced Maintenance**: Less duplicate code means fewer places to update
- **Better Readability**: Clearer component purposes and relationships
- **Improved Reusability**: Shared components can be used across features
- **Easier Testing**: Smaller, focused components are easier to test
- **Scalability**: Better structure supports future growth without major refactoring

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
