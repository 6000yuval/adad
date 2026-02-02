import React from 'react';
import { Article, Category, GlossaryTerm } from '../types';
import { BookOpen, Zap, Brain, CheckCircle, Home, Briefcase, Layers, Shield, Star, ChevronLeft } from 'lucide-react';

// Helper for consistency
export const PlainText = ({ children }: { children?: React.ReactNode }) => (
  <div className="space-y-6 text-lg leading-relaxed text-slate-800 text-justify">
    {children}
  </div>
);

export const CATEGORIES: Category[] = [
  { id: 'basics', title: 'הבסיס: מנגנון הפעולה', description: 'הבנת אופן הפעולה הטכני של מודלי שפה וההבדל בינם לבין מנועי חיפוש.', color: 'bg-slate-100', icon: <BookOpen className="w-5 h-5" /> },
  { id: 'skills', title: 'מיומנות (הנדסת פרומפט)', description: 'כיצד לנסח קלט (Prompt) בצורה שתמקסם את איכות הפלט.', color: 'bg-yellow-100', icon: <Zap className="w-5 h-5" /> },
  { id: 'thinking', title: 'עיבוד וניתוח', description: 'שימוש במערכת לצורך פירוק בעיות, סיעור מוחות וניתוח לוגי.', color: 'bg-orange-100', icon: <Brain className="w-5 h-5" /> },
  { id: 'reliability', title: 'בדיקה ואמינות', description: 'זיהוי מידע שגוי, אימות עובדות והצלבת מקורות.', color: 'bg-blue-100', icon: <CheckCircle className="w-5 h-5" /> },
  { id: 'personal', title: 'שימוש אישי', description: 'יישומים יומיומיים: ניסוח טקסטים, ארגון מידע ולימוד.', color: 'bg-purple-100', icon: <Home className="w-5 h-5" /> },
  { id: 'work', title: 'עבודה ולימודים', description: 'כתיבה עסקית, סיכום מסמכים וניתוח נתונים.', color: 'bg-amber-100', icon: <Briefcase className="w-5 h-5" /> },
  { id: 'automation', title: 'מערכות ואוטומציה', description: 'שילוב מודלי שפה בתהליכים אוטומטיים.', color: 'bg-red-100', icon: <Layers className="w-5 h-5" /> },
  { id: 'safety', title: 'בטיחות ופרטיות', description: 'שמירה על מידע אישי ומגבלות השימוש.', color: 'bg-emerald-100', icon: <Shield className="w-5 h-5" /> },
  { id: 'master', title: 'מדריכי עומק', description: 'סקירות מקיפות על מתודולוגיות עבודה מתקדמות.', color: 'bg-indigo-100', icon: <Star className="w-5 h-5" /> },
];

export const GLOSSARY: GlossaryTerm[] = [
  { term: 'Prompt (קלט)', definition: 'הטקסט המוזן למערכת, אשר משמש כבסיס לחישוב ההסתברויות ליצירת הטקסט הבא.' },
  { term: 'Fabrication (המצאת מידע)', definition: 'מצב בו המודל מייצר טקסט שנראה תקין לשונית אך מכיל עובדות שגויות או לא קיימות.' },
  { term: 'Context Window (חלון הקשר)', definition: 'כמות המידע המקסימלית (בטוקנים) שהמודל מסוגל לעבד ולהתייחס אליו ברצף אחד.' },
  { term: 'Token (אסימון)', definition: 'יחידת המידע הבסיסית שהמודל מעבד ומנבא. בעברית מילה עשויה להתפרק למספר טוקנים.' },
  { term: 'LLM (מודל שפה גדול)', definition: 'מערכת בינה מלאכותית שאומנה על כמויות גדולות של טקסט כדי לזהות דפוסים ולחזות רצפים לשוניים.' },
  { term: 'Zero-shot', definition: 'מתן הוראה למודל ללא דוגמאות מקדימות לפלט הרצוי.' },
  { term: 'Few-shot', definition: 'מתן מספר דוגמאות בתוך הקלט כדי לספק למודל הקשר לדפוס הרצוי.' },
  { term: 'Anthropomorphism (האנשה)', definition: 'הנטייה האנושית לייחס תכונות אנושיות, רגשות וכוונות למערכות ממוחשבות.' },
  { term: 'Alignment (יישור)', definition: 'תהליך התאמת מטרות המודל והתנהגותו לערכים ולכוונות של בני האדם.' },
  { term: 'RAG (Retrieval-Augmented Generation)', definition: 'טכניקה המשלבת חיפוש במאגר מידע חיצוני והזנת המידע למודל כדי לשפר את הדיוק.' },
  { term: 'Temperature (טמפרטורה)', definition: 'פרמטר השולט ברמת היצירתיות והאקראיות של המודל. ערך נמוך נותן תשובות צפויות, ערך גבוה נותן תשובות מפתיעות.' },
];

