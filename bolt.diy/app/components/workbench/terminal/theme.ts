import type { ITheme } from '@xterm/xterm';

const style = getComputedStyle(document.documentElement);
const cssVar = (token: string) => style.getPropertyValue(token) || undefined;

export function getTerminalTheme(overrides?: ITheme): ITheme {
  return {
    cursor: cssVar('--codez-elements-terminal-cursorColor'),
    cursorAccent: cssVar('--codez-elements-terminal-cursorColorAccent'),
    foreground: cssVar('--codez-elements-terminal-textColor'),
    background: cssVar('--codez-elements-terminal-backgroundColor'),
    selectionBackground: cssVar('--codez-elements-terminal-selection-backgroundColor'),
    selectionForeground: cssVar('--codez-elements-terminal-selection-textColor'),
    selectionInactiveBackground: cssVar('--codez-elements-terminal-selection-backgroundColorInactive'),

    // ansi escape code colors
    black: cssVar('--codez-elements-terminal-color-black'),
    red: cssVar('--codez-elements-terminal-color-red'),
    green: cssVar('--codez-elements-terminal-color-green'),
    yellow: cssVar('--codez-elements-terminal-color-yellow'),
    blue: cssVar('--codez-elements-terminal-color-blue'),
    magenta: cssVar('--codez-elements-terminal-color-magenta'),
    cyan: cssVar('--codez-elements-terminal-color-cyan'),
    white: cssVar('--codez-elements-terminal-color-white'),
    brightBlack: cssVar('--codez-elements-terminal-color-brightBlack'),
    brightRed: cssVar('--codez-elements-terminal-color-brightRed'),
    brightGreen: cssVar('--codez-elements-terminal-color-brightGreen'),
    brightYellow: cssVar('--codez-elements-terminal-color-brightYellow'),
    brightBlue: cssVar('--codez-elements-terminal-color-brightBlue'),
    brightMagenta: cssVar('--codez-elements-terminal-color-brightMagenta'),
    brightCyan: cssVar('--codez-elements-terminal-color-brightCyan'),
    brightWhite: cssVar('--codez-elements-terminal-color-brightWhite'),

    ...overrides,
  };
}
