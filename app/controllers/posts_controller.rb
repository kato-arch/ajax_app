class PostsController < ApplicationController
  def index
    @posts = Post.all.order(id: "DESC")
  end
  def create
    post = Post.create(content: params[:content], checked: false)
    render json:{ post: post }
    # 非同期通信を行う上で、サーバーサイドの実装内容は下記２点が必要
    # ①メモ作成時に未読の情報を保存する→エンドポイントを作成
    # ②レスポンスをJSONに変更したこと→レスポンスの設定
  end
  def checked
    post = Post.find(params[:id])
    if post.checked
      post.update(checked: false)
    else
      post.update(checked: true)
    end
    item = Post.find(params[:id])
    render json: { post: item }
  end

end