class Api::NotesController < ApplicationController
  before_action :require_logged_in

  def index
    @notes = []
    if params[:notebook_id]
      notebook = current_user.notebooks.where(id: params[:notebook_id]).first
      @notes = notebook ? notebook.notes : []
    elsif params[:tag_id]
      tag = current_user.tags.where(id: params[:tag_id]).first
      @notes = tag ? tag.notes : []
    else
      @notes = current_user.notes
    end
  end

  def show
    @note = current_user.notes.where(id: params[:id]).first

    if @note
      render :show
    else
      render json: ["That doesn't belong to you"], status: 404
    end
  end

  def create
    @note = Note.create!(note_params)
    @note.user_id = current_user.id
    @note.body = ""

    if @note.save
      render :show
    else
      render json: @note.errors.full_messages, status: 400
    end
  end

  def update
    @note = current_user.notes.where(id: params[:id]).first
    if @note
      if @note.update(note_params)
        render :show
      else
        render json: @note.errors.full_messages, status: 400
      end
    else
      render json: ["That note does not exist"], status: 404
    end
  end

  def destroy
    @note = current_user.notes.where(id: params[:id]).first
    if @note
      @note.destroy
      render :show
    else
      render json: ["That note does not exist"], status: 400
    end
  end

  private

  def note_params
    params.require(:note).permit(:notebook_id, :title, :body)
  end
end
