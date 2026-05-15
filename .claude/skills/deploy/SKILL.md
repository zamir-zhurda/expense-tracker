# Deploy Skill Instructions

## Purpose
The `/deploy` skill automates the complete deployment workflow for the expense tracker application.

## Workflow
When invoked, the deploy skill will execute the following steps in order:

### Step 1: Run Tests
```bash
npm test
```
- Executes all Vitest test cases
- Ensures no regressions before deployment
- Fails if any tests are failing

### Step 2: Build Production Bundle
```bash
npm run build
```
- Creates optimized production build
- Outputs to `dist/` directory
- Minifies and bundles JavaScript/CSS

### Step 3: Commit and Push
```bash
git add .
git commit -m "Deploy updates"
git push
```
- Stages all changes
- Creates commit with deploy message
- Pushes to remote repository (staging area)

## Prerequisites
- Git is configured and authenticated
- Remote repository is accessible
- All tests pass before proceeding

## Usage
Type `/deploy` in the CLI to trigger the deployment workflow.

## Error Handling
- If tests fail, deployment stops and reports the failure
- If build fails, git commit is not attempted
- If push fails, changes remain local
