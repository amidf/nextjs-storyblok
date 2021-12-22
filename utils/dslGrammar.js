const r = String.raw;

const grammar = {
  //#region meta
  version: "0.0.1",
  scopeName: "source.dashaScriptingLanguage",
  fileTypes: ["dsl"],
  //#endregion
  //#region folding
  foldingStartMarker: r`\{\s*$`,
  foldingStopMarker: r`^\s*\}`,
  //#endregion
  patterns: [
    //#region comments
    {
      name: "comment.line.double-slash.dsl",
      match: r`//.*$`,
    },
    {
      name: "comment.block.dsl",
      begin: r`/\*`,
      end: r`\*/`,
    },
    //#endregion
    //#region constants
    {
      name: "constant.numeric.decimal.dsl",
      match: r`[+-]?(\d+?|\d*\d+)([eE]\d+)?`,
    },
    {
      name: "constant.language.dsl",
      match: r`true|false`,
    },
    //#endregion
    //#region strings
    // TODO
    {
      name: "string.quoted.double.dsl",
      begin: r`"`,
      end: r`"|(?<!\\)(?=]\s*\n)`,
    },
    //#endregion
    //#region keywords
    {
      name: "keyword.other.dsl.directive",
      match: r`\b(library|import|context)\b`,
    },
    {
      name: "keyword.other.dsl.definition.toplevel",
      match: r`\b(start|node|block|digression|preprocessor|external|function|type)\b`,
    },
    {
      name: "keyword.other.dsl.section",
      match: r`\b(do|transitions|onexit|digression|condition)\b`,
    },
    {
      name: "keyword.other.dsl.transtion",
      match: r`\b(on|goto|priority)\b`,
    },
    {
      name: "keyword.control.dsl",
      match: r`\b(if|on|goto|wait|done|return|blockcall|set|var)\b`,
    },
    //#endregion
    //#region types
    {
      name: "storage.type.dsl",
      match: r`\b(string|number|boolean)\b`,
    },
    //#endregion
    //#region identifiers
    {
      name: "variable.other.dsl.context",
      match: r`\$[a-zA-Z_][a-zA-Z0-9_]*`,
    },
    {
      name: "variable.language.dsl.syscall",
      match: r`#[a-zA-Z_][a-zA-Z0-9_]*`,
    },
    {
      name: "variable.other.dsl.literal",
      match: r`@[a-zA-Z_][a-zA-Z0-9_]*`,
    },
    {
      name: "variable.other.dsl.local",
      match: r`[a-zA-Z_][a-zA-Z0-9_]*`,
    },
    //#endregion
  ],
};

export default grammar;
