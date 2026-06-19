/* @ds-bundle: {"format":3,"namespace":"StockbookDesignSystem_8ebe69","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/data/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data/Avatar.jsx"},{"name":"Progress","sourcePath":"components/data/Progress.jsx"},{"name":"Skeleton","sourcePath":"components/data/Progress.jsx"},{"name":"Divider","sourcePath":"components/data/Progress.jsx"},{"name":"Tag","sourcePath":"components/data/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Message","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Empty","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Radio","sourcePath":"components/forms/Checkbox.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Switch","sourcePath":"components/forms/Checkbox.jsx"},{"name":"FieldFrame","sourcePath":"components/forms/Input.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"TextArea","sourcePath":"components/forms/TextArea.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Segmented","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Tabs.jsx"},{"name":"PostCard","sourcePath":"components/stockbook/PostCard.jsx"},{"name":"VotePill","sourcePath":"components/stockbook/VotePill.jsx"},{"name":"VerifiedBadge","sourcePath":"components/stockbook/VotePill.jsx"},{"name":"TickerChip","sourcePath":"components/stockbook/VotePill.jsx"},{"name":"FollowButton","sourcePath":"components/stockbook/VotePill.jsx"},{"name":"MarketStat","sourcePath":"components/stockbook/VotePill.jsx"},{"name":"FeedHeader","sourcePath":"ui_kits/stockbook/FeedHeader.jsx"},{"name":"FeedSidebar","sourcePath":"ui_kits/stockbook/FeedSidebar.jsx"},{"name":"StockbookFeed","sourcePath":"ui_kits/stockbook/StockbookFeed.jsx"}],"sourceHashes":{"components/core/Button.jsx":"d29c43367ddf","components/core/Icon.jsx":"52c2aa016d23","components/core/IconButton.jsx":"152fa15263c4","components/data/Avatar.jsx":"2ede836ef6a7","components/data/Progress.jsx":"4b2b1845e6c1","components/data/Tag.jsx":"2f0e70baaa51","components/feedback/Dialog.jsx":"7221a4d06cc4","components/forms/Checkbox.jsx":"09a8b63ff158","components/forms/Input.jsx":"e53ddea5fc83","components/forms/Select.jsx":"50ea09977ecc","components/forms/TextArea.jsx":"74bd890fa14e","components/navigation/Tabs.jsx":"1679e2779601","components/stockbook/PostCard.jsx":"9a987c838261","components/stockbook/VotePill.jsx":"5806c7d19464","ui_kits/stockbook/FeedData.jsx":"fe86c92a0e0d","ui_kits/stockbook/FeedHeader.jsx":"013a0ecc18eb","ui_kits/stockbook/FeedSidebar.jsx":"538b14a2bd03","ui_kits/stockbook/StockbookFeed.jsx":"9db4e95d3800"},"inlinedExternals":[],"unexposedExports":[{"name":"feedData","sourcePath":"ui_kits/stockbook/FeedData.jsx"},{"name":"fieldShadow","sourcePath":"components/forms/Input.jsx"}]} */

(() => {

const __ds_ns = (window.StockbookDesignSystem_8ebe69 = window.StockbookDesignSystem_8ebe69 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Icon.jsx
try { (() => {
/* Lucide icon paths (stroke-based, 24×24 viewBox) — the icon set used across
   Stockbook in both Figma and the codebase (lucide-react). */
const PATHS = {
  "chevron-down": ["m6 9 6 6 6-6"],
  "chevron-right": ["m9 18 6-6-6-6"],
  "chevron-up": ["m18 15-6-6-6 6"],
  "chevron-left": ["m15 18-6-6 6-6"],
  check: ["M20 6 9 17l-5-5"],
  x: ["M18 6 6 18", "m6 6 12 12"],
  plus: ["M5 12h14", "M12 5v14"],
  minus: ["M5 12h14"],
  search: ["m21 21-4.34-4.34", "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"],
  bell: ["M10.268 21a2 2 0 0 0 3.464 0", "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"],
  "arrow-big-up": ["M9 18v-6H5l7-7 7 7h-4v6H9z"],
  "arrow-big-down": ["M15 6v6h4l-7 7-7-7h4V6h6z"],
  "message-circle": ["M7.9 20A9 9 0 1 0 4 16.1L2 22Z"],
  "repeat-2": ["m2 9 3-3 3 3", "M13 18H7a2 2 0 0 1-2-2V6", "m22 15-3 3-3-3", "M11 6h6a2 2 0 0 1 2 2v10"],
  share: ["M12 2v13", "m16 6-4-4-4 4", "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"],
  "chart-column": ["M3 3v16a2 2 0 0 0 2 2h16", "M18 17V9", "M13 17V5", "M8 17v-3"],
  "trending-up": ["M16 7h6v6", "m22 7-8.5 8.5-5-5L2 17"],
  "trending-down": ["M16 17h6v-6", "m22 17-8.5-8.5-5 5L2 7"],
  "user-round-plus": ["M2 21a8 8 0 0 1 13.292-6", "M19 16v6", "M22 19h-6", "M10 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"],
  "user-round-check": ["M2 21a8 8 0 0 1 13.292-6", "m16 19 2 2 4-4", "M10 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"],
  "shield-check": ["M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1 1 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", "m9 12 2 2 4-4"],
  "badge-check": ["M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z", "m9 12 2 2 4-4"],
  eye: ["M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0", "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"],
  ellipsis: ["M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z", "M20 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z", "M6 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"],
  info: ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z", "M12 16v-4", "M12 8h.01"],
  "circle-check": ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z", "m9 12 2 2 4-4"],
  "circle-alert": ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z", "M12 8v4", "M12 16h.01"],
  "triangle-alert": ["m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3", "M12 9v4", "M12 17h.01"],
  "circle-x": ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z", "m15 9-6 6", "m9 9 6 6"],
  "lock-keyhole": ["M12 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z", "M5 10h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z", "M8 10V7a4 4 0 1 1 8 0v3"],
  sparkles: ["M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"],
  flame: ["M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"],
  users: ["M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", "M16 3.128a4 4 0 0 1 0 7.744", "M22 21v-2a4 4 0 0 0-3-3.87", "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"],
  crown: ["M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.735H5.81a1 1 0 0 1-.957-.735L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z", "M5 21h14"],
  "image-plus": ["M16 5h6", "M19 2v6", "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5", "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", "M9 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"],
  "pen-line": ["M12 20h9", "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"],
  "calendar-days": ["M8 2v4", "M16 2v4", "M21 6v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z", "M3 10h18", "M8 14h.01", "M12 14h.01", "M16 14h.01", "M8 18h.01", "M12 18h.01", "M16 18h.01"],
  bookmark: ["m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"],
  loader: ["M12 2v4", "m16.2 7.8 2.9-2.9", "M18 12h4", "m16.2 16.2 2.9 2.9", "M12 18v4", "m4.9 19.1 2.9-2.9", "M2 12h4", "m4.9 4.9 2.9 2.9"]
};
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  color = "currentColor",
  style,
  className
}) {
  const paths = PATHS[name] || PATHS["circle-alert"];
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flexShrink: 0,
      ...style
    },
    className: className,
    "aria-hidden": "true"
  }, paths.map(function (d, i) {
    return /*#__PURE__*/React.createElement("path", {
      key: i,
      d: d
    });
  }));
}
Icon.names = Object.keys(PATHS);
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const {
  useState
} = React;
const SIZES = {
  xs: {
    h: 24,
    r: 4,
    px: 6,
    font: "11px/16px",
    icon: 14,
    gap: 4
  },
  sm: {
    h: 28,
    r: 8,
    px: 8,
    font: "12px/16px",
    icon: 16,
    gap: 4
  },
  md: {
    h: 32,
    r: 8,
    px: 10,
    font: "12px/16px",
    icon: 16,
    gap: 4
  },
  lg: {
    h: 40,
    r: 12,
    px: 14,
    font: "14px/20px",
    icon: 20,
    gap: 6
  }
};
const INTENT = {
  none: {
    solid: "var(--action-primary)",
    solidHover: "var(--action-primary-hover)",
    solidPressed: "var(--gray-900)",
    text: "var(--text-primary)",
    tint: "var(--action-subtle-hover)",
    tintPressed: "var(--action-subtle-pressed)"
  },
  danger: {
    solid: "var(--action-danger)",
    solidHover: "var(--action-danger-hover)",
    solidPressed: "var(--action-danger-pressed)",
    text: "var(--text-danger)",
    tint: "var(--surface-danger-subtle)",
    tintPressed: "rgba(239,68,68,0.1216)"
  },
  interactive: {
    solid: "var(--action-interactive)",
    solidHover: "var(--action-interactive-hover)",
    solidPressed: "var(--action-interactive-pressed)",
    text: "var(--text-interactive)",
    tint: "var(--surface-interactive-subtle)",
    tintPressed: "rgba(43,89,199,0.1216)"
  }
};
function Button({
  children,
  type = "primary",
  intent = "none",
  size = "md",
  disabled = false,
  loading = false,
  round = false,
  block = false,
  iconLeft,
  iconRight,
  onClick,
  style,
  title
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const s = SIZES[size] || SIZES.md;
  const c = INTENT[intent] || INTENT.none;
  const active = !disabled && !loading;
  let bg = "transparent";
  let color = c.text;
  let shadow = "none";
  if (type === "primary") {
    bg = press && active ? c.solidPressed : hover && active ? c.solidHover : c.solid;
    color = "var(--text-on-action)";
    if (disabled) {
      bg = "var(--action-disabled)";
      color = "rgba(255,255,255,0.9)";
    }
  } else if (type === "secondary") {
    bg = press && active ? c.tintPressed : hover && active ? c.tint : "var(--surface-container)";
    shadow = "inset 0 0 0 1px " + (intent === "none" ? "var(--border-default)" : disabled ? "var(--border-disabled)" : c.solid === "var(--action-danger)" ? "var(--border-danger)" : intent === "interactive" ? "var(--border-interactive)" : "var(--border-default)");
    if (disabled) color = "var(--text-disabled)";
  } else if (type === "ghost") {
    bg = press && active ? c.tintPressed : hover && active ? c.tint : "transparent";
    if (disabled) color = "var(--text-disabled)";
  } else {
    /* plain */
    if (hover && active) color = intent === "none" ? "var(--text-tertiary)" : c.solidHover;
    if (disabled) color = "var(--text-disabled)";
  }
  const isPlain = type === "plain";
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    title: title,
    disabled: !active,
    onClick: active ? onClick : undefined,
    onMouseEnter: function () {
      setHover(true);
    },
    onMouseLeave: function () {
      setHover(false);
      setPress(false);
    },
    onMouseDown: function () {
      setPress(true);
    },
    onMouseUp: function () {
      setPress(false);
    },
    style: {
      display: block ? "flex" : "inline-flex",
      width: block ? "100%" : undefined,
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      height: isPlain ? "auto" : s.h,
      padding: isPlain ? 0 : "0 " + s.px + "px",
      border: "none",
      borderRadius: isPlain ? 0 : round ? 9999 : s.r,
      background: isPlain ? "transparent" : bg,
      boxShadow: isPlain ? "none" : shadow,
      color: color,
      font: "500 " + s.font + " var(--font-sans)",
      letterSpacing: "0.4px",
      cursor: active ? "pointer" : "not-allowed",
      opacity: disabled && type === "primary" ? 0.9 : 1,
      transition: "background var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)",
      whiteSpace: "nowrap",
      ...style
    }
  }, loading && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "loader",
    size: s.icon,
    style: {
      animation: "sb-spin 0.9s linear infinite"
    }
  }), !loading && iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.icon
  }), /*#__PURE__*/React.createElement("span", null, children), iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }), /*#__PURE__*/React.createElement("style", null, "@keyframes sb-spin{to{transform:rotate(360deg)}}"));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
