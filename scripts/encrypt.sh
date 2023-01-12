#!/bin/bash
set -e
echo -n "$1" | openssl enc -aes-256-cbc -a -salt -pass pass:$2 -pbkdf2 -iter 100000
