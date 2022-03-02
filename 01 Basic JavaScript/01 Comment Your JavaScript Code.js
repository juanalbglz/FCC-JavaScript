/*
Title:  Comment Your JavaScript Code
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comment-your-javascript-code
*/

/* Example
Comments are lines of code that JavaScript will intentionally ignore. Comments are a great way to leave notes to yourself and to other people who will later need to figure out what that code does.

There are two ways to write comments in JavaScript:

Using // will tell JavaScript to ignore the remainder of the text on the current line. This is an in-line comment:

// This is an in-line comment.
You can make a multi-line comment beginning with /* and ending with . This is a multi-line comment:*/

/* This is a
multi-line comment */
//NOTE: As you write code, you should regularly add comments to clarify the function of parts of your code. Good commenting can help communicate the intent of your code—both for others and for your future self.


/* Exercise*/
//COMPLETE Try creating one of each type of comment.


/* Solution */

// This is a one line comment
// As usign the Todo Tree Extension in VSCode I can use also those tags to get an overview of the needs of the codebase / project:
// TODO for those things I have  to do
// FIXME to tag corrections needed on the code
// BUG to tag an error
// HACK to tag some improvement
// [ ] for TODO tasks
// [x] DONE tasks
/* 
TODO for those things I have want to do
FIXME to tag corrections needed on the code
BUG to tag an error
HACK to tag some improvement
[ ] for TODO tasks
[x] DONE tasks

TODO for those things I have want to do  
FIXME to tag corrections needed on the code
BUG to tag an error
HACK to tag some improvement
[ ] for TODO tasks
[x] DONE tasks
TODO",
FIXME",
COMPLETE",s
BUG",
HACK",
NOTE",
IMPORTANT",
[ ]",
[x]",



configured #FILE settings.json
following #URL: https://www.truesec.com/hub/blog/configuring-vscode-todo-tree and others


*/

/*IMPORTANT VSCODE CONFIGURATION FOR TODO TREE settings.json
    "terminal.external.linuxExec": "gnome-terminal",
    "terminal.explorerKind": "external",
    "terminal.integrated.allowMnemonics": true,
    "terminal.integrated.copyOnSelection": true,
    "terminal.integrated.cursorBlinking": true,
    "terminal.integrated.cursorStyle": "line",
    "terminal.integrated.defaultProfile.linux": "zsh",
    "diffEditor.wordWrap": "on",
    "editor.wordWrap": "on",
    "github.copilot.enable": {
        "*": true,
        "yaml": false,
        "plaintext": false,
        "markdown": false,
        "javascript": false
    },
    "debug.console.fontFamily": "NotoSansMono Nerd Font",
    "editor.inlayHints.fontFamily": "NotoSansMono Nerd Font",
    "editor.fontFamily": "NotoSansMono Nerd Font",
    "todo-tree.highlights.defaultHighlight": {
        "icon": "alert",
        "type": "text-and-comment",
        "foreground": "black",
        "background": "white",
        "opacity": 50,
        "iconColour": "blue",
        "gutterIcon": true,
    },
    "todo-tree.highlights.customHighlight": {
        "TODO": {
            "icon": "circle",
            "foreground": "firebrick",
            "background": "lightgray",
            "iconColour": "firebrick",
        },
        "COMPLETE": {
            "icon": "check-circle-fill",
            "foreground": "gray",
            "background": "lightgreen",
            "iconColour": "lightgreen",
            "textDecoration": "line-through",
        },
        "NOTE": {
            "icon": "note",
            "foreground": "white",
            "background": "gray",
            "iconColour": "darkgray",
        },
        "COMMENT": {
            "icon": "note",
            "foreground": "white",
            "background": "gray",
            "iconColour": "gray",
        },
        "FIXME": {
            "background": "crimson",
            "foreground": "white",
            "icon": "alert",
            "iconColour": "red",
        },
        "IMPORTANT": {
            "background": "crimson",
            "foreground": "white",
            "icon": "dot-fill",
            "iconColour": "red",
        },
        "HACK": {
            "background": "yellow",
            "foreground": "black",
            "icon": "meter",
            "iconColour": "yellow",
        },
        "BUG": {
            "foreground": "black",
            "background": "darkorange",
            "iconColour": "darkorange",
            "icon": "bug",
        },
        "[ ]": {
            "icon": "circle",
            "foreground": "firebrick",
            "background": "lightgray",
            "iconColour": "firebrick",
        },
        "[x]": {
            "icon": "check-circle-fill",
            "foreground": "gray",
            "background": "lightgreen",
            "iconColour": "lightgreen",
            "textDecoration": "line-through",
        }
    },
    "todo-tree.general.tags": [
        "BUG",
        "HACK",
        "FIXME",
        "TODO",
        "NOTE",
        "COMMENT",
        "[ ]",
        "[x]",
        "COMPLETE",
        "IMPORTANT"
    ],
*/
//NOTE LAST LINE NEED TO BE COMMENTED AS SINGLE LINE DUE TO INCOMPATIBILITY
/**/
//  "todo-tree.regex.regex": "(//|#|<!--|;|/\\*|^|^\\s*(-|\\d+.))\\s*($TAGS).*(\\n\\s*//\\s{2,}.*)*",