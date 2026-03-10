// 此文件由 openclaw-dashboard-zh-cn/build-extension.mjs 自动生成。
(function () {
  "use strict";

  const EXACT_TRANSLATIONS = new Map(
    Object.entries({
      "OpenClaw Control": "OpenClaw 控制台",
      Settings: "设置",
      "Token Usage": "令牌用量",
      "Environment Variables": "环境变量",
      "Environment variables passed to the gateway process": "传递给网关进程的环境变量",
      Updates: "更新",
      "Auto-update settings and release channel": "自动更新设置和发布通道",
      Commands: "命令",
      Hooks: "钩子",
      Authentication: "身份验证",
      "API keys and authentication profiles": "API 密钥和身份验证配置",
      "Messaging channels (Telegram, Discord, Slack, etc.)": "消息频道（Telegram、Discord、Slack 等）",
      "Theme": "主题",
      "System theme": "跟随系统主题",
      "System": "系统",
      "Light theme": "浅色主题",
      "Light": "浅色",
      "Dark theme": "深色主题",
      "Dark": "深色",
      Loading: "加载中",
      "Loading...": "加载中...",
      "Refresh": "刷新",
      "Refreshing…": "刷新中…",
      "Loading…": "加载中…",
      "Save": "保存",
      "Saving…": "保存中…",
      Clear: "清除",
      Delete: "删除",
      Remove: "移除",
      Approve: "批准",
      Reject: "拒绝",
      Rotate: "轮换",
      Revoke: "撤销",
      "Yes": "是",
      "No": "否",
      "Active": "活动",
      "Assistant": "助手",
      "Agent": "智能体",
      Today: "今天",
      Form: "表单",
      Raw: "原始",
      Reload: "重新加载",
      Pending: "待处理",
      Paired: "已配对",
      Devices: "设备",
      Agents: "智能体",
      Overview: "概览",
      Node: "节点",
      Nodes: "节点",
      "Channels": "频道",
      "Skills": "技能",
      "Tools": "工具",
      "Tool": "工具",
      Channel: "频道",
      Provider: "提供商",
      Model: "模型",
      Mode: "模式",
      Scope: "范围",
      JSON: "JSON",
      "Search skills": "搜索技能",
      Filter: "筛选",
      Enabled: "已启用",
      "Filter (client-side)": "筛选（仅客户端）",
      "Search settings...": "搜索设置...",
      "Tag filters:": "标签筛选：",
      "Add tags": "添加标签",
      "All Settings": "全部设置",
      "Remove filter": "移除筛选",
      "Copy session name": "复制会话名称",
      Copy: "复制",
      "Start Date": "开始日期",
      "End Date": "结束日期",
      "Time zone": "时区",
      Local: "本地",
      "Ascending": "升序",
      "Descending": "降序",
      "Exit focus mode": "退出专注模式",
      "Could not load runtime tool catalog": "无法加载运行时工具目录",
      "No skills found.": "未找到技能。",
      "No agents found.": "未找到智能体。",
      "No nodes found.": "未找到节点。",
      "No usage data for this session.": "该会话没有使用数据。",
      "No error data": "没有错误数据",
      "No timeline data": "没有时间线数据",
      "No data in range": "所选范围内没有数据",
      "No messages": "没有消息",
      "No messages match the filters.": "没有消息匹配当前筛选条件。",
      "No allowlist entries yet.": "还没有允许列表条目。",
      "No nodes advertise exec approvals yet.": "还没有节点声明执行审批能力。",
      "No events yet.": "还没有事件。",
      "No log entries.": "没有日志条目。",
      "No snapshot yet.": "还没有快照。",
      "No instances reported yet.": "还没有实例上报。",
      "unknown host": "未知主机",
      "Message handling and routing settings": "消息处理和路由设置",
      "Custom slash commands": "自定义斜杠命令",
      "Webhooks and event hooks": "Webhook 和事件钩子",
      "Skill packs and capabilities": "技能包和能力",
      "Tool configurations (browser, search, etc.)": "工具配置（浏览器、搜索等）",
      "Gateway server settings (port, auth, binding)": "网关服务器设置（端口、认证、绑定）",
      "Setup Wizard": "设置向导",
      "Setup wizard state and history": "设置向导状态和历史",
      Metadata: "元数据",
      "Gateway metadata and version information": "网关元数据和版本信息",
      Logging: "日志记录",
      "Log levels and output configuration": "日志级别和输出配置",
      Browser: "浏览器",
      "Browser automation settings": "浏览器自动化设置",
      UI: "界面",
      "User interface preferences": "用户界面偏好",
      "AI model configurations and providers": "AI 模型配置和提供商",
      Bindings: "绑定",
      "Key bindings and shortcuts": "按键绑定和快捷方式",
      Broadcast: "广播",
      "Broadcast and notification settings": "广播和通知设置",
      Audio: "音频",
      "Audio input/output settings": "音频输入/输出设置",
      Session: "会话",
      "Session management and persistence": "会话管理和持久化",
      Cron: "定时任务",
      "Scheduled tasks and automation": "计划任务和自动化",
      Web: "Web",
      "Web server and API settings": "Web 服务器和 API 设置",
      Discovery: "发现",
      "Service discovery and networking": "服务发现和网络设置",
      "Canvas Host": "Canvas 宿主",
      "Canvas rendering and display": "Canvas 渲染和显示",
      Talk: "语音对话",
      "Voice and speech settings": "语音和语音识别设置",
      Plugins: "插件",
      "Plugin management and extensions": "插件管理和扩展",
      "Workspace, identity, and model configuration.": "工作区、身份与模型配置。",
      "Workspace and scheduling targets.": "工作区与调度目标。",
      "Presence beacons from the gateway and clients.": "来自网关和客户端的在线信标。",
      "Connected Instances": "已连接实例",
      "Gateway-wide channel status snapshot.": "整个网关的频道状态快照。",
      "Core Files": "核心文件",
      "Bootstrap persona, identity, and tool guidance.": "引导式角色设定、身份和工具指引。",
      "Load the agent workspace files to edit core instructions.": "加载智能体工作区文件以编辑核心指令。",
      "No files found.": "未找到文件。",
      "Select a file to edit.": "选择要编辑的文件。",
      Reset: "重置",
      "This file is missing. Saving will create it in the agent workspace.":
        "该文件缺失。保存后会在智能体工作区中创建它。",
      "Content": "内容",
      "Agent Context": "智能体上下文",
      "Workspace": "工作区",
      "Primary Model": "主模型",
      "Identity Name": "身份名称",
      "Identity Emoji": "身份表情",
      "Skills Filter": "技能过滤",
      "Default": "默认",
      "Missing": "缺失",
      "missing": "缺失",
      "Minimal": "最小",
      "Coding": "编码",
      "Messaging": "消息",
      "Full": "完全允许",
      "Media": "媒体",
      "Tool Access": "工具访问",
      "Profile + per-tool overrides for this agent.": "此智能体的配置档与单工具覆盖设置。",
      "Load the gateway config to set per-agent skills.": "加载网关配置以设置每个智能体的技能。",
      "This agent uses a custom skill allowlist.": "此智能体使用自定义技能允许列表。",
      "All skills are enabled. Disabling any skill will create a per-agent allowlist.":
        "所有技能均已启用。禁用任意技能后将创建该智能体专属的允许列表。",
      "Load skills for this agent to view workspace-specific entries.":
        "加载该智能体的技能以查看工作区专属条目。",
      "Text-to-speech conversion": "文本转语音转换",
      "Voice call tool": "语音通话工具",
      "View": "查看",
      "Close session details": "关闭会话详情",
      "Output": "输出",
      "Input": "输入",
      "Cache Write": "缓存写入",
      "Cache Read": "缓存读取",
      "Daily Usage": "每日使用情况",
      "Top Tools": "热门工具",
      "Model Mix": "模型分布",
      "Tokens by Type": "按类型统计令牌",
      "Has tools": "包含工具",
      "Search conversation": "搜索对话",
      Conversation: "对话",
      "No data": "无数据",
      "Clear All": "清除全部",
      Sessions: "会话",
      All: "全部",
      "Recently viewed": "最近查看",
      Sort: "排序",
      Cost: "成本",
      Errors: "错误",
      Messages: "消息",
      Recent: "最近",
      Tokens: "令牌",
      Thinking: "思考",
      Verbose: "详细",
      Reasoning: "推理",
      Actions: "操作",
      Key: "键",
      Label: "标签",
      Kind: "类型",
      Updated: "更新时间",
      Limit: "限制",
      "Include global": "包含全局",
      "Include unknown": "包含未知",
      "No sessions found.": "未找到会话。",
      "(optional)": "（可选）",
      inherit: "继承",
      "off (explicit)": "关闭（显式）",
      "Clear Selection": "清除选择",
      "No recent sessions": "没有最近会话",
      "No sessions in range": "范围内没有会话",
      "Active session keys and per-session overrides.": "活动会话键和每会话覆盖设置。",
      "Active within (minutes)": "活跃时间范围（分钟）",
      "Base context per message": "每条消息的基础上下文",
      "Paired devices and live links.": "已配对设备和实时连接。",
      "Pairing requests + role tokens.": "配对请求和角色令牌。",
      "No paired devices.": "没有已配对设备。",
      "Exec node binding": "执行节点绑定",
      "Load config": "加载配置",
      "Default binding": "默认绑定",
      "Any node": "任意节点",
      "Use default": "使用默认",
      "No nodes with system.run available.": "没有提供 system.run 的节点。",
      "Tip: use filters or click bars to filter days.": "提示：使用筛选器或点击柱条来筛选日期。",
      "Showing first 1,000 sessions. Narrow date range for complete results.":
        "当前仅显示前 1,000 个会话。缩小日期范围以获得完整结果。",
      "Exec approvals": "执行审批",
      "Allowlist and approval policy for exec host=gateway/node.":
        "用于 exec host=gateway/node 的允许列表与审批策略。",
      "Load exec approvals to edit allowlists.": "加载执行审批配置以编辑允许列表。",
      "Load approvals": "加载审批配置",
      Target: "目标",
      "Gateway edits local approvals; node edits the selected node.":
        "Gateway 编辑本地审批配置；node 编辑所选节点。",
      Host: "主机",
      Gateway: "网关",
      Allowlist: "允许列表",
      Deny: "拒绝",
      Off: "关闭",
      "On miss": "未命中时",
      Always: "总是",
      Defaults: "默认值",
      Security: "安全",
      "Default security mode.": "默认安全模式。",
      Ask: "询问",
      "Default prompt policy.": "默认提示策略。",
      "Ask fallback": "询问回退",
      "Applied when the UI prompt is unavailable.": "当 UI 提示不可用时使用。",
      "Auto-allow skill CLIs": "自动允许技能 CLI",
      "Case-insensitive glob patterns.": "不区分大小写的 glob 模式。",
      "Add pattern": "添加模式",
      "New pattern": "新模式",
      Pattern: "模式",
      "Select node": "选择节点",
      Snapshots: "快照",
      Status: "状态",
      Health: "健康状况",
      "Status, health, and heartbeat data.": "状态、健康状况和心跳数据。",
      "Last heartbeat": "最近一次心跳",
      "Manual RPC": "手动 RPC",
      "Send a raw gateway method with JSON params.": "使用 JSON 参数发送原始网关方法。",
      Method: "方法",
      "Params (JSON)": "参数（JSON）",
      Call: "调用",
      "Catalog from models.list.": "来自 models.list 的目录。",
      Models: "模型",
      "Event Log": "事件日志",
      "Latest gateway events.": "最新网关事件。",
      Logs: "日志",
      "Gateway file logs (JSONL).": "网关文件日志（JSONL）。",
      "Search logs": "搜索日志",
      "Auto-follow": "自动跟随",
      "Collapse All": "全部收起",
      "Expand All": "全部展开",
      User: "用户",
      "Tool result": "工具结果",
      valid: "有效",
      invalid: "无效",
      unknown: "未知",
      "Inherit default": "继承默认值",
      "n/a": "不适用",
      "Unsaved changes": "未保存更改",
      "No changes": "没有更改",
      "Loading schema…": "加载架构中…",
      "Raw JSON5": "原始 JSON5",
      "Form view can't safely edit some fields. Use Raw to avoid losing config entries.":
        "表单视图无法安全编辑某些字段。请使用原始模式以避免丢失配置项。",
      "Schema unavailable.": "架构不可用。",
      "Unsupported schema. Use Raw.": "不支持的架构。请使用原始模式。",
      Enable: "启用",
      Disable: "禁用",
      "Installing…": "安装中…",
      "API key": "API 密钥",
      "Save key": "保存密钥",
      "Select an agent": "选择一个智能体",
      "Pick an agent to inspect its workspace and tools.": "选择一个智能体以检查其工作区和工具。",
      "Workspace paths and identity metadata.": "工作区路径和身份元数据。",
      "Model Selection": "模型选择",
      "Fallbacks (comma-separated)": "回退列表（逗号分隔）",
      "Channel health": "频道健康状态",
      "Channel status snapshots from the gateway.": "来自网关的频道状态快照。",
      "Channel status and configuration.": "频道状态和配置。",
      Configured: "已配置",
      Running: "运行中",
      Connected: "已连接",
      "Last inbound": "最近入站",
      "Last input": "最近输入",
      Reason: "原因",
      "Save changes": "保存更改",
      "Docs (opens in new tab)": "文档（在新标签页打开）",
      "Control UI auth docs (opens in new tab)": "Control UI 认证文档（在新标签页打开）",
      "Open run chat": "打开运行聊天",
      "Main Session": "主会话",
      "Reject this device pairing request?": "要拒绝此设备配对请求吗？",
      "Profile publish failed on all relays.": "所有中继上的资料发布均失败。",
      "Profile published to relays.": "资料已发布到中继。",
      "Profile imported from relays. Review and publish.": "已从中继导入资料。请检查后发布。",
      "Profile imported. Review and publish.": "资料已导入。请检查后发布。",
      "Config hash missing; reload and retry.": "配置哈希缺失，请重新加载后重试。",
      never: "从未",
    }),
  );

  const ATTRIBUTE_NAMES = new Set(["title", "aria-label", "placeholder"]);
  const SKIP_TAGS = new Set(["SCRIPT", "STYLE", "TEXTAREA", "PRE", "CODE"]);
  const SHOW_TEXT = typeof NodeFilter !== "undefined" ? NodeFilter.SHOW_TEXT : 4;
  const CONFIG_HELP_TRANSLATIONS = new Map(
    Object.entries({
      "Metadata fields automatically maintained by OpenClaw to record write/version history for this config file. Keep these values system-managed and avoid manual edits unless debugging migration history.":
        "由 OpenClaw 自动维护的元数据字段，用于记录此配置文件的写入/版本历史。除非在调试迁移历史，否则请保持这些值由系统管理，避免手动编辑。",
      "Auto-set when OpenClaw writes the config.":
        "当 OpenClaw 写入配置时自动设置。",
      "ISO timestamp of the last config write (auto-set).":
        "最近一次配置写入的 ISO 时间戳（自动设置）。",
      "Environment import and override settings used to supply runtime variables to the gateway process. Use this section to control shell-env loading and explicit variable injection behavior.":
        "用于向网关进程提供运行时变量的环境导入与覆盖设置。使用此部分可控制 shell 环境加载和显式变量注入行为。",
      "Shell environment import controls for loading variables from your login shell during startup. Keep this enabled when you depend on profile-defined secrets or PATH customizations.":
        "用于在启动期间从登录 shell 加载变量的 Shell 环境导入控制项。当你依赖配置文件中定义的密钥或 PATH 自定义时，请保持启用。",
      "Enables loading environment variables from the user shell profile during startup initialization. Keep enabled for developer machines, or disable in locked-down service environments with explicit env management.":
        "在启动初始化期间启用从用户 shell 配置文件加载环境变量。建议在开发机器上保持启用；在具有显式环境变量管理的受限服务环境中可禁用。",
      "Maximum time in milliseconds allowed for shell environment resolution before fallback behavior applies. Use tighter timeouts for faster startup, or increase when shell initialization is heavy.":
        "在应用回退行为之前，允许用于解析 Shell 环境的最大时间（毫秒）。若需更快启动可使用更短超时；若 Shell 初始化较重则可适当增大。",
      "Explicit key/value environment variable overrides merged into runtime process environment for OpenClaw. Use this for deterministic env configuration instead of relying only on shell profile side effects.":
        "显式的键值环境变量覆盖项，会合并到 OpenClaw 的运行时进程环境中。使用此项可获得确定性的环境配置，而不是只依赖 shell 配置文件的副作用。",
      "Setup wizard state tracking fields that record the most recent guided onboarding run details. Keep these fields for observability and troubleshooting of setup flows across upgrades.":
        "设置向导状态跟踪字段，用于记录最近一次引导式入门流程的运行详情。请保留这些字段，以便在升级过程中观察和排查设置流程问题。",
      "Diagnostics controls for targeted tracing, telemetry export, and cache inspection during debugging. Keep baseline diagnostics minimal in production and enable deeper signals only when investigating issues.":
        "用于调试期间的定向追踪、遥测导出和缓存检查的诊断控制项。在生产环境中请保持基础诊断最小化，仅在调查问题时启用更深入的信号。",
      "Logging behavior controls for severity, output destinations, formatting, and sensitive-data redaction. Keep levels and redaction strict enough for production while preserving useful diagnostics.":
        "用于控制日志严重级别、输出目标、格式化和敏感数据脱敏的日志行为设置。在生产环境中应保持足够严格的级别和脱敏策略，同时保留有用的诊断信息。",
      "Primary log level threshold for runtime logger output: \"silent\", \"fatal\", \"error\", \"warn\", \"info\", \"debug\", or \"trace\". Keep \"info\" or \"warn\" for production, and use debug/trace only during investigation.":
        "运行时日志输出的主日志级别阈值：`silent`、`fatal`、`error`、`warn`、`info`、`debug` 或 `trace`。生产环境建议使用 `info` 或 `warn`，仅在排查问题时使用 `debug` / `trace`。",
      "Optional file path for persisted log output in addition to or instead of console logging. Use a managed writable path and align retention/rotation with your operational policy.":
        "可选的文件路径，用于在控制台日志之外或替代控制台日志持久化输出日志。请使用受管理且可写的路径，并让保留/轮转策略与运维策略保持一致。",
      "Update channel for git + npm installs (\"stable\", \"beta\", or \"dev\").":
        "git + npm 安装的更新通道（`stable`、`beta` 或 `dev`）。",
      "Check for npm updates when the gateway starts (default: true).":
        "在网关启动时检查 npm 更新（默认：true）。",
      "TCP port used by the gateway listener for API, control UI, and channel-facing ingress paths. Use a dedicated port and avoid collisions with reverse proxies or local developer services.":
        "网关监听器用于 API、控制界面和面向频道入口路径的 TCP 端口。请使用独立端口，并避免与反向代理或本地开发服务冲突。",
      "Gateway operation mode: \"local\" runs channels and agent runtime on this host, while \"remote\" connects through remote transport. Keep \"local\" unless you intentionally run a split remote gateway topology.":
        "网关运行模式：`local` 在当前主机上运行频道和代理运行时，`remote` 则通过远程传输连接。除非你有意运行分离式远程网关拓扑，否则请保持 `local`。",
      "Control UI hosting settings including enablement, pathing, and browser-origin/auth hardening behavior. Keep UI exposure minimal and pair with strong auth controls before internet-facing deployments.":
        "控制界面托管设置，包括启用状态、路径以及浏览器来源/认证加固行为。在面向互联网部署前，请尽量减少 UI 暴露面，并配合强认证控制。",
      "OpenTelemetry export settings for traces, metrics, and logs emitted by gateway components. Use this when integrating with centralized observability backends and distributed tracing pipelines.":
        "网关组件发出的追踪、指标和日志的 OpenTelemetry 导出设置。将其用于接入集中式可观测性后端和分布式追踪流水线。",
      "Groups exec-approval forwarding behavior including enablement, routing mode, filters, and explicit targets. Configure here when approval prompts must reach operational channels instead of only the origin thread.":
        "用于执行审批转发行为的分组设置，包括启用状态、路由模式、筛选器和显式目标。当审批提示必须发送到运维频道而不只是原始线程时，请在这里配置。",
      "DM session scoping: \"main\" keeps continuity, while \"per-peer\", \"per-channel-peer\", and \"per-account-channel-peer\" increase isolation. Use isolated modes for shared inboxes or multi-account deployments.":
        "DM 会话范围：`main` 保持连续性，而 `per-peer`、`per-channel-peer` 和 `per-account-channel-peer` 会提高隔离性。对于共享收件箱或多账户部署，请使用更隔离的模式。",
      "Gateway auth mode: \"none\", \"token\", \"password\", or \"trusted-proxy\" depending on your edge architecture. Use token/password for direct exposure, and trusted-proxy only behind hardened identity-aware proxies.":
        "网关认证模式：`none`、`token`、`password` 或 `trusted-proxy`，取决于你的边缘架构。对于直接暴露请使用 token/password，而 `trusted-proxy` 仅应在经过强化、具备身份感知能力的代理之后使用。",
      "Trusted-proxy auth header mapping for upstream identity providers that inject user claims. Use only with known proxy CIDRs and strict header allowlists to prevent spoofed identity headers.":
        "用于上游身份提供商注入用户声明时的 trusted-proxy 认证请求头映射。仅应在已知代理 CIDR 和严格请求头允许列表的前提下使用，以防止伪造身份请求头。",
      "Gateway-level tool exposure allow/deny policy that can restrict runtime tool availability independent of agent/tool profiles. Use this for coarse emergency controls and production hardening.":
        "网关级工具暴露允许/拒绝策略，可在不依赖代理/工具配置档的情况下限制运行时工具可用性。可用于粗粒度的紧急控制和生产加固。",
      "Remote Gateway WebSocket URL (ws:// or wss://).":
        "远程网关 WebSocket URL（`ws://` 或 `wss://`）。",
      "Bearer token used to authenticate this client to a remote gateway in token-auth deployments. Store via secret/env substitution and rotate alongside remote gateway auth changes.":
        "在 token 认证部署中，用于让此客户端向远程网关进行认证的 Bearer 令牌。请通过 secret/env 替换存储，并在远程网关认证变更时一并轮换。",
      "Enables browser capability wiring in the gateway so browser tools and CDP-driven workflows can run. Disable when browser automation is not needed to reduce surface area and startup work.":
        "在网关中启用浏览器能力接线，以便运行浏览器工具和由 CDP 驱动的工作流。当不需要浏览器自动化时请禁用，以减少暴露面和启动开销。",
      "Remote CDP websocket URL used to attach to an externally managed browser instance. Use this for centralized browser hosts and keep URL access restricted to trusted network paths.":
        "用于附加到外部管理浏览器实例的远程 CDP WebSocket URL。可用于集中式浏览器宿主，并应将 URL 访问限制在受信任的网络路径中。",
      "Explicit browser executable path when auto-discovery is insufficient for your host environment. Use absolute stable paths so launch behavior stays deterministic across restarts.":
        "当自动发现不足以适配你的宿主环境时，可显式指定浏览器可执行文件路径。请使用稳定的绝对路径，以确保重启后的启动行为保持确定性。",
      "Disables Chromium sandbox isolation flags for environments where sandboxing fails at runtime. Keep this off whenever possible because process isolation protections are reduced.":
        "在运行时沙箱失效的环境中禁用 Chromium 沙箱隔离标志。只要可能请保持关闭此选项，因为进程隔离保护会被削弱。",
      "Restricts browser mode to attach-only behavior without starting local browser processes. Use this when all browser sessions are externally managed by a remote CDP provider.":
        "将浏览器模式限制为仅附加行为，而不启动本地浏览器进程。当所有浏览器会话都由远程 CDP 提供方外部管理时使用此项。",
      "Provider map keyed by provider ID containing connection/auth settings and concrete model definitions. Use stable provider keys so references from agents and tooling remain portable across environments.":
        "按提供商 ID 建立的提供商映射，包含连接/认证设置以及具体模型定义。请使用稳定的提供商键，以便来自代理和工具的引用在不同环境间保持可移植性。",
      "Base URL for the provider endpoint used to serve model requests for that provider entry. Use HTTPS endpoints and keep URLs environment-specific through config templating where needed.":
        "该提供商条目用于处理模型请求的提供商端点基础 URL。请使用 HTTPS 端点，并在需要时通过配置模板让 URL 保持环境特定。",
      "Provider credential used for API-key based authentication when the provider requires direct key auth. Use secret/env substitution and avoid storing real keys in committed config files.":
        "当提供商需要直接密钥认证时，用于基于 API Key 认证的提供商凭据。请使用 secret/env 替换，并避免在已提交的配置文件中存储真实密钥。",
      "Enables periodic Bedrock model discovery and catalog refresh for Bedrock-backed providers. Keep disabled unless Bedrock is actively used and IAM permissions are correctly configured.":
        "为基于 Bedrock 的提供商启用周期性的 Bedrock 模型发现和目录刷新。除非你正在主动使用 Bedrock 且 IAM 权限已正确配置，否则请保持禁用。",
      "Optional provider allowlist filter for Bedrock discovery so only selected providers are refreshed. Use this to limit discovery scope in multi-provider environments.":
        "用于 Bedrock 发现的可选提供商允许列表筛选器，以便只刷新选定的提供商。可用于在多提供商环境中限制发现范围。",
      "Enables forwarding of exec approval requests to configured delivery destinations (default: false). Keep disabled in low-risk setups and enable only when human approval responders need channel-visible prompts.":
        "启用将执行审批请求转发到已配置的投递目标（默认：false）。在低风险场景中应保持禁用，仅在需要让人工审批者在频道中看到提示时启用。",
      "Controls where approval prompts are sent: \"session\" uses origin chat, \"targets\" uses configured targets, and \"both\" sends to both paths. Use \"session\" as baseline and expand only when operational workflow requires redundancy.":
        "控制审批提示发送到哪里：`session` 使用原始聊天，`targets` 使用已配置目标，`both` 则同时发送到两条路径。请以 `session` 作为基线，仅在运维流程需要冗余时再扩展。",
      "Explicit delivery targets used when forwarding mode includes targets, each with channel and destination details. Keep target lists least-privilege and validate each destination before enabling broad forwarding.":
        "当转发模式包含 targets 时使用的显式投递目标，每项都包含频道和目标详情。请让目标列表保持最小权限，并在启用广泛转发前校验每个目标。",
      "Sets base session grouping strategy: \"per-sender\" isolates by sender and \"global\" shares one session per channel context. Keep \"per-sender\" for safer multi-user behavior unless deliberate shared context is required.":
        "设置基础会话分组策略：`per-sender` 按发送者隔离，`global` 则在每个频道上下文中共享一个会话。除非明确需要共享上下文，否则请保持 `per-sender` 以获得更安全的多用户行为。",
      "Maps canonical identities to provider-prefixed peer IDs so equivalent users resolve to one DM thread (example: telegram:123456). Use this when the same human appears across multiple channels or accounts.":
        "将规范身份映射到带提供商前缀的对端 ID，使等价用户解析到同一个 DM 线程中（例如：`telegram:123456`）。当同一个人出现在多个频道或账户中时可使用此项。",
      "Lists message triggers that force a session reset when matched in inbound content. Use sparingly for explicit reset phrases so context is not dropped unexpectedly during normal conversation.":
        "列出在入站内容中匹配时会强制重置会话的消息触发器。请仅对明确的重置短语谨慎使用，以免在正常对话中意外丢失上下文。",
      "Sets the session storage file path used to persist session records across restarts. Use an explicit path only when you need custom disk layout, backup routing, or mounted-volume storage.":
        "设置用于在重启之间持久化会话记录的会话存储文件路径。仅在你需要自定义磁盘布局、备份路由或挂载卷存储时才指定显式路径。",
      "Controls cross-session send permissions using allow/deny rules evaluated against channel, chatType, and key prefixes. Use this to fence where session tools can deliver messages in complex environments.":
        "使用针对频道、chatType 和 key 前缀求值的允许/拒绝规则，控制跨会话发送权限。可用于在复杂环境中限制会话工具能把消息发送到哪里。",
      "Shared defaults for thread-bound session routing behavior across providers that support thread focus workflows. Configure global defaults here and override per channel only when behavior differs.":
        "用于支持 thread focus 工作流的提供商之间共享的线程绑定会话路由默认值。请在这里配置全局默认值，仅在行为有差异时再按频道覆盖。",
      "Automatic session-store maintenance controls for pruning age, entry caps, and file rotation behavior. Start in warn mode to observe impact, then enforce once thresholds are tuned.":
        "用于裁剪时长、条目上限和文件轮转行为的自动会话存储维护控制项。建议先以 warn 模式观察影响，在阈值调优完成后再强制执行。",
      "Remote connection transport: \"direct\" uses configured URL connectivity, while \"ssh\" tunnels through SSH. Use SSH when you need encrypted tunnel semantics without exposing remote ports.":
        "远程连接传输方式：`direct` 使用已配置 URL 直接连接，而 `ssh` 则通过 SSH 建立隧道。当你需要加密隧道语义且不想暴露远程端口时，请使用 SSH。",
      "Live config-reload policy for how edits are applied and when full restarts are triggered. Keep hybrid behavior for safest operational updates unless debugging reload internals.":
        "用于控制编辑如何应用以及何时触发完整重启的实时配置重载策略。除非你在调试重载内部机制，否则请保持 hybrid 行为以获得最安全的运维更新。",
      "TLS certificate and key settings for terminating HTTPS directly in the gateway process. Use explicit certificates in production and avoid plaintext exposure on untrusted networks.":
        "用于在网关进程内直接终止 HTTPS 的 TLS 证书与密钥设置。在生产环境中请使用显式证书，并避免在不受信任网络上明文暴露。",
      "Enables TLS termination at the gateway listener so clients connect over HTTPS/WSS directly. Keep enabled for direct internet exposure or any untrusted network boundary.":
        "在网关监听器上启用 TLS 终止，使客户端可直接通过 HTTPS/WSS 连接。对于直接暴露到互联网或任何不受信任网络边界的场景，请保持启用。",
      "Auto-generates a local TLS certificate/key pair when explicit files are not configured. Use only for local/dev setups and replace with real certificates for production traffic.":
        "当未配置显式文件时，自动生成本地 TLS 证书/密钥对。仅用于本地/开发环境，生产流量请替换为真实证书。",
      "Filesystem path to the TLS certificate file used by the gateway when TLS is enabled. Use managed certificate paths and keep renewal automation aligned with this location.":
        "启用 TLS 时，网关使用的 TLS 证书文件路径。请使用受管理的证书路径，并让续订自动化与该位置保持一致。",
      "Filesystem path to the TLS private key file used by the gateway when TLS is enabled. Keep this key file permission-restricted and rotate per your security policy.":
        "启用 TLS 时，网关使用的 TLS 私钥文件路径。请对该密钥文件施加严格权限限制，并按你的安全策略定期轮换。",
      "Optional CA bundle path for client verification or custom trust-chain requirements at the gateway edge. Use this when private PKI or custom certificate chains are part of deployment.":
        "用于客户端校验或网关边缘自定义信任链要求的可选 CA bundle 路径。当部署中包含私有 PKI 或自定义证书链时可使用此项。",
      "Gateway HTTP API configuration grouping endpoint toggles and transport-facing API exposure controls. Keep only required endpoints enabled to reduce attack surface.":
        "用于分组管理端点开关和面向传输的 API 暴露控制的网关 HTTP API 配置。请仅启用必需端点，以减少攻击面。",
      "HTTP endpoint feature toggles under the gateway API surface for compatibility routes and optional integrations. Enable endpoints intentionally and monitor access patterns after rollout.":
        "网关 API 面下用于兼容路由和可选集成的 HTTP 端点功能开关。请有意启用端点，并在上线后监控访问模式。",
      "Optional HTTP response security headers applied by the gateway process itself. Prefer setting these at your reverse proxy when TLS terminates there.":
        "由网关进程自身添加的可选 HTTP 响应安全头。如果 TLS 在反向代理处终止，建议优先在那里设置这些安全头。",
      "Value for the Strict-Transport-Security response header. Set only on HTTPS origins that you fully control; use false to explicitly disable.":
        "用于 `Strict-Transport-Security` 响应头的值。仅应在你完全控制的 HTTPS 源站上设置；使用 false 可显式禁用。",
      "DANGEROUS toggle that enables Host-header based origin fallback for Control UI/WebChat websocket checks. This mode is supported when your deployment intentionally relies on Host-header origin policy; explicit gateway.controlUi.allowedOrigins remains the recommended hardened default.":
        "危险开关：为 Control UI/WebChat WebSocket 检查启用基于 Host 请求头的源站回退。仅当你的部署明确依赖 Host-header 源策略时才使用该模式；显式配置 `gateway.controlUi.allowedOrigins` 仍然是推荐的加固默认方式。",
      "Loosens strict browser auth checks for Control UI when you must run a non-standard setup. Keep this off unless you trust your network and proxy path, because impersonation risk is higher.":
        "当你必须运行非标准配置时，放宽 Control UI 的严格浏览器认证检查。除非你信任当前网络和代理路径，否则请保持关闭，因为冒用风险更高。",
      "Sets inactivity window before reset for idle mode and can also act as secondary guard with daily mode. Use larger values to preserve continuity or smaller values for fresher short-lived threads.":
        "设置 idle 模式下重置前的空闲时间窗口，也可在 daily 模式中作为二级保护。较大值可保留连续性，较小值则适合更短更新的线程会话。",
      "Overrides reset behavior by chat type (direct, group, thread) when defaults are not sufficient. Use this when group/thread traffic needs different reset cadence than direct messages.":
        "当默认值不足时，按聊天类型（direct、group、thread）覆盖重置行为。当群组/线程流量需要不同于私信的重置节奏时可使用此项。",
      "Defines reset policy for direct chats and supersedes the base session.reset configuration for that type. Use this as the canonical direct-message override instead of the legacy dm alias.":
        "为 direct 聊天定义重置策略，并覆盖该类型的基础 `session.reset` 配置。请将其作为 direct-message 的规范覆盖项，而不是使用旧版 `dm` 别名。",
      "Deprecated alias for direct reset behavior kept for backward compatibility with older configs. Use session.resetByType.direct instead so future tooling and validation remain consistent.":
        "为保持与旧配置兼容而保留的 direct 重置行为旧版别名。请改用 `session.resetByType.direct`，以便未来工具和校验保持一致。",
      "Defines reset policy for group chat sessions where continuity and noise patterns differ from DMs. Use shorter idle windows for busy groups if context drift becomes a problem.":
        "为群聊会话定义重置策略，此类会话的连续性和噪音模式与 DM 不同。若上下文漂移成为问题，可为繁忙群组使用更短的空闲窗口。",
      "Defines reset policy for thread-scoped sessions, including focused channel thread workflows. Use this when thread sessions should expire faster or slower than other chat types.":
        "为线程范围会话定义重置策略，包括聚焦的频道线程工作流。当线程会话应比其他聊天类型更快或更慢过期时可使用此项。",
      "Provides channel-specific reset overrides keyed by provider/channel id for fine-grained behavior control. Use this only when one channel needs exceptional reset behavior beyond type-level policies.":
        "提供按 provider/channel id 键控的频道级重置覆盖项，用于精细化行为控制。仅在某个频道需要超出类型级策略的特殊重置行为时使用。",
      "Controls interval for repeated typing indicators while replies are being prepared in typing-capable channels. Increase to reduce chatty updates or decrease for more active typing feedback.":
        "控制在支持 typing 的频道中准备回复期间重复发送 typing 指示的间隔。提高可减少频繁更新，降低则可获得更积极的 typing 反馈。",
      "CLI-managed install metadata (used by `openclaw plugins update` to locate install sources).":
        "由 CLI 管理的安装元数据（`openclaw plugins update` 用它来定位安装来源）。",
      "Install source (\"npm\", \"archive\", or \"path\").":
        "安装来源（`npm`、`archive` 或 `path`）。",
      "Original npm spec used for install (if source is npm).":
        "安装时使用的原始 npm spec（当来源为 npm 时）。",
      "Original archive/path used for install (if any).":
        "安装时使用的原始归档包/路径（如果有）。",
      "Resolved install directory (usually ~/.openclaw/extensions/<id>).":
        "已解析的安装目录（通常是 `~/.openclaw/extensions/<id>`）。",
      "Default browser profile name selected when callers do not explicitly choose a profile. Use a stable low-privilege profile as the default to reduce accidental cross-context state use.":
        "当调用方未显式选择配置档时使用的默认浏览器配置档名称。请使用稳定、低权限的配置档作为默认值，以减少意外的跨上下文状态复用。",
      "Bind IP address for the Chrome extension relay listener. Leave unset for loopback-only access, or set an explicit non-loopback IP such as 0.0.0.0 only when the relay must be reachable across network namespaces (for example WSL2) and the surrounding network is already trusted.":
        "用于 Chrome 扩展 relay 监听器的绑定 IP 地址。若只需 loopback 访问则保持未设置；仅当 relay 必须跨网络命名空间可达（例如 WSL2）且周围网络已受信任时，才显式设置为非 loopback IP（例如 `0.0.0.0`）。",
      "Named browser profile connection map used for explicit routing to CDP ports or URLs with optional metadata. Keep profile names consistent and avoid overlapping endpoint definitions.":
        "命名浏览器配置档连接映射，用于显式路由到 CDP 端口或 URL，并可附带元数据。请保持配置档名称一致，并避免端点定义相互重叠。",
      "Per-profile local CDP port used when connecting to browser instances by port instead of URL. Use unique ports per profile to avoid connection collisions.":
        "按配置档使用的本地 CDP 端口，当通过端口而非 URL 连接浏览器实例时生效。请为每个配置档使用唯一端口，以避免连接冲突。",
      "Per-profile CDP websocket URL used for explicit remote browser routing by profile name. Use this when profile connections terminate on remote hosts or tunnels.":
        "按配置档使用的 CDP WebSocket URL，用于基于配置档名称的显式远程浏览器路由。当配置档连接终止于远程主机或隧道时使用此项。",
      "Per-profile browser driver mode: \"openclaw\" (or legacy \"clawd\") or \"extension\" depending on connection/runtime strategy. Use the driver that matches your browser control stack to avoid protocol mismatches.":
        "按配置档设置的浏览器驱动模式：根据连接/运行时策略可为 `openclaw`（或旧版 `clawd`）或 `extension`。请使用与你浏览器控制栈匹配的驱动，以避免协议不匹配。",
      "Per-profile attach-only override that skips local browser launch and only attaches to an existing CDP endpoint. Useful when one profile is externally managed but others are locally launched.":
        "按配置档设置的仅附加覆盖项，会跳过本地浏览器启动，仅附加到现有 CDP 端点。当某个配置档由外部管理而其他配置档在本地启动时，此项很有用。",
      "Per-profile accent color for visual differentiation in dashboards and browser-related UI hints. Use distinct colors for high-signal operator recognition of active profiles.":
        "按配置档设置的强调色，用于在仪表板和浏览器相关 UI 提示中进行视觉区分。请使用明显不同的颜色，以帮助操作者快速识别当前活动配置档。",
      "Enables browser-side evaluate helpers for runtime script evaluation capabilities where supported. Keep disabled unless your workflows require evaluate semantics beyond snapshots/navigation.":
        "启用浏览器侧 evaluate 辅助能力，用于支持运行时脚本求值。除非你的工作流需要超出快照/导航之外的 evaluate 语义，否则请保持禁用。",
      "Default snapshot capture configuration used when callers do not provide explicit snapshot options. Tune this for consistent capture behavior across channels and automation paths.":
        "当调用方未提供显式快照选项时使用的默认快照捕获配置。请调优此项，以便在不同频道和自动化路径中保持一致的捕获行为。",
      "Default snapshot extraction mode controlling how page content is transformed for agent consumption. Choose the mode that balances readability, fidelity, and token footprint for your workflows.":
        "控制页面内容如何转换为供智能体消费内容的默认快照提取模式。请选择在你的工作流中兼顾可读性、保真度和 token 开销的模式。",
      "Server-side request forgery guardrail settings for browser/network fetch paths that could reach internal hosts. Keep restrictive defaults in production and open only explicitly approved targets.":
        "用于可能访问内部主机的浏览器/网络抓取路径的 SSRF 防护设置。在生产环境中请保持严格默认值，仅对显式批准的目标开放。",
      "Legacy alias for browser.ssrfPolicy.dangerouslyAllowPrivateNetwork. Prefer the dangerously-named key so risk intent is explicit.":
        "`browser.ssrfPolicy.dangerouslyAllowPrivateNetwork` 的旧版别名。建议优先使用带有 dangerously 命名的键，以明确表达风险意图。",
      "Allows access to private-network address ranges from browser tooling. Default is enabled for trusted-network operator setups; disable to enforce strict public-only resolution checks.":
        "允许浏览器工具访问私有网络地址范围。对受信任网络中的操作者设置来说默认启用；若要强制执行仅公网解析检查，请禁用。",
      "Explicit hostname allowlist exceptions for SSRF policy checks on browser/network requests. Keep this list minimal and review entries regularly to avoid stale broad access.":
        "浏览器/网络请求在 SSRF 策略检查中使用的显式主机名允许列表例外项。请保持该列表最小化，并定期审查条目，以避免陈旧的宽泛访问权限。",
      "Legacy/alternate hostname allowlist field used by SSRF policy consumers for explicit host exceptions. Use stable exact hostnames and avoid wildcard-like broad patterns.":
        "供 SSRF 策略消费者使用的旧版/备用主机名允许列表字段，用于显式主机例外。请使用稳定且精确的主机名，并避免类似通配符的宽泛模式。",
      "Interval in minutes for automatic channel health probing and status updates. Use lower intervals for faster detection, or higher intervals to reduce periodic probe noise.":
        "自动频道健康探测与状态更新的时间间隔（分钟）。较低间隔可更快发现问题，较高间隔则可减少周期性探测噪音。",
      "Tailscale integration settings for Serve/Funnel exposure and lifecycle handling on gateway start/exit. Keep off unless your deployment intentionally relies on Tailscale ingress.":
        "用于网关启动/退出时 Serve/Funnel 暴露和生命周期处理的 Tailscale 集成设置。除非你的部署明确依赖 Tailscale 入口，否则请保持关闭。",
      "Tailscale publish mode: \"off\", \"serve\", or \"funnel\" for private or public exposure paths. Use \"serve\" for tailnet-only access and \"funnel\" only when public internet reachability is required.":
        "Tailscale 发布模式：`off`、`serve` 或 `funnel`，用于私有或公共暴露路径。仅 tailnet 访问请使用 `serve`，仅在需要公网可达性时使用 `funnel`。",
      "Resets Tailscale Serve/Funnel state on gateway exit to avoid stale published routes after shutdown. Keep enabled unless another controller manages publish lifecycle outside the gateway.":
        "在网关退出时重置 Tailscale Serve/Funnel 状态，以避免关闭后残留过期发布路由。除非有其他控制器在网关外部管理发布生命周期，否则请保持启用。",
      "Remote gateway connection settings for direct or SSH transport when this instance proxies to another runtime host. Use remote mode only when split-host operation is intentionally configured.":
        "当此实例代理到另一台运行时主机时，用于直接或 SSH 传输的远程网关连接设置。仅在有意配置分离主机运行时使用远程模式。",
      "Global session routing, reset, delivery policy, and maintenance controls for conversation history behavior. Keep defaults unless you need stricter isolation, retention, or delivery constraints.":
        "用于会话历史行为的全局会话路由、重置、投递策略和维护控制项。除非你需要更严格的隔离、保留或投递约束，否则请保持默认值。",
      "Applies a legacy idle reset window in minutes for session reuse behavior across inactivity gaps. Use this only for compatibility and prefer structured reset policies under session.reset/session.resetByType.":
        "应用一个以分钟计的旧版空闲重置窗口，以控制跨空闲间隔的会话复用行为。此项仅用于兼容性，推荐优先使用 `session.reset` / `session.resetByType` 下的结构化重置策略。",
      "Defines the default reset policy object used when no type-specific or channel-specific override applies. Set this first, then layer resetByType or resetByChannel only where behavior must differ.":
        "定义当不存在按类型或按频道覆盖时所使用的默认重置策略对象。请先设置它，再仅在行为必须不同的地方叠加 `resetByType` 或 `resetByChannel`。",
      "Selects reset strategy: \"daily\" resets at a configured hour and \"idle\" resets after inactivity windows. Keep one clear mode per policy to avoid surprising context turnover patterns.":
        "选择重置策略：`daily` 在设定小时重置，`idle` 在空闲窗口后重置。每个策略请保持单一清晰模式，以避免意外的上下文切换模式。",
      "Sets local-hour boundary (0-23) for daily reset mode so sessions roll over at predictable times. Use with mode=daily and align to operator timezone expectations for human-readable behavior.":
        "设置 daily 重置模式的本地小时边界（0-23），使会话在可预测的时间点滚动。与 `mode=daily` 配合使用，并与操作者时区预期保持一致，以获得更易理解的行为。",
      "Memory backend configuration (global).":
        "记忆后端配置（全局）。",
      "Selects the global memory engine: \"builtin\" uses OpenClaw memory internals, while \"qmd\" uses the QMD sidecar pipeline. Keep \"builtin\" unless you intentionally operate QMD.":
        "选择全局记忆引擎：`builtin` 使用 OpenClaw 内建记忆机制，`qmd` 使用 QMD 边车流水线。除非你有意运行 QMD，否则请保持 `builtin`。",
      "Controls citation visibility in replies: \"auto\" shows citations when useful, \"on\" always shows them, and \"off\" hides them. Keep \"auto\" for a balanced signal-to-noise default.":
        "控制回复中引用的可见性：`auto` 在有用时显示引用，`on` 始终显示，`off` 则隐藏。为了获得平衡的信噪比默认行为，请保持 `auto`。",
      "Sets the executable path for the `qmd` binary used by the QMD backend (default: resolved from PATH). Use an explicit absolute path when multiple qmd installs exist or PATH differs across environments.":
        "设置 QMD 后端使用的 `qmd` 二进制执行路径（默认：从 PATH 解析）。当存在多个 qmd 安装或不同环境的 PATH 不一致时，请使用显式绝对路径。",
      "Routes QMD work through mcporter (MCP runtime) instead of spawning `qmd` for each call. Use this when cold starts are expensive on large models; keep direct process mode for simpler local setups.":
        "通过 mcporter（MCP 运行时）而不是为每次调用派生 `qmd` 进程来执行 QMD 工作。当大模型冷启动成本较高时可使用此项；对于更简单的本地环境请保持直接进程模式。",
      "Plugin system controls for enabling extensions, constraining load scope, configuring entries, and tracking installs. Keep plugin policy explicit and least-privilege in production environments.":
        "用于启用扩展、约束加载范围、配置条目和跟踪安装的插件系统控制项。在生产环境中请保持插件策略显式且遵循最小权限原则。",
      "Enable or disable plugin/extension loading globally during startup and config reload (default: true). Keep enabled only when extension capabilities are required by your deployment.":
        "在启动和配置重载期间全局启用或禁用插件/扩展加载（默认：true）。仅当你的部署确实需要扩展能力时才保持启用。",
      "Optional allowlist of plugin IDs; when set, only listed plugins are eligible to load. Use this to enforce approved extension inventories in controlled environments.":
        "可选的插件 ID 允许列表；设置后，只有列出的插件才有资格加载。可用它在受控环境中强制执行已批准的扩展清单。",
      "Optional denylist of plugin IDs that are blocked even if allowlists or paths include them. Use deny rules for emergency rollback and hard blocks on risky plugins.":
        "可选的插件 ID 拒绝列表，即使允许列表或路径包含它们，也会被阻止加载。可将拒绝规则用于紧急回滚和对高风险插件的硬性封锁。",
      "Plugin loader configuration group for specifying filesystem paths where plugins are discovered. Keep load paths explicit and reviewed to avoid accidental untrusted extension loading.":
        "用于指定插件发现文件系统路径的插件加载器配置组。请保持加载路径显式且经过审查，以避免意外加载不受信任扩展。",
      "Browser runtime controls for local or remote CDP attachment, profile routing, and screenshot/snapshot behavior. Keep defaults unless your automation workflow requires custom browser transport settings.":
        "用于本地或远程 CDP 附加、配置档路由以及截图/快照行为的浏览器运行时控制项。除非你的自动化工作流需要自定义浏览器传输设置，否则请保持默认值。",
      "Default accent color used for browser profile/UI cues where colored identity hints are displayed. Use consistent colors to help operators identify active browser profile context quickly.":
        "用于显示彩色身份提示时的浏览器配置档/UI 默认强调色。请使用一致颜色，以帮助操作者快速识别当前活动的浏览器配置档上下文。",
      "Forces browser launch in headless mode when the local launcher starts browser instances. Keep headless enabled for server environments and disable only when visible UI debugging is required.":
        "当本地启动器启动浏览器实例时，强制使用无头模式。服务器环境请保持启用，仅在需要可见 UI 调试时禁用。",
      "Starting local CDP port used for auto-allocated browser profile ports. Increase this when host-level port defaults conflict with other local services.":
        "自动分配浏览器配置档端口时所使用的本地 CDP 起始端口。当主机级默认端口与其他本地服务冲突时可提高此值。",
      "Default browser profile name selected when callers do not request a specific profile. Keep this stable so scripted browser actions have predictable context.":
        "当调用方未请求特定配置档时所选用的默认浏览器配置档名称。请保持其稳定，以便脚本化浏览器动作拥有可预测的上下文。",
      "Service discovery settings for local mDNS advertisement and optional wide-area presence signaling. Keep discovery scoped to expected networks to avoid leaking service metadata.":
        "用于本地 mDNS 广播和可选广域存在信号的服务发现设置。请将发现范围限制在预期网络中，以避免泄露服务元数据。",
      "mDNS broadcast mode (\"minimal\" default, \"full\" includes cliPath/sshPort, \"off\" disables mDNS).":
        "mDNS 广播模式（默认 `minimal`，`full` 包含 `cliPath` / `sshPort`，`off` 禁用 mDNS）。",
      "Wide-area discovery configuration group for exposing discovery signals beyond local-link scopes. Enable only in deployments that intentionally aggregate gateway presence across sites.":
        "用于将发现信号暴露到本地链路范围之外的广域发现配置组。仅在明确需要跨站点聚合网关存在信息的部署中启用。",
      "Enables wide-area discovery signaling when your environment needs non-local gateway discovery. Keep disabled unless cross-network discovery is operationally required.":
        "当环境需要非本地网关发现时，启用广域发现信号。除非运维上确实需要跨网络发现，否则请保持禁用。",
      "Canvas host settings for serving canvas assets and local live-reload behavior used by canvas-enabled workflows. Keep disabled unless canvas-hosted assets are actively used.":
        "用于服务 Canvas 资源以及 canvas 工作流中本地热重载行为的 Canvas 宿主设置。除非明确在使用 Canvas 托管资源，否则请保持禁用。",
      "Enables the canvas host server process and routes for serving canvas files. Keep disabled when canvas workflows are inactive to reduce exposed local services.":
        "启用用于提供 Canvas 文件的 Canvas 宿主服务器进程和路由。当 Canvas 工作流不活跃时请保持禁用，以减少暴露的本地服务。",
      "Filesystem root directory served by canvas host for canvas content and static assets. Use a dedicated directory and avoid broad repo roots for least-privilege file exposure.":
        "Canvas 宿主用于提供 Canvas 内容和静态资源的文件系统根目录。请使用专用目录，并避免宽泛的仓库根目录，以实现最小权限的文件暴露。",
      "TCP port used by the canvas host HTTP server when canvas hosting is enabled. Choose a non-conflicting port and align firewall/proxy policy accordingly.":
        "启用 Canvas 托管时，Canvas 宿主 HTTP 服务器使用的 TCP 端口。请选择无冲突端口，并据此调整防火墙/代理策略。",
      "Enables automatic live-reload behavior for canvas assets during development workflows. Keep disabled in production-like environments where deterministic output is preferred.":
        "在开发工作流中启用 Canvas 资源的自动热重载行为。在更接近生产的环境中，为了获得确定性输出请保持禁用。",
      "UI presentation settings for accenting and assistant identity shown in control surfaces. Use this for branding and readability customization without changing runtime behavior.":
        "用于控制界面中强调色和助手身份展示的 UI 呈现设置。可用它进行品牌和可读性定制，而不改变运行时行为。",
      "Primary accent/seam color used by UI surfaces for emphasis, badges, and visual identity cues. Use high-contrast values that remain readable across light/dark themes.":
        "用于 UI 表面的主要强调/接缝颜色，应用于强调、徽章和视觉身份提示。请使用在浅色/深色主题中都清晰可读的高对比颜色。",
      "Assistant display identity settings for name and avatar shown in UI surfaces. Keep these values aligned with your operator-facing persona and support expectations.":
        "用于 UI 表面中显示的助手名称和头像的助手展示身份设置。请让这些值与你面向操作者的人设和支持预期保持一致。",
      "Display name shown for the assistant in UI views, chat chrome, and status contexts. Keep this stable so operators can reliably identify which assistant persona is active.":
        "在 UI 视图、聊天外壳和状态上下文中显示的助手名称。请保持其稳定，以便操作者能够可靠识别当前激活的是哪个助手人设。",
      "Assistant avatar image source used in UI surfaces (URL, path, or data URI depending on runtime support). Use trusted assets and consistent branding dimensions for clean rendering.":
        "用于 UI 表面中的助手头像图像来源（取决于运行时支持，可为 URL、路径或 data URI）。请使用可信资源，并保持一致的品牌尺寸以获得整洁渲染。",
      "Node host controls for features exposed from this gateway node to other nodes or clients. Keep defaults unless you intentionally proxy local capabilities across your node network.":
        "用于控制从当前网关节点向其他节点或客户端暴露功能的节点宿主设置。除非你有意在节点网络中代理本地能力，否则请保持默认值。",
      "Groups browser-proxy settings for exposing local browser control through node routing. Enable only when remote node workflows need your local browser profiles.":
        "用于通过节点路由暴露本地浏览器控制的浏览器代理设置组。仅当远程节点工作流需要使用你的本地浏览器配置档时启用。",
      "Expose the local browser control server through node proxy routing so remote clients can use this host's browser capabilities. Keep disabled unless remote automation explicitly depends on it.":
        "通过节点代理路由暴露本地浏览器控制服务器，使远程客户端可以使用此主机的浏览器能力。除非远程自动化明确依赖此项，否则请保持禁用。",
      "Optional allowlist of browser profile names exposed through node proxy routing. Leave empty to expose all configured profiles, or use a tight list to enforce least-privilege profile access.":
        "通过节点代理路由暴露的浏览器配置档名称可选允许列表。留空可暴露所有已配置的配置档，或使用严格列表以实现最小权限的配置档访问。",
      "Global audio ingestion settings used before higher-level tools process speech or media content. Configure this when you need deterministic transcription behavior for voice notes and clips.":
        "在更高层工具处理语音或媒体内容之前使用的全局音频接入设置。当你需要对语音笔记和音频片段获得确定性的转写行为时配置此项。",
      "Command-based transcription settings for converting audio files into text before agent handling. Keep a simple, deterministic command path here so failures are easy to diagnose in logs.":
        "用于在智能体处理前将音频文件转换为文本的基于命令的转写设置。请在此保持简单、确定性的命令路径，以便在日志中轻松诊断失败原因。",
      "Executable + args used to transcribe audio (first token must be a safe binary/path), for example `[\"whisper-cli\", \"--model\", \"small\", \"{input}\"]`. Prefer a pinned command so runtime environments behave consistently.":
        "用于转写音频的可执行文件 + 参数（第一个 token 必须是安全的二进制/路径），例如 `[\"whisper-cli\", \"--model\", \"small\", \"{input}\"]`。建议固定命令，以便不同运行环境表现一致。",
      "Maximum time allowed for the transcription command to finish before it is aborted. Increase this for longer recordings, and keep it tight in latency-sensitive deployments.":
        "在转写命令被中止前允许完成的最大时间。对于更长录音可提高此值；在对延迟敏感的部署中请保持较紧限制。",
      "Extra node.invoke commands to allow beyond the gateway defaults (array of command strings). Enabling dangerous commands here is a security-sensitive override and is flagged by `openclaw security audit`.":
        "在网关默认值之外额外允许的 `node.invoke` 命令（命令字符串数组）。在这里启用危险命令属于安全敏感覆盖项，会被 `openclaw security audit` 标记出来。",
      "Node command names to block even if present in node claims or default allowlist (exact command-name matching only, e.g. `system.run`; does not inspect shell text inside that command).":
        "即使存在于节点声明或默认允许列表中，也要阻止的节点命令名称（仅进行精确命令名匹配，例如 `system.run`；不会检查该命令内部的 shell 文本）。",
      "Controls typing behavior timing: \"never\", \"instant\", \"thinking\", or \"message\" based emission points. Keep conservative modes in high-volume channels to avoid unnecessary typing noise.":
        "控制 typing 行为的时机：`never`、`instant`、`thinking` 或 `message`，取决于触发时点。在高流量频道中请保持保守模式，以避免不必要的 typing 噪音。",
      "Maximum parent-session token count allowed for thread/session inheritance forking. If the parent exceeds this, OpenClaw starts a fresh thread session instead of forking; set 0 to disable this protection.":
        "线程/会话继承分叉时允许的父会话最大 token 数。如果父会话超过此值，OpenClaw 会启动一个新的线程会话而不是分叉；设为 0 可禁用此保护。",
      "Overrides the canonical main session key used for continuity when dmScope or routing logic points to `main`. Use a stable value only if you intentionally need custom session anchoring.":
        "覆盖在 `dmScope` 或路由逻辑指向 `main` 时用于连续性的规范主会话 key。仅在你有意需要自定义会话锚定时才使用稳定值。",
      "Matches the raw, unnormalized session-key prefix for exact full-key policy targeting. Use this when normalized keyPrefix is too broad and you need agent-prefixed or transport-specific precision.":
        "匹配原始、未归一化的 session-key 前缀，以便精确定位完整 key 的策略目标。当归一化后的 `keyPrefix` 过于宽泛，而你需要带智能体前缀或传输层特定的精确匹配时使用。",
      "Groups controls for inter-agent session exchanges, including loop prevention limits on reply chaining. Keep defaults unless you run advanced agent-to-agent automation with strict turn caps.":
        "用于智能体间会话交互的分组控制项，包括回复链路中的循环预防限制。除非你在运行带严格轮次上限的高级智能体到智能体自动化，否则请保持默认值。",
      "Max reply-back turns between requester and target agents during agent-to-agent exchanges (0-5). Use lower values to hard-limit chatter loops and preserve predictable run completion.":
        "在智能体到智能体交互期间，请求方与目标智能体之间允许的最大往返回复轮次（0-5）。使用较低值可硬性限制对话循环，并保持运行完成可预测。",
      "Global master switch for thread-bound session routing features and focused thread delivery behavior. Keep enabled for modern thread workflows unless you need to disable thread binding globally.":
        "用于线程绑定会话路由功能和聚焦线程投递行为的全局总开关。除非你需要在全局范围禁用线程绑定，否则请在现代线程工作流中保持启用。",
      "Default inactivity window in hours for thread-bound sessions across providers/channels (0 disables idle auto-unfocus). Default: 24.":
        "跨提供商/频道的线程绑定会话默认空闲窗口（小时）（0 表示禁用空闲自动取消 focus）。默认：24。",
      "Optional hard max age in hours for thread-bound sessions across providers/channels (0 disables hard cap). Default: 0.":
        "跨提供商/频道的线程绑定会话可选硬性最大时长（小时）（0 表示禁用硬上限）。默认：0。",
      "Determines whether maintenance policies are only reported (\"warn\") or actively applied (\"enforce\"). Keep \"warn\" during rollout and switch to \"enforce\" after validating safe thresholds.":
        "决定维护策略是仅报告（`warn`）还是主动执行（`enforce`）。在上线阶段请保持 `warn`，在确认阈值安全后再切换到 `enforce`。",
      "Removes entries older than this duration (for example `30d` or `12h`) during maintenance passes. Use this as the primary age-retention control and align it with data retention policy.":
        "在维护过程中移除超过此时长的条目（例如 `30d` 或 `12h`）。请将其作为主要的按年龄保留控制项，并与数据保留策略保持一致。",
      "Deprecated age-retention field kept for compatibility with legacy configs using day counts. Use session.maintenance.pruneAfter instead so duration syntax and behavior are consistent.":
        "为兼容使用天数计数的旧版配置而保留的已弃用年龄保留字段。请改用 `session.maintenance.pruneAfter`，以便时长语法和行为保持一致。",
      "Caps total session entry count retained in the store to prevent unbounded growth over time. Use lower limits for constrained environments, or higher limits when longer history is required.":
        "限制存储中保留的会话条目总数，以防止长期无界增长。在资源受限环境中请使用较低上限，而在需要更长历史时可提高。",
      "Rotates the session store when file size exceeds a threshold such as `10mb` or `1gb`. Use this to bound single-file growth and keep backup/restore operations manageable.":
        "当文件大小超过阈值（如 `10mb` 或 `1gb`）时轮转会话存储。可用此项限制单文件增长，并让备份/恢复操作保持可管理。",
      "Retention for reset transcript archives (`*.reset.<timestamp>`). Accepts a duration (for example `30d`), or `false` to disable cleanup. Defaults to pruneAfter so reset artifacts do not grow forever.":
        "用于 reset 转录归档（`*.reset.<timestamp>`）的保留策略。可接受时长（例如 `30d`），或设为 `false` 以禁用清理。默认回退到 `pruneAfter`，以防 reset 构件无限增长。",
      "Optional per-agent sessions-directory disk budget (for example `500mb`). Use this to cap session storage per agent; when exceeded, warn mode reports pressure and enforce mode performs oldest-first cleanup.":
        "按智能体计算的可选 sessions 目录磁盘预算（例如 `500mb`）。可用于限制每个智能体的会话存储；超出后，warn 模式会报告压力，enforce 模式则执行最旧优先清理。",
      "Target size after disk-budget cleanup (high-water mark). Defaults to 80% of maxDiskBytes; set explicitly for tighter reclaim behavior on constrained disks.":
        "磁盘预算清理后的目标大小（高水位线）。默认是 `maxDiskBytes` 的 80%；在受限磁盘上可显式设置，以获得更紧的回收行为。",
      "Routes QMD through an mcporter daemon instead of spawning qmd per request, reducing cold-start overhead for larger models. Keep disabled unless mcporter is installed and configured.":
        "通过 mcporter 守护进程而不是为每次请求派生 qmd 来执行 QMD，从而降低大模型场景下的冷启动开销。除非已安装并配置 mcporter，否则请保持禁用。",
      "Names the mcporter server target used for QMD calls (default: qmd). Change only when your mcporter setup uses a custom server name for qmd mcp keep-alive.":
        "为 QMD 调用指定 mcporter 服务端目标名称（默认：`qmd`）。仅当你的 mcporter 配置为 qmd mcp keep-alive 使用了自定义服务名时才修改。",
      "Automatically starts the mcporter daemon when mcporter-backed QMD mode is enabled (default: true). Keep enabled unless process lifecycle is managed externally by your service supervisor.":
        "在启用基于 mcporter 的 QMD 模式时自动启动 mcporter 守护进程（默认：true）。除非进程生命周期由外部服务管理器托管，否则请保持启用。",
      "Selects the QMD retrieval path: \"query\" uses standard query flow, \"search\" uses search-oriented retrieval, and \"vsearch\" emphasizes vector retrieval. Keep default unless tuning relevance quality.":
        "选择 QMD 检索路径：`query` 使用标准查询流，`search` 使用面向搜索的检索，`vsearch` 则更强调向量检索。除非你在调优相关性质量，否则请保持默认值。",
      "Automatically indexes default memory files (MEMORY.md and memory/**/*.md) into QMD collections. Keep enabled unless you want indexing controlled only through explicit custom paths.":
        "自动将默认记忆文件（`MEMORY.md` 和 `memory/**/*.md`）索引到 QMD 集合中。除非你希望仅通过显式自定义路径控制索引，否则请保持启用。",
      "Adds custom directories or files to include in QMD indexing, each with an optional name and glob pattern. Use this for project-specific knowledge locations that are outside default memory paths.":
        "向 QMD 索引中加入自定义目录或文件，每项可带可选名称和 glob 模式。适用于项目特定知识位置位于默认记忆路径之外时。",
      "Defines the root location QMD should scan, using an absolute path or `~`-relative path. Use stable directories so collection identity does not drift across environments.":
        "定义 QMD 应扫描的根位置，可使用绝对路径或相对 `~` 的路径。请使用稳定目录，以避免集合身份在不同环境间漂移。",
      "Filters files under each indexed root using a glob pattern, with default `**/*.md`. Use narrower patterns to reduce noise and indexing cost when directories contain mixed file types.":
        "使用 glob 模式过滤每个索引根目录下的文件，默认值为 `**/*.md`。当目录中包含混合文件类型时，请使用更窄模式以降低噪音和索引成本。",
      "Sets a stable collection name for an indexed path instead of deriving it from filesystem location. Use this when paths vary across machines but you want consistent collection identity.":
        "为索引路径设置稳定的集合名称，而不是从文件系统位置派生。当不同机器上的路径不同但你希望集合身份保持一致时使用。",
      "Additional plugin files or directories scanned by the loader beyond built-in defaults. Use dedicated extension directories and avoid broad paths with unrelated executable content.":
        "除内建默认路径外，由加载器额外扫描的插件文件或目录。请使用专用扩展目录，并避免包含无关可执行内容的宽泛路径。",
      "Selects which plugins own exclusive runtime slots such as memory so only one plugin provides that capability. Use explicit slot ownership to avoid overlapping providers with conflicting behavior.":
        "选择哪些插件拥有 memory 等独占运行时槽位，使该能力只由一个插件提供。请显式指定槽位所有权，以避免多个提供商行为冲突。",
      "Select the active memory plugin by id, or \"none\" to disable memory plugins.":
        "按 id 选择当前激活的记忆插件，或使用 `none` 禁用记忆插件。",
      "Selects the active context engine plugin by id so one plugin provides context orchestration behavior.":
        "按 id 选择当前激活的上下文引擎插件，以便由单个插件提供上下文编排行为。",
      "Per-plugin settings keyed by plugin ID including enablement and plugin-specific runtime configuration payloads. Use this for scoped plugin tuning without changing global loader policy.":
        "按插件 ID 键控的每插件设置，包括启用状态和插件特定运行时配置载荷。可用于在不改变全局加载器策略的情况下进行局部插件调优。",
      "Per-plugin enablement override for a specific entry, applied on top of global plugin policy (restart required). Use this to stage plugin rollout gradually across environments.":
        "用于特定条目的按插件启用覆盖项，会叠加到全局插件策略之上（需要重启）。可用它在不同环境中渐进式发布插件。",
      "Per-plugin typed hook policy controls for core-enforced safety gates. Use this to constrain high-impact hook categories without disabling the entire plugin.":
        "按插件设置、用于核心强制安全门的 typed hook 策略控制项。可用它在不禁用整个插件的前提下限制高影响 hook 类别。",
      "Controls whether this plugin may mutate prompts through typed hooks. Set false to block `before_prompt_build` and ignore prompt-mutating fields from legacy `before_agent_start`, while preserving legacy `modelOverride` and `providerOverride` behavior.":
        "控制该插件是否可通过 typed hooks 改写提示词。设为 false 会阻止 `before_prompt_build`，并忽略来自旧版 `before_agent_start` 的提示词改写字段，同时保留旧版 `modelOverride` 和 `providerOverride` 行为。",
      "Optional API key field consumed by plugins that accept direct key configuration in entry settings. Use secret/env substitution and avoid committing real credentials into config files.":
        "供接受条目设置中直接密钥配置的插件使用的可选 API Key 字段。请使用 secret/env 替换，并避免在配置文件中提交真实凭据。",
      "Per-plugin environment variable map injected for that plugin runtime context only. Use this to scope provider credentials to one plugin instead of sharing global process environment.":
        "仅注入到该插件运行时上下文中的按插件环境变量映射。可用它将提供商凭据限定到单个插件，而不是共享全局进程环境。",
      "Plugin-defined configuration payload interpreted by that plugin's own schema and validation rules. Use only documented fields from the plugin to prevent ignored or invalid settings.":
        "由插件自身 schema 和校验规则解释的插件定义配置载荷。请仅使用插件文档化字段，以避免被忽略或无效的设置。",
      "Version recorded at install time (if available).":
        "安装时记录的版本（如果可用）。",
      "Resolved npm package name from the fetched artifact.":
        "从获取到的构件中解析出的 npm 包名。",
      "Resolved npm package version from the fetched artifact (useful for non-pinned specs).":
        "从获取到的构件中解析出的 npm 包版本（对未固定版本的 spec 很有用）。",
      "Resolved exact npm spec (<name>@<version>) from the fetched artifact.":
        "从获取到的构件中解析出的精确 npm spec（`<name>@<version>`）。",
      "Resolved npm dist integrity hash for the fetched artifact (if reported by npm).":
        "从获取到的构件中解析出的 npm dist integrity 哈希（如果 npm 提供）。",
      "Resolved npm dist shasum for the fetched artifact (if reported by npm).":
        "从获取到的构件中解析出的 npm dist shasum（如果 npm 提供）。",
      "ISO timestamp when npm package metadata was last resolved for this install record.":
        "此安装记录最近一次解析 npm 包元数据时的 ISO 时间戳。",
      "Required by default for gateway access (unless using Tailscale Serve identity); required for non-loopback binds.":
        "默认情况下，网关访问需要此项（除非使用 Tailscale Serve 身份）；对于非 loopback 绑定它是必需的。",
      "Required for Tailscale funnel.":
        "Tailscale funnel 场景必需。",
      "Disables Control UI device identity checks and relies on token/password only. Use only for short-lived debugging on trusted networks, then turn it off immediately.":
        "禁用 Control UI 的设备身份校验，仅依赖 token/password。仅应在受信任网络中的短时调试场景使用，随后请立即关闭。",
      "Enable the OpenAI-compatible `POST /v1/chat/completions` endpoint (default: false).":
        "启用 OpenAI 兼容的 `POST /v1/chat/completions` 端点（默认：false）。",
      "Max request body size in bytes for `/v1/chat/completions` (default: 20MB).":
        "`/v1/chat/completions` 的请求体最大字节数（默认：20MB）。",
      "Max number of `image_url` parts accepted from the latest user message (default: 8).":
        "从最近一条用户消息中接受的 `image_url` 部分最大数量（默认：8）。",
      "Max cumulative decoded bytes across all `image_url` parts in one request (default: 20MB).":
        "单次请求中所有 `image_url` 部分解码后的累计最大字节数（默认：20MB）。",
      "Image fetch/validation controls for OpenAI-compatible `image_url` parts.":
        "针对 OpenAI 兼容 `image_url` 部分的图像抓取/校验控制项。",
      "Allow server-side URL fetches for `image_url` parts (default: false; data URIs remain supported).":
        "允许为 `image_url` 部分执行服务端 URL 抓取（默认：false；仍支持 data URI）。",
      "Optional hostname allowlist for `image_url` URL fetches; supports exact hosts and `*.example.com` wildcards.":
        "用于 `image_url` URL 抓取的可选主机名允许列表；支持精确主机和 `*.example.com` 通配。",
      "Allowed MIME types for `image_url` parts (case-insensitive list).":
        "`image_url` 部分允许的 MIME 类型（大小写不敏感列表）。",
      "Max bytes per fetched/decoded `image_url` image (default: 10MB).":
        "每张抓取/解码后的 `image_url` 图像允许的最大字节数（默认：10MB）。",
      "Max HTTP redirects allowed when fetching `image_url` URLs (default: 3).":
        "抓取 `image_url` URL 时允许的最大 HTTP 重定向次数（默认：3）。",
      "Timeout in milliseconds for `image_url` URL fetches (default: 10000).":
        "`image_url` URL 抓取的超时时间（毫秒，默认：10000）。",
      "Controls how config edits are applied: \"off\" ignores live edits, \"restart\" always restarts, \"hot\" applies in-process, and \"hybrid\" tries hot then restarts if required. Keep \"hybrid\" for safest routine updates.":
        "控制配置编辑如何应用：`off` 忽略实时编辑，`restart` 总是重启，`hot` 在进程内应用，`hybrid` 则先尝试热更新，必要时再重启。常规更新请保持 `hybrid` 以获得最安全行为。",
      "Debounce window (ms) before applying config changes.":
        "在应用配置变更前的防抖窗口（毫秒）。",
      "Node browser routing (\"auto\" = pick single connected browser node, \"manual\" = require node param, \"off\" = disable).":
        "节点浏览器路由（`auto` = 选择单个已连接浏览器节点，`manual` = 需要 node 参数，`off` = 禁用）。",
      "Pin browser routing to a specific node id or name (optional).":
        "将浏览器路由固定到特定的节点 id 或名称（可选）。",
      "Sets fallback action when no sendPolicy rule matches: \"allow\" or \"deny\". Keep \"allow\" for simpler setups, or choose \"deny\" when you require explicit allow rules for every destination.":
        "设置当没有 `sendPolicy` 规则匹配时的回退动作：`allow` 或 `deny`。较简单的场景请保持 `allow`，而当你要求每个目标都必须显式允许时请选择 `deny`。",
      "Ordered allow/deny rules evaluated before the default action, for example `{ action: \"deny\", match: { channel: \"discord\" } }`. Put most specific rules first so broad rules do not shadow exceptions.":
        "在默认动作之前求值的有序允许/拒绝规则，例如 `{ action: \"deny\", match: { channel: \"discord\" } }`。请将最具体的规则放在前面，以避免宽泛规则遮蔽例外。",
      "Defines rule decision as \"allow\" or \"deny\" when the corresponding match criteria are satisfied. Use deny-first ordering when enforcing strict boundaries with explicit allow exceptions.":
        "当相应匹配条件满足时，将规则决策定义为 `allow` 或 `deny`。在通过显式允许例外项实施严格边界时，请优先采用 deny-first 顺序。",
      "Defines optional rule match conditions that can combine channel, chatType, and key-prefix constraints. Keep matches narrow so policy intent stays readable and debugging remains straightforward.":
        "定义可选规则匹配条件，可组合频道、chatType 和 key 前缀约束。请保持匹配条件精确，以便策略意图清晰且调试过程保持直接。",
      "Matches rule application to a specific channel/provider id (for example discord, telegram, slack). Use this when one channel should permit or deny delivery independently of others.":
        "将规则应用匹配到特定频道/提供商 id（例如 `discord`、`telegram`、`slack`）。适用于某个频道需要独立于其他频道允许或拒绝投递时。",
      "Matches rule application to chat type (direct, group, thread) so behavior varies by conversation form. Use this when DM and group destinations require different safety boundaries.":
        "将规则应用匹配到聊天类型（direct、group、thread），使行为能按会话形式区分。当 DM 和群组目标需要不同安全边界时可使用此项。",
      "Matches a normalized session-key prefix after internal key normalization steps in policy consumers. Use this for general prefix controls, and prefer rawKeyPrefix when exact full-key matching is required.":
        "在策略消费者完成内部 key 归一化后，匹配归一化后的 session-key 前缀。适用于一般性的前缀控制；若需要精确完整 key 匹配，请优先使用 `rawKeyPrefix`。",
      "Matches the raw, unnormalized session-key prefix for exact full-key policy targeting. Use this when normalized keyPrefix is too broad and you need agent-specific or literal-key matching.":
        "匹配原始、未归一化的 session-key 前缀，以便精确定位完整 key 的策略目标。当归一化后的 `keyPrefix` 过于宽泛而你需要智能体特定或字面 key 匹配时使用。",
      "Indexes session transcripts into QMD so recall can include prior conversation content (experimental, default: false). Enable only when transcript memory is required and you accept larger index churn.":
        "将会话转录记录索引到 QMD 中，使回忆可以包含先前对话内容（实验性，默认：false）。仅当你需要会话转录记忆且接受更大的索引变动时启用。",
      "Overrides where sanitized session exports are written before QMD indexing. Use this when default state storage is constrained or when exports must land on a managed volume.":
        "覆盖在 QMD 索引前写出清洗后会话导出文件的位置。当默认状态存储受限，或导出文件必须落到受管卷时使用。",
      "Defines how long exported session files are kept before automatic pruning, in days (default: unlimited). Set a finite value for storage hygiene or compliance retention policies.":
        "定义导出的会话文件在自动裁剪前保留多久（按天计，默认：无限制）。可设置有限值，以满足存储清理或合规保留策略。",
      "Sets how often QMD refreshes indexes from source content (duration string, default: 5m). Shorter intervals improve freshness but increase background CPU and I/O.":
        "设置 QMD 从源内容刷新索引的频率（持续时间字符串，默认：5m）。较短间隔可提升新鲜度，但会增加后台 CPU 和 I/O 开销。",
      "Sets the minimum delay between consecutive QMD refresh attempts in milliseconds (default: 15000). Increase this if frequent file changes cause update thrash or unnecessary background load.":
        "设置连续两次 QMD 刷新尝试之间的最小延迟（毫秒，默认：15000）。若频繁文件变更导致更新抖动或不必要的后台负载，可提高此值。",
      "Runs an initial QMD update once during gateway startup (default: true). Keep enabled so recall starts from a fresh baseline; disable only when startup speed is more important than immediate freshness.":
        "在网关启动期间执行一次初始 QMD 更新（默认：true）。建议保持启用，以便回忆从新鲜基线开始；仅在启动速度比即时新鲜度更重要时禁用。",
      "Blocks startup completion until the initial boot-time QMD sync finishes (default: false). Enable when you need fully up-to-date recall before serving traffic, and keep off for faster boot.":
        "在初始启动时的 QMD 同步完成前阻塞启动完成（默认：false）。若你需要在对外服务前保证回忆完全最新，则启用；若希望更快启动，则保持关闭。",
      "Sets how often QMD recomputes embeddings (duration string, default: 60m; set 0 to disable periodic embeds). Lower intervals improve freshness but increase embedding workload and cost.":
        "设置 QMD 重新计算嵌入的频率（持续时间字符串，默认：60m；设为 0 可禁用周期性嵌入）。较低间隔可提升新鲜度，但会增加嵌入负载和成本。",
      "Sets timeout for QMD maintenance commands such as collection list/add in milliseconds (default: 30000). Increase when running on slower disks or remote filesystems that delay command completion.":
        "设置 QMD 维护命令（如 collection list/add）的超时时间（毫秒，默认：30000）。在较慢磁盘或延迟命令完成的远程文件系统上运行时可提高此值。",
      "Agent runtime configuration root covering defaults and explicit agent entries used for routing and execution context. Keep this section explicit so model/tool behavior stays predictable across multi-agent workflows.":
        "代理运行时配置根节点，包含用于路由和执行上下文的默认值与显式代理条目。请保持此部分定义明确，以便在多代理工作流中让模型/工具行为保持可预测。",
      "Shared default settings inherited by agents unless overridden per entry in agents.list. Use defaults to enforce consistent baseline behavior and reduce duplicated per-agent configuration.":
        "除非在 `agents.list` 的单个条目中被覆盖，否则由代理继承的共享默认设置。使用默认值可以强制统一基线行为，并减少重复的每代理配置。",
      "Explicit list of configured agents with IDs and optional overrides for model, tools, identity, and workspace. Keep IDs stable over time so bindings, approvals, and session routing remain deterministic.":
        "已配置代理的显式列表，包含 ID 以及模型、工具、身份和工作区的可选覆盖项。请长期保持 ID 稳定，以便绑定、审批和会话路由保持确定性。",
      "Optional runtime descriptor for this agent. Use embedded for default OpenClaw execution or acp for external ACP harness defaults.":
        "该代理的可选运行时描述。可使用 `embedded` 作为默认 OpenClaw 执行方式，或使用 `acp` 作为外部 ACP 宿主默认值。",
      "Runtime type for this agent: \"embedded\" (default OpenClaw runtime) or \"acp\" (ACP harness defaults).":
        "此代理的运行时类型：`embedded`（默认 OpenClaw 运行时）或 `acp`（ACP 宿主默认值）。",
      "ACP runtime defaults for this agent when runtime.type=acp. Binding-level ACP overrides still take precedence per conversation.":
        "当 `runtime.type=acp` 时，此代理使用的 ACP 运行时默认值。绑定级别的 ACP 覆盖仍会在每个会话中优先生效。",
      "Optional ACP harness agent id to use for this OpenClaw agent (for example codex, claude).":
        "此 OpenClaw 代理可使用的可选 ACP 宿主代理 ID（例如 `codex`、`claude`）。",
      "Optional ACP backend override for this agent's ACP sessions (falls back to global acp.backend).":
        "此代理 ACP 会话的可选 ACP 后端覆盖（否则回退到全局 `acp.backend`）。",
      "Optional ACP session mode default for this agent (persistent or oneshot).":
        "此代理的可选 ACP 会话模式默认值（`persistent` 或 `oneshot`）。",
      "Optional default working directory for this agent's ACP sessions.":
        "此代理 ACP 会话的可选默认工作目录。",
      "Global tool access policy and capability configuration across web, exec, media, messaging, and elevated surfaces. Use this section to constrain risky capabilities before broad rollout.":
        "涵盖 Web、执行、媒体、消息和提升权限面的全局工具访问策略与能力配置。可在大范围上线前使用此部分限制高风险能力。",
      "Global tool profile name used to select a predefined tool policy baseline before applying allow/deny overrides. Use this for consistent environment posture across agents and keep profile names stable.":
        "用于在应用允许/拒绝覆盖之前选择预定义工具策略基线的全局工具配置档名称。可用于在多个代理之间保持一致的环境姿态，并应保持配置档名称稳定。",
      "Absolute tool allowlist that replaces profile-derived defaults for strict environments. Use this only when you intentionally run a tightly curated subset of tool capabilities.":
        "用于严格环境的绝对工具允许列表，会替代由配置档推导出的默认值。仅在你有意运行严格筛选后的少量工具能力时使用。",
      "Global tool denylist that blocks listed tools even when profile or provider rules would allow them. Use deny rules for emergency lockouts and long-term defense-in-depth.":
        "全局工具拒绝列表，即使配置档或提供商规则允许，也会阻止其中列出的工具。可将拒绝规则用于紧急封禁和长期纵深防御。",
      "Policy for allowing agent-to-agent tool calls and constraining which target agents can be reached. Keep disabled or tightly scoped unless cross-agent orchestration is intentionally enabled.":
        "用于允许代理到代理工具调用以及约束可达目标代理的策略。除非你明确启用了跨代理编排，否则请保持禁用或严格限制范围。",
      "Enables the agent_to_agent tool surface so one agent can invoke another agent at runtime. Keep off in simple deployments and enable only when orchestration value outweighs complexity.":
        "启用 `agent_to_agent` 工具面，使一个代理可在运行时调用另一个代理。在简单部署中请保持关闭，仅当编排带来的价值大于复杂性时启用。",
      "Elevated tool access controls for privileged command surfaces that should only be reachable from trusted senders. Keep disabled unless operator workflows explicitly require elevated actions.":
        "用于仅允许受信任发送者访问的特权命令面的提升权限工具访问控制。除非操作者工作流明确需要提升权限动作，否则请保持禁用。",
      "Enables elevated tool execution path when sender and policy checks pass. Keep disabled in public/shared channels and enable only for trusted owner-operated contexts.":
        "当发送者与策略检查通过时，启用提升权限工具执行路径。在公开/共享频道中请保持禁用，仅在受信任、由所有者操作的上下文中启用。",
      "Channel provider configurations plus shared defaults that control access policies, heartbeat visibility, and per-surface behavior. Keep defaults centralized and override per provider only where required.":
        "频道提供商配置以及控制访问策略、心跳可见性和各表面行为的共享默认值。请让默认值集中管理，仅在确有需要时按提供商覆盖。",
      "Telegram channel provider configuration including auth tokens, retry behavior, and message rendering controls. Use this section to tune bot behavior for Telegram-specific API semantics.":
        "Telegram 频道提供商配置，包括认证令牌、重试行为和消息渲染控制。使用此部分可针对 Telegram 特有的 API 语义调优机器人行为。",
      "Discord channel provider configuration for bot auth, retry policy, streaming, thread bindings, and optional voice capabilities. Keep privileged intents and advanced features disabled unless needed.":
        "Discord 频道提供商配置，用于机器人认证、重试策略、流式输出、线程绑定和可选语音能力。除非确有需要，否则请保持特权 intents 和高级功能禁用。",
      "Enable Discord thread binding features (/focus, bound-thread routing/delivery, and thread-bound subagent sessions). Overrides session.threadBindings.enabled when set.":
        "启用 Discord 线程绑定功能（`/focus`、绑定线程路由/投递，以及线程绑定子代理会话）。设置后会覆盖 `session.threadBindings.enabled`。",
      "Enable Discord voice channel conversations (default: true). Omit channels.discord.voice to keep voice support disabled for the account.":
        "启用 Discord 语音频道会话（默认：true）。若省略 `channels.discord.voice`，则该账户的语音支持保持禁用。",
      "Enable automatic Discord bot presence updates based on runtime/model availability signals. When enabled: healthy=>online, degraded/unknown=>idle, exhausted/unavailable=>dnd.":
        "基于运行时/模型可用性信号启用 Discord 机器人在线状态自动更新。启用后：healthy=>online，degraded/unknown=>idle，exhausted/unavailable=>dnd。",
      "Direct message access control (\"pairing\" recommended). \"open\" requires channels.slack.allowFrom=[\"*\"] (legacy: channels.slack.dm.allowFrom).":
        "私信访问控制（推荐使用 `pairing`）。`open` 需要 `channels.slack.allowFrom=[\"*\"]`（旧配置：`channels.slack.dm.allowFrom`）。",
      "Message formatting, acknowledgment, queueing, debounce, and status reaction behavior for inbound/outbound chat flows. Use this section when channel responsiveness or message UX needs adjustment.":
        "用于入站/出站聊天流程中的消息格式化、确认、排队、防抖和状态反应行为设置。当频道响应性或消息体验需要调整时使用此部分。",
      "Text-to-speech policy for reading agent replies aloud on supported voice or audio surfaces. Keep disabled unless voice playback is part of your operator/user workflow.":
        "用于在支持的语音或音频表面上朗读代理回复的文本转语音策略。除非语音播报是操作者/用户工作流的一部分，否则请保持禁用。",
      "Inbound webhook automation surface for mapping external events into wake or agent actions in OpenClaw. Keep this locked down with explicit token/session/agent controls before exposing it beyond trusted networks.":
        "用于将外部事件映射为 OpenClaw 中唤醒或代理动作的入站 Webhook 自动化入口。在将其暴露到受信任网络之外之前，请先通过显式的 token / session / agent 控制进行严格限制。",
      "Enables the hooks endpoint and mapping execution pipeline for inbound webhook requests. Keep disabled unless you are actively routing external events into the gateway.":
        "启用用于入站 Webhook 请求的 hooks 端点和映射执行流水线。除非你正在主动将外部事件路由进网关，否则请保持禁用。",
      "Base directory for hook transform modules referenced by mapping transform.module paths. Use a controlled repo directory so dynamic imports remain reviewable and predictable.":
        "供映射 `transform.module` 路径引用的 hook transform 模块基础目录。请使用受控的仓库目录，以便动态导入保持可审查且可预测。",
      "Optional allowlist of skills for this agent (omit = all skills; empty = no skills).":
        "此代理的可选技能允许列表（省略 = 所有技能；空值 = 无技能）。",
      "Avatar image path (relative to the agent workspace only) or a remote URL/data URL.":
        "头像图片路径（仅相对于代理工作区）或远程 URL / data URL。",
      "Suppress tool error warning payloads during heartbeat runs.":
        "在心跳运行期间抑制工具错误警告载荷。",
      "Docker network for sandbox browser containers (default: openclaw-sandbox-browser). Avoid bridge if you need stricter isolation.":
        "用于沙箱浏览器容器的 Docker 网络（默认：`openclaw-sandbox-browser`）。如果需要更严格的隔离，请避免使用 bridge。",
      "Per-agent override for sandbox browser Docker network.":
        "针对沙箱浏览器 Docker 网络的按代理覆盖设置。",
      "DANGEROUS break-glass override that allows sandbox Docker network mode container:<id>. This joins another container namespace and weakens sandbox isolation.":
        "危险的紧急放行覆盖项，允许沙箱 Docker 网络模式使用 `container:<id>`。这会加入另一个容器命名空间，并削弱沙箱隔离。",
      "Per-agent DANGEROUS override for container namespace joins in sandbox Docker network mode.":
        "针对沙箱 Docker 网络模式中容器命名空间加入的按代理危险覆盖项。",
      "Optional CIDR allowlist for container-edge CDP ingress (for example 172.21.0.1/32).":
        "用于容器边界 CDP 入站的可选 CIDR 允许列表（例如 `172.21.0.1/32`）。",
      "Per-agent override for CDP source CIDR allowlist.":
        "针对 CDP 来源 CIDR 允许列表的按代理覆盖设置。",
      "Per-agent override for tool profile selection when one agent needs a different capability baseline. Use this sparingly so policy differences across agents stay intentional and reviewable.":
        "当某个代理需要不同能力基线时，用于工具配置档选择的按代理覆盖设置。请谨慎使用，以便代理之间的策略差异保持有意且可审查。",
      "Per-agent additive allowlist for tools on top of global and profile policy. Keep narrow to avoid accidental privilege expansion on specialized agents.":
        "在全局和配置档策略之上追加的按代理工具允许列表。请保持范围精简，以避免在专用代理上意外扩大权限。",
      "Per-agent provider-specific tool policy overrides for channel-scoped capability control. Use this when a single agent needs tighter restrictions on one provider than others.":
        "用于频道范围能力控制的按代理、按提供商工具策略覆盖。适用于某个代理需要对某个提供商施加比其他提供商更严格限制的情况。",
      "Default workspace path exposed to agent runtime tools for filesystem context and repo-aware behavior. Set this explicitly when running from wrappers so path resolution stays deterministic.":
        "向代理运行时工具暴露的默认工作区路径，用于文件系统上下文和仓库感知行为。当通过包装器运行时，请显式设置此项以保持路径解析确定性。",
      "Max characters of each workspace bootstrap file injected into the system prompt before truncation (default: 20000).":
        "每个工作区引导文件在被截断前注入系统提示词的最大字符数（默认：20000）。",
      "Max total characters across all injected workspace bootstrap files (default: 150000).":
        "所有注入的工作区引导文件的最大总字符数（默认：150000）。",
      "Inject agent-visible warning text when bootstrap files are truncated: \"off\", \"once\" (default), or \"always\".":
        "当引导文件被截断时注入对代理可见的警告文本：`off`、`once`（默认）或 `always`。",
      "Web-tool policy grouping for search/fetch providers, limits, and fallback behavior tuning. Keep enabled settings aligned with API key availability and outbound networking policy.":
        "用于搜索/抓取提供商、限制和回退行为调优的 Web 工具策略分组。请让启用设置与 API 密钥可用性和出站网络策略保持一致。",
      "Exec-tool policy grouping for shell execution host, security mode, approval behavior, and runtime bindings. Keep conservative defaults in production and tighten elevated execution paths.":
        "用于 shell 执行主机、安全模式、审批行为和运行时绑定的 Exec 工具策略分组。在生产环境中请保持保守默认值，并收紧提升权限执行路径。",
      "Selects execution host strategy for shell commands, typically controlling local vs delegated execution environment. Use the safest host mode that still satisfies your automation requirements.":
        "用于选择 shell 命令的执行主机策略，通常控制本地执行还是委派执行环境。请使用既能满足自动化需求又最安全的主机模式。",
      "Execution security posture selector controlling sandbox/approval expectations for command execution. Keep strict security mode for untrusted prompts and relax only for trusted operator workflows.":
        "用于控制命令执行中沙箱/审批预期的执行安全姿态选择器。对于不受信任提示请保持严格安全模式，仅对受信任的操作者工作流适当放宽。",
      "Node binding configuration for exec tooling when command execution is delegated through connected nodes. Use explicit node binding only when multi-node routing is required.":
        "当命令执行通过已连接节点委派时，用于 exec 工具的节点绑定配置。仅在需要多节点路由时才使用显式节点绑定。",
      "Sender allow rules for elevated tools, usually keyed by channel/provider identity formats. Use narrow, explicit identities so elevated commands cannot be triggered by unintended users.":
        "用于提升权限工具的发送者允许规则，通常按频道/提供商身份格式进行键控。请使用精确且显式的身份，以防非预期用户触发提升权限命令。",
      "Allow/deny tool policy applied to spawned subagent runtimes for per-subagent hardening. Keep this narrower than parent scope when subagents run semi-autonomous workflows.":
        "应用于派生子代理运行时的允许/拒绝工具策略，用于按子代理加固。若子代理运行半自主工作流，请让此策略比父级范围更窄。",
      "Allow/deny tool policy applied when agents run in sandboxed execution environments. Keep policies minimal so sandbox tasks cannot escalate into unnecessary external actions.":
        "当代理在沙箱执行环境中运行时应用的允许/拒绝工具策略。请保持策略最小化，以防沙箱任务升级为不必要的外部动作。",
      "Experimental. Enables apply_patch for OpenAI models when allowed by tool policy.":
        "实验性功能：当工具策略允许时，为 OpenAI 模型启用 `apply_patch`。",
      "Restrict apply_patch paths to the workspace directory (default: true). Set false to allow writing outside the workspace (dangerous).":
        "将 `apply_patch` 路径限制在工作区目录中（默认：true）。设为 false 允许写入工作区之外（危险）。",
      "Optional allowlist of model ids (e.g. \"gpt-5.2\" or \"openai/gpt-5.2\").":
        "可选的模型 ID 允许列表（例如 `gpt-5.2` 或 `openai/gpt-5.2`）。",
      "Enable repetitive tool-call loop detection and backoff safety checks (default: false).":
        "启用重复工具调用循环检测和退避安全检查（默认：false）。",
      "Prefix text prepended to inbound user messages before they are handed to the agent runtime. Use this sparingly for channel context markers and keep it stable across sessions.":
        "在将入站用户消息交给代理运行时之前预加的前缀文本。请仅在频道上下文标记场景中谨慎使用，并在不同会话间保持稳定。",
      "Prefix text prepended to outbound assistant replies before sending to channels. Use for lightweight branding/context tags and avoid long prefixes that reduce content density.":
        "在向频道发送出站助手回复之前预加的前缀文本。可用于轻量品牌/上下文标签，并避免使用过长前缀以免降低内容密度。",
      "Group-message handling controls including mention triggers and history window sizing. Keep mention patterns narrow so group channels do not trigger on every message.":
        "分组消息处理控制项，包括提及触发器和历史窗口大小。请保持提及模式足够窄，以免群组频道在每条消息上都触发。",
      "Regex-like patterns used to detect explicit mentions/trigger phrases in group chats. Use precise patterns to reduce false positives in high-volume channels.":
        "用于检测群聊中显式提及/触发短语的类正则模式。请使用精确模式，以减少高流量频道中的误触发。",
      "Maximum number of prior group messages loaded as context per turn for group sessions. Use higher values for richer continuity, or lower values for faster and cheaper responses.":
        "群组会话中每轮作为上下文加载的历史群消息最大数量。较高值可获得更丰富的连续性，较低值则能带来更快、更便宜的响应。",
      "Inbound message queue strategy used to buffer bursts before processing turns. Tune this for busy channels where sequential processing or batching behavior matters.":
        "用于在处理轮次前缓冲消息突发的入站消息队列策略。对于顺序处理或批处理行为很重要的繁忙频道，可调优此项。",
      "Queue behavior mode: \"steer\", \"followup\", \"collect\", \"steer-backlog\", \"steer+backlog\", \"queue\", or \"interrupt\". Keep conservative modes unless you intentionally need aggressive interruption/backlog semantics.":
        "队列行为模式：`steer`、`followup`、`collect`、`steer-backlog`、`steer+backlog`、`queue` 或 `interrupt`。除非你明确需要更激进的打断/积压语义，否则请保持保守模式。",
      "Per-channel inbound debounce overrides keyed by provider id in milliseconds. Use this where some providers send message fragments more aggressively than others.":
        "按提供商 ID 键控、以毫秒计的按频道入站防抖覆盖项。适用于某些提供商比其他提供商更倾向于发送碎片化消息的情况。",
      "Removes the acknowledgment reaction after final reply delivery when enabled. Keep enabled for cleaner UX in channels where persistent ack reactions create clutter.":
        "启用后，在最终回复投递完成后移除确认表情反应。对于持续显示 ack 反应会造成混乱的频道，建议保持启用以获得更干净的体验。",
      "When true, suppress ⚠️ tool-error warnings from being shown to the user. The agent already sees errors in context and can retry. Default: false.":
        "为 true 时，抑制向用户显示 ⚠️ 工具错误警告。代理在上下文中已经能看到错误并可自行重试。默认：false。",
      "Emoji reaction used to acknowledge inbound messages (empty disables).":
        "用于确认入站消息的表情反应（留空则禁用）。",
      "When to send ack reactions (\"group-mentions\", \"group-all\", \"direct\", \"all\", \"off\", \"none\"). \"off\"/\"none\" disables ack reactions entirely.":
        "何时发送 ack 反应（`group-mentions`、`group-all`、`direct`、`all`、`off`、`none`）。`off` / `none` 会完全禁用 ack 反应。",
      "HTTP path used by the hooks endpoint (for example `/hooks`) on the gateway control server. Use a non-guessable path and combine it with token validation for defense in depth.":
        "网关控制服务器上 hooks 端点使用的 HTTP 路径（例如 `/hooks`）。请使用不可猜测的路径，并结合 token 校验形成纵深防御。",
      "Shared bearer token checked by hooks ingress for request authentication before mappings run. Use environment substitution and rotate regularly when webhook endpoints are internet-accessible.":
        "在映射运行之前，由 hooks 入站用于请求认证校验的共享 Bearer 令牌。当 Webhook 端点可被互联网访问时，请使用环境变量替换并定期轮换。",
      "Fallback session key used for hook deliveries when a request does not provide one through allowed channels. Use a stable but scoped key to avoid mixing unrelated automation conversations.":
        "当请求未通过允许通道提供会话键时，hooks 投递使用的回退会话键。请使用稳定但有范围限制的键，以避免混合无关的自动化会话。",
      "Allows callers to supply a session key in hook requests when true, enabling caller-controlled routing. Keep false unless trusted integrators explicitly need custom session threading.":
        "为 true 时，允许调用方在 hook 请求中提供会话键，从而启用调用方控制的路由。除非受信任的集成方明确需要自定义会话串联，否则请保持 false。",
      "Maximum accepted webhook payload size in bytes before the request is rejected. Keep this bounded to reduce abuse risk and protect memory usage under bursty integrations.":
        "请求被拒绝前允许接受的最大 Webhook 载荷大小（字节）。请保持有界，以降低滥用风险并保护突发集成场景下的内存使用。",
      "Named hook preset bundles applied at load time to seed standard mappings and behavior defaults. Keep preset usage explicit so operators can audit which automations are active.":
        "在加载时应用、用于注入标准映射和行为默认值的命名 hook 预设包。请显式使用预设，以便操作者审计哪些自动化当前处于激活状态。",
      "Ordered mapping rules that match inbound hook requests and choose wake or agent actions with optional delivery routing. Use specific mappings first to avoid broad pattern rules capturing everything.":
        "用于匹配入站 hook 请求并选择唤醒或代理动作（可选带投递路由）的有序映射规则。请先放置更具体的映射，以避免宽泛规则匹配到所有内容。",
      "Optional stable identifier for a hook mapping entry used for auditing, troubleshooting, and targeted updates. Use unique IDs so logs and config diffs can reference mappings unambiguously.":
        "用于审计、排障和定向更新的可选稳定 hook 映射条目标识符。请使用唯一 ID，以便日志和配置差异可以无歧义地引用映射。",
      "Grouping object for mapping match predicates such as path and source before action routing is applied. Keep match criteria specific so unrelated webhook traffic does not trigger automations.":
        "在应用动作路由之前，用于组织路径和来源等映射匹配谓词的分组对象。请保持匹配条件足够具体，以免无关 Webhook 流量触发自动化。",
      "Path match condition for a hook mapping, usually compared against the inbound request path. Use this to split automation behavior by webhook endpoint path families.":
        "hook 映射的路径匹配条件，通常与入站请求路径进行比较。可用它按 Webhook 端点路径族拆分自动化行为。",
      "Source match condition for a hook mapping, typically set by trusted upstream metadata or adapter logic. Use stable source identifiers so routing remains deterministic across retries.":
        "hook 映射的来源匹配条件，通常由受信任的上游元数据或适配器逻辑设置。请使用稳定的来源标识符，以便在重试之间保持路由确定性。",
      "Mapping action type: \"wake\" triggers agent wake flow, while \"agent\" sends directly to agent handling. Use \"agent\" for immediate execution and \"wake\" when heartbeat-driven processing is preferred.":
        "映射动作类型：`wake` 触发代理唤醒流程，而 `agent` 直接发送给代理处理。需要立即执行时用 `agent`，更偏好心跳驱动处理时用 `wake`。",
      "Wake scheduling mode: \"now\" wakes immediately, while \"next-heartbeat\" defers until the next heartbeat cycle. Use deferred mode for lower-priority automations that can tolerate slight delay.":
        "唤醒调度模式：`now` 立即唤醒，`next-heartbeat` 则延迟到下一个心跳周期。对于可以容忍轻微延迟的低优先级自动化，可使用延迟模式。",
      "Human-readable mapping display name used in diagnostics and operator-facing config UIs. Keep names concise and descriptive so routing intent is obvious during incident review.":
        "用于诊断和面向操作者配置界面的可读映射显示名称。请保持名称简洁且具有描述性，以便在事故复盘时清楚表达路由意图。",
      "Explicit session key override for mapping-delivered messages to control thread continuity. Use stable scoped keys so repeated events correlate without leaking into unrelated conversations.":
        "用于控制线程连续性的映射投递消息显式会话键覆盖。请使用稳定且有范围限制的键，以便重复事件能够关联，同时不泄露到无关会话中。",
      "Template for synthesizing structured mapping input into the final message content sent to the target action path. Keep templates deterministic so downstream parsing and behavior remain stable.":
        "用于将结构化映射输入综合成发送到目标动作路径最终消息内容的模板。请保持模板确定性，以便下游解析和行为保持稳定。",
      "Text-only fallback template used when rich payload rendering is not desired or not supported. Use this to provide a concise, consistent summary string for chat delivery surfaces.":
        "当不希望或不支持富载荷渲染时使用的纯文本回退模板。可用它为聊天投递表面提供简洁且一致的摘要字符串。",
      "Controls whether mapping execution results are delivered back to a channel destination versus being processed silently. Disable delivery for background automations that should not post user-facing output.":
        "控制映射执行结果是回传到频道目标还是静默处理。对于不应向用户侧发出输出的后台自动化，请禁用投递。",
      "Thinking effort override for Gmail-driven agent runs: \"off\", \"minimal\", \"low\", \"medium\", or \"high\". Keep modest defaults for routine inbox automations to control cost and latency.":
        "用于 Gmail 驱动代理运行的思考强度覆盖项：`off`、`minimal`、`low`、`medium` 或 `high`。对于日常收件箱自动化，请保持适度默认值，以控制成本和延迟。",
      "Internal hook runtime settings for bundled/custom event handlers loaded from module paths. Use this for trusted in-process automations and keep handler loading tightly scoped.":
        "用于从模块路径加载内置/自定义事件处理器的内部 hook 运行时设置。适用于受信任的进程内自动化，并请让处理器加载范围保持严格受限。",
      "Enables processing for internal hook handlers and configured entries in the internal hook runtime. Keep disabled unless internal hook handlers are intentionally configured.":
        "启用内部 hook 运行时中内部 hook 处理器和已配置条目的处理。除非你有意配置了内部 hook 处理器，否则请保持禁用。",
      "List of internal event handlers mapping event names to modules and optional exports. Keep handler definitions explicit so event-to-code routing is auditable.":
        "将事件名称映射到模块和可选导出的内部事件处理器列表。请保持处理器定义显式，以便事件到代码的路由可审计。",
      "Internal event name that triggers this handler module when emitted by the runtime. Use stable event naming conventions to avoid accidental overlap across handlers.":
        "当运行时发出该事件时，用于触发此处理器模块的内部事件名称。请使用稳定的事件命名规范，以避免处理器之间发生意外交叠。",
      "Safe relative module path for the internal hook handler implementation loaded at runtime. Keep module files in reviewed directories and avoid dynamic path composition.":
        "在运行时加载的内部 hook 处理器实现所使用的安全相对模块路径。请将模块文件放在已审查目录中，并避免动态路径拼接。",
      "Optional named export for the internal hook handler function when module default export is not used. Set this when one module ships multiple handler entrypoints.":
        "当不使用模块默认导出时，内部 hook 处理器函数的可选具名导出。适用于一个模块提供多个处理器入口点的情况。",
      "Configured internal hook entry records used to register concrete runtime handlers and metadata. Keep entries explicit and versioned so production behavior is auditable.":
        "用于注册具体运行时处理器和元数据的已配置内部 hook 条目记录。请让条目保持显式且带版本，以便生产行为可审计。",
      "Internal hook loader settings controlling where handler modules are discovered at startup. Use constrained load roots to reduce accidental module conflicts or shadowing.":
        "用于控制启动时从哪里发现处理器模块的内部 hook 加载器设置。请使用受限的加载根目录，以减少意外模块冲突或遮蔽。",
      "Additional directories searched for internal hook modules beyond default load paths. Keep this minimal and controlled to reduce accidental module shadowing.":
        "除默认加载路径外，用于搜索内部 hook 模块的附加目录。请保持最小且受控，以减少意外的模块遮蔽。",
      "Install metadata for internal hook modules, including source and resolved artifacts for repeatable deployments. Use this as operational provenance and avoid manual drift edits.":
        "用于内部 hook 模块的安装元数据，包括可重复部署所需的来源和已解析构件。请将其作为运维溯源信息，并避免手动漂移修改。",
      "Allow bot-authored messages to trigger Discord replies (default: false). Set \"mentions\" to only accept bot messages that mention the bot.":
        "允许由机器人创建的消息触发 Discord 回复（默认：false）。设为 `mentions` 时，只接受提及该机器人的机器人消息。",
      "Proxy URL for Discord gateway + API requests (app-id lookup and allowlist resolution). Set per account via channels.discord.accounts.<id>.proxy.":
        "用于 Discord gateway + API 请求（app-id 查找和允许列表解析）的代理 URL。可通过 `channels.discord.accounts.<id>.proxy` 按账户设置。",
      "Allow WhatsApp to write config in response to channel events/commands (default: true).":
        "允许 WhatsApp 响应频道事件/命令写入配置（默认：true）。",
      "Allow Signal to write config in response to channel events/commands (default: true).":
        "允许 Signal 响应频道事件/命令写入配置（默认：true）。",
      "Signal account identifier (phone/number handle) used to bind this channel config to a specific Signal identity. Keep this aligned with your linked device/session state.":
        "用于将此频道配置绑定到特定 Signal 身份的 Signal 账户标识符（手机号/号码句柄）。请让它与你的已连接设备/会话状态保持一致。",
      "Allow iMessage to write config in response to channel events/commands (default: true).":
        "允许 iMessage 响应频道事件/命令写入配置（默认：true）。",
      "Filesystem path to the iMessage bridge CLI binary used for send/receive operations. Set explicitly when the binary is not on PATH in service runtime environments.":
        "用于发送/接收操作的 iMessage bridge CLI 二进制文件路径。当服务运行环境中该二进制不在 PATH 中时，请显式设置。",
      "Allow Microsoft Teams to write config in response to channel events/commands (default: true).":
        "允许 Microsoft Teams 响应频道事件/命令写入配置（默认：true）。",
      "Map provider -> channel id -> model override (values are provider/model or aliases).":
        "提供商 -> channel id -> 模型覆盖映射（值为 provider/model 或别名）。",
      "Override native commands for Discord (bool or \"auto\").":
        "覆盖 Discord 的原生命令（布尔值或 `auto`）。",
      "Override native skill commands for Discord (bool or \"auto\").":
        "覆盖 Discord 的原生技能命令（布尔值或 `auto`）。",
      "Override native commands for Telegram (bool or \"auto\").":
        "覆盖 Telegram 的原生命令（布尔值或 `auto`）。",
      "Override native skill commands for Telegram (bool or \"auto\").":
        "覆盖 Telegram 的原生技能命令（布尔值或 `auto`）。",
      "Override native commands for Slack (bool or \"auto\").":
        "覆盖 Slack 的原生命令（布尔值或 `auto`）。",
      "Enables provider batch APIs for embedding jobs when supported (OpenAI/Gemini), improving throughput on larger index runs. Keep this enabled unless debugging provider batch failures or running very small workloads.":
        "在支持时（OpenAI/Gemini）为嵌入任务启用提供商批处理 API，以提升大规模索引运行的吞吐量。除非你在调试提供商批处理失败或运行极小工作负载，否则请保持启用。",
      "Waits for batch embedding jobs to fully finish before the indexing operation completes. Keep this enabled for deterministic indexing state; disable only if you accept delayed consistency.":
        "在索引操作完成前等待批量嵌入任务完全结束。若需要确定性的索引状态，请保持启用；仅在你接受延迟一致性时才禁用。",
      "Limits how many embedding batch jobs run at the same time during indexing (default: 2). Increase carefully for faster bulk indexing, but watch provider rate limits and queue errors.":
        "限制索引期间同时运行的嵌入批处理任务数量（默认：2）。可谨慎提高以加快批量索引，但需关注提供商速率限制和队列错误。",
      "Controls how often the system polls provider APIs for batch job status in milliseconds (default: 2000). Use longer intervals to reduce API chatter, or shorter intervals for faster completion detection.":
        "控制系统轮询提供商 API 以查询批处理任务状态的频率（毫秒，默认：2000）。较长间隔可减少 API 噪音，较短间隔则能更快发现完成状态。",
      "Sets the maximum wait time for a full embedding batch operation in minutes (default: 60). Increase for very large corpora or slower providers, and lower it to fail fast in automation-heavy flows.":
        "设置完整嵌入批处理操作的最大等待时间（分钟，默认：60）。对于非常大的语料或较慢的提供商可增大；在自动化密集流程中可降低以快速失败。",
      "Specifies the local embedding model source for local memory search, such as a GGUF file path or `hf:` URI. Use this only when provider is `local`, and verify model compatibility before large index rebuilds.":
        "指定本地记忆搜索使用的本地嵌入模型来源，例如 GGUF 文件路径或 `hf:` URI。仅在提供商为 `local` 时使用，并在大规模重建索引前确认模型兼容性。",
      "Backup provider used when primary embeddings fail: \"openai\", \"gemini\", \"voyage\", \"mistral\", \"ollama\", \"local\", or \"none\". Set a real fallback for production reliability; use \"none\" only if you prefer explicit failures.":
        "当主嵌入失败时使用的备用提供商：`openai`、`gemini`、`voyage`、`mistral`、`ollama`、`local` 或 `none`。为了生产可靠性，请设置真实回退；仅在你偏好显式失败时使用 `none`。",
      "Sets where the SQLite memory index is stored on disk for each agent. Keep the default `~/.openclaw/memory/{agentId}.sqlite` unless you need custom storage placement or backup policy alignment.":
        "设置每个代理的 SQLite 记忆索引在磁盘上的存储位置。除非你需要自定义存储放置或与备份策略对齐，否则请保持默认值 `~/.openclaw/memory/{agentId}.sqlite`。",
      "Enables the sqlite-vec extension used for vector similarity queries in memory search (default: true). Keep this enabled for normal semantic recall; disable only for debugging or fallback-only operation.":
        "启用记忆搜索中用于向量相似度查询的 sqlite-vec 扩展（默认：true）。正常语义回忆请保持启用；仅在调试或仅回退运行时才禁用。",
      "Overrides the auto-discovered sqlite-vec extension library path (`.dylib`, `.so`, or `.dll`). Use this when your runtime cannot find sqlite-vec automatically or you pin a known-good build.":
        "覆盖自动发现的 sqlite-vec 扩展库路径（`.dylib`、`.so` 或 `.dll`）。适用于运行时无法自动找到 sqlite-vec，或你需要固定已知可用构建的情况。",
      "Chunk size in tokens used when splitting memory sources before embedding/indexing. Increase for broader context per chunk, or lower to improve precision on pinpoint lookups.":
        "在嵌入/索引前拆分记忆来源时使用的分块大小（以 token 计）。增大可为每个块提供更宽上下文，减小则有助于提升精确查找的准确度。",
      "Token overlap between adjacent memory chunks to preserve context continuity near split boundaries. Use modest overlap to reduce boundary misses without inflating index size too aggressively.":
        "相邻记忆块之间的 token 重叠量，用于在切分边界附近保留上下文连续性。请使用适度重叠，以减少边界遗漏，同时避免索引体积增长过快。",
      "Maximum number of memory hits returned from search before downstream reranking and prompt injection. Raise for broader recall, or lower for tighter prompts and faster responses.":
        "在下游重排和提示词注入之前，从搜索中返回的记忆命中最大数量。提高可获得更广泛回忆，降低则能带来更紧凑的提示词和更快的响应。",
      "Minimum relevance score threshold for including memory results in final recall output. Increase to reduce weak/noisy matches, or lower when you need more permissive retrieval.":
        "将记忆结果纳入最终回忆输出的最小相关性分数阈值。提高可减少弱匹配/噪音，降低则适用于需要更宽松检索的场景。",
      "Per-channel queue mode overrides keyed by provider id (for example telegram, discord, slack). Use this when one channel’s traffic pattern needs different queue behavior than global defaults.":
        "按提供商 ID 键控的按频道队列模式覆盖项（例如 `telegram`、`discord`、`slack`）。当某个频道的流量模式需要与全局默认值不同的队列行为时使用。",
      "Global queue debounce window in milliseconds before processing buffered inbound messages. Use higher values to coalesce rapid bursts, or lower values for reduced response latency.":
        "在处理已缓冲入站消息前的全局队列防抖窗口（毫秒）。较高值可合并快速突发，较低值则可降低响应延迟。",
      "Per-channel debounce overrides for queue behavior keyed by provider id. Use this to tune burst handling independently for chat surfaces with different pacing.":
        "按提供商 ID 键控的按频道队列行为防抖覆盖项。可用于为不同节奏的聊天表面独立调优突发处理。",
      "Maximum number of queued inbound items retained before drop policy applies. Keep caps bounded in noisy channels so memory usage remains predictable.":
        "在应用丢弃策略前保留的入站队列项最大数量。请在高噪音频道中保持上限有界，以便内存使用保持可预测。",
      "Gmail push integration settings used for Pub/Sub notifications and optional local callback serving. Keep this scoped to dedicated Gmail automation accounts where possible.":
        "用于 Pub/Sub 通知和可选本地回调服务的 Gmail 推送集成设置。请尽量将其限定在专用的 Gmail 自动化账户中。",
      "Google account identifier used for Gmail watch/subscription operations in this hook integration. Use a dedicated automation mailbox account to isolate operational permissions.":
        "用于此 hook 集成中 Gmail watch/subscription 操作的 Google 账户标识符。请使用专用自动化邮箱账户以隔离运维权限。",
      "Optional Gmail label filter limiting which labeled messages trigger hook events. Keep filters narrow to avoid flooding automations with unrelated inbox traffic.":
        "用于限制哪些带标签消息会触发 hook 事件的可选 Gmail 标签筛选器。请保持筛选器范围足够窄，以避免无关收件箱流量淹没自动化。",
      "Google Pub/Sub topic name used by Gmail watch to publish change notifications for this account. Ensure the topic IAM grants Gmail publish access before enabling watches.":
        "Gmail watch 用于为此账户发布变更通知的 Google Pub/Sub 主题名称。在启用 watch 之前，请确保主题的 IAM 已授予 Gmail 发布权限。",
      "Pub/Sub subscription consumed by the gateway to receive Gmail change notifications from the configured topic. Keep subscription ownership clear so multiple consumers do not race unexpectedly.":
        "由网关消费、用于从已配置主题接收 Gmail 变更通知的 Pub/Sub 订阅。请保持订阅所有权清晰，以免多个消费者发生意外竞争。",
      "Public callback URL Gmail or intermediaries invoke to deliver notifications into this hook pipeline. Keep this URL protected with token validation and restricted network exposure.":
        "Gmail 或中间层调用、用于将通知投递到此 hook 流水线的公共回调 URL。请通过 token 校验和受限网络暴露保护该 URL。",
      "When true, fetch and include email body content for downstream mapping/agent processing. Keep false unless body text is required, because this increases payload size and sensitivity.":
        "为 true 时，会抓取并包含邮件正文内容以供下游映射/代理处理。除非确实需要正文文本，否则请保持 false，因为这会增加载荷大小和敏感性。",
      "Allows less-sanitized external Gmail content to pass into processing when enabled. Keep disabled for safer defaults, and enable only for trusted mail streams with controlled transforms.":
        "启用后允许较少清洗的外部 Gmail 内容进入处理流程。为获得更安全的默认行为请保持禁用，仅对受信任邮件流且 transform 已受控时启用。",
      "Local callback server settings block for directly receiving Gmail notifications without a separate ingress layer. Enable only when this process should terminate webhook traffic itself.":
        "用于在没有单独入口层的情况下直接接收 Gmail 通知的本地回调服务器设置块。仅当该进程应自行终止 Webhook 流量时才启用。",
      "Shared secret token required on Gmail push hook callbacks before processing notifications. Use env substitution and rotate if callback endpoints are exposed externally.":
        "在处理通知前，Gmail push hook 回调所需的共享密钥令牌。请使用环境变量替换，并在回调端点对外暴露时进行轮换。",
      "Maximum Gmail payload bytes processed per event when includeBody is enabled. Keep conservative limits to reduce oversized message processing cost and risk.":
        "在 `includeBody` 启用时，每个事件允许处理的 Gmail 载荷最大字节数。请保持保守限制，以降低超大消息处理的成本和风险。",
      "Renewal cadence in minutes for Gmail watch subscriptions to prevent expiration. Set below provider expiration windows and monitor renew failures in logs.":
        "用于防止 Gmail watch 订阅过期的续订周期（分钟）。请设置在提供商过期窗口之下，并在日志中监控续订失败。",
      "Bind address for the local Gmail callback HTTP server used when serving hooks directly. Keep loopback-only unless external ingress is intentionally required.":
        "直接提供 hooks 服务时，本地 Gmail 回调 HTTP 服务器使用的绑定地址。除非明确需要外部入口，否则请保持仅 loopback。",
      "Port for the local Gmail callback HTTP server when serve mode is enabled. Use a dedicated port to avoid collisions with gateway/control interfaces.":
        "启用 serve 模式时，本地 Gmail 回调 HTTP 服务器使用的端口。请使用独立端口，以避免与网关/控制界面冲突。",
      "HTTP path on the local Gmail callback server where push notifications are accepted. Keep this consistent with subscription configuration to avoid dropped events.":
        "本地 Gmail 回调服务器上接受推送通知的 HTTP 路径。请保持其与订阅配置一致，以避免事件丢失。",
      "Tailscale exposure mode for Gmail callbacks: \"off\", \"serve\", or \"funnel\". Use \"serve\" for private tailnet delivery and \"funnel\" only when public internet ingress is required.":
        "Gmail 回调的 Tailscale 暴露模式：`off`、`serve` 或 `funnel`。私有 tailnet 投递请使用 `serve`，仅在需要公网入口时使用 `funnel`。",
      "Tailscale exposure configuration block for publishing Gmail callbacks through Serve/Funnel routes. Use private tailnet modes before enabling any public ingress path.":
        "用于通过 Serve/Funnel 路由发布 Gmail 回调的 Tailscale 暴露配置块。在启用任何公网入口路径前，请优先使用私有 tailnet 模式。",
      "Path published by Tailscale Serve/Funnel for Gmail callback forwarding when enabled. Keep it aligned with Gmail webhook config so requests reach the expected handler.":
        "启用时由 Tailscale Serve/Funnel 发布、用于 Gmail 回调转发的路径。请保持其与 Gmail Webhook 配置一致，以便请求到达预期处理器。",
      "Local service target forwarded by Tailscale Serve/Funnel (for example http://127.0.0.1:8787). Use explicit loopback targets to avoid ambiguous routing.":
        "由 Tailscale Serve/Funnel 转发的本地服务目标（例如 `http://127.0.0.1:8787`）。请使用显式的 loopback 目标，以避免路由歧义。",
      "Optional model override for Gmail-triggered runs when mailbox automations should use dedicated model behavior. Keep unset to inherit agent defaults unless mailbox tasks need specialization.":
        "当邮箱自动化需要专用模型行为时，用于 Gmail 触发运行的可选模型覆盖项。除非邮箱任务需要专门化，否则请保持未设置以继承代理默认值。",
      "Allow bot-authored messages to trigger Slack replies (default: false).":
        "允许由机器人创建的消息触发 Slack 回复（默认：false）。",
      "Scope for Slack thread history context (\"thread\" isolates per thread; \"channel\" reuses channel history).":
        "Slack 线程历史上下文的范围（`thread` 按线程隔离；`channel` 复用频道历史）。",
      "If true, Slack thread sessions inherit the parent channel transcript (default: false).":
        "为 true 时，Slack 线程会话继承父频道转录记录（默认：false）。",
      "Maximum number of existing Slack thread messages to fetch when starting a new thread session (default: 20, set to 0 to disable).":
        "启动新 Slack 线程会话时抓取的现有线程消息最大数量（默认：20，设为 0 则禁用）。",
      "Bot token from Mattermost System Console -> Integrations -> Bot Accounts.":
        "Mattermost System Console -> Integrations -> Bot Accounts 中的机器人令牌。",
      "Base URL for your Mattermost server (e.g., https://chat.example.com).":
        "你的 Mattermost 服务器基础 URL（例如 `https://chat.example.com`）。",
      "Reply to channel messages on mention (\"oncall\"), on trigger chars (\">\" or \"!\") (\"onchar\"), or on every message (\"onmessage\").":
        "在被提及时（`oncall`）、在触发字符（`>` 或 `!`）出现时（`onchar`），或对每条消息（`onmessage`）回复频道消息。",
      "Trigger prefixes for onchar mode (default: [\">\", \"!\"]).":
        "onchar 模式的触发前缀（默认：[`\">\"`, `\"!\"`]）。",
      "Require @mention in channels before responding (default: true).":
        "在频道中响应前要求出现 @mention（默认：true）。",
      "Default group policy across channels: \"open\", \"disabled\", or \"allowlist\". Keep \"allowlist\" for safer production setups unless broad group participation is intentional.":
        "跨频道的默认群组策略：`open`、`disabled` 或 `allowlist`。除非你有意允许广泛群组参与，否则在生产环境中请保持 `allowlist`。",
      "Default heartbeat visibility settings for status messages emitted by providers/channels. Tune this globally to reduce noisy healthy-state updates while keeping alerts visible.":
        "提供商/频道发出的状态消息所使用的默认心跳可见性设置。请在全局层面调优它，以减少健康状态更新噪音，同时保持告警可见。",
      "Shows healthy/OK heartbeat status entries when true in channel status outputs. Keep false in noisy environments and enable only when operators need explicit healthy confirmations.":
        "为 true 时，在频道状态输出中显示健康/OK 的心跳状态条目。在高噪音环境中请保持 false，仅在操作者需要明确健康确认时启用。",
      "Shows degraded/error heartbeat alerts when true so operator channels surface problems promptly. Keep enabled in production so broken channel states are visible.":
        "为 true 时显示降级/错误心跳告警，以便操作者频道及时暴露问题。在生产环境中请保持启用，以便看见损坏的频道状态。",
      "Enables concise indicator-style heartbeat rendering instead of verbose status text where supported. Use indicator mode for dense dashboards with many active channels.":
        "在支持的地方启用简洁的指示器式心跳渲染，而不是冗长状态文本。对于拥有大量活跃频道的密集仪表板，请使用指示器模式。",
      "Allow Telegram to write config in response to channel events/commands (default: true).":
        "允许 Telegram 响应频道事件/命令写入配置（默认：true）。",
      "Telegram bot token used to authenticate Bot API requests for this account/provider config. Use secret/env substitution and rotate tokens if exposure is suspected.":
        "用于为此账户/提供商配置认证 Bot API 请求的 Telegram 机器人令牌。请使用 secret/env 替换，并在怀疑泄露时轮换令牌。",
      "Enable Telegram inline button components for supported command and interaction surfaces. Disable if your deployment needs plain-text-only compatibility behavior.":
        "为支持的命令和交互表面启用 Telegram 行内按钮组件。如果你的部署需要纯文本兼容行为，请禁用。",
      "Allow Slack to write config in response to channel events/commands (default: true).":
        "允许 Slack 响应频道事件/命令写入配置（默认：true）。",
      "Slack bot token used for standard chat actions in the configured workspace. Keep this credential scoped and rotate if workspace app permissions change.":
        "用于已配置工作区标准聊天动作的 Slack 机器人令牌。请保持此凭据作用域最小，并在工作区应用权限变化时轮换。",
      "Optional Slack user token for workflows requiring user-context API access beyond bot permissions. Use sparingly and audit scopes because this token can carry broader authority.":
        "用于需要超出机器人权限、访问用户上下文 API 的工作流的可选 Slack 用户令牌。请谨慎使用并审计作用域，因为该令牌可能具有更广权限。",
      "When true, treat configured Slack user token usage as read-only helper behavior where possible. Keep enabled if you only need supplemental reads without user-context writes.":
        "为 true 时，在可能的情况下将已配置的 Slack 用户令牌使用视为只读辅助行为。如果你只需要补充读取而不需要用户上下文写入，请保持启用。",
      "Allow Mattermost to write config in response to channel events/commands (default: true).":
        "允许 Mattermost 响应频道事件/命令写入配置（默认：true）。",
      "Allow Discord to write config in response to channel events/commands (default: true).":
        "允许 Discord 响应频道事件/命令写入配置（默认：true）。",
      "Discord bot token used for gateway and REST API authentication for this provider account. Keep this secret out of committed config and rotate immediately after any leak.":
        "用于该提供商账户的网关和 REST API 认证的 Discord 机器人令牌。请不要把它写进已提交配置，并在任何泄露后立即轮换。",
      "Accent color for Discord component containers (hex). Set per account via channels.discord.accounts.<id>.ui.components.accentColor.":
        "Discord 组件容器的强调色（hex）。可通过 `channels.discord.accounts.<id>.ui.components.accentColor` 按账户设置。",
      "Voice channels to auto-join on startup (list of guildId/channelId entries).":
        "启动时自动加入的语音频道（`guildId/channelId` 条目列表）。",
      "Toggle DAVE end-to-end encryption for Discord voice joins (default: true in @discordjs/voice; Discord may require this).":
        "切换 Discord 语音加入时的 DAVE 端到端加密（`@discordjs/voice` 中默认：true；Discord 可能要求启用它）。",
      "Consecutive decrypt failures before DAVE attempts session recovery (passed to @discordjs/voice; default: 24).":
        "在 DAVE 尝试会话恢复前允许的连续解密失败次数（传递给 `@discordjs/voice`；默认：24）。",
      "Optional TTS overrides for Discord voice playback (merged with messages.tts).":
        "用于 Discord 语音播放的可选 TTS 覆盖项（会与 `messages.tts` 合并）。",
      "Enable the Guild Presences privileged intent. Must also be enabled in the Discord Developer Portal. Allows tracking user activities (e.g. Spotify). Default: false.":
        "启用 `Guild Presences` 特权 intent。还必须在 Discord Developer Portal 中启用。启用后可跟踪用户活动（例如 Spotify）。默认：false。",
      "Enable the Guild Members privileged intent. Must also be enabled in the Discord Developer Portal. Default: false.":
        "启用 `Guild Members` 特权 intent。还必须在 Discord Developer Portal 中启用。默认：false。",
      "Resolve PluralKit proxied messages and treat system members as distinct senders.":
        "解析由 PluralKit 代理的消息，并将 system 成员视为不同发送者。",
      "Optional PluralKit token for resolving private systems or members.":
        "用于解析私有 system 或成员的可选 PluralKit 令牌。",
      "Discord presence activity text (defaults to custom status).":
        "Discord 在线状态活动文本（默认使用自定义状态）。",
      "Discord presence status (online, dnd, idle, invisible).":
        "Discord 在线状态（`online`、`dnd`、`idle`、`invisible`）。",
      "How often to evaluate Discord auto-presence state in milliseconds (default: 30000).":
        "评估 Discord 自动在线状态的频率（毫秒，默认：30000）。",
      "Minimum time between actual Discord presence update calls in milliseconds (default: 15000). Prevents status spam on noisy state changes.":
        "两次实际 Discord 在线状态更新调用之间的最短时间（毫秒，默认：15000）。可防止在嘈杂状态变化下刷屏。",
      "Optional custom status text while runtime is healthy (online). If omitted, falls back to static channels.discord.activity when set.":
        "运行时处于健康状态（online）时的可选自定义状态文本。若省略，则在已设置时回退到静态的 `channels.discord.activity`。",
      "Optional custom status text while runtime/model availability is degraded or unknown (idle).":
        "当运行时/模型可用性处于降级或未知状态（idle）时的可选自定义状态文本。",
      "Optional custom status text while runtime detects exhausted/unavailable model quota (dnd). Supports {reason} template placeholder.":
        "当运行时检测到模型配额耗尽/不可用（dnd）时的可选自定义状态文本。支持 `{reason}` 模板占位符。",
      "Discord presence activity type (0=Playing,1=Streaming,2=Listening,3=Watching,4=Custom,5=Competing).":
        "Discord 在线状态活动类型（0=Playing，1=Streaming，2=Listening，3=Watching，4=Custom，5=Competing）。",
      "Discord presence streaming URL (required for activityType=1).":
        "Discord 在线状态流媒体 URL（当 `activityType=1` 时必填）。",
      "Direct message access control (\"pairing\" recommended). \"open\" requires channels.slack.allowFrom=[\"*\"].":
        "私信访问控制（推荐使用 `pairing`）。`open` 需要 `channels.slack.allowFrom=[\"*\"]`。",
      "Text prefix for cross-context markers (supports \"{channel}\").":
        "跨上下文标记的文本前缀（支持 `{channel}`）。",
      "Text suffix for cross-context markers (supports \"{channel}\").":
        "跨上下文标记的文本后缀（支持 `{channel}`）。",
      "Enable broadcast action (default: true).":
        "启用广播动作（默认：true）。",
      "Enable the web_search tool (requires a provider API key).":
        "启用 `web_search` 工具（需要提供商 API Key）。",
      "Search provider (\"brave\", \"gemini\", \"grok\", \"kimi\", or \"perplexity\"). Auto-detected from available API keys if omitted.":
        "搜索提供商（`brave`、`gemini`、`grok`、`kimi` 或 `perplexity`）。若省略，会从可用 API Key 中自动检测。",
      "Brave Search API key (fallback: BRAVE_API_KEY env var).":
        "Brave Search API Key（回退：`BRAVE_API_KEY` 环境变量）。",
      "Number of results to return (1-10).":
        "返回结果数量（1-10）。",
      "Brave Search mode: \"web\" (URL results) or \"llm-context\" (pre-extracted page content for LLM grounding).":
        "Brave Search 模式：`web`（URL 结果）或 `llm-context`（为 LLM grounding 预提取的页面内容）。",
      "Gemini API key for Google Search grounding (fallback: GEMINI_API_KEY env var).":
        "用于 Google Search grounding 的 Gemini API Key（回退：`GEMINI_API_KEY` 环境变量）。",
      "Gemini model override (default: \"gemini-2.5-flash\").":
        "Gemini 模型覆盖项（默认：`gemini-2.5-flash`）。",
      "Grok (xAI) API key (fallback: XAI_API_KEY env var).":
        "Grok（xAI）API Key（回退：`XAI_API_KEY` 环境变量）。",
      "Grok model override (default: \"grok-4-1-fast\").":
        "Grok 模型覆盖项（默认：`grok-4-1-fast`）。",
      "Moonshot/Kimi API key (fallback: KIMI_API_KEY or MOONSHOT_API_KEY env var).":
        "Moonshot/Kimi API Key（回退：`KIMI_API_KEY` 或 `MOONSHOT_API_KEY` 环境变量）。",
      "Kimi base URL override (default: \"https://api.moonshot.ai/v1\").":
        "Kimi 基础 URL 覆盖项（默认：`https://api.moonshot.ai/v1`）。",
      "Kimi model override (default: \"moonshot-v1-128k\").":
        "Kimi 模型覆盖项（默认：`moonshot-v1-128k`）。",
      "Perplexity or OpenRouter API key (fallback: PERPLEXITY_API_KEY or OPENROUTER_API_KEY env var). Direct Perplexity keys default to the Search API; OpenRouter keys use Sonar chat completions.":
        "Perplexity 或 OpenRouter API Key（回退：`PERPLEXITY_API_KEY` 或 `OPENROUTER_API_KEY` 环境变量）。直接的 Perplexity Key 默认使用 Search API；OpenRouter Key 则使用 Sonar chat completions。",
      "Optional Perplexity/OpenRouter chat-completions base URL override. Setting this opts Perplexity into the legacy Sonar/OpenRouter compatibility path.":
        "可选的 Perplexity/OpenRouter chat-completions 基础 URL 覆盖项。设置后会让 Perplexity 走旧版 Sonar/OpenRouter 兼容路径。",
      "Optional Sonar/OpenRouter model override (default: \"perplexity/sonar-pro\"). Setting this opts Perplexity into the legacy chat-completions compatibility path.":
        "可选的 Sonar/OpenRouter 模型覆盖项（默认：`perplexity/sonar-pro`）。设置后会让 Perplexity 走旧版 chat-completions 兼容路径。",
      "Enable the web_fetch tool (lightweight HTTP fetch).":
        "启用 `web_fetch` 工具（轻量级 HTTP 抓取）。",
      "Max characters returned by web_fetch (truncated).":
        "`web_fetch` 返回的最大字符数（超出会截断）。",
      "Hard cap for web_fetch maxChars (applies to config and tool calls).":
        "`web_fetch` 的 `maxChars` 硬上限（同时作用于配置和工具调用）。",
      "Maximum redirects allowed for web_fetch (default: 3).":
        "`web_fetch` 允许的最大重定向次数（默认：3）。",
      "Use Readability to extract main content from HTML (fallbacks to basic HTML cleanup).":
        "使用 Readability 从 HTML 中提取主要内容（失败时回退到基础 HTML 清理）。",
      "Enable Firecrawl fallback for web_fetch (if configured).":
        "为 `web_fetch` 启用 Firecrawl 回退（如果已配置）。",
      "Firecrawl API key (fallback: FIRECRAWL_API_KEY env var).":
        "Firecrawl API Key（回退：`FIRECRAWL_API_KEY` 环境变量）。",
      "Firecrawl base URL (e.g. https://api.firecrawl.dev or custom endpoint).":
        "Firecrawl 基础 URL（例如 `https://api.firecrawl.dev` 或自定义端点）。",
      "When true, Firecrawl returns only the main content (default: true).":
        "为 true 时，Firecrawl 仅返回主要内容（默认：true）。",
      "Firecrawl maxAge (ms) for cached results when supported by the API.":
        "当 API 支持时，Firecrawl 对缓存结果使用的 `maxAge`（毫秒）。",
      "Threshold distance to compaction (in tokens) that triggers pre-compaction memory flush execution. Use earlier thresholds for safer persistence, or tighter thresholds for lower flush frequency.":
        "触发压缩前记忆刷新执行的压缩距离阈值（以 token 计）。若要更安全地持久化可使用更早阈值，若要减少刷新频率可使用更紧阈值。",
      "Forces pre-compaction memory flush when transcript file size reaches this threshold (bytes or strings like \"2mb\"). Use this to prevent long-session hangs even when token counters are stale; set to 0 to disable.":
        "当转录文件大小达到此阈值（字节或如 `\"2mb\"` 的字符串）时，强制执行压缩前记忆刷新。可用于在 token 计数器过期时仍防止长会话挂起；设为 0 则禁用。",
      "User-prompt template used for the pre-compaction memory flush turn when generating memory candidates. Use this only when you need custom extraction instructions beyond the default memory flush behavior.":
        "在生成记忆候选项时，用于压缩前记忆刷新轮次的用户提示词模板。仅在你需要超出默认记忆刷新行为的自定义提取指令时使用。",
      "System-prompt override for the pre-compaction memory flush turn to control extraction style and safety constraints. Use carefully so custom instructions do not reduce memory quality or leak sensitive context.":
        "用于压缩前记忆刷新轮次的系统提示词覆盖项，以控制提取风格和安全约束。请谨慎使用，以免自定义指令降低记忆质量或泄露敏感上下文。",
      "Embedded Pi runner hardening controls for how workspace-local Pi settings are trusted and applied in OpenClaw sessions.":
        "用于控制在 OpenClaw 会话中如何信任并应用工作区本地 Pi 设置的嵌入式 Pi 运行器加固项。",
      "How embedded Pi handles workspace-local `.pi/config/settings.json`: \"sanitize\" (default) strips shellPath/shellCommandPrefix, \"ignore\" disables project settings entirely, and \"trusted\" applies project settings as-is.":
        "控制嵌入式 Pi 如何处理工作区本地 `.pi/config/settings.json`：`sanitize`（默认）会剥离 `shellPath` / `shellCommandPrefix`，`ignore` 会完全禁用项目设置，`trusted` 则按原样应用项目设置。",
      "Delay style for block replies (\"off\", \"natural\", \"custom\").":
        "块状回复的延迟风格（`off`、`natural`、`custom`）。",
      "Minimum delay in ms for custom humanDelay (default: 800).":
        "自定义 `humanDelay` 的最小延迟（毫秒，默认：800）。",
      "Maximum delay in ms for custom humanDelay (default: 2500).":
        "自定义 `humanDelay` 的最大延迟（毫秒，默认：2500）。",
      "Controls whether heartbeat delivery may target direct/DM chats: \"allow\" (default) permits DM delivery and \"block\" suppresses direct-target sends.":
        "控制心跳投递是否可以指向 direct/DM 聊天：`allow`（默认）允许 DM 投递，`block` 则抑制 direct 目标发送。",
      "Per-agent override for heartbeat direct/DM delivery policy; use \"block\" for agents that should only send heartbeat alerts to non-DM destinations.":
        "按智能体覆盖心跳 direct/DM 投递策略；对于只应向非 DM 目标发送心跳告警的智能体，请使用 `block`。",
      "Direct message access control (\"pairing\" recommended). \"open\" requires channels.discord.allowFrom=[\"*\"] (legacy: channels.discord.dm.allowFrom).":
        "私信访问控制（推荐使用 `pairing`）。`open` 需要 `channels.discord.allowFrom=[\"*\"]`（旧配置：`channels.discord.dm.allowFrom`）。",
      "Max retry attempts for outbound Discord API calls (default: 3).":
        "出站 Discord API 调用的最大重试次数（默认：3）。",
      "Minimum retry delay in ms for Discord outbound calls.":
        "Discord 出站调用的最小重试延迟（毫秒）。",
      "Maximum retry delay cap in ms for Discord outbound calls.":
        "Discord 出站调用的最大重试延迟上限（毫秒）。",
      "Jitter factor (0-1) applied to Discord retry delays.":
        "应用于 Discord 重试延迟的抖动因子（0-1）。",
      "Soft max line count per Discord message (default: 17).":
        "每条 Discord 消息的软最大行数（默认：17）。",
      "Optional Discord EventQueue capacity override (max queued events before backpressure). Set per account via channels.discord.accounts.<id>.eventQueue.maxQueueSize.":
        "可选的 Discord EventQueue 容量覆盖（在触发背压前允许排队的最大事件数）。可通过 `channels.discord.accounts.<id>.eventQueue.maxQueueSize` 按账户设置。",
      "Optional Discord EventQueue concurrency override (max concurrent handler executions). Set per account via channels.discord.accounts.<id>.eventQueue.maxConcurrency.":
        "可选的 Discord EventQueue 并发覆盖（最大并发处理器执行数）。可通过 `channels.discord.accounts.<id>.eventQueue.maxConcurrency` 按账户设置。",
      "Inactivity window in hours for Discord thread-bound sessions (/focus and spawned thread sessions). Set 0 to disable idle auto-unfocus (default: 24). Overrides session.threadBindings.idleHours when set.":
        "Discord 线程绑定会话（`/focus` 和派生线程会话）的空闲时间窗口（小时）。设为 0 可禁用空闲自动取消 focus（默认：24）。设置后会覆盖 `session.threadBindings.idleHours`。",
      "Optional hard max age in hours for Discord thread-bound sessions. Set 0 to disable hard cap (default: 0). Overrides session.threadBindings.maxAgeHours when set.":
        "Discord 线程绑定会话的可选硬性最大时长（小时）。设为 0 可禁用硬上限（默认：0）。设置后会覆盖 `session.threadBindings.maxAgeHours`。",
      "Allow subagent spawns with thread=true to auto-create and bind Discord threads (default: false; opt-in). Set true to enable thread-bound subagent spawns for this account/channel.":
        "允许当 `thread=true` 时的子智能体派生自动创建并绑定 Discord 线程（默认：false；需显式启用）。设为 true 可为该账户/频道启用线程绑定的子智能体派生。",
      "Allow /acp spawn to auto-create and bind Discord threads for ACP sessions (default: false; opt-in). Set true to enable thread-bound ACP spawns for this account/channel.":
        "允许 `/acp spawn` 为 ACP 会话自动创建并绑定 Discord 线程（默认：false；需显式启用）。设为 true 可为该账户/频道启用线程绑定 ACP 派生。",
      "Maximum accepted video payload size in bytes before policy rejection or trimming occurs. Tune this to provider and infrastructure limits to avoid repeated timeout/failure loops.":
        "在策略拒绝或裁剪前允许接受的视频载荷最大字节数。请根据提供商和基础设施限制调优，以避免反复出现超时/失败循环。",
      "Maximum characters retained from video understanding output to control prompt growth. Raise for dense scene descriptions and lower when concise summaries are preferred.":
        "从视频理解输出中保留的最大字符数，用于控制提示词增长。若需要密集场景描述可提高；若更偏好简洁摘要则降低。",
      "Instruction template for video understanding describing desired summary granularity and focus areas. Keep this stable so output quality remains predictable across model/provider fallbacks.":
        "用于视频理解的指令模板，用于描述期望的摘要粒度和关注区域。请保持其稳定，以便在模型/提供商回退时输出质量保持可预测。",
      "Attachment eligibility policy for video analysis, defining which message files can trigger video processing. Keep this explicit in shared channels to prevent accidental large media workloads.":
        "用于视频分析的附件资格策略，定义哪些消息文件可以触发视频处理。在共享频道中请保持此项显式，以防意外触发大规模媒体处理工作负载。",
      "Ordered model preferences specifically for video understanding before shared media fallback applies. Prioritize models with strong multimodal video support to minimize degraded summaries.":
        "在共享媒体回退生效前，专门用于视频理解的有序模型偏好列表。请优先选择具有强多模态视频支持的模型，以减少摘要质量下降。",
      "Scope selector controlling when video understanding is attempted across incoming events. Narrow scope in noisy channels, and broaden only where video interpretation is core to workflow.":
        "用于控制在入站事件中何时尝试视频理解的范围选择器。在高噪音频道中请缩小范围，仅在视频解释是工作流核心时才扩大。",
      "Restrict filesystem tools (read/write/edit/apply_patch) to the workspace directory (default: false).":
        "将文件系统工具（read/write/edit/apply_patch）限制在工作区目录中（默认：false）。",
      "Controls which sessions can be targeted by sessions_list/sessions_history/sessions_send. (\"tree\" default = current session + spawned subagent sessions; \"self\" = only current; \"agent\" = any session in the current agent id; \"all\" = any session; cross-agent still requires tools.agentToAgent).":
        "控制 `sessions_list` / `sessions_history` / `sessions_send` 可以定位哪些会话。（默认 `tree` = 当前会话 + 派生的子智能体会话；`self` = 仅当前；`agent` = 当前智能体 ID 下的任意会话；`all` = 任意会话；跨智能体仍然需要 `tools.agentToAgent`）。",
      "Legacy override: allow cross-context sends across all providers.":
        "旧版覆盖项：允许跨所有提供商进行跨上下文发送。",
      "Allow sends to other channels within the same provider (default: true).":
        "允许向同一提供商内的其他频道发送（默认：true）。",
      "Allow sends across different providers (default: false).":
        "允许跨不同提供商发送（默认：false）。",
      "Add a visible origin marker when sending cross-context (default: true).":
        "在进行跨上下文发送时添加可见的来源标记（默认：true）。",
      "Minimum floor enforced for reserveTokens in Pi compaction paths (0 disables the floor guard). Use a non-zero floor to avoid over-aggressive compression under fluctuating token estimates.":
        "在 Pi 压缩路径中对 `reserveTokens` 强制执行的最小下限（0 表示禁用该下限保护）。使用非 0 下限可避免在 token 估算波动下发生过度激进的压缩。",
      "Maximum fraction of total context budget allowed for retained history after compaction (range 0.1-0.9). Use lower shares for more generation headroom or higher shares for deeper historical continuity.":
        "压缩后允许保留历史占总上下文预算的最大比例（范围 0.1-0.9）。较低比例可为生成留出更多空间，较高比例则提供更深的历史连续性。",
      "Identifier-preservation policy for compaction summaries: \"strict\" prepends built-in opaque-identifier retention guidance (default), \"off\" disables this prefix, and \"custom\" uses identifierInstructions. Keep \"strict\" unless you have a specific compatibility need.":
        "压缩摘要的标识符保留策略：`strict` 会预加内建的不透明标识符保留指导（默认），`off` 禁用此前缀，`custom` 则使用 `identifierInstructions`。除非你有特定兼容性需求，否则请保持 `strict`。",
      "Custom identifier-preservation instruction text used when identifierPolicy=\"custom\". Keep this explicit and safety-focused so compaction summaries do not rewrite opaque IDs, URLs, hosts, or ports.":
        "当 `identifierPolicy=\"custom\"` 时使用的自定义标识符保留指令文本。请让其保持显式且以安全为重点，以防压缩摘要改写不透明 ID、URL、主机名或端口。",
      "Number of most recent user/assistant turns kept verbatim outside safeguard summarization (default: 3). Raise this to preserve exact recent dialogue context, or lower it to maximize compaction savings.":
        "在 safeguard 摘要之外按原样保留的最近用户/助手轮次数量（默认：3）。提高可保留更精确的近期对话上下文，降低则可最大化压缩收益。",
      "Optional quality-audit retry settings for safeguard compaction summaries. Leave this disabled unless you explicitly want summary audits and one-shot regeneration on failed checks.":
        "用于 safeguard 压缩摘要的可选质量审计重试设置。除非你明确希望在检查失败时执行摘要审计和一次性重新生成，否则请保持禁用。",
      "Enables summary quality audits and regeneration retries for safeguard compaction. Default: false, so safeguard mode alone does not turn on retry behavior.":
        "为 safeguard 压缩启用摘要质量审计和重新生成重试。默认：false，因此仅开启 safeguard 模式并不会自动启用重试行为。",
      "Maximum number of regeneration retries after a failed safeguard summary quality audit. Use small values to bound extra latency and token cost.":
        "在 safeguard 摘要质量审计失败后允许的最大重新生成重试次数。请使用较小值，以限制额外延迟和 token 成本。",
      "AGENTS.md H2/H3 section names re-injected after compaction so the agent reruns critical startup guidance. Leave unset to use \"Session Startup\"/\"Red Lines\" with legacy fallback to \"Every Session\"/\"Safety\"; set to [] to disable reinjection entirely.":
        "压缩后重新注入的 `AGENTS.md` H2/H3 章节名称，以便智能体重新运行关键启动指导。留空则使用 `Session Startup` / `Red Lines`，并以旧版 `Every Session` / `Safety` 作为回退；设为 `[]` 则完全禁用重新注入。",
      "Optional provider/model override used only for compaction summarization. Set this when you want compaction to run on a different model than the session default, and leave it unset to keep using the primary agent model.":
        "仅用于压缩摘要的可选 provider/model 覆盖项。当你希望压缩运行在不同于会话默认值的模型上时设置；若保持未设置，则继续使用主智能体模型。",
      "Pre-compaction memory flush settings that run an agentic memory write before heavy compaction. Keep enabled for long sessions so salient context is persisted before aggressive trimming.":
        "压缩前记忆刷新设置，会在重度压缩前执行一次智能体式记忆写入。对于长会话请保持启用，以便在激进裁剪前持久化关键上下文。",
      "Enables pre-compaction memory flush before the runtime performs stronger history reduction near token limits. Keep enabled unless you intentionally disable memory side effects in constrained environments.":
        "在运行时于接近 token 上限时执行更强的历史裁剪前，启用压缩前记忆刷新。除非你有意在受限环境中禁用记忆副作用，否则请保持启用。",
      "Override Node autoSelectFamily for Telegram (true=enable, false=disable).":
        "为 Telegram 覆盖 Node 的 `autoSelectFamily`（true=启用，false=禁用）。",
      "Max seconds before Telegram API requests are aborted (default: 500 per grammY).":
        "Telegram API 请求在被中止前允许的最大秒数（按 grammY 默认值为 500）。",
      "Enable Telegram conversation binding features (/focus, /unfocus, /agents, and /session idle|max-age). Overrides session.threadBindings.enabled when set.":
        "启用 Telegram 会话绑定功能（`/focus`、`/unfocus`、`/agents` 以及 `/session idle|max-age`）。设置后会覆盖 `session.threadBindings.enabled`。",
      "Inactivity window in hours for Telegram bound sessions. Set 0 to disable idle auto-unfocus (default: 24). Overrides session.threadBindings.idleHours when set.":
        "Telegram 绑定会话的空闲时间窗口（小时）。设为 0 可禁用空闲自动取消 focus（默认：24）。设置后会覆盖 `session.threadBindings.idleHours`。",
      "Optional hard max age in hours for Telegram bound sessions. Set 0 to disable hard cap (default: 0). Overrides session.threadBindings.maxAgeHours when set.":
        "Telegram 绑定会话的可选硬性最大时长（小时）。设为 0 可禁用硬上限（默认：0）。设置后会覆盖 `session.threadBindings.maxAgeHours`。",
      "Allow subagent spawns with thread=true to auto-bind Telegram current conversations when supported.":
        "允许当 `thread=true` 时的子代理派生在支持情况下自动绑定 Telegram 当前会话。",
      "Allow ACP spawns with thread=true to auto-bind Telegram current conversations when supported.":
        "允许当 `thread=true` 时的 ACP 派生在支持情况下自动绑定 Telegram 当前会话。",
      "Direct message access control (\"pairing\" recommended). \"open\" requires channels.whatsapp.allowFrom=[\"*\"].":
        "私信访问控制（推荐使用 `pairing`）。`open` 需要 `channels.whatsapp.allowFrom=[\"*\"]`。",
      "Same-phone setup (bot uses your personal WhatsApp number).":
        "同手机设置（机器人使用你的个人 WhatsApp 号码）。",
      "Debounce window (ms) for batching rapid consecutive messages from the same sender (0 to disable).":
        "用于批量处理同一发送者连续快速消息的防抖窗口（毫秒，设为 0 则禁用）。",
      "Direct message access control (\"pairing\" recommended). \"open\" requires channels.signal.allowFrom=[\"*\"].":
        "私信访问控制（推荐使用 `pairing`）。`open` 需要 `channels.signal.allowFrom=[\"*\"]`。",
      "Direct message access control (\"pairing\" recommended). \"open\" requires channels.imessage.allowFrom=[\"*\"].":
        "私信访问控制（推荐使用 `pairing`）。`open` 需要 `channels.imessage.allowFrom=[\"*\"]`。",
      "Direct message access control (\"pairing\" recommended). \"open\" requires channels.bluebubbles.allowFrom=[\"*\"].":
        "私信访问控制（推荐使用 `pairing`）。`open` 需要 `channels.bluebubbles.allowFrom=[\"*\"]`。",
      "Direct message access control (\"pairing\" recommended). \"open\" requires channels.discord.allowFrom=[\"*\"].":
        "私信访问控制（推荐使用 `pairing`）。`open` 需要 `channels.discord.allowFrom=[\"*\"]`。",
      "Primary model (provider/model).":
        "主模型（provider/model）。",
      "Ordered fallback models (provider/model). Used when the primary model fails.":
        "有序的回退模型列表（provider/model）。在主模型失败时使用。",
      "Optional image model (provider/model) used when the primary model lacks image input.":
        "当主模型不支持图像输入时使用的可选图像模型（provider/model）。",
      "Ordered fallback image models (provider/model).":
        "有序的回退图像模型列表（provider/model）。",
      "Optional PDF model (provider/model) for the PDF analysis tool. Defaults to imageModel, then session model.":
        "供 PDF 分析工具使用的可选 PDF 模型（provider/model）。默认回退到 `imageModel`，再回退到会话模型。",
      "Ordered fallback PDF models (provider/model).":
        "有序的回退 PDF 模型列表（provider/model）。",
      "Maximum PDF file size in megabytes for the PDF tool (default: 10).":
        "PDF 工具允许处理的 PDF 文件最大大小（MB，默认：10）。",
      "Maximum number of PDF pages to process for the PDF tool (default: 20).":
        "PDF 工具允许处理的 PDF 页面最大数量（默认：20）。",
      "Max image side length in pixels when sanitizing transcript/tool-result image payloads (default: 1200).":
        "在清洗转录/工具结果图像载荷时，允许的图像边长最大像素值（默认：1200）。",
      "Optional CLI backends for text-only fallback (claude-cli, etc.).":
        "用于纯文本回退的可选 CLI 后端（如 `claude-cli` 等）。",
      "Compaction tuning for when context nears token limits, including history share, reserve headroom, and pre-compaction memory flush behavior. Use this when long-running sessions need stable continuity under tight context windows.":
        "当上下文接近 token 限制时使用的压缩调优设置，包括历史占比、预留余量和压缩前记忆刷新行为。当长时间运行的会话需要在紧张上下文窗口下保持稳定连续性时可使用。",
      "Compaction strategy mode: \"default\" uses baseline behavior, while \"safeguard\" applies stricter guardrails to preserve recent context. Keep \"default\" unless you observe aggressive history loss near limit boundaries.":
        "压缩策略模式：`default` 使用基线行为，而 `safeguard` 会应用更严格的护栏以保留近期上下文。除非你观察到在接近上限边界时历史被过度丢弃，否则请保持 `default`。",
      "Token headroom reserved for reply generation and tool output after compaction runs. Use higher reserves for verbose/tool-heavy sessions, and lower reserves when maximizing retained history matters more.":
        "压缩运行后为生成回复和工具输出保留的 token 余量。对于冗长/重工具会话可提高该值；而当保留更多历史更重要时则可降低。",
      "Minimum token budget preserved from the most recent conversation window during compaction. Use higher values to protect immediate context continuity and lower values to keep more long-tail history.":
        "压缩期间从最近对话窗口中保留的最小 token 预算。提高可保护即时上下文连续性，降低则可保留更多长尾历史。",
      "Override native skill commands for Slack (bool or \"auto\").":
        "覆盖 Slack 的原生技能命令（布尔值或 `auto`）。",
      "Unified Slack stream preview mode: \"off\" | \"partial\" | \"block\" | \"progress\". Legacy boolean/streamMode keys are auto-mapped.":
        "统一的 Slack 流式预览模式：`off` | `partial` | `block` | `progress`。旧的布尔/streamMode 键会被自动映射。",
      "Enable native Slack text streaming (chat.startStream/chat.appendStream/chat.stopStream) when channels.slack.streaming is partial (default: true).":
        "当 `channels.slack.streaming` 为 `partial` 时，启用原生 Slack 文本流（`chat.startStream` / `chat.appendStream` / `chat.stopStream`）（默认：true）。",
      "Legacy Slack preview mode alias (replace | status_final | append); auto-migrated to channels.slack.streaming.":
        "旧版 Slack 预览模式别名（`replace` | `status_final` | `append`）；会自动迁移到 `channels.slack.streaming`。",
      "Additional Telegram bot menu commands (merged with native; conflicts ignored).":
        "附加的 Telegram 机器人菜单命令（与原生命令合并；冲突将被忽略）。",
      "Direct message access control (\"pairing\" recommended). \"open\" requires channels.telegram.allowFrom=[\"*\"].":
        "私信访问控制（推荐使用 `pairing`）。`open` 需要 `channels.telegram.allowFrom=[\"*\"]`。",
      "Unified Telegram stream preview mode: \"off\" | \"partial\" | \"block\" | \"progress\" (default: \"partial\"). \"progress\" maps to \"partial\" on Telegram. Legacy boolean/streamMode keys are auto-mapped.":
        "统一的 Telegram 流式预览模式：`off` | `partial` | `block` | `progress`（默认：`partial`）。在 Telegram 上，`progress` 会映射为 `partial`。旧的布尔/streamMode 键会被自动映射。",
      "Unified Discord stream preview mode: \"off\" | \"partial\" | \"block\" | \"progress\". \"progress\" maps to \"partial\" on Discord. Legacy boolean/streamMode keys are auto-mapped.":
        "统一的 Discord 流式预览模式：`off` | `partial` | `block` | `progress`。在 Discord 上，`progress` 会映射为 `partial`。旧的布尔/streamMode 键会被自动映射。",
      "Legacy Discord preview mode alias (off | partial | block); auto-migrated to channels.discord.streaming.":
        "旧版 Discord 预览模式别名（`off` | `partial` | `block`）；会自动迁移到 `channels.discord.streaming`。",
      "Minimum chars before emitting a Discord stream preview update when channels.discord.streaming=\"block\" (default: 200).":
        "当 `channels.discord.streaming=\"block\"` 时，在发出 Discord 流式预览更新前所需的最小字符数（默认：200）。",
      "Target max size for a Discord stream preview chunk when channels.discord.streaming=\"block\" (default: 800; clamped to channels.discord.textChunkLimit).":
        "当 `channels.discord.streaming=\"block\"` 时，Discord 流式预览分块的目标最大大小（默认：800；会被限制到 `channels.discord.textChunkLimit`）。",
      "Preferred breakpoints for Discord draft chunks (paragraph | newline | sentence). Default: paragraph.":
        "Discord 草稿分块的首选断点（`paragraph` | `newline` | `sentence`）。默认：`paragraph`。",
      "Max retry attempts for outbound Telegram API calls (default: 3).":
        "出站 Telegram API 调用的最大重试次数（默认：3）。",
      "Minimum retry delay in ms for Telegram outbound calls.":
        "Telegram 出站调用的最小重试延迟（毫秒）。",
      "Maximum retry delay cap in ms for Telegram outbound calls.":
        "Telegram 出站调用的最大重试延迟上限（毫秒）。",
      "Jitter factor (0-1) applied to Telegram retry delays.":
        "应用于 Telegram 重试延迟的抖动因子（0-1）。",
      "Delay in milliseconds before showing an in-progress notice after an exec approval is granted. Increase to reduce flicker for fast commands, or lower for quicker operator feedback.":
        "在 exec 审批通过后、显示执行中提示前的延迟（毫秒）。提高可减少快速命令的闪烁，降低则能更快给操作者反馈。",
      "Enable automatic link understanding pre-processing so URLs can be summarized before agent reasoning. Keep enabled for richer context, and disable when strict minimal processing is required.":
        "启用自动链接理解预处理，以便在代理推理前对 URL 进行摘要。若希望获得更丰富上下文可保持启用；若要求严格最小处理则禁用。",
      "Maximum number of links expanded per turn during link understanding. Use lower values to control latency/cost in chatty threads and higher values when multi-link context is critical.":
        "链接理解期间每轮展开的链接最大数量。在高对话量线程中可降低以控制延迟/成本，而在多链接上下文至关重要时可提高。",
      "Per-link understanding timeout budget in seconds before unresolved links are skipped. Keep this bounded to avoid long stalls when external sites are slow or unreachable.":
        "在跳过未解析链接前，每个链接允许的理解超时预算（秒）。请保持有界，以避免外部站点缓慢或不可达时出现长时间停滞。",
      "Preferred model list for link understanding tasks, evaluated in order as fallbacks when supported. Use lightweight models first for routine summarization and heavier models only when needed.":
        "用于链接理解任务的首选模型列表，在支持时按顺序作为回退评估。常规摘要请优先使用轻量模型，仅在需要时使用更重的模型。",
      "Controls when link understanding runs relative to conversation context and message type. Keep scope conservative to avoid unnecessary fetches on messages where links are not actionable.":
        "控制链接理解相对于会话上下文和消息类型何时运行。请保持范围保守，以避免在链接并不可操作的消息上执行不必要抓取。",
      "Shared fallback model list used by media understanding tools when modality-specific model lists are not set. Keep this aligned with available multimodal providers to avoid runtime fallback churn.":
        "当未设置模态特定模型列表时，媒体理解工具使用的共享回退模型列表。请让其与可用的多模态提供商保持一致，以避免运行时频繁回退。",
      "Maximum number of concurrent media understanding operations per turn across image, audio, and video tasks. Lower this in resource-constrained deployments to prevent CPU/network saturation.":
        "每轮在图像、音频和视频任务之间允许的媒体理解并发操作最大数量。在资源受限部署中请降低此值，以避免 CPU/网络饱和。",
      "Enable image understanding so attached or referenced images can be interpreted into textual context. Disable if you need text-only operation or want to avoid image-processing cost.":
        "启用图像理解，使附加或引用的图像可被解释为文本上下文。若你只需要文本模式，或希望避免图像处理成本，则请禁用。",
      "Maximum accepted image payload size in bytes before the item is skipped or truncated by policy. Keep limits realistic for your provider caps and infrastructure bandwidth.":
        "在项目被策略跳过或截断之前允许接受的图像载荷最大字节数。请根据提供商上限和基础设施带宽设置合理限制。",
      "Maximum characters returned from image understanding output after model response normalization. Use tighter limits to reduce prompt bloat and larger limits for detail-heavy OCR tasks.":
        "模型响应归一化后，图像理解输出返回的最大字符数。更紧的限制可减少提示词膨胀，而更大的限制适合细节较多的 OCR 任务。",
      "Instruction template used for image understanding requests to shape extraction style and detail level. Keep prompts deterministic so outputs stay consistent across turns and channels.":
        "用于图像理解请求的指令模板，用于塑造提取风格和细节层级。请保持提示词确定性，以便在不同轮次和频道间维持输出一致。",
      "Attachment handling policy for image inputs, including which message attachments qualify for image analysis. Use restrictive settings in untrusted channels to reduce unexpected processing.":
        "图像输入的附件处理策略，包括哪些消息附件有资格进行图像分析。在不受信任频道中请使用更严格设置，以减少意外处理。",
      "Ordered model preferences specifically for image understanding when you want to override shared media models. Put the most reliable multimodal model first to reduce fallback attempts.":
        "当你希望覆盖共享媒体模型时，专门用于图像理解的有序模型偏好列表。请将最可靠的多模态模型放在首位，以减少回退尝试。",
      "Scope selector for when image understanding is attempted (for example only explicit requests versus broader auto-detection). Keep narrow scope in busy channels to control token and API spend.":
        "用于控制何时尝试图像理解的范围选择器（例如仅显式请求，或更广泛的自动检测）。在繁忙频道中请保持范围较窄，以控制 token 和 API 成本。",
      "Enable video understanding so clips can be summarized into text for downstream reasoning and responses. Disable when processing video is out of policy or too expensive for your deployment.":
        "启用视频理解，使视频片段可被总结为文本以供下游推理和回复使用。当视频处理超出策略或对你的部署而言成本过高时，请禁用。",
      "Combines BM25 keyword matching with vector similarity for better recall on mixed exact + semantic queries. Keep enabled unless you are isolating ranking behavior for troubleshooting.":
        "将 BM25 关键词匹配与向量相似度结合，以在混合精确 + 语义查询中获得更好的召回。除非你正在为排障隔离排序行为，否则请保持启用。",
      "Controls how strongly semantic similarity influences hybrid ranking (0-1). Increase when paraphrase matching matters more than exact terms; decrease for stricter keyword emphasis.":
        "控制语义相似度对混合排序的影响强度（0-1）。当意译匹配比精确词项更重要时可提高；若要更强调关键词匹配则降低。",
      "Controls how strongly BM25 keyword relevance influences hybrid ranking (0-1). Increase for exact-term matching; decrease when semantic matches should rank higher.":
        "控制 BM25 关键词相关性对混合排序的影响强度（0-1）。若更重视精确词项匹配则提高；若希望语义匹配排名更高则降低。",
      "Expands the candidate pool before reranking (default: 4). Raise this for better recall on noisy corpora, but expect more compute and slightly slower searches.":
        "在重排前扩展候选池（默认：4）。可在噪声语料上提高召回，但会带来更多计算和略慢的搜索速度。",
      "Adds MMR reranking to diversify results and reduce near-duplicate snippets in a single answer window. Enable when recall looks repetitive; keep off for strict score ordering.":
        "加入 MMR 重排以多样化结果，并减少单个答案窗口中的近重复片段。当召回结果显得重复时启用；若要求严格按分数排序则关闭。",
      "Sets MMR relevance-vs-diversity balance (0 = most diverse, 1 = most relevant, default: 0.7). Lower values reduce repetition; higher values keep tightly relevant but may duplicate.":
        "设置 MMR 相关性与多样性的平衡（0 = 最多样，1 = 最相关，默认：0.7）。较低值可减少重复，较高值则保持更紧密相关但可能产生重复。",
      "Applies recency decay so newer memory can outrank older memory when scores are close. Enable when timeliness matters; keep off for timeless reference knowledge.":
        "应用时效衰减，使得在分数接近时，新记忆可以排在旧记忆之前。当时效性重要时启用；对于长期有效的参考知识则保持关闭。",
      "Controls how fast older memory loses rank when temporal decay is enabled (half-life in days, default: 30). Lower values prioritize recent context more aggressively.":
        "控制在启用时效衰减时，旧记忆失去排序权重的速度（半衰期按天计，默认：30）。较低值会更激进地优先近期上下文。",
      "Caches computed chunk embeddings in SQLite so reindexing and incremental updates run faster (default: true). Keep this enabled unless investigating cache correctness or minimizing disk usage.":
        "将已计算的分块嵌入缓存到 SQLite 中，以便重建索引和增量更新运行得更快（默认：true）。除非你在调查缓存正确性或想尽量减少磁盘占用，否则请保持启用。",
      "Sets a best-effort upper bound on cached embeddings kept in SQLite for memory search. Use this when controlling disk growth matters more than peak reindex speed.":
        "设置在 SQLite 中为记忆搜索保留的嵌入缓存的尽力上限。适用于控制磁盘增长比峰值重建索引速度更重要时。",
      "Triggers a memory index sync when a session starts so early turns see fresh memory content. Keep enabled when startup freshness matters more than initial turn latency.":
        "在会话开始时触发记忆索引同步，以便前几个轮次能看到新鲜的记忆内容。当启动新鲜度比初始轮次延迟更重要时请保持启用。",
      "Uses lazy sync by scheduling reindex on search after content changes are detected. Keep enabled for lower idle overhead, or disable if you require pre-synced indexes before any query.":
        "在检测到内容变更后，通过在搜索时调度重建索引来实现惰性同步。若希望降低空闲开销请保持启用；若你要求任何查询前索引都已预同步，则禁用。",
      "Watches memory files and schedules index updates from file-change events (chokidar). Enable for near-real-time freshness; disable on very large workspaces if watch churn is too noisy.":
        "监视记忆文件，并根据文件变更事件（chokidar）调度索引更新。若需要近实时新鲜度请启用；在超大工作区且监视噪音过大时可禁用。",
      "Debounce window in milliseconds for coalescing rapid file-watch events before reindex runs. Increase to reduce churn on frequently-written files, or lower for faster freshness.":
        "在重建索引前用于合并快速文件监视事件的防抖窗口（毫秒）。对频繁写入的文件可提高以减少抖动，或降低以获得更快的新鲜度。",
      "Requires at least this many newly appended bytes before session transcript changes trigger reindex (default: 100000). Increase to reduce frequent small reindexes, or lower for faster transcript freshness.":
        "要求会话转录新增至少这么多字节后，才会因转录变化触发重建索引（默认：100000）。提高可减少频繁的小规模重建，降低则可获得更快的转录新鲜度。",
      "Requires at least this many appended transcript messages before reindex is triggered (default: 50). Lower this for near-real-time transcript recall, or raise it to reduce indexing churn.":
        "要求会话转录新增至少这么多条消息后，才触发重建索引（默认：50）。若需要接近实时的转录回忆请降低，若要减少索引抖动则提高。",
      "Optional repository root shown in the system prompt runtime line (overrides auto-detect).":
        "显示在系统提示运行时行中的可选仓库根目录（覆盖自动检测）。",
      "Timezone for message envelopes (\"utc\", \"local\", \"user\", or an IANA timezone string).":
        "消息信封使用的时区（`utc`、`local`、`user` 或 IANA 时区字符串）。",
      "Include absolute timestamps in message envelopes (\"on\" or \"off\").":
        "在消息信封中包含绝对时间戳（`on` 或 `off`）。",
      "Include elapsed time in message envelopes (\"on\" or \"off\").":
        "在消息信封中包含经过时间（`on` 或 `off`）。",
      "Configured model catalog (keys are full provider/model IDs).":
        "已配置的模型目录（键为完整的 provider/model ID）。",
      "Vector search over MEMORY.md and memory/*.md (per-agent overrides supported).":
        "对 `MEMORY.md` 和 `memory/*.md` 执行向量搜索（支持按代理覆盖）。",
      "Master toggle for memory search indexing and retrieval behavior on this agent profile. Keep enabled for semantic recall, and disable when you want fully stateless responses.":
        "此代理配置档上用于控制记忆搜索索引和检索行为的总开关。若需要语义回忆请保持启用；若希望完全无状态响应则禁用。",
      "Chooses which sources are indexed: \"memory\" reads MEMORY.md + memory files, and \"sessions\" includes transcript history. Keep [\"memory\"] unless you need recall from prior chat transcripts.":
        "选择要建立索引的来源：`memory` 读取 `MEMORY.md` 和 memory 文件，`sessions` 则包含会话历史记录。除非你需要从先前聊天记录中回忆内容，否则请保持 `[\"memory\"]`。",
      "Adds extra directories or .md files to the memory index beyond default memory files. Use this when key reference docs live elsewhere in your repo; keep paths small and intentional to avoid noisy recall.":
        "在默认记忆文件之外，将额外目录或 `.md` 文件加入记忆索引。当关键参考文档位于仓库其他位置时可使用此项；请让路径保持精简且有意，以避免检索噪音。",
      "Indexes session transcripts into memory search so responses can reference prior chat turns. Keep this off unless transcript recall is needed, because indexing cost and storage usage both increase.":
        "将会话转录记录索引到记忆搜索中，使回复可以引用之前的聊天轮次。除非确实需要回忆转录内容，否则请保持关闭，因为索引成本和存储占用都会增加。",
      "Selects the embedding backend used to build/query memory vectors: \"openai\", \"gemini\", \"voyage\", \"mistral\", \"ollama\", or \"local\". Keep your most reliable provider here and configure fallback for resilience.":
        "选择用于构建/查询记忆向量的嵌入后端：`openai`、`gemini`、`voyage`、`mistral`、`ollama` 或 `local`。请在此使用最可靠的提供商，并配置回退以提升韧性。",
      "Embedding model override used by the selected memory provider when a non-default model is required. Set this only when you need explicit recall quality/cost tuning beyond provider defaults.":
        "当选定的记忆提供商需要使用非默认模型时，用于覆盖嵌入模型。仅在你需要显式调节回忆质量/成本而超出提供商默认值时设置。",
      "Overrides the embedding API endpoint, such as an OpenAI-compatible proxy or custom Gemini base URL. Use this only when routing through your own gateway or vendor endpoint; keep provider defaults otherwise.":
        "用于覆盖嵌入 API 端点，例如 OpenAI 兼容代理或自定义 Gemini 基础 URL。仅在通过你自己的网关或供应商端点路由时使用；否则请保持提供商默认值。",
      "Supplies a dedicated API key for remote embedding calls used by memory indexing and query-time embeddings. Use this when memory embeddings should use different credentials than global defaults or environment variables.":
        "为记忆索引和查询时嵌入调用提供专用 API Key。适用于记忆嵌入需要使用不同于全局默认值或环境变量的凭据时。",
      "Adds custom HTTP headers to remote embedding requests, merged with provider defaults. Use this for proxy auth and tenant routing headers, and keep values minimal to avoid leaking sensitive metadata.":
        "为远程嵌入请求添加自定义 HTTP 请求头，并与提供商默认值合并。可用于代理认证和租户路由请求头；请保持值最小化，以避免泄露敏感元数据。",
      "Warning threshold for repetitive patterns when detector is enabled (default: 10).":
        "检测器启用时，重复模式的警告阈值（默认：10）。",
      "Critical threshold for repetitive patterns when detector is enabled (default: 20).":
        "检测器启用时，重复模式的严重阈值（默认：20）。",
      "Global no-progress breaker threshold (default: 30).":
        "全局无进展熔断阈值（默认：30）。",
      "Enable generic repeated same-tool/same-params loop detection (default: true).":
        "启用通用的同工具/同参数重复循环检测（默认：true）。",
      "Enable known poll tool no-progress loop detection (default: true).":
        "启用已知轮询工具的无进展循环检测（默认：true）。",
      "Enable ping-pong loop detection (default: true).":
        "启用乒乓式循环检测（默认：true）。",
      "When true (default), backgrounded exec sessions on exit and node exec lifecycle events enqueue a system event and request a heartbeat.":
        "为 true 时（默认），后台 exec 会话在退出时以及节点 exec 生命周期事件会入队一个系统事件并请求一次心跳。",
      "When true, successful backgrounded exec exits with empty output still enqueue a completion system event (default: false).":
        "为 true 时，后台 exec 成功退出但输出为空时，仍会入队一个完成系统事件（默认：false）。",
      "Directories to prepend to PATH for exec runs (gateway/sandbox).":
        "在 exec 运行（网关/沙箱）时前置到 PATH 的目录。",
      "Allow stdin-only safe binaries to run without explicit allowlist entries.":
        "允许仅使用 stdin 的安全二进制在没有显式允许列表条目的情况下运行。",
      "Additional explicit directories trusted for safe-bin path checks (PATH entries are never auto-trusted).":
        "在安全二进制路径检查中额外显式信任的目录（PATH 条目永远不会被自动信任）。",
      "Optional per-binary safe-bin profiles (positional limits + allowed/denied flags).":
        "可选的按二进制划分的安全二进制配置档（位置参数限制 + 允许/拒绝标记）。",
      "Extra tool allowlist entries merged on top of the selected tool profile and default policy. Keep this list small and explicit so audits can quickly identify intentional policy exceptions.":
        "叠加到所选工具配置档和默认策略之上的附加工具允许列表条目。请让该列表保持精简且显式，以便审计时快速识别有意的策略例外。",
      "Per-provider tool allow/deny overrides keyed by channel/provider ID to tailor capabilities by surface. Use this when one provider needs stricter controls than global tool policy.":
        "按频道/提供商 ID 键控的按提供商工具允许/拒绝覆盖项，用于按表面定制能力。适用于某个提供商需要比全局工具策略更严格控制时。",
      "Drop strategy when queue cap is exceeded: \"old\", \"new\", or \"summarize\". Use summarize when preserving intent matters, or old/new when deterministic dropping is preferred.":
        "当超过队列上限时的丢弃策略：`old`、`new` 或 `summarize`。在保留意图更重要时使用 `summarize`，而在偏好确定性丢弃时使用 `old` / `new`。",
      "Direct inbound debounce settings used before queue/turn processing starts. Configure this for provider-specific rapid message bursts from the same sender.":
        "在队列/轮次处理开始前使用的直接入站防抖设置。适用于来自同一发送者、具有提供商特征的快速消息突发场景。",
      "Lifecycle status reactions that update the emoji on the trigger message as the agent progresses (queued → thinking → tool → done/error).":
        "生命周期状态反应，会随着代理推进过程（queued → thinking → tool → done/error）更新触发消息上的 emoji。",
      "Enable lifecycle status reactions for Telegram. When enabled, the ack reaction becomes the initial 'queued' state and progresses through thinking, tool, done/error automatically. Default: false.":
        "为 Telegram 启用生命周期状态反应。启用后，ack 反应会成为初始的 `queued` 状态，并自动推进到 thinking、tool、done/error。默认：false。",
      "Override default status reaction emojis. Keys: thinking, tool, coding, web, done, error, stallSoft, stallHard. Must be valid Telegram reaction emojis.":
        "覆盖默认状态反应 emoji。键包括：thinking、tool、coding、web、done、error、stallSoft、stallHard。必须是有效的 Telegram 反应 emoji。",
      "Override default timing. Keys: debounceMs (700), stallSoftMs (25000), stallHardMs (60000), doneHoldMs (1500), errorHoldMs (2500).":
        "覆盖默认时间参数。键包括：debounceMs（700）、stallSoftMs（25000）、stallHardMs（60000）、doneHoldMs（1500）、errorHoldMs（2500）。",
      "Debounce window (ms) for batching rapid inbound messages from the same sender (0 to disable).":
        "用于批量处理同一发送者快速入站消息的防抖窗口（毫秒，设为 0 则禁用）。",
      "Slack channel provider configuration for bot/app tokens, streaming behavior, and DM policy controls. Keep token handling and thread behavior explicit to avoid noisy workspace interactions.":
        "Slack 频道提供商配置，用于机器人/App 令牌、流式行为和 DM 策略控制。请让令牌处理和线程行为保持显式，以避免工作区中产生噪音交互。",
      "WhatsApp channel provider configuration for access policy and message batching behavior. Use this section to tune responsiveness and direct-message routing safety for WhatsApp chats.":
        "WhatsApp 频道提供商配置，用于访问策略和消息批处理行为。使用此部分可调优 WhatsApp 聊天的响应性和私信路由安全性。",
      "Signal channel provider configuration including account identity and DM policy behavior. Keep account mapping explicit so routing remains stable across multi-device setups.":
        "Signal 频道提供商配置，包括账户身份和 DM 策略行为。请保持账户映射显式，以便在多设备配置中保持路由稳定。",
      "iMessage channel provider configuration for CLI integration and DM access policy handling. Use explicit CLI paths when runtime environments have non-standard binary locations.":
        "iMessage 频道提供商配置，用于 CLI 集成和 DM 访问策略处理。当运行环境中的二进制位置不标准时，请使用显式 CLI 路径。",
      "BlueBubbles channel provider configuration used for Apple messaging bridge integrations. Keep DM policy aligned with your trusted sender model in shared deployments.":
        "用于 Apple 消息桥接集成的 BlueBubbles 频道提供商配置。在共享部署中，请让 DM 策略与你的受信任发送者模型保持一致。",
      "Microsoft Teams channel provider configuration and provider-specific policy toggles. Use this section to isolate Teams behavior from other enterprise chat providers.":
        "Microsoft Teams 频道提供商配置及其提供商特定策略开关。使用此部分可将 Teams 行为与其他企业聊天提供商隔离。",
      "Mattermost channel provider configuration for bot credentials, base URL, and message trigger modes. Keep mention/trigger rules strict in high-volume team channels.":
        "Mattermost 频道提供商配置，用于机器人凭据、基础 URL 和消息触发模式。在高流量团队频道中，请保持提及/触发规则严格。",
      "IRC channel provider configuration and compatibility settings for classic IRC transport workflows. Use this section when bridging legacy chat infrastructure into OpenClaw.":
        "IRC 频道提供商配置及其经典 IRC 传输工作流兼容性设置。在将遗留聊天基础设施桥接到 OpenClaw 时使用此部分。",
      "Default channel behavior applied across providers when provider-specific settings are not set. Use this to enforce consistent baseline policy before per-provider tuning.":
        "当未设置提供商特定配置时，应用于所有提供商的默认频道行为。可在按提供商调优之前，用它强制统一的基线策略。",
      "When true, mapping content may include less-sanitized external payload data in generated messages. Keep false by default and enable only for trusted sources with reviewed transform logic.":
        "为 true 时，映射内容在生成消息时可包含较少清洗的外部载荷数据。默认请保持 false，仅对受信任来源并且 transform 逻辑已审查时启用。",
      "Delivery channel override for mapping outputs (for example \"last\", \"telegram\", \"discord\", \"slack\", \"signal\", \"imessage\", or \"msteams\"). Keep channel overrides explicit to avoid accidental cross-channel sends.":
        "用于映射输出的投递频道覆盖项（例如 `last`、`telegram`、`discord`、`slack`、`signal`、`imessage` 或 `msteams`）。请保持频道覆盖显式，以避免意外跨频道发送。",
      "Destination identifier inside the selected channel when mapping replies should route to a fixed target. Verify provider-specific destination formats before enabling production mappings.":
        "当映射回复应路由到固定目标时，所选频道内的目标标识符。在启用生产映射前，请先校验各提供商特定的目标格式。",
      "Optional model override for mapping-triggered runs when automation should use a different model than agent defaults. Use this sparingly so behavior remains predictable across mapping executions.":
        "用于映射触发运行时的可选模型覆盖项，适用于自动化需要使用不同于代理默认值的模型时。请谨慎使用，以便在不同映射执行间保持行为可预测。",
      "Optional thinking-effort override for mapping-triggered runs to tune latency versus reasoning depth. Keep low or minimal for high-volume hooks unless deeper reasoning is clearly required.":
        "用于映射触发运行的可选思考强度覆盖项，以调节延迟与推理深度之间的平衡。对于高流量 hooks，除非明确需要更深推理，否则请保持 low 或 minimal。",
      "Maximum runtime allowed for mapping action execution before timeout handling applies. Use tighter limits for high-volume webhook sources to prevent queue pileups.":
        "映射动作执行在触发超时处理前允许的最大运行时间。对于高流量 Webhook 来源，请使用更严格的限制以防止队列堆积。",
      "Transform configuration block defining module/export preprocessing before mapping action handling. Use transforms only from reviewed code paths and keep behavior deterministic for repeatable automation.":
        "用于定义映射动作处理前模块/导出预处理的 transform 配置块。请仅使用来自已审查代码路径的 transform，并保持行为确定性，以支持可重复的自动化。",
      "Relative transform module path loaded from hooks.transformsDir to rewrite incoming payloads before delivery. Keep modules local, reviewed, and free of path traversal patterns.":
        "从 `hooks.transformsDir` 加载、用于在投递前改写入站载荷的相对 transform 模块路径。请保持模块本地化、已审查，并避免路径穿越模式。",
      "Named export to invoke from the transform module; defaults to module default export when omitted. Set this when one file hosts multiple transform handlers.":
        "从 transform 模块调用的具名导出；省略时默认为模块默认导出。当一个文件中承载多个 transform 处理器时使用此项。",
      "ISO timestamp for when the setup wizard most recently completed on this host. Use this to confirm onboarding recency during support and operational audits.":
        "本机上最近一次完成设置向导的 ISO 时间戳。可用于在支持和运维审计中确认最近入门配置的时间。",
      "OpenClaw version recorded at the time of the most recent wizard run on this config. Use this when diagnosing behavior differences across version-to-version onboarding changes.":
        "此配置中记录的最近一次运行设置向导时的 OpenClaw 版本。可用于排查不同版本之间入门流程行为差异。",
      "Source commit identifier recorded for the last wizard execution in development builds. Use this to correlate onboarding behavior with exact source state during debugging.":
        "在开发构建中记录的最近一次设置向导执行的源码提交标识。可用于在调试时将入门行为与精确源码状态关联起来。",
      "Command invocation recorded for the latest wizard run to preserve execution context. Use this to reproduce onboarding steps when verifying setup regressions.":
        "记录最近一次设置向导运行时的命令调用，以保留执行上下文。可用于在验证设置流程回归问题时复现入门步骤。",
      "Wizard execution mode recorded as \"local\" or \"remote\" for the most recent onboarding flow. Use this to understand whether setup targeted direct local runtime or remote gateway topology.":
        "记录最近一次入门流程的设置向导执行模式，取值为 `local` 或 `remote`。可用于了解设置针对的是直接本地运行时还是远程网关拓扑。",
      "Cache-trace logging settings for observing cache decisions and payload context in embedded runs. Enable this temporarily for debugging and disable afterward to reduce sensitive log footprint.":
        "用于观察嵌入式运行中缓存决策和载荷上下文的缓存追踪日志设置。建议仅在调试时临时启用，之后关闭以减少敏感日志暴露。",
      "Console-specific log threshold: \"silent\", \"fatal\", \"error\", \"warn\", \"info\", \"debug\", or \"trace\" for terminal output control. Use this to keep local console quieter while retaining richer file logging if needed.":
        "用于控制终端输出的控制台专用日志阈值：`silent`、`fatal`、`error`、`warn`、`info`、`debug` 或 `trace`。可用它在需要时保持本地控制台更安静，同时保留更丰富的文件日志。",
      "Console output format style: \"pretty\", \"compact\", or \"json\" based on operator and ingestion needs. Use json for machine parsing pipelines and pretty/compact for human-first terminal workflows.":
        "控制台输出格式样式：根据操作者与日志采集需求可选 `pretty`、`compact` 或 `json`。机器解析流水线请使用 `json`，面向人工终端工作流请使用 `pretty` / `compact`。",
      "Sensitive redaction mode: \"off\" disables built-in masking, while \"tools\" redacts sensitive tool/config payload fields. Keep \"tools\" in shared logs unless you have isolated secure log sinks.":
        "敏感信息脱敏模式：`off` 禁用内建遮罩，而 `tools` 会对敏感工具/配置载荷字段做脱敏。除非你拥有隔离的安全日志接收端，否则在共享日志中请保持 `tools`。",
      "Additional custom redact regex patterns applied to log output before emission/storage. Use this to mask org-specific tokens and identifiers not covered by built-in redaction rules.":
        "在日志输出写出/存储前应用的附加自定义脱敏正则模式。可用于遮罩内建脱敏规则未覆盖的组织专用令牌和标识符。",
      "CLI startup banner controls for title/version line and tagline style behavior. Keep banner enabled for fast version/context checks, then tune tagline mode to your preferred noise level.":
        "用于控制 CLI 启动横幅的标题/版本行和标语样式行为。建议保持横幅启用以便快速检查版本和上下文，再根据偏好调节标语模式的显示噪音。",
      "Controls tagline style in the CLI startup banner: \"random\" (default) picks from the rotating tagline pool, \"default\" always shows the neutral default tagline, and \"off\" hides tagline text while keeping the banner version line.":
        "控制 CLI 启动横幅中的标语样式：`random`（默认）会从轮换标语池中选择，`default` 总是显示中性的默认标语，`off` 会隐藏标语文本但保留横幅版本行。",
      "Enable background auto-update for package installs (default: false).":
        "为包安装启用后台自动更新（默认：false）。",
      "Minimum delay before stable-channel auto-apply starts (default: 6).":
        "稳定通道开始自动应用前的最小延迟时间（默认：6）。",
      "Extra stable-channel rollout spread window in hours (default: 12).":
        "稳定通道额外的分批发布扩散窗口（小时，默认：12）。",
      "How often beta-channel checks run in hours (default: 1).":
        "beta 通道检查的运行频率（小时，默认：1）。",
      "Network bind profile: \"auto\", \"lan\", \"loopback\", \"custom\", or \"tailnet\" to control interface exposure. Keep \"loopback\" or \"auto\" for safest local operation unless external clients must connect.":
        "用于控制接口暴露的网络绑定配置：`auto`、`lan`、`loopback`、`custom` 或 `tailnet`。除非外部客户端必须连接，否则为了最安全的本地运行请保持 `loopback` 或 `auto`。",
      "Explicit bind host/IP used when gateway.bind is set to custom for manual interface targeting. Use a precise address and avoid wildcard binds unless external exposure is required.":
        "当 `gateway.bind` 设为 `custom` 时，用于手动指定接口目标的显式绑定主机/IP。请使用精确地址，除非需要外部暴露，否则避免使用通配绑定。",
      "Enables serving the gateway Control UI from the gateway HTTP process when true. Keep enabled for local administration, and disable when an external control surface replaces it.":
        "为 true 时，从网关 HTTP 进程提供网关控制界面。建议在本地管理时保持启用，而当存在外部控制面替代它时则禁用。",
      "Authentication policy for gateway HTTP/WebSocket access including mode, credentials, trusted-proxy behavior, and rate limiting. Keep auth enabled for every non-loopback deployment.":
        "用于网关 HTTP/WebSocket 访问的认证策略，包括模式、凭据、trusted-proxy 行为和速率限制。对于所有非 loopback 部署，都应保持认证启用。",
      "Allows trusted Tailscale identity paths to satisfy gateway auth checks when configured. Use this only when your tailnet identity posture is strong and operator workflows depend on it.":
        "在已配置时，允许受信任的 Tailscale 身份路径满足网关认证检查。仅当你的 tailnet 身份安全姿态足够强且操作者工作流依赖它时才使用。",
      "Login/auth attempt throttling controls to reduce credential brute-force risk at the gateway boundary. Keep enabled in exposed environments and tune thresholds to your traffic baseline.":
        "用于降低网关边界凭据暴力破解风险的登录/认证尝试限流控制。在暴露环境中应保持启用，并根据你的流量基线调节阈值。",
      "CIDR/IP allowlist of upstream proxies permitted to provide forwarded client identity headers. Keep this list narrow so untrusted hops cannot impersonate users.":
        "允许提供转发客户端身份请求头的上游代理 CIDR/IP 允许列表。请保持列表尽量精简，以防不受信任的链路冒充用户。",
      "Enables x-real-ip fallback when x-forwarded-for is missing in proxy scenarios. Keep disabled unless your ingress stack requires this compatibility behavior.":
        "在代理场景中，当缺少 `x-forwarded-for` 时启用 `x-real-ip` 回退。除非你的入口栈需要这种兼容行为，否则请保持禁用。",
      "Explicit gateway-level tool allowlist when you want a narrow set of tools available at runtime. Use this for locked-down environments where tool scope must be tightly controlled.":
        "当你希望运行时仅提供一小组工具时使用的显式网关级工具允许列表。适用于需要严格控制工具范围的锁定环境。",
      "Explicit gateway-level tool denylist to block risky tools even if lower-level policies allow them. Use deny rules for emergency response and defense-in-depth hardening.":
        "显式网关级工具拒绝列表，即使更低层级策略允许，也会阻止高风险工具。可将拒绝规则用于紧急响应和纵深防御加固。",
      "Interval in minutes for automatic channel health checks (default: 5).":
        "自动频道健康检查的时间间隔（分钟，默认：5）。",
      "Password credential used for remote gateway authentication when password mode is enabled. Keep this secret managed externally and avoid plaintext values in committed config.":
        "在启用密码模式时，用于远程网关认证的密码凭据。请将该密钥放在外部管理，并避免在已提交的配置中使用明文值。",
      "Expected sha256 TLS fingerprint for the remote gateway (pin to avoid MITM).":
        "远程网关预期的 sha256 TLS 指纹（通过 pinning 避免中间人攻击）。",
      "Remote gateway over SSH (tunnels the gateway port to localhost). Format: user@host or user@host:port.":
        "通过 SSH 连接远程网关（会将网关端口隧道到 localhost）。格式：`user@host` 或 `user@host:port`。",
      "Optional SSH identity file path (passed to ssh -i).":
        "可选的 SSH 身份文件路径（会传递给 `ssh -i`）。",
      "CLI presentation controls for local command output behavior such as banner and tagline style. Use this section to keep startup output aligned with operator preference without changing runtime behavior.":
        "用于控制本地命令输出表现形式的 CLI 展示设置，例如横幅和标语样式。使用此部分可在不改变运行时行为的情况下，让启动输出符合操作者偏好。",
      "Update-channel and startup-check behavior for keeping OpenClaw runtime versions current. Use conservative channels in production and more experimental channels only in controlled environments.":
        "用于保持 OpenClaw 运行时版本最新的更新通道和启动检查行为设置。生产环境请使用保守通道，实验性通道仅应在受控环境中使用。",
      "Gateway runtime surface for bind mode, auth, control UI, remote transport, and operational safety controls. Keep conservative defaults unless you intentionally expose the gateway beyond trusted local interfaces.":
        "网关运行时设置面，涵盖绑定模式、认证、控制界面、远程传输和运行安全控制。除非你明确希望将网关暴露到受信任本地接口之外，否则请保持保守默认值。",
    }),
  );
  const CONFIG_LABEL_REPLACEMENTS = [
    ["Config Last Touched Version", "配置最近修改版本"],
    ["Config Last Touched At", "配置最近修改时间"],
    ["Shell Environment Import", "Shell 环境导入"],
    ["Shell Environment Import Enabled", "Shell 环境导入已启用"],
    ["Environment Variable Overrides", "环境变量覆盖"],
    ["Wizard Last Run Timestamp", "向导最近运行时间戳"],
    ["Wizard Last Run Version", "向导最近运行版本"],
    ["Wizard Last Run Commit", "向导最近运行提交"],
    ["Wizard Last Run Command", "向导最近运行命令"],
    ["Wizard Last Run Mode", "向导最近运行模式"],
    ["Sensitive Data Redaction Mode", "敏感数据脱敏模式"],
    ["Update Check on Start", "启动时检查更新"],
    ["OpenTelemetry Trace Sample Rate", "OpenTelemetry 追踪采样率"],
    ["Gateway Auth Allow Tailscale Identity", "网关认证允许 Tailscale 身份"],
    ["Gateway Trusted Proxy CIDRs", "网关受信任代理 CIDR 列表"],
    ["Gateway HTTP Security Headers", "网关 HTTP 安全头"],
    ["Bedrock Model Discovery", "Bedrock 模型发现"],
    ["Model Discovery", "模型发现"],
    ["Discovery Provider Filter", "Discovery 提供商筛选"],
    ["Provider Filter", "提供商筛选"],
    ["Approvals", "审批"],
    ["Approval Forwarding Targets", "审批转发目标"],
    ["DM Session Scope", "DM 会话范围"],
    ["Model providers", "模型提供商"],
    ["Model provider", "模型提供商"],
    ["Browser Headless Mode", "浏览器无头模式"],
    ["Image Understanding Max Bytes", "图像理解最大字节数"],
    ["Tool-loop Critical Threshold", "工具循环严重阈值"],
    ["Exec Approval Running Notice (ms)", "执行审批运行提示（毫秒）"],
    ["Approval Target Account ID", "审批目标账户 ID"],
    ["Allow Cross-Context (Across Providers)", "允许跨上下文（跨提供商）"],
    ["Allow Cross-Context (Same Provider)", "允许跨上下文（同一提供商）"],
    ["Web Search Max Results", "Web 搜索最大结果数"],
    ["Gemini Search Model", "Gemini 搜索模型"],
    ["Agent ACP Working Directory", "智能体 ACP 工作目录"],
    ["Agent-to-Agent Target Allowlist", "智能体到智能体目标允许列表"],
    ["Exec Safe Bin Trusted Dirs", "Exec 安全二进制受信任目录"],
    ["Environment Variable", "环境变量"],
    ["Sensitive Data Redaction", "敏感数据脱敏"],
    ["Log File Path", "日志文件路径"],
    ["Log Level", "日志级别"],
    ["Console Log Level", "控制台日志级别"],
    ["Console Log Style", "控制台日志样式"],
    ["Auto Update", "自动更新"],
    ["Cache Trace", "缓存追踪"],
    ["Control UI", "控制界面"],
    ["Trusted Proxy", "受信任代理"],
    ["Remote Gateway", "远程网关"],
    ["Config Reload", "配置重载"],
    ["HTTP Security Headers", "HTTP 安全头"],
    ["HTTP Endpoints", "HTTP 端点"],
    ["HTTP API", "HTTP API"],
    ["Certificate Path", "证书路径"],
    ["Key Path", "密钥路径"],
    ["CA Path", "CA 路径"],
    ["No-Sandbox Mode", "无沙箱模式"],
    ["Attach-only Mode", "仅附加模式"],
    ["Relay Bind Address", "中继绑定地址"],
    ["Default Profile", "默认配置"],
    ["Port Range Start", "端口范围起始值"],
    ["Accent Color", "强调色"],
    ["Image Understanding", "图像理解"],
    ["Video Understanding", "视频理解"],
    ["Link Understanding", "链接理解"],
    ["Max Bytes", "最大字节数"],
    ["Max Chars", "最大字符数"],
    ["Attachment Policy", "附件策略"],
    ["Max Links", "最大链接数"],
    ["Shared Models", "共享模型"],
    ["Tool Profile", "工具配置档"],
    ["Allowlist Additions", "允许列表附加项"],
    ["Policy by Provider", "按提供商划分的策略"],
    ["Workspace-Only", "仅工作区"],
    ["History Size", "历史大小"],
    ["Global Circuit Breaker Threshold", "全局熔断阈值"],
    ["Repeat Detection", "重复检测"],
    ["No-Progress Detection", "无进展检测"],
    ["Ping-Pong Detection", "乒乓检测"],
    ["Session Tools Visibility", "会话工具可见性"],
    ["Notify On Exit", "退出时通知"],
    ["Notify On Empty Success", "空成功时通知"],
    ["Running Notice", "运行提示"],
    ["Exec Host", "执行主机"],
    ["Exec Security", "执行安全"],
    ["Exec Ask", "执行询问"],
    ["Node Binding", "节点绑定"],
    ["Agent-to-Agent", "智能体到智能体"],
    ["Target Allowlist", "目标允许列表"],
    ["??????????????????????????????????????????????????????????????????????????????????????????????????????", "高权限访问规则"],
    ["Command ??????????????????????????????????????????????????????????????????????????????????????????????????????", "命令高权限访问规则"],
    ["Elevated Tool Access", "高权限工具访问"],
    ["Allow Rules", "允许规则"],
    ["Subagent Tool Policy", "子智能体工具策略"],
    ["Sandbox Tool Policy", "沙箱工具策略"],
    ["PATH Prepend", "PATH 前置"],
    ["Safe Bin Trusted Dirs", "安全二进制受信任目录"],
    ["Safe Bins", "安全二进制"],
    ["Approval Forwarding", "审批转发"],
    ["Forward Exec Approvals", "转发执行审批"],
    ["Agent Filter", "智能体筛选"],
    ["Session Filter", "会话筛选"],
    ["Account ID", "账户 ID"],
    ["Thread ID", "线程 ID"],
    ["Cross-Context", "跨上下文"],
    ["Marker Prefix", "标记前缀"],
    ["Marker Suffix", "标记后缀"],
    ["Message Broadcast", "消息广播"],
    ["Web Search", "Web 搜索"],
    ["Max Results", "最大结果数"],
    ["Cache TTL", "缓存 TTL"],
    ["Search Mode", "搜索模式"],
    ["Search Model", "搜索模型"],
    ["API Key", "API 密钥"],
    ["Working Directory", "工作目录"],
    ["Working Directory", "工作目录"],
    ["ACP Runtime", "ACP 运行时"],
    ["ACP Harness Agent", "ACP 宿主智能体"],
    ["ACP Backend", "ACP 后端"],
    ["ACP Mode", "ACP 模式"],
    ["Service Name", "服务名称"],
    ["Flush Interval", "刷新间隔"],
    ["Warning Threshold", "警告阈值"],
    ["Critical Threshold", "严重阈值"],
    ["Rate Limit", "速率限制"],
    ["Tailscale", "Tailscale"],
    ["Allowlist", "允许列表"],
    ["Denylist", "拒绝列表"],
    ["Identity Avatar", "身份头像"],
    ["Skill Filter", "技能过滤器"],
    ["Agent Runtime", "智能体运行时"],
    ["Defaults", "默认值"],
    ["Enabled", "已启用"],
    ["Version", "版本"],
    ["Timestamp", "时间戳"],
    ["Command", "命令"],
    ["Timeout", "超时"],
    ["Interval", "间隔"],
    ["Path", "路径"],
    ["Mode", "模式"],
    ["State", "状态"],
    ["Gateway", "网关"],
    ["Environment", "环境"],
    ["Browser", "浏览器"],
    ["Diagnostics", "诊断"],
    ["Logging", "日志记录"],
    ["Agents", "智能体"],
    ["Agent", "智能体"],
    ["Tools", "工具"],
    ["Tool", "工具"],
    ["Session", "会话"],
    ["Approval", "审批"],
    ["Target", "目标"],
    ["Provider", "提供商"],
    ["Headers", "请求头"],
    ["Protocol", "协议"],
    ["Metrics", "指标"],
    ["Traces", "追踪"],
    ["Logs", "日志"],
    ["Files", "文件"],
    ["Prompt", "提示词"],
    ["(ms)", "（毫秒）"],
    ["(min)", "（分钟）"],
    ["(hours)", "（小时）"],
    ["(sec)", "（秒）"],
  ];
  const ORDERED_CONFIG_LABEL_REPLACEMENTS = [...CONFIG_LABEL_REPLACEMENTS].toSorted(
    (a, b) => b[0].length - a[0].length,
  );
  const SKIP_SELECTORS = [
    ".chat-text",
    ".chat-thinking",
    ".chat-tool-card__inline",
    ".chat-tool-card__preview",
    ".code-block",
  ];

  function normalizeWhitespace(input) {
    return String(input).replace(/\s+/g, " ").trim();
  }

  function translateExact(input) {
    return EXACT_TRANSLATIONS.get(normalizeWhitespace(input)) ?? null;
  }

  function translateDynamic(input) {
    const patterns = [
      [/^Last refresh:\s*(.+)$/i, (_, rest) => `上次刷新：${translateText(rest)}`],
      [/^Workspace:\s*(.+)$/i, (_, rest) => `工作区：${rest}`],
      [/^Subagent:\s*(.+)$/i, (_, rest) => `子代理：${rest}`],
      [/^Cron Job:\s*(.+)$/i, (_, rest) => `定时任务：${rest}`],
      [/^Cron:\s*(.+)$/i, (_, rest) => `定时任务：${rest}`],
      [/^Days:\s*(.+)$/i, (_, rest) => `天：${translateText(rest)}`],
      [/^Hours:\s*(.+)$/i, (_, rest) => `小时：${translateText(rest)}`],
      [/^Session:\s*(.+)$/i, (_, rest) => `会话：${rest}`],
      [/^Store:\s*(.+)$/i, (_, rest) => `存储：${rest}`],
      [/^File:\s*(.+)$/i, (_, rest) => `文件：${rest}`],
      [/^Last used:\s*(.+)$/i, (_, rest) => `上次使用：${translateText(rest)}`],
      [/^Last input\s+(.+)$/i, (_, rest) => `最近输入 ${rest}`],
      [/^Reason\s+(.+)$/i, (_, rest) => `原因 ${rest}`],
      [/^role:\s*(.+)$/i, (_, rest) => `角色：${rest}`],
      [/^roles:\s*(.+)$/i, (_, rest) => `角色：${rest}`],
      [/^scopes:\s*(.+)$/i, (_, rest) => `范围：${rest}`],
      [/^(\d+)\s+scopes$/i, (_, count) => `${count} 个范围`],
      [/^Tokens:\s*none$/i, () => "令牌：无"],
      [/^uses default \((.+)\)$/i, (_, rest) => `使用默认（${String(rest).toLowerCase() === "any" ? "任意" : rest}）`],
      [/^Using default \((.+)\)\.$/i, (_, rest) => `使用默认值（${String(rest).toLowerCase() === "on" ? "开启" : String(rest).toLowerCase() === "off" ? "关闭" : rest}）。`],
      [/^Override \((.+)\)\.$/i, (_, rest) => `覆盖（${String(rest).toLowerCase() === "on" ? "开启" : String(rest).toLowerCase() === "off" ? "关闭" : rest}）。`],
      [/^Default:\s*(.+)\.$/i, (_, rest) => `默认值：${rest}。`],
      [/^override:\s*(.+)$/i, (_, rest) => `覆盖：${rest}`],
      [/^requested\s+(.+)\s+·\s+repair$/i, (_, rest) => `请求于 ${rest} · 修复`],
      [/^(\d+)\s+configured\.$/i, (_, count) => `已配置 ${count} 个。`],
      [/^(\d+)\s+unsaved changes$/i, (_, count) => `${count} 项未保存更改`],
      [/^View\s+(\d+)\s+pending changes$/i, (_, count) => `查看 ${count} 项待应用更改`],
      [/^Inherit default \((.+)\)$/i, (_, rest) => `继承默认值（${rest}）`],
      [/^(\d+)\s+days$/i, (_, count) => `${count} 天`],
      [/^(\d+)\s+hours$/i, (_, count) => `${count} 小时`],
      [/^(\d+)\s+msgs$/i, (_, count) => `${count} 条消息`],
      [/^At\s+(.+)$/i, (_, rest) => `在 ${rest}`],
      [/^Every\s+(.+)$/i, (_, rest) => `每 ${rest}`],
      [/^(\d+)\s+shown$/i, (_, count) => `显示 ${count} 项`],
      [/^(\d+)\/(\d+)\s+enabled\.$/i, (_, enabled, total) => `已启用 ${enabled}/${total} 项。`],
      [/^(\d+)\s+shown · (\d+)\s+total$/i, (_, shown, total) => `显示 ${shown} 项 · 共 ${total} 项`],
      [/^(\d+)\s+of\s+(\d+)\s+sessions match$/i, (_, matched, total) => `匹配 ${matched} / ${total} 个会话`],
      [/^(\d+)\s+of\s+(\d+)\s+\(timeline filtered\)$/i, (_, shown, total) => `${shown} / ${total}（时间线已筛选）`],
      [/^(\d+)\s+sessions in range$/i, (_, total) => `范围内有 ${total} 个会话`],
      [/^(\d+)\s+critical$/i, (_, total) => `${total} 个严重问题`],
      [/^(\d+)\s+warnings$/i, (_, total) => `${total} 条警告`],
      [/^(\d+)\s+info$/i, (_, total) => `${total} 条信息`],
      [/^(.+)\s+avg$/i, (_, value) => `平均 ${value}`],
      [/^(\d+)\s+errors$/i, (_, count) => `${count} 个错误`],
      [/^Export\s+filtered$/i, () => "导出已筛选内容"],
      [/^Export\s+visible$/i, () => "导出可见内容"],
      [/^Log output truncated; showing latest chunk\.$/i, () => "日志输出已截断；当前显示最新一段。"],
      [/^Total:\s*(.+)$/i, (_, rest) => `总计：${rest}`],
      [/^Missing:\s*(.+)$/i, (_, rest) => `缺失：${rest}`],
      [/^Reason:\s*(.+)$/i, (_, rest) => `原因：${rest}`],
      [/^Security audit:\s*(.+)\.\s+Run\s+openclaw security audit --deep for details\.$/i, (_, rest) => {
        const translatedRest = String(rest)
          .split(" · ")
          .map((part) => translateText(part))
          .join(" · ");
        return `安全审计：${translatedRest}。运行 openclaw security audit --deep 查看详情。`;
      }],
      [/^\+(\d+)\s+more$/i, (_, count) => `另有 ${count} 项`],
      [/^(Output|Input|Cache Write|Cache Read):\s*(.+)$/i, (_, label, rest) => {
        const translatedLabel = translateText(label);
        return `${translatedLabel}：${rest}`;
      }],
      [
        /^Delete session "(.+)"\?\s+Deletes the session entry and archives its transcript\.$/i,
        (_, sessionKey) => `要删除会话“${sessionKey}”吗？\n\n这会删除该会话条目并归档其转录记录。`,
      ],
      [/^Revoke token for (.+) \((.+)\)\?$/i, (_, deviceId, role) => {
        return `要撤销 ${deviceId}（${role}）的令牌吗？`;
      }],
      [/^Profile update failed \((.+)\)$/i, (_, status) => `资料更新失败（${status}）`],
      [/^Profile import failed \((.+)\)$/i, (_, status) => `资料导入失败（${status}）`],
      [/^Profile update failed:\s*(.+)$/i, (_, message) => `资料更新失败：${message}`],
      [/^Profile import failed:\s*(.+)$/i, (_, message) => `资料导入失败：${message}`],
    ];

    for (const [pattern, replacer] of patterns) {
      if (!pattern.test(input)) {
        continue;
      }
      return input.replace(pattern, replacer);
    }
    return null;
  }

  function looksLikeConfigHelpText(input) {
    if (CONFIG_HELP_TRANSLATIONS.has(input)) {
      return true;
    }
    return (
      input.length > 90 &&
      /[.?!]/.test(input) &&
      /(OpenClaw|gateway|runtime|startup|environment|config|diagnostics|logging|wizard|auth|shell|profile|debug|production)/i.test(
        input,
      )
    );
  }

  function translateConfigHelpText(input) {
    return CONFIG_HELP_TRANSLATIONS.get(input) ?? null;
  }

  function looksLikeConfigLabel(input) {
    if (
      /(Config|Gateway|Agent|Agents|Tool|Tools|Search|Update|Environment|OpenTelemetry|CLI|Browser|Exec|Approval|Cross-Context|Remote|Cache|Trace|Diagnostics|Logging|Wizard|Identity|Runtime|Control UI|Tailscale|Understanding|Session|Channel|HTTP|TLS|CDP|Profile|Binding|Bindings|Metadata|Discovery|Broadcast|Audio|Plugins|Hooks|Messages|Authentication|Commands|Variables|Log)/.test(
        input,
      )
    ) {
      return true;
    }
    return /^[A-Za-z0-9+._/-]+(?:[ ():/-][A-Za-z0-9+._/-]+)+$/.test(input);
  }

  function translateConfigLabel(input) {
    if (!looksLikeConfigLabel(input)) {
      return null;
    }
    let output = input;
    let changed = false;
    for (const [source, target] of ORDERED_CONFIG_LABEL_REPLACEMENTS) {
      if (!output.includes(source)) {
        continue;
      }
      const replaced = replaceConfigPhrase(output, source, target);
      if (replaced !== output) {
        output = replaced;
        changed = true;
      }
    }
    if (!changed || output === input) {
      return null;
    }
    return output.replace(/\s+/g, " ").trim();
  }

  function isWordChar(char) {
    return typeof char === "string" && /[A-Za-z0-9]/.test(char);
  }

  function escapeRegExp(input) {
    return input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function replaceConfigPhrase(text, source, target) {
    const startsWithWord = isWordChar(source[0] ?? "");
    const endsWithWord = isWordChar(source[source.length - 1] ?? "");
    const leftBoundary = startsWithWord ? "(^|[^A-Za-z0-9])" : "";
    const rightBoundary = endsWithWord ? "(?=$|[^A-Za-z0-9])" : "";
    const pattern = new RegExp(`${leftBoundary}${escapeRegExp(source)}${rightBoundary}`, "g");
    if (!pattern.test(text)) {
      return text;
    }
    pattern.lastIndex = 0;
    return text.replace(pattern, (...args) => {
      if (startsWithWord) {
        const leading = args[1] ?? "";
        return `${leading}${target}`;
      }
      return target;
    });
  }

  function preserveEdgeWhitespace(original, translated) {
    const leading = original.match(/^\s*/)?.[0] ?? "";
    const trailing = original.match(/\s*$/)?.[0] ?? "";
    return `${leading}${translated}${trailing}`;
  }

  function translateText(input) {
    const original = String(input);
    const trimmed = normalizeWhitespace(original);
    if (!trimmed) {
      return original;
    }
    const exact = translateExact(trimmed);
    if (exact) {
      return preserveEdgeWhitespace(original, exact);
    }
    const dynamic = translateDynamic(trimmed);
    if (dynamic) {
      return preserveEdgeWhitespace(original, dynamic);
    }
    const configHelp = translateConfigHelpText(trimmed);
    if (configHelp) {
      return preserveEdgeWhitespace(original, configHelp);
    }
    if (looksLikeConfigHelpText(trimmed)) {
      return original;
    }
    const configLabel = translateConfigLabel(trimmed);
    if (configLabel) {
      return preserveEdgeWhitespace(original, configLabel);
    }
    return original;
  }

  function translateAttribute(name, value) {
    if (!ATTRIBUTE_NAMES.has(String(name).toLowerCase())) {
      return value;
    }
    return translateText(value);
  }

  function shouldSkipElement(element) {
    if (!element) {
      return true;
    }
    if (SKIP_TAGS.has(element.tagName)) {
      return true;
    }
    return SKIP_SELECTORS.some((selector) => element.closest(selector));
  }

  function translateTextNode(node) {
    if (!node || !node.nodeValue) {
      return;
    }
    const parent = node.parentElement;
    if (shouldSkipElement(parent)) {
      return;
    }
    const translated = translateText(node.nodeValue);
    if (translated !== node.nodeValue) {
      node.nodeValue = translated;
    }
  }

  function translateElementAttributes(element) {
    if (!element || shouldSkipElement(element)) {
      return;
    }
    for (const attr of ATTRIBUTE_NAMES) {
      const value = element.getAttribute(attr);
      if (!value) {
        continue;
      }
      const translated = translateAttribute(attr, value);
      if (translated !== value) {
        element.setAttribute(attr, translated);
      }
    }
  }

  function translateRoot(root) {
    if (!root) {
      return;
    }
    if (root.nodeType === Node.TEXT_NODE) {
      translateTextNode(root);
      return;
    }
    if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_NODE) {
      return;
    }
    const walker = document.createTreeWalker(root, SHOW_TEXT);
    let currentNode = walker.nextNode();
    while (currentNode) {
      translateTextNode(currentNode);
      currentNode = walker.nextNode();
    }
    if (root.querySelectorAll) {
      for (const element of root.querySelectorAll("*")) {
        translateElementAttributes(element);
      }
    }
  }

  function isOpenClawPage() {
    const title = document.title || "";
    if (/OpenClaw/i.test(title)) {
      return true;
    }
    const text = document.body?.textContent || "";
    return /OpenClaw|Cron Jobs|Gateway Token|Main Session/i.test(text);
  }

  function patchConfirm() {
    const originalConfirm = window.confirm?.bind(window);
    if (typeof originalConfirm !== "function") {
      return;
    }
    window.confirm = function patchedConfirm(message) {
      return originalConfirm(translateText(String(message ?? "")));
    };
  }

  function translateDocument() {
    if (!isOpenClawPage()) {
      return;
    }
    document.title = translateText(document.title);
    translateRoot(document.body);
  }

  function startObserver() {
    if (!isOpenClawPage() || typeof MutationObserver !== "function") {
      return;
    }
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "characterData" && mutation.target) {
          translateRoot(mutation.target);
        }
        for (const node of mutation.addedNodes) {
          translateRoot(node);
        }
        if (mutation.type === "attributes" && mutation.target instanceof Element) {
          translateElementAttributes(mutation.target);
        }
      }
    });
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: Array.from(ATTRIBUTE_NAMES),
    });
  }

  const api = {
    translateText,
    translateAttribute,
    translateDocument,
    isOpenClawPage,
  };

  window.__OPENCLAW_ZH_CN__ = api;

  patchConfirm();

  if (document.body) {
    translateDocument();
    startObserver();
  } else if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      () => {
        translateDocument();
        startObserver();
      },
      { once: true },
    );
  } else {
    translateDocument();
    startObserver();
  }
})();

