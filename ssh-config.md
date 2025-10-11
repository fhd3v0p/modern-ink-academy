# SSH конфигурация для Ubuntu сервера

## Добавление в ~/.ssh/config

Создайте или отредактируйте файл `~/.ssh/config` и добавьте следующую конфигурацию:

```
Host ubuntu-server
    HostName 81.176.228.49
    User ubuntu
    Port 22
    ServerAliveInterval 60
    ServerAliveCountMax 3
    StrictHostKeyChecking no
    UserKnownHostsFile /dev/null
```

## Команды для быстрого подключения

После добавления конфигурации вы сможете подключаться простой командой:

```bash
ssh ubuntu-server
```

## Альтернативные способы подключения

### Прямое подключение по IP
```bash
ssh ubuntu@81.176.228.49
```

### Подключение с указанием порта (если не стандартный)
```bash
ssh -p 22 ubuntu@81.176.228.49
```

### Подключение с передачей ключа
```bash
ssh -i ~/.ssh/your_key ubuntu@81.176.228.49
```

## Генерация SSH ключей (рекомендуется)

Для более безопасного подключения создайте SSH ключи:

```bash
# Генерация ключа
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

# Копирование публичного ключа на сервер
ssh-copy-id ubuntu@81.176.228.49
```

## Проверка подключения

```bash
# Проверка доступности сервера
ping 81.176.228.49

# Проверка SSH порта
telnet 81.176.228.49 22
```
