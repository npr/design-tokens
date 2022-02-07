# design-tokens

## Export from Figma
[Figma doc with AV Controls](https://www.figma.com/file/d4pVpuT3kihjuZTc4tolmV/icons-for-export-design-tokens) (icons used in MVP)

Plugin used for export is DSync – check documentation [here](https://www.figma.com/community/plugin/1012112455906916204/DSync)

### Reasoning for the choice of plugin:
Does not require CLI and hence, can be used by designers
Requires the simplest organizational structure within Figma (all icons need to be simply made into components)
Can be integrated with design tokens (i.e. colors, fonts)

### Steps:
- Put all icons into one frame
- Make sure that every icon is a Figma component
- Install the DSync plugin
- Run the plugin (Plugins > DSync)
- When a pop-up window “Sync design system with code?” appears, fill in the information:
    - Repo name: design-tokens
    - Github token: your personal access token (x)
    - Owner name: npr
    - Head branch: staging
    - Base branch: main

## GitHub steps
GitHub repo: https://github.com/npr/design-tokens 
The icons should now be on a staging branch under the design-tokens/packages/common/src/assets/dsIcons/ directory. The plugin automatically adds a “Updating Design System Styles” message to the commit.

A pull request is created automatically. In the MVP, the SVGO and AWS steps are not relevant, and icons can be simply merged with the main branch and pulled locally to be used in Xcode. 

## The optional SVGO step
An [SVGO](https://github.com/svg/svgo) script should be used to simplify the SVG code and shrink the size of the icons.
NOTE: This step does **not** help with adapting icons for Xcode / SFSymbols (more on that below). 
NOTE 2: The step is currently optional because it does not make any significant difference for the AV Controls icons, since the code for them is already very simple (SVGO doesn’t shrink them by more than 1%). SVGO, however, can help with more complex icons NPR uses. 

### Steps:
- Pull icons from the staging branch to a local directory
- Make sure to sync config and package.json with the local directory
- Run on CLI: npm run-script “svgEdit”
- Modified icons end up in the design-tokens-repo/output directory (can be changed in config)
- Sync with the main branch

## The optional AWS step
NOTE: This part of the documentation has not been finished.
The icons can be synced with a server using an automation tool, like it was done with favicons on the web. In this case, we would use .gitignore and have them be synced with an AWS bucket directly. 

## Integration with Xcode
### SFSymbols
Upon some testing, I’ve discovered that there is no framework or tool that could help adapt our icons for SFSymbols. The reason for this is that SFSymbols only accepts custom icons that were made out of their own templates. There is no way to take an external icon (like ours) and convert it into a format appropriate for SFSymbols requirements. 
Furthermore, SFSymbols is only supported in Xcode 12+ anyway, which doesn’t solve the issue for pre-iOS 13 versions outlined below. 
For more details on this issue, [this](https://www.avanderlee.com/swift/sf-symbols-guide/) blog post covers it well.

### Current XCode support
SVGs started being supported directly in Xcode 12+ (and therefore, iOS 13+). If used with Xcode 12, SVGs can be directly dragged into the Assets catalog. Usage: ([x](https://www.avanderlee.com/xcode/svg-image-assets/))
Note: Only 8% of iPhones, as of last year (January 2021) were below iOS 13. Source: ([x](https://www.statista.com/statistics/565270/apple-devices-ios-version-share-worldwide/))

### Solutions for previous versions
For earlier versions of Xcode / iOS, there seems to be a number of easy-to-use Swift libraries that integrate SVGs:
- [SwiftSVG](https://github.com/mchoe/SwiftSVG)
- [Macaw](https://github.com/exyte/Macaw) (although it seems to be more appropriate for motion graphics and has a more complex integration because of that)


