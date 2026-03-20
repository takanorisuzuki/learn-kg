export const SESSION_ORDER = [
  "s01", "s02", "s03", "s04", "s05", "s06",
  "s07", "s08", "s09", "s10", "s11", "s12"
] as const;

export type SessionId = typeof SESSION_ORDER[number];

export const SESSION_META: Record<SessionId, {
  id: SessionId;
  title: string;
  subtitle: string;
  level: "beginner" | "intermediate";
  layer: "foundations" | "graphrag" | "beyond";
  keyInsight: string;
  duration: number;
}> = {
  s01: {
    id: "s01",
    title: "LLMはなぜ「業務で使いにくい」のか",
    subtitle: "LLM Limitations & the Need for KG",
    level: "beginner",
    layer: "foundations",
    keyInsight: "LLMの確率的性質を理解し、KGとの組み合わせで補完する設計思想を掴む",
    duration: 30,
  },
  s02: {
    id: "s02",
    title: "ナレッジグラフとは何か",
    subtitle: "Things, Not Strings",
    level: "beginner",
    layer: "foundations",
    keyInsight: "エンティティと関係をノード・エッジで直接表現するKGのデータモデルを理解する",
    duration: 40,
  },
  s03: {
    id: "s03",
    title: "RAGが解けない問題とGraphRAGの登場",
    subtitle: "When Vector Search Fails",
    level: "beginner",
    layer: "foundations",
    keyInsight: "RAGの5つの失敗パターンを把握し、GraphRAGへの移行または補完を検討できる",
    duration: 45,
  },
  s04: {
    id: "s04",
    title: "Neo4jをセットアップしてGraphRAGを動かす",
    subtitle: "Your First GraphRAG in 60 Minutes",
    level: "beginner",
    layer: "graphrag",
    keyInsight: "Docker Composeで再現性のあるローカル環境を1コマンドで立ち上げる",
    duration: 60,
  },
  s05: {
    id: "s05",
    title: "LLMでKGを自動構築する",
    subtitle: "From Text to Graph",
    level: "beginner",
    layer: "graphrag",
    keyInsight: "LLMGraphTransformerで非構造化テキストから自動抽出し、KG構築コストを劇的に下げる",
    duration: 60,
  },
  s06: {
    id: "s06",
    title: "GraphRAGパイプラインを本番品質に仕上げる",
    subtitle: "Schema, Few-Shot, Hybrid Retrieval",
    level: "intermediate",
    layer: "graphrag",
    keyInsight: "スキーマ情報とFew-shot例の注入でText-to-Cypherの生成精度を改善できる",
    duration: 60,
  },
  s07: {
    id: "s07",
    title: "転換点：KGはGraphRAGだけではない",
    subtitle: "The Pivot — Beyond GraphRAG",
    level: "intermediate",
    layer: "beyond",
    keyInsight: "否定クエリはRAGに原理的に不可能。KGのWHERE NOTで構造的に解決できる",
    duration: 45,
  },
  s08: {
    id: "s08",
    title: "世界のKG活用事例に学ぶ",
    subtitle: "Industry Patterns from Fortune 100",
    level: "intermediate",
    layer: "beyond",
    keyInsight: "業界別の実績データと事例パターンを参照し、自社プロジェクトへのKG導入を判断できる",
    duration: 45,
  },
  s09: {
    id: "s09",
    title: "エンタープライズKGアーキテクチャ設計",
    subtitle: "Sandwich the LLM with Formal Layers",
    level: "intermediate",
    layer: "beyond",
    keyInsight: "LLMを形式レイヤでサンドイッチする設計で、確定的な処理とLLMの役割を分離できる",
    duration: 60,
  },
  s10: {
    id: "s10",
    title: "AI AgentとKGを統合する",
    subtitle: "KG as Structured Agent Memory",
    level: "intermediate",
    layer: "beyond",
    keyInsight: "KGをエージェントの構造化メモリとして使い、実行履歴・知識・コンテキストを保持できる",
    duration: 60,
  },
  s11: {
    id: "s11",
    title: "スモールスタートで始めるKG実装戦略",
    subtitle: "Phase 1 → 2 → 3 Migration",
    level: "intermediate",
    layer: "beyond",
    keyInsight: "Phase1（ローカル実験）からPhase3（本番）への段階的移行で、KG導入リスクを最小化できる",
    duration: 60,
  },
  s12: {
    id: "s12",
    title: "KGプロジェクトの評価と継続改善",
    subtitle: "Measure What Matters",
    level: "intermediate",
    layer: "beyond",
    keyInsight: "評価データセットと自動評価スクリプトで定量的に測定するサイクルを確立できる",
    duration: 60,
  },
};

export const LAYERS = [
  {
    id: "foundations" as const,
    label: "KG基礎",
    sessions: ["s01", "s02", "s03"] as SessionId[],
  },
  {
    id: "graphrag" as const,
    label: "GraphRAG実装",
    sessions: ["s04", "s05", "s06"] as SessionId[],
  },
  {
    id: "beyond" as const,
    label: "KGを超えて使う",
    sessions: ["s07", "s08", "s09", "s10", "s11", "s12"] as SessionId[],
  },
] as const;
