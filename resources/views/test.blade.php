<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test</title>
</head>
<body>

    <form action="auth" method="post">
        @csrf
        <input type="text" name="name" id="" placeholder="Имя"><br>
        <input type="text" name="last_name" id="" placeholder="Фамилия"><br>
        <input type="text" name="login" id="" placeholder="Логин"><br>
        <input type="password" name="pass" id="" placeholder="Пароль"><br>
        <input type="submit" value="Регистрация"><br>
    </form>

</body>
</html>