# VistaRemote Website

VistaRemote（视界远程）产品官网 — Next.js 静态导出，部署于 [Cloudflare Pages](https://pages.cloudflare.com/)。

| 项 | 值 |
| :--- | :--- |
| **生产域名** | https://remote.vistacast.dev |
| **Pages 项目** | `vistaremote-website` |
| **构建产物** | `out/`（`next build` + `output: 'export'`） |

## 本地开发

```bash
pnpm install
pnpm dev
```

默认端口 `13106`：http://localhost:13106

## 构建

```bash
NODE_ENV=production pnpm build
```

产物在 `out/` 目录。

## 部署

### 方式 A：GitHub Actions（推荐）

推送到 `main` 后自动部署。在 `VistaRemote/website` 仓库 Settings → Secrets 配置：

| Secret | 说明 |
| :--- | :--- |
| `CLOUDFLARE_API_TOKEN` | Pages Edit 权限的 API Token |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare 账户 ID |

### 方式 B：本机 Wrangler

```bash
pnpm install
NODE_ENV=production pnpm build
pnpm pages:deploy
```

需先 `npx wrangler login`。

### 自定义域名

在 Cloudflare Dashboard → **Workers & Pages** → `vistaremote-website` → **Custom domains** 添加：

- `remote.vistacast.dev`

DNS（`vistacast.dev` 已在 Cloudflare 托管时自动配置 CNAME 指向 `vistaremote-website.pages.dev`）。
