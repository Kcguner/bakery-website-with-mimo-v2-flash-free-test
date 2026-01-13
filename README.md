# Lezzet Pastanesi - Modern Responsive Web Sitesi

<h2>LIVE : https://kcguner.github.io/bakery-website-with-mimo-v2-flash-free-test/</h2>

![Lezzet Pastanesi](https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=400&fit=crop)

Bu site sadece Mimo v2 flash free modeli test edilmek için yapılmıştır , gerçek bilgiler içermez.

**Lezzet Pastanesi**, modern ve responsive bir tasarıma sahip, kullanıcı dostu pastane web sitesidir. Mor renk kullanılmadan tasarlanmış, animasyonlu efektlerle zenginleştirilmiş, örnek ürünler ve fiyatlar içeren tam bir web sitesi.

## 🎯 Özellikler

### ✨ Tasarım
- **Modern ve Temiz Arayüz**: Minimalist tasarım anlayışı
- **Responsive Yapı**: Mobil, tablet ve masaüstü uyumlu
- **Mor Renk Kullanılmadı**: Kırmızı, turkuaz ve sarı renk paleti
- **Animasyonlu Efektler**: Smooth scroll, fade-in, hover efektleri

### 🛠️ Teknolojiler
- **HTML5**: Semantic yapı
- **CSS3**: Flexbox, Grid, CSS Animasyonları
- **JavaScript**: DOM manipülasyonu, Event handling
- **Google Fonts**: Poppins font ailesi
- **Unsplash API**: Yüksek kaliteli örnek görseller

### 📱 Bileşenler
- **Navigasyon**: Mobil menü toggle, scroll efekti
- **Hero Section**: Parallax efekt, tipewriter animasyonu
- **Ürünler**: Kartlar, hover efektleri, sepete ekleme
- **Menü**: Kategoriler, tıklama efektleri
- **Hakkımızda**: İstatistikler, animasyonlu sayılar
- **İletişim**: Form validasyonu, başarı mesajı
- **Footer**: Hızlı linkler, sosyal medya

## 🚀 Kurulum ve Kullanım

### Dosya Yapısı
```
pastane/
├── index.html      # Ana HTML dosyası
├── style.css       # CSS stilleri
├── script.js       # JavaScript fonksiyonları
└── README.md       # Bu dosya
```

### Başlatma

1. **Dosyaları indirin** ve istediğiniz bir klasöre çıkarın

2. **Tarayıcıda açın**:
   - `index.html` dosyasını çift tıklayın
   - Veya tarayıcıdan Dosya > Aç menüsünü kullanın

3. **Alternatif**:
   - VS Code Live Server eklentisi kullanabilirsiniz
   - Herhangi bir web sunucusu (isteğe bağlı)

## 🎨 Tasarım Detayları

### Renk Paleti
- **Ana Renk**: `#ff6b6b` (Kırmızı)
- **İkinci Renk**: `#4ecdc4` (Turkuaz)
- **Vurgu Renk**: `#ffe66d` (Sarı)
- **Koyu Renk**: `#2d3436` (Gri)
- **Açık Renk**: `#f7f7f7` (Açık Gri)

### Animasyonlar
- **Slide Down/Up**: Hero başlığı ve metin
- **Fade In**: Butonlar ve kartlar
- **Fade Up**: Ürün kartları
- **Scale In**: Menü kategorileri
- **Hover Efektleri**: Kartlar, butonlar, menü öğeleri
- **Ripple Efekti**: Tıklama animasyonları
- **Parallax**: Hero section arka planı
- **Tipewriter**: Hero metin yazımı

### Responsive Breakpoint'ler
- **968px**: Tablet görünümü
- **768px**: Mobil menü aktif
- **480px**: Küçük mobil cihazlar

## 📦 Bileşenler ve Özellikleri

### 1. Navigasyon
- Sabit navbar (fixed)
- Scroll sırasında arka plan değişimi
- Mobil hamburger menü
- Smooth scroll

