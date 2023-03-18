interface DistantSaleContractContentProps {
  organizationName: string;
  organizationAddress: string;
  organizationEmail: string;
  organizationPhone: string;
  items: { Name: string; Price: number; Unit?: string; Count: number }[];
  deliveryAddress: string;
  invoiceAddress: string;
  orderCreatedDate: string;
  todaysDate: string;
  totalPrice: number;
}

const DistantSaleContractContent = ({
  organizationName,
  organizationAddress,
  organizationEmail,
  organizationPhone,
  items,
  deliveryAddress,
  invoiceAddress,
  orderCreatedDate,
  todaysDate,
  totalPrice,
}: DistantSaleContractContentProps) => {
  return (
    <div
      style={{
        width: "100%",
        padding: "0 20px",
        fontSize: "13px",
        color: "#999",
      }}
    >
      <meta charSet="utf-8" />
      <title>MESAFELİ SATIŞ SÖZLEŞMESİ</title>
      <h3 style={{ textAlign: "center" }}>MESAFELİ SATIŞ SÖZLEŞMESİ</h3>
      <h3>MADDE 1. TARAFLAR</h3>
      <h4>1.1. Satıcı</h4>
      <p>
        <div>
          <b>Ad, Soyad / Ünvan :</b>{" "}
          <a href="https://halapp.io">
            <b>HALAPP TOPTAN TEDARİK VE YAZILIM TİC.LTD.STİ</b>
          </a>
        </div>
        <div>
          <b>E-Posta :</b> <a href="mailto: info@halapp.io">info@halapp.io</a>
        </div>
        <div>
          <b>Adres :</b> Esentepe, Kolektif House, Talatpaşa Cd. No: 5/1, 34394
          Şişli/İstanbul
        </div>
        <div>
          <b>Telefon :</b> +90 &#40;0530&#41; 867 83 75
        </div>
      </p>
      <h4>1.2. Alıcı</h4>
      <p>
        <div>
          <b>Ad, Soyad / Ünvan :</b> {organizationName}
        </div>
        <div>
          <b>E-Posta :</b> {organizationEmail}
        </div>
        <div>
          <b>Adres :</b> {organizationAddress}
        </div>
        <div>
          <b>Telefon :</b> {organizationPhone}
        </div>
      </p>
      <h3>MADDE 2. KONU</h3>
      <p>
        İşbu aktin konusu, ALICI&apos;nın SATICI&apos;ya ait{" "}
        <a href="https://halapp.io">halapp.io</a> internet sitesinden elektronik
        ortamda siparişini verdiği, aşağıda özellikleri ve satış bedeli
        belirtilmiş olan ürünün satışı ve teslimi ile ilgili olarak 4077 sayılı
        Tüketicilerin Korunması Hakkındaki Yasa ve Mesafeli Sözleşmelere Dair
        Yönetmelik hükümleri gereğince tarafların hak ve sorumluluklarının
        saptanmasıdır.
      </p>
      <p>
        ALICI, SATICI&apos;nın isim, ünvan, açık adres, telefon ve diğer erişim
        ve iletişim bilgileri, satışa konu ürünün temel özellikleri, vergiler de
        dahil olmak üzere satış bedeli, ödeme şekli, teslimat koşulları ve
        masrafları ve buna benzer satışa konu ürün ile ilgili bütün ön bilgiler
        ve &quot;cayma&quot; hakkının kullanılması ve bu hakkın nasıl
        kullanılabileceği, şikayet ve itirazlarını iletebilecekleri resmi
        makamlar ve buna benzer konularda açık, anlaşılır ve internet ortamına
        uygun biçimde SATICI tarafından bilgilendirildiğini, bu ön bilgileri
        elektronik ortamda teyit ettiğini ve sonrasında ürün siparişi verdiğini
        iş bu akit hükümlerince kabul ve beyan eder.
      </p>
      <p>
        <a href="https://halapp.io">halapp.io</a> sitesinde mevcut ön
        bilgilendirme ve ALICI tarafından yapılan alışveriş üzerine düzenlenen
        fatura iş bu sözleşmenin ayrılmaz parçalarıdır.
      </p>
      <h3>MADDE 3. SÖZLEŞME KONUSU MAL/ÖDEME/GÖNDERİM VE TESLİMAT BİLGİLERİ</h3>
      <p>
        Elektronik ortamda alınan mal/malların türü ve cinsi, adeti,
        markası/modeli, satış bedeli, ödeme türü, teslim alacak kişi, teslimat
        adresi, fatura bilgileri, kargo ücreti aşağıda yer aldığı gibidir.
        Fatura edilecek firma ile sözleşmeyi yapan firmanın aynı olması
        mecburidir. Aşağıda belirtilen bilgiler eksiksiz ve doğru olmalıdır. Bu
        bilgilerin doğru olmadığı ya da eksik olduğu durumlardan doğacak
        zararları tamamıyla karşılamayı ALICI kabul eder ve ayrıca bu durumdan
        oluşabilecek her türlü sorumluluğu ALICI kabul eder.
      </p>
      <p>
        SATICI gerekli gördüğü durumlarda, ALICI&apos;nın vermiş olduğu bilgiler
        gerçekle örtüşmediğinde, siparişi ve teslimatı durdurma hakkını saklı
        tutar. SATICI siparişte sorun tespit ettiği durumlarda ALICI&apos;nın
        vermiş olduğu telefon, e-posta ve posta adreslerinden ALICI&apos;ya
        ulaşamadığı takdirde siparişin yürürlüğe koyulmasını 24
        &#40;yirmidört&#41; saat süreyle erteler. ALICI&apos;nın bu zaman
        zarfında SATICI ile konuyla ilgili olarak iletişim kurması beklenir. Bu
        zaman içerisinde ALICI&apos;dan herhangi bir yanıt alınamazsa SATICI,
        her iki tarafın da zarar görmemesi için siparişi iptal eder.
      </p>
      <h4>3.1. Alınan Ürün /Ürünler</h4>
      <div className="distant-sale-contract-table">
        <table style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #999", padding: "5px" }}>
                Ürün/Hizmet Açıklaması
              </th>
              <th style={{ border: "1px solid #999", padding: "5px" }}>Adet</th>
              <th style={{ border: "1px solid #999", padding: "5px" }}>
                Birim
              </th>
              <th style={{ border: "1px solid #999", padding: "5px" }}>
                Peşin Fiyatı
              </th>
              <th style={{ border: "1px solid #999", padding: "5px" }}>
                Ara Toplam (KDV Dahil)
              </th>
            </tr>
          </thead>
          <tbody>
            {items?.map((i) => (
              <tr>
                <td style={{ border: "1px solid #999", padding: "5px" }}>
                  {i.Name}
                </td>
                <td style={{ border: "1px solid #999", padding: "5px" }}>
                  {i.Count}
                </td>
                <td style={{ border: "1px solid #999", padding: "5px" }}>
                  {i.Unit || "-"}
                </td>
                <td style={{ border: "1px solid #999", padding: "5px" }}>
                  {new Intl.NumberFormat("tr-TR", {
                    style: "currency",
                    currency: "TRY",
                  }).format(i.Price)}
                </td>
                <td style={{ border: "1px solid #999", padding: "5px" }}>
                  {new Intl.NumberFormat("tr-TR", {
                    style: "currency",
                    currency: "TRY",
                  }).format(i.Price * i.Count)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td
                colSpan={4}
                style={{ border: "1px solid #999", padding: "5px" }}
              >
                Toplam
              </td>
              <td style={{ border: "1px solid #999", padding: "5px" }}>
                {new Intl.NumberFormat("tr-TR", {
                  style: "currency",
                  currency: "TRY",
                }).format(totalPrice)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <h4>3.2 Teslimat/Fatura Bilgileri</h4>
      <p>
        <div>
          <b>Teslimat Adresi :</b> {deliveryAddress}
        </div>
        <div>
          <b>Teslim Edilecek Kişi/Şirket :</b> {organizationName}
        </div>
        <div>
          <b>Fatura Adresi :</b> {invoiceAddress}
        </div>
        <div>
          <b>Sipariş Tarihi :</b> {orderCreatedDate}
        </div>
        <div>
          <b>Teslim Şekli :</b> Alıcıya Teslim
        </div>
        <div>
          <b>Teslimat Süresi* :</b> En geç 2&#40;iki&#41; gün
        </div>
        <div>
          *Sözleşme ve ilgili mevzuat hükümlerinde yer alan istisnalar saklıdır.
        </div>
      </p>
      <h3>MADDE 4. SÖZLEŞME TARİHİ VE MÜCBİR NEDENLER</h3>
      <p>
        Sözleşme tarihi, ALICI tarafından siparişin verildiği tarih olan{" "}
        {orderCreatedDate} tarihidir.
      </p>
      <p>
        Sözleşmenin imzalandığı tarihte, mevcut olmayan ya da öngörülmeyen,
        tarafların kontrolleri dışında gelişen, ortaya çıkmasıyla taraflardan
        birinin ya da her ikisinin de sözleşme ile yüklendikleri borç ve
        yükümlülüklerini kısmen veya tamamen yerine getirmelerini veya bunları
        zamanında yerine getirmelerini olanaksızlaştıran durumlar, mücbir sebep
        &#40;terör, savaş, doğal afet, ayaklanma, el koyma veya grev, lokavt,
        üretim ve iletişim tesislerinde önemli ölçüde arıza, değişen mevzuat
        hükümleri ve bunun gibi durumlar&#41; olarak kabul edilecektir. Mücbir
        sebep şahsında gerçekleşen taraf, diğer tarafa durumu derhal ve yazılı
        olarak bildirecektir.
      </p>
      <p>
        Mücbir sebebin devamı esnasında tarafların edimlerini yerine
        getirememelerinden dolayı herhangi bir sorumlulukları doğmayacaktır.
        İşbu mücbir sebep durumu 30 &#40;otuz&#41; gün süreyle devam ederse,
        taraflardan her birinin, tek taraflı olarak fesih hakkı doğmuş
        olacaktır.
      </p>
      <h3>MADDE 5. SATICININ HAK VE YÜKÜMLÜLÜKLERİ</h3>
      <p>
        <b>5.1.</b> SATICI, 4077 sayılı Tüketicilerin Korunması Hakkındaki Kanun
        ve Mesafeli Sözleşmelere Dair Yönetmelik hükümleri uyarınca sözleşmede
        kendisine yüklenen edimleri mücbir haller hariç noksansız yerine
        getirmeyi kabul ve taahhüt eder.
      </p>
      <p>
        <b>5.2.</b> 18 &#40;on sekiz&#41; yaşından küçük kişiler{" "}
        <a href="https://halapp.io">halapp.io</a> alışveriş yapamaz. SATICI,
        ALICI&apos;nın sözleşmede belirttiği yaşının doğru olduğunu esas
        alacaktır. Ancak ALICI&apos;nın yaşını yanlış yazmasından dolayı
        SATICI&apos;ya hiçbir biçimde sorumluluk yüklenemeyecektir.
      </p>
      <p>
        <b>5.3.</b> Sistem hatalarından meydana gelen fiyat yanlışlıklarından{" "}
        <a href="https://halapp.io">halapp.io</a> kesinlikle sorumlu değildir.
        Buna istinaden SATICI, internet sitesindeki sistemden, tasarımdan veya
        yasadışı yollarla internet sitesine yapılabilecek müdahaleler sebebiyle
        ortaya çıkabilecek tanıtım, fiyat hatalarından da sorumlu değildir.
        Sistem hatalarına dayalı olarak ALICI SATICI&apos;dan hak iddiasında
        bulunamaz.
      </p>
      <p>
        <b>5.4.</b> <a href="https://halapp.io">halapp.io</a> kredi kartı
        &#40;Visa, MasterCard, American Express vs.&#41;, banka havalesi veya
        çek ile alışveriş yapılabilir. Siparişlerin işleme alınma zamanı,
        siparişin verildiği andır. Müsteri siparişin odemesini taahhut ettigi
        şekilde odemedigi takdirde Halapp kestiği fatura karşılıgı kadarını
        mahkemelerce talep etme hakkına sahıptır.
      </p>
      <h3>MADDE 6. ALICININ HAK VE YÜKÜMLÜLÜKLERİ</h3>
      <p>
        <b>6.1.</b> ALICI, sözleşmede kendisine yüklenen edimleri mücbir
        sebepler hariç eksiksiz yerine getirmeyi kabul ve taahhüt eder.
      </p>
      <p>
        <b>6.2.</b> ALICI, sipariş vermekle birlikte iş bu sözleşme hükümlerini
        ve yükümlülüklerini kabul etmiş sayıldığını ve ayrıca sözleşmede
        belirtilen ödeme şekline uygun ödemeyi yapacağını kabul ve taahhüt eder.
      </p>
      <p>
        <b>6.3.</b> ALICI, <a href="https://halapp.io">halapp.io</a> internet
        sitesinden SATICI&apos;nın isim, ünvan, açık adres, telefon ve diğer
        iletişim ve erişim bilgileri, satışa konu malın temel özellikleri,
        vergiler de dahil olmak üzere satış bedeli, ödeme sekli, teslimat
        koşulları ve masrafları vs. satışa konu ürün ile ilgili tüm ön bilgiler
        ve &quot;cayma&quot; hakkının kullanılması ve bu hakkın nasıl
        kullanılacağı, şikayet ve itirazlarını iletebilecekleri resmi makamlar
        vs. konularda açık, anlaşılır ve internet ortamına uygun biçimde bilgi
        sahibi olduğunu bu ön bilgileri elektronik ortamda teyit ettiğini kabul
        ve beyan eder.
      </p>
      <p>
        <b>6.4.</b> Bir önceki maddeye bağlı olarak ALICI, mal sipariş ve ödeme
        koşullarının, ürün kullanım talimatlarının, olası durumlara karşı alınan
        tedbirlerin ve yapılan uyarıların olduğu{" "}
        <a href="https://halapp.io">halapp.io</a> sipariş/ödeme/kullanım
        prosedürü bilgilerini okuyup bilgi sahibi olduğunu ve elektronik ortamda
        gerekli teyidi verdiğini beyan eder.
      </p>
      <p>
        <b>6.5.</b> ALICI, aldığı ürünü iade etmek istemesi durumunda, telim
        aldığı tarihten 3 &#40;üç&#40; gün içinde değiştirme hakkı vardır ancak
        ne surette olursa olsun ürüne ve ambalajına zarar vermemeyi, iade anında
        fatura aslını ve irsaliyesini iade etmeyi kabul ve taahhüt eder.
      </p>
      <h3>MADDE 7. SİPARİŞ/ÖDEME PROSEDÜRÜ</h3>
      <p>Sipariş:</p>
      <p>
        Alışveriş sepetine eklenen ürünlerin KDV dahil TL tutarı &#40;Taksitli
        işlemlerde toplam taksit tutarları&#41; ALICI tarafından onaylandıktan
        sonra, ilgili banka kartının posu üzerinden işleme alınır. Bu nedenle
        siparişler, sevk edilmeden önce müşteriye sipariş onay maili gönderilir.
        Sipariş Onay maili gönderilmeden sevkiyat yapılmaz.
      </p>
      <p>
        Süreçteki herhangi bir aksama durumu veya kredi kartı veya çek ile ödeme
        ile ilgili ortaya çıkabilecek problemler, ALICI&apos;ya sözleşmede
        belirttiği telefon/faks/e-mail yollarından biri veya bir kaçı
        kullanılmak sureti ile bildirilir. Gerekirse ALICI&apos;dan bankası ile
        görüşmesi istenebilir. Siparişlerin işleme alınma zamanı, siparişin
        verildiği andır.
      </p>
      <p>
        İstisnai olarak haklı bir nedenle sözleşme konusu ürünün tedarik
        edilemeyeceğinin anlaşılması ve/veya stok sorunu ile karşılaşılması
        durumunda ALICI hemen açık ve anlaşılır bir şekilde bilgilendirilip onay
        vermesi durumunda ALICI&apos;ya eşit kalitede ve fiyatta başka bir mal
        gönderilebilir ya da ALICI&apos;nın arzusu ve seçimi doğrultusunda;
        fiyat eş değeri yeni başka bir ürün gönderilebilir, ürünün stoklara
        girmesi ya da teslime engel diğer engelin ortadan kalkması beklenebilir
        ve/veya sipariş iptal edilebilir ve ücret iade edilir.
      </p>
      <p>
        Sözleşme konusu malın teslim yükümlülüğünün yerine getirilmesinin
        imkansızlaştığı hallerde ALICI bu durumdan haberdar edilerek ödemiş
        olduğu toplam bedel ve varsa onu borç altına sokan her türlü belge
        kendisine iade edilerek sözleşme iptal edilir. Böyle bir durumda
        ALICI&apos;nın SATICI&apos;dan ilave herhangi bir maddi ve manevi zarar
        talebi olmayacaktır.
      </p>
      <p>Ödeme:</p>
      <p>
        <a href="https://halapp.io">halapp.io</a>&apos; da, internet ortamında
        kredi kartı bilgilerini kullanmak istemeyen ALICI&apos;lara nakit havale
        ile ya da çek ödemesi ile sipariş imkanları sunulmuştur. Havale ile
        ödemede ALICI kendisine en uygun bankayı seçip havalesini yapabilir.
        Havale ve/veya EFT yaparken Gönderen Bilgileri&apos;nin Fatura Bilgileri
        ile aynı olması gereklidir.
      </p>
      <p>
        Ürünün tesliminden sonra ALICI&apos;ya ait kredi kartının ALICI&apos;nın
        kusurundan kaynaklanmayan bir şekilde yetkisiz kişilerce haksız veya
        hukuka aykırı olarak kullanılması sebebi ile ilgili banka veya finans
        kuruluşun ürün bedelini SATICI&apos;ya ödememesi halinde, ALICI&apos;nın
        kendisine teslim edilmiş ürünün bedelini en geç 10 &#40;on&#41; gün
        içinde SATICI farklı yontemler ile odemesi zorunludur. Bu tür durumlarda
        nakliye giderleri tümüyle ALICI&apos;ya aittir.
      </p>
      <p>
        ALICI kredi kartı ile ödeme yapmayı tercih etmiş ise ALICI, ilgili faiz
        oranlarını ve temerrüt faizi ile ilgili bilgileri bankasından ayrıca
        teyit edeceğini, yürürlükte bulunan mevzuat hükümleri gereğince faiz ve
        temerrüt faizi ile ilgili hükümlerin Banka ve ALICI arasındaki
        &quot;Kredi Kartı Sözleşmesi&quot; kapsamında uygulanacağını kabul,
        beyan ve taahhüt eder.
      </p>
      <h3>MADDE 8. SEVKİYAT/TESLİMAT PROSEDÜRÜ</h3>
      <p>Sevkiyat:</p>
      <p>
        Sipariş onayı mailinin gönderilmesiyle birlikte, ürün/ürünler
        halapp&apos;e baglı kuryeler ile müsterilere sevkiyatı saglanır.
      </p>
      <p>Teslimat:</p>
      <p>
        Ürün/ürünler Kurye ile ALICI&apos;nın belirttiği adrese teslim
        edilecektir. Teslimat süresi, Sipariş onayı mailinin gönderilmesinden ve
        sözleşmenin kurulmasından itibaren en geç 24 saattir. ALICI&apos;ya
        önceden yazılı olarak veya bir sürekli veri taşıyıcısıyla bildirilmek
        koşuluyla bu süre en fazla ek 1 &#40;Bir&#41; iş günü uzatılabilir.
      </p>
      <p>
        Zarar görmüş paket durumunda; Zarar görmüş paketler teslim alınmayarak
        kurye yetkilisine tutanak tutturulmalıdır. Eğer Kurye yetkilisi paketin
        hasarlı olmadığı görüşünde ise, paketin orada açılarak ürünlerin
        hasarsız teslim edildiğini kontrol ettirme ve durumun yine bir tutanakla
        tespit edilmesini isteme hakkı ALICI&apos;da vardır.
      </p>
      <h3>MADDE 9- ÜRÜN İADE VE CAYMA HAKKINA İLİŞKİN PROSEDÜRÜ</h3>
      <p>
        Tüketicinin Korunması hakkındaki Kanunnda teslimat tarihinden itibaren
        14 &#40;on dört&#41; gün içinde cayma haklarını kullanarak, &quot;kargo
        ücreti ödemeden&quot; ürünleri iade etme hakları vardır. Yas sebze ve
        meyve icin bu süre bir gündür. Cayma hakkının kullanılması{" "}
        <a href="https://halapp.io">halapp.io</a>&apos;a özel bir durum
        değildir.
      </p>
      <p>
        Satıcı, talebinizi aldıktan sonra en geç 14 &#40;on dört&#41; gün
        içerisinde, ürünü iade alıp ürün bedelini size hiçbir masraf
        yükletmeksizin iade etmekle yükümlüdür. Ürün yas sebze ve meyve ise
        satıcı ürünü 1 gün içerisinde iade almakla, almasa da fatura karsılıgı
        kadar ürünü temin etmekle yükümlüdür.
      </p>
      <p>Cayma hakkının geçerli olmadığı bazı ürünler aşağıdaki gibidir:</p>
      <p>
        İsteğiniz ile size özel olarak üretilen veya üzerinden değişiklik ya da
        ilave yapılarak size özel hale getirilen ürünler.
      </p>
      <p>
        Fiyatı finansal piyasalardaki dalgalanmalara bağlı olarak sürekli
        değişen ziynet, külçe altın gibi ürünler.
      </p>
      <p>
        Sağlık ve hijyen açısından iadeye uygun olmayan ürünler; &#40;İç
        çamaşırı, mayo, kozmetik gibi hijyenik durumu hassas olan ürünleri iade
        edebilmenin koşulu; ürünün açılmamış ve denenmemiş olmasıdır.&#41;
      </p>
      <p>
        Tarafınızdan açılmış olan ses veya görüntü kayıtları &#40;DVD, CD ve
        Kaset vb.&#41;. Basılı ürünler &#40;Kitap, dergi vb.&#41;. Yazılım
        programları ve bilgisayar sarf malzemeleri.
      </p>
      <p>
        Çabuk bozulma tehlikesi olan veya son kullanma tarihi geçme ihtimali
        olan ürünler.
      </p>
      <p>Bozulmus veya curumus meyve ve sebzeler.</p>
      <h3>MADDE 10. GARANTİ</h3>
      <p>
        Kullanma talimatına uygun şekilde kullanılan ve temizliği yapılan
        ürünler her türlü üretim hatasına karşı aşağıda belirtilen şartlar
        dahilinde 2&#40;iki&#41; ve&#40;veya&#41; 3&#40;üç&#41; yıl
        üretici/ithalatçı firma garantisi altındadır. Firmaların garanti
        sorumluluğu yalnızca 4077 sayılı kanun kapsamına giren tüketiciler için
        geçerlidir. Ticari nitelikteki işler için Türk Ticaret Kanununu
        hükümleri geçerli olacaktır.
      </p>
      <h3>MADDE 11- GİZLİLİK</h3>
      <p>
        ALICI tarafından iş bu sözleşmede yer alan bilgiler ile ödeme yapmak
        amacı ile SATICI&apos;ya bildirdiği hiçbir bilgi SATICI tarafından 3.
        şahıslarla paylaşılmayacaktır.
      </p>
      <p>
        SATICI bu bilgileri yalnızca idari/yasal zorunluluğun mevcudiyeti
        durumunda açıklayabilecektir. Araştırma ehliyeti belgelenmiş her türlü
        adli soruşturma dahilinde SATICI kendisinden istenen bilgiyi elinde
        bulunduruyorsa ilgili makamla paylaşabilir.
      </p>
      <p>
        Kredi Kartı bilgileri kesinlikle saklanmaz, Kredi Kartı bilgileri
        yalnızca tahsilat işlemi esnasında ilgili bankalara güvenli bir biçimde
        iletilerek provizyon alınabilmesi için kullanılır ve provizyon
        işleminden sonra tüm datalardan silinir.
      </p>
      <p>
        ALICI&apos;ya ait e-posta adresi, posta adresi ve telefon gibi bilgiler
        sadece SATICI tarafından standart ürün teslim ve bilgilendirme
        prosedürleri için kullanılır. Bazı kampanya bilgileri, yeni ürünler
        hakkında bilgiler, promosyon bilgileri ALICI&apos;ya gönderilebilir.
      </p>
      <h3>MADDE 12- UYUŞMAZLIK DURUMUNDA YETKİLİ MAHKEME VE İCRA DAİRELERİ</h3>
      <p>
        İşbu sözleşmenin uygulanmasından kaynaklanan uyuşmazlık durumunda,
        Sanayi ve Ticaret Bakanlığınca her yıl Aralık ayında ilan edilen değere
        kadar Tüketici Hakem Heyetleri ile İstanbul Tüketici Mahkemeleri
        yetkilidir.
      </p>
      <p>
        Siparişin gerçekleşmesi durumunda ALICI işbu sözleşmenin tüm koşullarını
        eksiksiz kabul etmiş sayılır. {todaysDate}
      </p>
      <p>
        Saygılarımızla <a href="https://halapp.io">halapp.io</a>
      </p>
    </div>
  );
};

export { DistantSaleContractContent };