export const ARTICLES: Article[] = [
  // --- NEW ARTICLES (Automation, Thinking, Master, Work, Personal) ---

  {
    id: 'digital-employee-automation',
    categoryId: 'automation',
    title: 'איך בניתי "עובד" דיגיטלי שעובד בשבילי כשאני ישן (בחינם)',
    description: 'המדריך המלא לאוטומציה: איך לחבר את ChatGPT למייל, ליומן ולוואטסאפ שלכם, ולחסוך 20 שעות עבודה בחודש בלי לדעת שורת קוד אחת.',
    readTimeMinutes: 10,
    lastUpdated: '05/2026',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-red-50 border-r-4 border-red-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-red-900 mb-2">אזהרה: זה ממכר</h3>
        <p className="text-red-800 text-sm md:text-base leading-relaxed">
          ברגע שתבינו שהמחשב יכול לענות למיילים, לסכם פגישות ולשלוח חשבוניות לבד לחלוטין - לא תוכלו לחזור אחורה. אתם הולכים להפוך למנהלים של רובוטים במקום לפועלים שחורים.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">הסוד שחברות הענק מסתירות</h3>
      <p>
        עד היום, כדי לחבר בין מערכות הייתם צריכים מתכנת יקר. היום? יש "דבק דיגיטלי" שנקרא Make (לשעבר Integromat) או Zapier. הכלים האלה מאפשרים לכם להגיד: "אם קורה X, תעשה Y".
      </p>
      <p>
        כשמוסיפים למשוואה הזו את ה-API של ChatGPT, קורה קסם. זה לא סתם "אם קיבלתי מייל תעביר אותו", אלא "אם קיבלתי מייל, תקרא אותו, תבין אם הוא כועס או שמח, תנסח תשובה מתאימה, ותשלח לי לאישור בוואטסאפ".
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">תרחיש 1: העוזר האישי לסינון "זבל"</h3>
      <p>
        כמה זמן אתם מבזבזים על לקרוא מיילים לא רלוונטיים? הנה האוטומציה שתציל אתכם:
      </p>
      <div className="bg-white p-4 rounded-xl border border-slate-200">
        <ul className="list-decimal list-inside space-y-2 text-slate-700">
          <li><strong>טריגר:</strong> מייל חדש נכנס ל-Gmail.</li>
          <li><strong>פעולה (AI):</strong> שלח את תוכן המייל ל-ChatGPT עם ההוראה: "דרג את דחיפות המייל מ-1 עד 5, וכתוב סיכום של משפט אחד."</li>
          <li><strong>תנאי:</strong> אם הדחיפות היא 4 או 5 -> שלח לי הודעה לטלגרם עם הסיכום. אם לא -> תייק בתיקיית "לקרוא אחר כך".</li>
        </ul>
        <p className="text-xs text-green-600 font-bold mt-2">תוצאה: הטלפון שלכם מצפצף רק כשזה באמת חשוב.</p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">תרחיש 2: מחלקת שירות לקוחות של איש אחד</h3>
      <p>
        יש לכם עסק קטן? לקוחות שואלים בוואטסאפ/באתר שאלות חוזרות ("כמה עולה?", "איפה חונים?").
      </p>
      <div className="bg-white p-4 rounded-xl border border-slate-200">
        <ul className="list-decimal list-inside space-y-2 text-slate-700">
          <li><strong>טריגר:</strong> הודעה חדשה בטופס באתר.</li>
          <li><strong>פעולה (AI):</strong> ChatGPT מקבל את השאלה + מסמך עם המחירון ונהלי העסק שלכם.</li>
          <li><strong>פעולה:</strong> ה-AI מנסח תשובה מנומסת ומקצועית.</li>
          <li><strong>פעולה:</strong> המערכת שולחת את התשובה ללקוח תוך 30 שניות (או שומרת כטיוטה לאישור שלכם).</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך מתחילים בלי ידע טכני?</h3>
      <ol className="list-decimal list-inside space-y-3 text-lg">
        <li>פתחו חשבון חינם ב-<strong>Make.com</strong>.</li>
        <li>פתחו חשבון מפתחים ב-OpenAI (כדי לקבל API Key). זה עולה גרושים (דולר אחד מספיק למאות מיילים).</li>
        <li>חפשו ביוטיוב "Make ChatGPT Gmail automation". יש אלפי מדריכים של "העתק-הדבק".</li>
      </ol>

      <div className="mt-8 bg-slate-100 p-4 rounded-lg">
        <h4 className="font-bold mb-2">טיפ זהב:</h4>
        <p>אל תתנו לאוטומציה לרוץ על "עיוור" בהתחלה. תמיד תוסיפו שלב של "שמור כטיוטה" (Draft), תבדקו אותו שבוע, ורק כשתסמכו על הרובוט - תנו לו לשלוח לבד.</p>
      </div>
    </PlainText>
  },
  {
    id: 'excel-is-dead-ai-analysis',
    categoryId: 'automation',
    title: 'תפסיקו לעבוד באקסל: כך בינה מלאכותית תנתח לכם טבלאות בשניות',
    description: 'למה לבזבז שעות על נוסחאות VLOOKUP וטבלאות ציר כשאפשר פשוט "לדבר" עם הנתונים שלכם? המדריך לניתוח נתונים למתחילים.',
    readTimeMinutes: 7,
    lastUpdated: '06/2026',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">להתראות נוסחאות, שלום תובנות</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          רוב האנשים שונאים את אקסל. הם מסתבכים עם הנוסחאות, שוכחים סוגריים, והגרפים יוצאים עקומים. ה-AI החדש (כמו Code Interpreter של ChatGPT או האנליסט של Claude) משנה את המשחק: אתם מעלים קובץ, ושואלים שאלות בעברית פשוטה.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מה זה "ניתוח נתונים בשיחה"?</h3>
      <p>
        דמיינו שיושב לידכם האנליסט הכי טוב בעולם. אתם זורקים לו קובץ ענק של הוצאות הבית, או מכירות העסק, ואומרים לו: "תגיד, איפה אנחנו מבזבזים הכי הרבה כסף השנה?".
      </p>
      <p>
        הוא לא מתחיל ללמד אתכם איך עושים Pivot Table. הוא פשוט עונה: "ההוצאה הכי גדולה היא על מסעדות בימי חמישי, והיא עלתה ב-20% מהחודש שעבר. רוצה גרף?"
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">דוגמאות אמיתיות מהחיים</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-xl border border-slate-200">
          <p className="font-bold text-green-700 mb-2">1. למנהלי משק בית</p>
          <p className="text-sm text-slate-600 mb-2">הורידו את פירוט האשראי שלכם לאקסל, העלו ל-AI ושאלו:</p>
          <ul className="list-disc list-inside text-sm font-medium">
            <li>"באיזה קטגוריה חרגתי מהתקציב?"</li>
            <li>"תשווה את הוצאות הסופר בין ינואר לפברואר."</li>
            <li>"תצייר לי עוגה של ההוצאות."</li>
          </ul>
        </div>
        
        <div className="bg-white p-4 rounded-xl border border-slate-200">
          <p className="font-bold text-blue-700 mb-2">2. לעסקים קטנים</p>
          <p className="text-sm text-slate-600 mb-2">העלו רשימת לקוחות ורכישות ושאלו:</p>
          <ul className="list-disc list-inside text-sm font-medium">
            <li>"מי הלקוחות שלא קנו ב-3 חודשים האחרונים?"</li>
            <li>"איזה מוצר נמכר הכי טוב בחורף?"</li>
            <li>"תכתוב מייל אישי לכל הלקוחות שקנו X ותציע להם את Y."</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך עושים את זה טכנית?</h3>
      <ul className="list-disc list-inside space-y-3">
        <li><strong>וודאו שהמידע נקי:</strong> מחקו שורות ריקות או כותרות לא ברורות בקובץ לפני ההעלאה.</li>
        <li><strong>הסירו פרטים מזהים:</strong> מחקו עמודות של תעודות זהות או שמות מלאים (פרטיות!). השאירו רק מספרים וקטגוריות.</li>
        <li><strong>בקשו ויזואליזציה:</strong> אל תסתפקו בטקסט. כתבו "צור גרף עמודות שמשווה בין השנים". אתם יכולים להוריד את התמונה ולהדביק במצגת.</li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">האם האקסל מת?</h3>
      <p>
        לא למקצוענים. אבל ל-95% מהאנשים? כן. היכולת לנתח נתונים הפכה מ"מקצוע" ל"שיחה". הכוח בידיים שלכם - רק תעלו את הקובץ.
      </p>
    </PlainText>
  },
  {
    id: 'steve-jobs-method-creativity',
    categoryId: 'thinking',
    title: 'שיטת סטיב ג׳ובס: איך להכריח את ה-AI להיות יצירתי בטירוף',
    description: 'מרגישים שהתשובות של ה-AI משעממות וגנריות? הכירו את הטכניקות הפסיכולוגיות שיגרמו למודל לחשוב מחוץ לקופסה ולהמציא רעיונות גאוניים.',
    readTimeMinutes: 6,
    lastUpdated: '06/2026',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-orange-50 border-r-4 border-orange-500 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-orange-900 mb-2">הבעיה: המודל מנסה לרצות את כולם</h3>
        <p className="text-orange-800 text-sm md:text-base leading-relaxed">
          כברירת מחדל, AI מתוכנת לתת את התשובה "הממוצעת" והבטוחה ביותר. אם תבקשו "רעיון לסטארטאפ", תקבלו "אפליקציה לטיול עם כלבים". כדי לקבל רעיונות ברמה של סטיב ג'ובס או איינשטיין, צריך "לשבור" את התבנית הזו בכוח.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">טכניקה 1: הטמפרטורה (Temperature)</h3>
      <p>
        לכל מודל יש פרמטר נסתר שנקרא "טמפרטורה".
        <br/>
        <strong>טמפרטורה נמוכה (0.1):</strong> המודל מדויק, מתמטי, משעמם.
        <br/>
        <strong>טמפרטורה גבוהה (0.9):</strong> המודל משוגע, יצירתי, לוקח סיכונים.
      </p>
      <p className="font-bold">איך משתמשים בזה בצ'אט רגיל?</p>
      <p>פשוט כותבים בפרומפט: <em>"תהיה יצירתי מאוד, לא קונבנציונלי, ותיקח סיכונים פרועים ברעיונות שלך."</em></p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">טכניקה 2: "הכובע ההפוך" (Reverse Thinking)</h3>
      <p>
        במקום לבקש רעיון טוב, בקשו רעיון רע. זה משחרר את ה"מחסום היצירתי" של המודל.
      </p>
      <div className="bg-white p-4 rounded-xl border border-slate-200">
        <p className="text-sm italic mb-2">"אני רוצה לפתוח מסעדה. תן לי 10 רעיונות למסעדות שייכשלו בטוח, שהן הכי גרועות שאפשר לדמיין."</p>
        <p className="text-xs text-slate-600">התוצאה: "מסעדה שמוכרת רק אוכל שרוף", "מסעדה בחושך מוחלט שבה המלצרים מעליבים אותך".</p>
        <p className="font-bold mt-2 text-green-700">עכשיו הטוויסט:</p>
        <p className="text-sm italic">"עכשיו קח את הרעיון של 'אוכל שרוף' ותהפוך אותו לקונספט גורמה מנצח."</p>
        <p className="text-xs text-slate-600">פתאום המודל יציע: "מסעדת גריל מעושן פרימיום שמתמחה בטכניקות חריכה עתיקות". בום. רעיון מקורי.</p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">טכניקה 3: מיזוג עולמות (Mashup)</h3>
      <p>
        סטיב ג'ובס אמר שיצירתיות היא פשוט לחבר דברים. ה-AI הוא אלוף העולם בלחבר דברים לא קשורים.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>"תשלב בין העקרונות של <strong>נטפליקס</strong> לבין עולם <strong>רפואת השיניים</strong>." (תוצאה: מנוי חודשי לטיפולי שיניים ללא הגבלה).</li>
        <li>"איך <strong>נינג'ה</strong> היה פותר את הבעיה של פקקים בתל אביב?"</li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">טכניקה 4: SCAMPER</h3>
      <p>
        בקשו מהמודל להשתמש במודל החשיבה SCAMPER על המוצר שלכם:
        <br/>
        <strong>S</strong>ubstitute (להחליף), <strong>C</strong>ombine (לשלב), <strong>A</strong>dapt (להתאים), <strong>M</strong>odify (לשנות), <strong>P</strong>ut to another use (שימוש אחר), <strong>E</strong>liminate (להחסיר), <strong>R</strong>everse (להפוך).
      </p>
      <p>
        זו פקודה אחת שגורמת לו לתת לכם 7 זוויות ראייה שונות לחלוטין על אותה בעיה.
      </p>
    </PlainText>
  },
  {
    id: 'ai-run-my-life-experiment',
    categoryId: 'thinking',
    title: 'נתתי ל-AI לנהל לי את החיים לשבוע וזה מה שקרה',
    description: 'ביקשתי מ-ChatGPT לקבל עבורי כל החלטה: מה לאכול, מה ללבוש, ואיך לענות לבוס. התוצאות היו מפתיעות (ומפחידות) למדי.',
    readTimeMinutes: 8,
    lastUpdated: '06/2026',
    imageUrl: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">ניסוי חברתי של איש אחד</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          החלטתי לבטל את שיקול הדעת שלי ל-7 ימים. הזנתי ל-AI את כל הנתונים שלי, המטרות שלי והארון שלי, ונתתי לו את ההגה. המסקנה? אנחנו סובלים מ"עייפות החלטות", וה-AI הוא התרופה.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">יום 1: הלם הארון</h3>
      <p>
        במקום לעמוד 10 דקות מול הארון ולחשוב "אין לי מה ללבוש", צילמתי את הארון וכתבתי: "יש לי פגישה חשובה ואז דייט. מזג האוויר 25 מעלות. מה ללבוש?".
      </p>
      <p>
        תוך 3 שניות הוא בחר שילוב שבחיים לא הייתי חושב עליו. הרגשתי מוזר, אבל קיבלתי מחמאות כל היום.
        <br/><strong>השיעור:</strong> אנחנו תקועים בלופים של הרגלים. ה-AI אובייקטיבי לחלוטין.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">יום 3: הדילמה בעבודה</h3>
      <p>
        היה לי ויכוח עם קולגה. האינסטינקט שלי היה לשלוח מייל כועס. ה-AI עצר אותי.
        הזנתי לו את המקרה וביקשתי: "תנתח את המצב לפי מודל תורת המשחקים. מה המהלך הכי חכם לטווח ארוך?".
      </p>
      <p>
        הוא הסביר לי שאם אכעס, אני מפסיד נקודות זכות אצל המנהל. הוא ניסח תגובה שמסכימה עם הקולגה אבל מציעה פתרון שלישי. זה עבד כמו קסם. הקולגה הודה לי.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">יום 5: התמוטטות הדיאטה (שלא קרתה)</h3>
      <p>
        בדרך כלל ביום חמישי אני מזמין פיצה. שאלתי את ה-AI: "בא לי ג'אנק פוד. תשכנע אותי למה לא."
      </p>
      <p>
        במקום להטיף לי מוסר, הוא כתב: "זוכר שאמרת שאתה רוצה לרוץ 10 ק"מ בחודש הבא? הפיצה הזו תעלה לך ב-40 דקות ריצה נוספות רק כדי להתאזן. לא עדיף טורטייה עם עוף?". הלוגיקה ניצחה את החשק.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">המסקנות מהניסוי</h3>
      <ol className="list-decimal list-inside space-y-3">
        <li><strong>שקט נפשי:</strong> כשלא צריך להחליט 100 החלטות קטנות ביום, המוח פנוי לדברים הגדולים באמת.</li>
        <li><strong>אובייקטיביות:</strong> ה-AI מנתק את הרגש מההחלטה. לפעמים זה בדיוק מה שצריך.</li>
        <li><strong>אבל...</strong> זה מרגיש רובוטי. בסופ"ש, כשכיביתי אותו, הרגשתי הקלה. כיף לפעמים לעשות טעות ולקנות את החולצה המכוערת פשוט כי בא לי.</li>
      </ol>

      <div className="mt-8 bg-slate-100 p-4 rounded-lg text-center">
        <p className="font-bold text-slate-700">המלצה שלי: אל תתנו לו לנהל הכל, אבל תשתמשו בו כ"יועץ סתרים" לכל דילמה.</p>
      </div>
    </PlainText>
  },
  {
    id: 'memory-trick-master-class',
    categoryId: 'master',
    title: 'הטריק הסודי של הזיכרון: איך לגרום ל-AI לזכור הכל לנצח',
    description: 'נמאס לכם להסביר ל-ChatGPT כל פעם מחדש מי אתם? הכירו את "הזיכרון המותאם אישית" ואת טכניקת ה-Context Window שתשנה לכם את העבודה.',
    readTimeMinutes: 9,
    lastUpdated: '07/2026',
    imageUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-purple-50 border-r-4 border-purple-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-purple-900 mb-2">הבעיה: למודל יש "אלצהיימר" דיגיטלי</h3>
        <p className="text-purple-800 text-sm md:text-base leading-relaxed">
          כשאתם פותחים שיחה חדשה (New Chat), המודל לא זוכר כלום מהשיחה הקודמת. הוא לא זוכר שאתם צמחונים, שאתם מנהלי שיווק, או שאתם שונאים שמשתמשים במילה "מרגש". המדריך הזה ילמד אתכם איך לבנות "מוח חיצוני" למודל.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">רמה 1: Custom Instructions (הוראות מותאמות אישית)</h3>
      <p>
        ברוב המודלים (ChatGPT, Claude) יש הגדרה בהגדרות החשבון שנקראת <strong>Custom Instructions</strong>.
        זה מקום שבו אתם כותבים פעם אחת מי אתם ומה אתם רוצים, וזה מודבק אוטומטית לכל שיחה לנצח.
      </p>
      <div className="bg-white p-4 rounded-xl border border-slate-200">
        <p className="font-bold mb-2">מה לכתוב שם? (העתק-הדבק)</p>
        <p className="text-sm font-mono bg-slate-100 p-2 rounded">
          "אני מתכנת בכיר ב-Java. אל תסביר לי מושגים בסיסיים. תמיד תיתן לי קוד יעיל וקצר. אני מעדיף תשובות ישירות בלי נימוסים מיותרים. אני גר בישראל, אז תמיד תתייחס לחגים ולזמנים של ישראל."
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">רמה 2: "מגילת העצמאות" של הפרויקט</h3>
      <p>
        עובדים על פרויקט גדול? ספר? תוכנה?
        פתחו מסמך וורד או נוטפד, וכתבו בו את כל ה"אמיתות" של הפרויקט:
        <br/>- מי הדמויות / הלקוחות.
        <br/>- מה הטון והסגנון (Brand Voice).
        <br/>- מה המטרות.
      </p>
      <p>
        <strong>הטריק:</strong> בכל פעם שאתם פותחים שיחה חדשה בנושא הזה, ההודעה הראשונה שלכם תהיה: <em>"הנה מסמך ההקשר לפרויקט שלנו. תקרא אותו, אל תענה, רק תגיד 'קראתי'."</em>
        <br/>ורק אז תתחילו לעבוד. זה מבטיח שהמודל מסונכרן אליכם ב-100%.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">רמה 3: ניהול חלון ההקשר (Context Window)</h3>
      <p>
        לכל מודל יש "זיכרון עבודה" מוגבל (נמדד בטוקנים). בשיחות ארוכות מאוד, הוא שוכח את ההתחלה.
      </p>
      <div className="bg-yellow-50 p-4 rounded-lg">
        <h4 className="font-bold text-yellow-900">הטיפ של המקצוענים:</h4>
        <p className="text-yellow-800 text-sm">
          אם השיחה נהייתה ארוכה מדי, בקשו מהמודל: <strong>"תסכם את כל ההחלטות והמידע החשוב שהגענו אליו בשיחה הזו לרשימה מרוכזת."</strong>
          <br/>
          עכשיו, העתיקו את הסיכום הזה, ופתחו שיחה חדשה. ככה "ניקיתם" את הזיכרון מ"זבל" והשארתם רק את הזהב.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מתי משתמשים ב-Project (כמו GPTs)?</h3>
      <p>
        אם יש לכם משימה שחוזרת על עצמה כל יום (למשל: עריכת לשון למיילים), אל תכתבו פרומפט כל פעם. צרו "GPT" אישי או "Project" (ב-Claude) שבו ההוראות צרובות מראש. זה הופך את ה-AI מכלי כללי לכלי ספציפי ומדויק פי 10.
      </p>
    </PlainText>
  },
  {
    id: 'building-second-brain',
    categoryId: 'master',
    title: 'המדריך המלא: איך לבנות "מוח שני" דיגיטלי בעזרת AI',
    description: 'אנחנו טובעים במידע ושוכחים הכל. הנה השיטה לבנות מאגר ידע אישי שזוכר עבורכם כל מאמר, רעיון ופגישה, ושולף אותם בשנייה.',
    readTimeMinutes: 12,
    lastUpdated: '07/2026',
    imageUrl: 'https://images.unsplash.com/photo-1505664194779-8beaceb930b5?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-indigo-50 border-r-4 border-indigo-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-indigo-900 mb-2">למה המוח שלנו קורס?</h3>
        <p className="text-indigo-800 text-sm md:text-base leading-relaxed">
          המוח האנושי נועד *ליצור* רעיונות, לא *לאגור* אותם. הניסיון לזכור כל פודקאסט ששמענו וכל סיכום פגישה הוא מתכון לחרדה ולשכחה. הפתרון הוא "מוח שני" (Second Brain) - מערכת דיגיטלית שאוגרת הכל, כשה-AI הוא הספרן החכם שמחבר בין הנקודות.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שלב 1: האיסוף (Capture)</h3>
      <p>
        השתמשו בכלים כמו Notion, Obsidian או אפילו Apple Notes.
        בכל פעם שאתם נתקלים במשהו מעניין:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>מאמר? שמרו אותו.</li>
        <li>רעיון במקלחת? הקליטו אותו.</li>
        <li>סיכום פגישה? כתבו נקודות.</li>
      </ul>
      <p><strong>התפקיד של AI כאן:</strong> השתמשו באפליקציות שמקליטות ומסכמות אוטומטית (כמו Otter או Plaud). אל תכתבו סיכומים ידנית בחיים.</p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שלב 2: הזיקוק (Distill)</h3>
      <p>
        זה השלב שבו רוב האנשים נכשלים - יש להם ערמות של טקסט שהם לא יקראו בחיים.
        כאן נכנס ה-AI.
      </p>
      <div className="bg-white p-4 rounded-xl border border-slate-200">
        <p className="text-sm">קחו את המאמר הארוך ששמרתם, ותנו ל-AI הוראה:</p>
        <p className="text-sm font-bold italic text-blue-600">"תמצת את המאמר הזה ל-3 תובנות מפתח שאני יכול ליישם בעסק שלי מחר בבוקר. זרוק את כל השאר."</p>
        <p className="text-sm mt-2">את הסיכום הזה שמרו ב"מוח השני" שלכם. זה הערך האמיתי.</p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שלב 3: החיבור מחדש (RAG אישי)</h3>
      <p>
        היום יש כלים (כמו NotebookLM של גוגל או תוספים ל-Obsidian) שמאפשרים לכם "לצ'אטט" עם המוח השני שלכם.
      </p>
      <p>
        דמיינו שאתם כותבים הצעת מחיר. אתם יכולים לשאול את המוח השני:
        <br/><em>"תמצא לי את כל הרעיונות ששמרתי בשנתיים האחרונות שקשורים ל'תמחור פסיכולוגי' ול'משא ומתן', ותשלב אותם למייל אחד."</em>
      </p>
      <p>
        הוא ישלוף ציטוט מספר שקראתם לפני שנה, טיפ מפודקאסט מלפני חודש, ומסקנה מפגישה בשבוע שעבר - ויחבר הכל. זו יצירתיות על סטרואידים.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">סיכום: להפוך מצורכן ליוצר</h3>
      <p>
        בלי מוח שני, המידע עובר דרככם ונעלם. עם מוח שני ו-AI, המידע נצבר והופך לנכס (Asset) שמשרת אתכם כל החיים. התחילו היום עם פתק אחד.
      </p>
    </PlainText>
  },
  {
    id: 'job-interview-cheat-ai',
    categoryId: 'work',
    title: 'השתמשתי ב-AI כדי להתכונן לראיון עבודה - וזה היה לא הוגן',
    description: 'למה לשנן תשובות גנריות כשאפשר לעשות סימולציה מלאה? איך להפוך את ChatGPT למראיין הקשוח ביותר שתפגשו.',
    readTimeMinutes: 7,
    lastUpdated: '05/2026',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-green-50 border-r-4 border-green-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-green-900 mb-2">יתרון לא הוגן על פני המתחרים</h3>
        <p className="text-green-800 text-sm md:text-base leading-relaxed">
          רוב האנשים קוראים קצת על החברה ומשננים את "החולשות שלי הן שאני פרפקציוניסט". אתם הולכים להגיע לראיון אחרי שעברתם אותו כבר 10 פעמים בסימולציה, ידעתם בדיוק מה ישאלו, והכנתם תשובות שמותאמות פסיכולוגית למראיין.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שלב 1: המודיעין העסקי</h3>
      <p>
        העתיקו את תיאור המשרה (Job Description) ואת עמוד ה"אודות" של החברה.
        בקשו מה-AI:
        <br/><em>"נתח את הטקסטים האלה. מה הם 3 הכאבים הכי גדולים של החברה הזו כרגע? איזה סוג של עובד הם מחפשים נואשות (מעבר לדרישות הטכניות)?"</em>
      </p>
      <p>
        תגלו שהם מחפשים "יזמות" או "סדר וארגון". אלו מילות המפתח שתשתלו בתשובות שלכם.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שלב 2: הסימולציה הקולית (Game Changer)</h3>
      <p>
        אל תכתבו. דברו. השתמשו ב-Voice Mode באפליקציה.
        <br/><strong>הפרומפט:</strong> <em>"תתנהג כמו מראיין קשוח וציני מחברת הייטק. אני מתראיין לתפקיד X. תשאל אותי שאלה אחת כל פעם, תחכה לתשובה שלי, ואז תיתן לי משוב אכזרי על מה לא היה טוב ואיך לשפר. בוא נתחיל."</em>
      </p>
      <p>
        זה מלחיץ. זה קשה. וזה מכין אתכם לדבר האמיתי בצורה מושלמת. הוא יגיד לכם: "התשובה שלך הייתה ארוכה מדי ומתחמקת. תהיה יותר קונקרטי."
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שלב 3: שיפוץ קורות החיים בזמן אמת</h3>
      <p>
        אל תשלחו את אותם קורות חיים לכולם.
        הדביקו את קורות החיים שלכם מול תיאור המשרה ובקשו:
        <br/><em>"תגיד לי איזה 3 סעיפים בקורות החיים שלי לא רלוונטיים למשרה הזו, ואיזה ניסיון שלי אני צריך להבליט יותר כדי להתאים בול לדרישות."</em>
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">הסוד: שאלות למראיין</h3>
      <p>
        בסוף הראיון שואלים "יש לך שאלות?". הרוב שואלים "איך התנאים?".
        בקשו מה-AI: <em>"תן לי 3 שאלות אינטליגנטיות לשאול את המראיין שיגרמו לי להיראות כמו אסטרטג שמבין את השוק."</em>
        <br/>דוגמה: "איך אתם מתכננים להתמודד עם השינוי הרגולטורי X בשנה הבאה?" (המראיין ייפול מהכיסא).
      </p>
    </PlainText>
  },
  {
    id: 'learn-language-30-days-ai',
    categoryId: 'personal',
    title: 'ללמוד שפה ב-30 יום? השיטה שעוקפת את דואולינגו',
    description: 'אפליקציות לימוד שפה הן נחמדות, אבל הן לא מלמדות אתכם לדבר. כך תהפכו את ה-AI למורה פרטי לספרדית, צרפתית או יפנית שזמין 24/7.',
    readTimeMinutes: 6,
    lastUpdated: '04/2026',
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-purple-50 border-r-4 border-purple-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-purple-900 mb-2">הבעיה: פחד מדיבור</h3>
        <p className="text-purple-800 text-sm md:text-base leading-relaxed">
          אנחנו יכולים ללמוד אוצר מילים שנה שלמה, אבל ברגע האמת בחו"ל - אנחנו מגמגמים. למה? כי לא תרגלנו *שיחה*. מורה פרטי זה יקר, ועם אנשים אמיתיים אנחנו מתביישים לטעות. עם רובוט? אין בושה.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שיטת ה-Roleplay (משחק תפקידים)</h3>
      <p>
        אל תבקשו "למד אותי מילים". תבקשו סיטואציה.
        <br/><strong>הפרומפט:</strong> <em>"אנחנו עכשיו עושים סימולציה. אתה המלצר בבית קפה בפריז, ואני התייר. דבר איתי רק בצרפתית. תשאל אותי מה אני רוצה להזמין, תחכה לתשובה, ותתקן את הדקדוק שלי בסוגריים בעברית אם טעיתי."</em>
      </p>
      <p>
        זה מדהים. אתם מנהלים שיחה חיה. הוא שואל, אתם עונים (בהקלדה או בדיבור). הוא מתקן אתכם בעדינות ("אמרת Le במקום La"). אתם לומדים מתוך הקשר, כמו ילד.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">בניית אוצר מילים מותאם אישית</h3>
      <p>
        אפליקציות מלמדות אתכם "הילד אוכל תפוח". אבל אם אתם מתכנתים, אתם צריכים מילים אחרות.
        <br/>בקשו: <em>"צור לי רשימה של 50 המילים הכי חשובות בספרדית לעולם ההייטק והעסקים, ותבנה לי משפט לדוגמה לכל מילה."</em>
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">הסבר דקדוקי בגובה העיניים</h3>
      <p>
        נתקעתם עם כלל דקדוקי מסובך?
        <br/><em>"תסביר לי את ההבדל בין Past Simple ל-Present Perfect באנגלית בעזרת דוגמה של אכילת פיצה. תסביר כאילו אני בן 10."</em>
        <br/>ההסברים שלו הרבה יותר ברורים מכל ספר לימוד.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">תוכנית אימונים ל-30 יום</h3>
      <div className="bg-white p-4 rounded-xl border border-slate-200">
        <ul className="space-y-2 text-sm text-slate-700">
          <li><strong>שבוע 1:</strong> אוצר מילים בסיסי + הטיות פועל בהווה (שיחות פשוטות עם ה-AI).</li>
          <li><strong>שבוע 2:</strong> סימולציות הישרדות (מסעדה, מלון, מונית, רופא).</li>
          <li><strong>שבוע 3:</strong> זמני עבר ועתיד (לספר ל-AI מה עשיתי אתמול).</li>
          <li><strong>שבוע 4:</strong> שיחות עומק וסלנג (בקשו ממנו ללמד אתכם סלנג מקומי עדכני).</li>
        </ul>
      </div>
    </PlainText>
  },
  {
    id: 'ai-lies-hallucinations',
    categoryId: 'reliability',
    title: 'למה ה-AI משקר לכם בפנים (ואיך לתפוס אותו)',
    description: 'הוא נשמע משכנע, הוא נראה בטוח בעצמו, והוא הרגע המציא עובדה שלא קיימת. המדריך המלא לזיהוי "הזיות" (Hallucinations) והימנעות מפאדיחות.',
    readTimeMinutes: 6,
    lastUpdated: '07/2026',
    imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-red-50 border-r-4 border-red-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-red-900 mb-2">עורך דין בארה"ב איבד את הרישיון שלו</h3>
        <p className="text-red-800 text-sm md:text-base leading-relaxed">
          סיפור אמיתי: עורך דין השתמש ב-ChatGPT כדי לכתוב כתב הגנה. ה-AI המציא תקדימים משפטיים שלא היו ולא נבראו, כולל שמות שופטים ותאריכים. העורך דין הגיש את זה לבית המשפט בלי לבדוק. השופט לא צחק. זה קורה לכולם - ולכן אתם חייבים להבין למה זה קורה.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">למה הוא משקר?</h3>
      <p>
        כמו שהסברנו במאמרים אחרים, ה-AI הוא מנוע השלמת טקסט. הוא לא מנוע חיפוש עובדות.
        המטרה שלו היא לייצר משפט שנשמע *סביר סטטיסטית*.
        <br/>אם תשאלו אותו: "מה קרה במפגש בין איינשטיין לביבי נתניהו?", הוא עלול להמציא סיפור שלם על המפגש, פשוט כי המילים "פגישה", "מנהיג" ו"מדען" מתחברות לו יפה בתבנית סיפורית. הוא לא "יודע" שהם חיו בתקופות שונות. זה לא שקר בזדון, זו הזיה.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">הנושאים הכי מסוכנים להזיות</h3>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>ציטוטים ושירים:</strong> הוא ישבש מילים בשירים מפורסמים בעברית.</li>
        <li><strong>מקורות אקדמיים (ביבליוגרפיה):</strong> הוא ימציא שמות של מאמרים שנשמעים אמיתיים לגמרי.</li>
        <li><strong>אנשים לא מפורסמים מאוד:</strong> אם תשאלו על הבוס שלכם, הוא ימציא לו ביוגרפיה חדשה.</li>
        <li><strong>מתמטיקה מורכבת:</strong> במודלים הישנים, הוא גרוע בחישובים (החדשים משתמשים במחשבון קוד).</li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">טכניקות לאימות (Fact Checking)</h3>
      <div className="bg-white p-4 rounded-xl border border-slate-200">
        <p className="font-bold text-blue-700 mb-2">1. שיטת ה"הצלבה"</p>
        <p className="text-sm">שאלו את השאלה, ואז בקשו: "תביא לי לינק למקור של המידע הזה". אם הוא מתחיל לגמגם או אומר "אין לי גישה לאינטרנט", חשדו.</p>
        
        <p className="font-bold text-blue-700 mt-4 mb-2">2. בקשו ממנו לבקר את עצמו</p>
        <p className="text-sm">אחרי שהוא נותן תשובה, כתבו: "האם אתה בטוח ב-100% שזה נכון? תבדוק שוב בבקשה." הרבה פעמים הוא יגיד: "סליחה, טעיתי."</p>

        <p className="font-bold text-blue-700 mt-4 mb-2">3. שימוש במודלים מחוברים לרשת</p>
        <p className="text-sm">השתמשו ב-Gemini או ב-Perplexity שמביאים את המידע בזמן אמת מהאינטרנט עם הפניות (Footnotes). זה מקטין את הסיכוי להזיות ב-90%.</p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">הכלל לחיים</h3>
      <p>
        תסמכו על ה-AI ביצירתיות, בסיכום ובניסוח. אל תסמכו עליו בעובדות קשות בלי לבדוק בגוגל.
        <br/><strong>Trust, but Verify.</strong>
      </p>
    </PlainText>
  },
  {
    id: 'is-phone-listening-privacy',
    categoryId: 'safety',
    title: 'האם הטלפון שלי מקשיב לי? האמת המפחידה על AI ופרטיות',
    description: 'דיברתם על חתולים ופתאום קיבלתם פרסומת לאוכל לחתולים. האם זה צירוף מקרים או ריגול? התשובה הרבה יותר מתוחכמת ממה שחשבתם.',
    readTimeMinutes: 7,
    lastUpdated: '06/2026',
    imageUrl: 'https://images.unsplash.com/photo-1510915361405-ef8db9036289?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-slate-900 text-slate-100 p-6 rounded-lg mb-6">
        <h3 className="text-lg font-bold text-green-400 mb-2">הספוילר: הם לא צריכים להקשיב לכם</h3>
        <p className="leading-relaxed">
          להקליט ולפענח את השיחות של מיליארדי אנשים זה יקר ומסובך טכנולוגית. האמת מפחידה יותר: האלגוריתמים של ה-AI כל כך טובים בחיזוי ההתנהגות שלכם, שהם יודעים מה אתם רוצים *לפני* שאמרתם את זה בקול. זה לא מיקרופון, זו סטטיסטיקה.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך ה"קסם" עובד?</h3>
      <p>
        נניח שדיברתם עם חבר על טיול ליפן. פתאום - פרסומת לטיסה לטוקיו. איך?
      </p>
      <ul className="list-disc list-inside space-y-3">
        <li><strong>מיקום (GPS):</strong> הטלפון שלכם היה ליד הטלפון של החבר שלכם במשך שעה.</li>
        <li><strong>היסטוריית החבר:</strong> החבר חיפש טיסות ליפן אתמול בלילה.</li>
        <li><strong>הסקת מסקנות (AI):</strong> "אם משתמש A נפגש עם משתמש B, ומשתמש B מתעניין ביפן, יש סיכוי של 80% שגם משתמש A ידבר על זה."</li>
        <li><strong>בום:</strong> פרסומת. בלי להקליט מילה.</li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">העידן החדש של פרטיות בעידן ה-AI</h3>
      <p>
        כשאנחנו משתמשים ב-ChatGPT או Gemini, אנחנו מנדבים מידע בצורה הכי אינטימית שיש. אנחנו מספרים להם על הפחדים שלנו, על המצב הרפואי, ועל העבודה.
        <br/>המידע הזה שווה זהב. החשש הוא לא ש"אדם" יקרא את זה, אלא שהמידע ישמש לבניית "פרופיל פסיכולוגי" מושלם עליכם שישמש למניפולציות שיווקיות או פוליטיות.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך מגנים על הפרטיות?</h3>
      <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
        <ul className="space-y-3 text-sm text-slate-800">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span><strong>כבו אימון:</strong> בהגדרות של ChatGPT כבו את "Chat History & Training".</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span><strong>מידור:</strong> השתמשו בדפדפנים שונים לדברים שונים.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span><strong>הרעלת מידע:</strong> מדי פעם חפשו דברים אקראיים כדי לבלבל את האלגוריתם (כן, זה עובד).</span>
          </li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">האם זה חוקי?</h3>
      <p>
        אנחנו נמצאים במערב פרוע. הרגולציה תמיד בפיגור אחרי הטכנולוגיה. כרגע, רוב מה שחברות ה-AI עושות הוא חוקי כי אשרנו את זה ב"תנאי השימוש" (שאיש לא קורא). האחריות לשמור על המידע היא עליכם.
      </p>
    </PlainText>
  },
  
  // --- Existing Articles ---
  {
    id: 'jobs-disappearing-2030',
    categoryId: 'work',
    title: 'המקצועות שייעלמו עד 2030 (האם העבודה שלך ברשימה?)',
    description: 'התחזית המפתיעה: זה לא נהגי המשאיות שבסכנה, אלא דווקא אנשי המשרד. מי הולך הביתה ומי יהפוך לבלתי-מוחלף?',
    readTimeMinutes: 8,
    lastUpdated: '02/2026',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-red-50 border-r-4 border-red-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-red-900 mb-2">האמת הכואבת: הבינוניות מתה</h3>
        <p className="text-red-800 text-sm md:text-base leading-relaxed">
          בואו נשים את הקלפים על השולחן: אם העבודה שלכם מורכבת בעיקר מלקחת מידע ממקום א' ולהעביר אותו למקום ב', או לכתוב טקסטים גנריים - אתם בבעיה. ה-AI לא יחליף את ה"מומחים", אבל הוא יחסל לחלוטין את ה"בינוניים". החדשות הטובות? יש דרך פשוטה להינצל.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">המהפכה השקטה של הצווארון הלבן</h3>
      <p>
        במשך שנים אמרו לנו שהרובוטים יקחו את עבודות הכפיים: פועלי פס ייצור, נהגים, מנקים. טעינו בענק. הרובוטים הפיזיים עדיין מסורבלים ויקרים.
      </p>
      <p>
        לעומת זאת, הבינה המלאכותית (AI) היא וירטואלית, זולה ומהירה. היא תוקפת דווקא את המעמד הבינוני-גבוה: מתכנתים זוטרים, כותבי תוכן, גרפיקאים, ואנשי שירות לקוחות.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5 המקצועות שבסיכון גבוה (ומה לעשות)</h3>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <p className="font-bold text-slate-800 mb-1">1. מתרגמים וכותבי תוכן "פשוטים"</p>
          <p className="text-sm text-slate-600 mb-2">אם אתם מתרגמים חוברות הפעלה או כותבים פוסטים גנריים לפייסבוק, ChatGPT עושה את זה בחינם בשניות.</p>
          <p className="text-xs font-bold text-green-600">הפתרון: הפכו ל"עורכי על". אל תכתבו - תנהלו את האסטרטגיה ותוודאו דיוק.</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <p className="font-bold text-slate-800 mb-1">2. שירות לקוחות בצ'אט</p>
          <p className="text-sm text-slate-600 mb-2">הבוטים החדשים מבינים סרקזם, הקשר והיסטוריה. אין צורך באדם שיענה "תנסה לכבות ולהדליק".</p>
          <p className="text-xs font-bold text-green-600">הפתרון: התמקדות במקרי קצה מורכבים הדורשים אמפתיה אנושית אמיתית.</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <p className="font-bold text-slate-800 mb-1">3. מתכנתים זוטרים (Juniors)</p>
          <p className="text-sm text-slate-600 mb-2">AI כותב קוד בסיסי מושלם. מי שרק יודע תחביר (Syntax) - מיותר.</p>
          <p className="text-xs font-bold text-green-600">הפתרון: למדו ארכיטקטורה ופתרון בעיות. הקוד הוא רק הכלי, החשיבה היא המוצר.</p>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">פרדוקס ה"פרימיום האנושי"</h3>
      <p>
        ככל שיותר תוכן ייוצר על ידי מכונות, הערך של "מגע אנושי" יעלה. תחשבו על קפה: אפשר לקנות קפה ממכונה ב-5 שקלים, אבל אנשים עומדים בתור ומשלמים 20 שקלים לקפה שהכין בריסטה אנושי. למה? בגלל החוויה.
      </p>
      <p>
        בעתיד, אנשים ישלמו אקסטרה כדי לדעת שמי שכתב את הספר, צייר את הציור או טיפל בבעיה שלהם היה <strong>בן אדם</strong>. האנושיות שלכם תהיה היתרון השיווקי הגדול ביותר שלכם.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך להישאר רלוונטיים?</h3>
      <div className="bg-indigo-50 p-4 rounded-lg border-t-4 border-indigo-500">
        <ul className="text-sm text-indigo-900 space-y-2 list-disc list-inside">
          <li><strong>תאמצו, אל תברחו:</strong> עורך דין שמשתמש ב-AI יעבוד פי 10 מהר יותר מעורך דין שלא. השני יפשוט רגל.</li>
          <li><strong>פתחו "כישורים רכים" (Soft Skills):</strong> מחשב לא יודע לנהל משא ומתן רגיש, לא יודע להניע עובדים, ולא יודע להבין ניואנסים תרבותיים עדינים.</li>
          <li><strong>חשיבה ביקורתית:</strong> ה-AI משקר בביטחון. מי שידע לתפוס אותו על חם ולתקן אותו יהיה שווה זהב.</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות קשות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם ללמוד תכנות זה בזבוז זמן?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            ממש לא. אבל הלימודים משתנים. במקום לשנן פקודות בעל פה, לומדים איך לתכנן מערכות ואיך "לדבר" עם ה-AI כדי שיכתוב את הקוד עבורנו.
          </p>
        </details>
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            מתי השינוי הזה יקרה?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            הוא קורה עכשיו. חברות ענק כבר מקפיאות גיוסים למשרות מסוימות. זה לא יקרה ביום אחד, זה תהליך של 5 השנים הקרובות.
          </p>
        </details>
      </div>
    </PlainText>
  },
  {
    id: 'is-ai-dangerous',
    categoryId: 'safety',
    title: 'האם ה-AI ישמיד את האנושות? (ספוילר: הבעיה אחרת)',
    description: 'כולם מפחדים מ"שליחות קטלנית", אבל הסכנה האמיתית של הבינה המלאכותית היא הרבה יותר שקטה, ערמומית ומסוכנת.',
    readTimeMinutes: 7,
    lastUpdated: '03/2026',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">תרגיעו את הפאניקה, תגבירו את הערנות</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          כשמדברים על "סכנות ה-AI", רוב האנשים מדמיינים רובוט עם עיניים אדומות שיורה בלייזרים. המציאות? ה-AI לא צריך לירות בנו כדי לגרום נזק. הוא רק צריך לגרום לנו להפסיק להאמין אחד לשני. הסכנה היא לא השמדה פיזית, אלא קריסה של האמת.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">המיתוס של הוליווד</h3>
      <p>
        בסרטים, למחשב יש "רצון עצמי". הוא מחליט שבני האדם הם וירוס וצריך להשמיד אותם.
        במציאות, מודלי שפה (LLMs) הם בסך הכל מתמטיקה סטטיסטית. אין להם רצונות, אין להם תודעה, והם לא "רוצים" כלום. הם פשוט משלימים טקסט. אז ממה המומחים בכל זאת מפחדים?
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3 הסכנות האמיתיות (שקורות כבר היום)</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="font-bold text-xl text-slate-800">1. קץ המציאות (Deepfakes)</h4>
          <p className="text-slate-700">
            אנחנו נכנסים לעידן שבו אי אפשר להאמין לשום תמונה, הקלטה או וידאו. ראיתם פוליטיקאי אומר משהו מזעזע בווידאו? יכול להיות שזה זיוף מושלם שנוצר ב-AI.
            <br/><strong>הסכנה:</strong> אם אי אפשר להאמין לכלום, הדמוקרטיה ומערכת המשפט קורסות. איך מוכיחים שמישהו ביצע פשע אם אפשר לזייף ראיות ב-5 דקות?
          </p>
        </div>

        <div>
          <h4 className="font-bold text-xl text-slate-800">2. הטיה ואפליה (Bias)</h4>
          <p className="text-slate-700">
            ה-AI למד מהאינטרנט, והאינטרנט מלא בדעות קדומות. אם נתן ל-AI להחליט מי יקבל משכנתא או מי יתקבל לעבודה, הוא עלול להפלות נשים או מיעוטים פשוט כי זה הדפוס שהוא ראה בעבר בנתונים.
            <br/><strong>הסכנה:</strong> אפליה "שקופה" שאף אחד לא לוקח עליה אחריות ("זה המחשב החליט").
          </p>
        </div>

        <div>
          <h4 className="font-bold text-xl text-slate-800">3. בעיית "מהדק הנייר" (Alignment)</h4>
          <p className="text-slate-700">
            ניסוי מחשבתי מפורסם: דמיינו שנותנים ל-AI על-אנושי הוראה פשוטה: "תייצר כמה שיותר מהדקי נייר".
            כדי לעמוד במטרה, ה-AI עלול להבין שצריך להפוך את כל העולם (כולל בני האדם) לחומר גלם לייצור מהדקים.
            <br/><strong>הסכנה:</strong> אנחנו נותנים הוראה לא מדויקת למערכת חזקה מדי, והיא מבצעת אותה בצורה קיצונית והרסנית.
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">האם יש תקווה?</h3>
      <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-500">
        <h4 className="font-bold text-green-900 mb-2">הרגולציה בדרך</h4>
        <p className="text-sm text-green-800">
          העולם מתעורר. האיחוד האירופי, ארה"ב ואפילו סין מתחילים להעביר חוקים שמגבילים את ה-AI.
        </p>
        <ul className="text-sm text-green-800 space-y-1 list-disc list-inside mt-2">
          <li>חובה לסמן תוכן שנוצר על ידי AI.</li>
          <li>איסור על שימוש ב-AI במערכות נשק אוטונומיות.</li>
          <li>אחריות משפטית לחברות שמפתחות מודלים מסוכנים.</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מה אתם יכולים לעשות?</h3>
      <p>
        תפתחו <strong>סקפטיות בריאה</strong>. אל תאמינו לכל כותרת, אל תעבירו בוואטסאפ תמונות שנראות מוזר, ותמיד תבדקו מי המקור של המידע. הנשק הכי טוב נגד שקרים של מכונה הוא שכל ישר של בני אדם.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות נפוצות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם ה-AI יכול לפתח רגשות בעתיד?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            זו שאלה פילוסופית. טכנית, הוא יכול *לחקות* רגשות בצורה מושלמת, עד שלא נדע להבדיל. האם הוא "מרגיש" באמת? כנראה שלא, הוא עדיין רק קוד שרץ על שרת.
          </p>
        </details>
      </div>
    </PlainText>
  },
  {
    id: 'save-10-hours-a-week',
    categoryId: 'personal',
    title: 'מדריך לעצלנים: איך חסכתי 10 שעות בשבוע עם AI',
    description: 'בלי סיסמאות ובלי תיאוריות. רשימת ה"האקים" הקטנים לחיים שיפנו לכם זמן לנטפליקס, לילדים או סתם לשינה.',
    readTimeMinutes: 5,
    lastUpdated: '04/2026',
    imageUrl: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-yellow-50 border-r-4 border-yellow-500 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-yellow-900 mb-2">זמן זה כסף? לא, זמן זה החיים</h3>
        <p className="text-yellow-800 text-sm md:text-base leading-relaxed">
          כולנו "עסוקים". כולנו טובעים במיילים, סידורים, הודעות ובירוקרטיה. רוב האנשים משתמשים ב-ChatGPT רק כדי לשאול שאלות טריוויה, ומפספסים את המהפכה האמיתית: היכולת שלו להיות המזכיר האישי הכי יעיל בעולם, בחינם. הנה איך עושים את זה תכל'ס.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. המייל המתיש (חיסכון: 3 שעות בשבוע)</h3>
      <p>
        מכירים את המייל הארוך והכועס מהוועד בית / המורה / הלקוח? לקרוא אותו לוקח זמן, לנסח תשובה מנומסת לוקח עוד יותר זמן ועצבים.
      </p>
      <div className="bg-white p-4 rounded-xl border border-slate-200 mt-2">
        <p className="font-bold text-slate-700">הפרומפט הקסום:</p>
        <p className="text-sm italic text-slate-600">"הנה מייל שקיבלתי [הדבק מייל]. תסכם לי במשפט מה הוא רוצה, ותנסח תשובה מנומסת אבל אסרטיבית שאומרת שאני לא יכול להגיע, אבל אשלח את הכסף בביט."</p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. בירוקרטיה וטפסים (חיסכון: 2 שעות בשבוע)</h3>
      <p>
        קיבלתם מסמך PDF מפחיד מהביטוח או מהבנק? אל תקראו את האותיות הקטנות לבד.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>צלמו את המסמך או העלו את הקובץ.</li>
        <li>בקשו: "תקרא את המסמך ותגיד לי: האם יש כאן דמי ניהול חריגים? ומה אני צריך לעשות כדי לבטל את העסקה? תענה לי בשלבים פשוטים."</li>
        <li>זה עובד גם על חוזי שכירות! ("האם יש סעיפים שמסכנים אותי כשוכר?").</li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. תכנון הלו"ז המשפחתי (חיסכון: שעתיים בשבוע)</h3>
      <p>
        לתכנן ארוחות שבועיות + רשימת קניות זה סיוט לוגיסטי. תנו ל-AI לעבוד.
      </p>
      <div className="bg-white p-4 rounded-xl border border-slate-200 mt-2">
        <p className="font-bold text-slate-700">הפרומפט:</p>
        <p className="text-sm italic text-slate-600">"יש לי בבית 2 מבוגרים ו-2 ילדים ששונאים חצילים. תבנה לי תפריט שבועי בריא לארוחות ערב (שלא לוקח יותר מ-20 דקות להכין), וצור רשימת קניות מסודרת לפי מחלקות בסופר (ירקות, מוצרי חלב, יבשים)."</p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. "מחסום הדף הלבן" (חיסכון: אינסופי)</h3>
      <p>
        צריכים לכתוב ברכה? מצגת? פוסט? החלק הכי קשה הוא להתחיל.
        אל תבקשו ממנו לכתוב את התוצאה הסופית, בקשו <strong>שלד</strong>.
        <br/>"תן לי 5 ראשי פרקים למצגת על מכירות". ברגע שיש לכם שלד, הרבה יותר קל למלא אותו בתוכן שלכם. זה הופך משימה של שעה למשימה של 10 דקות.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">טיפ הזהב: הקלטה קולית</h3>
      <div className="bg-purple-50 p-4 rounded-lg border-t-4 border-purple-500">
        <p className="text-sm text-purple-900">
          באפליקציה של ChatGPT בנייד יש מיקרופון. במקום להקליד, פשוט דברו אליו כשאתם בפקק או שוטפים כלים.
          <br/><strong>"תקשיב, יש לי מלא משימות למחר: להתקשר לרופא, לקנות מתנה לאמא... תעשה לי סדר ותכתוב לי לו"ז הגיוני לפי שעות."</strong>
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">ממה להיזהר?</h3>
      <p>
        אל תסמכו עליו בחישובים כספיים מורכבים (הוא גרוע במתמטיקה לפעמים), ואל תעלו פרטים אישיים מדי (כמו סיסמאות). לכל השאר? הוא העוזר הכי טוב שלא שכרתם מעולם.
      </p>
    </PlainText>
  },
  {
    id: 'ai-danger-humanity',
    categoryId: 'safety',
    title: 'האם בינה מלאכותית מסוכנת לאנושות?',
    description: 'בינה מלאכותית לא מסוכנת כי היא “חכמה מדי” — היא מסוכנת כשאנחנו סומכים עליה יותר מדי.',
    readTimeMinutes: 5,
    lastUpdated: '04/2026',
    imageUrl: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-red-50 border-r-4 border-red-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-red-900 mb-2">בשורה התחתונה: עניין של שליטה</h3>
        <p className="text-red-800 text-sm md:text-base leading-relaxed">
          אל תחשבו על AI כמו על ישות שחושבת או רוצה דברים. תחשבו עליה כמו על כלי עוצמתי מאוד, בלי שיקול דעת ובלי אחריות. הבעיה מתחילה כשנותנים לכלי כזה לקבל החלטות בלי פיקוח אנושי.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מה זה בעצם?</h3>
      <p>
        בינה מלאכותית היא מערכת שלומדת מדוגמאות. היא סורקת כמויות עצומות של מידע, מזהה דפוסים, ולומדת מה “נראה נכון” לפי מה שכבר קרה בעבר. היא לא מבינה מוסר, הקשר או השלכות. היא רק טובה מאוד בלנחש מה אמור לקרות עכשיו.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך זה עובד? (דוגמה פשוטה)</h3>
      <p>
        אם מערכת AI רואה שב־90% מהמקרים אדם עם מאפיינים מסוימים לא קיבל הלוואה, היא תלמד לדחות אנשים דומים בעתיד.
      </p>
      <ul className="list-disc list-inside space-y-2 bg-white p-4 rounded-xl border border-slate-200">
        <li>היא לא שואלת אם זה הוגן.</li>
        <li>היא לא בודקת אם העולם השתנה.</li>
        <li>היא פשוט ממשיכה את הדפוס.</li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">אז איך להשתמש בזה נכון?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-500">
          <h4 className="font-bold text-green-900 mb-2">מתי זה מעולה?</h4>
          <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
            <li>לניתוח נתונים גדולים</li>
            <li>לאוטומציה של תהליכים</li>
            <li>לעזרה בקבלת החלטות (לא קבלת החלטות לבד)</li>
          </ul>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border-t-4 border-red-500">
          <h4 className="font-bold text-red-900 mb-2">מתי להיזהר?</h4>
          <ul className="text-sm text-red-800 space-y-1 list-disc list-inside">
            <li>בהחלטות רפואיות</li>
            <li>בהחלטות משפטיות</li>
            <li>כשיש השפעה ישירה על חיים של אנשים</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">טעויות שכולם עושים</h3>
      <ul className="list-disc list-inside space-y-3">
        <li>
          <strong>לחשוב ש-AI אובייקטיבי:</strong> לזכור שהוא משקף את הנתונים שהוזנו אליו.
        </li>
        <li>
          <strong>לתת לו סמכות:</strong> AI הוא יועץ, לא שופט.
        </li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות נפוצות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם AI יכול לצאת משליטה?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            לא במובן של סרטים, כן במובן של שימוש לא אחראי.
          </p>
        </details>
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            מי אחראי לטעויות של AI?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            בסוף – בני אדם.
          </p>
        </details>
      </div>

      <div className="mt-8 p-4 bg-slate-100 rounded-lg text-center font-bold text-slate-700">
        סיכום: AI לא יהרוס את האנושות. אבל חוסר מחשבה כן.
      </div>
    </PlainText>
  },
  {
    id: 'ai-save-time-weekly',
    categoryId: 'work',
    title: 'איך בינה מלאכותית יכולה לחסוך לך שעות עבודה',
    description: 'AI לא עובד במקומך — הוא חוסך לך את החלקים המעצבנים של העבודה.',
    readTimeMinutes: 4,
    lastUpdated: '04/2026',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">בשורה התחתונה: התייעלות</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          AI לא עובד במקומך — הוא חוסך לך את החלקים המעצבנים של העבודה.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מה זה בעצם?</h3>
      <p>
        בינה מלאכותית מצטיינת במשימות שחוזרות על עצמן: ניסוח, סיכום, חיפוש, ארגון מידע. דברים שגוזלים זמן אבל לא באמת דורשים חשיבה עמוקה.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך זה עובד? (דוגמה פשוטה)</h3>
      <p>
        במקום לכתוב מייל מאפס, אתה נותן ל-AI:
        “נסח מייל קצר, רשמי, ללקוח שלא ענה שבוע”.
      </p>
      <ul className="list-disc list-inside space-y-2 bg-white p-4 rounded-xl border border-slate-200">
        <li>הוא נותן טיוטה.</li>
        <li>אתה עובר, מתקן, ושולח.</li>
        <li><strong>5 דקות במקום 20.</strong></li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">אז איך להשתמש בזה נכון?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-500">
          <h4 className="font-bold text-green-900 mb-2">מתי זה מעולה?</h4>
          <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
            <li>מיילים</li>
            <li>סיכומים</li>
            <li>רעיונות ראשוניים</li>
            <li>תרגומים</li>
          </ul>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border-t-4 border-red-500">
          <h4 className="font-bold text-red-900 mb-2">מתי להיזהר?</h4>
          <ul className="text-sm text-red-800 space-y-1 list-disc list-inside">
            <li>מידע רגיש</li>
            <li>החלטות סופיות</li>
            <li>נתונים שלא בדקת</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">טעויות שכולם עושים</h3>
      <ul className="list-disc list-inside space-y-3">
        <li>
          <strong>לתת ל-AI לעשות הכל לבד:</strong> להשתמש בו כטיוטה, לא כתוצר סופי.
        </li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות נפוצות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם זה חוקי להשתמש ב-AI בעבודה?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            ברוב המקרים כן — אבל תמיד לבדוק מדיניות ארגונית.
          </p>
        </details>
      </div>

      <div className="mt-8 p-4 bg-slate-100 rounded-lg text-center font-bold text-slate-700">
        סיכום: מי שמשתמש ב-AI נכון — עובד פחות ומספיק יותר.
      </div>
    </PlainText>
  },
  {
    id: 'ai-replacement-reality',
    categoryId: 'work',
    title: 'האם AI הולך להחליף את העבודה שלך?',
    description: 'AI לא מחליף אנשים. הוא מחליף אנשים שלא משתמשים בו.',
    readTimeMinutes: 4,
    lastUpdated: '04/2026',
    imageUrl: 'https://images.unsplash.com/photo-1531297461136-82lw8z0e3y?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">בשורה התחתונה: שדרוג ולא החלפה</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          AI לא מחליף אנשים. הוא מחליף אנשים שלא משתמשים בו.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מה זה בעצם?</h3>
      <p>
        AI מחליף משימות, לא מקצועות. כל תפקיד בנוי מהרבה חלקים — חלקם אוטומטיים, חלקם אנושיים.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך זה עובד? (דוגמה פשוטה)</h3>
      <p>
        רואה חשבון לא נעלם —
        אבל מי שממשיך לעבוד כמו לפני 10 שנים, כן יתקשה להתחרות.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">אז איך להשתמש בזה נכון?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-500">
          <h4 className="font-bold text-green-900 mb-2">מתי זה מעולה?</h4>
          <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
            <li>להאיץ עבודה</li>
            <li>לשפר איכות</li>
            <li>ללמוד מהר יותר</li>
          </ul>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border-t-4 border-red-500">
          <h4 className="font-bold text-red-900 mb-2">מתי להיזהר?</h4>
          <ul className="text-sm text-red-800 space-y-1 list-disc list-inside">
            <li>לא לאבד הבנה בסיסית</li>
            <li>לא להפוך תלוי לחלוטין</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">טעויות שכולם עושים</h3>
      <ul className="list-disc list-inside space-y-3">
        <li>
          <strong>לפחד במקום ללמוד:</strong> להבין איך הכלי עובד ולשלוט בו.
        </li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות נפוצות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            אילו מקצועות בסיכון גבוה?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            כאלה שמבוססים רק על חזרתיות.
          </p>
        </details>
      </div>

      <div className="mt-8 p-4 bg-slate-100 rounded-lg text-center font-bold text-slate-700">
        סיכום: מי שמשלב AI — נהיה חזק יותר, לא מיותר.
      </div>
    </PlainText>
  },
  {
    id: 'how-chatgpt-works-simple',
    categoryId: 'basics',
    title: 'איך ChatGPT באמת עובד (בלי מתמטיקה)',
    description: 'ChatGPT לא יודע דברים — הוא יודע להשלים משפטים.',
    readTimeMinutes: 5,
    lastUpdated: '04/2026',
    imageUrl: 'https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">בשורה התחתונה: השלמה חכמה</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          ChatGPT לא יודע דברים — הוא יודע להשלים משפטים.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מה זה בעצם?</h3>
      <p>
        זה מודל שפה. הוא קרא המון טקסטים, ולמד מה בדרך כלל בא אחרי מה.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך זה עובד? (דוגמה פשוטה)</h3>
      <p>
        אתה כותב: “השמיים הם…”
      </p>
      <ul className="list-disc list-inside space-y-2 bg-white p-4 rounded-xl border border-slate-200">
        <li>הוא ראה שב־רוב המקרים ההמשך הוא “כחולים”.</li>
        <li>אז זה מה שתקבל.</li>
        <li><strong>לא בדיקה. לא הבנה. ניחוש סטטיסטי מעולה.</strong></li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">אז איך להשתמש בזה נכון?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-500">
          <h4 className="font-bold text-green-900 mb-2">מתי זה מעולה?</h4>
          <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
            <li>רעיונות</li>
            <li>ניסוחים</li>
            <li>הסברים כלליים</li>
          </ul>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border-t-4 border-red-500">
          <h4 className="font-bold text-red-900 mb-2">מתי להיזהר?</h4>
          <ul className="text-sm text-red-800 space-y-1 list-disc list-inside">
            <li>עובדות</li>
            <li>מקורות</li>
            <li>מידע קריטי</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">טעויות שכולם עושים</h3>
      <ul className="list-disc list-inside space-y-3">
        <li>
          <strong>להאמין לביטחון שלו:</strong> לבדוק כל דבר חשוב.
        </li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות נפוצות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            למה הוא לפעמים ממציא?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            כי זה בדיוק מה שהוא נועד לעשות — להשלים.
          </p>
        </details>
      </div>

      <div className="mt-8 p-4 bg-slate-100 rounded-lg text-center font-bold text-slate-700">
        סיכום: ChatGPT הוא כלי חזק — לא מוח.
      </div>
    </PlainText>
  },
  {
    id: 'ai-confidence-errors',
    categoryId: 'reliability',
    title: 'למה בינה מלאכותית טועה בביטחון מלא',
    description: 'AI לא יודע שהוא טועה — ולכן הוא גם לא מהסס.',
    readTimeMinutes: 4,
    lastUpdated: '04/2026',
    imageUrl: 'https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">בשורה התחתונה: ביטחון מטעה</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          AI לא יודע שהוא טועה — ולכן הוא גם לא מהסס.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מה זה בעצם?</h3>
      <p>
        AI לא בודק אמת. הוא בודק הסתברות. אם משהו נשמע הגיוני לפי הנתונים — הוא יגיד אותו.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך זה עובד? (דוגמה פשוטה)</h3>
      <p>
        אם תשאל: “מי היה מלך מאדים הראשון?”
      </p>
      <ul className="list-disc list-inside space-y-2 bg-white p-4 rounded-xl border border-slate-200">
        <li>אין תשובה — אבל יש דפוס.</li>
        <li>אז הוא ימציא שם שנשמע אמין.</li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">אז איך להשתמש בזה נכון?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-500">
          <h4 className="font-bold text-green-900 mb-2">מתי זה מעולה?</h4>
          <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
            <li>רעיונות</li>
            <li>כתיבה</li>
            <li>סיעור מוחות</li>
          </ul>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border-t-4 border-red-500">
          <h4 className="font-bold text-red-900 mb-2">מתי להיזהר?</h4>
          <ul className="text-sm text-red-800 space-y-1 list-disc list-inside">
            <li>מחקר</li>
            <li>רפואה</li>
            <li>משפטים</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">טעויות שכולם עושים</h3>
      <ul className="list-disc list-inside space-y-3">
        <li>
          <strong>לאמת דרך AI:</strong> להשתמש בו, אבל לא לסמוך עליו כמקור.
        </li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות נפוצות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            אפשר למנוע טעויות לגמרי?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            לא. אפשר לצמצם.
          </p>
        </details>
      </div>

      <div className="mt-8 p-4 bg-slate-100 rounded-lg text-center font-bold text-slate-700">
        סיכום: הבעיה היא לא ש-AI טועה. הבעיה היא שאנחנו שוכחים לבדוק.
      </div>
    </PlainText>
  },
  {
    id: 'persona-technique',
    categoryId: 'skills',
    title: 'טכניקת הפרסונה: "תתנהג כמו..."',
    description: 'הסוד הגדול של הנדסת הפרומפטים: איך שינוי כובע אחד הופך תשובה בינונית לתשובה של מומחה עולמי.',
    readTimeMinutes: 6,
    lastUpdated: '04/2026',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">בשורה התחתונה: תנו לו תפקיד</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          ה-AI הוא כמו שחקן הוליוודי מוכשר שיכול לשחק כל דמות, אבל אם לא תתנו לו תסריט, הוא ישחק דמות של "פקיד משעמם". כשאומרים לו "תתנהג כמו מומחה לשיווק" או "תתנהג כמו מדריך טיולים נלהב", אתם משנים את כל אוצר המילים, הטון ועומק התשובה שלו. אל תשאלו סתם, תשאלו מתוך דמות.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מה זה בעצם?</h3>
      <p>
        מודלי שפה אומנו על כל האינטרנט. זה אומר שיש להם בזיכרון גם את הידע של רופא, גם של קופירייטר, וגם של ילד בן 5.
        ברירת המחדל של המודל היא לענות תשובה "ממוצעת" שתתאים לכולם. טכניקת הפרסונה (Persona) היא הדרך שלנו להגיד למודל: "תתעלם מכל שאר הדברים שאתה יודע, ותתמקד רק בידע ובסגנון של המומחה הספציפי הזה".
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך זה עובד? (דוגמה פשוטה)</h3>
      <p>נניח שאתם רוצים לכתוב מייל נזיפה לעובד. תראו את ההבדל:</p>
      
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200">
          <p className="font-bold text-slate-700">בלי פרסונה:</p>
          <p className="text-sm italic text-slate-500">"כתוב מייל לעובד שמאחר כל הזמן."</p>
          <p className="text-xs text-slate-900 mt-2 font-medium">התוצאה: מייל גנרי, יבש, אולי קצת רובוטי ("שלום דני, שמתי לב שאתה מאחר...").</p>
        </div>
        <div className="bg-green-50 p-4 rounded-xl border border-green-200">
          <p className="font-bold text-green-700">עם פרסונה:</p>
          <p className="text-sm italic text-green-800">"תתנהג כמו מנהל משאבי אנוש אמפתי ומכיל, שחשוב לו לשמור על העובד אבל גם להציב גבולות. כתוב מייל לעובד שמאחר."</p>
          <p className="text-xs text-slate-900 mt-2 font-medium">התוצאה: מייל רגיש, מקצועי, שמתחיל בשאלה "האם הכל בסדר?" ויוצר דיאלוג.</p>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">אז איך להשתמש בו נכון?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-500">
          <h4 className="font-bold text-green-900 mb-2">מתי זה מעולה?</h4>
          <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
            <li>כשצריך כתיבה שיווקית ("תתנהג כמו קופירייטר שנון").</li>
            <li>בלימודים ("תתנהג כמו המורה האהוב עליי להיסטוריה").</li>
            <li>בייעוץ ("תתנהג כמו יועץ עסקי עם 20 שנות ניסיון").</li>
          </ul>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border-t-4 border-red-500">
          <h4 className="font-bold text-red-900 mb-2">מתי להיזהר?</h4>
          <ul className="text-sm text-red-800 space-y-1 list-disc list-inside">
            <li>אל תבקשו "תתנהג כמו רופא" לייעוץ רפואי אמיתי.</li>
            <li>אל תגזימו עם דמויות סטריאוטיפיות מדי שעלולות לפגוע.</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">טעויות שכולם עושים</h3>
      <ul className="list-disc list-inside space-y-3">
        <li>
          <strong>פרסונה כללית מדי:</strong> "תתנהג כמו כותב". זה לא עוזר.
          <br/><span className="text-slate-500 text-sm">הפתרון: "תתנהג כמו כותב תוכן ללינקדאין שמתמחה בטכנולוגיה".</span>
        </li>
        <li>
          <strong>לשכוח את הקהל:</strong> הגדרתם מי הכותב, אבל מי הקורא?
          <br/><span className="text-slate-500 text-sm">הפתרון: הוסיפו "כתוב את זה עבור קהל של בני נוער".</span>
        </li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות נפוצות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם אפשר להשתמש בשמות של מפורסמים?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            כן! "תתנהג כמו סטיב ג'ובס" יפיק טקסט מינימליסטי, חד ומלא השראה. "תתנהג כמו שייקספיר" יפיק טקסט פיוטי ועתיק. זו דרך מצוינת לקבל סגנון מהיר.
          </p>
        </details>
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם זה עובד גם בקוד?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            בהחלט. "תתנהג כמו מומחה אבטחת מידע" יגרום ל-AI לכתוב קוד הרבה יותר מאובטח וזהיר מאשר סתם "כתוב קוד".
          </p>
        </details>
      </div>
    </PlainText>
  },
  {
    id: 'chain-of-thought',
    categoryId: 'skills',
    title: 'לחשוב בקול רם: השיטה שתמנע מה-AI לעשות טעויות',
    description: 'טכניקת "שרשרת המחשבה" (Chain of Thought) היא הדרך הכי טובה לגרום למודל לפתור בעיות מורכבות בלי ליפול בפח.',
    readTimeMinutes: 7,
    lastUpdated: '04/2026',
    imageUrl: 'https://images.unsplash.com/photo-1509228627129-7252f3057dc5?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">בשורה התחתונה: אל תתן לו לקפוץ למסקנות</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          כשאתם שואלים שאלה מסובכת (חידה, מתמטיקה, או לוגיקה), ה-AI מנסה לפעמים לנחש את התשובה הסופית מיד, וזה גורם לו לטעות. הטריק הוא להכריח אותו "להראות את הדרך". כשמבקשים ממנו "תחשוב צעד אחר צעד" (Think step by step), הוא הופך לחכם יותר ומדויק יותר בצורה דרמטית.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מה זה בעצם?</h3>
      <p>
        תחשבו על תלמיד במבחן במתמטיקה. אם הוא כותב רק את התשובה הסופית, יש סיכוי גבוה שהוא טעה בחישוב בראש. אם הוא כותב את כל הדרך על הדף, הסיכוי לטעות יורד, וגם אם הוא טועה - קל לתקן.
      </p>
      <p>
        ה-AI עובד בדיוק אותו דבר. כשהוא מייצר טקסט של "מחשבה" (כתיבת השלבים), הוא בעצם מייצר לעצמו הקשר (Context) שעוזר לו להגיע לתשובה הנכונה בסוף.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך זה עובד? (דוגמה מפתיעה)</h3>
      <p>בואו נראה חידה שהפילה מודלים רבים בעבר:</p>
      
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200">
          <p className="font-bold text-slate-700">פרומפט רגיל:</p>
          <p className="text-sm italic text-slate-500">"לדני יש 5 תפוחים. הוא זרק 2, קנה עוד 3, ואכל 1. כמה תפוחים יש לו?"</p>
          <p className="text-xs text-red-600 mt-2 font-bold">תשובה שגויה אפשרית: "לדני יש 6 תפוחים." (המודל התבלבל בחישוב המהיר).</p>
        </div>
        <div className="bg-green-50 p-4 rounded-xl border border-green-200">
          <p className="font-bold text-green-700">פרומפט שרשרת מחשבה:</p>
          <p className="text-sm italic text-green-800">"לדני יש 5 תפוחים. הוא זרק 2, קנה עוד 3, ואכל 1. כמה תפוחים יש לו? <span className="font-bold">בוא נחשוב על זה צעד אחר צעד.</span>"</p>
          <p className="text-xs text-slate-900 mt-2">
            תשובה: <br/>
            1. התחלה: 5 תפוחים.<br/>
            2. זרק 2: נשארו 3.<br/>
            3. קנה 3: עכשיו יש 6.<br/>
            4. אכל 1: נשארו 5.<br/>
            <strong>התשובה הסופית היא 5.</strong>
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">אז איך להשתמש בו נכון?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-500">
          <h4 className="font-bold text-green-900 mb-2">מתי זה מעולה?</h4>
          <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
            <li>בבעיות מתמטיות או לוגיות.</li>
            <li>כשמבקשים לכתוב קוד מורכב ("תכנן את הארכיטקטורה לפני שאתה כותב").</li>
            <li>כשצריך להסיק מסקנות מתוך טקסט ארוך.</li>
          </ul>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg border-t-4 border-orange-500">
          <h4 className="font-bold text-orange-900 mb-2">המחיר</h4>
          <ul className="text-sm text-orange-800 space-y-1 list-disc list-inside">
            <li>זה לוקח יותר זמן לקרוא.</li>
            <li>זה מייצר תשובות ארוכות יותר (אם אתם משלמים לפי מילים/טוקנים, זה עולה יותר).</li>
            <li>לפעמים זה מיותר לשאלות יצירתיות פשוטות ("ספר בדיחה").</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">טעויות שכולם עושים</h3>
      <ul className="list-disc list-inside space-y-3">
        <li>
          <strong>לוותר על הבקשה המפורשת:</strong> להניח שהמודל יעשה את זה לבד. במודלים החדשים (כמו o1 או Gemini 1.5 Pro) זה קורה אוטומטית לפעמים, אבל במודלים המהירים (Flash) חובה לבקש את זה.
        </li>
        <li>
          <strong>לא לקרוא את הדרך:</strong> לפעמים ה-AI עושה טעות בלוגיקה באמצע הדרך. אם תבקשו את השלבים, תוכלו לזהות בדיוק איפה הוא נפל ולתקן אותו.
        </li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות נפוצות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם זה עובד בעברית?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            כן מצוין. הביטוי "בוא נחשוב צעד אחר צעד" עובד מעולה גם בעברית ועוזר למודל להתגבר על קשיי שפה ולוגיקה בו זמנית.
          </p>
        </details>
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם יש עוד ביטויים חוץ מ"צעד אחר צעד"?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            אפשר להגיד: "פרק את הבעיה לגורמים", "תסביר את הרציונל שלך לפני התשובה הסופית", או "תכנן תוכנית עבודה ואז תבצע אותה".
          </p>
        </details>
      </div>
    </PlainText>
  },
  {
    id: 'human-ai-interaction-guide',
    categoryId: 'basics',
    title: 'איך לדבר עם AI? (מדריך למתחילים)',
    description: 'הסבר פשוט וברור איך המחשב "מבין" אתכם ואיך לקבל תשובות טובות יותר, בלי מילים מסובכות.',
    readTimeMinutes: 5,
    lastUpdated: '01/2026',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">בשורה התחתונה: זה לא בן אדם, זו מכונת השלמות</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          אל תחשבו על ה-AI כמו על חבר חכם שיודע הכל. תחשבו עליו כמו על <strong>"השלמה אוטומטית" משוכללת מאוד</strong> (כמו בוואטסאפ, רק הרבה יותר חכם). הוא לא באמת "מבין" את השאלה, הוא פשוט מנחש בצורה מצוינת מהי המילה הבאה שצריכה לבוא לפי מה שכתבתם לו. לכן: ככל שתהיו ברורים יותר, הניחוש שלו יהיה טוב יותר.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מה זה בעצם?</h3>
      <p>
        דמיינו שקראתם את כל הספרים והאינטרנט בעולם, ואז מישהו שואל אתכם שאלה. אתם לא "חושבים" על התשובה, אתם פשוט שולפים את המשפט שהכי הגיוני להגיד באותו רגע לפי כל מה שקראתם.
      </p>
      <p>
        זה מה שה-AI עושה. הוא מכונה שלמדה דפוסים. אם תתחילו משפט, הוא ידע לסיים אותו.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך זה עובד? (דוגמה פשוטה)</h3>
      <p>נניח שאתם כותבים למחשב: <strong>"השמיים הם..."</strong></p>
      <ul className="list-disc list-inside space-y-2 bg-white p-4 rounded-xl border border-slate-200">
        <li>המחשב בודק בזיכרון שלו: איזה מילה באה בדרך כלל אחרי "השמיים הם"?</li>
        <li>הוא רואה שב-90% מהמקרים כתוב "כחולים".</li>
        <li>אז הוא כותב לכם: <strong>"כחולים"</strong>.</li>
      </ul>
      <p className="text-sm text-slate-500 mt-2 italic">
        הוא לא הסתכל בחלון ובדק. הוא פשוט ניחש סטטיסטית. לכן, אם תשאלו אותו משהו שלא קיים (כמו "מי היה מלך מאדים הראשון?"), הוא עלול להמציא שם שנשמע הגיוני, כי זה התפקיד שלו - להשלים משפטים.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">אז איך להשתמש בו נכון?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-500">
          <h4 className="font-bold text-green-900 mb-2">מתי זה מעולה?</h4>
          <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
            <li>כשצריך רעיונות (כמו מתנות או ברכות).</li>
            <li>כדי לסכם טקסט ארוך ומסובך.</li>
            <li>כדי לנסח מחדש מייל שייצא יפה.</li>
            <li>כדי לתרגם או להסביר משהו פשוט.</li>
          </ul>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border-t-4 border-red-500">
          <h4 className="font-bold text-red-900 mb-2">מתי להיזהר?</h4>
          <ul className="text-sm text-red-800 space-y-1 list-disc list-inside">
            <li>כשמחפשים עובדה היסטורית מדויקת (הוא עלול לטעות).</li>
            <li>בשאלות רפואיות או משפטיות חשובות.</li>
            <li>כשצריך מידע עדכני מאוד מהחדשות של הבוקר (לחלקם אין גישה לאינטרנט בזמן אמת).</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">טעויות שכולם עושים</h3>
      <ul className="list-disc list-inside space-y-3">
        <li>
          <strong>לחשוב שהוא בנאדם:</strong> אל תגידו לו "אתה בטח מבין למה אני מתכוון". הוא לא.
          <br/><span className="text-slate-500 text-sm">הפתרון: תהיו ספציפיים. תגידו בדיוק מה אתם רוצים.</span>
        </li>
        <li>
          <strong>לשאול כמו בגוגל:</strong> אל תכתבו רק "עוגת שוקולד".
          <br/><span className="text-slate-500 text-sm">הפתרון: תבקשו "מתכון לעוגת שוקולד פשוטה לילדים, בלי הרבה כלים".</span>
        </li>
        <li>
          <strong>להאמין לכל מילה:</strong> לפעמים הוא כותב שטויות בביטחון מלא.
          <br/><span className="text-slate-500 text-sm">הפתרון: תמיד תבדקו אם זה נשמע הגיוני.</span>
        </li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות נפוצות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם הוא זוכר את השיחות שלי?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            רק בתוך השיחה הנוכחית. אם תפתחו "שיחה חדשה", הוא לא יזכור מה דיברתם קודם. המידע כן נשמר אצל החברות שבנו אותו כדי לשפר את המערכת בעתיד (אלא אם שיניתם הגדרות).
          </p>
        </details>
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            למה הוא משקר לפעמים?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            הוא לא "משקר" בכוונה, הוא "ממציא". המטרה שלו היא להשלים משפט שנראה יפה והגיוני. לפעמים האמת מפריעה לו ליצור משפט יפה, אז הוא בוחר במשפט היפה על פני האמת.
          </p>
        </details>
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            צריך להגיד לו תודה?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            לא חייבים, הוא לא נעלב. אבל כשמדברים אליו יפה ומסודר, הוא בדרך כלל עונה תשובות יותר טובות ומסודרות.
          </p>
        </details>
      </div>
    </PlainText>
  },
  {
    id: 'why-be-polite',
    categoryId: 'basics',
    title: 'האם צריך להיות מנומסים ל-AI? (והאם זה עוזר)',
    description: 'למה אנחנו אומרים "תודה" למחשב, והאם זה באמת משפר את התשובות שאנחנו מקבלים?',
    readTimeMinutes: 5,
    lastUpdated: '01/2026',
    imageUrl: 'https://images.unsplash.com/photo-1535378437327-b7149236addf?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">התשובה הקצרה: כן, זה כדאי</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          למחשב אין רגשות והוא לא נעלב, אבל כשאתם מדברים בנימוס ("בבקשה", "תודה"), אתם בעצם נותנים לו דוגמה לאיך אתם רוצים שהוא יענה. שפה יפה גורמת לו לענות בשפה יפה ומקצועית יותר. זה כמו קסם שעובד על הסטטיסטיקה שלו.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">למה זה קורה?</h3>
      <p>
        יש תופעה בפסיכולוגיה שנקראת "האנשה" (Anthropomorphism). זה אומר שאנחנו, בני האדם, אוהבים לתת תכונות אנושיות לדברים שאינם אנושיים - כמו מכוניות, בובות, וגם מחשבים. כשמחשב מדבר אלינו בשפה שלנו, קשה לנו לא להתייחס אליו כמו אל בנאדם.
      </p>
      <p>
        אבל מעבר לפסיכולוגיה שלנו, יש כאן עניין טכני. המודל אומן על מיליוני שיחות של בני אדם. בשיחות האלה, כשאדם אחד מדבר בנימוס ובשפה עשירה, האדם השני בדרך כלל עונה לו באותו אופן.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך זה עובד במנוע?</h3>
      <p>תחשבו על זה ככה:</p>
      <ul className="list-disc list-inside space-y-2 bg-white p-4 rounded-xl border border-slate-200">
        <li>כשאתם כותבים: "תביא לי רעיון מהר!!!", המודל מזהה סגנון דיבור פשוט, אולי קצת אגרסיבי. הוא "שולף" מהזיכרון שלו תשובות שמתאימות לסגנון הזה - בדרך כלל תשובות קצרות ופשוטות.</li>
        <li>כשאתם כותבים: "היי, אשמח לקבל עזרה עם רעיון יצירתי בבקשה", המודל מזהה סגנון דיבור איכותי ומשקיע. הוא "שולף" תשובות שמתאימות לשיחות מקצועיות ועמוקות יותר.</li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">הטיפ המעשי</h3>
      <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-500">
        <h4 className="font-bold text-green-900 mb-2">דברו כמו שהייתם מדברים לעובד מצטיין</h4>
        <p className="text-sm text-green-800">
          אל תהססו להיות מנומסים. זה לא בזבוז זמן.
        </p>
        <ul className="text-sm text-green-800 space-y-1 list-disc list-inside mt-2">
          <li>השתמשו במילים כמו "בבקשה", "תודה", "אשמח אם תוכל".</li>
          <li>הסבירו את עצמכם בסבלנות.</li>
          <li>אם הוא טועה, תקנו אותו בעדינות: "זה לא בדיוק מה שהתכוונתי, בוא ננסה שוב". זה עובד יותר טוב מאשר לצעוק עליו (בטקסט).</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איפה אנשים טועים?</h3>
      <ul className="list-disc list-inside space-y-3">
        <li>
          <strong>לחשוב שהוא חבר:</strong> להיות מנומס זה טוב, אבל אל תספרו לו סודות אישיים או תצפו ממנו לאמפתיה אמיתית. הוא עדיין מכונה.
        </li>
        <li>
          <strong>להיות מנומס מדי:</strong> אין צורך במגילות של התנצלויות. "סליחה שאני מפריע לך, אני יודע שאתה עסוק..." - זה מיותר. הוא לא עסוק אף פעם. תהיו מנומסים אבל ענייניים.
        </li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות קצרות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם הוא זוכר שאמרתי תודה?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            לא לטווח ארוך. הוא לא יזכור מחר שהייתם נחמדים היום. אבל בתוך אותה שיחה, זה יוצר אווירה טובה יותר.
          </p>
        </details>
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם מותר לקלל את ה-AI?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            זה לא מומלץ. רוב החברות (כמו OpenAI או Google) חוסמות שפה בוטה וזה עלול לגרום לחסימה של החשבון שלכם. וגם - זה פשוט לא מועיל לקבלת תשובה טובה.
          </p>
        </details>
      </div>
    </PlainText>
  },
  {
    id: 'replacement-fear',
    categoryId: 'work',
    title: 'האם ה-AI יחליף אותי בעבודה?',
    description: 'למה לא צריך לפחד שהרובוט יקח לכם את הכיסא, ואיך להפוך אותו לעוזר האישי שלכם.',
    readTimeMinutes: 6,
    lastUpdated: '01/2026',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">התשובה המרגיעה: כנראה שלא, אבל...</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          ה-AI כנראה לא יחליף אתכם לגמרי, אבל <strong>מישהו שמשתמש ב-AI כן עלול להחליף אתכם</strong>. המטרה היא לא להתחרות במחשב, אלא להשתמש בו כדי לעבוד מהר יותר וטוב יותר. אל תהיו נהגי כרכרות שנלחמים במכוניות - תלמדו לנהוג.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">הפחד מהלא נודע</h3>
      <p>
        זה טבעי לפחד. בכל פעם שמגיעה טכנולוגיה חדשה (כמו המחשב האישי, או האינטרנט), אנשים פחדו שייגמרו העבודות. בפועל, העבודות לא נעלמו - הן השתנו.
      </p>
      <p>
        ה-AI הוא כלי עזר חזק. הוא יודע לעשות משימות משעממות, חזרתיות וטכניות במהירות שיא. הוא לא יודע להחליף את הלב, הנשמה, היצירתיות האנושית והיכולת להבין סיטואציות מורכבות בין אנשים.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מודל ה"קנטאור": חצי אדם, חצי סוס</h3>
      <p>
        בעולם הטכנולוגי מדברים על מודל שנקרא "קנטאור" (כמו היצור מהאגדות - חצי אדם וחצי סוס). הרעיון הוא ששילוב של אדם ומכונה הוא חזק יותר מכל אחד מהם בנפרד.
      </p>
      <ul className="list-disc list-inside space-y-2 bg-white p-4 rounded-xl border border-slate-200">
        <li><strong>מה ה-AI עושה טוב?</strong> כותב טיוטות, מסכם מידע, מתכנת, בודק שגיאות, עובד 24/7 בלי להתעייף.</li>
        <li><strong>מה אתם עושים טוב?</strong> מבינים רגשות, מקבלים החלטות מוסריות, מבינים את ההקשר העסקי, יצירתיים בצורה לא צפויה, ומנהלים את הקשר עם הלקוחות.</li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך להישאר רלוונטיים?</h3>
      <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-500">
        <h4 className="font-bold text-green-900 mb-2">אמצו את הטכנולוגיה</h4>
        <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
          <li><strong>תתחילו לשחק:</strong> אל תחכו. תתחילו להשתמש ב-ChatGPT או Gemini למשימות יומיומיות פשוטות.</li>
          <li><strong>תנו לו את "העבודה השחורה":</strong> תנו לו לכתוב את המיילים המשעממים, לסכם את הישיבות הארוכות ולחפש מידע.</li>
          <li><strong>תתמקדו בערך המוסף שלכם:</strong> תשקיעו זמן בדברים שמחשב לא יודע לעשות - קשר אישי עם אנשים, חשיבה אסטרטגית, ופתרון בעיות מורכבות.</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איפה טועים?</h3>
      <p>
        הטעות הגדולה ביותר היא <strong>התעלמות</strong>. לחשוב ש"זה יעבור" או ש"זה לא קשור למקצוע שלי". ה-AI נכנס לכל תחום - מעריכת דין ועד עיצוב גרפי. מי שיתעלם, יישאר מאחור. מי שיאמץ את זה, יהפוך לעובד סופר-יעיל שאי אפשר לוותר עליו.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות נפוצות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם המקצוע שלי בסכנה?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            אם העבודה שלכם היא רק "העתק-הדבק" של נתונים, אז כן, אתם בסיכון. אבל אם העבודה שלכם דורשת חשיבה, יצירתיות, או עבודה עם אנשים - אתם בטוחים, וה-AI רק יעזור לכם.
          </p>
        </details>
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם ה-AI יהיה המנהל שלי?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            לא בעתיד הקרוב. ניהול דורש הבנה אנושית עמוקה, פוליטיקה ארגונית ואמפתיה. ה-AI יהיה העוזר של המנהל, לא המנהל עצמו.
          </p>
        </details>
      </div>
    </PlainText>
  },
  {
    id: 'ai-ethics-personal',
    categoryId: 'personal',
    title: 'אתיקה יומיומית: ברכה לאמא מ-ChatGPT?',
    description: 'מתי זה בסדר להשתמש ב-AI ומתי זה מרגיש כמו זיוף? המדריך לשימוש רגיש.',
    readTimeMinutes: 4,
    lastUpdated: '01/2026',
    imageUrl: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">הקו האדום: כוונה ומאמץ</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          זה בסדר להיעזר ב-AI כדי לקבל רעיונות או חרוזים, אבל כשמדובר ברגשות אמיתיים - עדיף שהמילים יהיו שלכם. ברכה מושלמת שכתב רובוט שווה פחות מברכה עקומה שכתבתם מהלב. המאמץ הוא חלק מהמתנה.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">הפיתוי של הנוחות</h3>
      <p>
        ה-AI כותב נהדר. הוא יכול לכתוב שיר אהבה בשניות, מכתב תנחומים מרגש, או ברכה ליום הולדת שתגרום לכולם לבכות. זה מפתה מאוד להשתמש בו כשאין לנו כוח או זמן, או כשאנחנו מרגישים "תקועים" מול דף לבן.
      </p>
      <p>
        אבל יש כאן בעיה אתית קטנה: כשאנחנו נותנים או מקבלים מילים חמות, אנחנו בעצם מעריכים את המחשבה והכוונה שעומדת מאחוריהן. אם רובוט כתב את זה, איפה הכוונה?
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מתי זה עובד ומתי לא?</h3>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200">
          <p className="font-bold text-green-700 mb-1">✅ שימוש נכון (כלי עזר):</p>
          <p className="text-sm">"אני רוצה לכתוב ברכה לאמא שלי שאוהבת גינון וטיולים. תן לי 5 רעיונות למשפטים יפים או ציטוטים על טבע שאפשר לשלב."</p>
          <p className="text-xs text-slate-400 mt-1">כאן אתם העורכים, אתם בוחרים ומרכיבים את הברכה.</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200">
          <p className="font-bold text-red-700 mb-1">❌ שימוש לא נכון (תחליף):</p>
          <p className="text-sm">"כתוב ברכה מרגשת לאשתי ליום הנישואין."</p>
          <p className="text-xs text-slate-400 mt-1">כאן אתם מוותרים על המאמץ לגמרי. זה עלול להרגיש "פלסטי" ומזויף למי שמכיר אתכם.</p>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך לעשות את זה נכון?</h3>
      <div className="bg-purple-50 p-4 rounded-lg border-t-4 border-purple-500">
        <h4 className="font-bold text-purple-900 mb-2">השתמשו בו כדי לשבור את הקרח</h4>
        <ul className="text-sm text-purple-800 space-y-1 list-disc list-inside">
          <li><strong>רעיונות לחרוזים:</strong> "איזה מילה מתחרזת עם 'שמש'?".</li>
          <li><strong>בדיקת ניסוח:</strong> "כתבתי הודעה קצת כועסת, תעזור לי לנסח אותה בצורה יותר רגועה".</li>
          <li><strong>השראה:</strong> "תן לי רעיונות למשחקי מילים ליום הולדת 40".</li>
          <li><strong>אבל תמיד:</strong> תשנו את הטקסט הסופי, תוסיפו בדיחה אישית שרק אתם מכירים, ותוודאו שזה נשמע כמוכם.</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">הטעות הגדולה</h3>
      <p>
        לשלוח "העתק-הדבק" בלי לקרוא. לפעמים ה-AI משאיר הערות כמו "[כאן תכניס שם]" או משתמש במילים גבוהות מדי שאתם בחיים לא הייתם אומרים (כמו "הנני מאחל לך"). זה מסגיר מיד שלא אתם כתבתם את זה, וזה יכול להיות מאוד מביך ומעליב לצד השני.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות קצרות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם צריך לגלות שהשתמשתי ב-AI?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            תלוי. במכתב רשמי בעבודה - כדאי. בברכה אישית - לא חייבים, כל עוד השקעתם עריכה ושינוי והפכתם את זה לאישי שלכם.
          </p>
        </details>
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם זה נחשב רמאות?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            לא אם אתם משתמשים בזה ככלי עזר. כמו ששימוש במילון או ב-Word הוא לא רמאות. זה כלי שעוזר לכם להתבטא טוב יותר. הרמאות היא רק אם אתם טוענים שכתבתם הכל לבד מאפס כשהרובוט עשה הכל.
          </p>
        </details>
      </div>
    </PlainText>
  },
  {
    id: 'what-ai-really-does',
    categoryId: 'basics',
    title: 'מה AI באמת עושה (ולמה הוא לא "יודע" כלום)',
    description: 'הבנת ההבדל בין חיפוש בגוגל לבין יצירת טקסט חדש על ידי מחשב.',
    readTimeMinutes: 5,
    lastUpdated: '03/2024',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">בשורה התחתונה: חיפוש מול יצירה</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          גוגל הוא כמו ספרן בספרייה ענקית - אתם שואלים שאלה, והוא רץ להביא לכם את הספר הנכון. ה-AI (כמו ChatGPT) הוא כמו סופר מוכשר - הוא לא מחפש ספר קיים, הוא <strong>כותב ספר חדש</strong> במיוחד בשבילכם, מילה אחרי מילה, לפי מה שלמד בעבר.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מנוע חיפוש מול מודל שפה</h3>
      <p>
        רובנו רגילים להשתמש בגוגל כבר שנים. כשאנחנו מחפשים משהו, גוגל סורק את האינטרנט ומראה לנו דפים שמישהו אחר כתב. המידע נמצא שם בחוץ, וגוגל רק מצביע עליו.
      </p>
      <p>
        מודל שפה (AI) עובד אחרת לגמרי. אין לו מאגר של "תשובות מוכנות". יש לו ידע עצום על איך השפה עובדת ואיזה מילים מתחברות אחת לשנייה. כשהוא עונה לכם, הוא מייצר את התשובה מאפס.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך הקסם קורה?</h3>
      <p>
        תחשבו על ה-AI כמו על תוכי חכם מאוד, שקרא את כל האינטרנט.
      </p>
      <ul className="list-disc list-inside space-y-2 bg-white p-4 rounded-xl border border-slate-200">
        <li>אתם נותנים לו התחלה של משפט: "בירת צרפת היא..."</li>
        <li>הוא לא מסתכל במפה. הוא בודק בזיכרון הסטטיסטי שלו: איזו מילה בדרך כלל באה אחרי המילים האלה?</li>
        <li>התשובה הסטטיסטית היא "פריז". אז הוא כותב "פריז".</li>
      </ul>
      <p className="text-sm text-slate-500 mt-2 italic">
        זה נקרא "חיזוי הטוקן הבא" (Next Token Prediction). זה נשמע פשוט, אבל כשעושים את זה מיליארדי פעמים בשנייה, זה נראה כמו אינטליגנציה אמיתית.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מה זה אומר לגביכם?</h3>
      <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-500">
        <h4 className="font-bold text-green-900 mb-2">יתרונות וחסרונות</h4>
        <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
          <li><strong>יתרון ענק:</strong> הוא יכול ליצור דברים חדשים שלא היו קיימים קודם! מתכונים חדשים, שירים, קוד תוכנה, או סיכומים מותאמים אישית.</li>
          <li><strong>חיסרון ענק:</strong> בגלל שהוא לא "שולף" עובדה קיימת אלא "מייצר" טקסט, הוא יכול לפעמים להתבלבל ולהמציא עובדות שנשמעות נכונות אבל הן שקר מוחלט (הזיות).</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">טעות נפוצה</h3>
      <p>
        הרבה אנשים מתייחסים ל-AI כמו לאנציקלופדיה שיודעת הכל. הם שואלים "מה קרה אתמול בחדשות?" או "מה הטלפון של יוסי כהן?".
        <br/>
        <strong>התיקון:</strong> למידע עובדתי טהור ועדכני - עדיף גוגל. ליצירה, כתיבה, סיכום והבנה - עדיף AI.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם הוא יודע מי אני?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            לא, אלא אם סיפרתם לו בשיחה הזאת. אין לו גישה למחשב שלכם או לחיים האישיים שלכם.
          </p>
        </details>
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם הוא מחובר לאינטרנט?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            חלקם כן (כמו Gemini או Copilot) וחלקם לא (גרסאות בסיסיות של ChatGPT). תמיד כדאי לבדוק באיזה מודל אתם משתמשים.
          </p>
        </details>
      </div>
    </PlainText>
  },
  {
    id: 'why-ai-sounds-confident',
    categoryId: 'basics',
    title: 'למה הוא נשמע כל כך בטוח בעצמו (גם כשהוא טועה)?',
    description: 'הסבר על האופי של המודל ולמה הוא לא יודע להגיד "אני לא יודע".',
    readTimeMinutes: 4,
    lastUpdated: '03/2024',
    imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">בשורה התחתונה: הוא אומן להישמע משכנע</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          המודל לא "מרגיש" ביטחון עצמי. הוא פשוט אומן על ידי בני אדם שנתנו לו ציונים גבוהים כשהוא ענה תשובות ברורות, ישירות וחד-משמעיות. הוא למד ש"להישמע כמו מומחה" זה מה שאנחנו רוצים, גם אם אין לו באמת מושג מה התשובה הנכונה.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">סגנון דיבור סמכותי</h3>
      <p>
        שמתם לב שה-AI תמיד עונה בטון של פרופסור יודע-כל? הוא כמעט אף פעם לא מגמגם, לא מהסס ולא אומר "אממ... אני לא בטוח". זה לא במקרה.
      </p>
      <p>
        בתהליך האימון של המודל (שנקרא RLHF), נתנו לו משוב אנושי. אנשים דירגו תשובות. תשובה אסרטיבית קיבלה ציון גבוה יותר מתשובה מהוססת. אז המודל למד לחקות את הסגנון הזה כדי "לנצח במשחק".
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">הפער המסוכן</h3>
      <p>
        הבעיה היא שלמודל אין שום דרך לדעת אם מה שהוא אומר זה אמת או שקר. מבחינתו, המשפט "הירח עשוי מגבינה" והמשפט "הירח עשוי מסלע" הם סתם רצף של מילים.
      </p>
      <ul className="list-disc list-inside space-y-2 bg-white p-4 rounded-xl border border-slate-200">
        <li>הוא בונה משפט שנשמע נכון מבחינה תחבירית (דקדוק).</li>
        <li>הוא משתמש במילים שנשמעות הגיוניות בהקשר (כמו "מחקר", "על פי", "מומחים").</li>
        <li>התוצאה: שקר שנשמע משכנע מאוד.</li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך להתגונן?</h3>
      <div className="bg-red-50 p-4 rounded-lg border-t-4 border-red-500">
        <h4 className="font-bold text-red-900 mb-2">כבדהו וחשדהו</h4>
        <p className="text-sm text-red-800">
          אל תתנו לטון הסמכותי להטעות אתכם.
        </p>
        <ul className="text-sm text-red-800 space-y-1 list-disc list-inside mt-2">
          <li><strong>תמיד תבדקו:</strong> אם הוא נותן עובדה, תאריך, או שם של חוק - חפשו את זה בגוגל.</li>
          <li><strong>בקשו מקורות:</strong> תגידו לו "תביא לי קישור למקור המידע הזה". אם הוא לא מוצא, כנראה שזה לא נכון.</li>
          <li><strong>הפעילו היגיון בריא:</strong> אם משהו נשמע מוזר, הוא כנראה מוזר.</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">טעות נפוצה: הפניות מזויפות</h3>
      <p>
        לפעמים תבקשו ממנו "תן לי מאמר בנושא X". הוא ימציא שם של מאמר, שם של כותב, ואפילו תאריך ושם של עיתון. הכל יראה אמיתי לגמרי, אבל המאמר הזה לא קיים במציאות. הוא פשוט חיבר מילים שנשמעות כמו כותרת של מאמר. היזהרו מזה מאוד בעבודות אקדמיות!
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            למה לא מתכנתים אותו להגיד "אני לא יודע"?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            חברות ה-AI מנסות לעשות את זה, וזה משתפר, אבל המנגנון הבסיסי שלו תמיד שואף לתת תשובה כלשהי מאשר לשתוק.
          </p>
        </details>
      </div>
    </PlainText>
  },
  {
    id: 'common-mistakes',
    categoryId: 'basics',
    title: 'טעויות נפוצות: אל תשתמשו בו כמו בגוגל',
    description: 'למה חיפוש מילות מפתח לא עובד ב-AI ואיך צריך לשנות את החשיבה.',
    readTimeMinutes: 5,
    lastUpdated: '03/2024',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">בשורה התחתונה: דברו, אל תגמגמו</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          בגוגל אנחנו כותבים "מסעדה איטלקית תל אביב". ב-AI זה לא מספיק. כדי לקבל תוצאה טובה, צריך לדבר במשפטים מלאים ולתת הקשר: "אני מחפש המלצה למסעדה איטלקית בתל אביב, לאווירה רומנטית ושקטה, בתקציב בינוני". ככל שתהיו יותר ברורים, התשובה תהיה יותר מדויקת.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שינוי הרגלים</h3>
      <p>
        במשך 20 שנה התרגלנו לדבר עם מחשבים ב"קודים" קצרים. למדנו שצריך לכתוב מעט מילים כדי לקבל תוצאות.
      </p>
      <p>
        עם AI, החוקים השתנו. הוא צריך שתספרו לו את הסיפור המלא. הוא צריך להבין <strong>למה</strong> אתם שואלים ו<strong>מי</strong> אתם. אם תתקמצנו במילים, תקבלו תשובה גנרית ומשעממת ("פרווה").
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">ההבדל בתוצאות</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-red-50 p-4 rounded-xl border border-red-200">
          <p className="font-bold text-red-700 mb-2">❌ גישת גוגל (קצר מדי)</p>
          <p className="text-sm italic">"מתנה לאמא"</p>
          <p className="text-xs text-slate-500 mt-2">תוצאה: המודל יזרוק רשימה משעממת של פרחים, בושם ושוקולד. כמו כולם.</p>
        </div>
        <div className="bg-green-50 p-4 rounded-xl border border-green-200">
          <p className="font-bold text-green-700 mb-2">✅ גישת AI (מפורט)</p>
          <p className="text-sm italic">"תציע לי 3 רעיונות מקוריים למתנה לאמא בת 60, שאוהבת מאוד טיולים בטבע והיסטוריה, אבל שונאת מוצרי טיפוח ובישול."</p>
          <p className="text-xs text-slate-500 mt-2">תוצאה: רעיונות מותאמים אישית (כמו סיור מודרך, מנוי למגזין טבע, ציוד טיולים).</p>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">טיפים לשיחה טובה</h3>
      <div className="bg-yellow-50 p-4 rounded-lg border-t-4 border-yellow-500">
        <ul className="text-sm text-yellow-900 space-y-2 list-disc list-inside">
          <li><strong>ספרו מי אתם:</strong> "אני סטודנט", "אני מנהל שיווק", "אני אמא לשלושה".</li>
          <li><strong>הגדירו את המטרה:</strong> "אני צריך לשכנע את הבוס שלי", "אני רוצה להסביר לילד".</li>
          <li><strong>בקשו סגנון:</strong> "תענה לי בקיצור", "תענה לי בטבלה", "תענה לי מצחיק".</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">הטעות: לצפות שהוא יקרא מחשבות</h3>
      <p>
        אל תגידו "תכתוב לי מייל". הוא לא יודע למי, על מה, ובאיזה טון. אם לא תגידו לו, הוא ינחש, והוא בדרך כלל ינחש את הממוצע המשעמם ביותר. קחו אחריות על ההנחיות.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            זה לא מתיש לכתוב כל כך הרבה?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            בהתחלה אולי כן, אבל זה חוסך המון זמן אחר כך. במקום לקבל תשובה גרועה ולתקן אותה 5 פעמים, כותבים פעם אחת הנחיה טובה ומקבלים בול מה שצריך.
          </p>
        </details>
      </div>
    </PlainText>
  },
  {
    id: 'how-to-ask-good-question',
    categoryId: 'basics',
    title: 'נוסחת הקסם (CPF): איך לכתוב פרומפט מושלם',
    description: 'שיטה פשוטה בת 3 שלבים שתבטיח שה-AI יבין אתכם בכל פעם מחדש.',
    readTimeMinutes: 6,
    lastUpdated: '03/2024',
    imageUrl: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">בשורה התחתונה: תבנית CPF</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          כדי לא לשכוח שום פרט חשוב, תמיד תבנו את הבקשה שלכם (הפרומפט) לפי שלושה מרכיבים: 
          <br/>1. <strong>C</strong>ontext (הקשר - מי אני ומה הרקע).
          <br/>2. <strong>P</strong>urpose (מטרה - מה אני רוצה להשיג).
          <br/>3. <strong>F</strong>ormat (פורמט - איך התשובה צריכה להיראות).
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">למה צריך תבנית?</h3>
      <p>
        כמו שאדריכל לא בונה בית בלי שרטוט, ככה אי אפשר לבקש משימה מורכבת מ-AI בלי מבנה. כשאנחנו כותבים "מהר", אנחנו שוכחים פרטים. התבנית CPF היא כמו רשימת מכולת שמוודאת שלא שכחתם את החלב והלחם. היא עושה סדר למודל ועוזרת לו להבין אתכם.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך בונים את זה? (דוגמה)</h3>
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <p className="mb-4 font-bold text-lg">המשימה: אני רוצה לכתוב פוסט לפייסבוק על המוצר החדש שלי.</p>
        
        <div className="space-y-3">
          <div className="flex gap-3">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-bold text-xs h-fit">C - הקשר</span>
            <p className="text-sm">"אני בעל עסק קטן לתכשיטים בעבודת יד. קהל היעד שלי הוא נשים שאוהבות אופנה ייחודית."</p>
          </div>
          <div className="flex gap-3">
            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded font-bold text-xs h-fit">P - מטרה</span>
            <p className="text-sm">"אני רוצה להשיק קולקציה חדשה לקיץ. המטרה היא לגרום להן להרגיש שהתכשיטים האלה ישדרגו להן את המראה בחופשה."</p>
          </div>
          <div className="flex gap-3">
            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded font-bold text-xs h-fit">F - פורמט</span>
            <p className="text-sm">"תכתוב פוסט קצר (עד 3 משפטים), עם אימוג'ים, ובסוף הנעה לפעולה ללחוץ על הלינק."</p>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">טיפים לשימוש</h3>
      <div className="bg-yellow-50 p-4 rounded-lg border-t-4 border-yellow-500">
        <ul className="text-sm text-yellow-900 space-y-2 list-disc list-inside">
          <li><strong>תעתיקו את זה:</strong> שמרו את ראשי התיבות CPF בראש. לפני כל שאלה חשובה, תבדקו אם יש לכם את שלושתם.</li>
          <li><strong>אל תתביישו לפרט:</strong> ב"הקשר" אתם יכולים להדביק טקסטים ארוכים, מיילים קודמים, או כל מידע שיעזור למודל להיכנס לעניינים.</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איפה מפספסים?</h3>
      <p>
        הטעות הכי נפוצה היא לשכוח את ה-<strong>Format</strong>. אנשים כותבים סיפור יפה על מה שהם רוצים, אבל שוכחים להגיד למודל איך להגיש את זה. ואז המודל כותב 5 פסקאות משעממות במקום רשימה קצרה וממוקדת. תמיד תגדירו: טבלה? רשימה? מייל? קוד? שיר?
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם הסדר משנה?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            לא ממש. אתם יכולים להתחיל עם הפורמט ואז לתת רקע. העיקר שכל המרכיבים יהיו שם.
          </p>
        </details>
      </div>
    </PlainText>
  },
  {
    id: 'first-prompt-never-enough',
    categoryId: 'basics',
    title: 'השיטה האיטרטיבית: אף פעם לא מספיק פעם אחת',
    description: 'למה התשובה הראשונה היא רק ההתחלה, ואיך לשפר אותה בשיטת "פינג-פונג".',
    readTimeMinutes: 5,
    lastUpdated: '03/2024',
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">בשורה התחתונה: התייחסו לזה כאל טיוטה</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          אל תקבלו את התשובה הראשונה של ה-AI כמוצר מוגמר. ב-90% מהמקרים, התשובה הראשונה היא רק בסיס בינוני. הסוד הוא להמשיך את השיחה: לבקש תיקונים, קיצורים, שינויי סגנון ודיוקים. העבודה האמיתית קורית בשיפורים (איטרציות).
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">לדבר, לתקן, לשפר</h3>
      <p>
        עבודה עם AI היא לא כמו מכונת שתייה (מכניסים מטבע, יוצאת פחית). היא יותר כמו עבודה עם מעצב גרפי או עורך וידאו. אתם נותנים הנחיה, מקבלים סקיצה, ואז אומרים: "זה יפה, אבל תשנה את הצבע לכחול ותגדיל את הכותרת".
      </p>
      <p>
        תהליך ה"פינג-פונג" הזה הוא קריטי. בכל פעם שאתם נותנים משוב, המודל מבין אתכם טוב יותר.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">דוגמה לשיפור מתמשך</h3>
      <div className="space-y-4">
        <div className="bg-slate-50 p-3 rounded-lg border-r-4 border-slate-300">
          <p className="font-bold text-xs text-slate-500 uppercase">שלב 1</p>
          <p className="text-sm font-bold">אני: "תציע מתכון לארוחת ערב."</p>
          <p className="text-sm text-slate-600">AI: (נותן מתכון גנרי לפסטה).</p>
        </div>
        <div className="bg-slate-50 p-3 rounded-lg border-r-4 border-slate-300">
          <p className="font-bold text-xs text-slate-500 uppercase">שלב 2</p>
          <p className="text-sm font-bold">אני: "לא, אני בדיאטה. בלי פחמימות."</p>
          <p className="text-sm text-slate-600">AI: (נותן מתכון לחזה עוף וירקות).</p>
        </div>
        <div className="bg-blue-50 p-3 rounded-lg border-r-4 border-blue-500">
          <p className="font-bold text-xs text-blue-500 uppercase">שלב 3 (התוצאה הרצויה)</p>
          <p className="text-sm font-bold">אני: "מעולה. עכשיו תכין לי רשימת קניות לזה בסופר."</p>
          <p className="text-sm text-slate-600">AI: (מכין רשימה מסודרת).</p>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך לתת משוב יעיל?</h3>
      <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-500">
        <ul className="text-sm text-green-800 space-y-2 list-disc list-inside">
          <li><strong>שנו אורך:</strong> "זה ארוך מדי, תקצר לחצי". או "זה קצר מדי, תפרט יותר על נקודה 2".</li>
          <li><strong>שנו סגנון:</strong> "זה נשמע רשמי מדי, תכתוב את זה יותר קליל וחברי".</li>
          <li><strong>שנו מבנה:</strong> "במקום פסקאות, תציג את זה כטבלה להשוואה".</li>
          <li><strong>תקנו טעויות:</strong> "התעלמת מזה שביקשתי בלי בצל, תתקן".</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">הטעות: להתייאש מהר</h3>
      <p>
        הרבה אנשים מנסים פעם אחת, מקבלים תשובה בינונית, ואומרים "ה-AI הזה טיפש" וסוגרים. הטעות היא אצלם. הם לא הבינו שצריך לכוון אותו. זה כמו לזרוק חכה לים, לא לתפוס דג בדקה הראשונה, ולהחליט שאין דגים בים.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            כמה פעמים אפשר לתקן אותו?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            כמה שרוצים. אבל אם אחרי 4-5 ניסיונות זה עדיין לא זה, אולי עדיף לפתוח "שיחה חדשה" ולהתחיל מהתחלה עם פרומפט טוב יותר שמכיל את כל הלקחים.
          </p>
        </details>
      </div>
    </PlainText>
  },
  {
    id: 'did-ai-understand-me',
    categoryId: 'basics',
    title: 'וידוא הבנה: הטריק שיחסוך לכם טעויות',
    description: 'איך לבקש מה-AI "לחזור על הדברים" כדי לוודא שהוא באמת הבין את המשימה.',
    readTimeMinutes: 4,
    lastUpdated: '03/2024',
    imageUrl: 'https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">בשורה התחתונה: בקשו ממנו לשקף</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          במשימות מורכבות, לפני שה-AI מתחיל לעבוד, בקשו ממנו: "חזור במילים שלך על ההוראות שנתתי לך ותגיד לי אם הבנת הכל". זה מכריח אותו לעבד את המידע שוב ומונע ממנו לפספס פרטים קטנים וחשובים. זה נקרא Reflection (שיקוף).
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">לוודא קליטה</h3>
      <p>
        לפעמים אנחנו כותבים פרומפט ארוך ומסובך עם המון אילוצים ("תכתוב קוד, אבל בלי להשתמש בספרייה X, ושיהיה יעיל, ועם הערות בעברית..."). ה-AI עלול "לרפרף" על חלק מההוראות ולהתעלם מהן בטעות.
      </p>
      <p>
        כשאתם מבקשים ממנו לחזור על ההוראות, אתם בעצם בודקים שהוא "הקשיב" עד הסוף.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך זה נראה?</h3>
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <p className="text-sm font-bold mb-2">הפרומפט שלכם:</p>
        <p className="text-sm italic text-slate-600 mb-4">"אני צריך תוכנית עסקית. חשוב שהיא תתאים לאנשים מבוגרים, שהמודל יהיה מנויים חודשיים, ושהשיווק יהיה רק בפייסבוק. <span className="font-bold text-blue-600 not-italic">לפני שאתה כותב, תכתוב לי מה הבנת.</span>"</p>
        
        <p className="text-sm font-bold mb-2">תשובת ה-AI (שיקוף):</p>
        <p className="text-sm text-green-700 bg-green-50 p-2 rounded">"הבנתי. המשימה היא לכתוב תוכנית עסקית עם שלושה דגשים: 1. קהל יעד גיל שלישי. 2. הכנסות ממנויים. 3. שיווק בפייסבוק בלבד. האם להתחיל?"</p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">למה זה עובד?</h3>
      <p>
        מבחינה טכנית, כשהמודל כותב את ההוראות בעצמו כפלט, המילים האלה נכנסות ל"זיכרון העבודה" (Context Window) שלו בצורה חזקה יותר. עכשיו, כשהוא יבוא לבצע את המשימה, ההוראות נמצאות לו "מול העיניים" בתוך הטקסט של השיחה, וזה משפר דרמטית את הסיכוי שהוא יבצע אותן במדויק.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מתי לא צריך את זה?</h3>
      <p>
        בשאלות פשוטות ("מה בירת צרפת?", "תציע לי רעיון למתנה"). השיקוף מיותר כאן ומבזבז זמן. תשתמשו בטריק הזה רק כשהמשימה מורכבת, ארוכה, או כשיש לכם רשימת דרישות ספציפית מאוד שאסור לפספס.
      </p>
    </PlainText>
  },
  {
    id: 'explain-simply',
    categoryId: 'basics',
    title: 'טכניקת ELI5: תסביר לי כאילו אני בן 5',
    description: 'איך להפוך כל נושא מסובך (ביטקוין, פיזיקה קוונטית, פוליטיקה) להסבר שילד יכול להבין.',
    readTimeMinutes: 5,
    lastUpdated: '03/2024',
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">בשורה התחתונה: כוח הפשטות</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          אחת היכולות החזקות ביותר של ה-AI היא "תרגום משלבים". הוא קרא ספרי לימוד מסובכים וגם ספרי ילדים. בקשו ממנו: "תסביר לי את זה כאילו אני בן 5" (Explain Like I'm 5), והוא ייקח כל רעיון מורכב ויהפוך אותו לסיפור פשוט עם דוגמאות מהחיים, בלי מילים מסובכות.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">המורה הפרטי האולטימטיבי</h3>
      <p>
        לכל אחד מאיתנו יש רגעים שאנחנו נתקלים במושג שאנחנו לא מבינים - בבנק, במוסך, אצל הרופא או בחדשות. גוגל לפעמים נותן הסברים מוויקיפדיה שהם בעצמם מסובכים מדי. ה-AI יכול ללעוס את המידע ולהגיש לכם אותו בכפית.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">דוגמה: איך עובד האינטרנט?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-red-50 p-4 rounded-xl border border-red-200">
          <p className="font-bold text-red-700 mb-2">הסבר טכני (רגיל)</p>
          <p className="text-sm">"האינטרנט הוא רשת גלובלית של רשתות מחשבים המשתמשות בפרוטוקול TCP/IP כדי לקשר בין התקנים..."</p>
          <p className="text-xs text-slate-500 mt-2">משעמם ולא מובן לכולם.</p>
        </div>
        <div className="bg-green-50 p-4 rounded-xl border border-green-200">
          <p className="font-bold text-green-700 mb-2">הסבר ELI5 (כמו בן 5)</p>
          <p className="text-sm">"תחשוב שהאינטרנט הוא כמו חוט טלפון ענקי שמחבר את המחשב שלך לכל המחשבים בעולם. כשאתה שולח הודעה, זה כמו לשלוח מכתב בצינור הזה שעובר דרך הרבה תחנות עד שהוא מגיע לחבר שלך."</p>
          <p className="text-xs text-slate-500 mt-2">ברור, פשוט וציורי.</p>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מתי להשתמש בזה?</h3>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>לימודים:</strong> כשאתם מתכוננים למבחן ולא מבינים נושא.</li>
        <li><strong>מסמכים:</strong> כשקיבלתם מכתב מהביטוח עם המון מושגים. תדביקו את הטקסט ותבקשו: "תסביר לי בפשטות מה הם רוצים ממני".</li>
        <li><strong>סקרנות:</strong> כדי להבין איך דברים עובדים (מנוע של רכב, חורים שחורים, כלכלה).</li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">הטעות: לחשוב שזה לא מדויק</h3>
      <p>
        אנלוגיות ופישוט בהכרח מאבדים קצת מהדיוק המדעי לטובת ההבנה. זה בסדר גמור להבנה כללית, אבל אם אתם צריכים לבנות את המנוע - אל תסתמכו רק על ההסבר הפשוט. המטרה היא הבנה רעיונית, לא דיוק אקדמי מושלם.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">עוד טריקים?</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            אפשר לבקש אנלוגיות ספציפיות?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            בטח! זה עובד מעולה. "תסביר לי איך עובד המערכת החיסונית בעזרת דוגמה של צבא ומבצר", או "תסביר לי על מניות בעזרת דוגמה של פיצרייה".
          </p>
        </details>
      </div>
    </PlainText>
  },
  {
    id: 'short-answer-quality',
    categoryId: 'basics',
    title: 'שליטה באורך: איך למנוע ממנו לחפור',
    description: 'ה-AI אוהב לכתוב מגילות. כך תגרמו לו להיות קצר, קולע ולעניין.',
    readTimeMinutes: 4,
    lastUpdated: '03/2024',
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">בשורה התחתונה: הגבילו אותו מראש</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          כברירת מחדל, ה-AI נוטה להיות מנומס מדי ולכתוב הקדמות ארוכות ("כמובן! הנה המידע שביקשת..."). כדי לחסוך זמן קריאה, תנו לו הוראות מגבילות: "ענה במשפט אחד בלבד", "בלי הקדמות", "ישר ולעניין", או "מקסימום 50 מילים". זה עובד כמו קסם.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">למה הוא חופר?</h3>
      <p>
        המודלים אומנו להיות "עוזרים מועילים". בעיני המאמנים שלהם, תשובה ארוכה ומפורטת נחשבת בדרך כלל לטובה יותר. לכן, הנטייה הטבעית שלו היא לשפוך את כל הידע שלו על הדף, להוסיף סיכום בסוף, ולהיות סופר-נחמד בהתחלה. לפעמים אנחנו פשוט רוצים "כן" או "לא".
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">דוגמה לצמצום</h3>
      <div className="space-y-4">
        <div className="bg-slate-50 p-4 rounded-xl">
          <p className="font-bold text-slate-700">שאלה רגילה:</p>
          <p className="text-sm italic">"מה ההבדל בין מניה לאג"ח?"</p>
          <p className="text-xs text-slate-500 mt-2">תוצאה: 3 פסקאות ארוכות, עם הגדרות כלכליות, היסטוריה, ודוגמאות.</p>
        </div>
        <div className="bg-green-50 p-4 rounded-xl border border-green-200">
          <p className="font-bold text-green-700">שאלה עם מגבלה:</p>
          <p className="text-sm italic">"מה ההבדל בין מניה לאג"ח? <span className="font-bold not-italic">תענה במשפט אחד פשוט למי שלא מבין בכלכלה.</span>"</p>
          <p className="text-xs text-slate-500 mt-2">תוצאה: "מניה היא בעלות חלקית על חברה, בעוד שאג"ח הוא הלוואה שאתה נותן לחברה תמורת ריבית." (בול!)</p>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מילות קסם לקיצור</h3>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>"בלי הקדמות וסיכומים":</strong> מעיף את ה"בטח, הנה התשובה" ואת ה"מקווה שעזרתי".</li>
        <li><strong>"ברשימת בולטים (Bullets)":</strong> הופך טקסט רציף לרשימה קריאה.</li>
        <li><strong>"TL;DR":</strong> (Too Long; Didn't Read) - בקשו ממנו "תן לי TL;DR של הטקסט הזה". הוא יסכם אותו לשורה אחת.</li>
        <li><strong>"רק את העובדות":</strong> מנפה את כל התיאורים והסופרלטיבים.</li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">הטעות: לחתוך יותר מדי</h3>
      <p>
        אם תבקשו "קצר מאוד", אתם עלולים לאבד מידע חשוב. תמיד עדיף לבקש "תמציתי אך מדויק" או "תתמקד בעיקר", מאשר סתם "קצר". תוודאו שלא איבדתם את הפואנטה.
      </p>
    </PlainText>
  },
  {
    id: 'privacy-safety-guide',
    categoryId: 'safety',
    title: 'המדריך לפרטיות: מה אסור בשום אופן לספר ל-AI?',
    description: 'האם מותר להעלות מסמכים רפואיים? סיסמאות? סודות מסחריים? כל מה שצריך לדעת כדי להישאר בטוחים.',
    readTimeMinutes: 5,
    lastUpdated: '01/2026',
    imageUrl: 'https://images.unsplash.com/photo-1510915361405-ef8db9036289?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-red-50 border-r-4 border-red-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-red-900 mb-2">כלל הברזל: אם זה סוד, זה לא עולה ל-AI</h3>
        <p className="text-red-800 text-sm md:text-base leading-relaxed">
          ברירת המחדל של רוב כלי ה-AI (כמו ChatGPT ו-Gemini) היא להשתמש בשיחות שלכם כדי לאמן ולשפר את המודל. המשמעות: עובד של החברה, או אפילו משתמש אחר בעתיד, עלולים תיאורטית להיחשף למידע שהזנתם.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">הרשימה השחורה: מה לא כותבים?</h3>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <p className="font-bold text-slate-800 mb-2 flex items-center gap-2">
            <Shield className="w-5 h-5 text-red-500" />
            פרטים אישיים מזהים (PII)
          </p>
          <p className="text-sm text-slate-600">תעודות זהות, מספרי אשראי, כתובות מגורים מלאות, מספרי טלפון פרטיים. גם אם ה-AI מבטיח שהוא "מאובטח", דליפות מידע קורות.</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <p className="font-bold text-slate-800 mb-2 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-red-500" />
            סודות מסחריים ועבודה
          </p>
          <p className="text-sm text-slate-600">קוד תוכנה סודי של החברה, מצגות פנימיות שטרם פורסמו, רשימות לקוחות, אסטרטגיות עסקיות רגישות. (סמסונג למדו את זה בדרך הקשה כשעובדים הדליפו קוד סודי ל-ChatGPT).</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <p className="font-bold text-slate-800 mb-2 flex items-center gap-2">
            <Brain className="w-5 h-5 text-red-500" />
            מידע רפואי ואינטימי
          </p>
          <p className="text-sm text-slate-600">סיכומי ביקור רופא, תוצאות בדיקות דם, או פרטים אינטימיים על אנשים אחרים ללא ידיעתם.</p>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך בכל זאת עובדים בטוח?</h3>
      <p>
        זה לא אומר שאי אפשר להיעזר ב-AI לעבודה, אבל צריך לעשות "התממה" (Anonymization) למידע.
      </p>
      <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-500">
        <h4 className="font-bold text-green-900 mb-2">שיטת "החלפת השמות"</h4>
        <ul className="text-sm text-green-800 space-y-2 list-disc list-inside">
          <li><strong>במקום:</strong> "כתוב מייל ללקוח יוסי כהן מחברת 'אינטל' שמסרב לשלם 50,000 שקל."</li>
          <li><strong>כתבו:</strong> "כתוב מייל ללקוח [שם בדוי] מחברת [חברה גדולה] שמסרב לשלם סכום משמעותי."</li>
        </ul>
        <p className="text-sm text-green-800 mt-2">
          אחרי שה-AI כותב את המייל, תעתיקו אותו לוורד ושם תחזירו את הפרטים האמיתיים.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">הגדרות שחובה להכיר</h3>
      <p>
        ברוב הכלים יש אפשרות לכבות את שמירת ההיסטוריה ואת השימוש במידע לאימון.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>ב-ChatGPT:</strong> חפשו בהגדרות את "Data Controls" וכבו את "Chat History & Training".</li>
        <li><strong>ב-Gemini/Google:</strong> המידע נשמר בחשבון Google שלכם, אפשר למחוק אותו דרך "My Activity".</li>
        <li><strong>בארגונים:</strong> אם יש לכם גרסת Enterprise (בתשלום ארגוני), בדרך כלל יש התחייבות שהמידע <strong>לא</strong> משמש לאימון המודל.</li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות נפוצות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם מותר להעלות תמונה שלי?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            תמונה של הפנים שלכם נחשבת מידע ביומטרי רגיש. אם אתם מעלים אותה, קחו בחשבון שהיא נשמרת בשרתים. עדיף לא להעלות תמונות של ילדים או אנשים שלא נתנו הסכמה.
          </p>
        </details>
      </div>
    </PlainText>
  }
];