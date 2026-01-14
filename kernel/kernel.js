export function parse(command) {
  var cmd_type = command.split(".")[0]
  var cmd = command.split(".")[1].split("(")[0]
  var command = command.split(".")[1].split("(")[1].replace("'", "")
  
}