const {
  useState
} = React;
const IB_SIZES = {
  xs: {
    h: 24,
    r: 4,
    icon: 14
  },
  sm: {
    h: 28,
    r: 8,
    icon: 16
  },
  md: {
    h: 32,
    r: 8,
    icon: 16
  },
  lg: {
    h: 40,
    r: 12,
    icon: 20
  }
};
function IconButton({
  icon,
  type = "ghost",
  intent = "none",
  size = "md",
  round = false,
  disabled = false,
  onClick,
  title,
  style
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const s = IB_SIZES[size] || IB_SIZES.md;
  const active = !disabled;
  const tint = intent === "danger" ? "var(--surface-danger-subtle)" : intent === "interactive" ? "var(--surface-interactive-subtle)" : "var(--action-subtle-hover)";
  const solid = intent === "danger" ? "var(--action-danger)" : intent === "interactive" ? "var(--action-interactive)" : "var(--action-primary)";
  const fg = intent === "danger" ? "var(--icon-danger)" : intent === "interactive" ? "var(--icon-interactive)" : "var(--icon-secondary)";
  let bg = "transparent";
  let color = disabled ? "var(--icon-disabled)" : fg;
  let shadow = "none";
  if (type === "primary") {
    bg = disabled ? "var(--action-disabled)" : solid;
    color = "var(--icon-on-action)";
    if (hover && active) bg = intent === "none" ? "var(--action-primary-hover)" : solid;
  } else if (type === "secondary") {
    bg = hover && active ? tint : "var(--surface-container)";
    shadow = "inset 0 0 0 1px var(--border-default)";
  } else {
    bg = press && active ? "var(--action-subtle-pressed)" : hover && active ? tint : "transparent";
  }
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    title: title,
    "aria-label": title || icon,
    disabled: disabled,
    onClick: active ? onClick : undefined,
    onMouseEnter: function () {
      setHover(true);
    },
    onMouseLeave: function () {
      setHover(false);
      setPress(false);
    },
    onMouseDown: function () {
      setPress(true);
    },
    onMouseUp: function () {
      setPress(false);
    },
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: s.h,
      height: s.h,
      padding: 0,
      border: "none",
      borderRadius: round ? 9999 : s.r,
      background: bg,
      boxShadow: shadow,
      color: color,
      cursor: active ? "pointer" : "not-allowed",
      transition: "background var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data/Avatar.jsx
try { (() => {
const AV_SIZES = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 64,
  "2xl": 80
};
const AV_FONTS = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 22,
  "2xl": 28
};
const PALETTE = ["var(--blue-500)", "var(--green-600)", "var(--orange-500)", "var(--lavender-500)", "var(--sky-600)", "var(--gray-600)"];
function initials(name) {
  if (!name) return "?";
  const parts = name.trim().split(/\s+/);
  const last = parts[parts.length - 1][0] || "";
  const first = parts.length > 1 ? parts[0][0] : "";
  return (first + last).toUpperCase();
}
function Avatar({
  name,
  src,
  size = "md",
  shape = "circle",
  style
}) {
  const px = AV_SIZES[size] || AV_SIZES.md;
  const hue = name ? PALETTE[(name.length + (name.charCodeAt(0) || 0)) % PALETTE.length] : "var(--gray-400)";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: px,
      height: px,
      flexShrink: 0,
      borderRadius: shape === "square" ? Math.round(px / 4) : 9999,
      background: src ? "var(--surface-muted)" : hue,
      color: "#fff",
      font: "600 " + (AV_FONTS[size] || 14) + "px/1 var(--font-sans)",
      overflow: "hidden",
      userSelect: "none",
      boxShadow: "inset 0 0 0 1px rgba(17,22,28,0.08)",
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name || "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials(name));
}
function Badge({
  children,
  count,
  dot = false,
  color = "danger",
  max = 99,
  style
}) {
  const c = color === "danger" ? "var(--red-500)" : color === "success" ? "var(--green-500)" : color === "interactive" ? "var(--blue-500)" : "var(--gray-500)";
  const shown = typeof count === "number" && count > max ? max + "+" : count;
  const badge = dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 9999,
      background: c,
      boxShadow: "0 0 0 2px var(--surface-container)"
    }
  }) : count !== undefined && count !== 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 16,
      height: 16,
      padding: "0 4px",
      borderRadius: 9999,
      background: c,
      color: "#fff",
      font: "600 10px/1 var(--font-sans)",
      boxShadow: "0 0 0 2px var(--surface-container)",
      boxSizing: "border-box"
    }
  }, shown) : null;
  if (!children) return badge || /*#__PURE__*/React.createElement("span", null);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    }
  }, children, badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: dot ? 0 : -6,
      right: dot ? 0 : -6
    }
  }, badge));
}
Object.assign(__ds_scope, { Avatar, Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data/Progress.jsx
try { (() => {
function Progress({
  value = 0,
  max = 100,
  color = "default",
  height = 6,
  showLabel = false,
  style
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const c = color === "success" ? "var(--green-500)" : color === "danger" ? "var(--red-500)" : color === "warning" ? "var(--yellow-500)" : color === "interactive" ? "var(--blue-500)" : "var(--gray-900)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: height,
      borderRadius: 9999,
      background: "var(--alpha-100)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + "%",
      height: "100%",
      borderRadius: 9999,
      background: c,
      transition: "width var(--duration-slow) var(--ease-out)"
    }
  })), showLabel && /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      font: "var(--typo-label-md)",
      letterSpacing: "0.5px",
      color: "var(--text-secondary)",
      minWidth: 32,
      textAlign: "right"
    }
  }, Math.round(pct), "%"));
}
function Skeleton({
  width = "100%",
  height = 16,
  radius = 6,
  circle = false,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: circle ? height : width,
      height: height,
      borderRadius: circle ? 9999 : radius,
      background: "linear-gradient(90deg, var(--alpha-100) 25%, var(--alpha-50) 50%, var(--alpha-100) 75%)",
      backgroundSize: "200% 100%",
      animation: "sb-shimmer 1.4s ease infinite",
      ...style
    }
  }, /*#__PURE__*/React.createElement("style", null, "@keyframes sb-shimmer{from{background-position:200% 0}to{background-position:-200% 0}}"));
}
function Divider({
  vertical = false,
  margin,
  children,
  style
}) {
  if (vertical) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        alignSelf: "stretch",
        width: 1,
        background: "var(--border-subtle)",
        margin: margin !== undefined ? "0 " + margin + "px" : "0 8px",
        ...style
      }
    });
  }
  if (children) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        margin: (margin !== undefined ? margin : 16) + "px 0",
        ...style
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: "var(--border-subtle)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--typo-label-md)",
        letterSpacing: "0.5px",
        color: "var(--text-muted)"
      }
    }, children), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: "var(--border-subtle)"
      }
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--border-subtle)",
      margin: (margin !== undefined ? margin : 16) + "px 0",
      ...style
    }
  });
}
Object.assign(__ds_scope, { Progress, Skeleton, Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Progress.jsx", error: String((e && e.message) || e) }); }

// components/data/Tag.jsx
try { (() => {
const TAG_COLORS = {
  default: {
    light: "var(--alpha-100)",
    lightText: "var(--text-secondary)",
    solid: "var(--gray-400)"
  },
  brand: {
    light: "var(--surface-brand-subtle)",
    lightText: "var(--orange-600)",
    solid: "var(--orange-500)"
  },
  accent: {
    light: "var(--surface-accent-subtle)",
    lightText: "var(--lavender-500)",
    solid: "var(--lavender-500)"
  },
  interactive: {
    light: "var(--surface-interactive-subtle)",
    lightText: "var(--blue-500)",
    solid: "var(--blue-500)"
  },
  success: {
    light: "var(--surface-success-subtle)",
    lightText: "var(--green-600)",
    solid: "var(--green-500)"
  },
  warning: {
    light: "var(--surface-warning-subtle)",
    lightText: "var(--yellow-600)",
    solid: "var(--yellow-500)"
  },
  danger: {
    light: "var(--surface-danger-subtle)",
    lightText: "var(--red-600)",
    solid: "var(--red-500)"
  }
};
function Tag({
  children,
  color = "default",
  effect = "light",
  size = "md",
  rounded = false,
  icon,
  onRemove,
  style
}) {
  const c = TAG_COLORS[color] || TAG_COLORS.default;
  const solid = effect === "dark" || effect === "solid";
  const plain = effect === "plain";
  const h = size === "sm" ? 20 : 24;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      height: h,
      padding: onRemove ? "0 6px 0 8px" : "0 8px",
      borderRadius: rounded ? 9999 : "var(--radius-base)",
      background: solid ? c.solid : plain ? "transparent" : c.light,
      boxShadow: plain ? "inset 0 0 0 1px " + (color === "default" ? "var(--border-default)" : c.solid) : "none",
      color: solid ? "#fff" : c.lightText,
      font: "var(--typo-body-sm)",
      letterSpacing: "0.4px",
      whiteSpace: "nowrap",
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 12
  }), /*#__PURE__*/React.createElement("span", null, children), onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: onRemove,
    style: {
      display: "inline-flex",
      cursor: "pointer",
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 12
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
const {
  useState
} = React;
function Dialog({
  open,
  onClose,
  title,
  children,
  footer,
  width = 440,
  danger = false,
  confirmLabel,
  cancelLabel = "Huỷ",
  onConfirm,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: function (e) {
      if (e.target === e.currentTarget && onClose) onClose();
    },
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 100,
      background: "var(--surface-scrim)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: width,
      maxWidth: "100%",
      boxSizing: "border-box",
      background: "var(--surface-elevated)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--dialog-shadow)",
      padding: 24,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 12,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--typo-title-md-em)",
      letterSpacing: "0.15px",
      color: "var(--text-primary)"
    }
  }, title), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    size: "sm",
    title: "\u0110\xF3ng",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--typo-body-md)",
      letterSpacing: "0.25px",
      color: "var(--text-secondary)"
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 8,
      marginTop: 24
    }
  }, footer !== undefined ? footer : /*#__PURE__*/React.createElement(React.Fragment, null, onClose && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "secondary",
    onClick: onClose
  }, cancelLabel), confirmLabel && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    intent: danger ? "danger" : "none",
    onClick: onConfirm
  }, confirmLabel)))));
}
const MSG_KINDS = {
  info: {
    icon: "info",
    color: "var(--sky-600)",
    bg: "var(--surface-information-subtle)"
  },
  success: {
    icon: "circle-check",
    color: "var(--green-600)",
    bg: "var(--surface-success-subtle)"
  },
  warning: {
    icon: "triangle-alert",
    color: "var(--yellow-600)",
    bg: "var(--surface-warning-subtle)"
  },
  danger: {
    icon: "circle-alert",
    color: "var(--red-600)",
    bg: "var(--surface-danger-subtle)"
  }
};
function Message({
  kind = "info",
  children,
  onClose,
  solidSurface = false,
  style
}) {
  const k = MSG_KINDS[kind] || MSG_KINDS.info;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 8,
      padding: "10px 12px",
      borderRadius: "var(--radius-sm)",
      background: solidSurface ? "var(--surface-elevated)" : k.bg,
      boxShadow: solidSurface ? "var(--popover-shadow)" : "none",
      font: "var(--typo-body-md)",
      letterSpacing: "0.25px",
      color: "var(--text-primary)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: k.icon,
    size: 16,
    color: k.color,
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, children), onClose && /*#__PURE__*/React.createElement("span", {
    onClick: onClose,
    style: {
      cursor: "pointer",
      display: "inline-flex",
      color: "var(--icon-tertiary)",
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })));
}
function Tooltip({
  content,
  children,
  position = "top",
  style
}) {
  const [show, setShow] = useState(false);
  const pos = {};
  if (position === "top") {
    pos.bottom = "calc(100% + 6px)";
    pos.left = "50%";
    pos.transform = "translateX(-50%)";
  }
  if (position === "bottom") {
    pos.top = "calc(100% + 6px)";
    pos.left = "50%";
    pos.transform = "translateX(-50%)";
  }
  if (position === "left") {
    pos.right = "calc(100% + 6px)";
    pos.top = "50%";
    pos.transform = "translateY(-50%)";
  }
  if (position === "right") {
    pos.left = "calc(100% + 6px)";
    pos.top = "50%";
    pos.transform = "translateY(-50%)";
  }
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: function () {
      setShow(true);
    },
    onMouseLeave: function () {
      setShow(false);
    }
  }, children, show && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      zIndex: 60,
      whiteSpace: "nowrap",
      padding: "5px 8px",
      borderRadius: 6,
      background: "var(--surface-inverse)",
      color: "var(--text-inverse)",
      font: "var(--typo-body-sm)",
      letterSpacing: "0.4px",
      boxShadow: "var(--elevation-2)",
      pointerEvents: "none",
      ...pos
    }
  }, content));
}
function Empty({
  title = "Chưa có dữ liệu",
  description,
  action,
  icon = "search",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      padding: "40px 24px",
      textAlign: "center",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 48,
      height: 48,
      borderRadius: 9999,
      background: "var(--alpha-100)",
      color: "var(--icon-tertiary)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--typo-title-sm-em)",
      fontWeight: 600,
      letterSpacing: "0.1px",
      color: "var(--text-primary)",
      marginTop: 4
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--typo-body-md)",
      letterSpacing: "0.25px",
      color: "var(--text-muted)",
      maxWidth: 360
    }
  }, description), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, action));
}
Object.assign(__ds_scope, { Dialog, Message, Tooltip, Empty });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
const {
  useState
} = React;
function Checkbox({
  checked,
  defaultChecked = false,
  onChange,
  label,
  disabled = false,
  indeterminate = false,
  style
}) {
  const [inner, setInner] = useState(defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const active = on || indeterminate;
  return /*#__PURE__*/React.createElement("label", {
    onClick: function (e) {
      e.preventDefault();
      if (disabled) return;
      const next = !on;
      if (checked === undefined) setInner(next);
      if (onChange) onChange(next);
    },
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      cursor: disabled ? "not-allowed" : "pointer",
      userSelect: "none",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 16,
      height: 16,
      borderRadius: 4,
      boxSizing: "border-box",
      background: disabled ? active ? "var(--action-disabled)" : "var(--surface-muted)" : active ? "var(--action-primary)" : "var(--surface-container)",
      boxShadow: active ? "none" : "inset 0 0 0 1px var(--border-strong)",
      transition: "background var(--duration-fast) var(--ease-out)",
      color: "var(--icon-on-action)"
    }
  }, on && !indeterminate && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 12,
    strokeWidth: 3
  }), indeterminate && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "minus",
    size: 12,
    strokeWidth: 3
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--typo-body-md)",
      letterSpacing: "0.25px",
      color: disabled ? "var(--text-disabled)" : "var(--text-primary)"
    }
  }, label));
}
function Radio({
  checked,
  onChange,
  label,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    onClick: function (e) {
      e.preventDefault();
      if (!disabled && onChange) onChange(true);
    },
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      cursor: disabled ? "not-allowed" : "pointer",
      userSelect: "none",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: 9999,
      boxSizing: "border-box",
      border: checked ? "5px solid " + (disabled ? "var(--action-disabled)" : "var(--action-primary)") : "1px solid var(--border-strong)",
      background: "var(--surface-container)",
      transition: "border var(--duration-fast) var(--ease-out)"
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--typo-body-md)",
      letterSpacing: "0.25px",
      color: disabled ? "var(--text-disabled)" : "var(--text-primary)"
    }
  }, label));
}
function RadioGroup({
  options = [],
  value,
  onChange,
  direction = "row",
  gap = 16,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: direction,
      gap: gap,
      flexWrap: "wrap",
      ...style
    }
  }, options.map(function (o, i) {
    const v = o.value !== undefined ? o.value : o;
    return /*#__PURE__*/React.createElement(Radio, {
      key: i,
      label: o.label !== undefined ? o.label : o,
      checked: v === value,
      disabled: o.disabled,
      onChange: function () {
        if (onChange) onChange(v);
      }
    });
  }));
}
function Switch({
  checked,
  defaultChecked = false,
  onChange,
  label,
  disabled = false,
  size = "md",
  style
}) {
  const [inner, setInner] = useState(defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const w = size === "sm" ? 28 : 36;
  const h = size === "sm" ? 16 : 20;
  const knob = h - 4;
  return /*#__PURE__*/React.createElement("label", {
    onClick: function (e) {
      e.preventDefault();
      if (disabled) return;
      const next = !on;
      if (checked === undefined) setInner(next);
      if (onChange) onChange(next);
    },
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      cursor: disabled ? "not-allowed" : "pointer",
      userSelect: "none",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: w,
      height: h,
      borderRadius: 9999,
      boxSizing: "border-box",
      background: disabled ? "var(--action-disabled)" : on ? "var(--action-primary)" : "var(--gray-300)",
      transition: "background var(--duration-base) var(--ease-out)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      left: on ? w - knob - 2 : 2,
      width: knob,
      height: knob,
      borderRadius: 9999,
      background: "#fff",
      boxShadow: "0 1px 2px rgba(17,22,28,0.24)",
      transition: "left var(--duration-base) var(--ease-out)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--typo-body-md)",
      letterSpacing: "0.25px",
      color: disabled ? "var(--text-disabled)" : "var(--text-primary)"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox, Radio, RadioGroup, Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const {
  useState
} = React;
const FIELD_SIZES = {
  xs: {
    h: 24,
    r: 4,
    px: 6,
    font: "12px/16px",
    icon: 14
  },
  md: {
    h: 32,
    r: 8,
    px: 8,
    font: "14px/20px",
    icon: 16
  },
  lg: {
    h: 40,
    r: 12,
    px: 12,
    font: "14px/20px",
    icon: 20
  }
};
function fieldShadow(state) {
  if (state === "error") return "inset 0 0 0 1px var(--border-danger)";
  if (state === "focus") return "inset 0 0 0 1px var(--border-interactive), 0 0 0 3px rgba(43,89,199,0.12)";
  if (state === "hover") return "inset 0 0 0 1px var(--border-strong)";
  return "inset 0 0 0 1px var(--border-default)";
}
function FieldFrame({
  size = "md",
  error,
  disabled,
  focused,
  hovered,
  children,
  style
}) {
  const s = FIELD_SIZES[size] || FIELD_SIZES.md;
  const state = error ? "error" : focused ? "focus" : hovered ? "hover" : "default";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      height: s.h,
      padding: "0 " + s.px + "px",
      borderRadius: s.r,
      background: disabled ? "var(--surface-muted)" : "var(--surface-container)",
      boxShadow: fieldShadow(state),
      transition: "box-shadow var(--duration-fast) var(--ease-out)",
      ...style
    }
  }, children);
}
function Input({
  value,
  defaultValue,
  onChange,
  placeholder,
  size = "md",
  label,
  help,
  error,
  disabled = false,
  prefixIcon,
  suffixIcon,
  clearable = false,
  type = "text",
  style
}) {
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [inner, setInner] = useState(defaultValue || "");
  const val = value !== undefined ? value : inner;
  const s = FIELD_SIZES[size] || FIELD_SIZES.md;
  function handle(e) {
    if (value === undefined) setInner(e.target.value);
    if (onChange) onChange(e.target.value);
  }
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--typo-title-sm)",
      letterSpacing: "0.1px",
      marginBottom: 6,
      color: "var(--text-primary)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    onMouseEnter: function () {
      setHovered(true);
    },
    onMouseLeave: function () {
      setHovered(false);
    }
  }, /*#__PURE__*/React.createElement(FieldFrame, {
    size: size,
    error: !!error,
    disabled: disabled,
    focused: focused,
    hovered: hovered
  }, prefixIcon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: prefixIcon,
    size: s.icon,
    color: "var(--icon-tertiary)"
  }), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: val,
    placeholder: placeholder,
    disabled: disabled,
    onChange: handle,
    onFocus: function () {
      setFocused(true);
    },
    onBlur: function () {
      setFocused(false);
    },
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      font: "400 " + s.font + " var(--font-sans)",
      letterSpacing: "0.25px",
      color: disabled ? "var(--text-disabled)" : "var(--text-primary)",
      padding: 0
    }
  }), clearable && val && !disabled && /*#__PURE__*/React.createElement("span", {
    onMouseDown: function (e) {
      e.preventDefault();
      if (value === undefined) setInner("");
      if (onChange) onChange("");
    },
    style: {
      cursor: "pointer",
      display: "inline-flex",
      color: "var(--icon-tertiary)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "circle-x",
    size: s.icon
  })), suffixIcon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: suffixIcon,
    size: s.icon,
    color: "var(--icon-tertiary)"
  }))), (error || help) && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--typo-body-sm)",
      letterSpacing: "0.4px",
      marginTop: 4,
      color: error ? "var(--text-danger)" : "var(--text-muted)"
    }
  }, error || help));
}
Object.assign(__ds_scope, { fieldShadow, FieldFrame, Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const {
  useEffect,
  useRef,
  useState
} = React;
function Select({
  options = [],
  value,
  onChange,
  placeholder = "Chọn…",
  size = "md",
  label,
  disabled = false,
  style
}) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [inner, setInner] = useState(undefined);
  const ref = useRef(null);
  const val = value !== undefined ? value : inner;
  const selected = options.find(function (o) {
    return (o.value !== undefined ? o.value : o) === val;
  });
  const labelOf = function (o) {
    return o && o.label !== undefined ? o.label : o;
  };
  useEffect(function () {
    function close(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", close);
    return function () {
      document.removeEventListener("mousedown", close);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: "relative",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--typo-title-sm)",
      letterSpacing: "0.1px",
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    onClick: function () {
      if (!disabled) setOpen(!open);
    },
    onMouseEnter: function () {
      setHovered(true);
    },
    onMouseLeave: function () {
      setHovered(false);
    },
    style: {
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.FieldFrame, {
    size: size,
    disabled: disabled,
    focused: open,
    hovered: hovered
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: "var(--typo-body-md)",
      letterSpacing: "0.25px",
      color: disabled ? "var(--text-disabled)" : selected ? "var(--text-primary)" : "var(--text-muted)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, selected ? labelOf(selected) : placeholder), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    color: "var(--icon-tertiary)",
    style: {
      transform: open ? "rotate(180deg)" : "none",
      transition: "transform var(--duration-fast) var(--ease-out)"
    }
  }))), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      zIndex: 30,
      top: "calc(100% + 4px)",
      left: 0,
      right: 0,
      background: "var(--surface-elevated)",
      borderRadius: "var(--radius-sm)",
      boxShadow: "var(--popover-shadow)",
      padding: 4,
      maxHeight: 240,
      overflowY: "auto"
    }
  }, options.map(function (o, i) {
    const v = o.value !== undefined ? o.value : o;
    const isSel = v === val;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: function () {
        if (value === undefined) setInner(v);
        if (onChange) onChange(v);
        setOpen(false);
      },
      onMouseEnter: function (e) {
        e.currentTarget.style.background = "var(--action-subtle-hover)";
      },
      onMouseLeave: function (e) {
        e.currentTarget.style.background = "transparent";
      },
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 8,
        padding: "6px 8px",
        borderRadius: 6,
        cursor: "pointer",
        font: isSel ? "var(--typo-body-md-em)" : "var(--typo-body-md)",
        letterSpacing: "0.25px",
        color: "var(--text-primary)"
      }
    }, /*#__PURE__*/React.createElement("span", null, labelOf(o)), isSel && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check",
      size: 16,
      color: "var(--icon-interactive)"
    }));
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextArea.jsx
try { (() => {
const {
  useState
} = React;
function TextArea({
  value,
  defaultValue,
  onChange,
  placeholder,
  label,
  help,
  error,
  disabled = false,
  rows = 4,
  style
}) {
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [inner, setInner] = useState(defaultValue || "");
  const val = value !== undefined ? value : inner;
  const state = error ? "error" : focused ? "focus" : hovered ? "hover" : "default";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--typo-title-sm)",
      letterSpacing: "0.1px",
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("textarea", {
    value: val,
    rows: rows,
    placeholder: placeholder,
    disabled: disabled,
    onChange: function (e) {
      if (value === undefined) setInner(e.target.value);
      if (onChange) onChange(e.target.value);
    },
    onFocus: function () {
      setFocused(true);
    },
    onBlur: function () {
      setFocused(false);
    },
    onMouseEnter: function () {
      setHovered(true);
    },
    onMouseLeave: function () {
      setHovered(false);
    },
    style: {
      display: "block",
      width: "100%",
      boxSizing: "border-box",
      padding: "8px 12px",
      border: "none",
      outline: "none",
      resize: "vertical",
      borderRadius: "var(--control-r-lg)",
      background: disabled ? "var(--surface-muted)" : "var(--surface-container)",
      boxShadow: __ds_scope.fieldShadow(state),
      font: "var(--typo-body-md)",
      letterSpacing: "0.25px",
      fontFamily: "var(--font-sans)",
      color: disabled ? "var(--text-disabled)" : "var(--text-primary)",
      transition: "box-shadow var(--duration-fast) var(--ease-out)"
    }
  }), (error || help) && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--typo-body-sm)",
      letterSpacing: "0.4px",
      marginTop: 4,
      color: error ? "var(--text-danger)" : "var(--text-muted)"
    }
  }, error || help));
}
Object.assign(__ds_scope, { TextArea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextArea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
const {
  useState
} = React;
function Tabs({
  items = [],
  value,
  onChange,
  size = "md",
  style
}) {
  const [inner, setInner] = useState(items.length ? items[0].value !== undefined ? items[0].value : items[0] : undefined);
  const val = value !== undefined ? value : inner;
  const font = size === "lg" ? "var(--typo-title-md)" : "var(--typo-title-sm)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      boxShadow: "inset 0 -1px 0 var(--border-subtle)",
      ...style
    }
  }, items.map(function (it, i) {
    const v = it.value !== undefined ? it.value : it;
    const lbl = it.label !== undefined ? it.label : it;
    const active = v === val;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      onClick: function () {
        if (value === undefined) setInner(v);
        if (onChange) onChange(v);
      },
      onMouseEnter: function (e) {
        if (!active) e.currentTarget.style.color = "var(--text-primary)";
      },
      onMouseLeave: function (e) {
        if (!active) e.currentTarget.style.color = "var(--text-muted)";
      },
      style: {
        appearance: "none",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: size === "lg" ? "10px 12px" : "8px 10px",
        font: font,
        fontWeight: active ? 600 : 500,
        letterSpacing: "0.1px",
        color: active ? "var(--text-primary)" : "var(--text-muted)",
        boxShadow: active ? "inset 0 -2px 0 var(--gray-950)" : "none",
        transition: "color var(--duration-fast) var(--ease-out)"
      }
    }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 16
    }), /*#__PURE__*/React.createElement("span", null, lbl), it.count !== undefined && /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--typo-label-sm)",
        letterSpacing: "0.5px",
        padding: "1px 6px",
        borderRadius: 9999,
        background: active ? "var(--alpha-200)" : "var(--alpha-100)",
        color: "var(--text-secondary)"
      }
    }, it.count));
  }));
}
function Segmented({
  items = [],
  value,
  onChange,
  size = "md",
  block = false,
  style
}) {
  const [inner, setInner] = useState(items.length ? items[0].value !== undefined ? items[0].value : items[0] : undefined);
  const val = value !== undefined ? value : inner;
  const h = size === "sm" ? 24 : 28;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: block ? "flex" : "inline-flex",
      gap: 2,
      padding: 2,
      borderRadius: "var(--radius-sm)",
      background: "var(--alpha-100)",
      ...style
    }
  }, items.map(function (it, i) {
    const v = it.value !== undefined ? it.value : it;
    const lbl = it.label !== undefined ? it.label : it;
    const active = v === val;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      onClick: function () {
        if (value === undefined) setInner(v);
        if (onChange) onChange(v);
      },
      style: {
        appearance: "none",
        border: "none",
        cursor: "pointer",
        flex: block ? 1 : undefined,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        height: h,
        padding: "0 10px",
        borderRadius: 6,
        background: active ? "var(--surface-container)" : "transparent",
        boxShadow: active ? "0 1px 2px rgba(17,22,28,0.08), inset 0 0 0 1px rgba(17,22,28,0.04)" : "none",
        font: "var(--typo-label-md)",
        fontWeight: active ? 600 : 500,
        letterSpacing: "0.5px",
        color: active ? "var(--text-primary)" : "var(--text-muted)",
        transition: "background var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out)",
        whiteSpace: "nowrap"
      }
    }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 14
    }), /*#__PURE__*/React.createElement("span", null, lbl));
  }));
}
function Breadcrumb({
  items = [],
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4,
      flexWrap: "wrap",
      ...style
    }
  }, items.map(function (it, i) {
    const last = i === items.length - 1;
    const lbl = it.label !== undefined ? it.label : it;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("a", {
      href: it.href || "#",
      onClick: function (e) {
        if (!it.href) e.preventDefault();
        if (it.onClick) it.onClick();
      },
      style: {
        font: last ? "var(--typo-body-md-em)" : "var(--typo-body-md)",
        letterSpacing: "0.25px",
        color: last ? "var(--text-primary)" : "var(--text-muted)",
        textDecoration: "none",
        cursor: last ? "default" : "pointer"
      },
      onMouseEnter: function (e) {
        if (!last) e.currentTarget.style.color = "var(--text-interactive)";
      },
      onMouseLeave: function (e) {
        if (!last) e.currentTarget.style.color = "var(--text-muted)";
      }
    }, lbl), !last && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 14,
      color: "var(--icon-tertiary)"
    }));
  }));
}
Object.assign(__ds_scope, { Tabs, Segmented, Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/stockbook/VotePill.jsx
try { (() => {
const {
  useState
} = React;
/* Up/down vote capsule from the Stockbook feed.
   default = outlined ink · upvoted = solid green · downvoted = solid lavender. */
function VotePill({
  count = 0,
  vote = null,
  onVote,
  style
}) {
  const solid = vote === "up" ? "var(--green-500)" : vote === "down" ? "var(--lavender-500)" : null;
  function cast(dir) {
    if (onVote) onVote(vote === dir ? null : dir);
  }
  const btn = function (dir, icon) {
    return /*#__PURE__*/React.createElement("span", {
      onClick: function () {
        cast(dir);
      },
      style: {
        display: "inline-flex",
        alignItems: "center",
        cursor: "pointer",
        padding: "0 2px",
        opacity: solid && vote !== dir ? 0.7 : 1
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: icon,
      size: 16,
      strokeWidth: 2,
      color: solid ? "#fff" : "var(--icon-secondary)",
      style: {
        fill: vote === dir ? "#fff" : "none"
      }
    }));
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 2,
      height: 28,
      padding: "0 6px",
      borderRadius: 9999,
      background: solid || "var(--surface-container)",
      boxShadow: solid ? "none" : "inset 0 0 0 1px var(--border-default)",
      color: solid ? "#fff" : "var(--text-primary)",
      transition: "background var(--duration-fast) var(--ease-out)",
      userSelect: "none",
      ...style
    }
  }, btn("up", "arrow-big-up"), /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      font: "var(--typo-label-md)",
      letterSpacing: "0.5px",
      minWidth: 20,
      textAlign: "center"
    }
  }, count + (vote === "up" ? 1 : 0) - (vote === "down" ? 1 : 0)), btn("down", "arrow-big-down"));
}

