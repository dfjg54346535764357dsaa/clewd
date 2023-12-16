/*
 * https://rentry.org/teralomaniac_clewd
 * https://github.com/teralomaniac/clewd
 */

// SET YOUR COOKIE BELOW

module.exports = {
  Cookie: "",
  CookieArray: [
    "sessionKey=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",
    "sessionKey=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",
    "sessionKey=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",
    "sessionKey=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",
    "sessionKey=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",
  ],
  Cookiecounter: 1,
  CookieIndex: 0,
  ProxyPassword: "iop133929",
  Ip: "127.0.0.1",
  Port: 8444,
  localtunnel: false,
  BufferSize: 1,
  SystemInterval: 3,
  rProxy: "https://claude.ai",
  api_rProxy: "",
  padtxt_placeholder: "",
  PromptExperimentFirst: "",
  PromptExperimentNext: "",
  PersonalityFormat: "{{char}}'s personality: {{personality}}",
  ScenarioFormat: "Dialogue scenario: {{scenario}}",
  Settings: {
    RenewAlways: true,
    RetryRegenerate: false,
    PromptExperiments: true,
    SystemExperiments: true,
    PreventImperson: false,
    AllSamples: false,
    NoSamples: false,
    StripAssistant: false,
    StripHuman: false,
    PassParams: false,
    ClearFlags: true,
    PreserveChats: false,
    LogMessages: true,
    FullColon: true,
    padtxt: 15000,
    xmlPlot: true,
    Superfetch: true,
  },
};

/*
 BufferSize
 * How many characters will be buffered before the AI types once
 * lower = less chance of `PreventImperson` working properly

 ---

 SystemInterval
 * How many messages until `SystemExperiments alternates`

 ---

 Other settings
 * https://gitgud.io/ahsk/clewd/#defaults
 * and
 * https://gitgud.io/ahsk/clewd/-/blob/master/CHANGELOG.md
 */
