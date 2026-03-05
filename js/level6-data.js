const LEVEL6_DATA = {
    id: 6,
    title: "総合演習・マスター",
    icon: "📚",
    description: "SDRG作成の総合力を試す実践問題、品質管理、最新動向",
    modules: [
        {
            id: 601,
            title: "SDRG品質評価と改善",
            duration: "20分",
            content: `
<h2>SDRG品質評価の観点</h2>
<p>高品質なSDRGとは、レビューアーが効率的にデータを理解でき、照会事項が最小限に抑えられるドキュメントです。品質評価は以下の5つの観点から行います。</p>

<h3>品質評価の5軸</h3>
<table>
<thead><tr><th>評価軸</th><th>評価基準</th><th>配点目安</th></tr></thead>
<tbody>
<tr><td>完全性（Completeness）</td><td>必須セクションが全て記載されているか</td><td>25%</td></tr>
<tr><td>正確性（Accuracy）</td><td>バージョン・数値・名称が正しいか</td><td>25%</td></tr>
<tr><td>具体性（Specificity）</td><td>曖昧な表現がなく具体的か</td><td>20%</td></tr>
<tr><td>整合性（Consistency）</td><td>Define.xml等の関連文書と一致しているか</td><td>20%</td></tr>
<tr><td>可読性（Readability）</td><td>表・図を活用し読みやすいか</td><td>10%</td></tr>
</tbody>
</table>

<h2>品質が低いSDRGの典型パターン</h2>

<h3>パターン1: 情報不足型</h3>
<div class="info-box danger">
<div class="info-box-title">問題のある記載</div>
<p>"This is the SDRG for Study ABC-001. Please refer to the protocol and define.xml for details."</p>
</div>
<p><strong>問題点</strong>: SDRGとしての独立性がなく、レビューアーは他の文書を読まなければ何も理解できません。</p>
<p><strong>改善策</strong>: 試験概要、提出ファイル一覧、バリデーション結果を自己完結的に記載します。</p>

<h3>パターン2: コピー過多型</h3>
<div class="info-box danger">
<div class="info-box-title">問題のある記載</div>
<p>プロトコルの全文や、Define.xmlの変数定義をそのまま転記したSDRG。100ページ以上に膨れ上がっている。</p>
</div>
<p><strong>問題点</strong>: レビューアーにとって重要な情報が大量の転記情報に埋もれ、かえって理解しにくくなります。</p>
<p><strong>改善策</strong>: SDRGの役割は「ガイド」であり、要約と背景情報に絞ります。詳細は各文書を参照させます。</p>

<h3>パターン3: バージョン不整合型</h3>
<div class="info-box danger">
<div class="info-box-title">問題のある記載</div>
<p>SDRGに "SDTM IG v3.3" と記載、Define.xmlには "SDTM IG v3.4" と記載。CTバージョンも不一致。</p>
</div>
<p><strong>問題点</strong>: どちらが正しいか不明で、データの信頼性に疑問が生じます。</p>
<p><strong>改善策</strong>: 提出前クロスチェックリストで全バージョン情報を突合します。</p>

<h2>SDRGレビューの実践手順</h2>
<div class="info-box tip">
<div class="info-box-title">4段階レビュープロセス</div>
<ol>
<li><strong>構造チェック</strong>: 必須セクションの有無、目次・ブックマークの正確性</li>
<li><strong>内容チェック</strong>: 各セクションの記載内容が具体的かつ正確であるか</li>
<li><strong>整合性チェック</strong>: Define.xml、データセット、Pinnacle 21レポートとの突合</li>
<li><strong>形式チェック</strong>: PDF要件（ブックマーク、フォント埋め込み、ファイル名、サイズ）</li>
</ol>
</div>

<h2>よくある照会事項と予防策</h2>
<table>
<thead><tr><th>照会事項</th><th>頻度</th><th>SDRG上の予防策</th></tr></thead>
<tbody>
<tr><td>バリデーションWarningの説明不足</td><td>非常に多い</td><td>全Warning個別に原因・影響・対応を記載</td></tr>
<tr><td>Split Datasetの分割基準が不明</td><td>多い</td><td>分割変数・各ファイルの内容・レコード数を明記</td></tr>
<tr><td>Sponsor-defined termの正当化不足</td><td>多い</td><td>各用語についてCTに該当値がない理由を説明</td></tr>
<tr><td>プロトコル改訂のデータ影響が不明</td><td>やや多い</td><td>改訂ごとにデータへの影響を時系列で記載</td></tr>
<tr><td>外部辞書バージョンの記載漏れ</td><td>やや多い</td><td>MedDRA、WHODrug等のバージョン・言語を明記</td></tr>
</tbody>
</table>

<h2>品質改善のためのチェックリスト活用</h2>
<p>Level 4で学んだ28項目のチェックリストに加えて、以下の追加チェックを推奨します。</p>
<table>
<thead><tr><th>No</th><th>追加チェック項目</th></tr></thead>
<tbody>
<tr><td>29</td><td>全てのWarningに原因・影響・対応方針が三点セットで記載されている</td></tr>
<tr><td>30</td><td>Sponsor-defined termに個別の正当化理由が記載されている</td></tr>
<tr><td>31</td><td>プロトコル改訂の影響が時系列で整理されている</td></tr>
<tr><td>32</td><td>国際共同試験の場合、地域固有の情報が記載されている</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>品質評価は完全性・正確性・具体性・整合性・可読性の5軸で行う</li>
<li>情報不足・コピー過多・バージョン不整合が典型的な品質問題</li>
<li>4段階レビュープロセスで体系的に品質を確認する</li>
<li>照会予防を意識してSDRGを作成することが最も効果的な品質向上策</li>
</ul>
</div>`,
            quiz: [
                { id: "q601_1", type: "choice", question: "SDRG品質評価の5軸に含まれないものはどれですか？", options: ["完全性（Completeness）", "正確性（Accuracy）", "装飾性（Decoration）", "可読性（Readability）"], answer: 2, explanation: "品質評価の5軸は完全性、正確性、具体性、整合性、可読性です。装飾性は含まれません。" },
                { id: "q601_2", type: "choice", question: "「情報不足型」のSDRGの最大の問題点は？", options: ["ページ数が少ない", "SDRGとしての独立性がない", "図表が含まれていない", "英語の文法が不正確"], answer: 1, explanation: "情報不足型のSDRGは独立性がなく、レビューアーが他の文書を読まなければ理解できないことが最大の問題です。" },
                { id: "q601_3", type: "choice", question: "SDRGレビューの4段階プロセスの最初のステップは？", options: ["整合性チェック", "形式チェック", "構造チェック", "内容チェック"], answer: 2, explanation: "最初に構造チェック（必須セクションの有無、目次・ブックマークの正確性）を行います。" },
                { id: "q601_4", type: "choice", question: "最も頻度の高い照会事項は？", options: ["ファイルサイズ超過", "バリデーションWarningの説明不足", "PDF形式の不備", "データセット名の誤り"], answer: 1, explanation: "バリデーションWarningの説明不足が最も頻度の高い照会事項です。" }
            ]
        },
        {
            id: 602,
            title: "規制当局ごとの要件比較",
            duration: "15分",
            content: `
<h2>主要規制当局のSDRG要件</h2>
<p>SDRGは主にFDA、PMDA、EMAへの提出で使用されますが、各当局の要件には違いがあります。グローバル提出では、各当局の要件を理解した上でSDRGを作成する必要があります。</p>

<h2>FDA・PMDA・EMAの要件比較</h2>
<table>
<thead><tr><th>項目</th><th>FDA</th><th>PMDA</th><th>EMA</th></tr></thead>
<tbody>
<tr><td>SDRG提出</td><td>必須</td><td>必須（データガイド）</td><td>推奨</td></tr>
<tr><td>記載言語</td><td>英語</td><td>英語（日本語併記可）</td><td>英語</td></tr>
<tr><td>テンプレート</td><td>PhUSE推奨</td><td>PhUSE準拠 + PMDA追加要件</td><td>PhUSE推奨</td></tr>
<tr><td>バリデーションルール</td><td>FDA Business Rules</td><td>FDA + PMDA Rules</td><td>EMA Validation Rules</td></tr>
<tr><td>JP拡張ドメイン</td><td>N/A</td><td>必要に応じて使用</td><td>N/A</td></tr>
<tr><td>提出形式</td><td>PDF</td><td>PDF</td><td>PDF</td></tr>
<tr><td>ファイル名</td><td>sdrg.pdf</td><td>sdrg.pdf</td><td>sdrg.pdf</td></tr>
<tr><td>eCTD配置</td><td>m5 tabulations</td><td>m5 tabulations</td><td>m5 tabulations</td></tr>
</tbody>
</table>

<h2>FDA固有の要件</h2>
<h3>FDA Technical Conformance Guide（TCG）</h3>
<p>FDAはTechnical Conformance Guideを公開しており、SDRGの作成に関する具体的なガイダンスを提供しています。</p>
<table>
<thead><tr><th>TCGの主要ポイント</th><th>説明</th></tr></thead>
<tbody>
<tr><td>Study Data Standards Catalog</td><td>提出に使用すべきCDISCバージョンの指定</td></tr>
<tr><td>PDF要件</td><td>ブックマーク、フォント埋め込み、ファイルサイズ上限</td></tr>
<tr><td>ファイル命名規則</td><td>小文字、CDISC準拠の名称</td></tr>
<tr><td>データセットサイズ上限</td><td>5GB per file（XPT v5）</td></tr>
</tbody>
</table>

<h2>PMDA固有の要件（復習と深掘り）</h2>
<h3>PMDAの電子データ提出ガイドライン</h3>
<table>
<thead><tr><th>要件</th><th>詳細</th></tr></thead>
<tbody>
<tr><td>対象範囲</td><td>新医薬品の承認申請（2020年4月以降義務化）</td></tr>
<tr><td>JP拡張</td><td>CDISC Japanが策定、RFICDTCやDAドメイン等</td></tr>
<tr><td>バリデーション</td><td>Pinnacle 21のPMDA Rulesを追加で実行</td></tr>
<tr><td>照会対応</td><td>日本人部分集団データ、JP拡張未使用理由の説明</td></tr>
</tbody>
</table>

<h3>PMDA特有の照会パターン</h3>
<table>
<thead><tr><th>照会パターン</th><th>SDRGでの予防策</th></tr></thead>
<tbody>
<tr><td>日本人被験者の識別方法</td><td>DM/SCドメインでRACE、ETHNIC、COUNTRYの扱いを説明</td></tr>
<tr><td>同意取得日の記録</td><td>SUPPDM内のRFICDTCの記載方法を説明</td></tr>
<tr><td>薬剤管理情報</td><td>DAドメインの使用有無と構造を説明</td></tr>
<tr><td>日本の保険病名との対応</td><td>MedDRAコーディングと日本の診断名の関係を補足</td></tr>
</tbody>
</table>

<h2>EMAの状況</h2>
<p>EMAは2024年以降、臨床試験データの標準化提出を段階的に強化しています。CDISC標準に準拠したデータ提出が推奨されており、SDRGの提出も将来的に義務化される可能性があります。</p>
<table>
<thead><tr><th>EMAの特徴</th><th>説明</th></tr></thead>
<tbody>
<tr><td>CDISC採用状況</td><td>段階的に導入中、義務化に向けた移行期間</td></tr>
<tr><td>独自ルール</td><td>EMA Validation Rulesが存在（Pinnacle 21対応）</td></tr>
<tr><td>言語</td><td>英語</td></tr>
<tr><td>追加要件</td><td>EU CTRとの連携を考慮</td></tr>
</tbody>
</table>

<h2>グローバル提出戦略</h2>
<div class="info-box tip">
<div class="info-box-title">複数当局への同時提出の場合</div>
<ol>
<li><strong>共通ベース</strong>: PhUSEテンプレートをベースに共通部分を作成</li>
<li><strong>FDA対応</strong>: FDA Business Rulesの結果を記載</li>
<li><strong>PMDA対応</strong>: PMDA Business Rulesの結果とJP拡張情報を追加</li>
<li><strong>EMA対応</strong>: EMA Validation Rulesの結果を追加</li>
<li><strong>統合版作成</strong>: 全当局の要件を満たす統合SDRGを作成するか、当局別に分冊するか判断</li>
</ol>
</div>

<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>FDA・PMDA・EMAの要件には共通点が多いがPMDAのJP拡張等の固有要件がある</li>
<li>FDAのTCGはSDRG作成の重要な参考文書</li>
<li>PMDAでは日本人部分集団やJP拡張に関する照会が頻出する</li>
<li>グローバル提出では共通ベースに各当局の固有要件を追加する戦略が有効</li>
</ul>
</div>`,
            quiz: [
                { id: "q602_1", type: "choice", question: "FDA、PMDA、EMAのうちSDRG提出が「推奨」（必須ではない）の当局は？", options: ["FDA", "PMDA", "EMA", "全て必須"], answer: 2, explanation: "EMAではSDRGの提出は推奨段階であり、FDAとPMDAでは必須です。" },
                { id: "q602_2", type: "choice", question: "PMDA固有の照会パターンとして頻出するのは？", options: ["英語の文法チェック", "日本人被験者の識別方法", "プログラミング言語の確認", "統計手法の妥当性"], answer: 1, explanation: "PMDAでは日本人被験者の識別方法（RACE、ETHNIC、COUNTRYの扱い）に関する照会が頻出します。" },
                { id: "q602_3", type: "choice", question: "FDAが公開しているSDRG作成のガイダンス文書は？", options: ["PhUSE Template", "Technical Conformance Guide（TCG）", "Japan Extension Guide", "CDISC User Guide"], answer: 1, explanation: "FDAはTechnical Conformance Guide（TCG）でSDRG作成に関する具体的なガイダンスを提供しています。" },
                { id: "q602_4", type: "choice", question: "グローバル提出戦略で最初に行うべきことは？", options: ["PMDA固有要件の対応", "EMA Validation Rulesの確認", "PhUSEテンプレートをベースに共通部分を作成", "各国語への翻訳"], answer: 2, explanation: "まずPhUSEテンプレートをベースに共通部分を作成し、その後各当局の固有要件を追加します。" }
            ]
        },
        {
            id: 603,
            title: "SDRG作成ワークフローの最適化",
            duration: "15分",
            content: `
<h2>SDRG作成の効率化</h2>
<p>SDRGの作成は多くの情報源から情報を収集し統合する作業です。効率的なワークフローを構築することで、品質を維持しながら作成時間を短縮できます。</p>

<h2>情報源と収集タイミング</h2>
<table>
<thead><tr><th>情報源</th><th>SDRG上の使用箇所</th><th>収集タイミング</th></tr></thead>
<tbody>
<tr><td>プロトコル（全Amendment含む）</td><td>Study Overview, Amendment影響</td><td>SDRG着手時</td></tr>
<tr><td>SDTM Mapping Specification</td><td>Domain-Specific Info</td><td>SDTM作成完了後</td></tr>
<tr><td>Annotated CRF</td><td>Domain-Specific Info参照</td><td>SDTM作成完了後</td></tr>
<tr><td>Define.xml</td><td>整合性確認、相互参照</td><td>Define.xml作成後</td></tr>
<tr><td>Pinnacle 21 Report</td><td>Data Conformance</td><td>最終バリデーション後</td></tr>
<tr><td>SDTM Datasets</td><td>レコード数・ファイルサイズ</td><td>最終データセット後</td></tr>
</tbody>
</table>

<h2>作成スケジュールの設計</h2>
<div class="info-box tip">
<div class="info-box-title">推奨タイムライン</div>
<table>
<thead><tr><th>フェーズ</th><th>期間目安</th><th>作業内容</th></tr></thead>
<tbody>
<tr><td>Phase 1: 準備</td><td>DB Lock 4週前</td><td>テンプレート準備、Study Overview/Trial Design の下書き</td></tr>
<tr><td>Phase 2: 本文作成</td><td>DB Lock 2週前</td><td>Submission Overview, Domain-Specific Info, CT/Dictionary</td></tr>
<tr><td>Phase 3: P21対応</td><td>DB Lock後 1週間</td><td>Data Conformance（最終P21結果に基づく）</td></tr>
<tr><td>Phase 4: レビュー</td><td>提出 2週前</td><td>クロスチェック、多部門レビュー</td></tr>
<tr><td>Phase 5: 最終化</td><td>提出 1週前</td><td>PDF変換、eCTD統合</td></tr>
</tbody>
</table>
</div>

<h2>テンプレートのカスタマイズ</h2>
<p>PhUSEテンプレートをそのまま使用するのではなく、試験の特性に合わせてカスタマイズすることが重要です。</p>
<table>
<thead><tr><th>試験の特性</th><th>カスタマイズ内容</th></tr></thead>
<tbody>
<tr><td>単一国試験</td><td>地域差セクションを省略</td></tr>
<tr><td>国際共同試験</td><td>地域固有情報セクションを追加</td></tr>
<tr><td>オンコロジー試験</td><td>TU/TR/RSドメイン（腫瘍関連）のセクション追加</td></tr>
<tr><td>ワクチン試験</td><td>IS/PCドメイン（免疫関連）のセクション追加</td></tr>
<tr><td>PK試験</td><td>PC/PPドメインの詳細説明セクション追加</td></tr>
</tbody>
</table>

<h2>共通ミスの予防策</h2>
<table>
<thead><tr><th>共通ミス</th><th>原因</th><th>予防策</th></tr></thead>
<tbody>
<tr><td>レコード数の不一致</td><td>データ更新後にSDRGを修正していない</td><td>最終データセットからレコード数を自動取得</td></tr>
<tr><td>バージョン不整合</td><td>DB Lock後のバージョン更新を反映していない</td><td>バージョン情報の一元管理</td></tr>
<tr><td>セクションの漏れ</td><td>チェックリスト未実施</td><td>28項目チェックリストの必須実施</td></tr>
<tr><td>P21結果の古い版の使用</td><td>中間版のレポートを使用</td><td>最終バリデーション後にData Conformanceを更新</td></tr>
<tr><td>PDF変換時の崩れ</td><td>フォント・レイアウトの問題</td><td>PDF変換後の目視確認とブックマーク検証</td></tr>
</tbody>
</table>

<h2>自動化可能な領域</h2>
<p>SDRG作成の一部は自動化またはテンプレート化が可能です。</p>
<table>
<thead><tr><th>領域</th><th>自動化の方法</th><th>効果</th></tr></thead>
<tbody>
<tr><td>ファイル一覧表</td><td>データセットからメタデータを自動抽出</td><td>レコード数・ファイルサイズの正確性確保</td></tr>
<tr><td>P21サマリー表</td><td>P21レポートからの自動転記</td><td>転記ミスの防止</td></tr>
<tr><td>バージョン情報</td><td>Specificationファイルからの自動挿入</td><td>不整合の防止</td></tr>
<tr><td>整合性チェック</td><td>SDRG-Define.xml間の自動比較</td><td>チェック時間の短縮</td></tr>
</tbody>
</table>

<h2>チーム連携とコミュニケーション</h2>
<div class="info-box tip">
<div class="info-box-title">SDRG作成に関わるロール</div>
<table>
<thead><tr><th>ロール</th><th>SDRG作成での貢献</th></tr></thead>
<tbody>
<tr><td>SDTM Programmer</td><td>SDRG作成の主担当、Domain-Specific Infoの詳細</td></tr>
<tr><td>Data Manager</td><td>データ収集の背景情報、プロトコル改訂の影響</td></tr>
<tr><td>Biostatistician</td><td>試験デザイン、エンドポイントの正確性確認</td></tr>
<tr><td>Medical Writer</td><td>文書の品質レビュー、可読性の向上</td></tr>
<tr><td>Regulatory Affairs</td><td>規制要件の確認、提出形式の検証</td></tr>
</tbody>
</table>
</div>

<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>SDRG作成は5フェーズで計画的に進め、DB Lock前から着手する</li>
<li>試験の特性に応じてPhUSEテンプレートをカスタマイズする</li>
<li>自動化可能な領域を活用してミスを減らし効率を上げる</li>
<li>多部門のチーム連携がSDRGの品質向上に不可欠</li>
</ul>
</div>`,
            quiz: [
                { id: "q603_1", type: "choice", question: "SDRG作成でData Conformanceセクションを記載するのに最適なタイミングは？", options: ["試験開始時", "DB Lock前", "最終バリデーション（Pinnacle 21）後", "eCTD統合後"], answer: 2, explanation: "Data Conformanceセクションは最終バリデーション結果に基づいて記載するため、最終P21実行後が最適です。" },
                { id: "q603_2", type: "choice", question: "オンコロジー試験のSDRGで追加を検討すべきドメインセクションは？", options: ["PC/PPドメイン", "TU/TR/RSドメイン", "IS/PCドメイン", "DAドメイン"], answer: 1, explanation: "オンコロジー試験ではTU（Tumor Identification）、TR（Tumor Results）、RS（Disease Response）ドメインの説明セクションの追加を検討します。" },
                { id: "q603_3", type: "choice", question: "SDRG作成の主担当として最も適切なロールは？", options: ["Medical Writer", "SDTM Programmer", "Project Manager", "Clinical Monitor"], answer: 1, explanation: "SDTM Programmerがデータの構造・内容を最もよく理解しており、SDRG作成の主担当に最適です。" }
            ]
        },
        {
            id: 604,
            title: "総合確認テスト",
            duration: "20分",
            content: `
<h2>SDRGマスター認定に向けて</h2>
<p>この最終モジュールでは、Level 1からLevel 6まで学んだ全内容を横断的に確認します。SDRGの基礎知識から実践的な応用まで、総合的な理解度をテストします。</p>

<h2>総復習：SDRGの全体像</h2>
<table>
<thead><tr><th>レベル</th><th>学習内容</th><th>キーワード</th></tr></thead>
<tbody>
<tr><td>Level 1</td><td>SDRG基礎</td><td>定義、目的、構造、Study Overview</td></tr>
<tr><td>Level 2</td><td>提出・適合性</td><td>Submission Overview、Data Conformance、Domain-Specific</td></tr>
<tr><td>Level 3</td><td>Trial Design・CT・Define.xml</td><td>TE/TA/TV/TS/TI、MedDRA/WHODrug、役割分担</td></tr>
<tr><td>Level 4</td><td>PMDA対応・実践</td><td>JP拡張、チェックリスト、テンプレート</td></tr>
<tr><td>Level 5</td><td>応用・ケーススタディ</td><td>複雑デザイン、Issue対応、整合性管理</td></tr>
<tr><td>Level 6</td><td>総合演習・マスター</td><td>品質評価、規制比較、ワークフロー</td></tr>
</tbody>
</table>

<h2>SDRGセクション対応表</h2>
<p>SDRGの全10セクションと、それぞれの目的・記載すべき情報の対応関係を最終確認します。</p>
<table>
<thead><tr><th>Section</th><th>目的</th><th>必須情報</th></tr></thead>
<tbody>
<tr><td>1. Introduction</td><td>SDRGの目的と範囲を説明</td><td>Study ID、関連文書、SDTM IGバージョン</td></tr>
<tr><td>2. Study Overview</td><td>試験の全体像を提示</td><td>デザイン、エンドポイント、被験者数、Amendment</td></tr>
<tr><td>3. Submission Overview</td><td>提出ファイルの全体像</td><td>ディレクトリ構造、ファイル一覧、Split Dataset</td></tr>
<tr><td>4. Data Conformance</td><td>バリデーション結果と対応</td><td>P21バージョン、サマリー、Issue個別説明</td></tr>
<tr><td>5. Domain-Specific Info</td><td>ドメインの特記事項</td><td>背景情報、SUPP変数、コーディング基準</td></tr>
<tr><td>6. Trial Design</td><td>試験デザインドメインの説明</td><td>TE/TA/TV/TS/TIの構成と設計意図</td></tr>
<tr><td>7. CT and Dictionaries</td><td>用語・辞書情報</td><td>CTバージョン、MedDRA/WHODrug、Sponsor term</td></tr>
<tr><td>8. Data Definition</td><td>Define.xmlとの関係</td><td>相互参照、役割分担の明記</td></tr>
<tr><td>9. Issues Summary</td><td>未解決課題の総括</td><td>残存Issue、今後の対応計画</td></tr>
<tr><td>10. Appendices</td><td>補足資料</td><td>追加の図表、詳細データ</td></tr>
</tbody>
</table>

<h2>最終チェック：SDRGマスターの条件</h2>
<div class="info-box tip">
<div class="info-box-title">SDRGマスターに求められる能力</div>
<ol>
<li><strong>基礎知識</strong>: SDRGの定義・目的・構造を正確に説明できる</li>
<li><strong>記載スキル</strong>: 各セクションの内容を具体的・自己完結的に記載できる</li>
<li><strong>バリデーション対応</strong>: Pinnacle 21の結果を適切に解釈し説明できる</li>
<li><strong>整合性管理</strong>: Define.xml等の関連文書との整合性を確保できる</li>
<li><strong>規制理解</strong>: FDA/PMDA/EMAの要件の違いを理解し対応できる</li>
<li><strong>品質管理</strong>: チェックリストとレビュープロセスで品質を確保できる</li>
<li><strong>効率化</strong>: ワークフローの最適化と自動化により効率的に作成できる</li>
</ol>
</div>

<h2>重要用語の最終確認</h2>
<table>
<thead><tr><th>略語</th><th>正式名称</th><th>SDRGとの関係</th></tr></thead>
<tbody>
<tr><td>SDRG</td><td>Study Data Reviewer's Guide</td><td>本文書そのもの</td></tr>
<tr><td>SDTM</td><td>Study Data Tabulation Model</td><td>SDRGが説明するデータモデル</td></tr>
<tr><td>eCTD</td><td>electronic Common Technical Document</td><td>SDRGの提出先フレームワーク</td></tr>
<tr><td>P21</td><td>Pinnacle 21</td><td>Data Conformanceの情報源</td></tr>
<tr><td>CT</td><td>Controlled Terminology</td><td>CT and Dictionariesセクション</td></tr>
<tr><td>PhUSE</td><td>Pharmaceutical Users Software Exchange</td><td>テンプレートの提供元</td></tr>
<tr><td>TCG</td><td>Technical Conformance Guide</td><td>FDAの技術要件ガイド</td></tr>
</tbody>
</table>

<h2>SDRGの良い記載の原則（最終版）</h2>
<div class="info-box success">
<div class="info-box-title">5つの原則</div>
<ol>
<li><strong>具体的であること</strong>: 数値、バージョン、日付を明記し曖昧さを排除する</li>
<li><strong>自己完結的であること</strong>: SDRGだけでデータの背景を理解できるようにする</li>
<li><strong>背景を説明すること</strong>: 「何が」だけでなく「なぜ」を説明する</li>
<li><strong>視覚的であること</strong>: 表、図、構造化されたフォーマットを活用する</li>
<li><strong>整合的であること</strong>: Define.xml等の関連文書と矛盾がないことを確保する</li>
</ol>
</div>

<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>SDRGは10セクション構成で、各セクションに明確な目的と必須情報がある</li>
<li>SDRGマスターには基礎知識から効率化まで7つの能力が求められる</li>
<li>良い記載の5原則（具体的・自己完結的・背景説明・視覚的・整合的）を常に意識する</li>
<li>継続的な学習と実践がSDRG品質の向上につながる</li>
</ul>
</div>`,
            quiz: [
                { id: "q604_1", type: "choice", question: "SDRGの必須セクション数はいくつですか？", options: ["6", "8", "10", "12"], answer: 1, explanation: "SDRGはPhUSE推奨テンプレートで8つの必須セクションと2つの推奨セクション（計10セクション）から構成されます。必須は8つです。" },
                { id: "q604_2", type: "choice", question: "SDRGが説明するデータモデルは？", options: ["ADaM", "SDTM", "SEND", "CDASH"], answer: 1, explanation: "SDRGはSDTM（Study Data Tabulation Model）データセットを提出する際に添付するレビューアーガイドです。" },
                { id: "q604_3", type: "choice", question: "SDRGの「良い記載の5原則」に含まれないものは？", options: ["具体的であること", "自己完結的であること", "装飾的であること", "整合的であること"], answer: 2, explanation: "5原則は具体的、自己完結的、背景説明、視覚的、整合的です。装飾的であることは含まれません。" },
                { id: "q604_4", type: "choice", question: "Data Conformanceセクションの情報源となるツールは？", options: ["SAS", "Pinnacle 21", "Microsoft Word", "Define.xml Editor"], answer: 1, explanation: "Pinnacle 21のバリデーション結果がData Conformanceセクションの主要な情報源です。" },
                { id: "q604_5", type: "choice", question: "SDRGテンプレートの提供元として推奨される団体は？", options: ["FDA", "PMDA", "PhUSE", "WHO"], answer: 2, explanation: "PhUSE（Pharmaceutical Users Software Exchange）がSDRGテンプレートの提供元として推奨されています。" },
                { id: "q604_6", type: "choice", question: "SDRGとDefine.xmlの役割分担として正しいものは？", options: ["両方に同じ情報を全て記載する", "SDRGには変数定義の詳細を記載する", "Define.xmlにはバリデーション結果を記載する", "SDRGには「なぜ」を、Define.xmlには「何が」を記載する"], answer: 3, explanation: "SDRGは「なぜそうなっているか」、Define.xmlは「何がどう定義されているか」を記載するのが正しい役割分担です。" }
            ]
        }
    ]
};
