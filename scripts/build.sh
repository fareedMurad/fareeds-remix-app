#!/usr/bin/env sh

set -eux

# Define package paths
package1="$(pwd)/packages/assessment"

for i in "$package1"; do
  cd "$i"
  npm run build
done
