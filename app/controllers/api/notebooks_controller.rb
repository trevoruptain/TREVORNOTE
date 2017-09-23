class Api::NotebooksController < ApplicationController
  before_action :require_logged_in

  def index
    @notebooks = current_user.notebooks
    render :index
  end

  def show
    @notebook = Notebook.find(params[:id])
  end

  def create
    @notebook = Notebook.create!(notebook_params)
    render :show
  end

  def destroy
    @notebook = notebook.find(params[:id])
    @notebook.destroy
  end

  private

  def notebook_params
    params.require(:notebook).permit(:user_id, :name)
  end
end
