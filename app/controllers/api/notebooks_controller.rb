class Api::NotebooksController < ApplicationController
  # before_action :require_login

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
  end

  def update
  end

  def destroy
  end

  def notebook_params
    params.require(:notebook).permit(:name)
  end
end