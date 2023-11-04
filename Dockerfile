FROM php:8.2-fpm

# Instalar las dependencias de PHP
RUN apt-get update && apt-get install -y \
    libpq-dev \
    zlib1g-dev \
    libzip-dev

# Instalar Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Configurar el directorio de trabajo
WORKDIR /var/www/html

# Copiar el código del proyecto
COPY . .

# Instalar las dependencias del proyecto
RUN composer install

# Compilar los assets del proyecto
RUN php artisan optimize

# Levantar el servidor web
CMD ["php-fpm"]
