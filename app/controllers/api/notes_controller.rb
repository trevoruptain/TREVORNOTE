class Api::NotesController < ApplicationController
  before_action :require_logged_in

  def index
    @notes = current_user.notes
    render :index
  end

  def show
    @note = Note.find(params[:id])
  end

  def create
    @note = Note.create!(note_params)
    render :show
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
      render json: ["That note doesn't exist"], status: 400
    end
  end

  private

  def note_params
    params.require(:note).permit(:notebook_id, :title, :body)
  end
end
