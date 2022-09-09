文件说明:
    main.js 打包入口文件
    demo1: 打包多个文件，将多个文件打包到一起


使用步骤:
step1 npm init -y
step2 npm -i webpack webpack-cli -D
step3 npx webpack ./src/main.js --mode=development
      npx webpack ./src/main.js --mode=production