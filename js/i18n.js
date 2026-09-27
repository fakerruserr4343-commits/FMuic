/* ================================================================
   FMiuc — i18n motoru | TR · EN · RU · AZ | sıfır bağımlılık
   js/i18n.js — main.js'den ÖNCE yüklenir (defer sırası önemli)
   ================================================================ */
(function () {
'use strict';

/* ---------------- TÜRKÇE ---------------- */
var TR = {
_loc:'tr-TR', _langName:'Türkçe',
_nsew:['K','G','D','B'],
_pin:'\uD83D\uDCCD Konum güncellendi — {c}',
_dlToast:'\u2B07 İndirme başladı — kurulumda "Bilinmeyen kaynaklar" iznine izin ver',
_cities:{tokyo:'Shibuya, Tokyo',paris:'Le Marais, Paris',newyork:'Brooklyn, New York',ist:'Beşiktaş, İstanbul',dubai:'Dubai Marina'},
doc_title:"FMiuc — Android'ini İstediğin Yere Taşı | GPS Konum Değiştirici",
doc_desc:'FMiuc ile Android konumunu saniyeler içinde değiştir. Işınlanma, gerçek rotalar, joystick modu, zamanlanmış hareket. Root yok, PC yok. Ücretsiz indir.',
nav_features:'Özellikler',nav_demo:'Dene',nav_how:'Nasıl Çalışır',nav_pricing:'Üyelik',nav_faq:'SSS',
nav_dl:'⬇ İndir',mob_dl:"⬇ APK'yı İndir",
hero_pill:'v1.7 güncel · sadece Android · root yok',
hero_h1:"Android'ini taşı.<br><span class=\"grad\">Nereye istersen.</span>",
hero_sub:"Telefonundaki her uygulama yeni konumunu takip eder. FMiuc ile konumunu saniyeler içinde değiştir — root yok, kablo yok, PC yok. Tek dokunuş, tam kontrol.",
hero_btn_dl:"APK'yı Ücretsiz İndir",hero_btn_plans:'Üyelik Planları',
meta1:'Android 10+',meta2:'3,4 MB',meta3:'~2 dk kurulum',meta4:'%100 Türkçe',
stat1:'İndirme',stat2:'Kullanıcı puanı',stat3:'WhatsApp desteği',
chip1:'Işınlanma: 0,8 sn',chip2:'Joystick: AÇIK',chip3:'Rota: %72 tamamlandı',
p_acc:'HASSASİYET 3m',p_active:'AKTİF',p_city:'Shibuya, Tokyo',p_go:'Işınlan',p_stop:'Sıfırla',
coord_default:'35.6595° K, 139.7005° D',
tick1:'Tokyo',tick2:'Paris',tick3:'New York',tick4:'İstanbul',tick5:'Londra',tick6:'Dubai',tick7:'Roma',tick8:'Berlin',
feat_label:'Yaptığı her şey',
feat_title:'Tek uygulama. <span class="grad">Tam kontrol.</span>',
feat_desc:'Kanepeden tek dokunuşla dünyayı gez — ya da planını kur ve kendi kendine hareket etsin. FMiuc, güçlü konum araçlarını sade bir arayüzde toplar.',
f1n:'Işınlanma',f1d:'Adres yaz ya da haritaya dokun. Telefonundaki her uygulama yeni konumu saniyeler içinde okur.',
f2n:'Gerçek Rotalar',f2d:'Başlangıç, varış ve hız seç. Telefonun gerçek yollarda, doğal duraklarla ilerler.',
f3n:'Joystick Modu',f3d:'Başparmağınla yürü. Ayarladığın hızda, istediğin yönde hareket et — ekran kapalıyken bile.',
f4n:'Zamanlanmış Hareket',f4d:"Bir hareketi kaydet, seçtiğin saatte kendiliğinden başlasın. Sabah 09:00'da ofiste olabilirsin.",
f5n:'Anında Sıfırla',f5d:'Tek dokunuşla gerçek GPS konumuna dön. Panic butonu her zaman tek dokunuş uzağında.',
f6n:'3m Hassasiyet',f6d:'Milimetrik konum ayarı. Koordinat girişiyle nokta atışı yer belirle, hassasiyeti kendin seç.',
demo_label:'Canlı demo',demo_title:'Cihazına kurmadan <span class="grad">dene.</span>',
demo_desc:'Aşağıdaki haritaya dokun — FMiuc nasıl çalışır, saniyeler içinde gör. Bu sadece bir önizleme; gerçek uygulama çok daha fazlasını yapar.',
demo_hint:'Haritaya dokun — pin seninle gelsin',demo_status:'YENİ KONUM AKTİF',demo_h3:'Canlı konum',
demo_city:'Shibuya, Tokyo',
demo_note:"Uygulamada bu ekran çok daha güçlü: arama, koordinat girişi, kayıtlı konumlar, rotalar ve zamanlama. Hepsine v1.7'de erişiyorsun.",
city1:'Tokyo',city2:'Paris',city3:'New York',city4:'İstanbul',city5:'Dubai',
how_label:'Nasıl çalışır',how_title:'İki dakikada kur,<br><span class="grad">sonsuza dek kullan.</span>',
how_desc:"PC gerekmez, root gerekmez. FMiuc, Android'in kendi resmi \"sahte konum\" API'sini kullanır — tamamen resmi yöntem.",
s1n:"APK'yı indir ve kur",s1d:"GitHub'daki resmi repodan APK'yı indir. Kurulum sırasında \"Bilinmeyen kaynaklar\" iznini onayla — tek seferlik, tamamen normal.",
s2n:'Sahte konum iznini ver',s2d:"Android'in resmi yöntemi: geliştirici seçeneklerinden FMiuc'u sahte konum uygulaması olarak seç. Root yok, garanti etkilenmez.",
step_code:'Ayarlar › Geliştirici seçenekleri › Sahte konum uygulaması',
s3n:'Noktayı seç, başla',s3d:'Uygulamayı aç, haritadan yerini seç ve tek dokunuşla aktifleştir. Dilediğin an tek dokunuşla gerçek konumuna dön.',
dl_label:'İndirme',dl_title:'Uygulamayı <span class="grad">edin.</span>',
dl_desc:'Sadece Android. Doğrudan GitHub repomuzdan — aracı yok, kısayol yok.',
dl_sub:'Son sürüm · Android 10 ve üzeri',
spec1:'<b>3,4 MB</b> APK boyutu',spec2:'<b>Android 10+</b> destek',spec3:'<b>%100</b> Türkçe',spec4:'<b>GitHub</b> doğrudan indirme',
dl_btn:"APK'YI İNDİR",
dl_mirror:'Yedek bağlantı: <a href="FMiuc-v1.7.apk" download="FMiuc-v1.7.apk">Netlify üzerinden indir</a>',
dl_warn:'Kurulum sırasında tarayıcı "bu dosya bilinmeyen bir kaynaktan geliyor" diyebilir — normaldir. Dosya doğrudan resmi GitHub repomuzdan gelir.',
compat_h3:'Uyumluluk',cs1:'10, 11, 12, 13, 14, 15, 16 — tüm markalar',cs2:'iPhone / iPad',cs3:'PC / Laptop',
st_on:'Aktif',st_off:'Yakında',
compat_note:"iOS ve PC sürümleri şu an planımızda yok — tüm odak Android'de. Çıkarsa buradan duyurulur.",
pr_label:'Üyelik Planları',pr_title:"Süreni seç. Gerisini <span class=\"grad\">WhatsApp'ta hallederiz.</span>",
pr_desc:"Plan butonuna bas — mesajın hazır olarak WhatsApp'a gitsin. Fiyat, ödeme ve aktivasyon tek sohbette.",
tag_pop:'⭐ En Popüler',tag_best:'En Avantajlı',
plan1:'Haftalık',plan2:'Aylık',plan3:'Yıllık',plan4:'Sonsuz',
dur1:'7 gün erişim',dur2:'30 gün erişim',dur3:'365 gün erişim',dur4:'Süresiz erişim',
price_val:"<span class=\"grad\">WhatsApp'ta</span>",
sub1:'Fiyat & aktivasyon: 1 mesaj uzağında',sub2:'Fiyat & aktivasyon: 1 mesaj uzağında',sub3:'Fiyat & aktivasyon: 1 mesaj uzağında',sub4:'Tek seferlik · ömür boyu',
pf1:'Sınırsız konum değişimi',pf2:'Işınlanma + Joystick modu',pf3:'7/24 WhatsApp desteği',
pf4:'Haftalık planın tümü',pf5:'Gerçek rotalar + zamanlanmış hareket',pf6:'Öncelikli destek',
pf7:'Aylık planın tümü',pf8:'Erken erişim güncellemeleri',pf9:'Özel beta sürümleri',
pf10:'Yıllık planın tümü',pf11:'Ömür boyu güncelleme',pf12:'Dilediğin cihaza kişisel lisans',
pb_buy:"WhatsApp'tan Satın Al",pb_now:'Hemen Satın Al',
wa_strip:'💬 Kararsız mısın? Planına karar vermeden önce <a href="#" target="_blank" rel="noopener">bana yazabilirsin</a> — 7/24 yanıt.',
faq_label:'SSS',faq_title:'Aklına <span class="grad">takılanlar.</span>',
faq_desc:"Aradığın cevap burada yoksa WhatsApp'tan sor — dakikalar içinde döneriz.",
q1:'Root izni gerekiyor mu?',
a1:"Hayır. FMiuc, Android'in geliştirici seçeneklerindeki resmi \"sahte konum bilgileri\" API'sini kullanır. Cihazının garantisi ve sistem güncellemeleri hiçbir şekilde etkilenmez.",
q2:'Uygulamalar sahte konumu fark edebilir mi?',
a2:"FMiuc resmi Android API'sini kullandığı için konum, sistem düzeyinde gerçek bir GPS sinyali gibi görünür. Haritalar, sosyal medya ve mesajlaşma uygulamaları yeni konumu tamamen normal şekilde okur.",
q3:'Hangi cihazlar destekleniyor?',
a3:"Android 10 ve üzeri tüm sürümler (10'dan 16'ya). Samsung, Xiaomi, Oppo, Pixel, Huawei ve tüm ana markalarla uyumludur.",
q4:"Neden Play Store'da yok?",
a4:"Konum değiştirme uygulamaları Google Play politikaları gereği mağazada yayınlanamıyor. Bu yüzden APK'yı doğrudan resmi GitHub repomuzdan paylaşıyoruz — aracı yok, kısaltma yok.",
q5:'Verilerim güvende mi?',
a5:"Evet. FMiuc konum verilerini cihazından dışarı göndermez; hesap açmayı da gerektirmez. Kayıtlı konumların yalnızca senin telefonunda saklanır.",
q6:'Nasıl satın alırım?',
a6:"Üyelik planlarından birine bas — WhatsApp mesajın hazır olarak açılır. Fiyat ve ödeme yöntemini orada konuşuyor, aktivasyonu birkaç dakika içinde tamamlıyoruz.",
cta_title:'İki dakika sonra,<br><span class="grad">istediğin yerde olabilirsin.</span>',
cta_sub:'İndir, kur, konumunu seç. Gerisi bir dokunuş.',
cta_dl:"APK'yı İndir",cta_wa:"WhatsApp'tan Yaz",
foot_tag:'Konum özgürlüğü için tasarlandı. Sadece Android.',
foot_site:'Site',foot_contact:'İletişim',
fl1:'Özellikler',fl2:'Canlı demo',fl3:'Nasıl çalışır',fl4:'İndir',fl5:'Üyelik',fl6:'SSS',
fl_wa:'WhatsApp: +994 70 850 25 10',fl_github:'GitHub reposu',
foot_disc:"FMiuc'u yalnızca sahibi olduğun cihazlarda kullan. Konum değiştirme, bazı uygulamaların kullanım koşullarını ihlal edebilir — sorumluluk kullanıcıya aittir.",
foot_copy1:'© <span id="year">2026</span> FMiuc · v1.7 · Sadece Android',
foot_copy2:"Dünyanın her yerinden erişim — evinden ayrılmadan.",
wa_hello:'Merhaba! FMiuc hakkında bilgi almak istiyorum.',
wa_week:'Merhaba! FMiuc HAFTALIK üyelik planını satın almak istiyorum. Fiyat ve aktivasyon bilgisi paylaşabilir misiniz?',
wa_month:'Merhaba! FMiuc AYLIK üyelik planını satın almak istiyorum. Fiyat ve aktivasyon bilgisi paylaşabilir misiniz?',
wa_year:'Merhaba! FMiuc YILLIK üyelik planını satın almak istiyorum. Fiyat ve aktivasyon bilgisi paylaşabilir misiniz?',
wa_life:'Merhaba! FMiuc SONSUZ üyelik planını satın almak istiyorum. Fiyat ve aktivasyon bilgisi paylaşabilir misiniz?',
wa_plans:'Merhaba! FMiuc üyelik planları hakkında sorularım var.'
};
/* ---------------- ENGLISH ---------------- */
var EN = {
_loc:'en-US', _langName:'English',
_nsew:['N','S','E','W'],
_pin:'\uD83D\uDCCD Location updated — {c}',
_dlToast:'\u2B07 Download started — allow "Unknown sources" permission when installing',
_cities:{tokyo:'Shibuya, Tokyo',paris:'Le Marais, Paris',newyork:'Brooklyn, New York',ist:'Beşiktaş, İstanbul',dubai:'Dubai Marina'},
doc_title:'FMiuc — Move Your Android Anywhere | GPS Location Changer',
doc_desc:'Change your Android location in seconds with FMiuc. Teleport, real routes, joystick mode, scheduled movement. No root, no PC. Download free.',
nav_features:'Features',nav_demo:'Try it',nav_how:'How it works',nav_pricing:'Membership',nav_faq:'FAQ',
nav_dl:'⬇ Download',mob_dl:'⬇ Download APK',
hero_pill:'v1.7 latest · Android only · no root',
hero_h1:'Move your Android.<br><span class="grad">Anywhere you want.</span>',
hero_sub:'Every app on your phone follows your new location. Change your spot in seconds with FMiuc — no root, no cable, no PC. One tap, full control.',
hero_btn_dl:'Download APK — Free',hero_btn_plans:'Membership Plans',
meta1:'Android 10+',meta2:'3.4 MB',meta3:'~2 min setup',meta4:'100% free',
stat1:'Downloads',stat2:'User rating',stat3:'WhatsApp support',
chip1:'Teleport: 0.8 s',chip2:'Joystick: ON',chip3:'Route: 72% done',
p_acc:'PRECISION 3m',p_active:'ACTIVE',p_city:'Shibuya, Tokyo',p_go:'Teleport',p_stop:'Reset',
coord_default:'35.6595° N, 139.7005° E',
tick1:'Tokyo',tick2:'Paris',tick3:'New York',tick4:'İstanbul',tick5:'London',tick6:'Dubai',tick7:'Rome',tick8:'Berlin',
feat_label:'Everything it does',
feat_title:'One app. <span class="grad">Full control.</span>',
feat_desc:'Travel the world from your couch in one tap — or set a plan and let it move on its own. FMiuc packs powerful location tools into a simple interface.',
f1n:'Teleport',f1d:'Type an address or tap the map. Every app on your phone reads the new location within seconds.',
f2n:'Real Routes',f2d:'Pick start, destination and speed. Your phone moves along real roads with natural stops.',
f3n:'Joystick Mode',f3d:'Walk with your thumb. Move in any direction at your chosen speed — even with the screen off.',
f4n:'Scheduled Movement',f4d:'Record a move and it starts by itself at the hour you pick. You can be at the office at 09:00 sharp.',
f5n:'Instant Reset',f5d:'Return to your real GPS location with one tap. The panic button is always one touch away.',
f6n:'3m Precision',f6d:'Millimetre-level location control. Set exact coordinates and choose your own precision.',
demo_label:'Live demo',demo_title:'Try it <span class="grad">before installing.</span>',
demo_desc:'Tap the map below — see how FMiuc works in seconds. This is just a preview; the real app does far more.',
demo_hint:'Tap the map — the pin follows you',demo_status:'NEW LOCATION ACTIVE',demo_h3:'Live location',
demo_city:'Shibuya, Tokyo',
demo_note:'In the app this screen is far more powerful: search, coordinate entry, saved spots, routes and scheduling. All included in v1.7.',
city1:'Tokyo',city2:'Paris',city3:'New York',city4:'İstanbul',city5:'Dubai',
how_label:'How it works',how_title:'Set up in two minutes,<br><span class="grad">use it forever.</span>',
how_desc:'No PC, no root. FMiuc uses Android\u2019s own official "mock location" API — a completely legitimate method.',
s1n:'Download & install the APK',s1d:'Get the APK from our official GitHub repo. Confirm the "Unknown sources" permission during install — one-time and totally normal.',
s2n:'Grant mock location access',s2d:'Android\u2019s official way: in developer options, select FMiuc as the mock location app. No root, warranty untouched.',
step_code:'Settings › Developer options › Mock location app',
s3n:'Pick a spot, go',s3d:'Open the app, choose your spot on the map and activate with one tap. Return to your real location any time, just as fast.',
dl_label:'Download',dl_title:'Get the <span class="grad">app.</span>',
dl_desc:'Android only. Straight from our GitHub repo — no middlemen, no shortcuts.',
dl_sub:'Latest version · Android 10 and up',
spec1:'<b>3.4 MB</b> APK size',spec2:'<b>Android 10+</b> support',spec3:'<b>100%</b> free',spec4:'<b>GitHub</b> direct download',
dl_btn:'DOWNLOAD APK',
dl_mirror:'Mirror link: <a href="FMiuc-v1.7.apk" download="FMiuc-v1.7.apk">Download via Netlify</a>',
dl_warn:'Your browser may say "this file comes from an unknown source" during install — that\u2019s normal. The file comes straight from our official GitHub repo.',
compat_h3:'Compatibility',cs1:'10, 11, 12, 13, 14, 15, 16 — all brands',cs2:'iPhone / iPad',cs3:'PC / Laptop',
st_on:'Active',st_off:'Coming soon',
compat_note:'iOS and PC builds are not on our roadmap right now — all focus is on Android. If that changes, we\u2019ll announce it here.',
pr_label:'Membership Plans',pr_title:'Pick your duration. We handle the rest <span class="grad">on WhatsApp.</span>',
pr_desc:'Tap a plan — your message opens in WhatsApp, ready to send. Price, payment and activation in a single chat.',
tag_pop:'⭐ Most Popular',tag_best:'Best Value',
plan1:'Weekly',plan2:'Monthly',plan3:'Yearly',plan4:'Lifetime',
dur1:'7 days of access',dur2:'30 days of access',dur3:'365 days of access',dur4:'Unlimited access',
price_val:'<span class="grad">On WhatsApp</span>',
sub1:'Price & activation: one message away',sub2:'Price & activation: one message away',sub3:'Price & activation: one message away',sub4:'One-time · lifetime',
pf1:'Unlimited location changes',pf2:'Teleport + Joystick mode',pf3:'24/7 WhatsApp support',
pf4:'Everything in Weekly',pf5:'Real routes + scheduled moves',pf6:'Priority support',
pf7:'Everything in Monthly',pf8:'Early-access updates',pf9:'Exclusive beta builds',
pf10:'Everything in Yearly',pf11:'Lifetime updates',pf12:'Personal license for your devices',
pb_buy:'Buy via WhatsApp',pb_now:'Buy Now',
wa_strip:'💬 Not sure? <a href="#" target="_blank" rel="noopener">Message me</a> before you decide — replies 24/7.',
faq_label:'FAQ',faq_title:'Things you <span class="grad">might ask.</span>',
faq_desc:'Don\u2019t see your answer? Ask on WhatsApp — we reply within minutes.',
q1:'Does it require root?',
a1:'No. FMiuc uses the official "mock location" API built into Android\u2019s developer options. Your warranty and system updates are never affected.',
q2:'Can apps detect the fake location?',
a2:'Because FMiuc uses the official Android API, the location looks like a real GPS signal at system level. Maps, social apps and messengers read the new location as completely normal.',
q3:'Which devices are supported?',
a3:'Every Android 10 and newer (10 through 16). Works with Samsung, Xiaomi, Oppo, Pixel, Huawei and all major brands.',
q4:'Why isn\u2019t it on the Play Store?',
a4:'Location-spoofing apps aren\u2019t allowed on Google Play. That\u2019s why we share the APK directly from our official GitHub repo — no middlemen, no link shorteners.',
q5:'Is my data safe?',
a5:'Yes. FMiuc never sends your location data anywhere and requires no account. Your saved spots stay on your phone only.',
q6:'How do I buy?',
a6:'Tap any plan — your WhatsApp message opens ready to send. We settle price and payment right there, and activation takes just a few minutes.',
cta_title:'In two minutes,<br><span class="grad">you could be anywhere.</span>',
cta_sub:'Download, install, pick a spot. The rest is one tap.',
cta_dl:'Download APK',cta_wa:'Message on WhatsApp',
foot_tag:'Designed for location freedom. Android only.',
foot_site:'Explore',foot_contact:'Contact',
fl1:'Features',fl2:'Live demo',fl3:'How it works',fl4:'Download',fl5:'Membership',fl6:'FAQ',
fl_wa:'WhatsApp: +994 70 850 25 10',fl_github:'GitHub repo',
foot_disc:'Use FMiuc only on devices you own. Location spoofing may violate the terms of some apps — responsibility lies with the user.',
foot_copy1:'© <span id="year">2026</span> FMiuc · v1.7 · Android only',
foot_copy2:'Access from anywhere in the world — without leaving home.',
wa_hello:'Hello! I would like to get more information about FMiuc.',
wa_week:'Hello! I would like to purchase the FMiuc WEEKLY plan. Could you share the price and activation details?',
wa_month:'Hello! I would like to purchase the FMiuc MONTHLY plan. Could you share the price and activation details?',
wa_year:'Hello! I would like to purchase the FMiuc YEARLY plan. Could you share the price and activation details?',
wa_life:'Hello! I would like to purchase the FMiuc LIFETIME plan. Could you share the price and activation details?',
wa_plans:'Hello! I have a few questions about FMiuc membership plans.'
};
/* ---------------- РУССКИЙ ---------------- */
var RU = {
_loc:'ru-RU', _langName:'Русский',
_nsew:['С','Ю','В','З'],
_pin:'\uD83D\uDCCD Локация обновлена — {c}',
_dlToast:'\u2B07 Загрузка началась — разреши «Неизвестные источники» при установке',
_cities:{tokyo:'Сибуя, Токио',paris:'Марэ, Париж',newyork:'Бруклин, Нью-Йорк',ist:'Бешикташ, Стамбул',dubai:'Марина, Дубай'},
doc_title:'FMiuc — Перенеси свой Android куда угодно | Смена GPS-локации',
doc_desc:'Меняй локацию Android за секунды с FMiuc. Телепорт, реалистичные маршруты, джойстик, движение по расписанию. Без root, без ПК. Скачать бесплатно.',
nav_features:'Возможности',nav_demo:'Попробовать',nav_how:'Как работает',nav_pricing:'Тарифы',nav_faq:'Вопросы',
nav_dl:'⬇ Скачать',mob_dl:'⬇ Скачать APK',
hero_pill:'v1.7 обновлена · только Android · без root',
hero_h1:'Перенеси свой Android<br><span class="grad">куда угодно.</span>',
hero_sub:'Каждое приложение на телефоне увидит новое место. Меняй локацию за секунды с FMiuc — без root, без кабеля, без ПК. Одно касание — полный контроль.',
hero_btn_dl:'Скачать APK бесплатно',hero_btn_plans:'Тарифы',
meta1:'Android 10+',meta2:'3,4 МБ',meta3:'~2 мин установки',meta4:'100% бесплатно',
stat1:'Загрузки',stat2:'Рейтинг',stat3:'Поддержка WhatsApp',
chip1:'Телепорт: 0,8 с',chip2:'Джойстик: ВКЛ',chip3:'Маршрут: 72% готов',
p_acc:'ТОЧНОСТЬ 3 м',p_active:'АКТИВ',p_city:'Сибуя, Токио',p_go:'Телепорт',p_stop:'Сброс',
coord_default:'35.6595° С, 139.7005° В',
tick1:'Токио',tick2:'Париж',tick3:'Нью-Йорк',tick4:'Стамбул',tick5:'Лондон',tick6:'Дубай',tick7:'Рим',tick8:'Берлин',
feat_label:'Всё, что умеет',
feat_title:'Одно приложение. <span class="grad">Полный контроль.</span>',
feat_desc:'Путешествуй по миру одним касанием — или задай план, и телефон поедет сам. FMiuc собрал мощные инструменты локации в простом интерфейсе.',
f1n:'Телепорт',f1d:'Введи адрес или коснись карты. Каждое приложение на телефоне прочитает новое место за секунды.',
f2n:'Реальные маршруты',f2d:'Выбери старт, финиш и скорость. Телефон едет по настоящим дорогам с естественными остановками.',
f3n:'Режим джойстика',f3d:'Гуляй большим пальцем. Двигайся в любую сторону с выбранной скоростью — даже при выключенном экране.',
f4n:'Движение по расписанию',f4d:'Запиши перемещение — оно начнётся само в выбранное время. В 09:00 ты уже «в офисе».',
f5n:'Мгновенный сброс',f5d:'Одно касание — и ты снова на реальной GPS-локации. Кнопка паники всегда под рукой.',
f6n:'Точность 3 м',f6d:'Миллиметровая настройка позиции. Задай точные координаты и выбери нужную точность.',
demo_label:'Живое демо',demo_title:'Попробуй <span class="grad">без установки.</span>',
demo_desc:'Коснись карты ниже — и за секунды увидишь, как работает FMiuc. Это лишь превью; приложение умеет гораздо больше.',
demo_hint:'Коснись карты — пин последует',demo_status:'НОВАЯ ЛОКАЦИЯ АКТИВНА',demo_h3:'Текущая локация',
demo_city:'Сибуя, Токио',
demo_note:'В приложении этот экран намного мощнее: поиск, ввод координат, сохранённые места, маршруты и расписание. Всё это уже в v1.7.',
city1:'Токио',city2:'Париж',city3:'Нью-Йорк',city4:'Стамбул',city5:'Дубай',
how_label:'Как работает',how_title:'Установка за две минуты —<br><span class="grad">пользуйся вечно.</span>',
how_desc:'Без ПК, без root. FMiuc использует официальный API Android «фиктивных местоположений» — полностью легальный метод.',
s1n:'Скачай и установи APK',s1d:'Скачай APK из нашего официального репозитория на GitHub. Разреши «Неизвестные источники» при установке — это одноразово и нормально.',
s2n:'Разреши фиктивную локацию',s2d:'Официальный способ Android: в меню для разработчиков выбери FMiuc как приложение фиктивных местоположений. Без root, гарантия не страдает.',
step_code:'Настройки › Для разработчиков › Фиктивные местоположения',
s3n:'Выбери точку — вперёд',s3d:'Открой приложение, выбери место на карте и включи одним касанием. Вернёшься к реальной локации так же быстро.',
dl_label:'Скачать',dl_title:'Получи <span class="grad">приложение.</span>',
dl_desc:'Только Android. Напрямую из нашего репозитория GitHub — без посредников.',
dl_sub:'Последняя версия · Android 10+',
spec1:'<b>3,4 МБ</b> размер APK',spec2:'<b>Android 10+</b> поддержка',spec3:'<b>100%</b> бесплатно',spec4:'<b>GitHub</b> прямая загрузка',
dl_btn:'СКАЧАТЬ APK',
dl_mirror:'Резервная ссылка: <a href="FMiuc-v1.7.apk" download="FMiuc-v1.7.apk">Скачать через Netlify</a>',
dl_warn:'Браузер может предупредить, что «файл из неизвестного источника» — это нормально. Файл идёт напрямую из нашего официального репозитория GitHub.',
compat_h3:'Совместимость',cs1:'10, 11, 12, 13, 14, 15, 16 — все бренды',cs2:'iPhone / iPad',cs3:'ПК / ноутбук',
st_on:'Активно',st_off:'Скоро',
compat_note:'Версии для iOS и ПК сейчас не планируются — весь фокус на Android. Если что-то изменится, объявим здесь.',
pr_label:'Тарифные планы',pr_title:'Выбери срок. Остальное <span class="grad">решим в WhatsApp.</span>',
pr_desc:'Нажми на тариф — сообщение в WhatsApp откроется уже готовым. Цена, оплата и активация — в одном чате.',
tag_pop:'⭐ Популярный',tag_best:'Выгодный',
plan1:'Недельный',plan2:'Месячный',plan3:'Годовой',plan4:'Навсегда',
dur1:'7 дней доступа',dur2:'30 дней доступа',dur3:'365 дней доступа',dur4:'Бессрочный доступ',
price_val:'<span class="grad">В WhatsApp</span>',
sub1:'Цена и активация: одно сообщение',sub2:'Цена и активация: одно сообщение',sub3:'Цена и активация: одно сообщение',sub4:'Разовый платёж · навсегда',
pf1:'Безлимитная смена локации',pf2:'Телепорт + джойстик',pf3:'Поддержка WhatsApp 24/7',
pf4:'Всё из недельного',pf5:'Реальные маршруты + расписание',pf6:'Приоритетная поддержка',
pf7:'Всё из месячного',pf8:'Ранний доступ к обновлениям',pf9:'Эксклюзивные беты',
pf10:'Всё из годового',pf11:'Обновления навсегда',pf12:'Личная лицензия на твои устройства',
pb_buy:'Купить в WhatsApp',pb_now:'Купить сейчас',
wa_strip:'💬 Сомневаешься? <a href="#" target="_blank" rel="noopener">Напиши мне</a> до выбора тарифа — отвечаем 24/7.',
faq_label:'Вопросы',faq_title:'Что часто <span class="grad">спрашивают.</span>',
faq_desc:'Нет твоего вопроса? Напиши в WhatsApp — ответим за минуты.',
q1:'Нужен ли root-доступ?',
a1:'Нет. FMiuc использует официальный API Android «фиктивных местоположений» из меню для разработчиков. Гарантия устройства и системные обновления никак не страдают.',
q2:'Могут ли приложения распознать фейковую локацию?',
a2:'FMiuc работает через официальный API Android, поэтому локация выглядит как настоящий GPS-сигнал на уровне системы. Карты, соцсети и мессенджеры читают новое место как обычное.',
q3:'Какие устройства поддерживаются?',
a3:'Все версии Android 10 и новее (10–16). Совместим с Samsung, Xiaomi, Oppo, Pixel, Huawei и другими основными брендами.',
q4:'Почему нет в Play Store?',
a4:'Приложения для смены локации не проходят правила Google Play. Поэтому APK распространяется напрямую из нашего официального репозитория на GitHub — без посредников и сокращённых ссылок.',
q5:'Мои данные в безопасности?',
a5:'Да. FMiuc не отправляет данные о местоположении наружу и не требует регистрации. Сохранённые локации хранятся только на твоём телефоне.',
q6:'Как купить?',
a6:'Нажми на любой тариф — сообщение в WhatsApp откроется уже готовым. Цену и способ оплаты обсудим там же, активация занимает пару минут.',
cta_title:'Через две минуты<br><span class="grad">ты можешь быть где угодно.</span>',
cta_sub:'Скачай, установи, выбери точку. Остальное — одно касание.',
cta_dl:'Скачать APK',cta_wa:'Написать в WhatsApp',
foot_tag:'Создан для свободы локации. Только Android.',
foot_site:'Разделы',foot_contact:'Контакты',
fl1:'Возможности',fl2:'Живое демо',fl3:'Как работает',fl4:'Скачать',fl5:'Тарифы',fl6:'Вопросы',
fl_wa:'WhatsApp: +994 70 850 25 10',fl_github:'Репозиторий GitHub',
foot_disc:'Используй FMiuc только на своих устройствах. Смена локации может нарушать правила некоторых приложений — ответственность на пользователе.',
foot_copy1:'© <span id="year">2026</span> FMiuc · v1.7 · Только Android',
foot_copy2:'Доступ из любой точки мира — не выходя из дома.',
wa_hello:'Привет! Хочу узнать больше о FMiuc.',
wa_week:'Привет! Хочу купить НЕДЕЛЬНЫЙ тариф FMiuc. Поделись ценой и деталями активации?',
wa_month:'Привет! Хочу купить МЕСЯЧНЫЙ тариф FMiuc. Поделись ценой и деталями активации?',
wa_year:'Привет! Хочу купить ГОДОВОЙ тариф FMiuc. Поделись ценой и деталями активации?',
wa_life:'Привет! Хочу купить бессрочный тариф FMiuc (НАВСЕГДА). Поделись ценой и деталями активации?',
wa_plans:'Привет! У меня есть вопросы по тарифам FMiuc.'
};
/* ---------------- AZƏRBAYCANCA ---------------- */
var AZ = {
_loc:'az-AZ', _langName:'Azərbaycanca',
_nsew:['Şm','Cn','Şr','Qr'],
_pin:'\uD83D\uDCCD Yer yeniləndi — {c}',
_dlToast:'\u2B07 Yükləmə başladı — quraşdırma zamanı "Naməlum mənbələr" icazəsi ver',
_cities:{tokyo:'Şibuya, Tokio',paris:'Marais, Paris',newyork:'Bruklin, Nyu-York',ist:'Beşiktaş, İstanbul',dubai:'Marina, Dubai'},
doc_title:"FMiuc — Android'ini İstədiyin Yerə Daşı | GPS Yer Dəyişdirici",
doc_desc:"FMiuc ilə Android yerini saniyələr içində dəyiş. Teleport, real marşrutlar, joystick, vaxtlanmış hərəkət. Root yox, PC yox. Pulsuz yüklə.",
nav_features:'Xüsusiyyətlər',nav_demo:'Sına',nav_how:'Necə İşləyir',nav_pricing:'Abunəlik',nav_faq:'TSS',
nav_dl:'⬇ Yüklə',mob_dl:'⬇ APK-nı Yüklə',
hero_pill:'v1.7 yenidir · yalnız Android · rootsuz',
hero_h1:"Android'ini daşı.<br><span class=\"grad\">İstədiyin yerə.</span>",
hero_sub:'Telefonundakı hər tətbiq yeni yerinizi izləyir. FMiuc ilə yerinizi saniyələr içində dəyişin — root yox, kabel yox, PC yox. Bir toxunuş, tam nəzarət.',
hero_btn_dl:'APK-nı Pulsuz Yüklə',hero_btn_plans:'Abunəlik Planları',
meta1:'Android 10+',meta2:'3,4 MB',meta3:'~2 dəq quraşdırma',meta4:'%100 pulsuz',
stat1:'Yükləmə',stat2:'İstifadəçi reytinqi',stat3:'WhatsApp dəstəyi',
chip1:'Teleport: 0,8 san',chip2:'Joystick: AÇIQ',chip3:'Marşrut: 72% hazır',
p_acc:'DƏQİQLİK 3m',p_active:'AKTİV',p_city:'Şibuya, Tokio',p_go:'İşınla',p_stop:'Sıfırla',
coord_default:'35.6595° Şm, 139.7005° Şr',
tick1:'Tokio',tick2:'Paris',tick3:'Nyu-York',tick4:'İstanbul',tick5:'London',tick6:'Dubai',tick7:'Roma',tick8:'Berlin',
feat_label:'Etdiyi hər şey',
feat_title:'Bir tətbiq. <span class="grad">Tam nəzarət.</span>',
feat_desc:'Bir toxunuşla dünyanı gəz — ya da plan qur, özü hərəkət etsin. FMiuc güclü yer alətlərini sadə interfeysdə toplayır.',
f1n:'Teleport',f1d:'Ünvan yaz ya da xəritəyə toxun. Telefonundakı hər tətbiq yeni yeri saniyələr içində oxuyur.',
f2n:'Real Marşrutlar',f2d:'Başlanğıc, təyinat və sürət seç. Telefonun real yollarda, təbii dayanacaqlarla irəliləyir.',
f3n:'Joystick Rejimi',f3d:'Baş barmağınla gəz. Ayarladığın sürətdə, istədiyin istiqamətdə hərəkət et — ekran bağlı olsa da.',
f4n:'Zamanlanmış Hərəkət',f4d:'Bir hərəkəti qeyd et — seçdiyin saatda özü başlasın. Səhər 09:00-da ofisdə ola bilərsən.',
f5n:'Anında Sıfırla',f5d:'Bir toxunuşla real GPS yerinə qayıt. Panik düyməsi hər zaman bir toxunuş uzağında.',
f6n:'3m Dəqiqlik',f6d:'Millimetrik yer ayarı. Koordinat girişi ilə nöqtə atışı yer müəyyənləşdir, dəqiqliyi özün seç.',
demo_label:'Canlı demo',demo_title:'Quraşdırmadan <span class="grad">sına.</span>',
demo_desc:'Aşağıdakı xəritəyə toxun — FMiuc-un necə işlədiyini saniyələr içində gör. Bu yalnız önizləmədir; real tətbiq daha çoxunu edir.',
demo_hint:'Xəritəyə toxun — pin səninlə gəlsin',demo_status:'YENİ YER AKTİV',demo_h3:'Canlı yer',
demo_city:'Şibuya, Tokio',
demo_note:'Tətbiqdə bu ekran daha güclüdür: axtarış, koordinat girişi, saxlanmış yerlər, marşrutlar və vaxtlama. Hamısı v1.7-dədir.',
city1:'Tokio',city2:'Paris',city3:'Nyu-York',city4:'İstanbul',city5:'Dubai',
how_label:'Necə işləyir',how_title:'İki dəqiqədə qur,<br><span class="grad">sonsuzadək istifadə et.</span>',
how_desc:"PC lazım deyil, root lazım deyil. FMiuc, Android-in öz rəsmi \"saxta məkan\" API-sindən istifadə edir — tamamilə rəsmi üsul.",
s1n:"APK-nı yüklə və qur",s1d:"Rəsmi GitHub repomuzdan APK-nı yüklə. Quraşdırma zamanı \"Naməlum mənbələr\" icazəsini təsdiqlə — bir dəfəlik, tamamilə normal.",
s2n:'Saxta yer icazəsi ver',s2d:"Android-in rəsmi üsulu: tərtibatçı seçimlərindən FMiuc-u saxta məkan tətbiqi kimi seç. Root yox, zəmanət təsirlənmir.",
step_code:'Parametrlər › Tərtibatçı seçimləri › Saxta məkan tətbiqi',
s3n:'Nöqtəni seç, başla',s3d:'Tətbiqi aç, xəritədən yerini seç və bir toxunuşla aktivləşdir. İstədiyin an bir toxunuşla real yerinə qayıt.',
dl_label:'Yükləmə',dl_title:'Tətbiqi <span class="grad">əldə et.</span>',
dl_desc:'Yalnız Android. Birbaşa GitHub repomuzdan — arayıcı yox, qısayol yox.',
dl_sub:'Son versiya · Android 10 və yuxarı',
spec1:'<b>3,4 MB</b> APK ölçüsü',spec2:'<b>Android 10+</b> dəstəyi',spec3:'<b>%100</b> pulsuz',spec4:'<b>GitHub</b> birbaşa yükləmə',
dl_btn:'APK-NI YÜKLƏ',
dl_mirror:'Ehtiyat link: <a href="FMiuc-v1.7.apk" download="FMiuc-v1.7.apk">Netlify ilə yüklə</a>',
dl_warn:'Quraşdırma zamanı brauzer "bu fayl naməlum mənbədən gəlir" deyə bilər — normaldır. Fayl birbaşa rəsmi GitHub repomuzdan gəlir.',
compat_h3:'Uyğunluq',cs1:'10, 11, 12, 13, 14, 15, 16 — bütün markalar',cs2:'iPhone / iPad',cs3:'PC / Laptop',
st_on:'Aktiv',st_off:'Tezlikdə',
compat_note:'iOS və PC versiyaları hazırda planımızda yoxdur — bütün diqqət Androiddədir. Olarsa, buradan elan edilər.',
pr_label:'Abunəlik Planları',pr_title:"Müddətini seç. Gerisini <span class=\"grad\">WhatsApp'da həll edərik.</span>",
pr_desc:"Plan düyməsinə bas — mesajın hazır şəkildə WhatsApp-a açılsın. Qiymət, ödəniş və aktivasiya bir söhbətdə.",
tag_pop:'⭐ Ən Populyar',tag_best:'Ən Sərfəli',
plan1:'Həftəlik',plan2:'Aylıq',plan3:'İllik',plan4:'Sonsuz',
dur1:'7 günlük giriş',dur2:'30 günlük giriş',dur3:'365 günlük giriş',dur4:'Limitsiz giriş',
price_val:"<span class=\"grad\">WhatsApp'da</span>",
sub1:'Qiymət & aktivasiya: 1 mesaj uzağında',sub2:'Qiymət & aktivasiya: 1 mesaj uzağında',sub3:'Qiymət & aktivasiya: 1 mesaj uzağında',sub4:'Bir dəfəlik · ömür boyu',
pf1:'Limitsiz yer dəyişmə',pf2:'Teleport + Joystick rejimi',pf3:'7/24 WhatsApp dəstəyi',
pf4:'Həftəlik planın hamısı',pf5:'Real marşrutlar + zamanlanmış hərəkət',pf6:'Prioritet dəstək',
pf7:'Aylıq planın hamısı',pf8:'Erken giriş yenilikləri',pf9:'Xüsusi beta versiyaları',
pf10:'İllik planın hamısı',pf11:'Ömür boyu yenilənmə',pf12:'İstədiyin cihaza şəxsi lisenziya',
pb_buy:"WhatsApp'dan Al",pb_now:'Dərhal Al',
wa_strip:'💬 Qərar verə bilmirsən? <a href="#" target="_blank" rel="noopener">mənə yaz</a> — 7/24 cavab.',
faq_label:'TSS',faq_title:'Ağına <span class="grad">düşənlər.</span>',
faq_desc:"Cavab burada yoxdursa WhatsApp'dan soruş — dəqiqələr içində qayıdırıq.",
q1:'Root icazəsi lazımdır?',
a1:'Xeyr. FMiuc, tərtibatçı seçimlərindəki rəsmi Android "saxta məkan" API-sindən istifadə edir. Cihazının zəmanəti və sistem yeniləmələri heç bir şəkildə təsirlənmir.',
q2:'Tətbiqlər saxta yeri sezə bilər?',
a2:'FMiuc rəsmi Android API-sindən istifadə etdiyi üçün yer, sistem səviyyəsində real GPS siqnalı kimi görünür. Xəritələr, sosial şəbəkələr və mesajlaşma tətbiqləri yeni yeri tam normal oxuyur.',
q3:'Hansı cihazlar dəstəklənir?',
a3:'Android 10 və daha yenisi (10-dan 16-ya qədər). Samsung, Xiaomi, Oppo, Pixel, Huawei və bütün əsas markalarla uyğundur.',
q4:'Niyə Play Store-da yoxdur?',
a4:'Yer dəyişdirmə tətbiqləri Google Play siyasətinə görə mağazada yerləşdirilə bilmir. Ona görə APK-nı birbaşa rəsmi GitHub repomuzdan paylaşıırıq — arayıcı yox, qısaltma yoxdur.',
q5:'Məlumatlarım təhlükəsizdir?',
a5:'Bəli. FMiuc yer məlumatlarını cihazından kənarə göndərmir; hesab açmaq da tələb etmir. Saxlanan yerlərin yalnız sənin telefonunda qorunur.',
q6:'Necə satın alıram?',
a6:'İstənilən plana bas — WhatsApp mesajın hazır şəkildə açılır. Qiymət və ödəniş üsulunu orada danışırıq, aktivasiyanı bir neçə dəqiqə ərzində tamamladırıq.',
cta_title:'İki dəqiqədən sonra<br><span class="grad">istədiyin yerdə ola bilərsən.</span>',
cta_sub:'Yüklə, qur, yerini seç. Gerisi bir toxunuş.',
cta_dl:'APK-nı Yüklə',cta_wa:"WhatsApp'dan Yaz",
foot_tag:'Yer azadlığı üçün hazırlanıb. Yalnız Android.',
foot_site:'Sayt',foot_contact:'Əlaqə',
fl1:'Xüsusiyyətlər',fl2:'Canlı demo',fl3:'Necə işləyir',fl4:'Yüklə',fl5:'Abunəlik',fl6:'TSS',
fl_wa:'WhatsApp: +994 70 850 25 10',fl_github:'GitHub reposu',
foot_disc:"FMiuc-u yalnız sahibi olduğun cihazlarda istifadə et. Yer dəyişmə bəzi tətbiqlərin istifadə şərtlərini pozə bilər — məsuliyyət istifadəçiyə aiddir.",
foot_copy1:'© <span id="year">2026</span> FMiuc · v1.7 · Yalnız Android',
foot_copy2:'Dünyanın hər yerindən giriş — evdən ayrılmadan.',
wa_hello:'Salam! FMiuc haqqında məlumat almaq istəyirəm.',
wa_week:'Salam! FMiuc HƏFTƏLİK abunəlik planını almaq istəyirəm. Qiymət və aktivasiya məlumatı paylaşa bilərsiniz?',
wa_month:'Salam! FMiuc AYLIQ abunəlik planını almaq istəyirəm. Qiymət və aktivasiya məlumatı paylaşa bilərsiniz?',
wa_year:'Salam! FMiuc İLLİK abunəlik planını almaq istəyirəm. Qiymət və aktivasiya məlumatı paylaşa bilərsiniz?',
wa_life:'Salam! FMiuc SONSUZ abunəlik planını almaq istəyirəm. Qiymət və aktivasiya məlumatı paylaşa bilərsiniz?',
wa_plans:'Salam! FMiuc abunəlik planları haqqında suallarım var.'
};
/* ---------------- kural tabloları ---------------- */
var SINGLE = [
['.pill','hero_pill'],['.hero-sub','hero_sub'],
['.hero-btns .btn-primary','hero_btn_dl'],['.hero-btns .btn-ghost','hero_btn_plans'],
['.p-acc','p_acc'],['.p-live','p_active'],['.p-card-loc','p_city'],['.p-card-coord','coord_default'],
['.p-btn.go','p_go'],['.p-btn.stop','p_stop'],
['.demo-hint','demo_hint'],['.demo-status','demo_status'],['.demo-side h3','demo_h3'],
['.demo-city','demo_city'],['.demo-coords','coord_default'],['.demo-note','demo_note'],
['.step-code','step_code'],
['.dl-sub','dl_sub'],['.dl-btn','dl_btn'],['.dl-warn','dl_warn'],
['.dl-compat h3','compat_h3'],['.compat-note','compat_note'],
['.cta-sub','cta_sub'],['.cta-final .btn-primary','cta_dl'],['.cta-final .btn-wa','cta_wa'],
['.foot-tag','foot_tag'],['.foot-disc','foot_disc'],['.nav-cta .btn','nav_dl']
];
var LISTS = [
['.nav-links a',['nav_features','nav_demo','nav_how','nav_pricing','nav_faq']],
['.mob-menu a',['nav_features','nav_demo','nav_how','nav_pricing','nav_faq','mob_dl']],
['.hero-meta span',['meta1','meta2','meta3','meta4']],
['.hero-stats .stat > span',['stat1','stat2','stat3']],
['.chip-f',['chip1','chip2','chip3']],
['.ticker .tg span',['tick1','tick2','tick3','tick4','tick5','tick6','tick7','tick8']],
['.sec-label',['feat_label','demo_label','how_label','dl_label','pr_label','faq_label']],
['.sec-desc',['feat_desc','demo_desc','how_desc','dl_desc','pr_desc','faq_desc']],
['.f-card h3',['f1n','f2n','f3n','f4n','f5n','f6n']],
['.f-card p',['f1d','f2d','f3d','f4d','f5d','f6d']],
['.city-chip',['city1','city2','city3','city4','city5']],
['.step h3',['s1n','s2n','s3n']],
['.step p',['s1d','s2d','s3d']],
['.compat-sub',['cs1','cs2','cs3']],
['.compat-state',['st_on','st_off','st_off']],
['.plan-name',['plan1','plan2','plan3','plan4']],
['.plan-dur',['dur1','dur2','dur3','dur4']],
['.price-sub',['sub1','sub2','sub3','sub4']],
['.price-tag',['tag_pop','tag_best']],
['.p-feats li',['pf1','pf2','pf3','pf4','pf5','pf6','pf7','pf8','pf9','pf10','pf11','pf12']],
['.price-btn',['pb_buy','pb_now','pb_buy','pb_buy']],
['.faq-q',['q1','q2','q3','q4','q5','q6']],
['.faq-a p',['a1','a2','a3','a4','a5','a6']],
['.foot-h',['foot_site','foot_contact']],
['.foot-links a',['fl1','fl2','fl3','fl4','fl5','fl6','fl_wa','fl_github']]
];
var HTMLS = [
['h1','hero_h1'],['.dl-mirror','dl_mirror'],['.wa-strip','wa_strip']
];
var LHTML = [
['.sec-title',['feat_title','demo_title','how_title','dl_title','pr_title','faq_title']],
['.price-val',['price_val','price_val','price_val','price_val']],
['.foot-bottom .foot-copy',['foot_copy1','foot_copy2']]
];
var WA_SINGLE = [
['.nav-wa','wa_hello'],['.wa-fab','wa_hello'],['.cta-final .btn-wa','wa_hello'],
['.foot-links a[data-wa]','wa_hello'],['.wa-strip a','wa_plans']
];
var WA_LIST = [
['.price-grid .price-card a',['wa_week','wa_month','wa_year','wa_life']]
];
var METAS = [
['meta[name="description"]','doc_desc'],
['meta[property="og:title"]','doc_title'],
['meta[property="og:description"]','doc_desc']
];

/* ---------------- motor ---------------- */
var L = { tr: TR, en: EN, ru: RU, az: AZ };
var cur = 'tr';
function q(s) { return document.querySelector(s); }
function qa(s) { return document.querySelectorAll(s); }
function lastText(el, txt) {
  if (!el) return;
  var n = el.lastChild;
  while (n && n.nodeType !== 3) n = n.previousSibling;
  if (n) n.nodeValue = txt;
  else el.insertBefore(document.createTextNode(txt), el.firstChild);
}
function apply() {
  var d = L[cur];
  document.documentElement.setAttribute('lang', cur);
  document.title = d.doc_title;
  METAS.forEach(function (m) { var el = q(m[0]); if (el) el.setAttribute('content', d[m[1]]); });
  SINGLE.forEach(function (r) { lastText(q(r[0]), d[r[1]]); });
  HTMLS.forEach(function (r) { var el = q(r[0]); if (el) el.innerHTML = d[r[1]]; });
  LISTS.forEach(function (r) {
    var els = qa(r[0]);
    for (var i = 0; i < els.length; i++) lastText(els[i], d[r[1][i % r[1].length]]);
  });
  LHTML.forEach(function (r) {
    var els = qa(r[0]);
    for (var i = 0; i < els.length; i++) els[i].innerHTML = d[r[1][i % r[1].length]];
  });
  WA_SINGLE.forEach(function (r) { var el = q(r[0]); if (el) el.setAttribute('data-wa', d[r[1]]); });
  WA_LIST.forEach(function (r) {
    var els = qa(r[0]);
    for (var i = 0; i < els.length; i++) els[i].setAttribute('data-wa', d[r[1][i % r[1].length]]);
  });
  window.FM_STRINGS = {
    loc: d._loc, nsew: d._nsew, cities: d._cities,
    pin: d._pin, dlToast: d._dlToast, langName: d._langName, wa_hello: d.wa_hello
  };
}
function paint() {
  Array.prototype.forEach.call(qa('.lang-sw button'), function (b) {
    b.classList.toggle('on', b.getAttribute('data-lang') === cur);
  });
}
function setLang(l) {
  if (!L[l]) return;
  cur = l;
  try { localStorage.setItem('fmiuc_lang', cur); } catch (e) {}
  apply(); paint();
  window.dispatchEvent(new CustomEvent('fmiuc:lang', { detail: cur }));
}
function detect() {
  try { var s = localStorage.getItem('fmiuc_lang'); if (L[s]) return s; } catch (e) {}
  var n = (navigator.language || (navigator.languages && navigator.languages[0]) || 'tr').toLowerCase();
  if (n.indexOf('ru') === 0) return 'ru';
  if (n.indexOf('az') === 0) return 'az';
  if (n.indexOf('en') === 0) return 'en';
  return 'tr';
}
cur = detect();
apply(); paint();
Array.prototype.forEach.call(qa('.lang-sw button'), function (b) {
  b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); });
});
})();
