// .commitlintrc.js
const fs = require('fs')
const path = require('path')

const packages = fs.readdirSync(path.resolve(__dirname, 'docs')).filter((item) => !/(?<=^[a-zA-Z0-9]+)\.md$/.test(item))
packages.shift()

/** @type {import('cz-git').UserConfig} */
module.exports = {
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
    'scope-enum': [1, 'always', ['theme', ...packages]],
  },
  prompt: {
    messages: {
      type: "Select the type of change that you're committing:",
      scope: 'Denote the SCOPE of this change (optional):',
      customScope: 'Denote the SCOPE of this change:',
      subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
      body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
      breaking: 'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
      footerPrefixsSelect: 'Select the ISSUES type of changeList by this change (optional):',
      customFooterPrefixs: 'Input ISSUES prefix:',
      footer: 'List any ISSUES by this change. E.g.: #31, #34:\n',
      confirmCommit: 'Are you sure you want to proceed with the commit above?',
    },
    types: [
      { value: 'feat', name: 'feat:     ✨  A new feature | 新增功能', emoji: ':sparkles:' },
      { value: 'fix', name: 'fix:      🐛  A bug fix | 修复缺陷', emoji: ':bug:' },
      { value: 'docs', name: 'docs:     📝  Documentation only changes | 文档更新', emoji: ':memo:' },
      {
        value: 'style',
        name: 'style:    💄  Changes that do not affect the meaning of the code | 代码格式',
        emoji: ':lipstick:',
      },
      {
        value: 'refactor',
        name: 'refactor: ♻️   A code change that neither fixes a bug nor adds a feature | 代码重构',
        emoji: ':recycle:',
      },
      { value: 'perf', name: 'perf:     ⚡️  A code change that improves performance | 性能提升', emoji: ':zap:' },
      {
        value: 'test',
        name: 'test:     ✅  Adding missing tests or correcting existing tests | 测试相关',
        emoji: ':white_check_mark:',
      },
      {
        value: 'build',
        name: 'build:    📦️   Changes that affect the build system or external dependencies | 构建相关',
        emoji: ':package:',
      },
      {
        value: 'ci',
        name: 'ci:       🎡  Changes to our CI configuration files and scripts | 持续集成',
        emoji: ':ferris_wheel:',
      },
      {
        value: 'chore',
        name: "chore:    🔨  Other changes that don't modify src or test files | 其他修改",
        emoji: ':hammer:',
      },
      { value: 'revert', name: 'revert:   ⏪️  Reverts a previous commit | 回退代码', emoji: ':rewind:' },
    ],
    useEmoji: true,
    themeColorCode: '',
    // enableMultipleScopes: true,
    scopeEnumSeparator: ',',
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: 'bottom',
    customScopesAlias: 'custom',
    emptyScopesAlias: 'empty',
    upperCaseSubject: false,
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 100,
    breaklineChar: '|',
    skipQuestions: [],
    issuePrefixs: [{ value: 'closed', name: 'closed:   ISSUES has been processed' }],
    customIssuePrefixsAlign: 'top',
    emptyIssuePrefixsAlias: 'skip',
    customIssuePrefixsAlias: 'custom',
    allowCustomIssuePrefixs: true,
    allowEmptyIssuePrefixs: true,
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: '',
    defaultIssues: '',
    defaultScope: '',
    defaultSubject: '',
  },
}
