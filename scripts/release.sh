#!/bin/bash
set -ex

# Exit if this commit is an NPM publication
GIT_COMMIT=$(git log -1 --pretty=%B)
if [[ $GIT_COMMIT =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
    exit 0
fi

# Set Git credentials for committing the tags
git config user.email "$GIT_EMAIL"
git config user.name "$GIT_USER"

echo "git Email: $GIT_EMAIL Username: $GIT_USER"

# Get the latest version from NPM
LATEST_RELEASE_VERSION=$(npm view @apto/aptotude version)

echo "Latest npm version $LATEST_RELEASE_VERSION"

# Bump the package.json version
npm version $LATEST_RELEASE_VERSION --no-git-tag-version --allow-same-version
npm version patch -f --allow-same-version

# Build the lib
NODE_ENV=prod npm run build:lib

# Move to lib dist directory, pack and publish to NPM
cd dist
TARBALL=$(npm pack)
npm publish $TARBALL --verbose

# Push Git commit and tag to Github
cd ../
git push origin master
CURRENT_VERSION=$(node -p "require('./package.json').version")
git push origin v$CURRENT_VERSION

# Unset local config changes
git config --unset user.email
git config --unset user.name

echo "Successfully published $TARBALL to NPM."