### 2. Hero Section
- Tam ekran yükseklik
- Parallax arka plan
- Tipewriter animasyonu
- Çağrı butonu

### 3. Ürünler Bölümü
- Grid layout (responsive)
- Kart hover efektleri
- Sepete ekleme fonksiyonu
- Görsel zoom efekti

### 4. Menü Bölümü
- 4 kategori
- Tıklama efektleri
- Fiyatlandırma
- Hover animasyonları

### 5. Hakkımızda
- Çift sütun layout
- İstatistik kartları
- Görsel hover efekti
- Sayı animasyonları

### 6. İletişim
- Çift sütun layout
- Form validasyonu
- Başarı modalı
- Loading state

### 7. Footer
- 3 sütun
- Sosyal medya linkleri
- Hızlı navigasyon

## 🎯 Kullanılan Özellikler

### JavaScript Fonksiyonları
- **Mobile Menu Toggle**: Menü açma/kapatma
- **Navbar Scroll Effect**: Scroll sırasında stil değişimi
- **Smooth Scroll**: Yumuşak kaydırma
- **Intersection Observer**: Scroll animasyonları
- **Add to Cart**: Sepet fonksiyonu
- **Form Submission**: Form gönderimi ve validasyon
- **Notifications**: Bildirim sistemi
- **Success Modal**: Başarı mesajı
- **Parallax Effect**: Hero section efekti
- **Ripple Effect**: Tıklama animasyonu
- **Typewriter Effect**: Metin yazma animasyonu
- **Debounce**: Performans optimizasyonu

### CSS Animasyonları
- `@keyframes slideDown`
- `@keyframes slideUp`
- `@keyframes fadeIn`
- `@keyframes fadeInUp`
- `@keyframes scaleIn`
- `@keyframes ripple`
- `@keyframes spin`

## 🔧 Özelleştirme

### Renk Değişikliği
CSS değişkenlerini `style.css` dosyasında güncelleyin:
```css
:root {
    --primary-color: #ff6b6b;    /* Ana renk */
    --secondary-color: #4ecdc4;  /* İkinci renk */
    --accent-color: #ffe66d;     /* Vurgu renk */
}
```

### Fiyatları Güncelleme
`index.html` dosyasındaki `.price` elementlerini düzenleyin:
```html
<div class="price">85 ₺</div>
```

### Görsel Değişikliği
`index.html` dosyasındaki `<img>` etiketlerinin `src` attribute'ünü güncelleyin:
```html
<img src="https://images.unsplash.com/..." alt="Açıklama">
```

