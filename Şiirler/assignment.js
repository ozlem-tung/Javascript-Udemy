// assignment.js (arrow‑function version)
const sayHello = name => {
  console.log('Hi ' + name);
};

sayHello();   // call remains the same


// Adjust the arrow function you created as part of task 1 to use three different syntaxes:
// With two arguments (incl. a phrase that replaces "Hi"), with no arguments (hard-coded values in function body)
//  and with one returned value (instead of outputting text inside of the function directly).

// 1) İKİ ARGÜMANLI  ──────────────────────────────────────────────
//    • name  : "Anna" gibi kişi adı
//    • phrase: "Hello", "Merhaba", "Selam" vb.
const sayHelloTwoArgs = (name, phrase) => console.log(`${phrase} ${name}`);

sayHelloTwoArgs("Anna", "Hello");      // → Hello Anna
sayHelloTwoArgs("Özlem", "Merhaba");   // → Merhaba Özlem



// 2) ARGÜMANSIZ  ────────────────────────────────────────────────
//    • Değerler fonksiyon içinde sabit (hard‑coded)
const sayHelloNoArgs = () => {
  const name   = "Özlem";
  const phrase = "Hi";
  console.log(`${phrase} ${name}`);
};

sayHelloNoArgs();                      // → Hi Özlem



// 3) DÖNÜŞ DEĞERİ VEREN  ────────────────────────────────────────
//    • Konsola yazmak yerine string döndürür
const sayHelloReturn = name => `Hi ${name}`;

const greeting = sayHelloReturn("Anna");
console.log(greeting);                 // → Hi Anna

//Add a default argument to the function you created: A fallback value for the phrase if no value is provided.

// İki argümanlı (default parametreli) sürüm
//  - name   : "Anna" gibi kişi adı
//  - phrase : (opsiyonel) selamlaşma kelimesi; verilmezse "Hi" kullanılır
const sayHelloTwoArgs2 = (name, phrase = "Hi") => console.log(`${phrase} ${name}`);

// Kullanım örnekleri
sayHelloTwoArgs2("Anna", "Hello"); // → Hello Anna   (özel cümle)
sayHelloTwoArgs2("Özlem");         // → Hi Özlem     (varsayılan "Hi" devreye girer)


//Add a new function: "checkInput" which takes an unlimited amount of arguments (unlimited amount of strings)
//  and executes a callback function if NO argument/ string is an empty string.
// checkInput(callback, ...strings)
//  - callback : Tüm kontroller başarıyla geçtiğinde çağrılacak işlev
//  - ...strings: Sınırsız sayıda string parametresi
const checkInput = (callback, ...strings) => {
  // strings.some(...) boş (“”) bir eleman bulursa true döner
  const hasEmpty = strings.some(str => str.trim().length === 0);

  if (!hasEmpty) {
    callback();            // Hepsi dolu → callback’i çalıştır
  }
};

// ÖRNEK KULLANIM ----------------------------------------------
checkInput(
  () => console.log("✅ Tüm girişler dolu!"),
  "Anna",
  "Hello",
  "42"
); // → ✅ Tüm girişler dolu!

checkInput(
  () => console.log("Bu mesajı göremezsiniz"),
  "Merhaba",
  "",          // ← Boş string
  "Dünya"
); // (callback çağrılmaz)
