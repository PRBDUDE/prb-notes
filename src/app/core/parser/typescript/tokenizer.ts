import * as ts from 'typescript';
import { Token } from '@core/parser/typescript/token';
import { TokenType } from '@core/parser/typescript/token-type';

const KEYWORDS = new Set([
  'import',
  'from',
  'export',
  'class',
  'extends',
  'override',
  'const',
  'let',
  'var',
  'function',
  'return',
  'if',
  'else',
]);

/**
 * Tokenizes a TypeScript code string into an array of tokens.
 */
export function tokenize(input: string, includeWhitespace = false): Token[] {
  const tokens: Token[] = [];
  let index = 0;
  let line = 1;
  let column = 1;

  while (index < input.length) {
    const currentChar = input[index];

    // --- A. Whitespace ---
    if (/\s/.test(currentChar)) {
      let value = '';
      const startLine = line;
      const startCol = column;

      while (index < input.length && /\s/.test(input[index])) {
        if (input[index] === '\n') {
          line++;
          column = 1;
        } else {
          column++;
        }
        value += input[index];
        index++;
      }

      if (includeWhitespace) {
        tokens.push({ type: TokenType.Whitespace, value, line: startLine, column: startCol });
      }
      continue;
    }

    // --- B. String Literals ('...' or "..." or `...`) ---
    if (currentChar === "'" || currentChar === '"' || currentChar === '`') {
      const quote = currentChar;
      let value = quote;
      const startLine = line;
      const startCol = column;
      index++;
      column++;

      while (index < input.length && input[index] !== quote) {
        if (input[index] === '\\') {
          // Handle escaped quotes
          value += input[index];
          index++;
          column++;
        }
        value += input[index];
        index++;
        column++;
      }

      if (index < input.length) {
        value += input[index]; // Closing quote
        index++;
        column++;
      }

      tokens.push({ type: TokenType.StringLiteral, value, line: startLine, column: startCol });
      continue;
    }

    // --- C. Identifiers & Keywords ---
    if (/[a-zA-Z_$]/.test(currentChar)) {
      let value = '';
      const startLine = line;
      const startCol = column;

      while (index < input.length && /[a-zA-Z0-9_$]/.test(input[index])) {
        value += input[index];
        index++;
        column++;
      }

      // Check if preceding token implies this is an object property (e.g. `selector:`)
      const nextNonSpaceChar = input.slice(index).trimStart()[0];
      const isProperty = nextNonSpaceChar === ':';

      let type = TokenType.Identifier;
      if (KEYWORDS.has(value)) {
        type = TokenType.Keyword;
      } else if (isProperty) {
        type = TokenType.PropertyIdentifier;
      }

      tokens.push({ type, value, line: startLine, column: startCol });
      continue;
    }

    // --- D. Operators (@ and =) ---
    if (/[@=]/.test(currentChar)) {
      tokens.push({
        type: TokenType.Operator,
        value: currentChar,
        line,
        column,
      });
      index++;
      column++;
      continue;
    }

    // --- E. Punctuation ({ } ( ) [ ] ; : , .) ---
    if (/[{}()\[\];:,.]/.test(currentChar)) {
      tokens.push({
        type: TokenType.Punctuation,
        value: currentChar,
        line,
        column,
      });
      index++;
      column++;
      continue;
    }

    // --- F. Comment ---
    if (/\//.test(currentChar)) {
      let value = currentChar;

      if (index < input.length && /\//.test(input[index])) {
        value += input[index++];
      }

      if (index < input.length && /[*]/.test(input[index])) {
        value += input[index++];
      }

      tokens.push({ type: TokenType.Comment, value, line: line, column: column });
    }

    // --- G. Number Literal
    if (/[0-9]/.test(currentChar)) {
      let value = currentChar;
      tokens.push({ type: TokenType.NumberLiteral, value, line: line, column: column });
    }

    // Catch-all for unrecognized characters
    index++;
    column++;
  }

  return tokens;
}