/* Dark ink pill: "Xác thực chuyên gia" / "Xác thực danh tính". */
function VerifiedBadge({
  kind = "expert",
  size = "md",
  style
}) {
  const label = kind === "identity" ? "Xác thực danh tính" : "Xác thực chuyên gia";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      height: size === "sm" ? 20 : 24,
      padding: "0 8px",
      borderRadius: 9999,
      background: "var(--surface-inverse)",
      color: "var(--text-inverse)",
      font: "var(--typo-label-md)",
      letterSpacing: "0.5px",
      whiteSpace: "nowrap",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: kind === "identity" ? "badge-check" : "shield-check",
    size: 12
  }), /*#__PURE__*/React.createElement("span", null, label));
}

/* Ticker chip: logo square + symbol + price + % change. */
function TickerChip({
  symbol,
  name,
  price,
  change,
  logoColor = "var(--blue-500)",
  compact = false,
  style
}) {
  const dir = typeof change === "string" && change.trim().startsWith("-") ? "down" : change ? "up" : "flat";
  const changeColor = dir === "down" ? "var(--market-down)" : dir === "up" ? "var(--market-up)" : "var(--market-flat)";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      height: compact ? 28 : 36,
      padding: compact ? "0 8px" : "0 10px",
      borderRadius: "var(--radius-sm)",
      background: "var(--surface-container)",
      boxShadow: "inset 0 0 0 1px var(--border-subtle)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: compact ? 16 : 20,
      height: compact ? 16 : 20,
      borderRadius: 4,
      background: logoColor,
      color: "#fff",
      font: "700 " + (compact ? 8 : 9) + "px/1 var(--font-sans)"
    }
  }, (symbol || "?").slice(0, 1)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--typo-title-sm-em)",
      fontWeight: 600,
      letterSpacing: "0.1px",
      color: "var(--text-primary)"
    }
  }, symbol), name && !compact && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--typo-body-sm)",
      letterSpacing: "0.4px",
      color: "var(--text-muted)"
    }
  }, name), price && /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      font: "var(--typo-body-md-em)",
      fontWeight: 500,
      letterSpacing: 0
    }
  }, price), change && /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      font: "var(--typo-label-md)",
      letterSpacing: 0,
      color: changeColor
    }
  }, change));
}

