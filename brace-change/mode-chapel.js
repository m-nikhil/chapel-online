ace.define("ace/mode/chapel_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../lib/oop");
var TextHighlightRules = acequire("./text_highlight_rules").TextHighlightRules;

var ChapelHighlightRules = function() {

    this.$rules = {
        start: [{
            include: "#comments"
        }, {
            token: "keyword.control.chapel",
            regex: /\b(?:align|as|atomic|begin|break|by|class|cobegin|coforall|continue|delete|dmapped|do|else|enum|except|export|extern|for|forall|if|index|inline|iter|label|lambda|let|local|module|new|noinit|on|only|otherwise|pragma|private|proc|public|record|reduce|acequire|return|scan|select|serial|then|union|use|var|when|where|while|with|yield|zip)\b/
        }, {
            token: "storage.type.chapel",
            regex: /\b(?:bool|real|int|uint|imag|complex|dmap|domain|string|range|tuple)\b/
        }, {
            token: "storage.modifier.chapel",
            regex: /\b(?:config|const|param|private|public|sparse|single|type|enum)\b/
        }, {
            token: "constant.language.chapel",
            regex: /\b(?:true|false|nil)\b/
        }, {
            token: "constant.numeric.chapel",
            regex: /\b(?:0(?:x|X)[0-9a-fA-F]*|(?:[0-9]+\.?[0-9]*|\.[0-9]+)(?:(?:e|E)(?:\+|-)?[0-9]+)?)(?:L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\b/
        }, {
            token: "variable.language.chapel",
            regex: /\b(?:this|super|these|here|Locales|LocaleSpace|numLocales|locale|FileAccessMode)\b/
        }, {
            token: "punctuation.definition.string.begin.chapel",
            regex: /"/,
            push: [{
                token: "punctuation.definition.string.end.chapel",
                regex: /"/,
                next: "pop"
            }, {
                defaultToken: "string.quoted.double.chapel"
            }]
        }, {
            token: "punctuation.definition.string.begin.chapel",
            regex: /'/,
            push: [{
                token: "punctuation.definition.string.end.chapel",
                regex: /'/,
                next: "pop"
            }, {
                include: "#string_escaped_char"
            }, {
                defaultToken: "string.quoted.single.chapel"
            }]
        }, {
            token: "keyword.operator.comparison.chapel",
            regex: /<\=|>\=|\=\=|<|>|\!\=/
        }, {
            token: "keyword.operator.assignment.augmented.chapel",
            regex: /\+\=|-\=|\*\=|\/\=|\/\/\=|%\=|&\=|\|\=|\^\=|>>\=|<<\=|\*\*\=/
        }, {
            token: "keyword.operator.arithmetic.chapel",
            regex: /\+|\-|\*|\*\*|\/|\/\/|%|<<|>>|&|\||\^|~|<\=>\\.\.\./
        }, {
            token: "keyword.operator.assignment.chapel",
            regex: /\=/
        }, {
            token: "keyword.operator.others.chapel",
            regex: /:/
        }, {
            token: "keyword.operator.domain.chapel",
            regex: /\[|\]/
        }, {
            token: [
                "meta.function.chapel",
                "keyword.control.chapel",
                "meta.function.chapel"
            ],
            regex: /^(\s*)(proc)(\s+)(?=[A-Za-z_][A-Za-z0-9_]*)/,
            push: [{
                token: "meta.function.chapel",
                regex: /\(|\s*(?:$|#.*$)/,
                next: "pop"
            }, {
                token: "text",
                regex: /(?=[A-Za-z_][A-Za-z0-9_]*)/,
                push: [{
                    token: "text",
                    regex: /(?![A-Za-z0-9_])/,
                    next: "pop"
                }, {
                    defaultToken: "entity.name.function.chapel"
                }]
            }, {
                token: "text",
                regex: /proc/
            }, {
                token: "text",
                regex: /\(/,
                push: [{
                    token: "text",
                    regex: /(?=\)).*\{/,
                    next: "pop"
                }, {
                    token: "variable.parameter.function.chapel",
                    regex: /\b[a-zA-Z_][a-zA-Z_0-9]*/
                }, {
                    defaultToken: "meta.function.parameters.chapel"
                }]
            }, {
                defaultToken: "meta.function.chapel"
            }]
        }, {
            token: "meta.function-call.chapel",
            regex: /(?=[A-Za-z_][A-Za-z0-9_]*(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*\s*\()/,
            push: [{
                token: "meta.function-call.chapel",
                regex: /\)/,
                next: "pop"
            }, {
                token: "text",
                regex: /(?=[A-Za-z_][A-Za-z0-9_]*(?:\.[A-Za-z_][A-Za-z0-9_]*)*\s*\()/,
                push: [{
                    token: "text",
                    regex: /(?=\s*\()/,
                    next: "pop"
                }, {
                    include: "#builtin_functions"
                }]
            }, {
                todo: {
                    token: "punctuation.definition.arguments.begin.chapel",
                    regex: /\(/,
                    push: [{
                        token: "text",
                        regex: /(?=\))/,
                        next: "pop"
                    }, {
                        include: "$self"
                    }, {
                        defaultToken: "meta.function-call.arguments.chapel"
                    }]
                }
            }, {
                defaultToken: "meta.function-call.chapel"
            }]
        }],
        "#builtin_functions": [{
            token: "support.function.builtin.chapel",
            regex: /\b(?:abs|max|min|sqrt|write|writeln|read|readln|open|close|exit)\b/
        }],
        "#comments": [{
            token: [
                "comment.block.chapel",
                "meta.toc-list.banner.block.c",
                "comment.block.chapel"
            ],
            regex: /^(\/\* =)(\s*.*?)(\s*= \*\/$)/
        }, {
            token: "punctuation.definition.comment.c",
            regex: /\/\*/,
            push: [{
                token: "punctuation.definition.comment.c",
                regex: /\*\//,
                next: "pop"
            }, {
                defaultToken: "comment.block.chapel"
            }]
        }, {
            token: "invalid.illegal.stray-comment-end.c",
            regex: /\*\/.*$/
        }, {
            token: [
                "comment.line.banner.c++",
                "meta.toc-list.banner.line.c",
                "comment.line.banner.c++"
            ],
            regex: /^(\/\/ =)(\s*.*?)(\s*=\s*$)/
        }],
        "#entity_name_function": [{
            include: "#illegal_names"
        }, {
            include: "#generic_names"
        }],
        "#generic_names": [{
            token: "text",
            regex: /[A-Za-z_][A-Za-z0-9_]*/
        }],
        "#illegal_names": [{
            token: "invalid.illegal.name.chapel",
            regex: /\b(?:align|as|atomic|begin|break|by|class|cobegin|coforall|continue|delete|dmapped|do|else|enum|except|export|extern|for|forall|if|index|inline|iter|label|lambda|let|local|module|new|noinit|on|only|otherwise|pragma|private|proc|public|record|reduce|acequire|return|scan|select|serial|then|union|use|var|when|where|while|with|yield|zip)\b/
        }]
    }
    
    this.normalizeRules();
};

ChapelHighlightRules.metaData = {
    fileTypes: ["chpl"],
    foldingStartMarker: "(?x)\n\t\t /\\*\\*(?!\\*)\n\t\t|^(?![^{]*?//|[^{]*?/\\*(?!.*?\\*/.*?\\{)).*?\\{\\s*($|//|/\\*(?!.*?\\*/.*\\S))\n\t",
    foldingStopMarker: "(?<!\\*)\\*\\*/|^\\s*\\}",
    name: "Chapel",
    scopeName: "source.chapel"
}


oop.inherits(ChapelHighlightRules, TextHighlightRules);

exports.ChapelHighlightRules = ChapelHighlightRules;
});

ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../../lib/oop");
var Range = acequire("../../range").Range;
var BaseFoldMode = acequire("./fold_mode").FoldMode;

var FoldMode = exports.FoldMode = function(commentRegex) {
    if (commentRegex) {
        this.foldingStartMarker = new RegExp(
            this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start)
        );
        this.foldingStopMarker = new RegExp(
            this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end)
        );
    }
};
oop.inherits(FoldMode, BaseFoldMode);

(function() {
    
    this.foldingStartMarker = /(\{|\[)[^\}\]]*$|^\s*(\/\*)/;
    this.foldingStopMarker = /^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/;
    this.singleLineBlockCommentRe= /^\s*(\/\*).*\*\/\s*$/;
    this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
    this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
    this._getFoldWidgetBase = this.getFoldWidget;
    this.getFoldWidget = function(session, foldStyle, row) {
        var line = session.getLine(row);
    
        if (this.singleLineBlockCommentRe.test(line)) {
            if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))
                return "";
        }
    
        var fw = this._getFoldWidgetBase(session, foldStyle, row);
    
        if (!fw && this.startRegionRe.test(line))
            return "start"; // lineCommentRegionStart
    
        return fw;
    };

    this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {
        var line = session.getLine(row);
        
        if (this.startRegionRe.test(line))
            return this.getCommentRegionBlock(session, line, row);
        
        var match = line.match(this.foldingStartMarker);
        if (match) {
            var i = match.index;

            if (match[1])
                return this.openingBracketBlock(session, match[1], row, i);
                
            var range = session.getCommentFoldRange(row, i + match[0].length, 1);
            
            if (range && !range.isMultiLine()) {
                if (forceMultiline) {
                    range = this.getSectionRange(session, row);
                } else if (foldStyle != "all")
                    range = null;
            }
            
            return range;
        }

        if (foldStyle === "markbegin")
            return;

        var match = line.match(this.foldingStopMarker);
        if (match) {
            var i = match.index + match[0].length;

            if (match[1])
                return this.closingBracketBlock(session, match[1], row, i);

            return session.getCommentFoldRange(row, i, -1);
        }
    };
    
    this.getSectionRange = function(session, row) {
        var line = session.getLine(row);
        var startIndent = line.search(/\S/);
        var startRow = row;
        var startColumn = line.length;
        row = row + 1;
        var endRow = row;
        var maxRow = session.getLength();
        while (++row < maxRow) {
            line = session.getLine(row);
            var indent = line.search(/\S/);
            if (indent === -1)
                continue;
            if  (startIndent > indent)
                break;
            var subRange = this.getFoldWidgetRange(session, "all", row);
            
            if (subRange) {
                if (subRange.start.row <= startRow) {
                    break;
                } else if (subRange.isMultiLine()) {
                    row = subRange.end.row;
                } else if (startIndent == indent) {
                    break;
                }
            }
            endRow = row;
        }
        
        return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
    };
    this.getCommentRegionBlock = function(session, line, row) {
        var startColumn = line.search(/\s*$/);
        var maxRow = session.getLength();
        var startRow = row;
        
        var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
        var depth = 1;
        while (++row < maxRow) {
            line = session.getLine(row);
            var m = re.exec(line);
            if (!m) continue;
            if (m[1]) depth--;
            else depth++;

            if (!depth) break;
        }

        var endRow = row;
        if (endRow > startRow) {
            return new Range(startRow, startColumn, endRow, line.length);
        }
    };

}).call(FoldMode.prototype);

});

ace.define("ace/mode/chapel",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/chapel_highlight_rules","ace/mode/folding/cstyle"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../lib/oop");
var TextMode = acequire("./text").Mode;
var ChapelHighlightRules = acequire("./chapel_highlight_rules").ChapelHighlightRules;
var FoldMode = acequire("./folding/cstyle").FoldMode;

var Mode = function() {
    this.HighlightRules = ChapelHighlightRules;
    this.foldingRules = new FoldMode();
};
oop.inherits(Mode, TextMode);

(function() {
    this.$id = "ace/mode/chapel"
}).call(Mode.prototype);

exports.Mode = Mode;
});
