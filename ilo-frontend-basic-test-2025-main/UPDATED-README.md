# Frontend Basic Test

## Περιγραφή
Αυτό το repo περιέχει τα βασικά αρχεία για το frontend τεστ (HTML/CSS/JavaScript). Ο υποψήφιος πρέπει να υλοποιήσει τα εξής:

1. Στο `script.js`:
   - Κάνει fetch στα πρώτα 10 posts από το API του JSONPlaceholder.
   - Εμφανίζει τη λίστα των posts στο `<div id="posts">`.
   - Όταν ο χρήστης κάνει κλικ σε κάποιο post, εμφανίζει λεπτομέρειες (title, body) και σχόλια στο `<div id="details">`.

2. Στο `styles.css`:
   - Βασικό styling ώστε η λίστα και οι λεπτομέρειες να είναι ευανάγνωστα σε desktop και mobile.

3. Στο `index.html`:
   - Έχει `<div id="posts"></div>` για τη λίστα και `<div id="details"></div>` για τις λεπτομέρειες.
   - Συνδέει τα `styles.css` και `script.js`.

## Οδηγίες Εκτέλεσης
1. Απλό άνοιγμα του `index.html` στον browser (δεν απαιτείται server).
2. Αν θέλετε, μπορείτε να χρησιμοποιήσετε έναν local server (π.χ. `npx serve` ή `Live Server` extension).
3. Στο `README.md` ο υποψήφιος πρέπει να γράψει:
   - Τι ακριβώς υλοποίησε (π.χ. “Φόρτωσα 10 posts, έκανα click για λεπτομέρειες + σχόλια”).
   - Πώς τρέχει το demo.

## Κριτήρια Αξιολόγησης
- Φόρτωση και εμφάνιση των πρώτων 10 posts.
- Δυναμική εμφάνιση λεπτομερειών και σχολίων.
- Καθαρότητα κώδικα: ονοματολογία, δομή, σχόλια
- Basic error handling (π.χ. εμφανίζει μήνυμα αν το fetch αποτύχει).
- Responsive styling (λίστα + λεπτομέρειες λειτουργούν σε mobile).


## Γράψτε ακριβώς τι υλοποιήσατε
-Εμφάνιση πρώτων 10 posts στο #posts div.
-Εμφάνιση τα post details και τα comments στο detailsDiv.
-Εξήγηση κώδικα βήμα-βήμα.
-Αν θέλει κάποιος να δει αν λειτουργεί και το catch(error) μπορεί να πάει στο: const response = await fetch('https://jsonplaceholder.typicode.com/posts')
και να το πειράξει και θα δει μήνυμα σφάλματος.
-Προσθήκη απλού styles.(και mobile-responsive).