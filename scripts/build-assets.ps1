$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot

$source = Join-Path $root "assets"
$target = Join-Path $root "docs/assets"

Write-Host "Building TRƯỜNG YÊN FOOD OS assets..."

if (Test-Path $target) {
    Remove-Item $target -Recurse -Force
}

Copy-Item $source $target -Recurse -Force

Write-Host "Assets built successfully."
Write-Host "Source : $source"
Write-Host "Target : $target"