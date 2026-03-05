const LEVEL5_DATA = {
    id: 5,
    title: "応用・ケーススタディ",
    icon: "📚",
    description: "複雑なシナリオへの対応、ケーススタディ、トラブルシューティング",
    modules: [
        {
            id: 501,
            title: "複雑な試験デザインのSDRG記載",
            duration: "20分",
            content: `
<h2>複雑な試験デザインとは</h2>
<p>実際の臨床試験では、単純な並行群間比較試験だけでなく、クロスオーバー試験、アダプティブデザイン、バスケット試験など複雑なデザインが採用されることがあります。SDRGではこれらの特殊性をレビューアーに正確に伝える必要があります。</p>

<h2>クロスオーバー試験のSDRG記載</h2>
<p>クロスオーバー試験では、被験者が複数の治療を順番に受けるため、以下の点をSDRGに記載します。</p>
<table>
<thead><tr><th>記載項目</th><th>説明</th><th>記載場所</th></tr></thead>
<tbody>
<tr><td>Period構造</td><td>各Periodの治療内容と順序</td><td>Study Overview</td></tr>
<tr><td>Washout期間</td><td>Washoutの長さと設定根拠</td><td>Study Overview</td></tr>
<tr><td>EPOCH/ARM</td><td>各PeriodとEPOCHの対応</td><td>Trial Design</td></tr>
<tr><td>TAドメイン</td><td>Sequence毎のArm構成</td><td>Trial Design</td></tr>
<tr><td>EXドメイン</td><td>Period毎の投与記録</td><td>Domain-Specific</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">クロスオーバー試験のStudy Overview記載例</div>
<p>This was a 2-period, 2-sequence crossover study. Subjects were randomized to Sequence AB (Drug A in Period 1, Drug B in Period 2) or Sequence BA (Drug B in Period 1, Drug A in Period 2). A 14-day washout period separated the two treatment periods. The TA domain reflects all four possible sequences including the washout element.</p>
</div>

<h2>アダプティブデザインの考慮点</h2>
<p>アダプティブデザインでは試験途中でデザインが変更される可能性があるため、SDRGで特に注意が必要です。</p>
<table>
<thead><tr><th>アダプティブ要素</th><th>SDRGでの記載ポイント</th></tr></thead>
<tbody>
<tr><td>中間解析による用量変更</td><td>どの時点でどのArmが変更されたかを明記</td></tr>
<tr><td>サンプルサイズ再推定</td><td>当初計画と最終的な被験者数の差異を説明</td></tr>
<tr><td>治療群の追加・削除</td><td>ARM/ARMCDの変遷とDMドメインでの扱いを説明</td></tr>
<tr><td>エンドポイントの変更</td><td>変更時期とデータ収集への影響を記載</td></tr>
</tbody>
</table>

<h2>多施設国際共同試験の留意点</h2>
<p>多施設国際共同試験のSDRGでは、地域差に関する情報が重要です。</p>
<ul>
<li><strong>COUNTRY変数</strong>: DMドメインのCOUNTRY変数に格納される国コードの一覧を記載</li>
<li><strong>地域別の検査機関</strong>: Central LabとLocal Labの使い分け、地域による基準値の違い</li>
<li><strong>言語・辞書</strong>: MedDRAの使用言語（英語コーディングか各国語からの翻訳か）</li>
<li><strong>規制地域差</strong>: FDA/PMDA/EMAで要件が異なる場合の対応</li>
</ul>

<h2>プロトコル改訂の詳細記載</h2>
<p>複数のプロトコル改訂がある場合、SDRGにはデータに影響する改訂を詳細に記載します。</p>
<table>
<thead><tr><th>Amendment</th><th>Effective Date</th><th>Change</th><th>Impact on Data</th></tr></thead>
<tbody>
<tr><td>Amendment 1</td><td>2023-03-01</td><td>Added ECG at Week 12</td><td>EG domain: subjects enrolled before amendment have no Week 12 ECG</td></tr>
<tr><td>Amendment 2</td><td>2023-06-01</td><td>Changed Visit 5 window</td><td>SV domain: visit dates may exceed original window for pre-amendment subjects</td></tr>
<tr><td>Amendment 3</td><td>2023-09-15</td><td>Added HbA1c at Week 2</td><td>LB domain: Week 2 HbA1c available only for post-amendment subjects</td></tr>
</tbody>
</table>
<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>複雑な試験デザインではStudy OverviewとTrial Designの記載が特に重要</li>
<li>クロスオーバー試験ではPeriod構造・Washout・TA構成を明確に説明する</li>
<li>アダプティブデザインでは変更時期とデータへの影響を時系列で記載する</li>
<li>多施設国際共同試験では地域差に関する情報を丁寧に記載する</li>
</ul>
</div>`,
            quiz: [
                { id: "q501_1", type: "choice", question: "クロスオーバー試験のSDRGで記載すべき特有の情報はどれですか？", options: ["被験者の年齢分布", "Washout期間の長さと設定根拠", "統計解析手法の詳細", "CRFのページ数"], answer: 1, explanation: "クロスオーバー試験ではWashout期間の長さと設定根拠をStudy Overviewに記載する必要があります。" },
                { id: "q501_2", type: "choice", question: "アダプティブデザインで中間解析により用量が変更された場合、SDRGにはどう記載すべきですか？", options: ["記載不要", "どの時点でどのArmが変更されたかを明記", "統計解析計画書を参照させる", "変更前のデータを削除する旨を記載"], answer: 1, explanation: "アダプティブデザインでは変更の時点とどのArmが影響を受けたかを明確に記載します。" },
                { id: "q501_3", type: "choice", question: "多施設国際共同試験のSDRGで地域差に関する記載として適切でないものは？", options: ["COUNTRY変数の国コード一覧", "Central LabとLocal Labの使い分け", "各国の政治体制の説明", "MedDRAの使用言語"], answer: 2, explanation: "各国の政治体制はSDRGの記載対象ではありません。データに関連する地域差情報を記載します。" },
                { id: "q501_4", type: "choice", question: "プロトコル改訂のSDRG記載で最も重要な情報は？", options: ["改訂の承認者名", "改訂のデータへの影響", "改訂書類のページ数", "改訂の翻訳状況"], answer: 1, explanation: "SDRGではプロトコル改訂がデータにどのような影響を与えるかを記載することが最も重要です。" }
            ]
        },
        {
            id: 502,
            title: "バリデーションIssue対応の実践",
            duration: "20分",
            content: `
<h2>バリデーションIssue対応の基本原則</h2>
<p>Pinnacle 21のバリデーション結果をSDRGに記載する際、単にIssueを列挙するだけでは不十分です。レビューアーが納得できる説明を提供することが求められます。</p>

<h3>対応方針の判断フローチャート</h3>
<table>
<thead><tr><th>ステップ</th><th>判断内容</th><th>アクション</th></tr></thead>
<tbody>
<tr><td>1</td><td>Issueは修正可能か？</td><td>可能なら修正してリバリデーション</td></tr>
<tr><td>2</td><td>修正不可の場合、正当な理由があるか？</td><td>理由を具体的に記載</td></tr>
<tr><td>3</td><td>データ収集に起因するか？</td><td>Data as collectedとして背景を説明</td></tr>
<tr><td>4</td><td>意図的な設計か？</td><td>By designとしてビジネス要件を説明</td></tr>
<tr><td>5</td><td>次回提出で修正予定か？</td><td>Will be correctedとして計画を記載</td></tr>
</tbody>
</table>

<h2>頻出Issueパターンと対応例</h2>

<h3>パターン1: VISITNUM不整合（SD0064）</h3>
<div class="info-box success">
<div class="info-box-title">良い対応例</div>
<p>SD0064: Inconsistent VISITNUM in VS domain (12 records).<br><br>
<strong>Root Cause</strong>: Unscheduled safety visits were conducted per protocol amendment 2 (effective 2023-06-01).<br>
<strong>Impact</strong>: These 12 records in VS have fractional VISITNUM values (e.g., 4.1, 4.2) assigned between scheduled visits.<br>
<strong>Disposition</strong>: By design. VISIT variable contains "UNSCHEDULED" to clearly identify these records. No impact on data integrity.</p>
</div>
<div class="info-box danger">
<div class="info-box-title">悪い対応例</div>
<p>SD0064: Known issue with VISITNUM. Will investigate.</p>
</div>

<h3>パターン2: 基準値範囲欠落（SD1015）</h3>
<div class="info-box success">
<div class="info-box-title">良い対応例</div>
<p>SD1015: Missing LBORNRLO/LBORNRHI in LB domain (45 records).<br><br>
<strong>Root Cause</strong>: Reference ranges were not provided by the local laboratory for 3 esoteric tests (Test A, Test B, Test C).<br>
<strong>Impact</strong>: 45 records across 15 subjects lack reference ranges. Central lab results for the same tests include reference ranges.<br>
<strong>Disposition</strong>: Data as collected. The sponsor contacted the lab but ranges were not available. LBNRIND is also null for these records.</p>
</div>

<h3>パターン3: Sponsor-defined term（SD1002）</h3>
<div class="info-box success">
<div class="info-box-title">良い対応例</div>
<p>SD1002: Non-standard value "DOSE PAUSED" in AEACN (AE domain, 8 records).<br><br>
<strong>Root Cause</strong>: The protocol defines a "dose pause" as distinct from "dose interruption". During a dose pause, the subject temporarily stops taking the drug with a planned resumption date, whereas a dose interruption has no planned resumption.<br>
<strong>Impact</strong>: 8 AE records use AEACN = "DOSE PAUSED" instead of the CT value "DRUG INTERRUPTED".<br>
<strong>Disposition</strong>: By design. No CT value in codelist C66767 (ACN) accurately represents this protocol-specific concept.</p>
</div>

<h2>FDA/PMDA両方への対応</h2>
<p>FDA提出とPMDA提出の両方がある場合、バリデーション結果はそれぞれのルールセットで記載します。</p>
<table>
<thead><tr><th>ルールセット</th><th>記載内容</th></tr></thead>
<tbody>
<tr><td>CDISC Conformance Rules</td><td>CDISC標準への準拠状況</td></tr>
<tr><td>FDA Business Rules</td><td>FDA固有の要件への準拠</td></tr>
<tr><td>PMDA Business Rules</td><td>PMDA固有の要件への準拠（日本提出時）</td></tr>
</tbody>
</table>

<h2>Issue説明の三要素</h2>
<div class="info-box tip">
<div class="info-box-title">必ず含めるべき三要素</div>
<ol>
<li><strong>Root Cause（原因）</strong>: なぜそのIssueが発生しているのか</li>
<li><strong>Impact（影響）</strong>: 何件のレコード/被験者に影響があるのか</li>
<li><strong>Disposition（対応方針）</strong>: どのような方針で対処しているのか</li>
</ol>
</div>

<h2>Issueの優先順位づけ</h2>
<table>
<thead><tr><th>優先度</th><th>Severity</th><th>対応レベル</th></tr></thead>
<tbody>
<tr><td>最高</td><td>Error</td><td>必ず修正するか、詳細な正当化を記載</td></tr>
<tr><td>高</td><td>Warning（データ品質関連）</td><td>可能な限り修正、残存は個別説明</td></tr>
<tr><td>中</td><td>Warning（形式的）</td><td>説明を記載、修正が望ましい</td></tr>
<tr><td>低</td><td>Notice</td><td>Acknowledgedで可、大量の場合は説明推奨</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>Issue対応は5ステップの判断フローに従って方針を決定する</li>
<li>各Issueには原因・影響・対応方針の三要素を必ず含める</li>
<li>曖昧な表現や他文書への丸投げは避ける</li>
<li>Errorは最優先で対応し、Noticeでも大量の場合は説明を追加する</li>
</ul>
</div>`,
            quiz: [
                { id: "q502_1", type: "choice", question: "バリデーションIssueの説明で必ず含めるべき三要素は？", options: ["名前・日付・場所", "原因・影響・対応方針", "入力・処理・出力", "計画・実行・評価"], answer: 1, explanation: "Root Cause（原因）、Impact（影響）、Disposition（対応方針）の三要素を必ず含めます。" },
                { id: "q502_2", type: "choice", question: "Disposition「Data as collected」はどのような場合に使用しますか？", options: ["プログラムのバグの場合", "データ収集時点で原データがそのようになっている場合", "次回提出で修正予定の場合", "意図的な設計の場合"], answer: 1, explanation: "Data as collectedは、原データが正しく収集されている場合に使用します。" },
                { id: "q502_3", type: "choice", question: "最も優先度が高いバリデーションIssueのSeverityは？", options: ["Notice", "Information", "Warning", "Error"], answer: 3, explanation: "Errorが最も優先度が高く、必ず修正するか詳細な正当化を記載する必要があります。" },
                { id: "q502_4", type: "choice", question: "PMDA提出の場合、Data Conformanceセクションに含めるべきルールセットは？", options: ["FDA Business Rulesのみ", "PMDA Business Rulesのみ", "CDISC Conformance Rules、FDA Business Rules、PMDA Business Rules", "CDISCルールのみ"], answer: 2, explanation: "PMDA提出ではCDISC Conformance Rules、FDA Business Rules、PMDA Business Rulesの全てを含めます。" }
            ]
        },
        {
            id: 503,
            title: "ケーススタディ：SDRG作成シミュレーション",
            duration: "25分",
            content: `
<h2>ケーススタディの概要</h2>
<p>架空の臨床試験「Study XYZ-301」のSDRG作成を通じて、これまで学んだ知識を統合的に活用する実践演習です。</p>

<h3>試験の基本情報</h3>
<table>
<thead><tr><th>項目</th><th>内容</th></tr></thead>
<tbody>
<tr><td>Protocol Number</td><td>XYZ-301</td></tr>
<tr><td>Phase</td><td>Phase III</td></tr>
<tr><td>Design</td><td>Randomized, double-blind, placebo-controlled</td></tr>
<tr><td>Indication</td><td>Chronic Kidney Disease (CKD)</td></tr>
<tr><td>Arms</td><td>Drug X 5mg, Drug X 10mg, Placebo (1:1:1)</td></tr>
<tr><td>Treatment Period</td><td>52 weeks</td></tr>
<tr><td>Enrolled / Randomized</td><td>680 / 600 (200 per arm)</td></tr>
<tr><td>Countries</td><td>Japan, USA, Germany, South Korea</td></tr>
<tr><td>SDTM IG</td><td>v3.4</td></tr>
<tr><td>CDISC CT</td><td>2024-06-28</td></tr>
</tbody>
</table>

<h2>Step 1: Study Overview作成</h2>
<div class="info-box success">
<div class="info-box-title">記載例</div>
<p>Study XYZ-301 is a Phase III, randomized, double-blind, placebo-controlled, parallel-group, multinational study to evaluate the efficacy and safety of Drug X in subjects with chronic kidney disease (CKD) stages 3-4.<br><br>
Subjects were randomized 1:1:1 to Drug X 5mg QD, Drug X 10mg QD, or placebo. The study comprised a screening period (up to 4 weeks), a treatment period (52 weeks), and a follow-up period (4 weeks). The study was conducted across 45 sites in 4 countries (Japan, USA, Germany, South Korea).<br><br>
A total of 680 subjects were enrolled, 600 were randomized, and 542 completed the study. 80 subjects were screen failures (ARMCD = "SCRNFAIL" in DM).<br><br>
Protocol Amendment 2 (effective 2024-02-15): Added eGFR measurement at Week 4, impacting the LB domain for subjects enrolled after this date.</p>
</div>

<h2>Step 2: Submission Overview作成</h2>
<p>提出ファイル一覧を整理します。このケースでは22のデータセットが提出されます。</p>
<table>
<thead><tr><th>No</th><th>Dataset</th><th>Domain</th><th>Records</th><th>Split</th></tr></thead>
<tbody>
<tr><td>1</td><td>dm.xpt</td><td>DM</td><td>680</td><td>No</td></tr>
<tr><td>2</td><td>ae.xpt</td><td>AE</td><td>2,845</td><td>No</td></tr>
<tr><td>3</td><td>cm.xpt</td><td>CM</td><td>4,120</td><td>No</td></tr>
<tr><td>4</td><td>ds.xpt</td><td>DS</td><td>1,360</td><td>No</td></tr>
<tr><td>5</td><td>ex.xpt</td><td>EX</td><td>8,200</td><td>No</td></tr>
<tr><td>6</td><td>lb1.xpt</td><td>LB</td><td>89,000</td><td>Yes</td></tr>
<tr><td>7</td><td>lb2.xpt</td><td>LB</td><td>42,000</td><td>Yes</td></tr>
<tr><td>8</td><td>vs.xpt</td><td>VS</td><td>28,400</td><td>No</td></tr>
</tbody>
</table>
<p>LBドメインはファイルサイズの制約によりLBCATに基づいて2分割されています（lb1.xpt: Chemistry, lb2.xpt: Hematology/Urinalysis）。</p>

<h2>Step 3: Data Conformance作成</h2>
<table>
<thead><tr><th>Severity</th><th>Rule ID</th><th>Message</th><th>Count</th><th>Disposition</th></tr></thead>
<tbody>
<tr><td>Error</td><td>-</td><td>-</td><td>0</td><td>N/A</td></tr>
<tr><td>Warning</td><td>SD0064</td><td>Inconsistent VISITNUM</td><td>18</td><td>By design</td></tr>
<tr><td>Warning</td><td>SD1015</td><td>Missing reference range</td><td>32</td><td>Data as collected</td></tr>
<tr><td>Warning</td><td>SD1002</td><td>Non-standard AEACN value</td><td>5</td><td>By design</td></tr>
<tr><td>Notice</td><td>SD0043</td><td>Dataset label length</td><td>3</td><td>Acknowledged</td></tr>
</tbody>
</table>

<h2>Step 4: Domain-Specific Information作成</h2>
<h3>重要ドメインの記載ポイント</h3>
<table>
<thead><tr><th>ドメイン</th><th>このケースでの特記事項</th></tr></thead>
<tbody>
<tr><td>DM</td><td>4か国のCOUNTRY、Screen Failure 80名の扱い</td></tr>
<tr><td>AE</td><td>MedDRA v27.0、CTCAE v5.0、Sponsor-defined "DOSE PAUSED"</td></tr>
<tr><td>LB</td><td>Split Dataset、Central/Local Lab併用、eGFRのAmendment影響</td></tr>
<tr><td>EX</td><td>用量変更記録の構造</td></tr>
<tr><td>SC</td><td>CKDステージの記録方法</td></tr>
</tbody>
</table>

<h2>Step 5: CT・辞書情報</h2>
<table>
<thead><tr><th>項目</th><th>バージョン</th></tr></thead>
<tbody>
<tr><td>CDISC CT</td><td>2024-06-28</td></tr>
<tr><td>MedDRA</td><td>v27.0 (English)</td></tr>
<tr><td>WHODrug</td><td>Global March 2024, B3 format</td></tr>
<tr><td>Pinnacle 21</td><td>Enterprise v4.1.0</td></tr>
</tbody>
</table>

<h2>Step 6: PMDA対応（日本を含む試験）</h2>
<div class="info-box tip">
<div class="info-box-title">日本を含む国際共同試験の追加記載</div>
<ul>
<li>JP拡張: RFICDTC in SUPPDM（同意取得日）を使用</li>
<li>DAドメイン: Drug Accountability情報を提出</li>
<li>日本人部分集団: DMのRACE/COUNTRYで識別可能であることを説明</li>
<li>Pinnacle 21: FDA Rules + PMDA Rulesの両方の結果を記載</li>
</ul>
</div>

<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>SDRG作成は6ステップで体系的に進める</li>
<li>試験の複雑さに応じてDomain-Specific Informationの記載量を調整する</li>
<li>国際共同試験ではPMDA固有の要件を追加で記載する</li>
<li>全体を通じて具体性・自己完結性・バージョン明記を意識する</li>
</ul>
</div>`,
            quiz: [
                { id: "q503_1", type: "choice", question: "ケーススタディでLBドメインを分割した基準は？", options: ["LBTESTCD", "LBCAT", "VISITNUM", "LBORRESU"], answer: 1, explanation: "LBドメインはLBCAT（Chemistry / Hematology/Urinalysis）に基づいて分割されています。" },
                { id: "q503_2", type: "choice", question: "Screen Failure被験者のDMドメインでのARMCDの値は？", options: ["NOTRAND", "SF", "SCRNFAIL", "EXCLUDED"], answer: 2, explanation: "Screen Failure被験者はARMCD = 'SCRNFAIL'としてDMドメインに含まれます。" },
                { id: "q503_3", type: "choice", question: "日本を含む国際共同試験のSDRGで追加記載すべきPMDA固有の情報として適切でないものは？", options: ["JP拡張ドメインの使用状況", "PMDA Business Rulesの結果", "日本人部分集団の識別方法", "日本の医療保険制度の説明"], answer: 3, explanation: "医療保険制度はSDRGの記載対象ではありません。データに関連するPMDA固有要件を記載します。" },
                { id: "q503_4", type: "choice", question: "Protocol Amendment 2でeGFR測定がWeek 4に追加された場合、SDRGで記載すべきデータへの影響は？", options: ["全被験者のeGFRデータが利用可能", "Amendment後に登録された被験者のみWeek 4のeGFRデータがある", "eGFRデータは全て欠測", "Amendment前の被験者のeGFRを後から追加測定した"], answer: 1, explanation: "Protocol Amendment後に登録された被験者のみWeek 4のeGFRデータが存在することを記載します。" }
            ]
        },
        {
            id: 504,
            title: "Define.xmlとの整合性管理",
            duration: "15分",
            content: `
<h2>整合性管理の重要性</h2>
<p>SDRGとDefine.xmlは、同一の提出パッケージに含まれる文書です。両者の記載に不整合があると、レビューアーの混乱を招き、照会事項の原因となります。提出前の整合性チェックは品質管理の最重要項目の一つです。</p>

<h2>不整合が起こりやすいポイント</h2>
<table>
<thead><tr><th>チェック項目</th><th>SDRGの記載箇所</th><th>Define.xmlの記載箇所</th><th>リスク</th></tr></thead>
<tbody>
<tr><td>SDTM IGバージョン</td><td>Introduction / Data Conformance</td><td>def:StandardName + def:StandardVersion</td><td>高</td></tr>
<tr><td>CTバージョン</td><td>CT and Dictionaries</td><td>CodeList外部辞書参照</td><td>高</td></tr>
<tr><td>MedDRAバージョン</td><td>CT and Dictionaries</td><td>ExternalCodeList</td><td>高</td></tr>
<tr><td>WHODrugバージョン</td><td>CT and Dictionaries</td><td>ExternalCodeList</td><td>高</td></tr>
<tr><td>データセット数</td><td>Submission Overview</td><td>ItemGroupDef数</td><td>中</td></tr>
<tr><td>ドメイン名</td><td>Domain-Specific Info</td><td>ItemGroupDef OID/Name</td><td>中</td></tr>
<tr><td>Split Dataset情報</td><td>Submission Overview</td><td>ItemGroupDef</td><td>中</td></tr>
</tbody>
</table>

<h2>整合性チェックの手順</h2>
<div class="info-box tip">
<div class="info-box-title">5ステップ整合性チェック</div>
<ol>
<li><strong>バージョン照合</strong>: SDTM IG、CT、MedDRA、WHODrugの各バージョンが一致するか確認</li>
<li><strong>データセット照合</strong>: SDRGのファイル一覧とDefine.xmlのItemGroupDef一覧を突合</li>
<li><strong>ドメイン名照合</strong>: SDRGで言及しているドメインがDefine.xmlに定義されているか確認</li>
<li><strong>Split Dataset照合</strong>: SDRGのSplit情報とDefine.xmlのSplitデータセット定義が一致するか確認</li>
<li><strong>SUPP変数照合</strong>: SDRGで説明したQNAMがDefine.xmlのValueListDefに定義されているか確認</li>
</ol>
</div>

<h2>不整合の実例と影響</h2>

<h3>実例1: CTバージョンの不一致</h3>
<table>
<thead><tr><th>文書</th><th>記載内容</th></tr></thead>
<tbody>
<tr><td>SDRG</td><td>CDISC CT 2024-03-29</td></tr>
<tr><td>Define.xml</td><td>CDISC CT 2024-06-28</td></tr>
</tbody>
</table>
<p><strong>影響</strong>: レビューアーはどちらが正しいか判断できず、照会が発生します。DB Lock後のCT更新によりDefine.xmlだけが更新され、SDRGの修正が漏れるケースが多発します。</p>

<h3>実例2: データセット数の不一致</h3>
<table>
<thead><tr><th>文書</th><th>記載内容</th></tr></thead>
<tbody>
<tr><td>SDRG</td><td>20 datasets listed</td></tr>
<tr><td>Define.xml</td><td>22 ItemGroupDefs</td></tr>
</tbody>
</table>
<p><strong>影響</strong>: SDRGにSUPPドメイン2つの記載が漏れていました。レビューアーは提出パッケージの完全性に疑問を持ちます。</p>

<h2>整合性維持のベストプラクティス</h2>
<table>
<thead><tr><th>プラクティス</th><th>説明</th></tr></thead>
<tbody>
<tr><td>単一情報源の原則</td><td>バージョン情報はSpecificationファイルで一元管理し、SDRGとDefine.xmlの両方がそこを参照</td></tr>
<tr><td>同時更新ルール</td><td>Define.xmlを更新したら必ずSDRGも更新するルールを設定</td></tr>
<tr><td>クロスチェックリスト</td><td>提出前に両文書の突合チェックリストを実施</td></tr>
<tr><td>自動化ツールの活用</td><td>バージョン情報の自動抽出・比較ツールの導入</td></tr>
</tbody>
</table>

<h2>役割分担の再確認</h2>
<p>SDRGとDefine.xmlは相補的な文書であり、役割分担を明確にすることが重複・不整合の防止につながります。</p>
<table>
<thead><tr><th>情報</th><th>Define.xml</th><th>SDRG</th></tr></thead>
<tbody>
<tr><td>変数定義の詳細</td><td>主担当</td><td>記載しない（参照のみ）</td></tr>
<tr><td>導出アルゴリズム</td><td>主担当</td><td>記載しない</td></tr>
<tr><td>コードリスト値</td><td>主担当</td><td>Sponsor-defined termのみ記載</td></tr>
<tr><td>試験背景・設計意図</td><td>記載しない</td><td>主担当</td></tr>
<tr><td>バリデーション結果</td><td>記載しない</td><td>主担当</td></tr>
<tr><td>データ収集の特殊事情</td><td>記載しない</td><td>主担当</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>SDRGとDefine.xmlのバージョン情報は必ず一致させる</li>
<li>データセット数・ドメイン名の突合チェックを提出前に実施する</li>
<li>単一情報源の原則と同時更新ルールで不整合を予防する</li>
<li>役割分担を明確にし、不要な重複記載を避ける</li>
</ul>
</div>`,
            quiz: [
                { id: "q504_1", type: "choice", question: "SDRGとDefine.xmlの不整合が最も起こりやすいポイントは？", options: ["著者名", "バージョン情報（CT、MedDRA等）", "フォントの種類", "ファイルサイズ"], answer: 1, explanation: "CTバージョン、MedDRAバージョン等のバージョン情報は更新タイミングのずれにより不整合が発生しやすいポイントです。" },
                { id: "q504_2", type: "choice", question: "整合性維持のベストプラクティスとして「単一情報源の原則」とは？", options: ["SDRGだけにバージョンを記載する", "Define.xmlだけにバージョンを記載する", "バージョン情報をSpecificationファイルで一元管理する", "バージョンは記載しない"], answer: 2, explanation: "バージョン情報をSpecificationファイルで一元管理し、SDRGとDefine.xmlの両方がそこを参照することで不整合を防ぎます。" },
                { id: "q504_3", type: "choice", question: "Define.xmlの主担当であり、SDRGには記載しない情報はどれですか？", options: ["試験デザインの背景", "バリデーション結果", "変数定義の詳細と導出アルゴリズム", "プロトコル改訂の影響"], answer: 2, explanation: "変数定義の詳細と導出アルゴリズムはDefine.xmlの主担当です。SDRGではこれらを重複記載せず参照のみとします。" }
            ]
        }
    ]
};
