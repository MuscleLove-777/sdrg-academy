const LEVEL3_DATA = {
    id: 3,
    title: "Trial Design・CT・Define.xml",
    icon: "🔬",
    description: "Trial Designドメイン、Controlled Terminology、Define.xmlとの関係",
    modules: [
        {
            id: 301,
            title: "Trial Designドメインの説明",
            duration: "20分",
            content: `
<h2>Trial Designドメインの概要</h2>
<p>Trial Designドメインは、試験の設計情報をデータセットとして表現したものです。これらは被験者レベルのデータではなく、<strong>試験レベルのメタデータ</strong>に相当します。</p>

<h2>TE（Trial Elements）</h2>
<p>TEドメインは試験のElement（要素）を定義します。各Elementは試験期間の構成単位となります。</p>
<table>
<thead><tr><th>ETCD</th><th>ELEMENT</th><th>TESTRL</th><th>TEENRL</th></tr></thead>
<tbody>
<tr><td>SCRN</td><td>Screening</td><td>Informed Consent</td><td>Randomization</td></tr>
<tr><td>TRT</td><td>Treatment</td><td>Randomization</td><td>End of Treatment</td></tr>
<tr><td>FU</td><td>Follow-up</td><td>End of Treatment</td><td>End of Follow-up</td></tr>
</tbody>
</table>

<h2>TA（Trial Arms）</h2>
<p>TAドメインは治療群（Arm）ごとのElement構成を定義します。</p>
<div class="info-box tip">
<div class="info-box-title">TA構造の図解</div>
<p>Arm 1 (Drug A 10mg): [Screening] → [Treatment: Drug A 10mg] → [Follow-up]<br>
Arm 2 (Drug A 20mg): [Screening] → [Treatment: Drug A 20mg] → [Follow-up]<br>
Arm 3 (Placebo): [Screening] → [Treatment: Placebo] → [Follow-up]<br>
Screen Failure: [Screening] → (End)</p>
</div>

<h2>TV（Trial Visits）</h2>
<p>TVドメインは計画されたVisitの一覧を定義します。Visit Window情報やUnscheduled Visitの扱いについても言及します。</p>
<table>
<thead><tr><th>VISITNUM</th><th>VISIT</th><th>VISITDY</th></tr></thead>
<tbody>
<tr><td>1</td><td>Screening</td><td>-28</td></tr>
<tr><td>2</td><td>Randomization</td><td>1</td></tr>
<tr><td>3</td><td>Week 2</td><td>15</td></tr>
<tr><td>4</td><td>Week 4</td><td>29</td></tr>
<tr><td>5</td><td>Week 8</td><td>57</td></tr>
<tr><td>6</td><td>Week 12</td><td>85</td></tr>
<tr><td>7</td><td>Week 18</td><td>127</td></tr>
<tr><td>8</td><td>Week 24</td><td>169</td></tr>
<tr><td>9</td><td>Week 28 (FU)</td><td>197</td></tr>
</tbody>
</table>

<h2>TS（Trial Summary）</h2>
<p>TSドメインは試験のメタ情報をパラメータ形式で格納します。CDISC CTに準拠したTSVALを使用します。</p>
<table>
<thead><tr><th>TSPARMCD</th><th>TSPARM</th><th>TSVAL</th></tr></thead>
<tbody>
<tr><td>SSTDTC</td><td>Study Start Date</td><td>2023-01-15</td></tr>
<tr><td>INDIC</td><td>Trial Disease/Condition</td><td>Type 2 Diabetes Mellitus</td></tr>
<tr><td>TRT</td><td>Investigational Therapy</td><td>Drug A</td></tr>
<tr><td>RANDOM</td><td>Trial is Randomized</td><td>Y</td></tr>
<tr><td>STYPE</td><td>Study Type</td><td>INTERVENTIONAL</td></tr>
</tbody>
</table>

<h2>TI（Trial Inclusion/Exclusion Criteria）</h2>
<p>TIドメインは選択基準・除外基準のテキストを格納します。</p>

<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>Trial Designドメインは試験デザインをデータとして表現したもの</li>
<li>TE/TA/TVの関係を図解で説明すると理解しやすい</li>
<li>TSドメインではCDISC CTに準拠したTSVALを使用する</li>
<li>SDRGでは各ドメインの構成と設計意図を簡潔に説明する</li>
</ul>
</div>`,
            quiz: [
                { id: "q301_1", type: "choice", question: "Trial Designドメインのデータレベルは？", options: ["被験者レベル", "試験レベルのメタデータ", "来院レベル", "検査項目レベル"], answer: 1, explanation: "Trial Designドメインは被験者レベルではなく、試験レベルのメタデータです。" },
                { id: "q301_2", type: "choice", question: "TEドメインが定義するものは？", options: ["試験の治療群", "試験のElement（構成要素）", "試験の来院スケジュール", "試験のメタ情報"], answer: 1, explanation: "TEドメインは試験のElement（要素）を定義します。" },
                { id: "q301_3", type: "choice", question: "TSドメインの値で使用すべき用語辞書は？", options: ["MedDRA", "WHODrug", "CDISC CT", "SNOMED CT"], answer: 2, explanation: "TSドメインではCDISC Controlled Terminologyに準拠したTSVALを使用します。" },
                { id: "q301_4", type: "choice", question: "TVドメインが定義するものは？", options: ["治療群の構成", "計画されたVisitの一覧", "選択・除外基準", "試験の要約パラメータ"], answer: 1, explanation: "TVドメインは計画されたVisit（来院）の一覧を定義します。" },
                { id: "q301_5", type: "fill", question: "Trial Inclusion/Exclusion Criteriaを格納するドメインの略称は？（2文字）", answer: "TI", explanation: "TI（Trial Inclusion/Exclusion Criteria）ドメインです。" }
            ]
        },
        {
            id: 302,
            title: "Controlled Terminology & 外部辞書",
            duration: "15分",
            content: `
<h2>CDISC Controlled Terminology</h2>
<p>CDISC CTは、SDTMで使用する用語（変数値）の標準辞書です。SDRGでは使用したCTのバージョンと、CT非準拠の用語がある場合はその理由を記載します。</p>

<h2>CTバージョンの記載</h2>
<div class="info-box tip">
<div class="info-box-title">記載テンプレート</div>
<p>Terminology Package: SDTM CT 2024-03-29<br>
Source: NCI EVS<br>
Applied to: All SDTM domains</p>
</div>

<h2>外部辞書情報</h2>
<table>
<thead><tr><th>辞書名</th><th>用途</th><th>記載必須情報</th></tr></thead>
<tbody>
<tr><td>MedDRA</td><td>有害事象、既往歴のコーディング</td><td>バージョン、言語</td></tr>
<tr><td>WHODrug</td><td>併用薬のコーディング</td><td>バージョン（月次/年次）、形式（B3/C3）</td></tr>
<tr><td>SNOMED CT</td><td>解剖部位等のコーディング</td><td>バージョン</td></tr>
<tr><td>LOINC</td><td>臨床検査のコーディング</td><td>バージョン</td></tr>
</tbody>
</table>

<h3>MedDRA記載例</h3>
<div class="info-box success">
<div class="info-box-title">記載例</div>
<p>Version: 26.1, Language: English<br>
Applied to: AE domain (AEDECOD, AEBODSYS, AEHLT, AEHLGT, AESOC), MH domain (MHDECOD, MHBODSYS)<br>
All AE and MH terms were coded to the Preferred Term (PT) level.</p>
</div>

<h2>Sponsor-Defined Terminology</h2>
<p>CDISCのCTに含まれない用語を使用する場合は、SDRGで正当化する必要があります。</p>
<table>
<thead><tr><th>パターン</th><th>対応方法</th></tr></thead>
<tbody>
<tr><td>CTに候補があるが異なる表現</td><td>CTの値にマッピングする（推奨）</td></tr>
<tr><td>CTに該当する値がない</td><td>Sponsor-defined termとしてSDRGで説明</td></tr>
<tr><td>新しいCTバージョンで追加済み</td><td>使用CTバージョンの時点では未収載であることを説明</td></tr>
</tbody>
</table>

<h2>CTバージョンと提出タイミング</h2>
<div class="info-box warning">
<div class="info-box-title">注意</div>
<p>DB Lock以降にCTが更新されても、DB Lock時点のCTバージョンを使用します。SDRGにはこの判断根拠を記載してください。<br>
例: "CDISC CT version 2024-03-29 was selected as it was the most recent version available at the time of database lock."</p>
</div>`,
            quiz: [
                { id: "q302_1", type: "choice", question: "CTバージョン選定の基準時点は？", options: ["試験開始時", "データベースロック時", "提出時", "プロトコル確定時"], answer: 1, explanation: "DB Lock時点の最新CTバージョンを使用するのが一般的です。" },
                { id: "q302_2", type: "choice", question: "MedDRAの主な用途は？", options: ["併用薬のコーディング", "有害事象・既往歴のコーディング", "臨床検査のコーディング", "解剖部位のコーディング"], answer: 1, explanation: "MedDRAは有害事象、既往歴のコーディングに使用されます。" },
                { id: "q302_3", type: "choice", question: "Sponsor-defined termが必要な場合の対応は？", options: ["何も記載しない", "SDRGで正当化する", "CTを自分で更新する", "用語を使用しない"], answer: 1, explanation: "CDISC CTに含まれない用語を使用する場合はSDRGで正当化が必要です。" },
                { id: "q302_4", type: "choice", question: "WHODrugの主な用途は？", options: ["有害事象のコーディング", "併用薬のコーディング", "試験デザインの定義", "被験者背景の分類"], answer: 1, explanation: "WHODrugは併用薬のコーディングに使用されます。" },
                { id: "q302_5", type: "fill", question: "CDISC CTの配信元のサービス名は？（英語3語の略称）", answer: "NCI EVS", explanation: "NCI EVS（NCI Enterprise Vocabulary Services）がCDISC CTの配信元です。" }
            ]
        },
        {
            id: 303,
            title: "Define.xmlとの関係",
            duration: "15分",
            content: `
<h2>Define.xmlとは</h2>
<p>Define.xmlは、提出データのメタデータ（変数定義、コードリスト、値レベルメタデータ等）を機械可読な形式で記述したXMLファイルです。</p>

<h2>SDRGとDefine.xmlの役割分担</h2>
<table>
<thead><tr><th>情報の種類</th><th>Define.xml</th><th>SDRG</th></tr></thead>
<tbody>
<tr><td>変数名・ラベル・型</td><td>記載する</td><td>記載しない</td></tr>
<tr><td>コードリスト</td><td>記載する</td><td>CTバージョンのみ記載</td></tr>
<tr><td>導出方法（詳細）</td><td>記載する</td><td>記載しない</td></tr>
<tr><td>試験デザインの説明</td><td>記載しない</td><td>記載する</td></tr>
<tr><td>バリデーション結果</td><td>記載しない</td><td>記載する</td></tr>
<tr><td>データ収集の背景</td><td>記載しない</td><td>記載する</td></tr>
<tr><td>Split Datasetの説明</td><td>参照のみ</td><td>詳細に記載する</td></tr>
<tr><td>外部辞書バージョン</td><td>記載する</td><td>記載する</td></tr>
<tr><td>プロトコル改訂の影響</td><td>記載しない</td><td>記載する</td></tr>
</tbody>
</table>

<h2>重複と不整合の回避</h2>
<div class="info-box danger">
<div class="info-box-title">一致必須の共通情報</div>
<ul>
<li>CTバージョン</li>
<li>辞書バージョン（MedDRA、WHODrug等）</li>
<li>ドメイン一覧 / データセット一覧</li>
<li>SDTM IGバージョン</li>
</ul>
</div>

<p><strong>原則</strong>: 共通情報は必ず一致させる。固有情報は各文書で完結させ、不必要な重複を避ける。</p>

<h2>整合チェックリスト</h2>
<table>
<thead><tr><th>チェック項目</th><th>確認内容</th></tr></thead>
<tbody>
<tr><td>データセット数</td><td>SDRGのファイル一覧とDefine.xmlのItemGroupDef数が一致</td></tr>
<tr><td>ドメイン名</td><td>SDRGとDefine.xmlで同じドメイン名を使用</td></tr>
<tr><td>CTバージョン</td><td>両文書で同一バージョンを記載</td></tr>
<tr><td>MedDRAバージョン</td><td>両文書で同一バージョンを記載</td></tr>
<tr><td>SDTM IGバージョン</td><td>両文書で同一バージョンを記載</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>SDRGは「なぜそうなっているか」、Define.xmlは「何がどう定義されているか」を記載</li>
<li>共通情報（CTバージョン、辞書バージョン等）は必ず一致させる</li>
<li>変数定義の詳細はDefine.xmlに委ね、SDRGでは重複記載を避ける</li>
<li>相互参照を明記し、レビューアーを適切な文書に誘導する</li>
</ul>
</div>`,
            quiz: [
                { id: "q303_1", type: "choice", question: "SDRGとDefine.xmlで必ず一致させるべき情報は？", options: ["プログラマー名", "CTバージョン", "PDFのページ数", "レビュー日"], answer: 1, explanation: "CTバージョン、辞書バージョン等の共通情報は必ず一致させます。" },
                { id: "q303_2", type: "choice", question: "試験デザインの説明はどちらに記載しますか？", options: ["Define.xmlのみ", "SDRGのみ", "両方", "どちらにも記載しない"], answer: 1, explanation: "試験デザインの説明はSDRGに記載し、Define.xmlには記載しません。" },
                { id: "q303_3", type: "choice", question: "変数名・ラベル・型の詳細はどちらに記載しますか？", options: ["SDRGのみ", "Define.xmlのみ", "両方", "Annotated CRFのみ"], answer: 1, explanation: "変数の定義（Label, Type等）はDefine.xmlに記載し、SDRGでは重複記載を避けます。" },
                { id: "q303_4", type: "choice", question: "SDRGの主な記載観点はどれですか？", options: ["何がどう定義されているか", "なぜそうなっているか", "誰が作成したか", "いつ作成されたか"], answer: 1, explanation: "SDRGは「なぜそうなっているか」を記載し、Define.xmlは「何がどう定義されているか」を記載します。" },
                { id: "q303_5", type: "fill", question: "Define.xmlのデータセット定義を表すXML要素名は？（英語1語）", answer: "ItemGroupDef", explanation: "ItemGroupDefはDefine.xmlでデータセットの定義を記述する要素です。" }
            ]
        }
    ]
};