// Tokenize With White Space
export function tokenizeWithWhitespace(input: string): Token[] {
  const tokens: Token[] = [];
  let index = 0;

  while (index < input.length) {
    const currentChar = input[index];

    // --- Whitespace (Spaces, Tabs, Newlines) ---
    if (/\s/.test(currentChar)) {
      let value = '';
      while (index < input.length && /\s/.test(input[index])) {
        value += input[index];
        index++;
      }
      tokens.push({ type: TokenType.Whitespace, value });
      continue;
    }

    // --- Strings ---
    if (currentChar === "'" || currentChar === '"' || currentChar === '`') {
      const quote = currentChar;
      let value = quote;
      index++;

      while (index < input.length && input[index] !== quote) {
        if (input[index] === '\\') {
          value += input[index];
          index++;
        }
        value += input[index];
        index++;
      }

      if (index < input.length) {
        value += input[index];
        index++;
      }

      tokens.push({ type: TokenType.StringLiteral, value });
      continue;
    }

    // --- Identifiers / Keywords / Properties ---
    if (/[a-zA-Z_$]/.test(currentChar)) {
      let value = '';
      while (index < input.length && /[a-zA-Z0-9_$]/.test(input[index])) {
        value += input[index];
        index++;
      }

      const remainingText = input.slice(index).trimStart();
      const isProperty = remainingText.startsWith(':');

      let type = TokenType.Identifier;
      if (KEYWORDS.has(value)) {
        type = TokenType.Keyword;
      } else if (isProperty) {
        type = TokenType.PropertyIdentifier;
      }

      tokens.push({ type, value });
      continue;
    }

    // --- Operators ---
    if (/[@=]/.test(currentChar)) {
      tokens.push({ type: TokenType.Operator, value: currentChar });
      index++;
      continue;
    }

    // --- Punctuation ---
    if (/[{}()\[\];:,.]/.test(currentChar)) {
      tokens.push({ type: TokenType.Punctuation, value: currentChar });
      index++;
      continue;
    }

    index++;
  }

  return tokens;
}

// ==========================================
// Example Usage / Testing
// ==========================================

// const codeSnippet = `
// import { Component } from '@angular/core';
// import { BasePageWithSubtitle } from '@core/base-page-with-subtitle';
// import { SubMenu } from '../sub-menu/sub-menu';
//
// @Component({
//   selector: 'prb-copy-ssh-file-to-pi',
//   imports: [SubMenu],
//   templateUrl: './copy-ssh-file-to-pi.html',
//   styleUrl: '../home-lab-setup.scss',
// })
// export class CopySshFileToPi extends BasePageWithSubtitle {
//   override pageSubtitle = 'Home Lab Setup - Copy SSH File to PI';
// }
// `.trim();
//
// const tokenStream = tokenize(codeSnippet);
// console.log(tokenStream);

/**
 * Escapes HTML characters to prevent XSS / broken rendering
 */
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Map TypeScript SyntaxKind tokens to semantic CSS class names
 */
function getCssClassForToken(kind: ts.SyntaxKind, text: string): string | null {
  // Keywords (import, export, class, const, let, private, function, return, etc.)
  if (kind >= ts.SyntaxKind.FirstKeyword && kind <= ts.SyntaxKind.LastKeyword) {
    return 'token-keyword';
  }

  // Literals & Identifiers
  if (
    kind === ts.SyntaxKind.StringLiteral ||
    kind === ts.SyntaxKind.NoSubstitutionTemplateLiteral
  ) {
    return 'token-string';
  }
  if (kind === ts.SyntaxKind.NumericLiteral || kind === ts.SyntaxKind.BigIntLiteral) {
    return 'token-number';
  }
  if (kind === ts.SyntaxKind.Identifier) {
    // Basic check for special identifier patterns (e.g. types vs functions)
    if (/^[A-Z]/.test(text)) {
      return 'token-type';
    }
    return 'token-identifier';
  }

  // Comments
  if (
    kind === ts.SyntaxKind.SingleLineCommentTrivia ||
    kind === ts.SyntaxKind.MultiLineCommentTrivia
  ) {
    return 'token-comment';
  }

  // Decorators / Annotations (@Injectable, etc.)
  if (kind === ts.SyntaxKind.AtToken) {
    return 'token-decorator';
  }

  // Punctuation & Operators
  if (
    (kind >= ts.SyntaxKind.FirstPunctuation && kind <= ts.SyntaxKind.LastPunctuation) ||
    kind === ts.SyntaxKind.EqualsGreaterThanToken
  ) {
    return 'token-operator';
  }

  return null; // Regular text/whitespace/unhandled trivia
}

/**
 * Highlights TypeScript source code and returns formatted HTML
 */
export function highlightTypeScript(code: string): string {
  const scanner = ts.createScanner(
    ts.ScriptTarget.Latest,
    /* skipTrivia */ false,
    ts.LanguageVariant.Standard,
    code,
  );

  let htmlResult = '';
  let token = scanner.scan();

  while (token !== ts.SyntaxKind.EndOfFileToken) {
    const tokenText = scanner.getTokenText();
    // 'token' variable contains the current ts.SyntaxKind
    const cssClass = getCssClassForToken(token, tokenText);

    if (cssClass) {
      htmlResult += `<span class="${cssClass}">${escapeHtml(tokenText)}</span>`;
    } else {
      htmlResult += escapeHtml(tokenText);
    }

    token = scanner.scan();
  }

  return `<pre class="ts-highlight"><code>${htmlResult}</code></pre>`;
}


// console.log(highlightTypeScript(sourceCode));
