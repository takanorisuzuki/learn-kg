# Learn KG — Knowledge Graph for LLM Developers

**A 12-session practical course for LLM developers to master Knowledge Graphs.**

🌐 **Live site:** [learn-kg.vercel.app](https://learn-kg.vercel.app)
&nbsp;&nbsp;[English](https://learn-kg.vercel.app/en) · [日本語](https://learn-kg.vercel.app/ja)

---

## Who This Is For

LLM developers who have tried RAG and hit its limits. You can build a chatbot, but struggle with:

- "Show me items that do **not** match X" — RAG cannot answer this structurally
- Multi-hop questions like "Which engineers work on the same team as the person who owns the most critical bug?"
- Hallucinations in production that embeddings alone cannot fix

This course teaches you how to combine LLMs with a Knowledge Graph to build systems that are **accurate, traceable, and structurally queryable** — using only local tools, no paid APIs.

**After 12 sessions you will be able to:**
- Run Neo4j + Ollama locally with Docker Compose
- Extract a KG from unstructured text automatically with LLMGraphTransformer
- Build a GraphRAG pipeline with schema-aware Cypher generation
- Design enterprise KG architecture that scales beyond prototypes
- Integrate a KG with AI Agents as structured memory

## Sessions

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

All hands-on sessions run locally — no cloud account, no API key, no credit card.

```bash
# 1. Set up environment
cp .env.example .env
# Edit .env and set NEO4J_PASSWORD

# 2. Start Neo4j + Ollama
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

## このコースが向いている人

RAGを試したが限界を感じているLLM開発者。たとえばこんな問題：

- 「Xに**該当しない**ものを出して」← RAGはこれが構造的に苦手
- 「最も深刻なバグを担当している人と同じチームのエンジニアは？」← 多段推論が弱い
- 本番でのハルシネーションがembeddingだけでは解決できない

このコースでは、KGとLLMを組み合わせて**正確で追跡可能なシステム**を作る方法を学ぶ。ローカルで動くため、有料APIは一切不要。

**12セッション後にできること：**
- Docker ComposeでNeo4j + Ollamaをローカル起動できる
- LLMGraphTransformerで非構造化テキストからKGを自動抽出できる
- スキーマ対応のCypher生成でGraphRAGパイプラインを構築できる
- 本番規模に耐えるエンタープライズKGアーキテクチャを設計できる
- AIエージェントにKGを構造化メモリとして統合できる

## セッション一覧

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

ハンズオンセッションはすべてローカルで動く。クラウドアカウント不要・APIキー不要・クレジットカード不要。

```bash
# 1. 環境変数の設定
cp .env.example .env
# .envを編集し、NEO4J_PASSWORDを設定

# 2. Neo4j + Ollamaを起動
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
