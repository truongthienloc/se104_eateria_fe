# Eateria Management - SE104

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Development

### Clone code

To clone code from git repo, use this command:

```shell
git clone https://github.com/truongthienloc/se104_eateria_fe.git
```

After clone code successfully, use this command to install essential packages:

```shell
npm install
```

### Run code

Make *.env* file, copy all in *.env.example* file to *.env*.
Then, fill values to variables in *.env* file.

Use this command to run code in dev environment:

```shell
npm run dev
```

## Folder Structure

![Folder structure](/docs/folder_structure.png)

- components
    - Các components dùng chung cho nhiều pages nên được đặt trong thư mục components
    - Đặt tên cho components phải tường minh, dễ hiểu và viết hoa chữ cái đầu của Components. Ví dụ: SubFooter.tsx
- containers
    - Chứa các component được dùng để xử lí dữ liệu và không có chức năng render
- pages
    - Các page phải được khai báo tại thư mục pages
- layouts
    - Các layout được xử dụng trong website
- routes
    - Tất cả các routes điều hướng nên được đặt vào thư mục routes
- styles
    - Các bạn có thể sử dụng css hoặc sass theo dạng module, hoặc viết tất cả các css/sass vào thư mục styles
- helpers
    - Chứa các function hỗ trợ xử lí cho project
- services
    - Chứa các dịch vụ hỗ trợ cho project

## Production

Link production: https://4food.vercel.app/

***Chú ý:*** Vì API server đang sử dụng bản miễn phí, nên sẽ có thể mất vài phút để khởi động khi truy cập website.

### Build code

### Deploy