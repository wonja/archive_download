evr_example
===========

Simple example usage of the tritium command line driver.

Dependencies: [open-tritium driver](http://github.com/moovweb/open-tritium) and all required clibs

### Example Usage

After building tritium, to download .mp3s of the archived Minimal Wave radio show on East Village Radio from 2009-2013, run the tritium driver with the following arguments and pipe:

`[PATH_TO_OPEN_TRITIUM_DRIVER]/tritium -f="evr.ts" -i="East Village Radio -  Shows -  Minimal Wave.html" | xargs wget -P archived_shows/ -i`

the .mp3s will be saved in a folder named archived_shows/.