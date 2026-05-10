const LOGO = "data:image/png;base64,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ERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERFRCfX/4yRSCft+vI4AAAAASUVORK5CYII=";

const ARABIC_MONTHS = [
  'يناير','فبراير','مارس','أبريل','مايو','يونيو',
  'يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'
];

// ============= STATE =============
const state = {
  clientName: 'شركة العميل',
  startDate: '2026-05-05',
  endDate: '2026-05-31',
  numberOfMonths: 1,
  numberOfPayments: 2,
  totalPayment: 30000,
  paymentPerMonth: 30000,
  services: [
    {
      name: 'فيديوهات عضوية (Organic Reels)',
      quantity: 4,
      details: 'سيناريو، تصوير بالتليفون، مونتاج، نصوص'
    },
    {
      name: 'فيديوهات إعلانية (Performance Ad Creatives)',
      quantity: 2,
      details: 'Hook/CTA-driven، تصوير بالتليفون، creative assets فقط، بدون إدارة إعلانات'
    }
  ]
};

const DEFAULT_STATE = JSON.parse(JSON.stringify(state));

// ============= UTILITIES =============
function formatArabicDate(isoDate) {
  if (!isoDate) return '';
  const d = new Date(isoDate);
  if (isNaN(d)) return isoDate;
  const day = d.getDate();
  const month = ARABIC_MONTHS[d.getMonth()];
  const year = d.getFullYear();
  return `${day} ${month} ${year}`;
}

function formatNumber(n) {
  if (n == null || isNaN(n)) return '0';
  return Number(n).toLocaleString('en-US');
}

