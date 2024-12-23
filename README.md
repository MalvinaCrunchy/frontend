This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Для авторизации
в файле .env.local задать значения для переменныx
NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

Для генерации NEXTAUTH_SECRET можно использовать следующую команду:
node -e "console.log(require('crypto').randomBytes(32).toString('hex'));"

Для генерации GOOGLE_CLIENT_SECRET и GOOGLE_CLIENT_ID:
1. Зарегистрировать проект в Google Developer Console

    1) Зайти на сайт [console.cloud.google.com](https://console.cloud.google.com)
    2) В верхней части экрана выбрать "Select a project" 
    3) Нажать на кнопку "New Project".
    4) Ввести имя проекта и нажать на кнопу "Create"

2. Создать учетные данные (Credentials)
    1) В меню слева перейти в APIs & Services далее в Credentials.
    2) Нажать "Create Credentials" и выберите "OAuth Client ID".
    3) Нажать на кнопку Configure consent screen, и задать: 
        тип приложения: External 
        Application name: Имя приложения (например online-shop)
        User support email: Электронная почта для связи с пользователями. (для тестов-свою gmail почту)
        Developer contact email: Электронная почта для получения уведомлений от Google.(для тестов-свою gmail почту)
        нажать все save and continue, в конце back to dashboard
    Опять перейти в "Create Credentials" и выберите "OAuth Client ID"
        Application type - Web application
        name -  Имя приложения (например online-shop)
        Нажать  ADD URI для Authorized JavaScript origins и Authorized redirect URIs и задать
            в поле Authorized JavaScript origins - задать значение http://localhost:3000
            в поле Authorized redirect URIs - задать значение http://localhost:3000/api/auth/callback/google
        Нажать create