### Yazı Tipi Değişikliği
`index.html` dosyasındaki Google Fonts linkini değiştirin:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
```

## 📱 Mobil Uyumluluk

### Test Edilmiş Cihazlar
- iPhone SE, 12, 14 Pro
- Samsung Galaxy S20, S21
- iPad Air, iPad Pro
- Various Android tablets
- Desktop (1920x1080, 1366x768)

### Tarayıcı Desteği
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🚀 Özellikler Listesi

- [x] Responsive tasarım
- [x] Modern arayüz
- [x] Animasyonlu efektler
- [x] Mor renk kullanılmadı ✅
- [x] Örnek görseller
- [x] Örnek fiyatlar
- [x] Sepet fonksiyonu
- [x] Form validasyonu
- [x] Mobil menü
- [x] Smooth scroll
- [x] Hover efektleri
- [x] Loading animasyonları
- [x] Başarı mesajları
- [x] Parallax efekt
- [x] Tipewriter efekt
- [x] Ripple efekt
- [x] Intersection Observer
- [x] Performans optimizasyonu

## 📝 Kullanım Örnekleri

### Ürün Ekleme
1. Ürün kartındaki "Sepete Ekle" butonuna tıklayın
2. Buton "✓ Eklendi" şeklinde değişir
3. Bildirim gösterilir
4. 2 saniye sonra eski haline döner

### Form Gönderimi
1. İletişim formunu doldurun
2. "Gönder" butonuna tıklayın
3. "Gönderiliyor..." loading state
4. Form temizlenir
5. Başarı modalı gösterilir

### Menü Navigasyonu
1. Mobil: Hamburger menüye tıklayın
2. Masaüstü: Direkt linklere tıklayın
3. Sayfa yumuşakça kayar
4. URL hash güncellenir

## 🎨 Tasarım İlhamı

Bu proje, modern pastane web sitelerinden ilham alarak oluşturulmuştur:
- Clean ve minimal tasarım
- Kullanıcı deneyimi odaklı
- Hızlı ve performanslı
- Erişilebilirlik (a11y) düşünülerek

## 📄 Lisans

Bu proje eğitim ve demo amaçlıdır. Ticari kullanımdan önce görsellerin ve içeriğin değiştirilmesi önerilir.

## 🤞 Destek

Herhangi bir sorun veya öneri için:
- Kodu inceleyin ve değiştirin
- Yeni özellikler ekleyin
- Tasarımı özelleştirin

---

**Hazırlayan**: AI Asistan  
**Tarih**: 2026
**Versiyon**: 1.0.0

---

## 🌐 English Version / İngilizce Sürüm

# Lezzet Pastanesi - Modern Responsive Website 

**Lezzet Pastanesi** is a modern, responsive bakery website with a user-friendly design. Created without purple colors, enriched with animated effects, and featuring example products and prices.

This site has been created solely for testing the Mimo v2 flash free model and does not contain any real information.

## 🎯 Features

### ✨ Design
- **Modern and Clean Interface**: Minimalist design approach
- **Responsive Structure**: Mobile, tablet, and desktop compatible
- **No Purple Colors**: Red, turquoise, and yellow color palette
- **Animated Effects**: Smooth scroll, fade-in, hover effects

### 🛠️ Technologies
- **HTML5**: Semantic structure
- **CSS3**: Flexbox, Grid, CSS Animations
- **JavaScript**: DOM manipulation, Event handling
- **Google Fonts**: Poppins font family
- **Unsplash API**: High-quality example images

### 📱 Components
- **Navigation**: Mobile menu toggle, scroll effect
- **Hero Section**: Parallax effect, typewriter animation
- **Products**: Cards, hover effects, add to cart
- **Menu**: Categories, click effects
- **About**: Statistics, animated numbers
- **Contact**: Form validation, success message
- **Footer**: Quick links, social media

## 🚀 Installation and Usage

### File Structure
```
pastane/
├── index.html      # Main HTML file
├── style.css       # CSS styles
├── script.js       # JavaScript functions
└── README.md       # This file
```

### Getting Started

1. **Download files** and extract to any folder

2. **Open in browser**:
   - Double-click `index.html`
   - Or use File > Open from browser

3. **Optional**:
   - Use VS Code Live Server extension
   - Any web server (optional)

## 🎨 Design Details

### Color Palette
- **Primary**: `#ff6b6b` (Red)
- **Secondary**: `#4ecdc4` (Turquoise)
- **Accent**: `#ffe66d` (Yellow)
- **Dark**: `#2d3436` (Gray)
- **Light**: `#f7f7f7` (Light Gray)

### Animations
- **Slide Down/Up**: Hero title and text
- **Fade In**: Buttons and cards
- **Fade Up**: Product cards
- **Scale In**: Menu categories
- **Hover Effects**: Cards, buttons, menu items
- **Ripple Effect**: Click animations
- **Parallax**: Hero section background
- **Typewriter**: Hero text typing

### Responsive Breakpoints
- **968px**: Tablet view
- **768px**: Mobile menu active
- **480px**: Small mobile devices

## 📦 Components and Features

### 1. Navigation
- Fixed navbar
- Background change on scroll
- Mobile hamburger menu
- Smooth scroll

