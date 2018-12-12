class Api::NotebooksController < ApplicationController
  before_action :require_login

  def index
    @notebooks = current_user.notebooks
    render :index
  end

  def create
    @notebook = Notebook.new(notebook_params)
    @notebook.user_id = current_user.id

    if @notebook.save
      render :show
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def show
    @notebook = Notebook.find(params[:id])
    render :show
  end

  def update
    @notebook = Notebook.find(params[:id])

    if @notebook.update_attributes(notebook_params)
      render :show
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def destroy
    @notebook = Notebook.find(params[:id])
    @notebook.destroy
    render :show
  end

  def notebook_params
    params.require(:notebook).permit(:name)
  end
end