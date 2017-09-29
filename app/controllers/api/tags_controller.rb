class Api::TagsController < ApplicationController
  before_action :require_logged_in

  def index
    @tags = current_user.tags.sort_by { |tag| tag.name }
    render :index
  end

  def show
    @tag = current_user.tags.where(id: params[:id]).first
    if @tag
      render :show
    else
      render json: ["This is not the tag you are looking for"], status: 404
    end
  end

  def create
    @tag = Tag.new(tag_params)
    @tag.user_id = current_user.id

    if @tag.save
      render :show
    else
      render json: @tag.errors.full_messages, status: 400
    end
  end

  def update
    @tag = current_user.tags.where(id: params[:id]).first
    if @tag
      if @tag.update(tag_params)
        render :show
      else
        render json: @tag.errors.full_messages, status: 400
      end
    else
      render json: ["That tag does not exist"], status: 404
    end
  end

  def destroy
    @tag = current_user.tags.where(id: params[:id]).first
    if @tag
      @tag.destroy
      render :show
    else
      render json: ["I can't let you do that to such an innocent little tag"], status: 401
    end
  end

  private

  def tag_params
    return params.require(:tag).permit(:name)
  end
end