function escapeHtml(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

function distributePayments(total, numPayments, startISO, endISO) {
  const start = new Date(startISO);
  const end = new Date(endISO);
  const totalMs = Math.max(0, end - start);
  const each = numPayments > 0 ? total / numPayments : 0;
  const rounded = Math.round(each);
  const lastAdj = total - rounded * (numPayments - 1);

  const payments = [];
  for (let i = 0; i < numPayments; i++) {
    const offsetMs = (totalMs * i) / Math.max(1, numPayments);
    const date = new Date(start.getTime() + offsetMs);
    const amount = (i === numPayments - 1) ? lastAdj : rounded;
    payments.push({
      number: i + 1,
      date: date.toISOString().slice(0, 10),
      amount,
      pctLabel: `${Math.round(100 / numPayments)}%`
    });
  }
  return payments;
}

function totalVideos() {
  return state.services.reduce((sum, s) => sum + (Number(s.quantity) || 0), 0);
}

// ============= CONTRACT TEMPLATE =============
function renderContract() {
  const totalQty = totalVideos();
  const payments = distributePayments(
    Number(state.totalPayment) || 0,
    Math.max(1, Number(state.numberOfPayments) || 1),
    state.startDate,
    state.endDate
  );
  const months = Number(state.numberOfMonths) || 1;
  const monthsLabel = months === 1 ? 'شهر واحد' : `${months} أشهر`;

  const startAr = formatArabicDate(state.startDate);
  const endAr = formatArabicDate(state.endDate);
  const clientName = escapeHtml(state.clientName || '___________');
  const total = formatNumber(state.totalPayment);
  const monthly = formatNumber(state.paymentPerMonth);

  // ─── Services list HTML ───
  const servicesHtml = state.services.map((s, idx) => {
    const name = escapeHtml(s.name || `الخدمة ${idx + 1}`);
    const qty = Number(s.quantity) || 0;
    const details = escapeHtml(s.details || '');
    return `<li><span class="bold">${name}</span> &mdash; <span class="bold">${qty}</span> وحدة${details ? `، ${details}` : ''}</li>`.replace('&mdash;', '،');
  }).join('');

  // ─── Services summary table ───
  const servicesTable = state.services.map(s => `
    <tr>
      <td>${escapeHtml(s.name || '')}</td>
      <td>${Number(s.quantity) || 0}</td>
      <td>${escapeHtml(s.details || '')}</td>
    </tr>
  `).join('');

  // ─── Payment schedule table ───
  const paymentsTableRows = payments.map(p => `
    <tr>
      <td>${p.number}</td>
      <td>${formatArabicDate(p.date)} (${p.pctLabel})</td>
      <td>${formatNumber(p.amount)}</td>
      <td></td>
      <td></td>
    </tr>
  `).join('');

  // ─── Payment list (Article 3.2) ───
  const paymentBullets = payments.map(p => `
    <li><span class="bold">الدفعة ${p.number} (${p.pctLabel}):</span> مبلغ <span class="bold">${formatNumber(p.amount)} جنيه مصري</span> تُسدَّد بتاريخ <span class="bold">${formatArabicDate(p.date)}</span>.</li>
  `).join('');

  return `
  <!-- COVER -->
  <section class="cover">
    <div class="masthead">
      <img src="${LOGO}" alt="The Reel Recipe">
      <div class="masthead-text">
        <div class="masthead-brand">The Reel Recipe</div>
      </div>
    </div>

    <div class="cover-body">
      <div class="doc-type">Service Agreement</div>
      <h1 class="cover-title-ar">عقد خدمات إنتاج المحتوى</h1>
      <div class="cover-title-en">Organic &amp; Performance Content Production</div>

      <div class="meta-list">
        <div class="meta-label">Client</div>
        <div class="meta-value">${clientName}</div>

        <div class="meta-label">Service</div>
        <div class="meta-value">إنتاج محتوى رقمي، إجمالي ${totalQty} وحدة</div>

        <div class="meta-label">Duration</div>
        <div class="meta-value">${monthsLabel} (${startAr} حتى ${endAr})</div>

        <div class="meta-label">Value</div>
        <div class="meta-value">${total} EGP، إجمالي قيمة العقد</div>

        <div class="meta-label">Start Date</div>
        <div class="meta-value">${startAr}</div>
      </div>

      <p class="cover-intro">يُحدِّد هذا العقد الشروط والأحكام المتفق عليها بين الطرفين، ويُشكّل الوثيقة الرسمية المنظِّمة للعلاقة التعاقدية بينهما فيما يخص خدمات إنتاج المحتوى الرقمي العضوي والإعلاني.</p>
    </div>

    <div class="cover-foot">
      <div>The Reel Recipe</div>
      <div>Cairo, Egypt</div>
      <div>${startAr}</div>
    </div>
  </section>

  <!-- BODY -->
  <section>

    <div class="body-header">
      <img src="${LOGO}" alt="TRR">
      <div class="body-header-text">TRR &times; ${clientName} &nbsp;/&nbsp; Content Production Agreement</div>
    </div>

    <div class="doc-title">
      <h2 class="doc-title-ar">عقد تقديم خدمات إنتاج المحتوى العضوي والإعلاني</h2>
      <div class="doc-title-en">Organic &amp; Performance Content Production Services Agreement</div>
    </div>

    <p class="preamble">تم إبرام هذا العقد بتاريخ <span class="bold">${startAr}</span>، بين كلٍ من الطرفين الآتيَين:</p>

    <div class="parties">
      <div class="party">
        <div class="party-label">الطرف الأول &nbsp;/&nbsp; الوكالة</div>
        <p>وكالة <span class="bold">تي ار ار للتطبيقات والتسويق الرقمي</span>، المسجلة وفقًا لقوانين جمهورية مصر العربية، ويشار إليها بـ <span class="bold">"The Reel Recipe"</span>.</p>
      </div>
      <div class="party">
        <div class="party-label">الطرف الثاني &nbsp;/&nbsp; العميل</div>
        <p>شركة <span class="bold">${clientName}</span>، ويُمثّلها السيد/ة <span class="blank"></span> بصفته/ا الممثل المعتمد، وحامل بطاقة الرقم القومي رقم <span class="blank"></span>، ويشار إليها بـ <span class="bold">"العميل"</span>.</p>
      </div>
    </div>

    <hr class="rule">

    <!-- ARTICLE 1 -->
    <div class="article">
      <div class="article-num">Article 01</div>
      <h3 class="article-name">المادة (1): نطاق الخدمات</h3>
    </div>

    <p><span class="clause-num">1.1</span> تلتزم الوكالة بتقديم خدمات <span class="bold">إنتاج محتوى الفيديو القصير (Organic Reels &amp; Performance Ad Creatives)</span> لصالح حسابات العميل على منصات التواصل الاجتماعي، وفقًا للشروط المحددة في هذا العقد.</p>

    <p><span class="clause-num">1.2</span> يُقر العميل بأن توقيعه على هذا العقد يُعدّ قبولاً كاملاً وغير مشروط بجميع بنوده وشروطه.</p>

    <p><span class="clause-num">1.3</span> لا تلتزم الوكالة بتقديم أي خدمات غير مذكورة صراحةً في هذا العقد. أي طلب إضافي يُعدّ خدمةً مستقلة تستوجب ملحقًا ماليًا موقَّعًا من الطرفين.</p>

    <p class="sub-heading">تفاصيل الخدمات المتفق عليها</p>
    <ul>${servicesHtml}</ul>

    <div class="exclusions">
      <div class="exclusions-label">لا تشمل الخدمة</div>
      <ul>
        <li><span class="bold">إدارة الحملات الإعلانية أو شراء الإعلانات (Media Buying / Ads Management) بأي شكل من الأشكال</span></li>
        <li>ميزانية الإعلانات المدفوعة (Ad Spend / Boosting Budget)</li>
        <li>معدات تصوير احترافية عالية التكلفة</li>
        <li>ممثلين أو موديلز خارجيين</li>
        <li>مواقع تصوير مدفوعة الأجر</li>
        <li>الإكسسوارات أو المستلزمات الإنتاجية الخاصة (Props)</li>
        <li>التخطيط الاستراتيجي أو خدمات العلاقات العامة</li>
      </ul>
      <p class="exclusions-foot">جميع التكاليف الخارجية المرتبطة بالبنود أعلاه يتحمّلها <span class="bold">العميل</span> بشكل كامل، ولا تُعدّ جزءًا من قيمة العقد.</p>
    </div>

    <p class="sub-heading">ملكية المحتوى</p>
    <p><span class="clause-num">1.4</span> تؤول ملكية المحتوى المُنتَج إلى <span class="bold">الطرف الثاني (العميل)</span> فور اكتمال السداد الكامل لقيمة العقد.</p>
    <p><span class="clause-num">1.5</span> يحتفظ الطرف الأول بحق توظيف المحتوى لأغراض عرض أعماله وحضوره المهني (Portfolio)، ما لم يُتفق كتابيًا على خلاف ذلك.</p>

    <hr class="rule">

    <!-- ARTICLE 2 -->
    <div class="article">
      <div class="article-num">Article 02</div>
      <h3 class="article-name">المادة (2): مدة العقد</h3>
    </div>

    <p><span class="clause-num">2.1</span> يسري هذا العقد لمدة <span class="bold">${monthsLabel}</span>، تبدأ من تاريخ <span class="bold">${startAr}</span> وتنتهي في <span class="bold">${endAr}</span>.</p>

    <p><span class="clause-num">2.2</span> يتطلب بدء تنفيذ الخدمات مدة تحضير لا تقل عن <span class="bold">خمسة عشر (15) يوم عمل</span> من تاريخ استلام جميع المتطلبات والموافقات من العميل.</p>

    <p><span class="clause-num">2.3</span> <span class="bold">لا يتجدد هذا العقد تلقائيًا</span>؛ وينتهي بانتهاء مدته في ${endAr} ما لم يتفق الطرفان كتابيًا على إبرام عقد جديد بشروط متفق عليها مجددًا.</p>

    <hr class="rule">

    <!-- ARTICLE 3 -->
    <div class="article">
      <div class="article-num">Article 03</div>
      <h3 class="article-name">المادة (3): المقابل المالي وشروط السداد</h3>
    </div>

    <p><span class="clause-num">3.1</span> يبلغ إجمالي المقابل المالي للعقد <span class="bold">${total} EGP</span> شاملاً جميع الخدمات المنصوص عليها في المادة (1) عن كامل مدة العقد البالغة ${monthsLabel}، بمتوسط شهري قدره <span class="bold">${monthly} EGP</span>.</p>

    <p><span class="clause-num">3.2</span> يلتزم العميل بسداد المقابل المالي على <span class="bold">${state.numberOfPayments}</span> دفعات وفق الجدول التالي:</p>
    <ul>${paymentBullets}</ul>

    <p><span class="clause-num">3.3</span> جميع المدفوعات <span class="bold">غير قابلة للاسترداد</span> بأي حال من الأحوال.</p>

    <p><span class="clause-num">3.4</span> يحق للوكالة تعليق الخدمات فورًا في حال تأخر العميل عن السداد في موعده المحدد، دون أي مسؤولية على الوكالة.</p>

    <p class="sub-heading"><span class="clause-num">3.5</span> طرق الدفع المعتمدة</p>
    <p>يتم السداد عبر التحويل البنكي أو الدفع النقدي أو أي وسيلة يتفق عليها الطرفان كتابيًا. ولا يُعتدّ بالسداد إلا بعد تأكيد استلام المبلغ من الطرف الأول.</p>

    <div class="bank">
      <p><span class="bank-label">Bank</span> CIB Triumph Branch</p>
      <p><span class="bank-label">Account Number</span> 100053555092</p>
      <p><span class="bank-label">IBAN</span> EG900010003200000100053555092</p>
      <p><span class="bank-label">Instapay</span> CIB 100053555092</p>
    </div>

    <hr class="rule">

    <!-- ARTICLE 4 -->
    <div class="article">
      <div class="article-num">Article 04</div>
      <h3 class="article-name">المادة (4): سياسة المراجعات والتعديلات</h3>
    </div>

    <p><span class="clause-num">4.1</span> يحق للعميل الاستفادة من <span class="bold">جولتَي مراجعة (2)</span> على خطط المحتوى والسيناريوهات، و<span class="bold">جولة مراجعة واحدة (1)</span> على كل مقطع فيديو مُنتَج.</p>

    <p><span class="clause-num">4.2</span> يجب تقديم طلبات المراجعة خلال <span class="bold">ثمانية وأربعين (48) ساعة</span> من تاريخ تسليم العمل. وفي حال عدم الرد خلال هذه المدة، يُعتبر العمل مقبولاً تلقائيًا.</p>

    <p><span class="clause-num">4.3</span> تُحتسب كل جولة تعديل إضافية بمبلغ <span class="bold">ألف وخمسمائة جنيه مصري (1,500 EGP)</span> لكل جولة، تُسدَّد مقدمًا قبل الشروع في التعديل.</p>

    <hr class="rule">

    <!-- ARTICLE 5 -->
    <div class="article">
      <div class="article-num">Article 05</div>
      <h3 class="article-name">المادة (5): إنهاء العقد</h3>
    </div>

    <p><span class="clause-num">5.1</span> أي إنهاء مبكر من قِبل العميل قبل انقضاء مدة العقد لا يُرتب عليه أي حق في استرداد المبالغ المسدَّدة، وتظل جميع الدفعات المتبقية المنصوص عليها في المادة (3.2) مستحقةً بالكامل في مواعيدها.</p>

    <p><span class="clause-num">5.2</span> يحق للوكالة إنهاء العقد فورًا في حال إخلال العميل بأي من التزاماته الجوهرية، مع احتفاظها بكامل المبالغ المسدَّدة واستحقاقها لباقي قيمة العقد حتى تاريخ الإنهاء.</p>

    <hr class="rule">

    <!-- ARTICLE 6 -->
    <div class="article">
      <div class="article-num">Article 06</div>
      <h3 class="article-name">المادة (6): تعليق الخدمات</h3>
    </div>

    <p><span class="clause-num">6.1</span> يحق للوكالة تعليق الخدمات فورًا في حال تأخر العميل عن السداد أو إخلاله بأي من شروط هذا العقد، دون أن يترتب على الوكالة أي مسؤولية قانونية أو مالية.</p>

    <p><span class="clause-num">6.2</span> يستأنف تنفيذ الخدمات فور تسوية العميل لجميع مستحقاته المتأخرة وتأكيد الوكالة استلام السداد.</p>

    <hr class="rule">

    <!-- ARTICLE 7 -->
    <div class="article">
      <div class="article-num">Article 07</div>
      <h3 class="article-name">المادة (7): السرية وحقوق الملكية</h3>
    </div>

    <p><span class="clause-num">7.1</span> تلتزم الوكالة بالمحافظة على سرية جميع المعلومات التجارية والبيانات الخاصة بالعميل خلال تنفيذ هذا العقد وبعد انتهائه.</p>

    <p><span class="clause-num">7.2</span> يحق للوكالة استخدام المحتوى المُنتَج لأغراض عرض أعمالها (Portfolio) على منصاتها، ما لم يُتفق كتابيًا على خلاف ذلك.</p>

    <p><span class="clause-num">7.3</span> لا يشمل هذا العقد أي بند إقصائي (Exclusivity)، وللوكالة الحق في التعاقد مع أي عملاء آخرين في أي قطاع.</p>

    <hr class="rule">

    <!-- ARTICLE 8 -->
    <div class="article">
      <div class="article-num">Article 08</div>
      <h3 class="article-name">المادة (8): ساعات العمل</h3>
    </div>

    <p><span class="clause-num">8.1</span> تسري ساعات العمل الرسمية للوكالة من <span class="bold">الأحد إلى الخميس</span>، من <span class="bold">10:00 صباحًا</span> حتى <span class="bold">6:00 مساءً</span>. لا تُلزَم الوكالة بالرد على المراسلات خارج هذه الأوقات إلا في الحالات الطارئة.</p>

    <hr class="rule">

    <!-- ARTICLE 9 -->
    <div class="article">
      <div class="article-num">Article 09</div>
      <h3 class="article-name">المادة (9): التأخر في التسليم</h3>
    </div>

    <p><span class="clause-num">9.1</span> تلتزم الوكالة بتسليم جميع المنتجات المتفق عليها ضمن مدة العقد المحددة.</p>

    <p><span class="clause-num">9.2</span> في حال تأخر العميل عن توفير المواد أو الموافقات اللازمة، تمنح الوكالة مهلة إضافية <span class="bold">سبعة (7) أيام عمل</span> فقط. بعد انقضائها، يفقد العميل حقه في المطالبة بالمحتوى المتأخر دون أي تعويض أو استرداد.</p>

    <hr class="rule">

    <!-- ARTICLE 10 -->
    <div class="article">
      <div class="article-num">Article 10</div>
      <h3 class="article-name">المادة (10): أيام التصوير والنقل</h3>
    </div>

    <p><span class="clause-num">10.1</span> يتفق الطرفان على عدد أيام التصوير اللازمة لتنفيذ الخدمات، بحد أقصى <span class="bold">ست (6) ساعات</span> لليوم الواحد من وقت الوصول.</p>

    <p><span class="clause-num">10.2</span> يلتزم العميل بتأكيد مواعيد التصوير كتابيًا قبل موعدها بـ <span class="bold">ثلاثة (3) أيام عمل</span> على الأقل.</p>

    <p><span class="clause-num">10.3</span> في حال إلغاء جلسة مؤكدة قبل موعدها بأقل من 3 أيام عمل، أو تأخر العميل أو ممثليه أكثر من <span class="bold">ثلاثين (30) دقيقة</span> دون إشعار مسبق، يُحتسب اليوم كاملاً كيوم تصوير منفَّذ.</p>

    <p><span class="clause-num">10.4</span> تتحمل الوكالة تكاليف التنقل <span class="bold">داخل حدود محافظة القاهرة</span>. التنقل خارج القاهرة على نفقة العميل.</p>

    <p><span class="clause-num">10.5</span> أيام التصوير الإضافية تتجاوز العدد المتفق عليه تُحتسب بـ <span class="bold">ثلاثة آلاف جنيه مصري (3,000 EGP)</span> لليوم، تُسدَّد مقدمًا.</p>

    <p><span class="clause-num">10.6</span> لا تشمل أيام التصوير معدات احترافية أو ممثلين (من خارج شركة تي ار ار) أو مواقع مدفوعة الأجر؛ وتُتحمَّل أي تكاليف من هذا النوع بالكامل من قِبل العميل.</p>

    <hr class="rule">

    <!-- ARTICLE 11 -->
    <div class="article">
      <div class="article-num">Article 11</div>
      <h3 class="article-name">المادة (11): القانون المختص والاختصاص القضائي</h3>
    </div>

    <p><span class="clause-num">11.1</span> يخضع هذا العقد وتُفسَّر بنوده وفقًا لأحكام القانون المصري المعمول به.</p>

    <p><span class="clause-num">11.2</span> تختص المحاكم المصرية في محافظة القاهرة بالفصل في أي نزاع ينشأ عن تطبيق أو تفسير هذا العقد.</p>

    <hr class="rule">

    <!-- ARTICLE 12 -->
    <div class="article">
      <div class="article-num">Article 12</div>
      <h3 class="article-name">المادة (12): أحكام عامة</h3>
    </div>

    <p><span class="clause-num">12.1</span> يُشكّل هذا العقد الاتفاقية الكاملة والنهائية بين الطرفين، ويلغي كل ما سبقه من مفاوضات أو مراسلات بشأن موضوعه.</p>
    <p><span class="clause-num">12.2</span> لا تُعدّ أي تعديلات على هذا العقد نافذةً ما لم تكن مكتوبةً وموقَّعةً من كلا الطرفين.</p>
    <p><span class="clause-num">12.3</span> إذا تبيّن أن أيًا من بنود هذا العقد باطل وفقًا للقانون، فإن ذلك لا يمس صحة باقي البنود التي تظل سارية المفعول.</p>

    <hr class="rule">

    <!-- ARTICLE 13 -->
    <div class="article">
      <div class="article-num">Article 13</div>
      <h3 class="article-name">المادة (13): ملخص نطاق الخدمات المعتمدة</h3>
    </div>

    <table>
      <thead>
        <tr>
          <th style="width:36%;">الخدمة</th>
          <th style="width:18%;">الحجم</th>
          <th style="width:46%;">التفاصيل</th>
        </tr>
      </thead>
      <tbody>
        ${servicesTable}
      </tbody>
    </table>

    <p style="font-size:10pt; color:var(--ink-5); font-style:italic; margin-top:6px;">أي إضافات خارج النطاق المذكور أعلاه تستوجب موافقة مكتوبة وملحقًا ماليًا إضافيًا.</p>

    <hr class="rule-strong">

    <!-- PAYMENT SCHEDULE -->
    <div class="article">
      <div class="article-num">Payment Schedule</div>
      <h3 class="article-name">جدول السداد التفصيلي</h3>
    </div>

    <table>
      <thead>
        <tr>
          <th style="width:6%;">#</th>
          <th style="width:36%;">تاريخ الاستحقاق</th>
          <th style="width:22%;">المبلغ (EGP)</th>
          <th style="width:18%;">طريقة الدفع</th>
          <th style="width:18%;">تأكيد الاستلام</th>
        </tr>
      </thead>
      <tbody>
        ${paymentsTableRows}
        <tr class="total">
          <td colspan="2">الإجمالي الكلي للعقد</td>
          <td>${total} EGP</td>
          <td colspan="2"></td>
        </tr>
      </tbody>
    </table>

    <hr class="rule-strong">

    <!-- SIGNATURES -->
    <p class="closing">أقر الطرفان بأنهما اطلعا على جميع بنود هذا العقد وفهماها وقبلاها كاملةً، وأن توقيعيهما أدناه يُمثّلان قبولاً نهائيًا وقانونيًا ملزمًا بكافة شروطه وأحكامه.</p>

    <div class="signatures">
      <div>
        <div class="sig-label">الطرف الأول</div>
        <div class="sig-name">The Reel Recipe</div>
        <div class="sig-line"></div>
        <p class="sig-meta">الاسم والتوقيع والختم</p>
        <p class="sig-meta">التاريخ: <span class="blank"></span></p>
      </div>
      <div>
        <div class="sig-label">الطرف الثاني</div>
        <div class="sig-name">${clientName}</div>
        <div class="sig-line"></div>
        <p class="sig-meta">الاسم: <span class="blank"></span></p>
        <p class="sig-meta">رقم البطاقة: <span class="blank"></span></p>
        <p class="sig-meta">التاريخ: <span class="blank"></span></p>
      </div>
    </div>

    <div class="doc-foot">
      <div class="doc-foot-brand">THE REEL RECIPE</div>
    </div>

  </section>

  <div class="page-sig-strip">
    <div>توقيع الطرف الأول (The Reel Recipe): <span class="sig-line-inline"></span></div>
    <div>توقيع الطرف الثاني (${clientName}): <span class="sig-line-inline"></span></div>
  </div>
  `;
}

// ============= SERVICES UI =============
function renderServices() {
  const list = document.getElementById('servicesList');
  list.innerHTML = state.services.map((s, i) => `
    <div class="service-row" data-index="${i}">
      <div class="service-row-head">
        <div class="service-num">Service ${String(i + 1).padStart(2, '0')}</div>
        <button class="remove-btn" data-action="remove-service" data-index="${i}">Remove</button>
      </div>
      <div class="field">
        <label>Service Name (الاسم)</label>
        <input type="text" class="input-arabic" data-field="name" data-index="${i}" value="${escapeHtml(s.name)}" placeholder="اسم الخدمة">
      </div>
      <div class="field">
        <label>Quantity</label>
        <input type="number" data-field="quantity" data-index="${i}" value="${Number(s.quantity) || 0}" min="0" step="1">
      </div>
      <div class="field">
        <label>Details (التفاصيل)</label>
        <textarea class="input-arabic" data-field="details" data-index="${i}" placeholder="تفاصيل الخدمة">${escapeHtml(s.details)}</textarea>
      </div>
    </div>
  `).join('');
}

// ============= EVENT WIRING =============
function bindForm() {
  function computeMonths() {
    const start = new Date(state.startDate);
    const end = new Date(state.endDate);
    if (!isNaN(start) && !isNaN(end) && end > start)
      return Math.max(1, Math.round((end - start) / (1000 * 60 * 60 * 24 * 30.4375)));
    return state.numberOfMonths;
  }

  function syncField(id, value) {
    const el = document.getElementById(id);
    if (el && document.activeElement !== el) el.value = value;
  }

  // Dates → auto-compute months, payments, total
  ['startDate', 'endDate'].forEach(id => {
    document.getElementById(id).addEventListener('input', e => {
      state[id] = e.target.value;
      const months = computeMonths();
      state.numberOfMonths = months;
      state.numberOfPayments = months;
      state.totalPayment = Math.round((state.paymentPerMonth || 0) * months);
      syncField('numberOfMonths', months);
      syncField('numberOfPayments', months);
      syncField('totalPayment', state.totalPayment);
      update();
    });
  });

  document.getElementById('clientName').addEventListener('input', e => {
    state.clientName = e.target.value;
    update();
  });

  // numberOfMonths (manual) → cascade to payments + total
  document.getElementById('numberOfMonths').addEventListener('input', e => {
    const months = Math.max(1, Number(e.target.value) || 1);
    state.numberOfMonths = months;
    state.numberOfPayments = months;
    state.totalPayment = Math.round((state.paymentPerMonth || 0) * months);
    syncField('numberOfPayments', months);
    syncField('totalPayment', state.totalPayment);
    update();
  });

  // numberOfPayments (manual) → cascade to total
  document.getElementById('numberOfPayments').addEventListener('input', e => {
    const payments = Math.max(1, Number(e.target.value) || 1);
    state.numberOfPayments = payments;
    state.totalPayment = Math.round((state.paymentPerMonth || 0) * payments);
    syncField('totalPayment', state.totalPayment);
    update();
  });

  // paymentPerMonth (manual) → cascade to total
  document.getElementById('paymentPerMonth').addEventListener('input', e => {
    const perMonth = Number(e.target.value) || 0;
    state.paymentPerMonth = perMonth;
    state.totalPayment = Math.round(perMonth * (state.numberOfPayments || 1));
    syncField('totalPayment', state.totalPayment);
    update();
  });

  // totalPayment (manual) → cascade to per-month
  document.getElementById('totalPayment').addEventListener('input', e => {
    const total = Number(e.target.value) || 0;
    state.totalPayment = total;
    state.paymentPerMonth = Math.round(total / (state.numberOfPayments || 1));
    syncField('paymentPerMonth', state.paymentPerMonth);
    update();
  });

  // Add service
  document.getElementById('addServiceBtn').addEventListener('click', () => {
    state.services.push({ name: '', quantity: 1, details: '' });
    renderServices();
    update();
  });

  // Service-row interactions (delegated)
  document.getElementById('servicesList').addEventListener('input', e => {
    const idx = Number(e.target.dataset.index);
    const f = e.target.dataset.field;
    if (Number.isFinite(idx) && f) {
      state.services[idx][f] = (f === 'quantity') ? (Number(e.target.value) || 0) : e.target.value;
      update();
    }
  });

  document.getElementById('servicesList').addEventListener('click', e => {
    if (e.target.dataset.action === 'remove-service') {
      const idx = Number(e.target.dataset.index);
      state.services.splice(idx, 1);
      renderServices();
      update();
    }
  });

  // Reset
  document.getElementById('resetBtn').addEventListener('click', () => {
    if (!confirm('Reset all fields to defaults?')) return;
    Object.assign(state, JSON.parse(JSON.stringify(DEFAULT_STATE)));
    syncFormFromState();
    renderServices();
    update();
  });

  document.getElementById('printBtn').addEventListener('click', () => window.print());

  document.getElementById('downloadPdfBtn').addEventListener('click', () => {
    const el = document.getElementById('docContainer');
    html2pdf().set({
      margin: 0,
      filename: 'contract.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    }).from(el).save();
  });
}

function syncFormFromState() {
  document.getElementById('clientName').value = state.clientName;
  document.getElementById('startDate').value = state.startDate;
  document.getElementById('endDate').value = state.endDate;
  document.getElementById('numberOfMonths').value = state.numberOfMonths;
  document.getElementById('numberOfPayments').value = state.numberOfPayments;
  document.getElementById('totalPayment').value = state.totalPayment;
  document.getElementById('paymentPerMonth').value = state.paymentPerMonth;
}

function update() {
  document.getElementById('docContainer').innerHTML = renderContract();
}

// ============= INIT =============
syncFormFromState();
renderServices();
bindForm();
update();
