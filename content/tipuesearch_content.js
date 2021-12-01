var tipuesearch = {"pages": [{'title': 'About', 'text': '本學期的電腦輔助設計實習, 要求每一位學員根據本 HW template 的格式建立個人的作業倉儲與網頁. \n \n 40823122 \n 網站倉儲:  https://github.com/40823122/cad2021_hw \n 網站連結:  https://40823122.github.io/cad2021_hw/content/index.html \n 其他與作者或作業相關資料說明或介紹 \n', 'tags': '', 'url': 'About.html'}, {'title': 'Task', 'text': '', 'tags': '', 'url': 'Task.html'}, {'title': 'hwpages', 'text': '參考老師的程式修改出來(ver1) \n # 將資料存入 gist, 取其 url\nurl = "https://gist.githubusercontent.com/40823122/6bc043190a0bc1742bd053fd864f1642/raw/7286ffa5be58965b6e85cb2160252051b3055451/cad2021_2b_w2_list.txt"\n# 利用 open() 開啟 url 後, 以 readlines() 讀取後可納入數列\ndata = open(url).readlines()\n# 檢查資料筆數, 第一筆為 title\n#print(data)\n#print(len(data))\ndata = data[1:]\n#print(data)\nfor i in range(len(data)):\n    num_github = data[i] \n    num = num_github.split("\\t")[0]\n    account = num_github.split("\\t")[1]\n    if account == "":\n        account = num\n    print("<p><a href=\'https://" + str(account) + ".github.io/cad2021_hw\'>"+ str(num) + "</a>")\n    print("<a href=\'https://github.com/" + str(account) + "/cad2021_hw\'>倉儲</a></p>")\n \n 程式(ver2) \n # 將資料存入 gist, 取其 url\nurl = "https://gist.githubusercontent.com/40823122/6bc043190a0bc1742bd053fd864f1642/raw/7286ffa5be58965b6e85cb2160252051b3055451/cad2021_2b_w2_list.txt"\n# 利用 open() 開啟 url 後, 以 readlines() 讀取後可納入數列\ndata = open(url).readlines()\n# 檢查資料筆數, 第一筆為 title\n#print(data)\n#print(len(data))\ndata = data[1:]\n#print(data)\nfor i in range(len(data)):\n    num_github = data[i] \n    num = num_github.split("\\t")[0]\n    account = num_github.split("\\t")[1]\n    if account == "":\n        account = num\n    print("<p>"+ str(num) + "<a href=\'https://" + str(account) + ".github.io/cad2021_hw\'>網站</a>")\n    print("<a href=\'https://github.com/" + str(account) + "/cad2021_hw\'>倉儲</a></p>") \n cad2021 2b 各學員的網站連結 \n 倉儲 \n 40723135 網站   倉儲 \n 40723217 網站   倉儲 \n 40732331 網站   倉儲 \n 40823114 網站   倉儲 \n 40823115 網站   倉儲 \n 40823117 網站   倉儲 \n 40823119 網站   倉儲 \n 40823122 網站   倉儲 \n 40823127 網站   倉儲 \n 40823146 網站   倉儲 \n 40823148 網站   倉儲 \n 40823215 網站   倉儲 \n 40871106 網站   倉儲 \n 40923201 網站   倉儲 \n 40923203 網站   倉儲 \n 40923204 網站   倉儲 \n 40923205 網站   倉儲 \n 40923206 網站   倉儲 \n 40923207 網站   倉儲 \n 40923208 網站   倉儲 \n 40923209 網站   倉儲 \n 40923210 網站   倉儲 \n 40923211 網站   倉儲 \n 40923212 網站   倉儲 \n 40923213 網站   倉儲 \n 40923214 網站   倉儲 \n 40923216 網站   倉儲 \n 40923217 網站   倉儲 \n 40923218 網站   倉儲 \n 40923219 網站   倉儲 \n 40923220 網站   倉儲 \n 40923221 網站   倉儲 \n 40923223 網站   倉儲 \n 40923224 網站   倉儲 \n 40923225 網站   倉儲 \n 40923226 網站   倉儲 \n 40923227 網站   倉儲 \n 40923228 網站   倉儲 \n 40923229 網站   倉儲 \n 40923230 網站   倉儲 \n 40923231 網站   倉儲 \n 40923232 網站   倉儲 \n 40923233 網站   倉儲 \n 40923234 網站   倉儲 \n 40923235 網站   倉儲 \n 40923236 網站   倉儲 \n 40923237 網站   倉儲 \n 40923238 網站   倉儲 \n 40923239 網站   倉儲 \n 40923240 網站   倉儲 \n 40923241 網站   倉儲 \n 40923242 網站   倉儲 \n 40923243 網站   倉儲 \n 40923244 網站   倉儲 \n 40923245 網站   倉儲 \n 40923246 網站   倉儲 \n 40923247 網站   倉儲 \n 40923248 網站   倉儲 \n 40923249 網站   倉儲 \n 40923250 網站   倉儲 \n 40923251 網站   倉儲 \n 40923252 網站   倉儲 \n 40923253 網站   倉儲 \n 40971220 網站   倉儲 \n 40971227 網站   倉儲 \n', 'tags': '', 'url': 'hwpages.html'}, {'title': 'HW1', 'text': 'HW1 佔學期成績 25% \n HW1 必須在 2021.11.10 22:00 之前完成. \n HW1 具體項目成果回報區 將於 2021.09.23 開啟, 於  2021.11.10 22:00 關閉. \n 作業一: meArm Robot 零件繪圖與機電運動模擬場景製作 \n Step1 : 下載  meARM.7z  這個包含尚未完成組立的 meArm Robot 場景與雷射切割零件組立手冊. \n meArm_75-0040_v1.pdf  則是另外一本組立參考手冊. \n Step2 : 從課程網頁中的  Compile CoppeliaSim 頁面 , 下載  coppeliaSim 4.1.0 官方版與 MSYS2 編譯版.7z  (檔案大小 412 MB, 解開壓縮後 1GB) 可攜套件. \n Step3 : 在 HW1 中, 要求每一位學員透過程式亂數分配 (兩班實際亂數分配結果以上課時點擊下列按鈕所得結果為準) 所使用的兩套參數式 CAD 套件, 從軟體發展緣起開始進行介紹,\xa0 經過教育版軟體套件檔案的取得, 下載安裝以及配置使用. 根據 Step1 中的零件尺寸, 逐一完成 meArm Robot 各零件繪製與組立. 並將零件 匯入  CoppeliaSim 進行組裝配置後, 以  UI 介面 中的 slider 控制 meArm Robot 各軸的旋轉作動. \n 2b CAD 套件分配結果:  https://mde.tw/cad2021/downloads/online/2b_hw1_cad.txt \n 附件: \n 1. CAD 套件分配表: \n sw: Solidworks, inv: Inventor, nx: NX12, ons: Onshape, slvs: Solvespace \n 2a 套件亂數分配結果 \n 2b 套件亂數分配結果 \n 2. 在兩套 CAD 完成零件繪圖並轉入 CoppeliaSim 後, 為了建立 Dynamic Model 必須利用  shape edit modes  轉為  clean model , 並與實際轉入的 STL 格式零件外形結合應用後建立模擬場景 (scenes). \n 3. meARM Robot  動態模擬場景 的建構, 可參考  0 ,  1 ,  2 ,  3 ,  4 ,  5 ,  6 ,  7 , 也可參考  Uarm Robot model  與相關 影片 . \n 4. CoppeliaSim design dynamic simulations  說明頁面 . \n 5.  網際 Lua  程式執行. \n 6.  meArm.slvs ,  meArm_in_solvespace.slvs \n 7. UI 介面程式參考: \n function closeEventHandler(h)\n    sim.addLog(sim.verbosity_scriptinfos,\'Window \'..h..\' is closing...\')\n    simUI.hide(h)\nend\n\nfunction joint1_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta1 set to \'..newVal)\n    sim.setJointTargetPosition(joint1, newVal*deg)\nend\n\nfunction joint2_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta2 set to \'..newVal)\n    sim.setJointTargetPosition(joint2, newVal*deg)\nend\n\nfunction joint3_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta3 set to \'..newVal)\n    sim.setJointTargetPosition(joint3, newVal*deg)\nend\n\nfunction joint16_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta16 set to \'..newVal)\n    sim.setJointTargetPosition(joint16, newVal*deg)\n    sim.setJointTargetPosition(joint20, -newVal*deg)\nend\n\nfunction sysCall_init()\n    -- do some initialization here\n    joint1 = sim.getObjectHandle(\'motor1\')\n    joint2 = sim.getObjectHandle(\'motor2\')\n    joint3 = sim.getObjectHandle(\'motor3\')\n    joint16 = sim.getObjectHandle(\'motor16\')\n    joint20 = sim.getObjectHandle(\'motor20\')\n    i = 0\n    deg = math.pi/180\n    print(i)\n    xml = [[\n<ui closeable="true" on-close="closeEventHandler" resizable="true">\n    <label text="This is a demo of the CustomUI plugin. Browse through the tabs below to explore all the widgets that can be created with the plugin." wordwrap="true" />\n    <tabs>\n        <tab title="Numeric">a\n            <label text="Sliders can be oriented horizontally or vertically, and have optional properties that can be set (in the XML) such as minimum and maximum value." wordwrap="true" />\n            <label text="" id="3000" wordwrap="true" />\n            <label text="theta1" /> <hslider tick-position="above" tick-interval="1" \n            minimum="0" maximum="360" on-change="joint1_rotate" />\n            <label text="theta2" /> <hslider tick-position="above" tick-interval="1" \n            minimum="-90" maximum="65" on-change="joint2_rotate" />\n            <label text="theta3" /> <hslider tick-position="above" tick-interval="1" \n            minimum="-90" maximum="185" on-change="joint3_rotate" />\n            <label text="theta16" /> <hslider tick-position="above" tick-interval="1" \n            minimum="0" maximum="15" on-change="joint16_rotate" />\n        </tab>\n    </tabs>\n</ui>\n]]\n    ui=simUI.create(xml)\n    \nend \n \n (From:  2016_ADDITIVE MANUFACTURING PROCESSES FOR FABRICATING A MINI ROBOT - COMPUTATIONAL MODELS AND EXPERIMENTAL RESULTS.pdf ) \n \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'CAD1 繪圖(NX12)', 'text': '\n NX12提供了當今市場上唯一可擴展的多學科平台，通過與Mentor Graphics Capital Harness和Xpedition的緊密集成，整合了電氣，機械和控制系統。可消除了從開發到製造的每個步驟的創新障礙，幫助企業擺脫當今快速縮短產品生命周期的挑戰。NX12.0是集成產品設計、工程與製造於一體的解決方案，包含世界上最強大、最廣泛的產品設計應用模塊，具有高性能的機械設計和製圖功能，爲製造設計提供了高性能和靈活性，以滿足客戶設計任何複雜產品的需要。而且，與僅支持 CAD 的解決方案和封閉型企業解決方案不同，NX 設計能夠在開放型協同環境中的開發部門之間提供最高級集成，可用於產品設計、工程和製造全範圍的開發過程，幫助您改善產品質量，提高產品交付速度和效率。 \n NX 支援從概念設計到工程與製造的每個產品開發層面，以整合式工具組協調各個專業領域的合作、保留資料完整性與設計理念，並且簡化整個流程。 \n 不只內建電腦輔助設計、工程與製造工具組 (CAD/CAM/CAE)，還具有將資料管理、流程自動化、決策支援與其他有助您完善開發流程。 \n', 'tags': '', 'url': 'CAD1 繪圖(NX12).html'}, {'title': 'CAD1 安裝配置', 'text': 'NX12(可攜版) \n 在 課程網站 有提供下載連結 \n \n \n 啟動程式裡的連線伺服器要修改不然無法啟動 \n \n', 'tags': '', 'url': 'CAD1 安裝配置.html'}, {'title': 'CAD1 操作流程', 'text': 'CAD1 指各學員所分配到的第一套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD1 零組件繪圖操作流程影片 (Youtube) \n CAD1 零組件繪圖教學影片 (Wink) \n CAD1 零組件繪圖教學影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  零組件繪圖教學影片」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n', 'tags': '', 'url': 'CAD1 操作流程.html'}, {'title': 'CAD2 繪圖(ONSHAPE)', 'text': 'CAD2 緣起說明與介紹 \n 現在網路上推出很多的3D建模平台或軟體，給需要完成自己設計的人們或團體使用，有建立ID、PCB、建築、機構等，種類還不少。 \n 今年看到一套由前Solidworks團隊開發出來的3D建模平台 – Onshape，讓我驚訝的不是它的界面跟Solidworks很像，或是它免費（這是一定要），而且該有功能它都有，更重要的是它可以把設計的權力下放給每個使用者，而不只是特定的設計工程師，這對於開發產品的人感受會最深。 \n Onshape特色 \n 1. 讓Maker更易上手的建模策略 \n Onshape是用規劃圖來建立2D的概念，而不是單一斷面，這表示使用者可以在一張2D圖上看出各個面向的設計，這對機構工程師是基本能力，但對大部份沒有受過圖學訓練的maker或一般使用者，要他們把一空間的物件拆成單一的幾何元素，再組合成一個物體，才會達到需要的外型，很有難度，但這就是繪製3D需要做的事。 \n 3D建模大部份是由2D截面長成3D，這時2D的邊界就要很明確，因長出3D的範圍就是由線所建立的封閉面積，但Onshape改用類似塗色塊的方式，選出要長肉的區塊。 \n 這不是功能改進，而是設計概念的不同，但我也不能否認，這個概念可能是從大家常用的美工軟體概念來的。 \n 2.設計流程的重視 \n 在做機構或產品設計時，其實大部份的時間並非花在繪製，而是在修改跟思考。設計一定會改，越改才有機會更好，但改時一定會看前面所設計的3D圖，有可能是前十分鐘，也可能是前十天，更有可能是一次看好幾個不同時期的設計。 \n 傳統的方法是為3D設計圖建立不同的名稱，再一起打開，不是不能做，是很麻煩，而且碰到有參考或組合件以及協同設計時，這招一定會出問題。關於這部份，Onshape提出一個類似歷史紀錄的功能，這就很重要，因為沒有人的腦子會記得所有設計過程跟產出。 \n 3. 線上協同設計，特別適合Maker \n 協同設計不是新觀念，在很多軟體上早就有這樣的設計模式，Onshape也強調自己是一個協同設計平台，提供的功能與前述軟體差不多，在操作上規劃了方便的工具或指令，以一般maker在機構設計的使用上是該夠用。 \n 不過，因為Onshape是在網路平台上使用的系統，所以在做產品設計時，當電子零件的數目跟資料量變多的時候，操作起來會比較慢，這時就要看自己的網路速度快慢。不過也有解決的辦法，就是把連在一起的電子零件畫成一件，而細節略過不畫，這問題就差不多可以解決。 \n 但其實協同設計主要的概念是互相支援協助，而不是在公司設計產品時，因時間等原因造成你畫上蓋，我畫下蓋的這種狀況，而是大家提供自己的想法或專長，使概念更完整，這部份Onshape甚至提供可在平板或手機上使用的功能，這是很好的想法。 \n 4. Maker可得到專業的支援 \n 現在maker做出的創意作品非常多樣，以最近很夯的四軸直升機來說，如有特殊的需求，例如航空動力學或結構分析，一般這種資料在網路上也找的到，但真要做分析的話，還是必須使用分析軟體會比較精準，但大部份maker應該沒有財力去購買這類軟體。 \n \n', 'tags': '', 'url': 'CAD2 繪圖(ONSHAPE).html'}, {'title': 'CAD2 安裝', 'text': '', 'tags': '', 'url': 'CAD2 安裝.html'}, {'title': '零件繪製', 'text': '\n \n 零件連結 \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n', 'tags': '', 'url': '零件繪製.html'}, {'title': '零件組裝', 'text': '\n \n', 'tags': '', 'url': '零件組裝.html'}, {'title': '運動場景', 'text': '', 'tags': '', 'url': '運動場景.html'}, {'title': 'NX12', 'text': 'CAD1 零件轉出後轉入 CoppeliaSim 操作影片 (Youtube) \n \n', 'tags': '', 'url': 'NX12.html'}, {'title': 'ONSHAPE', 'text': 'CAD2 零件轉出後轉入 CoppeliaSim 操作影片 (Youtube) \n \n \n', 'tags': '', 'url': 'ONSHAPE.html'}, {'title': 'HW1-1', 'text': 'HW1-1 佔學期成績 15% \n HW1-1 必須在 2021.12.01 22:00 之前完成. \n HW1-1 具體項目成果回報區 將於 2021.11.18 開啟, 於  2021.12.01 22:00 關閉. \n 作業 1-1: Mirobot 機械手臂場景組合 \n 說明: meArm Robot 有四個自由度, 請根據 HW1 的零組件繪製組立與 CoppeliaSim 運動場景模擬, 延伸至  Task1-1  中六個自由度的 Mirobot 機械手臂. \n mirobot_part1_to_part5.7z  為取自 \xa0 https://github.com/wlkata/Mirobot-STL  的參考零件. 請利用場景中 Mirobot STL 零件, 組合為可以透過  UI 介面 中的 slider 控制各軸作動旋轉的運動模型. \n 請根據  Task1-1  中的說明, 完成各項指定任務. \n', 'tags': '', 'url': 'HW1-1.html'}, {'title': 'HW2', 'text': 'HW2 佔學期成績 20% \n HW2 必須在 2021.12.22 22:00 之前完成. \n HW2 具體項目成果回報區 將於 2021.12.09 開啟, 於  2021.12.22 22:00 關閉. \n meArm 逆向運動學與網際參數式 CAD API 結合應用. \n 請將  https://github.com/mdecourse/meArm  中的 meArm Robot 逆向運動學程式, 改為 Lua 與 Python 程式, 使能套用至 HW1 所完成的 CoppeliaSim meArm 運動模擬場景. 並分別採 Lua, Legacy remote API 及 Bluezero remote API 逆向運動的方式進行控制. \n 請利用  Task2  中的 Solidworks, Inventor 與 NX API 程式控制 meArm Robot 零組件尺寸, 說明並討論如何透過網際程式控制 meArm Robot 的零件尺寸, 並結合上述逆向運動學程式庫, 使得自動化機電產品開發流程更容易滿足客製化需求. \n 參考: \n 2016_ADDITIVE MANUFACTURING PROCESSES FOR FABRICATING A MINI ROBOT - COMPUTATIONAL MODELS AND EXPERIMENTAL RESULTS.pdf \n Robot Manipulator Control with Inverse Kinematics PD-Pseudoinverse Jacobian and Forward Kinematics Denavit Hartenber.pdf \n KINEMATIC ANALYSIS FOR ROBOT ARM.pdf \n https://codebender.cc/user/MeArm \n https://github.com/mdecourse/meArmPi \n /downloads/MeArmPiTechnicalOverviewV0-3DRAFT.pdf \n https://github.com/mdecourse/me-arm-ik \n https://github.com/mdecourse/mearm_model \n https://courses.ece.cornell.edu/ece5990/ECE5725_Fall2016_Projects/pas324_ml634/index.html \n https://github.com/mdecourse/InefficientSkittleSorter \n https://mearm.com \n', 'tags': '', 'url': 'HW2.html'}, {'title': 'HW3', 'text': 'HW3 為選項作業. \n HW3 具體項目成果回報區 將於 2021.12.09 開啟, 於  2022.01.05 22:00 關閉 \n https://mde.tw/cad2021/content/Task3.html \xa0 \n https://mde.tw/cad2021/content/Task4.html \n https://mde.tw/cad2021/content/Task5.html \n https://mde.tw/cad2021/content/Task6.html \n https://mde.tw/cad2021/content/Task7.html \n 請從上列 Tasks 中自行選擇項目內容完成 HW3. \n', 'tags': '', 'url': 'HW3.html'}, {'title': 'Final Project', 'text': 'Final Project 佔學期成績 40% \n 2a 與 2b 必須在 2022.01.06 上課之前完成 Final Project \n Final Project 具體項目成果回報區 將於 2021.12.09 開啟, 於  2022.01.05 22:00 關閉 \n 彈性製造系統場景設計與製作 \n 請從  https://github.com/mdecourse/scenes  與  https://github.com/mdecourse/models  中選擇場景或模型, 配合  cad2021_textbook.pdf  (登入 @gm 帳號後下載) 教材中的內容, 自選製作與組立產品, 組合成一個 Flexible Manufacturing System 系統場景. \n 彈性製造系統內容說明 \n 範例: \n \n \n', 'tags': '', 'url': 'Final Project.html'}, {'title': 'run', 'text': ' 導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n', 'tags': '', 'url': 'run.html'}]};