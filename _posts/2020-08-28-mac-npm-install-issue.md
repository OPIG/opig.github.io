### facing `com.apple.pkg.CLTools_Executables` issue

my project was written on windows, when i fetch my remote code to local (mac), and try to run `npm install`, got error which contain `com.apple.pkg.CLTools_Executables`.
the resolution I have took and solved my issue is:

 1. `xcode-select --install`
 2. get error `xcode-select: error: command line tools are already installed, use "Software Update" to install updates`
 3. run `sudo rm -rf /Library/Developer/CommandLineTools`
 4. re-run `xcode-select --install`
 5. Done
