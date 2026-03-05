const LEVEL1_DATA = {
    id: 1,
    title: "SDRG基礎",
    icon: "📑",
    description: "SDRGの定義・目的・全体構造を理解する",
    modules: [
        {
            id: 101,
            title: "SDRGとは何か",
            duration: "15分",
            content: `
<h2>SDRGの定義</h2>
<p>SDRG（Study Data Reviewer's Guide）は、FDA・PMDAなどの規制当局にSDTMデータセットを提出する際に添付するドキュメントです。レビューアーが提出データの内容・構造・特殊事情を効率的に理解するためのガイドとして機能します。</p>

<div class="info-box tip">
<div class="info-box-title">提出パッケージ全体像</div>
<p>SDTMデータセット（XPTファイル）、Define.xml、SDRG、ADRG、Annotated CRF、その他サポート文書で構成されます。SDRGはSDTMデータの「説明書」にあたります。</p>
</div>

<h2>なぜSDRGが必要か</h2>
<table>
<thead><tr><th>情報の種類</th><th>具体例</th></tr></thead>
<tbody>
<tr><td>試験の概要</td><td>試験デザイン、対象疾患、エンドポイント</td></tr>
<tr><td>データの構造</td><td>ドメイン構成、Split Datasetの有無</td></tr>
<tr><td>特殊事情</td><td>プロトコル改訂による変更、データ収集上の制約</td></tr>
<tr><td>バリデーション結果</td><td>Pinnacle 21の結果と未解決Issueへの対応方針</td></tr>
<tr><td>外部辞書情報</td><td>MedDRA/WHODrugのバージョン</td></tr>
</tbody>
</table>

<h2>規制要件</h2>
<h3>FDA Technical Conformance Guide（TCG）</h3>
<p>FDAのTCGは、SDRGの提出を<strong>strongly recommended（強く推奨）</strong>としています。主な要件は以下の通りです。</p>
<ul>
<li>電子提出データにはReviewer's Guideを添付すること</li>
<li>SDTM提出にはSDRG、ADaM提出にはADRGを添付</li>
<li>PhUSEテンプレートの使用を推奨</li>
<li>PDF形式で提出（ブックマーク付き）</li>
</ul>

<h3>PMDA（日本）</h3>
<p>PMDAの電子データ提出に関するガイダンスでも、SDRGに相当する文書の提出を求めています。</p>

<h2>eCTDにおける位置づけ</h2>
<p>SDRGはeCTD Module 5の<code>tabulations/sdtm/</code>配下に<code>sdrg.pdf</code>として配置されます。</p>
<div class="info-box success">
<div class="info-box-title">配置パス</div>
<p>m5/ → 5.3.5.1/ → study-id/ → tabulations/ → sdtm/ → <strong>sdrg.pdf</strong></p>
</div>

<h2>SDRGとADRGの違い</h2>
<table>
<thead><tr><th>項目</th><th>SDRG</th><th>ADRG</th></tr></thead>
<tbody>
<tr><td>対象データ</td><td>SDTMデータセット</td><td>ADaMデータセット</td></tr>
<tr><td>主な内容</td><td>収集データの説明</td><td>解析データの導出方法</td></tr>
<tr><td>配置場所</td><td>tabulations/sdtm/</td><td>analysis/adam/</td></tr>
<tr><td>試験デザインの説明</td><td>詳細に記載</td><td>SDRGを参照</td></tr>
<tr><td>解析手法の説明</td><td>対象外</td><td>詳細に記載</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>SDRGはレビューアーがSDTMデータを理解するためのガイド文書</li>
<li>FDA TCGにより提出が強く推奨されている</li>
<li>eCTD Module 5のtabulations/sdtm/配下に配置</li>
<li>SDRGはSDTM用、ADRGはADaM用と役割が分かれている</li>
</ul>
</div>`,
            quiz: [
                { id: "q101_1", type: "choice", question: "SDRGの正式名称は何ですか？", options: ["Study Data Review Guide", "Study Data Reviewer's Guide", "Standard Data Reviewer's Guide", "Study Dataset Review Guide"], answer: 1, explanation: "SDRGはStudy Data Reviewer's Guideの略です。" },
                { id: "q101_2", type: "choice", question: "SDRGはeCTD上のどこに配置されますか？", options: ["analysis/adam/", "tabulations/sdtm/", "m2/summaries/", "m1/regional/"], answer: 1, explanation: "SDRGはtabulations/sdtm/配下にsdrg.pdfとして配置されます。" },
                { id: "q101_3", type: "choice", question: "FDA TCGにおけるSDRGの位置づけはどれですか？", options: ["提出必須（mandatory）", "強く推奨（strongly recommended）", "任意（optional）", "不要（not required）"], answer: 1, explanation: "FDA TCGではSDRGの提出をstrongly recommended（強く推奨）としています。" },
                { id: "q101_4", type: "choice", question: "ADRGが対象とするデータモデルはどれですか？", options: ["SDTM", "ADaM", "SEND", "Define.xml"], answer: 1, explanation: "ADRGはADaM（Analysis Data Model）データセットを対象としたガイドです。" },
                { id: "q101_5", type: "fill", question: "SDRGの提出ファイル形式は何ですか？（アルファベット3文字）", answer: "PDF", explanation: "SDRGはPDF形式で、ブックマーク付きで提出します。" }
            ]
        },
        {
            id: 102,
            title: "SDRGの全体構造",
            duration: "15分",
            content: `
<h2>SDRGの全体マップ</h2>
<p>SDRGはPhUSE推奨テンプレートに沿って以下のセクション構成で作成されます。</p>
<table>
<thead><tr><th>セクション番号</th><th>セクション名</th><th>必須/推奨</th></tr></thead>
<tbody>
<tr><td>1</td><td>Introduction</td><td>必須</td></tr>
<tr><td>2</td><td>Study Overview</td><td>必須</td></tr>
<tr><td>3</td><td>Submission Overview</td><td>必須</td></tr>
<tr><td>4</td><td>Data Conformance Summary</td><td>必須</td></tr>
<tr><td>5</td><td>Domain-Specific Information</td><td>必須</td></tr>
<tr><td>6</td><td>Trial Design</td><td>必須</td></tr>
<tr><td>7</td><td>Controlled Terminology</td><td>必須</td></tr>
<tr><td>8</td><td>Data Definition (Define.xml)</td><td>必須</td></tr>
<tr><td>9</td><td>Issues Summary</td><td>推奨</td></tr>
<tr><td>10</td><td>Appendices</td><td>推奨</td></tr>
</tbody>
</table>

<h2>PhUSE推奨テンプレート</h2>
<p>PhUSE（Pharmaceutical Users Software Exchange）は、SDRGの標準テンプレートを公開しています。このテンプレートはFDAが推奨する構成に準拠しており、業界標準として広く利用されています。</p>

<h2>SDRG作成ワークフロー</h2>
<div class="info-box tip">
<div class="info-box-title">作成の流れ</div>
<ol>
<li>プロトコル確定 → SDTM Mapping作成 → SDTMデータセット生成</li>
<li>Pinnacle 21検証の実施</li>
<li>Annotated CRF作成 → Define.xml作成 → SDRG作成開始</li>
<li>各セクション（Study Overview, Submission Overview, Domain Info, Data Conformance）を並行執筆</li>
<li>SDRG内部レビュー → 最終PDF生成 → eCTDパッケージに統合</li>
</ol>
</div>

<h2>PDF要件</h2>
<table>
<thead><tr><th>要件</th><th>説明</th></tr></thead>
<tbody>
<tr><td>ブックマーク</td><td>必ず設定する</td></tr>
<tr><td>ハイパーリンク</td><td>セクション見出しに設定</td></tr>
<tr><td>フォント</td><td>埋め込み形式にする</td></tr>
<tr><td>ファイルサイズ</td><td>100MB以下を推奨</td></tr>
<tr><td>ファイル名</td><td>sdrg.pdf（小文字推奨）</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>SDRGはPhUSE推奨テンプレートに沿って作成するのが標準</li>
<li>必須セクションは8つ、推奨セクションは2つ</li>
<li>SDTM Dataset・Define.xml・Annotated CRFの完成後にSDRGを作成する</li>
<li>PDF形式でブックマーク付きで提出する</li>
</ul>
</div>`,
            quiz: [
                { id: "q102_1", type: "choice", question: "SDRGの必須セクション数はいくつですか？", options: ["6つ", "8つ", "10つ", "12つ"], answer: 1, explanation: "PhUSE推奨テンプレートでは8つの必須セクションがあります。" },
                { id: "q102_2", type: "choice", question: "SDRGのテンプレートを公開している団体はどれですか？", options: ["CDISC", "PhUSE", "ICH", "WHO"], answer: 1, explanation: "PhUSE（Pharmaceutical Users Software Exchange）がSDRGの標準テンプレートを公開しています。" },
                { id: "q102_3", type: "choice", question: "SDRGのPDFファイル名として推奨されるのはどれですか？", options: ["SDRG.PDF", "sdrg.pdf", "StudyDataReviewersGuide.pdf", "reviewer_guide.pdf"], answer: 1, explanation: "ファイル名はsdrg.pdf（小文字）が推奨されます。" },
                { id: "q102_4", type: "choice", question: "SDRGを作成開始する前に完成させるべきでないものはどれですか？", options: ["SDTMデータセット", "Define.xml", "ADaMデータセット", "Annotated CRF"], answer: 2, explanation: "ADaMデータセットはSDRGとは別のフローです。SDRGはSDTMデータセット・Define.xml・Annotated CRFの完成後に作成します。" },
                { id: "q102_5", type: "fill", question: "FDAが推奨するSDRGの個別ファイルサイズ上限は何MBですか？（数字のみ）", answer: "100", explanation: "FDAは個別ファイル100MB以下を推奨しています。" }
            ]
        },
        {
            id: 103,
            title: "Study Overviewセクション",
            duration: "15分",
            content: `
<h2>Study Overviewの目的</h2>
<p>Study Overviewは、レビューアーがデータを確認する前に試験の全体像を把握するためのセクションです。詳細なプロトコルを読まなくても、データ構造の背景を理解できるレベルの情報を提供します。</p>

<h2>記載すべき項目</h2>
<h3>試験の基本情報</h3>
<table>
<thead><tr><th>項目</th><th>記載内容</th><th>例</th></tr></thead>
<tbody>
<tr><td>Study Title</td><td>試験の正式名称</td><td>A Phase III, Randomized, Double-blind...</td></tr>
<tr><td>Protocol Number</td><td>プロトコル番号</td><td>ABC-001</td></tr>
<tr><td>Study Phase</td><td>開発相</td><td>Phase III</td></tr>
<tr><td>Indication</td><td>対象疾患</td><td>Type 2 Diabetes Mellitus</td></tr>
<tr><td>Sponsor</td><td>スポンサー名</td><td>ABC Pharma Inc.</td></tr>
<tr><td>Study Dates</td><td>試験期間</td><td>First Subject In: 2023-01-15</td></tr>
</tbody>
</table>

<h3>試験デザインの記述</h3>
<p>試験デザインは<strong>図解を含めて記載</strong>することが推奨されます。Screening、Randomization、Treatment Period、Follow-upの流れを視覚的に表現しましょう。</p>

<h3>目的とエンドポイント</h3>
<p>Primary Objective、Primary Endpoint、Secondary Objectives、Secondary Endpointsを明記します。</p>

<h2>記載のコツ</h2>
<table>
<thead><tr><th>推奨事項</th><th>理由</th></tr></thead>
<tbody>
<tr><td>プロトコルのコピーは避ける</td><td>SDRGはガイドであり、プロトコルの複製ではない</td></tr>
<tr><td>データに関連する情報に絞る</td><td>レビューアーのデータ確認に必要な情報のみ</td></tr>
<tr><td>図表を活用する</td><td>文章だけでなく視覚的に伝える</td></tr>
<tr><td>プロトコル改訂があれば言及</td><td>データに影響する変更は必ず記載</td></tr>
<tr><td>被験者数の概要を含める</td><td>Enrolled/Randomized/Completed/Discontinued</td></tr>
</tbody>
</table>

<h2>良い例と悪い例</h2>
<div class="info-box success">
<div class="info-box-title">良い例</div>
<p>This was a Phase III, randomized, double-blind, placebo-controlled study. A total of 450 subjects were randomized (150 per arm). Protocol Amendment 2 changed the visit window for Visit 5, which is reflected in the SV domain.</p>
</div>
<div class="info-box danger">
<div class="info-box-title">悪い例</div>
<p>Please refer to the protocol for study design details.（これではレビューアーが別文書を確認する必要があり、ガイドとしての役割を果たしていない）</p>
</div>

<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>Study Overviewは試験の全体像をコンパクトに伝えるセクション</li>
<li>試験デザイン図の掲載が強く推奨される</li>
<li>プロトコルの丸写しではなく、データ理解に必要な情報を要約する</li>
<li>プロトコル改訂のうちデータに影響するものは必ず言及する</li>
</ul>
</div>`,
            quiz: [
                { id: "q103_1", type: "choice", question: "Study Overviewセクションで推奨される要素はどれですか？", options: ["統計解析の詳細手法", "試験デザインの図解", "プログラムのソースコード", "個別被験者の一覧"], answer: 1, explanation: "試験デザインは図解を含めて記載することが強く推奨されます。" },
                { id: "q103_2", type: "choice", question: "Study Overviewの悪い記載例の特徴はどれですか？", options: ["被験者数を記載している", "プロトコル改訂に言及している", "プロトコルへの丸投げ参照のみ", "図表を活用している"], answer: 2, explanation: "「See protocol」のみの記載はレビューアーが別文書を参照する必要があり、不適切です。" },
                { id: "q103_3", type: "choice", question: "プロトコル改訂についてSDRGで言及すべきものはどれですか？", options: ["全ての改訂", "データに影響する改訂のみ", "改訂は言及しない", "最初の改訂のみ"], answer: 1, explanation: "データに影響する変更は必ず記載します。全改訂を網羅する必要はありません。" },
                { id: "q103_4", type: "choice", question: "Study Overviewに含めるべき被験者情報はどれですか？", options: ["全被験者の個別データ", "Enrolled/Randomized/Completed/Discontinuedの概要", "被験者の住所情報", "被験者の遺伝情報"], answer: 1, explanation: "被験者数の概要（登録・ランダム化・完了・中止）を含めることが推奨されます。" },
                { id: "q103_5", type: "fill", question: "Study Overviewに記載する試験番号は英語で何と呼ばれますか？（2語、スペース区切り）", answer: "Protocol Number", explanation: "Protocol Number（プロトコル番号）は試験の基本情報として必ず記載します。" }
            ]
        }
    ]
};
