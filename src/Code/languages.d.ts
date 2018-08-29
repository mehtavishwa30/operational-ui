/**
 * How this file is generated?
 *
 * 1. Go to https://developer.github.com/v4/explorer/
 *
 * 2. Enter the following query:
 *
 * ```
 * query {
 *   repository(name: "highlight.js", owner: "highlightjs"){
 *     object(expression: "master:src/languages") {
 *       ... on Tree{
 *         entries{
 *           name
 *         }
 *       }
 *     }
 *   }
 * }
 * ```
 *
 * 3. Copy the result in your clipboard
 *
 * 4. Open a chrome console
 *
 * 5. Assign your clipboard to `a` -> `const a = {paste}`
 *
 * 6. Parse the result
 *  `a.data.repository.object.entries.map(i => i.name.slice(0, -3)).join("\"|\"")`
 */

export type Languages =
  | "1c"
  | "abnf"
  | "accesslog"
  | "actionscript"
  | "ada"
  | "apache"
  | "applescript"
  | "arduino"
  | "armasm"
  | "asciidoc"
  | "aspectj"
  | "autohotkey"
  | "autoit"
  | "avrasm"
  | "awk"
  | "axapta"
  | "bash"
  | "basic"
  | "bnf"
  | "brainfuck"
  | "cal"
  | "capnproto"
  | "ceylon"
  | "clean"
  | "clojure-repl"
  | "clojure"
  | "cmake"
  | "coffeescript"
  | "coq"
  | "cos"
  | "cpp"
  | "crmsh"
  | "crystal"
  | "cs"
  | "csp"
  | "css"
  | "d"
  | "dart"
  | "delphi"
  | "diff"
  | "django"
  | "dns"
  | "dockerfile"
  | "dos"
  | "dsconfig"
  | "dts"
  | "dust"
  | "ebnf"
  | "elixir"
  | "elm"
  | "erb"
  | "erlang-repl"
  | "erlang"
  | "excel"
  | "fix"
  | "flix"
  | "fortran"
  | "fsharp"
  | "gams"
  | "gauss"
  | "gcode"
  | "gherkin"
  | "glsl"
  | "go"
  | "golo"
  | "gradle"
  | "groovy"
  | "haml"
  | "handlebars"
  | "haskell"
  | "haxe"
  | "hsp"
  | "htmlbars"
  | "http"
  | "hy"
  | "inform7"
  | "ini"
  | "irpf90"
  | "java"
  | "javascript"
  | "jboss-cli"
  | "json"
  | "julia-repl"
  | "julia"
  | "kotlin"
  | "lasso"
  | "ldif"
  | "leaf"
  | "less"
  | "lisp"
  | "livecodeserver"
  | "livescript"
  | "llvm"
  | "lsl"
  | "lua"
  | "makefile"
  | "markdown"
  | "mathematica"
  | "matlab"
  | "maxima"
  | "mel"
  | "mercury"
  | "mipsasm"
  | "mizar"
  | "mojolicious"
  | "monkey"
  | "moonscript"
  | "n1ql"
  | "nginx"
  | "nimrod"
  | "nix"
  | "nsis"
  | "objectivec"
  | "ocaml"
  | "openscad"
  | "oxygene"
  | "parser3"
  | "perl"
  | "pf"
  | "php"
  | "pony"
  | "powershell"
  | "processing"
  | "profile"
  | "prolog"
  | "protobuf"
  | "puppet"
  | "purebasic"
  | "python"
  | "q"
  | "qml"
  | "r"
  | "rib"
  | "roboconf"
  | "routeros"
  | "rsl"
  | "ruby"
  | "ruleslanguage"
  | "rust"
  | "scala"
  | "scheme"
  | "scilab"
  | "scss"
  | "shell"
  | "smali"
  | "smalltalk"
  | "sml"
  | "sqf"
  | "sql"
  | "stan"
  | "stata"
  | "step21"
  | "stylus"
  | "subunit"
  | "swift"
  | "taggerscript"
  | "tap"
  | "tcl"
  | "tex"
  | "thrift"
  | "tp"
  | "twig"
  | "typescript"
  | "vala"
  | "vbnet"
  | "vbscript-html"
  | "vbscript"
  | "verilog"
  | "vhdl"
  | "vim"
  | "x86asm"
  | "xl"
  | "xml"
  | "xquery"
  | "yaml"
  | "zephir"
