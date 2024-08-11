Gün Projesi: Favori Filmler Arşivi

Geçen yaptığın 2 reducer ve redux dönüşüm projeleri beğenildi. Bu yüzden sana bir proje daha verdiler.
Yeni projen, data.js dosyasında yer alan filmleri sırayla görüntüleyen ve istendiğinde görüntülenen filmi izleme listesine ekleyebilen, ekleneni çıkarabilen bir film uygulaması.

Projeyi incelediğinde;

filmler arasında "Sıradaki" butonu ile dolaşılabildiğini,
ama Listeme ekle ve Listem sayfasındaki Çıkar butonlarının çalışmadığını gördün.
Hatta, uygulamayı kullanırken 2 geliştirme yaparak daha iyi bir UX elde edebileceğine karar verdin:

-Önceki butonu ekleyerek ters yönde de filmlerde ilerlemek,
-Listeye eklenmiş filmi Filmler sayfasında göstermemek.
Bu isterleri gerçekleştirmek için aşağıdaki adımları planladın.

1: Proje detaylarına hakim ol
[ ] Projeyi incele ve componentların birbiriyle ilişkisini anla.
[ ] Projede kullanılan verilerin hangileri redux store'u içerisinde tutulmalı? Bu verilerden initialState olarak kullanılması gereken var mı? Planla.
[ ] Proje içerisinde store içerisindeki veriyi hangi fonksiyonlarla değiştirmeniz gerekecek?

2: Reducerı oluşturmaya başla ve redux storeu ekle
[ ] reducerı store/reducers/index.js dosyasında oluşturmaya başla. Önce initialState sonra default case içeren bir reducer oluştur.
[ ] store/store.js içinde myStore adıyla redux store oluştur.
[ ] Store içerisinde duran verileri, projede kullanıldığı yerlerde useSelector hooku ile store içerisinden al ve ilgili yerlerde kullan.
[ ] Gerekli actionları reducerda, action type constant ve action creatorları store/actions/index.js dosyasında oluştur.
[ ] Oluşturduğun actionları gerekli yerlerde dispatch et.

3: Projeye redux-logger ekle
[ ] Projeye redux-logger yüklenmiş durumda. Dokümantasyonunda tarif edildiği gibi projeye ekle.

4: Yeni özellikleri ekle
[ ] Filmler arasında gezinmeyi kolaylaştırmak için bir "Önceki" butonu ekleyin.
[ ] Bir film favorilere eklendiğinde Filmler listesinden çıksın, favorilerden çıkarıldığında tekrar eklensin.
[ ] Tüm filmler favorilere eklenince -gösterilecek film kalmadığında- App.jsx aşağıdaki element'i render etsin.
Eklenecek yeni film bulunamadı...

- [ ] Film listesi 20 adet film içeriyor. Filmler arasında gezinirken son filme geldiğinizde "Sıradaki" butonunun, ilk filme geldiğinizde "Önceki" butonunun görüntülenmemesini sağla.

Çalışma dosyaları: src/store/actions/index.js, src/store/reducers/index.js, src/store/store.js, src/components/FavMovie.jsx, src/components/Movie.jsx, src/App.jsx
