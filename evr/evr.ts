html() {
  # Select the body
  $("/html") {
    $("./body") {
      # Append a class to the body tag
      add_class("moov")


      # Sometimes empty blocks break stuff
      $(".//table[contains(@id, 'shows-table')]/tbody/tr") {
        $("./td[last()]/a") {
          $a = "blah"
          attribute("href") {
            value() {
              replace("javascript:player('/shows/player/main.php?p=1280&f=", "")
              replace("javascript:player('/shows/player/main.php?p=1280&amp;f=", "")
              replace("javascript:player('player/main.php?p=1280&f=", "")
              replace("javascript:player('player/main.php?p=1280&amp;f=", "")
              replace("')", "")
            }
            $a = value()
          }
          $("/html") {
            inject_after("http://www.eastvillageradio.com/archivedshows/1280/"+$a+".mp3 ")
          }
        }
      }
    }
  }
  remove("/html")
  remove(".//comment()")
}