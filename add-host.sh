#!/bin/bash

# Скрипт для добавления Ubuntu сервера в файл hosts
# Запустите с правами администратора: sudo ./add-host.sh

echo "Добавляем Ubuntu сервер в файл hosts..."

# Проверяем, не добавлен ли уже сервер
if grep -q "ubuntu-server" /etc/hosts; then
    echo "Сервер уже добавлен в hosts"
else
    echo "81.176.228.49 ubuntu-server" >> /etc/hosts
    echo "Ubuntu сервер успешно добавлен в hosts"
fi

echo "Текущее содержимое файла hosts:"
cat /etc/hosts | grep -E "(ubuntu-server|81.176.228.49)"

echo ""
echo "Теперь вы можете подключаться к серверу командой:"
echo "ssh ubuntu@ubuntu-server"
echo "или"
echo "ssh ubuntu@81.176.228.49"
