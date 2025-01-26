// مدیریت فرم ثبت‌نام
document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault(); // جلوگیری از بارگذاری مجدد صفحه
  
    // دریافت مقادیر ورودی از فرم
    var userName = document.getElementById("name").value.trim();
    var userFamily = document.getElementById("family").value.trim();
    var userAge = document.getElementById("age").value.trim();
    var userEmail = document.getElementById("email").value.trim();
  
    // اعتبارسنجی اطلاعات ورودی
    if (userName.length < 3 || userName.length > 10) {
      alert("نام شما باید حداقل 3 کاراکتر و حداکثر 10 کاراکتر باشد.");
      return;
    }
  
    if (userFamily.length < 3 || userFamily.length > 15) {
      alert("نام خانوادگی شما باید حداقل 3 کاراکتر و حداکثر 15 کاراکتر باشد.");
      return;
    }
  
    if (isNaN(userAge) || userAge <= 0 || userAge.length > 3) {
      alert("لطفاً سن را به درستی وارد کنید (یک عدد مثبت با حداکثر 3 رقم).");
      return;
    }
  
    if (!userEmail.includes("@") || !userEmail.includes(".")) {
      alert("لطفاً یک ایمیل معتبر وارد کنید.");
      return;
    }
  
    // ایجاد شیء کاربر جدید
    var newUser = {
      id: Date.now(), // تولید یک شناسه یکتا
      name: userName,
      family: userFamily,
      age: userAge,
      email: userEmail,
    };
  
    // ذخیره اطلاعات در localStorage
    var users = JSON.parse(localStorage.getItem("users")) || []; // دریافت لیست کاربران یا مقدار پیش‌فرض []
    users.push(newUser); // افزودن کاربر جدید به آرایه
    localStorage.setItem("users", JSON.stringify(users)); // ذخیره آرایه به‌روزشده در localStorage
  
    // هدایت به صفحه نمایش کاربران
    window.location.href = "users.html";
  });
  