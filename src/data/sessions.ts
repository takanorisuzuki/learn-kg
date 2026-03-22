export const SESSION_ORDER = [
  "s01", "s02", "s03", "s04", "s05", "s06",
  "s07", "s08", "s09", "s10", "s11", "s12", "s13"
] as const;

export type SessionId = typeof SESSION_ORDER[number];

type SessionBase = {
  id: SessionId;
  level: "beginner" | "intermediate";
  layer: "foundations" | "graphrag" | "beyond";
  duration: number;
};

type SessionLocalized = SessionBase & {
  title: string;
  subtitle: string;
  keyInsight: string;
};

const SESSION_BASE: Record<SessionId, SessionBase> = {
  s01: { id: "s01", level: "beginner", layer: "foundations", duration: 30 },
  s02: { id: "s02", level: "beginner", layer: "foundations", duration: 40 },
  s03: { id: "s03", level: "beginner", layer: "foundations", duration: 45 },
  s04: { id: "s04", level: "beginner", layer: "graphrag", duration: 60 },
  s05: { id: "s05", level: "beginner", layer: "graphrag", duration: 60 },
  s06: { id: "s06", level: "intermediate", layer: "graphrag", duration: 60 },
  s07: { id: "s07", level: "intermediate", layer: "beyond", duration: 45 },
  s08: { id: "s08", level: "intermediate", layer: "beyond", duration: 45 },
  s09: { id: "s09", level: "intermediate", layer: "beyond", duration: 60 },
  s10: { id: "s10", level: "intermediate", layer: "beyond", duration: 60 },
  s11: { id: "s11", level: "intermediate", layer: "beyond", duration: 60 },
  s12: { id: "s12", level: "intermediate", layer: "beyond", duration: 60 },
  s13: { id: "s13", level: "intermediate", layer: "beyond", duration: 60 },
};

const SESSION_TEXT_JA: Record<SessionId, { title: string; subtitle: string; keyInsight: string }> = {
  s01: {
    title: "LLMはなぜ「業務で使いにくい」のか",
    subtitle: "LLM Limitations & the Need for KG",
    keyInsight: "LLMの確率的性質を理解し、KGとの組み合わせで補完する設計思想を掴む",
  },
  s02: {
    title: "ナレッジグラフとは何か",
    subtitle: "Things, Not Strings",
    keyInsight: "エンティティと関係をノード・エッジで直接表現するKGのデータモデルを理解する",
  },
  s03: {
    title: "RAGが解けない問題とGraphRAGの登場",
    subtitle: "When Vector Search Fails",
    keyInsight: "RAGの5つの失敗パターンを把握し、GraphRAGへの移行または補完を検討できる",
  },
  s04: {
    title: "Neo4jをセットアップしてGraphRAGを動かす",
    subtitle: "Your First GraphRAG in 60 Minutes",
    keyInsight: "Docker Composeで再現性のあるローカル環境を1コマンドで立ち上げる",
  },
  s05: {
    title: "LLMでKGを自動構築する",
    subtitle: "From Text to Graph",
    keyInsight: "LLMGraphTransformerで非構造化テキストから自動抽出し、KG構築コストを劇的に下げる",
  },
  s06: {
    title: "GraphRAGパイプラインを本番品質に仕上げる",
    subtitle: "Schema, Few-Shot, Hybrid Retrieval",
    keyInsight: "スキーマ情報とFew-shot例の注入でText-to-Cypherの生成精度を改善できる",
  },
  s07: {
    title: "転換点：KGはGraphRAGだけではない",
    subtitle: "The Pivot — Beyond GraphRAG",
    keyInsight: "否定クエリはRAGに原理的に不可能。KGのWHERE NOTで構造的に解決できる",
  },
  s08: {
    title: "世界のKG活用事例に学ぶ",
    subtitle: "Industry Patterns from Fortune 100",
    keyInsight: "業界別の実績データと事例パターンを参照し、自社プロジェクトへのKG導入を判断できる",
  },
  s09: {
    title: "エンタープライズKGアーキテクチャ設計",
    subtitle: "Sandwich the LLM with Formal Layers",
    keyInsight: "LLMを形式レイヤでサンドイッチする設計で、確定的な処理とLLMの役割を分離できる",
  },
  s10: {
    title: "AI AgentとKGを統合する",
    subtitle: "KG as Structured Agent Memory",
    keyInsight: "KGをエージェントの構造化メモリとして使い、実行履歴・知識・コンテキストを保持できる",
  },
  s11: {
    title: "KGをエージェントに読ませる規約",
    subtitle: "Graph Traversal Contract",
    keyInsight: "エージェントがKGを幻覚なく正確に読むためには、探索規約（Traversal Contract）を Skill に明示することで再現性を確保できる",
  },
  s12: {
    title: "スモールスタートで始めるKG実装戦略",
    subtitle: "Phase 1 → 2 → 3 Migration",
    keyInsight: "Phase1（ローカル実験）からPhase3（本番）への段階的移行で、KG導入リスクを最小化できる",
  },
  s13: {
    title: "KGプロジェクトの評価と継続改善",
    subtitle: "Measure What Matters",
    keyInsight: "評価データセットと自動評価スクリプトで定量的に測定するサイクルを確立できる",
  },
};

