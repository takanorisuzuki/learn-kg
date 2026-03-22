日本語 | [English](./README.md)

# Learn KG — LLM開発者のためのナレッジグラフ実践コース

**LLM開発者がナレッジグラフを体系的に学ぶ13セッションの実践コース。**

サイト: [learn-kg.vercel.app](https://learn-kg.vercel.app)
— [English](https://learn-kg.vercel.app/en) · [日本語](https://learn-kg.vercel.app/ja)

---

## このコースが向いている人

RAGを試したが限界を感じているLLM開発者。たとえばこんな問題：

- 「Xに**該当しない**ものを出して」— RAGはこれが構造的に苦手
- 「最も深刻なバグを担当している人と同じチームのエンジニアは？」— 多段推論が弱い
- 本番でのハルシネーションがembeddingだけでは解決できない

このコースでは、KGとLLMを組み合わせて**正確で追跡可能なシステム**を作る方法を学ぶ。ローカルで動くため、有料APIは一切不要。

**13セッション後にできること：**
- Docker ComposeでNeo4j + Ollamaをローカル起動できる
- LLMGraphTransformerで非構造化テキストからKGを自動抽出できる
- スキーマ対応のCypher生成でGraphRAGパイプラインを構築できる
- 本番規模に耐えるエンタープライズKGアーキテクチャを設計できる
- AIエージェントにKGを構造化メモリとして統合できる

## クイックスタート（ローカル）

ハンズオンセッションはすべてローカルで動く。クラウドアカウント不要・APIキー不要・クレジットカード不要。

**必要環境:** Python 3.9以上、Docker Desktop、空きディスク容量 約15GB

```bash
# 1. 環境変数の設定
cp .env.example .env
# .envを編集し、NEO4J_PASSWORDを設定

# 2. Neo4j + Ollamaを起動
docker compose up -d

# 3. LLMモデルをダウンロード（初回のみ、約2GB）
docker exec kg-ollama ollama pull llama3.2
docker exec kg-ollama ollama pull nomic-embed-text

# 4. Neo4j Browserを開く
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

コントリビューションは [CONTRIBUTING.md](./CONTRIBUTING.md) を参照。
