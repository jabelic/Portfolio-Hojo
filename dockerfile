# ベースイメージを指定
FROM node:14.15.0-alpine

# node.js の環境変数を定義する
# 本番環境では production
ENV NODE_ENV=development


# 雛形を生成するのに必要なパッケージのインストール
RUN apk update && \
    npm install && \
    npm install -g npm && \
    npm install -g vue-cli

# ディレクトリを移動する
WORKDIR /home/user

# ポート3000番を開放する
EXPOSE 3000