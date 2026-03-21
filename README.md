[日本語](./README.ja.md) | English

# Learn KG — Knowledge Graph for LLM Developers

**A 12-session practical course for LLM developers to master Knowledge Graphs.**

Live site: [learn-kg.vercel.app](https://learn-kg.vercel.app)
— [English](https://learn-kg.vercel.app/en) · [日本語](https://learn-kg.vercel.app/ja)

---

## Who This Is For

LLM developers who have tried RAG and hit its limits:

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

## Quick Start (Local)

All hands-on sessions run locally — no cloud account, no API key, no credit card.

**Prerequisites:** Python 3.9+, Docker Desktop, ~15 GB free disk space

```bash
# 1. Set up environment
cp .env.example .env
# Edit .env and set NEO4J_PASSWORD

# 2. Start Neo4j + Ollama
docker compose up -d

# 3. Pull the LLM (first time only, ~2GB)
docker exec kg-ollama ollama pull llama3.2
docker exec kg-ollama ollama pull nomic-embed-text

# 4. Open Neo4j Browser
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

See [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines.
