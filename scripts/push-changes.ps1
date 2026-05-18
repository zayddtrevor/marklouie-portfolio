param(
  [string]$Message = "Update portfolio"
)

$ErrorActionPreference = "Stop"

$status = git status --porcelain

if (-not $status) {
  Write-Host "No changes to commit."
  exit 0
}

git add .
git commit -m $Message
git push
