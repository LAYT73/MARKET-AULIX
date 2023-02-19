<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test</title>
</head>
<body>
    @if($errors->any())
    <div style='width:100%;'>
        <ul>
            @foreach($errors->all() as $error)
            <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
    @endif

    <form action="reg" method="post">
        @csrf
        <input type="text" name="name" id="" placeholder="Имя"><br>
        <input type="text" name="last_name" id="" placeholder="Фамилия"><br>
        <input type="text" name="login" id="" placeholder="Логин"><br>
        <input type="password" name="pass" id="" placeholder="Пароль"><br>
        <input type="password" name="pass_confirmation" id="" placeholder="Подтвердите пароль"><br>
        <input type="submit" value="Регистрация"><br>
    </form>
    <form action="auth" method="post">
        @csrf
        <input type="text" name="login" id="" placeholder="Логин"><br>
        <input type="password" name="pass" id="" placeholder="Пароль"><br>
        <input type="submit" value="Авторизация"><br>
    </form>
</body>
</html>