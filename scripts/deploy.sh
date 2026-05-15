#!/bin/bash

set -e

echo "🚀 Deploying expense-tracker to staging..."

# Step 1: Run tests
echo "🧪 Running tests..."
npm test

# Step 2: Build production bundle
echo "📦 Building production bundle..."
npm run build

# Step 3: Create git commit and push to staging branch
echo "📤 Pushing to staging..."
git add dist/
git commit -m "chore: deploy builds" --no-verify
git push

echo "✅ Deployment complete!"