const SESSION_TEXT_EN: Record<SessionId, { title: string; subtitle: string; keyInsight: string }> = {
  s01: {
    title: "Why LLMs Struggle in Production",
    subtitle: "LLM Limitations & the Need for KG",
    keyInsight: "Understand the probabilistic nature of LLMs and how KG bridges the gap with structured, deterministic data.",
  },
  s02: {
    title: "What Is a Knowledge Graph?",
    subtitle: "Things, Not Strings",
    keyInsight: "Model entities and relationships as nodes and edges — a fundamentally different structure from tables or vectors.",
  },
  s03: {
    title: "Where RAG Fails and GraphRAG Begins",
    subtitle: "When Vector Search Fails",
    keyInsight: "Identify the 5 RAG failure patterns and know when to upgrade to GraphRAG.",
  },
  s04: {
    title: "Set Up Neo4j and Run Your First GraphRAG",
    subtitle: "Your First GraphRAG in 60 Minutes",
    keyInsight: "Spin up a reproducible local environment with Docker Compose in a single command.",
  },
  s05: {
    title: "Auto-Build a KG from Text with an LLM",
    subtitle: "From Text to Graph",
    keyInsight: "Use LLMGraphTransformer to extract entities and relationships from unstructured text automatically.",
  },
  s06: {
    title: "Production-Grade GraphRAG Pipeline",
    subtitle: "Schema, Few-Shot, Hybrid Retrieval",
    keyInsight: "Inject schema hints and few-shot examples to dramatically improve Text-to-Cypher accuracy.",
  },
  s07: {
    title: "The Pivot: KG Is More Than GraphRAG",
    subtitle: "The Pivot — Beyond GraphRAG",
    keyInsight: "Negation queries are fundamentally impossible in RAG. KG solves them structurally with WHERE NOT.",
  },
  s08: {
    title: "KG in the Wild: Industry Case Studies",
    subtitle: "Industry Patterns from Fortune 100",
    keyInsight: "Reference real-world adoption data and patterns to build a business case for KG in your organization.",
  },
  s09: {
    title: "Enterprise KG Architecture Design",
    subtitle: "Sandwich the LLM with Formal Layers",
    keyInsight: "Sandwich the LLM between formal layers to clearly separate deterministic processing from generative inference.",
  },
  s10: {
    title: "Integrating KG with AI Agents",
    subtitle: "KG as Structured Agent Memory",
    keyInsight: "Use KG as structured agent memory to persist execution history, knowledge, and context across sessions.",
  },
  s11: {
    title: "How to Make Agents Read Your KG Correctly",
    subtitle: "Graph Traversal Contract",
    keyInsight: "To make agents traverse your KG accurately without hallucination, define a Graph Traversal Contract in the Skill — fixing entry points, relation directions, hop limits, and evidence requirements.",
  },
  s12: {
    title: "KG Adoption Strategy: Start Small",
    subtitle: "Phase 1 → 2 → 3 Migration",
    keyInsight: "Minimize adoption risk by migrating incrementally from local experiments (Phase 1) to production (Phase 3).",
  },
  s13: {
    title: "Measuring and Improving Your KG Project",
    subtitle: "Measure What Matters",
    keyInsight: "Establish a quantitative measurement cycle with evaluation datasets and automated scoring scripts.",
  },
};

const LAYERS_JA = [
  { id: "foundations" as const, label: "KG基礎", sessions: ["s01", "s02", "s03"] as SessionId[] },
  { id: "graphrag" as const, label: "GraphRAG実装", sessions: ["s04", "s05", "s06"] as SessionId[] },
  { id: "beyond" as const, label: "KGを超えて使う", sessions: ["s07", "s08", "s09", "s10", "s11", "s12", "s13"] as SessionId[] },
] as const;

const LAYERS_EN = [
  { id: "foundations" as const, label: "KG Foundations", sessions: ["s01", "s02", "s03"] as SessionId[] },
  { id: "graphrag" as const, label: "GraphRAG in Practice", sessions: ["s04", "s05", "s06"] as SessionId[] },
  { id: "beyond" as const, label: "Beyond GraphRAG", sessions: ["s07", "s08", "s09", "s10", "s11", "s12", "s13"] as SessionId[] },
] as const;

const _sessionMetaCache: Partial<Record<string, Record<SessionId, SessionLocalized>>> = {}

export function getSessionMeta(locale: string): Record<SessionId, SessionLocalized> {
  if (_sessionMetaCache[locale]) return _sessionMetaCache[locale]!
  const text = locale === "ja" ? SESSION_TEXT_JA : SESSION_TEXT_EN;
  const result = Object.fromEntries(
    SESSION_ORDER.map((id) => [id, { ...SESSION_BASE[id], ...text[id] }])
  ) as Record<SessionId, SessionLocalized>;
  _sessionMetaCache[locale] = result
  return result
}

export function getLayers(locale: string) {
  return locale === "ja" ? LAYERS_JA : LAYERS_EN;
}

// Legacy exports for backward compatibility (defaults to Japanese)
export const SESSION_META = getSessionMeta("ja");
export const LAYERS = getLayers("ja");