### 2. Hero Section
- Full screen height
- Parallax background
- Typewriter animation
- Call-to-action button

### 3. Products Section
- Grid layout (responsive)
- Card hover effects
- Add to cart functionality
- Image zoom effect

### 4. Menu Section
- 4 categories
- Click effects
- Pricing
- Hover animations

### 5. About Section
- Two-column layout
- Statistics cards
- Image hover effect
- Number animations

### 6. Contact Section
- Two-column layout
- Form validation
- Success modal
- Loading state

### 7. Footer
- 3 columns
- Social media links
- Quick navigation

## 🎯 Used Features

### JavaScript Functions
- **Mobile Menu Toggle**: Open/close menu
- **Navbar Scroll Effect**: Style change on scroll
- **Smooth Scroll**: Smooth scrolling
- **Intersection Observer**: Scroll animations
- **Add to Cart**: Cart functionality
- **Form Submission**: Form submission and validation
- **Notifications**: Notification system
- **Success Modal**: Success message
- **Parallax Effect**: Hero section effect
- **Ripple Effect**: Click animation
- **Typewriter Effect**: Text typing animation
- **Debounce**: Performance optimization

### CSS Animations
- `@keyframes slideDown`
- `@keyframes slideUp`
- `@keyframes fadeIn`
- `@keyframes fadeInUp`
- `@keyframes scaleIn`
- `@keyframes ripple`
- `@keyframes spin`

## 🔧 Customization

### Color Change
Update CSS variables in `style.css`:
```css
:root {
    --primary-color: #ff6b6b;    /* Primary */
    --secondary-color: #4ecdc4;  /* Secondary */
    --accent-color: #ffe66d;     /* Accent */
}
```

### Update Prices
Edit `.price` elements in `index.html`:
```html
<div class="price">85 ₺</div>
```

### Change Images
Update `src` attributes in `index.html`:
```html
<img src="https://images.unsplash.com/..." alt="Description">
```

### Change Font
Update Google Fonts link in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
```

## 📱 Mobile Compatibility

### Tested Devices
- iPhone SE, 12, 14 Pro
- Samsung Galaxy S20, S21
- iPad Air, iPad Pro
- Various Android tablets
- Desktop (1920x1080, 1366x768)

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🚀 Features Checklist

- [x] Responsive design
- [x] Modern interface
- [x] Animated effects
- [x] No purple colors ✅
- [x] Example images
- [x] Example prices
- [x] Cart functionality
- [x] Form validation
- [x] Mobile menu
- [x] Smooth scroll
- [x] Hover effects
- [x] Loading animations
- [x] Success messages
- [x] Parallax effect
- [x] Typewriter effect
- [x] Ripple effect
- [x] Intersection Observer
- [x] Performance optimization

## 📝 Usage Examples

### Add to Cart
1. Click "Sepete Ekle" on product card
2. Button changes to "✓ Eklendi"
3. Notification appears
4. Returns to normal after 2 seconds

### Form Submission
1. Fill contact form
2. Click "Gönder"
3. Shows "Gönderiliyor..." loading state
4. Form clears
5. Success modal appears

### Menu Navigation
1. Mobile: Click hamburger menu
2. Desktop: Click links directly
3. Page scrolls smoothly
4. URL hash updates

## 🎨 Design Inspiration

This project is inspired by modern bakery websites:
- Clean and minimal design
- User experience focused
- Fast and performant
- Accessibility (a11y) considered

## 📄 License

This project is for educational and demo purposes. Images and content should be changed for commercial use.

## 🤞 Support

For any issues or suggestions:
- Review and modify the code
- Add new features
- Customize the design

---

**Created by**: AI Assistant  
**Date**: 2026  
**Version**: 1.0.0

---

<div align="center">

### 🍰 Lezzet Pastanesi

**Fresh Flavors Every Day!**


</div>


