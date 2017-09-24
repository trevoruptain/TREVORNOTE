class Api::NotebooksController < ApplicationController
  before_action :require_logged_in

  def index
    @notebooks = current_user.notebooks
    render :index
  end

  def show
    @notebook = current_user.notebooks.where(id: params[:id]).first

    if @notebook
      render :show
    else
      render json: ["This is not the notebook you are looking for"], status: 404
    end
  end

  def create
    @notebook = Notebook.new(notebook_params)
    @notebook.user_id = current_user.id

    if @notebook.save
      render :show
    else
      render json: @notebook.errors.full_messages, status: 400
    end
  end

  def update
    @notebook = current_user.notebooks.where(id: params[:id]).first

    if @notebook
      if @notebook.update(notebook_params)
        render :show
      else
        render json: @notebook.errors.full_messages, status: 400
      end
    else
      render json: ["That's not yours"], status: 404
    end
  end

  def destroy
    @notebook = current_user.notebooks.where(id: params[:id]).first

    if @notebook
      @notebook.destroy
      render :show
    else
      render json: ["I'm sorry, I can't let you do that"], status: 401
    end
  end

  private

  def notebook_params
    params.require(:notebook).permit(:name)
  end
end
