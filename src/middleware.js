export default function (to, from, next) {
  const isAuthenticated = localStorage.getItem("loggedIn");
  // Kiểm tra trạng thái đăng nhập ở đây, ví dụ: localStorage.getItem('loggedIn')

  if (to.meta.requiresAuth && !isAuthenticated) {
    // Nếu route yêu cầu xác thực và người dùng chưa đăng nhập, chuyển hướng đến trang đăng nhập
    next("/todolist");
  } else {
    // Nếu người dùng đã đăng nhập hoặc route không yêu cầu xác thực, cho phép truy cập
    next();
  }
}
