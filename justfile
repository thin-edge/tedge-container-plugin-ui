
RELEASE_VERSION := env_var_or_default("RELEASE_VERSION", `jq -r '.version' package.json`)

# Trigger a release (by creating a tag)
release:
    git tag -a "{{RELEASE_VERSION}}" -m "{{RELEASE_VERSION}}"
    git push origin "{{RELEASE_VERSION}}"
    @echo
    @echo "Created release (tag): {{RELEASE_VERSION}}"
    @echo
