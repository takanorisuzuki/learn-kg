# Learn KG — Knowledge Graph for LLM Developers

**A 12-session practical course for LLM developers to master Knowledge Graphs.**

🌐 **Live site:** [learn-kg.vercel.app](https://learn-kg.vercel.app)
&nbsp;&nbsp;[English](https://learn-kg.vercel.app/en) · [日本語](https://learn-kg.vercel.app/ja)

---

## What You Will Learn

LLMs hallucinate. RAG helps, but hits structural limits. Knowledge Graphs solve what RAG cannot — negation queries, multi-hop reasoning, deterministic fact retrieval.

This course takes you from zero to a production-ready KG+LLM system:

| # | Session | Level |
|---|---------|-------|
| s01 | Why LLMs Struggle in Production | Beginner |
| s02 | What Is a Knowledge Graph? | Beginner |
| s03 | Where RAG Fails and GraphRAG Begins | Beginner |
| s04 | Set Up Neo4j and Run Your First GraphRAG | Beginner |
| s05 | Auto-Build a KG from Text with an LLM | Beginner |
| s06 | Production-Grade GraphRAG Pipeline | Intermediate |
| s07 | The Pivot: KG Is More Than GraphRAG | Intermediate |
| s08 | KG in the Wild: Industry Case Studies | Intermediate |
| s09 | Enterprise KG Architecture Design | Intermediate |
| s10 | Integrating KG with AI Agents | Intermediate |
| s11 | KG Adoption Strategy: Start Small | Intermediate |
| s12 | Measuring and Improving Your KG Project | Intermediate |

## Quick Start (Local)

All hands-on sessions run locally — no cloud account or API key required.

```bash
# 1. Start Neo4j + Ollama
docker compose up -d

# 2. Pull the LLM (first time only, ~2GB)
docker exec kg-ollama ollama pull llama3.2
docker exec kg-ollama ollama pull nomic-embed-text

# 3. Open Neo4j Browser
open http://localhost:7474
```

## Tech Stack

| Layer | Tool |
|-------|------|
| Graph DB | Neo4j 5.13 (Docker) |
| LLM Runtime | Ollama + llama3.2 (local, no API key) |
| KG + LLM Bridge | LangChain (`langchain-neo4j`, `langchain-ollama`) |
| Course Site | Next.js 16 + Tailwind CSS |
| Hosting | Vercel |

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Content lives in `docs/en/` and `docs/ja/`. Each session is a Markdown file with frontmatter (`title`, `level`, `duration`).

---

---

# Learn KG — LLM開発者のためのナレッジグラフ実践コース

**LLM開発者がナレッジグラフを体系的に学ぶ12セッションの実践コース。**

🌐 **サイト：** [learn-kg.vercel.app](https://learn-kg.vercel.app)
&nbsp;&nbsp;[English](https://learn-kg.vercel.app/en) · [日本語](https://learn-kg.vercel.app/ja)

---

## このコースで学ぶこと

LLMはハルシネーションを起こす。RAGは助けになるが構造的な限界がある。ナレッジグラフはRAGが解けない問題を解決する。否定クエリ、多段推論、確定的な事実取得。

このコースでは、ゼロから本番品質のKG+LLMシステムを構築するまでを学ぶ：

| # | セッション | レベル |
|---|-----------|--------|
| s01 | LLMはなぜ「業務で使いにくい」のか | 初級 |
| s02 | ナレッジグラフとは何か | 初級 |
| s03 | RAGが解けない問題とGraphRAGの登場 | 初級 |
| s04 | Neo4jをセットアップしてGraphRAGを動かす | 初級 |
| s05 | LLMでKGを自動構築する | 初級 |
| s06 | GraphRAGパイプラインを本番品質に仕上げる | 中級 |
| s07 | 転換点：KGはGraphRAGだけではない | 中級 |
| s08 | 世界のKG活用事例に学ぶ | 中級 |
| s09 | エンタープライズKGアーキテクチャ設計 | 中級 |
| s10 | AI AgentとKGを統合する | 中級 |
| s11 | スモールスタートで始めるKG実装戦略 | 中級 |
| s12 | KGプロジェクトの評価と継続改善 | 中級 |

## クイックスタート（ローカル）

ハンズオンセッションはすべてローカルで動く。クラウドアカウント不要・APIキー不要。

```bash
# 1. Neo4j + Ollamaを起動
docker compose up -d

# 2. LLMモデルをダウンロード（初回のみ、約2GB）
docker exec kg-ollama ollama pull llama3.2
docker exec kg-ollama ollama pull nomic-embed-text

# 3. Neo4j Browserを開く
open http://localhost:7474
```

## 技術スタック

| レイヤー | ツール |
|---------|--------|
| グラフDB | Neo4j 5.13（Docker） |
| LLMランタイム | Ollama + llama3.2（ローカル・APIキー不要） |
| KG+LLM接続 | LangChain（`langchain-neo4j`・`langchain-ollama`） |
| コースサイト | Next.js 16 + Tailwind CSS |
| ホスティング | Vercel |

## 開発環境

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) で確認。

コンテンツは `docs/en/`（英語）と `docs/ja/`（日本語）に格納。各セッションはMarkdownファイルでfrontmatter（`title`・`level`・`duration`）を持つ。
