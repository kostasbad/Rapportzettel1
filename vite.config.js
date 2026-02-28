# 📋 RapportZettel

Handwerker Rapport App — Γράψε ελληνικά, πάρε Rapport στα γερμανικά.

---

## 🚀 Πώς να το ανεβάσεις (Deploy) — Βήμα βήμα

### Τι χρειάζεσαι:
1. **GitHub account** (δωρεάν) → https://github.com
2. **Vercel account** (δωρεάν) → https://vercel.com (κάνε sign up με GitHub)
3. **Anthropic API Key** → https://console.anthropic.com/settings/keys

---

### Βήμα 1: Ανέβασε τον κώδικα στο GitHub

1. Πήγαινε στο https://github.com/new
2. Δώσε όνομα: `rapportzettel`
3. Πάτα **Create repository**
4. Ανέβασε ΟΛΑ τα αρχεία αυτού του φακέλου στο repository
   - Μπορείς να πατήσεις "uploading an existing file" και να τα σύρεις

### Βήμα 2: Deploy στο Vercel

1. Πήγαινε στο https://vercel.com/new
2. Κάνε **Import** το `rapportzettel` repository
3. Framework: **Vite** (θα το αναγνωρίσει αυτόματα)
4. Πάτα **Deploy**
5. Σε 1 λεπτό θα πάρεις URL σαν: `rapportzettel-xxxxx.vercel.app`

### Βήμα 3: Βάλε στο κινητό

1. Άνοιξε το URL στο κινητό σου (Chrome ή Safari)
2. **Android**: Πάτα ⋮ → "Add to Home screen" → "Add"
3. **iPhone**: Πάτα Share → "Add to Home Screen"
4. Τώρα έχεις εικονίδιο σαν κανονική εφαρμογή!

### Βήμα 4: API Key

1. Άνοιξε την εφαρμογή
2. Θα σου ζητήσει API Key
3. Πάρε κλειδί από https://console.anthropic.com/settings/keys
4. Βάλε το κλειδί — αποθηκεύεται ΜΟΝΟ στο κινητό σου

---

## 💰 Κόστος

- **Vercel hosting**: ΔΩΡΕΑΝ
- **GitHub**: ΔΩΡΕΑΝ
- **Anthropic API**: ~$0.003 ανά Rapport (περίπου 0.3 cent)
  - Δηλαδή 100 Rapport = περίπου $0.30
  - 1000 Rapport = περίπου $3.00

---

## 📱 Τι κάνει η εφαρμογή

- ⚡ Επιλογή επαγγέλματος (ηλεκτρολόγος, υδραυλικός, κλπ)
- 👤 Στοιχεία πελάτη & διεύθυνση
- 🕐 Ώρα άφιξης/αναχώρησης (κουμπί "Τώρα")
- 📸 Πολλαπλές φωτογραφίες πριν & μετά
- ✍️ Γράψε τι έκανες στα ελληνικά
- 🔩 Λίστα υλικών
- 🤖 AI μετατρέπει σε επαγγελματικό Rapport στα γερμανικά
- 📋 Αντιγραφή / Share (Asana, WhatsApp, Email)
- 💾 Αποθήκευση ιστορικού
- ✏️ Edit στο γερμανικό κείμενο πριν στείλεις
- 📱 PWA — δουλεύει σαν native app στο κινητό

---

## 🔧 Development (αν θέλεις να αλλάξεις κάτι)

```bash
npm install
npm run dev
```

Ανοίγει στο http://localhost:5173
