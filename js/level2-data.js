const LEVEL2_DATA = {
    id: 2,
    title: "提出・適合性",
    icon: "📋",
    description: "Submission Overview、Data Conformance、Domain情報を学ぶ",
    modules: [
        {
            id: 201,
            title: "Submission Overviewセクション",
            duration: "15分",
            content: `
<h2>Submission Overviewの目的</h2>
<p>レビューアーに提出パッケージの全体像を提示し、どのファイルがどこに配置されているかを明確にするセクションです。</p>

<h2>ディレクトリ構造の説明</h2>
<p>eCTDのディレクトリ構造をASCII図で示し、各ファイルの配置を明示します。</p>
<div class="info-box tip">
<div class="info-box-title">ディレクトリ構造例</div>
<p>study-abc001/ → tabulations/ → sdtm/ → datasets/（dm.xpt, ae.xpt等）、define.xml、sdrg.pdf、blankcrf.pdf</p>
</div>

<h2>ファイル一覧表</h2>
<table>
<thead><tr><th>No</th><th>Dataset</th><th>Domain</th><th>Label</th><th>Records</th><th>Subjects</th><th>File Size</th><th>Split</th></tr></thead>
<tbody>
<tr><td>1</td><td>dm.xpt</td><td>DM</td><td>Demographics</td><td>450</td><td>450</td><td>125 KB</td><td>No</td></tr>
<tr><td>2</td><td>ae.xpt</td><td>AE</td><td>Adverse Events</td><td>1,234</td><td>312</td><td>456 KB</td><td>No</td></tr>
<tr><td>3</td><td>lb1.xpt</td><td>LB</td><td>Lab - Chemistry</td><td>45,000</td><td>450</td><td>4.2 MB</td><td>Yes</td></tr>
<tr><td>4</td><td>lb2.xpt</td><td>LB</td><td>Lab - Hematology</td><td>22,500</td><td>450</td><td>2.1 MB</td><td>Yes</td></tr>
<tr><td>5</td><td>vs.xpt</td><td>VS</td><td>Vital Signs</td><td>13,500</td><td>450</td><td>890 KB</td><td>No</td></tr>
</tbody>
</table>

<h2>Split Datasetの説明</h2>
<p>SDTMデータセットはSAS Transport File（XPT v5）形式で提出しますが、1ファイルあたり<strong>5GB</strong>の制限があります。大規模なドメイン（特にLB、FA等）ではファイルを分割（Split）します。</p>
<div class="info-box tip">
<div class="info-box-title">Split Datasetの記載例</div>
<p>The LB domain was split into two datasets based on LBCAT: lb1.xpt (CHEMISTRY, 45,000 records) and lb2.xpt (HEMATOLOGY, 22,500 records). Both files share the same variable structure.</p>
</div>

<h2>ファイル命名規則</h2>
<table>
<thead><tr><th>規則</th><th>説明</th><th>例</th></tr></thead>
<tbody>
<tr><td>小文字使用</td><td>ファイル名は全て小文字</td><td>dm.xpt（DM.XPTではない）</td></tr>
<tr><td>ドメイン名準拠</td><td>SDTM IG準拠の名前</td><td>ae.xpt, lb.xpt</td></tr>
<tr><td>SUPPファイル</td><td>supp + ドメイン名</td><td>suppae.xpt, suppdm.xpt</td></tr>
<tr><td>Split番号</td><td>ドメイン名 + 連番</td><td>lb1.xpt, lb2.xpt</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>ディレクトリ構造はASCII図で明示する</li>
<li>ファイル一覧表にはレコード数・被験者数・ファイルサイズを含める</li>
<li>Split Datasetがある場合は分割基準と各ファイルの内容を明記する</li>
<li>ファイル命名規則はCDISC/FDA標準に従う</li>
</ul>
</div>`,
            quiz: [
                { id: "q201_1", type: "choice", question: "SDTMデータセット（XPT v5）の1ファイルあたりのサイズ制限は？", options: ["1GB", "2GB", "5GB", "10GB"], answer: 2, explanation: "SAS Transport File（XPT v5）は1ファイルあたり5GBの制限があります。" },
                { id: "q201_2", type: "choice", question: "ファイル一覧表に含めるべきでない情報はどれですか？", options: ["レコード数", "被験者数", "プログラマーの名前", "ファイルサイズ"], answer: 2, explanation: "ファイル一覧表にはレコード数・被験者数・ファイルサイズを含めます。プログラマー名は不要です。" },
                { id: "q201_3", type: "choice", question: "Split Datasetの説明として正しいものはどれですか？", options: ["ファイル名は大文字で統一する", "分割基準と各ファイルの内容を明記する", "Split Datasetの存在は記載不要", "分割は任意のタイミングで行う"], answer: 1, explanation: "Split Datasetがある場合は分割基準と各ファイルの内容を明記する必要があります。" },
                { id: "q201_4", type: "choice", question: "SDTMファイル名の正しい形式はどれですか？", options: ["DM.XPT", "dm.xpt", "DM.xpt", "Dm.Xpt"], answer: 1, explanation: "ファイル名は全て小文字（dm.xpt）が推奨されます。" },
                { id: "q201_5", type: "fill", question: "AEドメインのSupplemental Qualifierファイル名は？（拡張子含む）", answer: "suppae.xpt", explanation: "SUPPファイルはsupp + ドメイン名.xptの形式です。" }
            ]
        },
        {
            id: 202,
            title: "Data Conformanceセクション",
            duration: "20分",
            content: `
<h2>Data Conformanceの目的</h2>
<p>Data Conformanceセクションは、提出データがCDISC標準にどの程度準拠しているかを示し、未解決のバリデーションIssueに対する説明・正当化を記載するセクションです。</p>

<h2>バリデーションツール</h2>
<p><strong>Pinnacle 21</strong>（Community / Enterprise）がCDISCバリデーションの業界標準ツールです。</p>
<div class="info-box tip">
<div class="info-box-title">Pinnacle 21の処理</div>
<p>入力: SDTMデータセット(XPT)、Define.xml、CT(XML)<br>
処理: CDISC Validation Rules、FDA Business Rules、PMDA Rules<br>
出力: Validation Report（Error / Warning / Notice）</p>
</div>

<h2>バリデーション結果サマリーの記載</h2>
<table>
<thead><tr><th>Category</th><th>Rule ID</th><th>Message</th><th>Count</th><th>Disposition</th></tr></thead>
<tbody>
<tr><td>Error</td><td>SD0006</td><td>Invalid EPOCH value</td><td>0</td><td>N/A</td></tr>
<tr><td>Warning</td><td>SD0064</td><td>Inconsistent VISITNUM</td><td>12</td><td>Explained below</td></tr>
<tr><td>Warning</td><td>SD1002</td><td>Non-standard variable name</td><td>3</td><td>By design</td></tr>
<tr><td>Notice</td><td>SD0043</td><td>Dataset label length</td><td>5</td><td>Acknowledged</td></tr>
</tbody>
</table>

<h2>Disposition（対応方針）の分類</h2>
<table>
<thead><tr><th>Disposition</th><th>意味</th><th>使用場面</th></tr></thead>
<tbody>
<tr><td>N/A</td><td>該当Issueなし</td><td>エラーが0件の場合</td></tr>
<tr><td>Explained below</td><td>詳細説明あり</td><td>正当な理由がある場合</td></tr>
<tr><td>By design</td><td>意図的な設計</td><td>業務要件による場合</td></tr>
<tr><td>Data as collected</td><td>収集データのまま</td><td>原データが正しい場合</td></tr>
<tr><td>Acknowledged</td><td>認識済み</td><td>軽微なNotice等</td></tr>
<tr><td>Will be corrected</td><td>修正予定</td><td>次回提出で修正</td></tr>
</tbody>
</table>

<h2>CDISC標準バージョンの明記</h2>
<table>
<thead><tr><th>項目</th><th>バージョン</th></tr></thead>
<tbody>
<tr><td>SDTM IG</td><td>v3.4</td></tr>
<tr><td>CDISC CT</td><td>2024-03-29</td></tr>
<tr><td>Define-XML</td><td>v2.1</td></tr>
<tr><td>Pinnacle 21</td><td>v4.0.0</td></tr>
<tr><td>Validation Rules</td><td>FDA Business Rules v2.2</td></tr>
</tbody>
</table>

<h2>FDA/PMDAの期待レベル</h2>
<div class="info-box danger">
<div class="info-box-title">Error</div>
<p>全て解消、または正当な説明が必須。レビューアーは未説明のErrorを重大な問題とみなす。</p>
</div>
<div class="info-box warning">
<div class="info-box-title">Warning</div>
<p>可能な限り解消、残存するものは説明を推奨。説明がないWarningは照会の対象となりうる。</p>
</div>
<div class="info-box tip">
<div class="info-box-title">Notice</div>
<p>解消が望ましいが、説明は任意。大量のNoticeは品質への懸念を引き起こす可能性あり。</p>
</div>`,
            quiz: [
                { id: "q202_1", type: "choice", question: "Pinnacle 21のバリデーション結果で最も深刻なカテゴリは？", options: ["Notice", "Warning", "Error", "Information"], answer: 2, explanation: "ErrorがCDISC標準への明確な違反を示す最も深刻なカテゴリです。" },
                { id: "q202_2", type: "choice", question: "Dispositionの「By design」はどのような場合に使いますか？", options: ["バグが見つかった場合", "意図的な設計による場合", "データが欠測の場合", "ツールのエラーの場合"], answer: 1, explanation: "「By design」は業務要件による意図的な設計の場合に使用します。" },
                { id: "q202_3", type: "choice", question: "FDA/PMDAがErrorに対して期待することは？", options: ["無視してよい", "全て解消または正当な説明が必須", "次回提出時に対応すればよい", "Noticeとして記載すればよい"], answer: 1, explanation: "Errorは全て解消するか、正当な説明を記載する必要があります。" },
                { id: "q202_4", type: "choice", question: "Data Conformanceセクションで明記すべきでないものは？", options: ["SDTM IGバージョン", "Pinnacle 21バージョン", "プログラマーの給与", "CDISC CTバージョン"], answer: 2, explanation: "CDISC標準・ツールのバージョン情報は必須ですが、プログラマーの個人情報は不要です。" },
                { id: "q202_5", type: "fill", question: "CDISCバリデーションツールの名前は？（英語、2語）", answer: "Pinnacle 21", explanation: "Pinnacle 21（旧OpenCDISC）がCDISCバリデーションの業界標準ツールです。" }
            ]
        },
        {
            id: 203,
            title: "Domain-Specific Information",
            duration: "20分",
            content: `
<h2>Domain-Specific Informationの目的</h2>
<p>個々のSDTMドメインについて、Define.xmlだけでは伝わらない背景情報や特殊事情を記載するセクションです。<strong>全ドメインについて記載する必要はなく</strong>、特記すべき事項があるドメインのみ記載します。</p>

<h2>主要ドメインと記載ポイント</h2>

<h3>DM（Demographics）</h3>
<table>
<thead><tr><th>記載ポイント</th><th>説明</th></tr></thead>
<tbody>
<tr><td>ARM/ARMCD</td><td>実際の治療群の定義と割り当て方法</td></tr>
<tr><td>ACTARM/ACTARMCD</td><td>計画と実際の治療群が異なるケース</td></tr>
<tr><td>RFSTDTC/RFENDTC</td><td>Reference Date（基準日）の定義</td></tr>
<tr><td>Screen Failure</td><td>Screen Failureの被験者の取り扱い</td></tr>
</tbody>
</table>

<h3>AE（Adverse Events）</h3>
<table>
<thead><tr><th>記載ポイント</th><th>説明</th></tr></thead>
<tbody>
<tr><td>AETERM/AEDECOD</td><td>MedDRAコーディングの方法</td></tr>
<tr><td>AESEV/AETOXGR</td><td>重症度 vs 毒性Grade</td></tr>
<tr><td>AEREL</td><td>因果関係の判定基準</td></tr>
<tr><td>SUPPAE</td><td>Supplemental Qualifierに格納した変数</td></tr>
</tbody>
</table>

<h3>LB（Laboratory Test Results）</h3>
<table>
<thead><tr><th>記載ポイント</th><th>説明</th></tr></thead>
<tbody>
<tr><td>LBTEST/LBTESTCD</td><td>検査項目の一覧とコーディング</td></tr>
<tr><td>Central vs Local Lab</td><td>中央検査と施設検査の取り扱い</td></tr>
<tr><td>基準値範囲</td><td>LBORNRLO/LBORNRHI, LBSTNRLO/LBSTNRHI</td></tr>
<tr><td>Split Dataset</td><td>分割がある場合の説明</td></tr>
</tbody>
</table>

<h2>SUPPドメイン（Supplemental Qualifiers）</h2>
<p>SDTMの標準変数に収まらない情報はSUPP--ドメインに格納します。SDRGでは各SUPP変数の意味と理由を説明します。</p>
<div class="info-box tip">
<div class="info-box-title">SUPPAE記載例</div>
<p>The following non-standard variables were collected for adverse events and stored in SUPPAE:<br>
AEACNOTH: Other Action Taken (Free-text description of action taken other than those captured in AEACN)<br>
AESSION: AE Session Number (Session number linking AE to the specific clinic visit session)</p>
</div>

<h2>RELRECドメイン</h2>
<p>関連するレコード間の関係を示すRELRECドメインがある場合、その関係性を説明します。</p>

<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>全ドメインでなく、特記事項があるドメインのみ記載する</li>
<li>Define.xmlだけでは伝わらない背景情報を中心に記述する</li>
<li>SUPP--ドメインの各QNAMについて意味と格納理由を説明する</li>
<li>MedDRA/CTCAE等のコーディング基準は具体的に記載する</li>
</ul>
</div>`,
            quiz: [
                { id: "q203_1", type: "choice", question: "Domain-Specific Informationで記載すべきドメインの範囲は？", options: ["全ドメイン", "特記事項があるドメインのみ", "DM、AE、LBの3つのみ", "Findings系ドメインのみ"], answer: 1, explanation: "全ドメインについて記載する必要はなく、特記すべき事項があるドメインのみ記載します。" },
                { id: "q203_2", type: "choice", question: "SUPPドメインについてSDRGで説明すべき内容は？", options: ["プログラムのソースコード", "各QNAMの意味と格納理由", "全レコードのデータ一覧", "SEQ番号の採番ルール"], answer: 1, explanation: "SUPP--ドメインの各QNAMについて意味と格納理由を説明します。" },
                { id: "q203_3", type: "choice", question: "AEドメインの記載で重要なのはどれですか？", options: ["患者の住所", "MedDRAのバージョンとコーディング方法", "CRFのページ番号", "データ入力者名"], answer: 1, explanation: "MedDRAコーディングの方法やバージョンはAEドメインの重要な記載ポイントです。" },
                { id: "q203_4", type: "choice", question: "RELRECドメインは何を示しますか？", options: ["レコードの削除履歴", "関連するレコード間の関係", "データの暗号化情報", "変数のデータ型"], answer: 1, explanation: "RELRECはRelated Recordsドメインで、レコード間の関係性を示します。" },
                { id: "q203_5", type: "fill", question: "SDTMの標準変数に収まらない情報を格納するドメインの接頭辞は？（4文字）", answer: "SUPP", explanation: "Supplemental Qualifiers（SUPP--）ドメインに格納します。" }
            ]
        }
    ]
};
