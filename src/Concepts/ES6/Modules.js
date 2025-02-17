/*
    Modules
JavaScript modules allow you to break up your code into separate files.
This makes it easier to maintain the code-base.
ES Modules rely on the 'import' and 'export' statements.

*/


///////////////////////////////////////////////////////////////////////////

/*

Export
- There are two types -> Named and Default.

            Named Exports
- Can be created in-line or all at once at the bottom

personInLine.js and personAll.js

-----------------------------------------------------------

            Default exports
- You can only have one default export in a file.

*/

///////////////////////////////////////////////////////////////////////////

/*
                Import
- You can import modules in two ways, based on if they are named export or default exports.
- Named export must be destructured using curly braces.
- Default export not.

*/
import { name, age } from './personAll.js';
import message from './message.js';
