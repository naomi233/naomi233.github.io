// .commitlintrc.js
const fs = require("node:fs")
const path = require("node:path")
const { execSync } = require("child_process")

// just find directory
const packages = fs
  .readdirSync(path.resolve(__dirname, "docs/code"), { withFileTypes: true })
  .filter((item) => item.isDirectory())
  .map((item) => item.name)

// precomputed scope
const scopeComplete = execSync("git status --porcelain || true")
  .toString()
  .trim()
  .split("\n")
  .find((r) => /docs\/code\//.test(r))
  ?.match(/docs\/code\/(\w+)\/(.+)\.md/)?.[1]

/** @type {import('cz-git').UserConfig} */
module.exports = {
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
    "scope-enum": [2, "always", [...packages, "life", "theme"]],
  },
  prompt: {
    messages: {
      type: "Select the type of change that you're committing:",
      scope: "Denote the SCOPE of this change (optional):",
      customScope: "Denote the SCOPE of this change:",
      subject: "Write a SHORT, IMPERATIVE tense description of the change:\n",
      body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
      breaking: 'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
      footerPrefixesSelect: "Select the ISSUES type of changeList by this change (optional):",
      customFooterPrefix: "Input ISSUES prefix:",
      footer: "List any ISSUES by this change. E.g.: #31, #34:\n",
      confirmCommit: "Are you sure you want to proceed with the commit above?",
    },
    // prettier-ignore
    types: [
      { value: "feat", name: "feat:     ✨  A new feature | 新增功能", emoji: ":sparkles:" },
      { value: "fix", name: "fix:      🐛  A bug fix | 修复缺陷", emoji: ":bug:" },
      { value: "docs", name: "docs:     📝  Documentation only changes | 文档更新", emoji: ":memo:" },
      { value: "style", name: "style:    💄  Changes that do not affect the meaning of the code | 代码格式", emoji: ":lipstick:" },
      { value: "refactor", name: "refactor: ♻️   A code change that neither fixes a bug nor adds a feature | 代码重构", emoji: ":recycle:" },
      { value: "perf", name: "perf:     ⚡️  A code change that improves performance | 性能提升", emoji: ":zap:" },
      { value: "test", name: "test:     ✅  Adding missing tests or correcting existing tests | 测试相关", emoji: ":white_check_mark:" },
      { value: "build", name: "build:    📦️   Changes that affect the build system or external dependencies | 构建相关", emoji: ":package:" },
      { value: "ci", name: "ci:       🎡  Changes to our CI configuration files and scripts | 持续集成", emoji: ":ferris_wheel:" },
      { value: "chore", name: "chore:    🔨  Other changes that don't modify src or test files | 其他修改", emoji: ":hammer:" },
      { value: "revert", name: "revert:   ⏪️  Reverts a previous commit | 回退代码", emoji: ":rewind:" },
    ],
    useEmoji: true,
    emojiAlign: "center",
    // enableMultipleScopes: true,
    allowEmptyScopes: true,
    allowCustomScopes: false,
    defaultScope: scopeComplete,
    customScopesAlign: !scopeComplete ? "top-bottom" : "bottom",
  },
}