/* "+ Theo dõi" ⇄ "Đang theo dõi" toggle. */
function FollowButton({
  following,
  defaultFollowing = false,
  onChange,
  plain = false,
  size = "sm",
  style
}) {
  const [inner, setInner] = useState(defaultFollowing);
  const on = following !== undefined ? following : inner;
  const [hover, setHover] = useState(false);
  const h = size === "md" ? 32 : 28;
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function () {
      const next = !on;
      if (following === undefined) setInner(next);
      if (onChange) onChange(next);
    },
    onMouseEnter: function () {
      setHover(true);
    },
    onMouseLeave: function () {
      setHover(false);
    },
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      height: plain ? "auto" : h,
      padding: plain ? 0 : "0 10px",
      border: "none",
      borderRadius: plain ? 0 : "var(--radius-sm)",
      background: plain ? "transparent" : on ? hover ? "var(--surface-danger-subtle)" : "var(--surface-container)" : hover ? "var(--action-primary-hover)" : "var(--action-primary)",
      boxShadow: plain || !on ? "none" : "inset 0 0 0 1px var(--border-default)",
      color: plain ? on ? "var(--text-muted)" : "var(--text-interactive)" : on ? hover ? "var(--text-danger)" : "var(--text-secondary)" : "var(--text-on-action)",
      font: "var(--typo-label-md)",
      fontWeight: 500,
      letterSpacing: "0.5px",
      cursor: "pointer",
      whiteSpace: "nowrap",
      transition: "background var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: on ? "user-round-check" : "plus",
    size: 14
  }), /*#__PURE__*/React.createElement("span", null, on ? hover && !plain ? "Huỷ theo dõi" : "Đang theo dõi" : "Theo dõi"));
}

