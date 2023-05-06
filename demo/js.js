$(document).ready(function() {
    // Bắt sự kiện khi người dùng submit form
    $('#signup-form').submit(function(event) {
      event.preventDefault(); // Ngăn chặn trang web reload sau khi submit form
      
      // Lấy giá trị từ các trường input
      var username = $('#username').val();
      var password = $('#password').val();
      var confirmPassword = $('#confirm-password').val();
      var email = $('#email').val();
      var phone = $('#phone').val();
      var birthdate = $('#birthdate').val();
      
      // Kiểm tra dữ liệu nhập vào
      var errors = [];
      if (!username) {
        errors.push('Bạn phải nhập tên tài khoản.');
        $('#username-error').text('Bạn phải nhập tên tài khoản.').show();
      } else {
        $('#username-error').hide();
      }
      
      if (!password) {
        errors.push('Bạn phải nhập mật khẩu.');
        $('#password-error').text('Bạn phải nhập mật khẩu.').show();
      } else {
        $('#password-error').hide();
      }
      
      if (!confirmPassword) {
        errors.push('Bạn phải nhập xác nhận mật khẩu.');
        $('#confirm-password-error').text('Bạn phải nhập xác nhận mật khẩu.').show();
      } else if (confirmPassword !== password) {
        errors.push('Mật khẩu và xác nhận mật khẩu không khớp.');
        $('#confirm-password-error').text('Mật khẩu và xác nhận mật khẩu không khớp.').show();
      } else {
        $('#confirm-password-error').hide();
      }
      
      if (!email) {
        errors.push('Bạn phải nhập email.');
        $('#email-error').text('Bạn phải nhập email.').show();
      } else {
        $('#email-error').hide();
      }
      
      if (!phone) {
        errors.push('Bạn phải nhập số điện thoại.');
        $('#phone-error').text('Bạn phải nhập số điện thoại.').show();
      } else {
        $('#phone-error').hide();
      }
      
      if (!birthdate) {
        errors.push('Bạn phải nhập ngày sinh.');
        $('#birthdate-error').text('Bạn phải nhập ngày sinh.').show();
      } else {
        $('#birthdate-error').hide();
      }
      
      // Nếu có lỗi, hiển thị thông báo lỗi
      if (errors.length > 0) {
        return;
      }
      
      // Nếu không có lỗi, hiển thị thông tin đăng ký
      $('#signup-username').text(username);
      $('#signup-email').text(email);
      $('#signup-phone').text(phone);
      $('#signup-birthdate').text(birthdate);
      $('#signup-success').show();
      $('#signup-form').hide();
    });
  });
  