# js-console-color
javascript console with colors (sensible defaults,overridable)

## Usage

~~~javascript
import {debug, log, info, warn, error} from "js-console-color";
debug("debug", "message");
log("log", "message");
info("info", "message");
warn("warn", "message");
error("error", "message");
~~~

## Configuration

`js-console-color` allows configuration of the console methods using the [chalk](https://github.com/chalk/chalk) library.

~~~javascript
import jsConsoleColorEnv from "js-console-color";
jsConsoleColorEnv({
  info: ["purple", "bold"],
  warn: ["red", "italic"]
});
~~~