/* Market index stat: label + value + change. */
function MarketStat({
  label,
  value,
  change,
  tone,
  style
}) {
  const t = tone || (typeof change === "string" && change.trim().startsWith("-") ? "down" : "up");
  const color = t === "down" ? "var(--market-down)" : t === "flat" ? "var(--market-flat)" : "var(--market-up)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      minWidth: 96,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--typo-label-md)",
      letterSpacing: "0.5px",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      font: "var(--typo-title-md-em)",
      fontWeight: 600,
      letterSpacing: 0,
      color: "var(--text-primary)"
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      font: "var(--typo-label-md)",
      letterSpacing: 0,
      color: color
    }
  }, t !== "flat" && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t === "down" ? "trending-down" : "trending-up",
    size: 12
  }), change));
}
Object.assign(__ds_scope, { VotePill, VerifiedBadge, TickerChip, FollowButton, MarketStat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/stockbook/VotePill.jsx", error: String((e && e.message) || e) }); }

// components/stockbook/PostCard.jsx
try { (() => {
const {
  useState
} = React;
/* Feed post card — the core Stockbook object.
   Header: avatar + author › topic · time + verified badge.
   Body: optional title, text, media slot. Footer: vote/comment/repost/share + views. */
function PostCard({
  author,
  topic,
  time,
  verified,
  verifiedKind = "expert",
  title,
  children,
  media,
  votes = 0,
  comments = 0,
  reposts = 0,
  views,
  onFollowAuthor,
  width,
  style
}) {
  const [vote, setVote] = useState(null);
  const [hoverAuthor, setHoverAuthor] = useState(false);
  const meta = {
    font: "var(--typo-body-md)",
    letterSpacing: "0.25px",
    color: "var(--text-muted)"
  };
  const action = function (icon, count, label) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        color: "var(--text-secondary)",
        cursor: "pointer"
      },
      title: label
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: icon,
      size: 16,
      color: "var(--icon-secondary)"
    }), count !== undefined && /*#__PURE__*/React.createElement("span", {
      className: "tabular",
      style: {
        font: "var(--typo-label-md)",
        letterSpacing: 0
      }
    }, count));
  };
  return /*#__PURE__*/React.createElement("article", {
    style: {
      background: "var(--surface-container)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--card-shadow)",
      padding: 16,
      width: width,
      boxSizing: "border-box",
      font: "var(--typo-body-md)",
      letterSpacing: "0.25px",
      color: "var(--text-primary)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      cursor: onFollowAuthor ? "pointer" : "default"
    },
    onMouseEnter: function () {
      setHoverAuthor(true);
    },
    onMouseLeave: function () {
      setHoverAuthor(false);
    },
    onClick: onFollowAuthor
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: author,
    size: "md"
  }), onFollowAuthor && hoverAuthor && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: -2,
      bottom: -2,
      width: 16,
      height: 16,
      borderRadius: 9999,
      background: "var(--surface-inverse)",
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 0 0 2px var(--surface-container)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "plus",
    size: 10
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--typo-title-sm-em)",
      fontWeight: 600,
      letterSpacing: "0.1px"
    }
  }, author), topic && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 12,
    color: "var(--icon-tertiary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--typo-title-sm-em)",
      fontWeight: 600,
      letterSpacing: "0.1px"
    }
  }, topic)), time && /*#__PURE__*/React.createElement("span", {
    style: meta
  }, time), verified && /*#__PURE__*/React.createElement(__ds_scope.VerifiedBadge, {
    kind: verifiedKind,
    size: "sm",
    style: {
      marginLeft: 2
    }
  }))), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "ellipsis",
    size: "sm",
    title: "Tu\u1EF3 ch\u1ECDn"
  })), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "12px 0 0",
      font: "var(--typo-head-sm-em)",
      fontWeight: 600
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: title ? 8 : 12,
      color: "var(--text-secondary)"
    }
  }, children), media && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      boxShadow: "inset 0 0 0 1px var(--border-subtle)"
    }
  }, media), /*#__PURE__*/React.createElement("footer", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.VotePill, {
    count: votes,
    vote: vote,
    onVote: setVote
  }), action("message-circle", comments, "Bình luận"), action("repeat-2", reposts, "Đăng lại"), action("share", undefined, "Chia sẻ"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), views && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      ...meta
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chart-column",
    size: 14
  }), /*#__PURE__*/React.createElement("span", {
    className: "tabular"
  }, views, " l\u01B0\u1EE3t xem"))));
}
Object.assign(__ds_scope, { PostCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/stockbook/PostCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/stockbook/FeedData.jsx
try { (() => {
/* Mock data for the Stockbook feed UI kit — copy mirrors the real product
   (stock-design/src/features/HomeFeed/data.ts + Figma Playground). */

const feedData = {
  nav: [{
    label: "Cộng đồng",
    value: "home"
  }, {
    label: "Khám phá",
    value: "explore"
  }, {
    label: "Công cụ",
    value: "tools"
  }, {
    label: "Premium",
    value: "premium"
  }],
  market: [{
    label: "VN-Index",
    value: "1,284.12",
    change: "+0.72%",
    tone: "up"
  }, {
    label: "HNX",
    value: "243.88",
    change: "-0.18%",
    tone: "down"
  }, {
    label: "Thanh khoản",
    value: "18.6K tỷ",
    change: "+12%",
    tone: "up"
  }, {
    label: "Khối ngoại",
    value: "-214 tỷ",
    change: "Bán ròng",
    tone: "down"
  }],
  trending: ["FPT", "VCB", "MWG", "SSI", "VNM", "HPG"],
  contributors: [{
    name: "Minh Anh",
    handle: "@minhanh.fa",
    role: "Phân tích cơ bản",
    trust: 92,
    followers: "18.4K"
  }, {
    name: "Quang Huy",
    handle: "@huymarket",
    role: "Chiến lược thị trường",
    trust: 88,
    followers: "12.1K"
  }, {
    name: "Linh Đặng",
    handle: "@linhbanking",
    role: "Ngân hàng & vĩ mô",
    trust: 84,
    followers: "9.7K"
  }],
  premiumTools: [{
    title: "Smart Screener",
    description: "Lọc cổ phiếu theo tăng trưởng, định giá, thanh khoản và dòng tiền."
  }, {
    title: "AI Market Brief",
    description: "Tóm tắt biến động thị trường và luận điểm nổi bật trong ngày."
  }],
  posts: [{
    id: "fpt",
    author: "Minh Anh",
    topic: "Công nghệ",
    time: "2 giờ trước",
    verified: true,
    sentiment: "Tích cực",
    ticker: {
      symbol: "FPT",
      name: "FPT Corp",
      price: "76,700",
      change: "-1.54%",
      logoColor: "var(--orange-500)"
    },
    horizon: "6-12 tháng",
    title: "FPT vẫn còn dư địa khi mảng AI services bước vào chu kỳ hợp đồng mới",
    body: "Biên lợi nhuận dịch vụ công nghệ đang giữ ổn định, backlog xuất khẩu phần mềm tăng và định giá chưa phản ánh đầy đủ tốc độ mở rộng ở Nhật Bản.",
    votes: 482,
    comments: 64,
    reposts: 12,
    views: "4.2N",
    media: true
  }, {
    id: "vcb",
    author: "Linh Đặng",
    topic: "Ngân hàng",
    time: "4 giờ trước",
    verified: true,
    sentiment: "Theo dõi",
    ticker: {
      symbol: "VCB",
      name: "Vietcombank",
      price: "92,300",
      change: "+0.84%",
      logoColor: "var(--green-600)"
    },
    horizon: "3-6 tháng",
    title: "VCB cần tín hiệu rõ hơn từ tăng trưởng tín dụng trước khi bứt phá",
    body: "Chất lượng tài sản vẫn dẫn đầu ngành nhưng upside ngắn hạn phụ thuộc vào tốc độ giải ngân và biên lãi ròng trong quý tới.",
    votes: 318,
    comments: 41,
    reposts: 6,
    views: "2.8N"
  }, {
    id: "hpg",
    author: "Quang Huy",
    topic: "Thép",
    time: "Hôm nay",
    verified: false,
    sentiment: "Thận trọng",
    ticker: {
      symbol: "HPG",
      name: "Hoa Phat",
      price: "27,450",
      change: "-0.36%",
      logoColor: "var(--blue-500)"
    },
    horizon: "1-3 tháng",
    title: "HPG có rủi ro co biên nếu giá quặng giữ ở vùng cao",
    body: "Sản lượng phục hồi là điểm sáng, nhưng chi phí đầu vào và áp lực cạnh tranh thép xây dựng có thể làm chậm nhịp cải thiện lợi nhuận.",
    votes: 256,
    comments: 37,
    reposts: 4,
    views: "1.9N"
  }]
};
Object.assign(__ds_scope, { feedData });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/stockbook/FeedData.jsx", error: String((e && e.message) || e) }); }

// ui_kits/stockbook/FeedHeader.jsx
try { (() => {
const {
  useState
} = React;
/* Stockbook app header — logo, primary nav, search, bell, profile. */
function FeedHeader({
  active = "home",
  onNav,
  onCompose
}) {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 40,
      background: "rgba(255,255,255,0.94)",
      backdropFilter: "blur(8px)",
      boxShadow: "inset 0 -1px 0 var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1160,
      margin: "0 auto",
      height: 60,
      padding: "0 24px",
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      marginRight: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 32,
      height: 32,
      borderRadius: 8,
      background: "var(--gray-950)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chart-column",
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--typo-title-md-em)",
      fontWeight: 600,
      letterSpacing: "0.15px",
      lineHeight: "18px"
    }
  }, "Stockbook"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--typo-label-sm)",
      letterSpacing: "0.5px",
      color: "var(--text-muted)",
      lineHeight: "12px"
    }
  }, "Social finance Vietnam"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 2
    }
  }, __ds_scope.feedData.nav.map(function (n) {
    const on = n.value === active;
    return /*#__PURE__*/React.createElement("a", {
      key: n.value,
      href: "#",
      onClick: function (e) {
        e.preventDefault();
        if (onNav) onNav(n.value);
      },
      style: {
        textDecoration: "none",
        padding: "6px 12px",
        borderRadius: 8,
        font: "var(--typo-label-lg)",
        fontWeight: on ? 600 : 500,
        letterSpacing: "0.5px",
        color: on ? "var(--text-primary)" : "var(--text-muted)",
        background: on ? "var(--alpha-100)" : "transparent"
      },
      onMouseEnter: function (e) {
        if (!on) e.currentTarget.style.background = "var(--alpha-50)";
      },
      onMouseLeave: function (e) {
        if (!on) e.currentTarget.style.background = "transparent";
      }
    }, n.label);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      width: 280,
      height: 32,
      padding: "0 10px",
      borderRadius: 8,
      boxSizing: "border-box",
      background: focus ? "var(--surface-container)" : "var(--alpha-50)",
      boxShadow: focus ? "inset 0 0 0 1px var(--border-interactive), 0 0 0 3px rgba(43,89,199,0.12)" : "inset 0 0 0 1px var(--border-subtle)",
      transition: "box-shadow var(--duration-fast) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 16,
    color: "var(--icon-tertiary)"
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "T\xECm m\xE3 c\u1ED5 phi\u1EBFu, lu\u1EADn \u0111i\u1EC3m, t\xE1c gi\u1EA3",
    onFocus: function () {
      setFocus(true);
    },
    onBlur: function () {
      setFocus(false);
    },
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      font: "var(--typo-body-md)",
      letterSpacing: "0.25px",
      color: "var(--text-primary)",
      padding: 0
    }
  })), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "md",
    iconLeft: "pen-line",
    onClick: onCompose
  }, "\u0110\u0103ng b\xE0i vi\u1EBFt"), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    count: 3
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "bell",
    title: "Th\xF4ng b\xE1o",
    type: "secondary"
  })), /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: "Ng\xF4 Thanh T\xF9ng",
    size: "sm"
  })));
}
Object.assign(__ds_scope, { FeedHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/stockbook/FeedHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/stockbook/FeedSidebar.jsx
try { (() => {
const sbSideCard = {
  background: "var(--surface-container)",
  borderRadius: "var(--radius-lg)",
  boxShadow: "var(--card-shadow)",
  padding: 16
};
const sbSideTitle = {
  font: "var(--typo-title-md-em)",
  fontWeight: 600,
  letterSpacing: "0.15px",
  margin: 0
};

/* Right rail: market snapshot, trending tickers, contributors, premium tools. */
function FeedSidebar({
  onTicker
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: sbSideCard
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: sbSideTitle
  }, "Th\u1ECB tr\u01B0\u1EDDng"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--typo-label-sm)",
      letterSpacing: "0.5px",
      color: "var(--text-muted)"
    }
  }, "9:42 \xB7 \u0111ang m\u1EDF c\u1EEDa")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12,
      marginTop: 14
    }
  }, __ds_scope.feedData.market.map(function (m) {
    return /*#__PURE__*/React.createElement("div", {
      key: m.label,
      style: {
        borderRadius: "var(--radius-sm)",
        background: "var(--alpha-50)",
        boxShadow: "inset 0 0 0 1px var(--border-subtle)",
        padding: "10px 12px"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.MarketStat, {
      label: m.label,
      value: m.value,
      change: m.change,
      tone: m.tone
    }));
  }))), /*#__PURE__*/React.createElement("section", {
    style: sbSideCard
  }, /*#__PURE__*/React.createElement("h2", {
    style: sbSideTitle
  }, "M\xE3 \u0111\u01B0\u1EE3c th\u1EA3o lu\u1EADn"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginTop: 12
    }
  }, __ds_scope.feedData.trending.map(function (t, i) {
    return /*#__PURE__*/React.createElement("span", {
      key: t,
      onClick: function () {
        if (onTicker) onTicker(t);
      },
      style: {
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Tag, {
      color: i === 0 ? "brand" : "default",
      icon: i === 0 ? "flame" : undefined
    }, t));
  }))), /*#__PURE__*/React.createElement("section", {
    style: sbSideCard
  }, /*#__PURE__*/React.createElement("h2", {
    style: sbSideTitle
  }, "T\xE1c gi\u1EA3 n\u1ED5i b\u1EADt"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      marginTop: 14
    }
  }, __ds_scope.feedData.contributors.map(function (c) {
    return /*#__PURE__*/React.createElement("div", {
      key: c.handle,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
      name: c.name,
      size: "sm"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--typo-title-sm-em)",
        fontWeight: 600,
        letterSpacing: "0.1px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, c.name), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--typo-body-sm)",
        letterSpacing: "0.4px",
        color: "var(--text-muted)"
      }
    }, c.role, " \xB7 ", c.followers, " theo d\xF5i"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 4,
        maxWidth: 120
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Progress, {
      value: c.trust,
      color: "success",
      height: 4
    }))), /*#__PURE__*/React.createElement(__ds_scope.FollowButton, null));
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...sbSideCard,
      boxShadow: "inset 0 0 0 1px rgba(255,69,0,0.32), var(--elevation-1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      color: "var(--orange-600)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "crown",
    size: 16
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...sbSideTitle,
      color: "var(--text-primary)"
    }
  }, "C\xF4ng c\u1EE5 Premium")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      marginTop: 12
    }
  }, __ds_scope.feedData.premiumTools.map(function (t) {
    return /*#__PURE__*/React.createElement("div", {
      key: t.title,
      style: {
        borderRadius: "var(--radius-sm)",
        background: "var(--alpha-50)",
        boxShadow: "inset 0 0 0 1px var(--border-subtle)",
        padding: "10px 12px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--typo-title-sm-em)",
        fontWeight: 600,
        letterSpacing: "0.1px"
      }
    }, t.title), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--typo-body-sm)",
        letterSpacing: "0.4px",
        color: "var(--text-muted)",
        marginTop: 2
      }
    }, t.description));
  })), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    block: true,
    size: "md",
    iconLeft: "sparkles",
    style: {
      marginTop: 12
    }
  }, "M\u1EDF b\u1ED9 c\xF4ng c\u1EE5")));
}
Object.assign(__ds_scope, { FeedSidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/stockbook/FeedSidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/stockbook/StockbookFeed.jsx
try { (() => {
const {
  useState
} = React;
const sentimentColor = {
  "Tích cực": "success",
  "Theo dõi": "interactive",
  "Thận trọng": "danger"
};
function MediaPlaceholder() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 200,
      background: "var(--alpha-50)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: 6,
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chart-column",
    size: 28,
    color: "var(--icon-tertiary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--typo-label-md)",
      letterSpacing: "0.5px"
    }
  }, "Bi\u1EC3u \u0111\u1ED3 FPT \xB7 6 th\xE1ng"));
}

