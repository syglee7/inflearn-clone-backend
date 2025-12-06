# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a NestJS TypeScript backend application using pnpm as the package manager. The project follows NestJS's modular architecture pattern with controllers, services, and modules.

## Essential Commands

### Package Management
```bash
pnpm install                # Install dependencies
```

### Development
```bash
pnpm run start:dev         # Run in watch mode (recommended for development)
pnpm run start:debug       # Run with debugger attached
pnpm run start:prod        # Run production build
```

### Build
```bash
pnpm run build             # Build the project (outputs to dist/)
```

### Linting and Formatting
```bash
pnpm run lint              # Run ESLint with auto-fix
pnpm run format            # Format code with Prettier
```

### Testing
```bash
pnpm run test              # Run unit tests
pnpm run test:watch        # Run tests in watch mode
pnpm run test:cov          # Run tests with coverage report
pnpm run test:e2e          # Run end-to-end tests
pnpm run test:debug        # Run tests with debugger
```

## Architecture

### Module Structure
This is a NestJS application following the standard module-based architecture:

- **Modules** (`*.module.ts`): Organize the application into cohesive blocks of functionality
  - `AppModule` is the root module that imports all other modules
  - Each module declares its controllers and providers

- **Controllers** (`*.controller.ts`): Handle incoming HTTP requests and return responses
  - Use decorators like `@Controller()`, `@Get()`, `@Post()`, etc.
  - Should be thin and delegate business logic to services

- **Services** (`*.service.ts`): Contain business logic
  - Decorated with `@Injectable()`
  - Injected into controllers via dependency injection

- **Entry Point** (`main.ts`): Bootstraps the NestJS application
  - Creates the app using `NestFactory.create()`
  - Listens on port 3000 by default (configurable via `PORT` env var)

### TypeScript Configuration
- Uses modern module resolution (`nodenext`)
- Decorators are enabled (`experimentalDecorators`, `emitDecoratorMetadata`)
- Strict null checks enabled
- `noImplicitAny` is disabled

### Code Style
- **ESLint**: Uses TypeScript ESLint with recommended type-checked rules
  - `@typescript-eslint/no-explicit-any` is disabled
  - `@typescript-eslint/no-floating-promises` and `@typescript-eslint/no-unsafe-argument` are warnings
- **Prettier**: Single quotes, trailing commas, auto end-of-line handling

### Testing
- **Unit Tests**: Located next to source files as `*.spec.ts`
  - Jest configuration in package.json with rootDir set to `src/`
  - Use ts-jest for TypeScript transformation

- **E2E Tests**: Located in `test/` directory as `*.e2e-spec.ts`
  - Separate Jest configuration at `test/jest-e2e.json`
  - Test the application from the user's perspective

## Development Workflow

When adding new features:
1. Create a module using NestJS CLI: `nest generate module <name>`
2. Add controllers: `nest generate controller <name>`
3. Add services: `nest generate service <name>`
4. Import the new module in the appropriate parent module
5. Write unit tests alongside your code
6. Run `pnpm run test` to verify tests pass
7. Run `pnpm run lint` before committing

## NestJS Patterns

- Use dependency injection via constructor parameters
- Services should be decorated with `@Injectable()`
- Controllers handle HTTP layer, services contain business logic
- Each module should have a clear, single responsibility
- Use NestJS built-in decorators for route handling, validation, etc.

[Rules prompt]
you are an expert AI programming assistant in VSCode that primarily focuses on producing clear, readable code.  
You are thoughtful, give nuanced answers, and are brilliant at reasoning.  
You carefully provide accurate, factual, and thoughtful answers, and you are a genius at reasoning.

1. Follow the user's requirements carefully and precisely.
2. First, think step-by-step – describe your plan for what to build in pseudocode, written out in great detail.
3. Confirm, then write the code!
4. Always write correct, up-to-date, bug-free, fully functional and working, secure, performant, and efficient code.
5. Focus on **readability** over performance.
6. Fully implement all requested functionality.
7. Leave **NO** to-dos, placeholders, or missing pieces.
8. Ensure the code is complete! Thoroughly verify the final version.
9. Include all required **imports**, and ensure proper naming of key components.
10. Be concise. Minimize any unnecessary explanations.
11. If you think there might not be a correct answer, say so. If you do not know the answer, admit it instead of guessing.
12. Always provide concise answers.
13. Please answer in Korean
