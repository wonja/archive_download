html() {
  # Select the body
  $("/html") {
    $("./body") {
      # Append a class to the body tag
      add_class("moov")

      $(".//a[contains(@class,'show-item')]") {
        $(".//div[@class='shownum']") {
          $num = text()
        }
        attribute("id") {
          value() {
            replace("sp_", "")
          }
          $date = value()
        }
        $("/html") {
          inject_before("http://wefunkhub.com/media/WeFunk_Show_"+$num+"_"+$date+".mp3 ")
        }
      }
    }
    remove("./preceding-sibling::*")
  }
  remove("/html")
  remove(".//comment()")

}