/* Full interactive Stockbook community feed screen. */
function StockbookFeed() {
  const [tab, setTab] = useState("foryou");
  const [compose, setCompose] = useState(false);
  const [filter, setFilter] = useState(null);
  const posts = __ds_scope.feedData.posts.filter(function (p) {
    if (filter && p.ticker.symbol !== filter) return false;
    if (tab === "following") return p.verified;
    if (tab === "trending") return p.votes > 300;
    return true;
  });
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "B\u1EA3ng tin Stockbook",
    style: {
      minHeight: "100vh",
      background: "var(--gray-50)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.FeedHeader, {
    active: "home",
    onCompose: function () {
      setCompose(true);
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1160,
      margin: "0 auto",
      padding: "20px 24px 48px",
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) 340px",
      gap: 20,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("main", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function () {
      setCompose(true);
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      cursor: "text",
      background: "var(--surface-container)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--card-shadow)",
      padding: "12px 16px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: "Ng\xF4 Thanh T\xF9ng",
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: "var(--typo-body-md)",
      letterSpacing: "0.25px",
      color: "var(--text-muted)"
    }
  }, "Chia s\u1EBB lu\u1EADn \u0111i\u1EC3m \u0111\u1EA7u t\u01B0 c\u1EE7a b\u1EA1n\u2026"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "secondary",
    size: "sm",
    iconLeft: "image-plus"
  }, "\u1EA2nh"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "secondary",
    size: "sm",
    iconLeft: "chart-column"
  }, "Bi\u1EC3u \u0111\u1ED3")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Tabs, {
    items: [{
      label: "Dành cho bạn",
      value: "foryou"
    }, {
      label: "Đang theo dõi",
      value: "following"
    }, {
      label: "Xu hướng",
      value: "trending",
      icon: "flame"
    }],
    value: tab,
    onChange: setTab,
    style: {
      flex: 1
    }
  }), filter && /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    color: "interactive",
    onRemove: function () {
      setFilter(null);
    }
  }, filter)), posts.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-container)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--card-shadow)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Empty, {
    title: "Ch\u01B0a c\xF3 b\xE0i vi\u1EBFt",
    description: "Kh\xF4ng c\xF3 lu\u1EADn \u0111i\u1EC3m n\xE0o kh\u1EDBp v\u1EDBi b\u1ED9 l\u1ECDc hi\u1EC7n t\u1EA1i.",
    action: /*#__PURE__*/React.createElement(__ds_scope.Button, {
      size: "sm",
      type: "secondary",
      onClick: function () {
        setFilter(null);
      }
    }, "Xo\xE1 b\u1ED9 l\u1ECDc"),
    icon: "search"
  })), posts.map(function (p) {
    return /*#__PURE__*/React.createElement(__ds_scope.PostCard, {
      key: p.id,
      author: p.author,
      topic: p.topic,
      time: p.time,
      verified: p.verified,
      title: p.title,
      votes: p.votes,
      comments: p.comments,
      reposts: p.reposts,
      views: p.views,
      media: p.media ? /*#__PURE__*/React.createElement(MediaPlaceholder, null) : undefined,
      onFollowAuthor: function () {}
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.TickerChip, {
      symbol: p.ticker.symbol,
      name: p.ticker.name,
      price: p.ticker.price,
      change: p.ticker.change,
      logoColor: p.ticker.logoColor,
      compact: true
    }), /*#__PURE__*/React.createElement(__ds_scope.Tag, {
      color: sentimentColor[p.sentiment]
    }, p.sentiment), /*#__PURE__*/React.createElement(__ds_scope.Tag, {
      size: "sm"
    }, "T\u1EA7m nh\xECn ", p.horizon)), /*#__PURE__*/React.createElement("span", null, p.body)));
  })), /*#__PURE__*/React.createElement(__ds_scope.FeedSidebar, {
    onTicker: function (t) {
      setFilter(t);
      setTab("foryou");
    }
  })), /*#__PURE__*/React.createElement(__ds_scope.Dialog, {
    open: compose,
    onClose: function () {
      setCompose(false);
    },
    title: "\u0110\u0103ng b\xE0i vi\u1EBFt",
    width: 520,
    confirmLabel: "\u0110\u0103ng",
    cancelLabel: "Hu\u1EF7",
    onConfirm: function () {
      setCompose(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "Ti\xEAu \u0111\u1EC1",
    placeholder: "T\xF3m t\u1EAFt lu\u1EADn \u0111i\u1EC3m trong m\u1ED9t c\xE2u"
  }), /*#__PURE__*/React.createElement(__ds_scope.TextArea, {
    label: "N\u1ED9i dung",
    placeholder: "Lu\u1EADn \u0111i\u1EC3m, d\u1EEF ki\u1EC7n v\xE0 r\u1EE7i ro c\u1EA7n theo d\xF5i\u2026",
    rows: 5
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    color: "interactive",
    onRemove: function () {}
  }, "FPT"), /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    onRemove: function () {}
  }, "C\xF4ng ngh\u1EC7"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "secondary",
    size: "xs",
    iconLeft: "plus"
  }, "Th\xEAm ch\u1EE7 \u0111\u1EC1")))));
}
Object.assign(__ds_scope, { StockbookFeed });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/stockbook/StockbookFeed.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Message = __ds_scope.Message;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Empty = __ds_scope.Empty;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.FieldFrame = __ds_scope.FieldFrame;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.TextArea = __ds_scope.TextArea;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Segmented = __ds_scope.Segmented;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.PostCard = __ds_scope.PostCard;

__ds_ns.VotePill = __ds_scope.VotePill;

__ds_ns.VerifiedBadge = __ds_scope.VerifiedBadge;

__ds_ns.TickerChip = __ds_scope.TickerChip;

__ds_ns.FollowButton = __ds_scope.FollowButton;

__ds_ns.MarketStat = __ds_scope.MarketStat;

__ds_ns.FeedHeader = __ds_scope.FeedHeader;

__ds_ns.FeedSidebar = __ds_scope.FeedSidebar;

__ds_ns.StockbookFeed = __ds_scope.StockbookFeed;

})();
