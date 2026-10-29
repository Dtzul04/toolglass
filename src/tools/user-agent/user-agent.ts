export interface UserAgentInfo {
  browser: string;
  version: string;
  engine: string;
  os: string;
  device: string;
  bot: boolean;
}

const unknown: UserAgentInfo = {
  browser: 'unknown',
  version: 'unknown',
  engine: 'unknown',
  os: 'unknown',
  device: 'unknown',
  bot: false,
};

/** Reads a user-agent string. Rules come later; every input is unknown for now. */
export function parseUserAgent(_input: string): UserAgentInfo {
  return { ...unknown };
}
