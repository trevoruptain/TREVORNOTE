class Api::TaggingsController < ApplicationController

  def create
    @tagging = Tagging.new(tagging_params)
    tag = Tag.find_by(name: params[:tagging][:tag_name])
    if !tag
      Tag.create(name: params[:tagging][:tag_name], user_id: current_user.id)
    end
    if @tagging.save
      render :show
    else
      render json: @tagging.errors.full_messages, status: 422
    end
  end

  def destroy
    @tagging = current_user.taggings.find_by(tag_name: params[:tagging][:tag_name], note_id: params[:tagging][:note_id])
    @tagging.destroy
    if not current_user.taggings.find_by(tag_name: params[:tagging][:tag_name])
      @tag = Tag.find_by(name: params[:tagging][:tag_name])
      @tag.destroy
    end
    render :show
  end

  private

  def tagging_params
    params.require(:tagging).permit(:note_id, :tag_name)
  end

end
