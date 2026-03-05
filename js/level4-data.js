const LEVEL4_DATA = {
    id: 4,
    title: "PMDA対応・実践",
    icon: "🏆",
    description: "PMDA固有要件、レビューチェックリスト、実践テンプレートと記載例",
    modules: [
        {
            id: 401,
            title: "PMDA提出の留意点",
            duration: "15分",
            content: `
<h2>PMDAの電子データ提出</h2>
<p>PMDAは2020年4月以降、新医薬品の承認申請において臨床試験の電子データ提出を義務化しています。SDRGに相当する文書（データガイド）の提出も求められています。</p>

<h2>PMDA固有の要件</h2>
<table>
<thead><tr><th>項目</th><th>FDA</th><th>PMDA</th></tr></thead>
<tbody>
<tr><td>SDRG言語</td><td>英語</td><td>英語（日本語の併記可）</td></tr>
<tr><td>テンプレート</td><td>PhUSE推奨</td><td>PhUSE準拠（PMDA追加要件あり）</td></tr>
<tr><td>JP拡張ドメイン</td><td>N/A</td><td>必要に応じて使用</td></tr>
<tr><td>Pinnacle 21</td><td>FDA Rules</td><td>FDA Rules + PMDA Rules</td></tr>
<tr><td>提出形式</td><td>PDF</td><td>PDF</td></tr>
</tbody>
</table>

<h2>JP拡張ドメイン</h2>
<p>日本固有のデータ要件に対応するため、CDISC Japanが策定したJP拡張ドメインがあります。SDRGではこれらの使用状況を説明する必要があります。</p>
<div class="info-box tip">
<div class="info-box-title">JP拡張の例</div>
<ul>
<li>RFICDTC in SUPPDM: Date of informed consent（同意取得日）</li>
<li>DAドメイン: Drug Accountability（薬剤管理）- 日本で頻用</li>
</ul>
</div>

<h2>日本語対応</h2>
<table>
<thead><tr><th>項目</th><th>推奨</th></tr></thead>
<tbody>
<tr><td>SDRG本文</td><td>英語で記載（PMDAは英語を受理可能）</td></tr>
<tr><td>日本語補足</td><td>必要に応じて日本語の注釈を追加可能</td></tr>
<tr><td>ドメイン説明</td><td>英語で記載</td></tr>
<tr><td>試験固有用語</td><td>日本語の治験名等は括弧書きで補足</td></tr>
</tbody>
</table>

<h2>PMDAバリデーションルール</h2>
<p>Pinnacle 21にはPMDA固有のバリデーションルールが含まれています。SDRGのData ConformanceセクションではFDAルールとPMDAルールの両方の結果を記載します。</p>

<h2>PMDA照会への備え</h2>
<table>
<thead><tr><th>よくある照会</th><th>SDRGでの予防策</th></tr></thead>
<tbody>
<tr><td>データの欠測理由</td><td>Domain-Specificセクションで欠測パターンを説明</td></tr>
<tr><td>CT非準拠の用語</td><td>Sponsor-defined termの正当化を記載</td></tr>
<tr><td>日本人部分集団データ</td><td>DM/SCドメインでRACE/ETHNICの扱いを説明</td></tr>
<tr><td>JP拡張の未使用理由</td><td>使用しなかった場合の理由を記載</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>PMDAへの提出でもSDRGは英語で記載するのが標準</li>
<li>JP拡張ドメインの使用状況を必ず説明する</li>
<li>Pinnacle 21のPMDAルールの結果もData Conformanceに含める</li>
<li>PMDAからの照会を予防する情報をSDRGに盛り込む</li>
</ul>
</div>`,
            quiz: [
                { id: "q401_1", type: "choice", question: "PMDA提出のSDRGの記載言語は？", options: ["日本語のみ", "英語のみ", "英語（日本語の併記可）", "どの言語でもよい"], answer: 2, explanation: "SDRGは英語で記載しますが、日本語の併記が可能です。" },
                { id: "q401_2", type: "choice", question: "PMDAでのバリデーション時に使用するルールは？", options: ["FDAルールのみ", "PMDAルールのみ", "FDAルール + PMDAルール", "CDISCルールのみ"], answer: 2, explanation: "Pinnacle 21のFDA RulesとPMDA Rulesの両方を使用します。" },
                { id: "q401_3", type: "choice", question: "JP拡張ドメインを策定した団体は？", options: ["FDA", "PhUSE", "CDISC Japan", "WHO"], answer: 2, explanation: "CDISC Japanが日本固有のデータ要件に対応するJP拡張ドメインを策定しました。" },
                { id: "q401_4", type: "choice", question: "PMDAが電子データ提出を義務化したのは何年からですか？", options: ["2016年", "2018年", "2020年", "2022年"], answer: 2, explanation: "PMDAは2020年4月以降に対象範囲を拡大して電子データ提出を義務化しました。" },
                { id: "q401_5", type: "fill", question: "日本のPMDAの正式名称の英語略称は？（4文字）", answer: "PMDA", explanation: "PMDA（Pharmaceuticals and Medical Devices Agency）です。" }
            ]
        },
        {
            id: 402,
            title: "SDRGレビューチェックリスト",
            duration: "15分",
            content: `
<h2>提出前チェックリスト</h2>

<h3>全般チェック</h3>
<table>
<thead><tr><th>No</th><th>チェック項目</th></tr></thead>
<tbody>
<tr><td>1</td><td>表紙にStudy ID、スポンサー名、日付が記載されている</td></tr>
<tr><td>2</td><td>目次が正しく生成され、ページ番号が一致している</td></tr>
<tr><td>3</td><td>PDFにブックマークが設定されている</td></tr>
<tr><td>4</td><td>フォントが埋め込まれている</td></tr>
<tr><td>5</td><td>ファイル名がsdrg.pdf（小文字）である</td></tr>
<tr><td>6</td><td>ファイルサイズが100MB以下である</td></tr>
</tbody>
</table>

<h3>Study Overviewチェック</h3>
<table>
<thead><tr><th>No</th><th>チェック項目</th></tr></thead>
<tbody>
<tr><td>7</td><td>試験デザインが図解付きで記載されている</td></tr>
<tr><td>8</td><td>プロトコル番号が正しい</td></tr>
<tr><td>9</td><td>被験者数の概要が記載されている</td></tr>
<tr><td>10</td><td>プロトコル改訂の影響が記載されている</td></tr>
</tbody>
</table>

<h3>Data Conformanceチェック</h3>
<table>
<thead><tr><th>No</th><th>チェック項目</th></tr></thead>
<tbody>
<tr><td>16</td><td>Pinnacle 21のバージョンが記載されている</td></tr>
<tr><td>17</td><td>SDTM IG/CTバージョンが記載されている</td></tr>
<tr><td>18</td><td>全てのError/Warningに対応方針が記載されている</td></tr>
<tr><td>19</td><td>対応方針が具体的で理解可能である</td></tr>
</tbody>
</table>

<h3>Define.xmlとの整合チェック</h3>
<table>
<thead><tr><th>No</th><th>チェック項目</th></tr></thead>
<tbody>
<tr><td>25</td><td>データセット数がDefine.xmlと一致</td></tr>
<tr><td>26</td><td>CTバージョンがDefine.xmlと一致</td></tr>
<tr><td>27</td><td>辞書バージョンがDefine.xmlと一致</td></tr>
<tr><td>28</td><td>SDTM IGバージョンがDefine.xmlと一致</td></tr>
</tbody>
</table>

<h2>よくある指摘事項TOP 5</h2>
<table>
<thead><tr><th>#</th><th>指摘事項</th><th>対策</th></tr></thead>
<tbody>
<tr><td>1</td><td>バリデーションIssueの説明不足</td><td>全Error/Warningに具体的な理由と対応を記載</td></tr>
<tr><td>2</td><td>SDRGとDefine.xmlのバージョン不整合</td><td>提出前にクロスチェックリストで確認</td></tr>
<tr><td>3</td><td>Study Overviewが不十分</td><td>プロトコル参照だけでなく要約を記載</td></tr>
<tr><td>4</td><td>Split Datasetの説明不足</td><td>分割基準、各ファイルの内容を明記</td></tr>
<tr><td>5</td><td>Sponsor-defined termの正当化不足</td><td>各用語の使用理由とCTに該当がない根拠を記載</td></tr>
</tbody>
</table>

<h2>レビュー体制の推奨</h2>
<div class="info-box tip">
<div class="info-box-title">SDRGレビューフロー</div>
<ol>
<li>第1レビュー: SDTM Programmer（データとの整合性・技術的正確性の確認）</li>
<li>第2レビュー: Biostatistician（試験デザインの正確性・エンドポイント確認）</li>
<li>第3レビュー: Regulatory Affairs（規制要件への準拠確認・提出形式確認）</li>
<li>最終承認: Project Lead</li>
<li>PDF生成・eCTDパッケージへ統合</li>
</ol>
</div>

<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>28項目のチェックリストで提出前の品質を確認する</li>
<li>バリデーションIssueの説明不足が最も頻出する指摘事項</li>
<li>Define.xmlとの整合性チェックは必須</li>
<li>複数部門によるレビュー体制を構築する</li>
</ul>
</div>`,
            quiz: [
                { id: "q402_1", type: "choice", question: "最も頻出する指摘事項はどれですか？", options: ["ファイルサイズ超過", "バリデーションIssueの説明不足", "日本語の使用", "PDFのフォント"], answer: 1, explanation: "バリデーションIssueの説明不足が最も頻出する指摘事項です。" },
                { id: "q402_2", type: "choice", question: "SDRGレビューの第1レビューアーとして適切なのは？", options: ["経営層", "SDTM Programmer", "患者代表", "広報担当"], answer: 1, explanation: "第1レビューはSDTM Programmerによるデータとの整合性・技術的正確性の確認です。" },
                { id: "q402_3", type: "choice", question: "PDFに関するチェック項目でないものは？", options: ["ブックマークが設定されている", "フォントが埋め込まれている", "ファイル名がsdrg.pdf", "3Dグラフが含まれている"], answer: 3, explanation: "3DグラフはPDF要件に含まれません。ブックマーク、フォント埋め込み、ファイル名等が重要です。" },
                { id: "q402_4", type: "choice", question: "Define.xmlとの整合チェックで確認すべきものは？", options: ["プログラマーの名前", "CTバージョンの一致", "PDFのページ数", "フォントの種類"], answer: 1, explanation: "CTバージョン、辞書バージョン、SDTM IGバージョン等のDefine.xmlとの整合性を確認します。" },
                { id: "q402_5", type: "fill", question: "SDRGのチェックリストの総項目数は？（数字のみ）", answer: "28", explanation: "28項目のチェックリストで提出前の品質を確認します。" }
            ]
        },
        {
            id: 403,
            title: "実践テンプレートと記載例",
            duration: "20分",
            content: `
<h2>SDRGテンプレート（全体）</h2>
<div class="info-box tip">
<div class="info-box-title">テンプレート構成</div>
<p>
1. Introduction<br>
2. Study Overview<br>
3. Submission Overview<br>
4. Data Conformance Summary<br>
5. Domain-Specific Information<br>
6. Trial Design Domains<br>
7. Controlled Terminology and Dictionaries<br>
8. Data Definition (Define.xml)<br>
9. Issues Summary<br>
10. Appendices
</p>
</div>

<h2>各セクション記載例</h2>

<h3>Section 1: Introduction</h3>
<div class="info-box success">
<div class="info-box-title">良い例</div>
<p>This Study Data Reviewer's Guide (SDRG) provides information to facilitate the review of SDTM datasets submitted for Study ABC-001. This document should be used in conjunction with define.xml and the annotated case report form (blankcrf.pdf). The datasets were created in compliance with CDISC SDTM IG v3.4 and validated using Pinnacle 21 Enterprise v4.0.0.</p>
</div>
<div class="info-box danger">
<div class="info-box-title">悪い例</div>
<p>This is the SDRG for the study.（情報量が不足）</p>
</div>

<h3>Section 4: Data Conformance Summary</h3>
<div class="info-box success">
<div class="info-box-title">良い例</div>
<p>Datasets were validated using Pinnacle 21 Enterprise v4.0.0 with CDISC SDTM Conformance Rules v2.0 and FDA Business Rules v2.2. Error: 0, Warning: 8 (all explained), Notice: 23 (acknowledged).<br><br>
SD0064 - Inconsistent VISITNUM (VS domain, 12 records): These records are from unscheduled safety visits per protocol amendment 2. VISITNUM values are assigned as fractional numbers between scheduled visits.</p>
</div>
<div class="info-box danger">
<div class="info-box-title">悪い例</div>
<p>Validation was performed. Some warnings were found. See Pinnacle 21 report for details.（具体性に欠ける）</p>
</div>

<h3>Section 5: Domain-Specific Information</h3>
<div class="info-box success">
<div class="info-box-title">良い例（AEドメイン）</div>
<p>Coding: MedDRA v26.1 (English). All verbatim terms were coded to PT level.<br>
Severity: CTCAE v5.0 grades were used (AETOXGR). AESEV was not collected.<br>
Causality: Binary assessment (RELATED / NOT RELATED).<br>
The sponsor-defined term "DOSE PAUSED" was used in AEACN.</p>
</div>
<div class="info-box danger">
<div class="info-box-title">悪い例</div>
<p>AE domain contains adverse event data. Standard SDTM structure was used.（具体的な情報がない）</p>
</div>

<h2>良い例・悪い例の比較まとめ</h2>
<table>
<thead><tr><th>観点</th><th>良い例</th><th>悪い例</th></tr></thead>
<tbody>
<tr><td>具体性</td><td>数値・バージョン・日付を明記</td><td>曖昧な表現（some, several等）</td></tr>
<tr><td>自己完結性</td><td>SDRGだけで理解可能</td><td>他文書への丸投げ参照</td></tr>
<tr><td>背景説明</td><td>なぜそうなっているかを説明</td><td>事実のみ、理由なし</td></tr>
<tr><td>フォーマット</td><td>表・図を活用して視覚的</td><td>テキストの羅列</td></tr>
<tr><td>Issueの説明</td><td>原因・影響・対応を三点セットで記載</td><td>「Known issue」で終了</td></tr>
</tbody>
</table>

<h2>SDRGクイックリファレンス</h2>
<div class="info-box tip">
<div class="info-box-title">5ステップで作成</div>
<ol>
<li><strong>基本情報の収集</strong>: プロトコル、SDTM Mapping Specification、Annotated CRF、Pinnacle 21 Validation Report、Define.xml</li>
<li><strong>テンプレート準備</strong>: PhUSEテンプレートをダウンロードし、試験に合わせて調整</li>
<li><strong>各セクション執筆</strong>: Study Overview、Submission Overview、Data Conformance、Domain Info、Trial Design、CT/Dictionary</li>
<li><strong>品質確認</strong>: Define.xmlとの整合性チェック、チェックリスト実施、複数部門レビュー</li>
<li><strong>最終化</strong>: PDF変換（ブックマーク・フォント埋め込み）、ファイル名確認、eCTDパッケージへ統合</li>
</ol>
</div>

<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>PhUSEテンプレートをベースに試験固有の情報を記載する</li>
<li>良い記載は具体的・自己完結的・背景説明付きである</li>
<li>悪い記載は曖昧・他文書丸投げ・理由不記載である</li>
<li>SDRGクイックリファレンスの5ステップに従い効率的に作成する</li>
</ul>
</div>`,
            quiz: [
                { id: "q403_1", type: "choice", question: "良い記載の特徴として正しいものは？", options: ["曖昧な表現を使う", "他文書に丸投げする", "数値・バージョン・日付を明記する", "テキストのみで構成する"], answer: 2, explanation: "良い記載は具体的で、数値・バージョン・日付を明記します。" },
                { id: "q403_2", type: "choice", question: "Issueの説明で推奨される三点セットは？", options: ["名前・日付・場所", "原因・影響・対応", "誰が・いつ・どこで", "入力・処理・出力"], answer: 1, explanation: "Issueの説明では原因・影響・対応の三点セットで記載することが推奨されます。" },
                { id: "q403_3", type: "choice", question: "SDRGクイックリファレンスの最初のステップは？", options: ["PDF変換", "テンプレート準備", "基本情報の収集", "品質確認"], answer: 2, explanation: "まず基本情報（プロトコル、Mapping Spec等）を収集することから始めます。" },
                { id: "q403_4", type: "choice", question: "Data Conformanceセクションの悪い記載例の特徴は？", options: ["Warning個別に対応方針を記載", "バリデーションツールのバージョンを明記", "Pinnacle 21レポートへの丸投げ参照", "サマリーテーブルを含む"], answer: 2, explanation: "「See Pinnacle 21 report for details」のような丸投げ参照は悪い記載例です。" },
                { id: "q403_5", type: "fill", question: "SDRGテンプレートのベースとして推奨される団体名は？（英語5文字）", answer: "PhUSE", explanation: "PhUSE（Pharmaceutical Users Software Exchange）のテンプレートがベースとして推奨されます。" }
            ]
        }
    ]
};
