evr_example
===========

Simple example usage of the tritium command line driver.

Dependencies: [open-tritium driver](http://github.com/moovweb/open-tritium) and all required clibs

### Example Usage

After building tritium, to download the most recent .mp3s of archived [Wefunk](http://www.wefunkradio.com/) radio shows, run the tritium driver with the following arguments and pipe:

` wget -P archived_shows/ -i -- $( curl http://www.wefunkradio.com/shows/750 | ../open-tritium/tritium -f="wefunk.ts" ) `

To download more, you can specify the paginated URLs in wefunk_shows.txt, and run:

` wget -P archived_shows/ -i -- $( curl -K wefunk_shows.txt | ../open-tritium/tritium -f="wefunk.ts" ) `

the .mp3s will be saved in the folder named archived_shows/.
Note: wget will lag slightly at first, due to the <!DOCTYPE> element.

===========

To do the same thing with Minimal wave shows on East Village Radio (html source downloaded from internet archive), run:

`[PATH_TO_OPEN_TRITIUM_DRIVER]/tritium -f="evr/evr.ts" -i="evr/East Village Radio -  Shows -  Minimal Wave.html" | xargs wget -P archived_shows/ -i`