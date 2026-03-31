#!/bin/bash
mkdir -p src/public/images
UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
REF="https://offer.islamicbazar.com.bd/"

curl -L -H "User-Agent: $UA" -H "Referer: $REF" -o src/public/images/product-1.jpg https://offer.islamicbazar.com.bd/wp-content/uploads/2026/01/Corner-001-1.jpeg
curl -L -H "User-Agent: $UA" -H "Referer: $REF" -o src/public/images/product-2.jpg https://offer.islamicbazar.com.bd/wp-content/uploads/2026/01/Corner-002.jpeg
curl -L -H "User-Agent: $UA" -H "Referer: $REF" -o src/public/images/product-3.jpg https://offer.islamicbazar.com.bd/wp-content/uploads/2026/01/Corner-003.jpeg
curl -L -H "User-Agent: $UA" -H "Referer: $REF" -o src/public/images/product-4.jpg https://offer.islamicbazar.com.bd/wp-content/uploads/2026/01/Corner-004-1.jpeg
curl -L -H "User-Agent: $UA" -H "Referer: $REF" -o src/public/images/product-5.jpg https://offer.islamicbazar.com.bd/wp-content/uploads/2026/01/Corner-01.jpeg
curl -L -H "User-Agent: $UA" -H "Referer: $REF" -o src/public/images/product-6.jpg https://offer.islamicbazar.com.bd/wp-content/uploads/2024/09/bedroon01.jpg
curl -L -H "User-Agent: $UA" -H "Referer: $REF" -o src/public/images/product-7.jpg https://offer.islamicbazar.com.bd/wp-content/uploads/2024/11/sofa06.jpg
curl -L -H "User-Agent: $UA" -H "Referer: $REF" -o src/public/images/product-9.jpg https://offer.islamicbazar.com.bd/wp-content/uploads/2024/10/f02.jpg
curl -L -H "User-Agent: $UA" -H "Referer: $REF" -o src/public/images/product-10.jpg https://offer.islamicbazar.com.bd/wp-content/uploads/2024/10/f01.jpg
# Product 8 was the generated one, I will skip it or copy if it exists
